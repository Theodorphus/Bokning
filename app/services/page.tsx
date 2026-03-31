import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllServices } from "@/lib/services";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Behandlingar",
  description:
    "Utforska våra massagebehandlingar i Stockholm – avslappningsmassage, djupvävnadsmassage, sportmassage, gravidmassage och mer. Boka enkelt online.",
  alternates: { canonical: "https://wellness-studio.se/services" },
  openGraph: {
    title: "Behandlingar – Wellness Studio",
    description:
      "Professionell massage i Stockholm. Välj bland flera skräddarsydda behandlingar.",
    images: [{ url: "/images/bakgrund1.png", width: 1200, height: 630 }],
  },
};

const slugToLocalImage: Record<string, string> = {
  avslappningsmassage: "/images/avslappning.png",
  djupvavnadsmassage: "/images/djupvavnad.png",
  sportmassage: "/images/sport.png",
  gravidmassage: "/images/gravid.png",
  "hot-stone-massage": "/images/studio2.png",
  triggerpoint: "/images/triggerpoint.png",
};

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-choc-900 py-20 sm:py-28">
        <Image
          src="/images/hero.png"
          alt="Massage behandlingar hos Wellness Studio"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-choc-900/65 to-choc-900/88" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-wood-300">
            Behandlingar
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Välj din behandling
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-choc-200">
            Vi erbjuder ett brett utbud av professionella massagebehandlingar –
            alla skräddarsydda efter dina behov.
          </p>
          <Link
            href="/booking"
            className="mt-10 inline-block rounded-full bg-wood-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500"
          >
            Boka direkt
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            eyebrow="Alla behandlingar"
            title="Hitta rätt behandling för dig"
            body="Osäker på vilken behandling som passar? Kontakta oss så hjälper vi dig välja rätt."
          />

          {/* Intro text */}
          <div className="mt-8 mx-auto max-w-2xl text-center">
            <p className="text-choc-700 leading-7">
              Varje kropp är unik. Hos oss börjar varje besök med en kort
              genomgång av dina behov och önskemål – så att behandlingen blir
              precis rätt för just dig, oavsett om du söker djup avkoppling,
              smärtlindring eller ökad rörlighet.
            </p>
          </div>

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand-100 transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden bg-sand-100">
                    <Image
                      src={
                        service.image_url ||
                        (slugToLocalImage[service.slug] ?? "/images/bakgrund2.png")
                      }
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-semibold text-choc-900 group-hover:text-wood-600 transition-colors">
                      {service.title}
                    </h2>
                    {service.short_description && (
                      <p className="mt-2 flex-1 text-sm leading-7 text-choc-700 line-clamp-3">
                        {service.short_description}
                      </p>
                    )}
                    <div className="mt-5 flex items-center justify-between border-t border-sand-100 pt-4">
                      {service.price ? (
                        <span className="text-sm font-semibold text-wood-600">
                          {service.price}
                        </span>
                      ) : (
                        <span />
                      )}
                      <span className="rounded-full bg-wood-50 px-3 py-1 text-xs font-medium text-wood-600 group-hover:bg-wood-100 transition-colors">
                        Läs mer →
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rekommenderad behandling */}
      <section className="bg-sand-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            eyebrow="Osäker på vad du behöver?"
            title="Välj efter ditt mål"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                goal: "Jag vill slappna av",
                description: "Perfekt efter en stressig period. Lugna rörelser, mjukt tryck och fullständig ro.",
                treatments: ["Avslappningsmassage", "Hot stone massage"],
                image: "/images/avslappning.png",
                href: "/services/avslappningsmassage",
              },
              {
                goal: "Jag har ont i kroppen",
                description: "Arbetar djupare i musklerna för att lösa kroniska spänningar, ryggvärk och stelhet.",
                treatments: ["Djupvävnadsmassage", "Trigger point-terapi"],
                image: "/images/djupvavnad.png",
                href: "/services/djupvavnadsmassage",
              },
              {
                goal: "Jag är aktiv / idrottare",
                description: "Optimerar återhämtning, förebygger skador och ökar rörligheten inför eller efter träning.",
                treatments: ["Sportmassage", "Djupvävnadsmassage"],
                image: "/images/sport.png",
                href: "/services/sportmassage",
              },
            ].map((r) => (
              <Link
                key={r.goal}
                href={r.href}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-sand-100 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.goal}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-choc-900/60 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-sm font-bold text-white">
                    {r.goal}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-6 text-choc-700">{r.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {r.treatments.map((t) => (
                      <li key={t} className="rounded-full bg-wood-50 px-3 py-1 text-xs font-medium text-wood-700">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-block self-start rounded-full bg-wood-600 px-5 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-wood-500">
                    Läs mer →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-2xl font-bold text-choc-900">Redo att boka?</h2>
          <p className="mt-3 text-choc-700">
            Välj behandling och skicka din förfrågan – vi återkommer med en bekräftelse.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-wood-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500"
            >
              Boka din tid
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-sand-300 bg-white px-8 py-4 text-sm font-semibold text-choc-700 transition-colors hover:bg-sand-50"
            >
              Om terapeuten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
