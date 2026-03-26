import type { Metadata } from "next";
import HeroBooking from "@/components/HeroBooking";
import BookingClient from "@/components/BookingClient";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import PaymentOptions from "@/components/PaymentOptions";
import CancellationPolicy from "@/components/CancellationPolicy";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Boka massage",
  description:
    "Boka massage direkt online. Välj behandling, tid och skicka din förfrågan.",
  openGraph: {
    title: "Boka massage – Wellness Studio",
    description:
      "Boka massage direkt online. Välj behandling, tid och skicka din förfrågan.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Wellness Studio",
  description: "Professionell massage i Stockholm",
  url: "https://wellness.se",
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

export default async function BookingPage() {
  const services = await getAllServices();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        <Testimonials />
        <PaymentOptions />
        <CancellationPolicy />
        <FAQ />
      </div>
    </>
  );
}
