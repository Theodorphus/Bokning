"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSupabaseAdmin } from "@/lib/supabase-server";

// ── Auth ─────────────────────────────────────────────────────────────────

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData
) {
  const password = formData.get("password") as string;

  if (password === process.env.ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("admin_token", process.env.ADMIN_TOKEN!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    redirect("/admin");
  }

  return { error: "Fel lösenord. Försök igen." };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
  redirect("/admin/login");
}

// ── Bookings ─────────────────────────────────────────────────────────────

export async function markBookingCompleted(id: string) {
  const { error } = await getSupabaseAdmin()
    .from("bookings")
    .update({ status: "completed" })
    .eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/admin");
}

// ── Time slots ───────────────────────────────────────────────────────────

export async function addTimeSlot(
  _prevState: { error: string; success: boolean } | null,
  formData: FormData
) {
  const date = formData.get("date") as string;
  const start_time = formData.get("start_time") as string;
  const duration_minutes =
    parseInt(formData.get("duration_minutes") as string, 10) || 60;
  const service_id = (formData.get("service_id") as string) || null;

  if (!date || !start_time) {
    return { error: "Datum och tid är obligatoriska.", success: false };
  }

  const { error } = await getSupabaseAdmin().from("time_slots").insert({
    date,
    start_time,
    duration_minutes,
    service_id,
    is_available: true,
  });

  if (error) return { error: error.message, success: false };

  revalidatePath("/admin");
  return { error: "", success: true };
}

export async function deleteTimeSlot(id: string) {
  const { error } = await getSupabaseAdmin()
    .from("time_slots")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/admin");
}
