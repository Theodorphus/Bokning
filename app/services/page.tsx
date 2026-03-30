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
  "hot-stone-massage": "/images/studio.png",
  triggerpoint: "/images/triggerpoint.png",
};

const fallbackServices = [
  { slug: "#", title: "Avslappningsmassage", shortDescription: "Helkroppsmassage med mjuka, lugna rörelser som löser upp spänningar och sänker stressnivån. Perfekt för återhämtning.", price: "från 695 kr", image: "/images/avslappning.png" },
  { slug: "#", title: "Djupvävnadsmassage", shortDescription: "Intensivare massage som arbetar djupare i musklerna för att lösa upp kroniska spänningar och smärta.", price: "från 795 kr", image: "/images/djupvavnad.png" },
  { slug: "#", title: "Sportmassage", shortDescription: "Anpassad för aktiva och idrottare. Förbättrar återhämtning, rörlighet och förebygger skador.", price: "från 795 kr", image: "/images/sport.png" },
  { slug: "#", title: "Gravidmassage", shortDescription: "Skonsam massage anpassad för gravida. Minskar ryggvärk, svullnad och ger välbehövlig avkoppling.", price: "från 795 kr", image: "/images/gravid.png" },
  { slug: "#", title: "Hot stone massage", shortDescription: "Varma vulkanstenar kombineras med klassisk massage för djup avkoppling och ökad cirkulation.", price: "från 895 kr", image: "/images/studio.png" },
  { slug: "#", title: "Trigger point-terapi", shortDescription: "Riktad behandling av ömma punkter i musklerna. Effektiv mot kronisk smärta och spänningshuvudvärk.", price: "från 895 kr", image: "/images/triggerpoint.png" },
];

export default async function ServicesPage() {
  const services = await getAllServices();
  const useWordPress = services.length > 0;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-28">
        <Image
          src="/images/bakgrund1.png"
          alt="Massage behandlingar hos Wellness Studio"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/80" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-300">
            Behandlingar
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Välj din behandling
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-200">
            Vi erbjuder ett brett utbud av professionella massagebehandlingar –
            alla skräddarsydda efter dina behov.
          </p>
          <Link
            href="/booking"
            className="mt-10 inline-block rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
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

          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {useWordPress
              ? services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-100 transition-shadow hover:shadow-lg"
                    >
                      <div className="relative aspect-video overflow-hidden bg-stone-100">
                        <Image
                          src={
                            service.serviceFields.image?.sourceUrl ||
                            slugToLocalImage[service.slug] ?? "/images/bakgrund2.png"
                          }
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h2 className="font-semibold text-slate-800 group-hover:text-rose-600 transition-colors">
                          {service.title}
                        </h2>
                        {service.serviceFields.shortDescription && (
                          <p className="mt-2 flex-1 text-sm leading-7 text-slate-600 line-clamp-3">
                            {service.serviceFields.shortDescription}
                          </p>
                        )}
                        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                          {service.serviceFields.price ? (
                            <span className="text-sm font-semibold text-rose-600">
                              {service.serviceFields.price}
                            </span>
                          ) : (
                            <span />
                          )}
                          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600 group-hover:bg-rose-100 transition-colors">
                            Läs mer →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
              : fallbackServices.map((service) => (
                  <li key={service.title}>
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-100">
                      <div className="relative aspect-video overflow-hidden bg-stone-100">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h2 className="font-semibold text-slate-800">{service.title}</h2>
                        <p className="mt-2 flex-1 text-sm leading-7 text-slate-600">
                          {service.shortDescription}
                        </p>
                        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                          <span className="text-sm font-semibold text-rose-600">{service.price}</span>
                          <Link
                            href="/booking"
                            className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600 hover:bg-rose-100 transition-colors"
                          >
                            Boka →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">Redo att boka?</h2>
          <p className="mt-3 text-slate-600">
            Välj behandling och skicka din förfrågan – vi återkommer med en bekräftelse.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
            >
              Boka din tid
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-stone-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 transition-colors hover:bg-stone-50"
            >
              Om terapeuten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
