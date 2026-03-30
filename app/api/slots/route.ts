import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-server";

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");

  // If date param → return slots for that specific date
  if (date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
    }
    const { data, error } = await getSupabaseAdmin()
      .from("time_slots")
      .select("id, start_time, duration_minutes, service_id")
      .eq("date", date)
      .eq("is_available", true)
      .order("start_time");

    if (error) return NextResponse.json({ error: "DB error" }, { status: 500 });
    return NextResponse.json({ slots: data });
  }

  // No date param → return ALL available slots (date + time), grouped for calendar
  const { data, error } = await getSupabaseAdmin()
    .from("time_slots")
    .select("id, date, start_time, duration_minutes, service_id")
    .eq("is_available", true)
    .order("date")
    .order("start_time");

  if (error) return NextResponse.json({ error: "DB error" }, { status: 500 });
  return NextResponse.json({ slots: data });
}
