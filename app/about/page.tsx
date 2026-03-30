import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import TherapistIntro from "@/components/TherapistIntro";
import Testimonials from "@/components/Testimonials";
import OpeningHours from "@/components/OpeningHours";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Möt Anna Lindgren – diplomerad massageterapeut med över 10 års erfarenhet i Stockholm. Läs om vår filosofi och våra värderingar.",
  alternates: { canonical: "https://wellness-studio.se/about" },
  openGraph: {
    title: "Om oss – Wellness Studio",
    description:
      "Möt Anna Lindgren – diplomerad massageterapeut med över 10 års erfarenhet.",
    images: [{ url: "/images/avslappning.png", width: 1200, height: 630 }],
  },
};

const values = [
  {
    title: "Professionalitet",
    text: "Certifierade terapeuter, hög hygienstandard och ett bemötande som alltid sätter dig i fokus.",
    icon: "🏅",
  },
  {
    title: "Närvaro",
    text: "Vi är fullt närvarande i varje behandling. Telefonen är bortstängd – din tid är din.",
    icon: "🌿",
  },
  {
    title: "Respekt",
    text: "Din kropp, dina gränser och dina önskemål styr alltid. Vi lyssnar utan att döma.",
    icon: "💛",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero with image */}
      <section className="relative overflow-hidden bg-choc-900 py-24 sm:py-32">
        <Image
          src="/images/avslappning.png"
          alt="Wellness Studio – avslappnande massage i stämningsfull miljö"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-choc-900/65 to-choc-900/88" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-wood-300">
            Om oss
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Välkommen till Wellness Studio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-choc-200">
            Vi tror på kraften i beröring – att en timmes professionell massage
            kan förändra hur du mår, både i kropp och sinne.
          </p>
          <Link
            href="/booking"
            className="mt-10 inline-block rounded-full bg-wood-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500"
          >
            Boka en behandling
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-wood-500">
            Vår filosofi
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-choc-800">
            Hela du är välkommen hit
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-choc-600">
            <p>
              På Wellness Studio möter vi varje kund med respekt, omsorg och
              närvaro. Ingen behandling är den andra lik – vi lyssnar, anpassar
              och skapar en upplevelse som passar just dig.
            </p>
            <p>
              Vi tror att välmående inte är en lyx, utan en nödvändighet. Att ta
              hand om sin kropp är att investera i ett bättre liv – mer energi,
              bättre sömn, mindre stress.
            </p>
            <p>
              Välkommen att ge dig själv den stunden av ro du förtjänar.
            </p>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-sand-50 py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-6">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: "🏅", value: "Certifierad", label: "Diplomerad terapeut" },
              { icon: "🛡️", value: "Försäkrad", label: "Fullt ansvarsförsäkrad" },
              { icon: "😊", value: "120+", label: "Nöjda kunder" },
              { icon: "⭐", value: "10+ år", label: "Erfarenhet" },
            ].map((b) => (
              <div
                key={b.value}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white px-4 py-6 text-center ring-1 ring-sand-100"
              >
                <span className="text-3xl">{b.icon}</span>
                <dt className="text-xl font-bold text-choc-800">{b.value}</dt>
                <dd className="text-xs text-choc-700">{b.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Anna berättar – filosofi, utbildning, specialisering */}
      <section className="border-t border-[#2A1F18]/10 bg-sand-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Min filosofi */}
            <div className="rounded-2xl bg-white p-8 ring-1 ring-sand-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wood-50 text-2xl">
                🌿
              </div>
              <h3 className="mt-5 text-lg font-bold text-choc-900">Min filosofi</h3>
              <p className="mt-3 text-sm leading-7 text-choc-700">
                Jag tror att välmående är en rättighet, inte en lyx. Kropp och
                sinne hänger ihop – när kroppen får ro, lugnar sig också tanken.
                Varje behandling utgår från dig: dina behov, din kropp och ditt
                tempo.
              </p>
              <p className="mt-3 text-sm leading-7 text-choc-700">
                Jag jobbar aldrig med standardlösningar. Istället lyssnar jag,
                känner av och anpassar varje session så att du lämnar studion med
                mer energi och mindre spänning än när du kom.
              </p>
            </div>

            {/* Min utbildning */}
            <div className="rounded-2xl bg-white p-8 ring-1 ring-sand-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wood-50 text-2xl">
                🎓
              </div>
              <h3 className="mt-5 text-lg font-bold text-choc-900">Min utbildning</h3>
              <ul className="mt-4 space-y-3">
                {[
                  { year: "2013", text: "Diplomerad massageterapeut, Skandinaviska Massageskolan" },
                  { year: "2015", text: "Certifierad i djupvävnadsmassage (ITEC)" },
                  { year: "2016", text: "Utbildad gravidmassör" },
                  { year: "2018", text: "Kurs i trigger point-terapi" },
                  { year: "2021", text: "Fortbildning i sportmassage" },
                ].map((item) => (
                  <li key={item.year} className="flex gap-3 text-sm">
                    <span className="mt-0.5 flex-shrink-0 rounded-full bg-wood-100 px-2 py-0.5 text-xs font-semibold text-wood-700">
                      {item.year}
                    </span>
                    <span className="text-choc-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Min specialisering */}
            <div className="rounded-2xl bg-white p-8 ring-1 ring-sand-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wood-50 text-2xl">
                ⭐
              </div>
              <h3 className="mt-5 text-lg font-bold text-choc-900">Min specialisering</h3>
              <p className="mt-3 text-sm leading-7 text-choc-700">
                Genom åren har jag fördjupat mig extra i behandlingar för stressrelaterade
                besvär, kroniska spänningar och idrottsskador. Jag är extra van
                vid:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {[
                  "Stressrelaterade besvär",
                  "Nacke & axlar",
                  "Ryggsmärta",
                  "Graviditetsmassage",
                  "Idrottsskador",
                  "Trigger points",
                ].map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-wood-200 bg-wood-50 px-3 py-1 text-xs font-medium text-wood-700"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-8 text-center ring-1 ring-sand-100"
              >
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-4 font-bold text-choc-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-7 text-choc-700">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TherapistIntro />
      <Testimonials />
      <OpeningHours />

      {/* CTA */}
      <section className="bg-gradient-to-br from-wood-50 to-sand-50 py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-2xl font-bold text-choc-800">
            Redo att boka din behandling?
          </h2>
          <p className="mt-4 text-choc-600">
            Det tar bara några minuter. Vi återkommer med en bekräftelse.
          </p>
          <Link
            href="/booking"
            className="mt-8 inline-block rounded-full bg-wood-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500"
          >
            Boka nu
          </Link>
        </div>
      </section>
    </div>
  );
}
