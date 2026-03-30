import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase-server";

interface BookPayload {
  slot_id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: BookPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Ogiltig förfrågan." }, { status: 400 });
  }

  const { slot_id, name, email, phone, service, message } = body;

  // Validate required fields
  if (!slot_id) {
    return NextResponse.json({ message: "Ingen tid vald." }, { status: 400 });
  }
  if (!name?.trim()) {
    return NextResponse.json({ message: "Namn är obligatoriskt." }, { status: 400 });
  }
  if (!email?.trim() || !email.includes("@")) {
    return NextResponse.json({ message: "En giltig e-postadress krävs." }, { status: 400 });
  }

  const db = getSupabaseAdmin();

  // 1. Fetch and verify slot is still available
  const { data: slot, error: slotError } = await db
    .from("time_slots")
    .select("id, date, start_time, is_available")
    .eq("id", slot_id)
    .single();

  if (slotError || !slot) {
    return NextResponse.json({ message: "Tidsluckan hittades inte." }, { status: 404 });
  }
  if (!slot.is_available) {
    return NextResponse.json(
      { message: "Den valda tiden är inte längre tillgänglig. Välj en annan tid." },
      { status: 409 }
    );
  }

  // 2. Insert booking
  const { error: bookingError } = await db.from("bookings").insert({
    slot_id,
    date: slot.date,
    start_time: slot.start_time,
    service: service ?? null,
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() ?? null,
    message: message?.trim() ?? null,
    status: "pending",
  });

  if (bookingError) {
    console.error("Booking insert error:", bookingError);
    return NextResponse.json({ message: "Bokning misslyckades. Försök igen." }, { status: 500 });
  }

  // 3. Mark slot as unavailable
  const { error: updateError } = await db
    .from("time_slots")
    .update({ is_available: false })
    .eq("id", slot_id);

  if (updateError) {
    console.error("Slot update error:", updateError);
    // Booking was created — don't fail the request, just log
  }

  // 4. Send emails via Resend
  const displayDate = new Date(slot.date + "T00:00:00").toLocaleDateString("sv-SE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const displayTime = slot.start_time.slice(0, 5);

  const resend = new Resend(process.env.RESEND_API_KEY);

  await Promise.allSettled([
    // Staff notification
    resend.emails.send({
      from: "Boka massage <noreply@konstbyte.se>",
      to: process.env.BOOKING_EMAIL!,
      subject: `Ny bokning – ${name} – ${displayDate} kl. ${displayTime}`,
      text: [
        `Ny bokningsförfrågan!`,
        ``,
        `Namn: ${name}`,
        `E-post: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        service ? `Behandling: ${service}` : null,
        `Datum: ${displayDate}`,
        `Tid: kl. ${displayTime}`,
        message ? `Meddelande: ${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    }),

    // Customer confirmation
    resend.emails.send({
      from: "Wellness Studio <noreply@konstbyte.se>",
      to: email,
      subject: "Din bokningsförfrågan är mottagen – Wellness Studio",
      text: [
        `Hej ${name}!`,
        ``,
        `Tack för din bokningsförfrågan. Vi har mottagit den och återkommer med bekräftelse inom kort.`,
        ``,
        `Dina uppgifter:`,
        service ? `Behandling: ${service}` : null,
        `Datum: ${displayDate}`,
        `Tid: kl. ${displayTime}`,
        ``,
        `Behöver du ändra eller avboka? Kontakta oss minst 24 timmar innan:`,
        `Telefon: 070-123 45 67`,
        `E-post: kontakt@wellness.se`,
        ``,
        `Vi ser fram emot att välkomna dig!`,
        ``,
        `Varma hälsningar,`,
        `Wellness Studio`,
        `Storgatan 12, 111 22 Stockholm`,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  ]);

  return NextResponse.json({
    success: true,
    booking: {
      date: displayDate,
      time: displayTime,
      service: service ?? null,
    },
  });
}
