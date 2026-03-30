import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase-server";

interface BookingPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  slot_id?: string;
  datetime?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: BookingPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Ogiltig förfrågan." }, { status: 400 });
  }

  const { name, email, phone, service, slot_id, datetime, message } = body;

  if (!name?.trim()) {
    return NextResponse.json({ message: "Namn är obligatoriskt." }, { status: 400 });
  }
  if (!email?.trim() || !email.includes("@")) {
    return NextResponse.json({ message: "En giltig e-postadress krävs." }, { status: 400 });
  }

  let resolvedDate: string | null = null;
  let resolvedTime: string | null = null;

  // If a slot_id is provided, fetch the slot and mark it unavailable
  if (slot_id) {
    const { data: slot, error: slotError } = await getSupabaseAdmin()
      .from("time_slots")
      .select("id, date, start_time, is_available")
      .eq("id", slot_id)
      .single();

    if (slotError || !slot) {
      return NextResponse.json({ message: "Tidsluckan hittades inte." }, { status: 400 });
    }
    if (!slot.is_available) {
      return NextResponse.json({ message: "Tidsluckan är inte längre tillgänglig. Välj en annan tid." }, { status: 409 });
    }

    resolvedDate = slot.date;
    resolvedTime = slot.start_time;

    // Write booking row
    const { error: bookingError } = await getSupabaseAdmin().from("bookings").insert({
      slot_id,
      date: resolvedDate,
      start_time: resolvedTime,
      service: service ?? null,
      name,
      email,
      phone: phone ?? null,
      message: message ?? null,
      status: "pending",
    });

    if (bookingError) {
      console.error("Supabase booking error:", bookingError);
      return NextResponse.json({ message: "Bokning misslyckades. Försök igen." }, { status: 500 });
    }

    // Mark slot as unavailable
    await getSupabaseAdmin()
      .from("time_slots")
      .update({ is_available: false })
      .eq("id", slot_id);
  }

  const displayDatetime =
    resolvedDate && resolvedTime
      ? `${resolvedDate} kl. ${resolvedTime.slice(0, 5)}`
      : datetime ?? null;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const staffEmailText = [
    `Namn: ${name}`,
    `E-post: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    service ? `Behandling: ${service}` : null,
    displayDatetime ? `Tid: ${displayDatetime}` : null,
    message ? `Meddelande: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const confirmationRows = [
    service ? `Behandling: ${service}` : null,
    displayDatetime ? `Tid: ${displayDatetime}` : null,
    phone ? `Telefon: ${phone}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const customerEmailText = `Hej ${name}!

Tack för din bokningsförfrågan. Vi har mottagit den och återkommer med bekräftelse inom kort.

${confirmationRows ? `Dina uppgifter:\n${confirmationRows}\n\n` : ""}Behöver du ändra eller avboka? Kontakta oss på:
Telefon: 070-123 45 67
E-post: kontakt@wellness.se

Vi ser fram emot att välkomna dig!

Varma hälsningar,
Wellness Studio
Storgatan 12, 111 22 Stockholm`;

  const [staffResult, customerResult] = await Promise.all([
    resend.emails.send({
      from: "Boka massage <noreply@konstbyte.se>",
      to: process.env.BOOKING_EMAIL!,
      subject: `Ny bokningsförfrågan från ${name}`,
      text: staffEmailText,
    }),
    resend.emails.send({
      from: "Wellness Studio <noreply@konstbyte.se>",
      to: email,
      subject: "Vi har mottagit din bokningsförfrågan",
      text: customerEmailText,
    }),
  ]);

  if (staffResult.error) {
    console.error("Resend error (staff):", staffResult.error);
    return NextResponse.json(
      { message: "Kunde inte skicka e-post. Försök igen senare." },
      { status: 500 }
    );
  }
  if (customerResult.error) {
    console.error("Resend error (customer confirmation):", customerResult.error);
  }

  return NextResponse.json({ success: true });
}
