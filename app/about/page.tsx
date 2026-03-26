import type { Metadata } from "next";
import Link from "next/link";
import TherapistIntro from "@/components/TherapistIntro";
import Testimonials from "@/components/Testimonials";
import OpeningHours from "@/components/OpeningHours";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Möt Anna Lindgren – diplomerad massageterapeut med över 10 års erfarenhet. Läs om vår filosofi och våra värderingar.",
  openGraph: {
    title: "Om oss – Wellness Studio",
    description:
      "Möt Anna Lindgren – diplomerad massageterapeut med över 10 års erfarenhet.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-rose-50 to-white py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-stone-200/60 blur-2xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            Om oss
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            Välkommen till Wellness Studio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Vi tror på kraften i beröring – att en timmes professionell massage
            kan förändra hur du mår, både i kropp och sinne.
          </p>
          <Link
            href="/booking"
            className="mt-10 inline-block rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
          >
            Boka en behandling
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            Vår filosofi
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800">
            Hela du är välkommen hit
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
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

      {/* Values */}
      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "Professionalitet", text: "Certifierade terapeuter, hög hygienstandard och ett bemötande som alltid sätter dig i fokus.", icon: "🏅" },
              { title: "Närvaro", text: "Vi är fullt närvarande i varje behandling. Telefonen är bortstängd – din tid är din.", icon: "🌿" },
              { title: "Respekt", text: "Din kropp, dina gränser och dina önskemål styr alltid. Vi lyssnar utan att döma.", icon: "💛" },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-8 text-center ring-1 ring-stone-100"
              >
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-4 font-bold text-slate-800">{v.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TherapistIntro />
      <Testimonials />
      <OpeningHours />

      {/* CTA */}
      <section className="bg-gradient-to-br from-rose-50 to-stone-50 py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            Redo att boka din behandling?
          </h2>
          <p className="mt-4 text-slate-600">
            Det tar bara några minuter. Vi återkommer med en bekräftelse.
          </p>
          <Link
            href="/booking"
            className="mt-8 inline-block rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
          >
            Boka nu
          </Link>
        </div>
      </section>
    </div>
  );
}
