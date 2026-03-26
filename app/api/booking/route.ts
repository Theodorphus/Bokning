import { NextResponse } from "next/server";
import { Resend } from "resend";

interface BookingPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  datetime?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: BookingPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Ogiltig förfrågan." },
      { status: 400 }
    );
  }

  const { name, email, phone, service, datetime, message } = body;

  if (!name?.trim()) {
    return NextResponse.json(
      { message: "Namn är obligatoriskt." },
      { status: 400 }
    );
  }

  if (!email?.trim() || !email.includes("@")) {
    return NextResponse.json(
      { message: "En giltig e-postadress krävs." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const emailText = [
    `Namn: ${name}`,
    `E-post: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    service ? `Behandling: ${service}` : null,
    datetime ? `Önskad tid: ${datetime}` : null,
    message ? `Meddelande: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from: "Boka massage <noreply@konstbyte.se>",
    to: process.env.BOOKING_EMAIL!,
    subject: `Ny bokningsförfrågan från ${name}`,
    text: emailText,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { message: "Kunde inte skicka e-post. Försök igen senare." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
