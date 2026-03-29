import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CorporateForm from "@/components/CorporateForm";
import HowItWorks from "@/components/HowItWorks";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Företagsmassage",
  description:
    "Investera i personalens välmående med professionell företagsmassage i Stockholm. Minskar stress, ökar produktivitet och stärker teamkänslan. Begär offert idag.",
  alternates: { canonical: "https://wellness-studio.se/corporate-massage" },
  openGraph: {
    title: "Företagsmassage – Wellness Studio",
    description:
      "Professionell företagsmassage som minskar stress och ökar välmående på arbetsplatsen.",
    images: [{ url: "https://picsum.photos/seed/corporate-office/1200/630", width: 1200, height: 630 }],
  },
};

const benefits = [
  { icon: "📉", title: "Minskad stress", text: "Studier visar att regelbunden massage minskar kortisolnivåerna märkbart – och ger ett lugnare, mer fokuserat team." },
  { icon: "⚡", title: "Ökad produktivitet", text: "Välmående medarbetare presterar bättre. En behandling på 20–30 min under arbetstid ger energi för resten av dagen." },
  { icon: "🤝", title: "Stärkt teamkänsla", text: "Att ge personalen en gemensam upplevelse skapar välmående och stärker kulturen. En uppskattad förmån." },
  { icon: "🏥", title: "Färre sjukdagar", text: "Förebyggande kroppsvård minskar muskelspänningar och relaterade besvär – och kan bidra till lägre sjukfrånvaro." },
  { icon: "🌟", title: "Attraktiv förmån", text: "Massage som personalförmån ökar trivsel och lojalitet. Perfekt att erbjuda som del av er employer branding." },
  { icon: "📅", title: "Flexibel bokning", text: "Vi anpassar oss efter er kalender – på er arbetsplats eller i vår studio. Heldag, halvdag eller löpande bokningar." },
];

const packages = [
  {
    name: "Starter",
    sessions: "5 behandlingar",
    duration: "30 min / person",
    includes: ["Stolmassage på plats", "Rygg, axlar & nacke", "Upp till 5 anställda"],
    highlight: false,
  },
  {
    name: "Business",
    sessions: "10 behandlingar",
    duration: "45 min / person",
    includes: ["Helkroppsmassage i studio", "Prioriterad bokning", "Faktura till företag", "Upp till 10 anställda"],
    highlight: true,
  },
  {
    name: "Premium",
    sessions: "Obegränsat",
    duration: "60–90 min / person",
    includes: ["Skräddarsytt upplägg", "Löpande schema", "Dedikerad kontaktperson", "Faktura & årsavtal"],
    highlight: false,
  },
];

const socialProof = [
  {
    company: "TechBolaget AB",
    quote: "Vi har haft Wellness Studio hos oss en fredag i månaden i ett år nu. Personalen älskar det och sjukfrånvaron har minskat markant.",
    name: "Sara Eriksson",
    role: "HR-chef",
    initials: "SE",
  },
  {
    company: "Nordisk Konsult",
    quote: "Perfekt för att visa personalen uppskattning. Smidigt upplägg, professionellt genomfört och alltid positiv feedback från teamet.",
    name: "Marcus Holm",
    role: "VD",
    initials: "MH",
  },
  {
    company: "Kreativa Byrån",
    quote: "Bästa personalförmånen vi erbjuder. Snabbt och enkelt att boka, och terapeuten är fantastisk. Varmt rekommenderat!",
    name: "Lena Johansson",
    role: "Office Manager",
    initials: "LJ",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Företagsmassage",
  provider: { "@type": "LocalBusiness", name: "Wellness Studio", url: "https://wellness-studio.se" },
  description: "Professionell massage för företag och personalvård i Stockholm.",
  areaServed: "Stockholm",
};

export default function CorporateMassagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div>
        {/* Hero with image */}
        <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-36">
          <Image
            src="https://picsum.photos/seed/corporate-office/1600/900"
            alt="Företagsmassage – välmående på arbetsplatsen"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-300">
              Företagsmassage
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Investera i ditt teams välmående
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Professionell massage för din personalgrupp – på plats hos er eller
              i vår studio. Minskar stress, ökar fokus och stärker teamkänslan.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
              >
                Begär offert
              </a>
              <a
                href="#packages"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Se paket
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2"><span className="text-rose-400">✓</span> 50+ nöjda företagskunder</span>
              <span className="flex items-center gap-2"><span className="text-rose-400">✓</span> Svarar inom 1 arbetsdag</span>
              <span className="flex items-center gap-2"><span className="text-rose-400">✓</span> Faktura till företaget</span>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader
              eyebrow="Fördelar"
              title="Varför välja företagsmassage?"
              body="Investering i personalens välmående är investering i er verksamhet."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-2xl bg-stone-50 p-7 ring-1 ring-stone-100">
                  <span className="text-3xl">{b.icon}</span>
                  <h3 className="mt-4 font-semibold text-slate-800">{b.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="bg-stone-50 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader
              title="Paket & priser"
              body="Alla priser är exkl. moms. Kontakta oss för en skräddarsydd offert."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {packages.map((p) => (
                <div
                  key={p.name}
                  className={[
                    "relative flex flex-col rounded-2xl p-8 transition-shadow hover:shadow-lg",
                    p.highlight
                      ? "bg-rose-600 text-white shadow-xl"
                      : "bg-white ring-1 ring-stone-200",
                  ].join(" ")}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1 text-xs font-semibold text-rose-600 shadow-sm">
                      Populärast
                    </span>
                  )}
                  <h3 className={`text-xl font-bold ${p.highlight ? "text-white" : "text-slate-800"}`}>
                    {p.name}
                  </h3>
                  <p className={`mt-1 text-sm ${p.highlight ? "text-rose-100" : "text-slate-500"}`}>
                    {p.sessions} · {p.duration}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span className={`mt-0.5 flex-shrink-0 ${p.highlight ? "text-rose-200" : "text-rose-500"}`}>✓</span>
                        <span className={p.highlight ? "text-rose-50" : "text-slate-600"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={[
                      "mt-8 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors",
                      p.highlight
                        ? "bg-white text-rose-600 hover:bg-rose-50"
                        : "bg-rose-600 text-white hover:bg-rose-500",
                    ].join(" ")}
                  >
                    Välj {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <SectionHeader
              eyebrow="Vad företagen säger"
              title="Uppskattad av över 50 företag"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {socialProof.map((t) => (
                <div key={t.name} className="flex flex-col rounded-2xl bg-stone-50 p-7 ring-1 ring-stone-100">
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-rose-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm leading-7 text-slate-600">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3 border-t border-stone-100 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-700">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works for corporate */}
        <HowItWorks variant="corporate" />

        {/* Contact form */}
        <section id="contact" className="bg-stone-50 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-6">
            <div className="text-center">
              <SectionHeader
                eyebrow="Offertförfrågan"
                title="Begär en offert"
                body="Fyll i formuläret så återkommer vi inom en arbetsdag med ett skräddarsytt förslag."
              />
            </div>
            <div className="mt-10">
              <CorporateForm />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-rose-50 to-stone-50 py-16">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-800">Frågor? Ring oss direkt.</h2>
            <p className="mt-3 text-slate-600">
              Vi svarar snabbt och hjälper dig hitta det bästa upplägget för ert företag.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:+46701234567"
                className="rounded-full bg-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
              >
                070-123 45 67
              </a>
              <Link
                href="/booking"
                className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-stone-50"
              >
                Boka privat behandling
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
