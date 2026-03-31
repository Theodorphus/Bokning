import type { Metadata } from "next";
import HeroBooking from "@/components/HeroBooking";
import BookingClient from "@/components/BookingClient";
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
    images: [{ url: "/images/hero.png", width: 1200, height: 630 }],
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

        {/* Vad händer efter bokning? */}
        <section className="bg-sand-50 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-wood-500">
                Efter din bokning
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-choc-800 sm:text-4xl">
                Vad händer härnäst?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-choc-600">
                Vi vill att du ska känna dig trygg hela vägen från bokning till
                avslutad behandling.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "📩",
                  title: "Bokningsbekräftelse",
                  text: "Du får ett e-postmeddelande med din bokningsinformation inom några minuter.",
                },
                {
                  icon: "⏰",
                  title: "Påminnelse dagen innan",
                  text: "Vi skickar en påminnelse kvällen innan så att du inte missar din tid.",
                },
                {
                  icon: "🏠",
                  title: "Välkommen till studion",
                  text: "Kom gärna 5 minuter tidigt. Vi bjuder på vatten och en stund av lugn innan behandlingen.",
                },
                {
                  icon: "💆",
                  title: "Njut av behandlingen",
                  text: "Terapeuten tar emot dig, går igenom eventuella önskemål och du slipper tänka på något annat.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start gap-4 rounded-2xl bg-white p-7 ring-1 ring-sand-100"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wood-50 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-choc-800">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-choc-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PaymentOptions />
        <CancellationPolicy />
        <FAQ />
      </div>
    </>
  );
}
