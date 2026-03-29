import Link from "next/link";
import type { Metadata } from "next";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Wellness Studio – Professionell massage i Stockholm",
  description:
    "Boka professionell massage i Stockholm. Avslappningsmassage, djupvävnadsmassage, sportmassage och mer. Enkel bokning online.",
  openGraph: {
    title: "Wellness Studio – Professionell massage i Stockholm",
    description:
      "Boka professionell massage i Stockholm. Avslappningsmassage, djupvävnadsmassage, sportmassage och mer.",
    type: "website",
  },
};

const usps = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Certifierad terapeut",
    text: "Utbildad och certifierad massageterapeut med över 10 års erfarenhet.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Flexibla tider",
    text: "Öppet måndag–lördag. Kvällstider tillgängliga för dig med hektisk vardag.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Skräddarsydd behandling",
    text: "Varje session anpassas efter dina behov, spänningar och önskemål.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Centralt i Stockholm",
    text: "Lugn och välkomnande studio på Storgatan 12, nära tunnelbana och parkering.",
  },
];

const testimonials = [
  {
    name: "Emma S.",
    location: "Stockholm",
    text: "Fantastisk massage! Kände mig helt ny efteråt. Otroligt skicklig på att hitta spänningar och lösa upp dem. Kommer definitivt tillbaka.",
    initials: "ES",
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Johan M.",
    location: "Solna",
    text: "Bokade en djupvävnadsmassage och det var precis vad jag behövde. Professionell, omtänksam och med perfekt trycknivå. Toppen!",
    initials: "JM",
    color: "bg-stone-200 text-stone-700",
  },
  {
    name: "Maria K.",
    location: "Lidingö",
    text: "Lugn och fin lokal, och behandlingen översteg mina förväntningar. Perfekt avkoppling efter en stressig period. Varmt rekommenderat.",
    initials: "MK",
    color: "bg-rose-200 text-rose-800",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-rose-400 text-rose-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default async function HomePage() {
  const services = await getAllServices();
  const featuredServices = services.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-rose-50 to-white py-24 sm:py-32">
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-stone-200/60 blur-2xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            Välkommen till Wellness Studio
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
            Hitta din balans.<br className="hidden sm:block" /> Känn skillnaden.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Professionell massage i hjärtat av Stockholm. Vi anpassar varje behandling
            efter just dina behov — oavsett om du söker avkoppling eller smärtlindring.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/booking"
              className="rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
            >
              Boka din tid
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-stone-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-stone-50"
            >
              Se alla behandlingar
            </Link>
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
              Varför välja oss
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Omsorg i varje detalj
            </h2>
          </div>
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
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
                Behandlingar
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Populära behandlingar
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-rose-600 hover:text-rose-500"
            >
              Se alla behandlingar →
            </Link>
          </div>

          {featuredServices.length > 0 ? (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-stone-100 transition-shadow hover:shadow-md"
                  >
                    <h3 className="text-base font-semibold text-slate-800 group-hover:text-rose-600 transition-colors">
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
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Avslappningsmassage", "Djupvävnadsmassage", "Sportmassage"].map((name) => (
                <li key={name} className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-stone-100">
                  <h3 className="text-base font-semibold text-slate-800">{name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-slate-500">
                    En skräddarsydd behandling för ditt välmående och din återhämtning.
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 text-xs font-medium text-rose-600 hover:text-rose-500"
                  >
                    Läs mer →
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

      {/* Testimonials */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
              Kundrecensioner
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Vad våra kunder säger
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Vi är stolta över att ha hjälpt hundratals kunder till bättre välmående.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="flex flex-col rounded-2xl bg-stone-50 p-7 ring-1 ring-stone-100"
              >
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm text-slate-500">
            <Link href="/about" className="font-medium text-rose-600 hover:text-rose-500">
              Läs fler omdömen →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rose-600 to-rose-500 py-20">
        <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Redo för din nästa behandling?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-rose-100">
            Boka enkelt online — välj behandling, ange din önskade tid och vi återkommer
            med en bekräftelse.
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
  );
}
