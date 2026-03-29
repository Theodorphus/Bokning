import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllServices } from "@/lib/services";
import HowItWorks from "@/components/HowItWorks";
import StudioSection from "@/components/StudioSection";
import Testimonials from "@/components/Testimonials";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Professionell massage i Stockholm",
  description:
    "Boka professionell massage i Stockholm. Avslappningsmassage, djupvävnadsmassage, sportmassage och mer. Enkel bokning online.",
  alternates: { canonical: "https://wellness-studio.se" },
  openGraph: {
    title: "Wellness Studio – Professionell massage i Stockholm",
    description:
      "Boka professionell massage i Stockholm. Skräddarsydda behandlingar av certifierad terapeut.",
    images: [{ url: "https://picsum.photos/seed/spa-hero/1200/630", width: 1200, height: 630 }],
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
  image: "https://picsum.photos/seed/spa-hero/1200/630",
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
  const services = await getAllServices();
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-36">
          {/* Background image */}
          <Image
            src="https://picsum.photos/seed/massage-hero/1600/900"
            alt="Avkopplande massage i Wellness Studio"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-300">
              Välkommen till Wellness Studio
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hitta din balans.<br className="hidden sm:block" /> Känn skillnaden.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Professionell massage i hjärtat av Stockholm. Vi anpassar varje behandling
              efter just dina behov – oavsett om du söker avkoppling eller smärtlindring.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/booking"
                className="rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Boka din tid
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Se alla behandlingar
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
            <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* USP */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader eyebrow="Varför välja oss" title="Omsorg i varje detalj" />
            <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {usps.map((usp) => (
                <li key={usp.title} className="flex flex-col items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    {usp.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-800">{usp.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{usp.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Featured services */}
        <section className="bg-stone-50 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader eyebrow="Behandlingar" title="Populära behandlingar" center={false} />
              <Link href="/services" className="flex-shrink-0 text-sm font-semibold text-rose-600 hover:text-rose-500">
                Se alla behandlingar →
              </Link>
            </div>

            {featuredServices.length > 0 ? (
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuredServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-100 transition-shadow hover:shadow-md"
                    >
                      <div className="relative aspect-video overflow-hidden bg-stone-100">
                        <Image
                          src={
                            service.serviceFields.image?.sourceUrl ||
                            `https://picsum.photos/seed/${service.slug}/600/400`
                          }
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-semibold text-slate-800 transition-colors group-hover:text-rose-600">
                          {service.title}
                        </h3>
                        {service.serviceFields.shortDescription && (
                          <p className="mt-2 flex-1 text-sm leading-7 text-slate-600 line-clamp-3">
                            {service.serviceFields.shortDescription}
                          </p>
                        )}
                        <div className="mt-5 flex items-center justify-between">
                          {service.serviceFields.price && (
                            <span className="text-sm font-semibold text-rose-600">
                              {service.serviceFields.price}
                            </span>
                          )}
                          <span className="text-xs font-medium text-slate-400 group-hover:text-rose-500 transition-colors">
                            Läs mer →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Avslappningsmassage", seed: "relaxation", desc: "Helkroppsmassage med mjuka rörelser för djup avkoppling och stressreduktion." },
                  { name: "Djupvävnadsmassage", seed: "deep-tissue", desc: "Intensivare massage som når djupare muskelvävnader och löser upp kroniska spänningar." },
                  { name: "Sportmassage", seed: "sports", desc: "Anpassad massage för aktiva – förbättrar återhämtning och förebygger skador." },
                ].map((s) => (
                  <li key={s.name}>
                    <Link
                      href="/services"
                      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-100 transition-shadow hover:shadow-md"
                    >
                      <div className="relative aspect-video overflow-hidden bg-stone-100">
                        <Image
                          src={`https://picsum.photos/seed/${s.seed}/600/400`}
                          alt={s.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-semibold text-slate-800 transition-colors group-hover:text-rose-600">{s.name}</h3>
                        <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">{s.desc}</p>
                        <span className="mt-5 text-xs font-medium text-slate-400 group-hover:text-rose-500 transition-colors">
                          Läs mer →
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10 text-center">
              <Link
                href="/booking"
                className="inline-block rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
              >
                Boka en behandling
              </Link>
            </div>
          </div>
        </section>

        <HowItWorks />
        <StudioSection />
        <Testimonials limit={3} bg="white" />

        {/* CTA banner */}
        <section className="relative overflow-hidden bg-gradient-to-r from-rose-600 to-rose-500 py-20">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Redo för din nästa behandling?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-rose-100">
              Boka enkelt online – välj behandling, ange önskad tid och vi
              återkommer med en bekräftelse.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/booking"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-rose-600 shadow-md transition-colors hover:bg-rose-50"
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
