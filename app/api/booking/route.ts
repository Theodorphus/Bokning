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

  const staffEmailText = [
    `Namn: ${name}`,
    `E-post: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    service ? `Behandling: ${service}` : null,
    datetime ? `Önskad tid: ${datetime}` : null,
    message ? `Meddelande: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const confirmationRows = [
    service ? `Behandling: ${service}` : null,
    datetime ? `Önskad tid: ${datetime}` : null,
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
