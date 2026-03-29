import type { Metadata } from "next";
import HeroBooking from "@/components/HeroBooking";
import BookingClient from "@/components/BookingClient";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import PaymentOptions from "@/components/PaymentOptions";
import CancellationPolicy from "@/components/CancellationPolicy";
import HowItWorks from "@/components/HowItWorks";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Boka massage",
  description:
    "Boka massage direkt online hos Wellness Studio i Stockholm. Välj behandling, ange önskad tid och skicka din förfrågan – enkelt och snabbt.",
  alternates: { canonical: "https://wellness-studio.se/booking" },
  openGraph: {
    title: "Boka massage – Wellness Studio",
    description:
      "Boka massage direkt online. Välj behandling, tid och skicka din förfrågan.",
    images: [{ url: "https://picsum.photos/seed/booking-hero/1200/630", width: 1200, height: 630 }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Wellness Studio",
  description: "Professionell massage i Stockholm",
  url: "https://wellness-studio.se",
  telephone: "+46701234567",
  email: "kontakt@wellness.se",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Storgatan 12",
    addressLocality: "Stockholm",
    postalCode: "111 22",
    addressCountry: "SE",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "17:00" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hur bokar jag en tid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fyll i formuläret på bokningssidan med ditt namn, e-post, önskad behandling och tid. Vi återkommer med en bekräftelse inom kort.",
      },
    },
    {
      "@type": "Question",
      name: "Hur lång tid tar en behandling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beroende på behandling varierar det från 30 minuter upp till 90 minuter. Se respektive behandling för mer information.",
      },
    },
    {
      "@type": "Question",
      name: "Vilka betalningsmetoder accepterar ni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vi accepterar Swish, kreditkort (Visa/Mastercard), Klarna och presentkort. Betalning sker på plats efter behandlingen.",
      },
    },
    {
      "@type": "Question",
      name: "Vad gäller vid avbokning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avbokning är kostnadsfri upp till 24 timmar innan behandlingen. Senare avbokning debiteras 50% av behandlingspriset.",
      },
    },
  ],
};

export default async function BookingPage() {
  const services = await getAllServices();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div>
        <HeroBooking />
        <section
          id="booking-form"
          className="mx-auto max-w-5xl px-6 py-16"
          aria-label="Bokningssektion"
        >
          <BookingClient services={services} />
        </section>
        <HowItWorks />
        <Testimonials limit={3} />
        <PaymentOptions />
        <CancellationPolicy />
        <FAQ />
      </div>
    </>
  );
}
