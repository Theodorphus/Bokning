import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const benefits = [
  { icon: "📉", title: "Minskad stress", text: "Regelbunden massage minskar kortisolnivåerna och ger ett lugnare, mer fokuserat team." },
  { icon: "⚡", title: "Ökad produktivitet", text: "Välmående medarbetare presterar bättre. 20–30 min ger energi för hela dagen." },
  { icon: "🤝", title: "Stärkt teamkänsla", text: "En gemensam upplevelse som stärker kulturen och är en uppskattad förmån." },
  { icon: "🏥", title: "Färre sjukdagar", text: "Förebyggande kroppsvård minskar muskelspänningar och kan sänka sjukfrånvaron." },
];

export default function CorporateMassageSection() {
  return (
    <section className="overflow-hidden bg-choc-900 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/foretag.png"
                alt="Professionell företagsmassage på arbetsplatsen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-choc-900/40 to-transparent"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-wood-600 p-5 shadow-xl lg:block">
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs font-medium text-wood-100">nöjda företag</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-wood-400">
              Företagsmassage
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Investera i ditt teams välmående
            </h2>
            <p className="mt-5 text-lg leading-8 text-choc-300">
              Professionell massage för din personalgrupp – på plats hos er eller
              i vår studio. Minskar stress, ökar fokus och stärker teamkänslan.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <li
                  key={b.title}
                  className="flex items-start gap-3 rounded-xl bg-white/5 p-4"
                >
                  <span className="text-xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{b.title}</p>
                    <p className="mt-1 text-xs leading-5 text-choc-400">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/corporate-massage#contact"
                className="rounded-full bg-wood-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500"
              >
                Begär offert
              </Link>
              <Link
                href="/corporate-massage"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Läs mer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
