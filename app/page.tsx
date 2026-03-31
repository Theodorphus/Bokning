import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CorporateMassageSection from "@/components/CorporateMassageSection";
import GiftCardSection from "@/components/GiftCardSection";
import StudioSection from "@/components/StudioSection";
import AboutMeSection from "@/components/AboutMeSection";
import InstagramSection from "@/components/InstagramSection";
import HowItWorks from "@/components/HowItWorks";
import SectionHeader from "@/components/ui/SectionHeader";
import { getPageContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Professionell massage i Stockholm",
  description:
    "Boka professionell massage i Stockholm. Avslappningsmassage, djupvävnadsmassage, sportmassage och mer. Enkel bokning online.",
  alternates: { canonical: "https://wellness-studio.se" },
  openGraph: {
    title: "Wellness Studio – Professionell massage i Stockholm",
    description:
      "Boka professionell massage i Stockholm. Skräddarsydda behandlingar av certifierad terapeut.",
    images: [{ url: "/images/hero.png", width: 1200, height: 630 }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://wellness-studio.se",
  name: "Wellness Studio",
  description: "Professionell massage i Stockholm",
  url: "https://wellness-studio.se",
  telephone: "+46701234567",
  email: "kontakt@wellness.se",
  image: "https://wellness-studio.se/images/hero.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Storgatan 12",
    addressLocality: "Stockholm",
    postalCode: "111 22",
    addressCountry: "SE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 59.3293, longitude: 18.0686 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "17:00" },
  ],
  priceRange: "$$",
  currenciesAccepted: "SEK",
  paymentAccepted: "Swish, Kreditkort, Klarna, Presentkort",
};

const usps = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Certifierad terapeut",
    text: "Diplomerad massageterapeut med över 10 års erfarenhet.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Flexibla tider",
    text: "Öppet måndag–lördag. Kvällstider för dig med hektisk vardag.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Skräddarsydd behandling",
    text: "Varje session anpassas efter dina behov och önskemål.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Centralt i Stockholm",
    text: "Storgatan 12 – nära tunnelbana och parkering.",
  },
];

export default async function HomePage() {
  const homepageContent = await getPageContent("homepage");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div>
        {/* 1. Hero */}
        <HeroSection
          title={homepageContent.hero_title}
          subtitle={homepageContent.hero_subtitle}
          image={homepageContent.hero_image}
        />

        {/* 2. USP */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader eyebrow="Varför välja oss" title="Omsorg i varje detalj" />
            <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {usps.map((usp) => (
                <li key={usp.title} className="flex flex-col items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wood-50 text-wood-600">
                    {usp.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-choc-900">{usp.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-choc-700">{usp.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Services */}
        <ServicesSection />

        {/* 4. How it works */}
        <HowItWorks />

        {/* 5. Studio */}
        <StudioSection />

        {/* 6. About therapist */}
        <AboutMeSection />

        {/* 7. Corporate */}
        <CorporateMassageSection />

        {/* 9. Gift cards */}
        <GiftCardSection />

        {/* 10. Instagram */}
        <InstagramSection />

        {/* 11. Final CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-wood-600 to-wood-500 py-20">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Redo för din nästa behandling?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-wood-100">
              Boka enkelt online – välj behandling, ange önskad tid och vi
              återkommer med en bekräftelse.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/booking"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-wood-600 shadow-md transition-colors hover:bg-wood-50"
              >
                Boka din tid nu
              </Link>
              <Link
                href="/gift-cards"
                className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ge bort ett presentkort
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
