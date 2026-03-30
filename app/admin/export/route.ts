import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabaseAdmin } from "@/lib/supabase-server";

export async function GET() {
  // Verify admin token (belt-and-suspenders alongside middleware)
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { data, error } = await getSupabaseAdmin()
    .from("bookings")
    .select("id, date, start_time, service, name, email, phone, message, status, created_at")
    .order("date", { ascending: true })
    .order("start_time", { ascending: true });

  if (error) {
    return new NextResponse("Fel vid hämtning av bokningar.", { status: 500 });
  }

  const COLS = [
    "id", "date", "start_time", "service", "name",
    "email", "phone", "message", "status", "created_at",
  ] as const;

  const escape = (val: unknown) =>
    `"${String(val ?? "").replace(/"/g, '""')}"`;

  const rows = [
    COLS.join(","),
    ...(data ?? []).map((b) =>
      COLS.map((col) => escape(b[col])).join(",")
    ),
  ];

  const filename = `bokningar-${new Date().toISOString().split("T")[0]}.csv`;

  return new NextResponse(rows.join("\r\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
