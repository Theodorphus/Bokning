import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Presentkort",
  description:
    "Ge bort en upplevelse. Presentkort på massage – ett perfekt val till födelsedag, jul, mors dag eller som ett varmt omtänksamt present.",
  openGraph: {
    title: "Presentkort – Wellness Studio",
    description:
      "Ge bort en upplevelse. Presentkort på massage – ett perfekt val till alla tillfällen.",
    type: "website",
  },
};

const options = [
  {
    title: "Presentkort på valfri behandling",
    desc: "Mottagaren väljer själv vilken behandling och tid som passar. Flexibelt och uppskattat.",
    tag: "Populärast",
    highlight: true,
  },
  {
    title: "Presentkort på valfritt belopp",
    desc: "Välj ett belopp och låt mottagaren kombinera fritt. Passar alla budgetar.",
    tag: null,
    highlight: false,
  },
  {
    title: "Skräddarsytt presentpaket",
    desc: "Kontakta oss om du vill sätta ihop ett eget paket – t.ex. 90 min massage + välkomstdryck.",
    tag: "Lyxigt",
    highlight: false,
  },
];

const steps = [
  { step: "1", text: "Kontakta oss via telefon eller e-post" },
  { step: "2", text: "Välj behandling, belopp eller paket" },
  { step: "3", text: "Betalning via Swish eller kort" },
  { step: "4", text: "Vi skickar presentkortet digitalt eller per post" },
];

export default function GiftCardsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-stone-50 to-white py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            Presentkort
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            Ge bort välmående
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Ett presentkort på massage är mer än en present – det är en stund av
            ro, återhämtning och omsorg. Perfekt till födelsedag, jul, mors dag
            eller bara för att visa att du bryr dig.
          </p>
          <a
            href="mailto:kontakt@wellness.se"
            className="mt-10 inline-block rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
          >
            Beställ presentkort
          </a>
        </div>
      </section>

      {/* Options */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800">
              Välj ditt presentkort
            </h2>
            <p className="mt-3 text-slate-600">
              Alla presentkort är giltiga i 12 månader från köpdatum.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {options.map((o) => (
              <div
                key={o.title}
                className={[
                  "relative flex flex-col rounded-2xl p-8",
                  o.highlight
                    ? "bg-rose-600 text-white shadow-xl"
                    : "bg-stone-50 ring-1 ring-stone-200",
                ].join(" ")}
              >
                {o.tag && (
                  <span
                    className={[
                      "absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold",
                      o.highlight
                        ? "bg-white text-rose-600"
                        : "bg-rose-600 text-white",
                    ].join(" ")}
                  >
                    {o.tag}
                  </span>
                )}
                <h3
                  className={`font-bold ${o.highlight ? "text-white" : "text-slate-800"}`}
                >
                  {o.title}
                </h3>
                <p
                  className={`mt-3 flex-1 text-sm leading-7 ${o.highlight ? "text-rose-100" : "text-slate-600"}`}
                >
                  {o.desc}
                </p>
                <a
                  href="mailto:kontakt@wellness.se"
                  className={[
                    "mt-6 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors",
                    o.highlight
                      ? "bg-white text-rose-600 hover:bg-rose-50"
                      : "bg-rose-600 text-white hover:bg-rose-500",
                  ].join(" ")}
                >
                  Beställ
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">
              Hur fungerar det?
            </h2>
          </div>
          <ol className="mt-10 space-y-5">
            {steps.map((s) => (
              <li key={s.step} className="flex items-start gap-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-bold text-white">
                  {s.step}
                </div>
                <p className="pt-2 text-slate-700">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ snippet */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-slate-800">
            Vanliga frågor om presentkort
          </h2>
          <dl className="mt-6 space-y-5">
            {[
              { q: "Hur länge är presentkortet giltigt?", a: "12 månader från köpdatum." },
              { q: "Kan presentkortet användas på alla behandlingar?", a: "Ja, kortet gäller på samtliga behandlingar i vår studio." },
              { q: "Kan jag ge ett presentkort i sista minuten?", a: "Absolut – digitala presentkort skickas direkt via e-post." },
            ].map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold text-slate-800">{q}</dt>
                <dd className="mt-1 text-sm text-slate-600">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-50 py-16">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Köp presentkort idag
          </h2>
          <p className="mt-3 text-slate-600">
            Kontakta oss så hjälper vi dig att välja rätt.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kontakt@wellness.se"
              className="rounded-full bg-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
            >
              Skicka e-post
            </a>
            <a
              href="tel:+46701234567"
              className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-stone-50"
            >
              Ring oss
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
