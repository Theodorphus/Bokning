import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Företagsmassage",
  description:
    "Investera i din personalens välmående med professionell företagsmassage. Minskar stress, ökar produktivitet och stärker teamkänslan.",
  openGraph: {
    title: "Företagsmassage – Wellness Studio",
    description:
      "Professionell företagsmassage som minskar stress och ökar välmående på arbetsplatsen.",
    type: "website",
  },
};

const benefits = [
  { icon: "📉", title: "Minskad stress", text: "Studier visar att regelbunden massage minskar kortisolnivåerna märkbart – och ger ett lugnare, mer fokuserat team." },
  { icon: "⚡", title: "Ökad produktivitet", text: "Välmående medarbetare presterar bättre. En behandling på 20–30 min under arbetstid ger energi för resten av dagen." },
  { icon: "🤝", title: "Stärkt teamkänsla", text: "Att ge personalen en gemensam upplevelse skapar välmående och stärker kulturen. Ett uppskattad förmån." },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Företagsmassage",
  provider: { "@type": "LocalBusiness", name: "Wellness Studio" },
  description: "Professionell massage för företag och personalvård i Stockholm.",
  areaServed: "Stockholm",
};

export default function CorporateMassagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-400/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-rose-300/10 blur-2xl"
          />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-400">
              Företagsmassage
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Investera i ditt teams välmående
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
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
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Se paket
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
                Fördelar
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800">
                Varför välja företagsmassage?
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl bg-stone-50 p-7 ring-1 ring-stone-100"
                >
                  <span className="text-3xl">{b.icon}</span>
                  <h3 className="mt-4 font-semibold text-slate-800">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="bg-stone-50 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                Paket &amp; priser
              </h2>
              <p className="mt-3 text-slate-600">
                Alla priser är exkl. moms. Kontakta oss för en skräddarsydd
                offert.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {packages.map((p) => (
                <div
                  key={p.name}
                  className={[
                    "relative flex flex-col rounded-2xl p-8",
                    p.highlight
                      ? "bg-rose-600 text-white shadow-xl"
                      : "bg-white ring-1 ring-stone-200",
                  ].join(" ")}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1 text-xs font-semibold text-rose-600">
                      Populärast
                    </span>
                  )}
                  <h3
                    className={`text-xl font-bold ${p.highlight ? "text-white" : "text-slate-800"}`}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${p.highlight ? "text-rose-100" : "text-slate-500"}`}
                  >
                    {p.sessions} · {p.duration}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span
                          className={`mt-0.5 flex-shrink-0 ${p.highlight ? "text-rose-200" : "text-rose-500"}`}
                        >
                          ✓
                        </span>
                        <span
                          className={p.highlight ? "text-rose-50" : "text-slate-600"}
                        >
                          {item}
                        </span>
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

        {/* Contact form */}
        <section id="contact" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-800">
                Begär en offert
              </h2>
              <p className="mt-3 text-slate-600">
                Fyll i formuläret så återkommer vi inom en arbetsdag.
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-stone-50 px-8 py-10 ring-1 ring-stone-100">
              <form
                action="mailto:kontakt@wellness.se"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="corp-name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Namn <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="corp-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ditt namn"
                      className="w-full rounded-lg px-4 py-3 text-sm ring-1 ring-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="corp-company"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Företag <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="corp-company"
                      name="company"
                      type="text"
                      required
                      placeholder="Företagsnamn"
                      className="w-full rounded-lg px-4 py-3 text-sm ring-1 ring-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="corp-email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      E-post <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="corp-email"
                      name="email"
                      type="email"
                      required
                      placeholder="din@foretag.se"
                      className="w-full rounded-lg px-4 py-3 text-sm ring-1 ring-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="corp-employees"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Antal anställda
                    </label>
                    <select
                      id="corp-employees"
                      name="employees"
                      className="w-full rounded-lg px-4 py-3 text-sm ring-1 ring-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                    >
                      <option value="">Välj...</option>
                      <option value="1-5">1–5</option>
                      <option value="6-15">6–15</option>
                      <option value="16-30">16–30</option>
                      <option value="30+">30+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="corp-message"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Berätta mer om vad ni söker
                  </label>
                  <textarea
                    id="corp-message"
                    name="message"
                    rows={4}
                    placeholder="Vilken typ av massage, ungefär när, hur ofta..."
                    className="w-full rounded-lg px-4 py-3 text-sm ring-1 ring-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                  />
                </div>

                <p className="text-xs text-slate-500">
                  * Formuläret öppnar din e-postklient. Alternativt:{" "}
                  <a
                    href="tel:+46701234567"
                    className="text-rose-600 hover:underline"
                  >
                    ring oss direkt
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-rose-600 px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 sm:w-auto"
                >
                  Skicka offertförfrågan
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-rose-50 to-stone-50 py-16">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-800">
              Frågor? Ring oss direkt.
            </h2>
            <p className="mt-3 text-slate-600">
              Vi svarar snabbt och hjälper dig hitta det bästa upplägget för ert
              företag.
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
