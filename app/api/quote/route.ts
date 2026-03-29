import { NextResponse } from "next/server";
import { Resend } from "resend";

interface QuotePayload {
  name: string;
  company: string;
  email: string;
  employees?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: QuotePayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Ogiltig förfrågan." }, { status: 400 });
  }

  const { name, company, email, employees, message } = body;

  if (!name?.trim()) {
    return NextResponse.json({ message: "Namn är obligatoriskt." }, { status: 400 });
  }
  if (!company?.trim()) {
    return NextResponse.json({ message: "Företagsnamn är obligatoriskt." }, { status: 400 });
  }
  if (!email?.trim() || !email.includes("@")) {
    return NextResponse.json({ message: "En giltig e-postadress krävs." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const staffText = [
    `Ny offertförfrågan – Företagsmassage`,
    ``,
    `Namn: ${name}`,
    `Företag: ${company}`,
    `E-post: ${email}`,
    employees ? `Antal anställda: ${employees}` : null,
    message ? `Meddelande:\n${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const customerText = `Hej ${name}!

Tack för din offertförfrågan till Wellness Studio. Vi har mottagit era uppgifter och återkommer inom en arbetsdag med ett skräddarsytt förslag.

Ditt ärende:
Företag: ${company}${employees ? `\nAntal anställda: ${employees}` : ""}${message ? `\nMeddelande: ${message}` : ""}

Har du frågor i mellantiden? Kontakta oss gärna:
Telefon: 070-123 45 67
E-post: kontakt@wellness.se

Vi ser fram emot att samarbeta med ${company}!

Varma hälsningar,
Anna Lindgren
Wellness Studio
Storgatan 12, 111 22 Stockholm`;

  const [staffResult, customerResult] = await Promise.all([
    resend.emails.send({
      from: "Wellness Studio <noreply@konstbyte.se>",
      to: process.env.BOOKING_EMAIL!,
      subject: `Offertförfrågan från ${company} (${name})`,
      text: staffText,
    }),
    resend.emails.send({
      from: "Wellness Studio <noreply@konstbyte.se>",
      to: email,
      subject: "Vi har mottagit din offertförfrågan – Wellness Studio",
      text: customerText,
    }),
  ]);

  if (staffResult.error) {
    console.error("Resend error (staff quote):", staffResult.error);
    return NextResponse.json(
      { message: "Kunde inte skicka förfrågan. Försök igen eller ring oss direkt." },
      { status: 500 }
    );
  }

  if (customerResult.error) {
    console.error("Resend error (customer quote confirmation):", customerResult.error);
  }

  return NextResponse.json({ success: true });
}
