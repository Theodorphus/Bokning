import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Presentkort",
  description:
    "Ge bort ett presentkort på massage – ett perfekt val till födelsedag, jul, mors dag eller bara för att visa att du bryr dig. Giltigt 12 månader.",
  alternates: { canonical: "https://wellness-studio.se/gift-cards" },
  openGraph: {
    title: "Presentkort – Wellness Studio",
    description:
      "Ge bort en upplevelse. Presentkort på massage – ett perfekt val till alla tillfällen.",
    images: [{ url: "/images/presentkort.png", width: 1200, height: 630 }],
  },
};

const options = [
  {
    title: "Valfri behandling",
    desc: "Mottagaren väljer själv vilken behandling och tid som passar. Det mest flexibla och uppskattade alternativet.",
    tag: "Populärast",
    highlight: true,
    icon: "✨",
    examples: ["Avslappningsmassage", "Djupvävnadsmassage", "Valfri behandling"],
  },
  {
    title: "Valfritt belopp",
    desc: "Välj ett belopp och låt mottagaren kombinera fritt. Passar alla budgetar och önskemål.",
    tag: null,
    highlight: false,
    icon: "💳",
    examples: ["500 kr", "750 kr", "1 000 kr+"],
  },
  {
    title: "Skräddarsytt paket",
    desc: "Sätt ihop ett eget paket – t.ex. 90 min massage med välkomstdryck och loungerock. Lyxigt och personligt.",
    tag: "Lyxigt",
    highlight: false,
    icon: "🎁",
    examples: ["90 min + välkomstdryck", "Spa-dag", "Anpassat paket"],
  },
];

const steps = [
  { step: "1", icon: "📞", title: "Kontakta oss", text: "Ring eller skicka e-post – vi hjälper dig välja rätt presentkort." },
  { step: "2", icon: "💳", title: "Välj & betala", text: "Välj behandling, belopp eller paket och betala via Swish eller kort." },
  { step: "3", icon: "📧", title: "Vi skickar kortet", text: "Digitalt presentkort skickas direkt till din e-post. Fysiskt kort kan skickas per post." },
  { step: "4", icon: "📅", title: "Mottagaren bokar", text: "Presentkortstagaren väljer tid och bokar enkelt via vår bokningssida." },
];

const occasions = [
  { label: "Födelsedag", icon: "🎂" },
  { label: "Jul", icon: "🎄" },
  { label: "Mors dag", icon: "💐" },
  { label: "Alla hjärtans dag", icon: "❤️" },
  { label: "Student", icon: "🎓" },
  { label: "Tack-present", icon: "🙏" },
];

export default function GiftCardsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-choc-900 py-24 sm:py-32">
        <Image
          src="/images/presentkort.png"
          alt="Presentkort på massage – ge bort välmående"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-choc-900/65 via-choc-900/45 to-choc-900/88" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-wood-300">
            Presentkort
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ge bort välmående
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-choc-200">
            Ett presentkort på massage är mer än en present – det är en stund av
            ro, återhämtning och omsorg. Perfekt till födelsedag, jul, mors dag
            eller bara för att visa att du bryr dig.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#options"
              className="rounded-full bg-wood-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500"
            >
              Välj presentkort
            </a>
            <a
              href="tel:+46701234567"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Ring oss
            </a>
          </div>
        </div>
      </section>

      {/* Perfekt för – expanded section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-wood-500">
              Perfekt för
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-choc-800 sm:text-4xl">
              Ett presentkort för alla tillfällen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-choc-600">
              Oavsett om du vill fira, tacka eller bara visa att du bryr dig –
              ett presentkort på massage uppskattas alltid.
            </p>
          </div>

          {/* Occasion tag row */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {occasions.map((o) => (
              <span
                key={o.label}
                className="flex items-center gap-2 rounded-full border border-sand-200 bg-sand-50 px-4 py-2 text-sm font-medium text-choc-700"
              >
                {o.icon} {o.label}
              </span>
            ))}
          </div>

          {/* Visual cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                image: "/images/avslappning.png",
                title: "Ge bort avkoppling",
                text: "Perfekt för den som är stressad, trött eller behöver en paus från vardagen. En timmes avslappningsmassage gör underverk.",
                cta: "Avslappningsmassage",
              },
              {
                image: "/images/presentkort.png",
                title: "Lyxig upplevelse",
                text: "Ge bort ett skräddarsytt paket med valfri behandling, välkomstdryck och tid för sig själv. Det ultimata välmåendepaketet.",
                cta: "Skräddarsytt paket",
              },
              {
                image: "/images/gravid.png",
                title: "Omsorg för blivande mamma",
                text: "Vår gravidmassage är speciellt utformad för att lindra ryggvärk och svullnad under graviditeten. En omtänksam och varsam gåva.",
                cta: "Gravidmassage",
              },
            ].map((c) => (
              <div key={c.title} className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-sand-100 shadow-sm">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-choc-900/50 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-semibold text-choc-800">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-choc-600">{c.text}</p>
                  <span className="mt-5 inline-block self-start rounded-full bg-wood-50 px-4 py-1.5 text-xs font-medium text-wood-700">
                    ✦ {c.cta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Options */}
      <section id="options" className="bg-sand-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            title="Välj ditt presentkort"
            body="Alla presentkort är giltiga i 12 månader från köpdatum."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {options.map((o) => (
              <div
                key={o.title}
                className={[
                  "relative flex flex-col rounded-2xl p-8 transition-shadow hover:shadow-lg",
                  o.highlight
                    ? "bg-wood-600 text-white shadow-xl"
                    : "bg-white ring-1 ring-sand-200",
                ].join(" ")}
              >
                {o.tag && (
                  <span
                    className={[
                      "absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold shadow-sm",
                      o.highlight ? "bg-white text-wood-600" : "bg-wood-600 text-white",
                    ].join(" ")}
                  >
                    {o.tag}
                  </span>
                )}

                <span className="text-4xl">{o.icon}</span>
                <h3 className={`mt-4 text-lg font-bold ${o.highlight ? "text-white" : "text-choc-800"}`}>
                  {o.title}
                </h3>
                <p className={`mt-3 flex-1 text-sm leading-7 ${o.highlight ? "text-wood-100" : "text-choc-600"}`}>
                  {o.desc}
                </p>

                {/* Examples */}
                <ul className="mt-4 space-y-1">
                  {o.examples.map((ex) => (
                    <li key={ex} className={`flex items-center gap-2 text-xs ${o.highlight ? "text-wood-100" : "text-choc-700"}`}>
                      <span className={o.highlight ? "text-wood-200" : "text-wood-500"}>·</span>
                      {ex}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="mailto:kontakt@wellness.se"
                    className={[
                      "rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors",
                      o.highlight
                        ? "bg-white text-wood-600 hover:bg-wood-50"
                        : "bg-wood-600 text-white hover:bg-wood-500",
                    ].join(" ")}
                  >
                    Beställ via e-post
                  </a>
                  <a
                    href="tel:+46701234567"
                    className={[
                      "rounded-xl px-4 py-2.5 text-center text-sm font-medium transition-colors",
                      o.highlight
                        ? "border border-white/30 text-white hover:bg-white/10"
                        : "border border-sand-200 text-choc-600 hover:bg-sand-50",
                    ].join(" ")}
                  >
                    Ring & beställ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader eyebrow="Så enkelt är det" title="Hur fungerar det?" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-start">
                {i < steps.length - 1 && (
                  <div aria-hidden="true" className="absolute left-6 top-6 hidden h-px w-full bg-wood-100 lg:block" />
                )}
                <div className="relative z-10 flex h-14 w-14 flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-wood-50 text-2xl shadow-sm ring-1 ring-wood-100">
                  {s.icon}
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-wood-600 text-xs font-bold text-white">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-choc-800">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-choc-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-choc-800">Vanliga frågor om presentkort</h2>
          <dl className="mt-6 space-y-5 divide-y divide-sand-100">
            {[
              { q: "Hur länge är presentkortet giltigt?", a: "Presentkortet är giltigt i 12 månader från köpdatum." },
              { q: "Kan kortet användas på alla behandlingar?", a: "Ja, presentkortet gäller på samtliga behandlingar i vår studio." },
              { q: "Kan jag ge ett presentkort i sista minuten?", a: "Absolut – digitala presentkort skickas direkt via e-post, ofta inom en timme." },
              { q: "Kan presentkortet lösas in mot kontanter?", a: "Nej, presentkort kan inte lösas in mot kontanter men kan användas till alla behandlingar." },
            ].map(({ q, a }) => (
              <div key={q} className="pt-5">
                <dt className="font-semibold text-choc-800">{q}</dt>
                <dd className="mt-2 text-sm leading-7 text-choc-600">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-wood-600 to-wood-500 py-20">
        <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto max-w-xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Köp presentkort idag</h2>
          <p className="mt-4 text-wood-100">
            Kontakta oss via e-post eller telefon – vi hjälper dig välja rätt och ordnar allt.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kontakt@wellness.se"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-wood-600 shadow-md transition-colors hover:bg-wood-50"
            >
              Skicka e-post
            </a>
            <a
              href="tel:+46701234567"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ring oss
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
