import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    slug: "avslappningsmassage",
    title: "Avslappningsmassage",
    description:
      "Helkroppsmassage med mjuka, lugna rörelser som löser upp spänningar och sänker stressnivån. Perfekt för återhämtning.",
    price: "från 695 kr",
    duration: "60–90 min",
    image: "/images/avslappning.png",
  },
  {
    slug: "djupvavnadsmassage",
    title: "Djupvävnadsmassage",
    description:
      "Intensivare massage som arbetar djupare i musklerna för att lösa upp kroniska spänningar och smärta.",
    price: "från 795 kr",
    duration: "60–90 min",
    image: "/images/djupvavnad.png",
  },
  {
    slug: "sportmassage",
    title: "Sportmassage",
    description:
      "Anpassad för aktiva och idrottare. Förbättrar återhämtning, rörlighet och förebygger skador.",
    price: "från 795 kr",
    duration: "45–60 min",
    image: "/images/sport.png",
  },
  {
    slug: "gravidmassage",
    title: "Gravidmassage",
    description:
      "Skonsam massage anpassad för gravida. Minskar ryggvärk, svullnad och ger välbehövlig avkoppling.",
    price: "från 795 kr",
    duration: "60 min",
    image: "/images/gravid.png",
  },
  {
    slug: "triggerpoint",
    title: "Trigger point-terapi",
    description:
      "Riktad behandling av ömma punkter i musklerna. Effektiv mot kronisk smärta och spänningshuvudvärk.",
    price: "från 895 kr",
    duration: "45–60 min",
    image: "/images/triggerpoint.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Behandlingar"
            title="Välj din behandling"
            center={false}
          />
          <Link
            href="/services"
            className="flex-shrink-0 text-sm font-semibold text-wood-600 transition-colors hover:text-wood-500"
          >
            Se alla behandlingar →
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand-100 transition-shadow hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-sand-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-semibold text-choc-900 transition-colors group-hover:text-wood-600">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-choc-700 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-sand-200 pt-4">
                    <div>
                      <span className="block text-sm font-semibold text-wood-600">
                        {service.price}
                      </span>
                      <span className="text-xs text-choc-600">{service.duration}</span>
                    </div>
                    <span className="rounded-full bg-wood-50 px-3 py-1 text-xs font-medium text-wood-600 transition-colors group-hover:bg-wood-100">
                      Läs mer →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}

          {/* CTA card */}
          <li>
            <Link
              href="/booking"
              className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-wood-600 p-8 text-center shadow-sm transition-shadow hover:shadow-lg hover:bg-wood-500"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white">Osäker på vilken?</p>
                <p className="mt-1 text-sm text-wood-100">
                  Boka en tid så hjälper vi dig välja rätt behandling.
                </p>
              </div>
              <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-wood-600 transition-colors group-hover:bg-wood-50">
                Boka nu
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
