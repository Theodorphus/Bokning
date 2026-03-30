import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const certifications = [
  "Diplomerad massageterapeut, Skandinaviska Massageskolan",
  "Certifierad i djupvävnadsmassage (ITEC)",
  "Utbildad gravidmassör",
  "Kurs i trigger point-terapi",
  "Fortbildning i sportmassage",
];

const specializations = [
  "Avslappningsmassage",
  "Djupvävnadsmassage",
  "Gravidmassage",
  "Sportmassage",
  "Trigger point-terapi",
  "Företagsmassage",
];

export default function AboutMeSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Din massageterapeut"
          title="Möt Anna Lindgren"
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/portratt.png"
                alt="Anna Lindgren – certifierad massageterapeut hos Wellness Studio"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 40vw"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-wood-600 px-5 py-4 shadow-xl">
              <p className="text-2xl font-bold text-white leading-none">10+</p>
              <p className="mt-0.5 text-xs font-medium text-wood-100">
                års erfarenhet
              </p>
            </div>

            {/* Decoration */}
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-wood-100/60 blur-2xl"
            />
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-xl font-bold text-choc-900">
              Anna Lindgren, Massageterapeut
            </h3>
            <p className="mt-4 leading-8 text-choc-700">
              Välkommen till min studio! Jag har arbetat som massageterapeut i
              över tio år och brinner för att hjälpa människor att känna sig
              bättre – både fysiskt och mentalt. Varje behandling är för mig ett
              sätt att ge dig utrymme att slappna av och återhämta dig.
            </p>
            <p className="mt-4 leading-8 text-choc-700">
              Jag tror på ett holistiskt synsätt där kropp och sinne hänger
              ihop. Oavsett om du söker avkoppling efter en stressig period,
              lindring av muskelspänningar eller en stunds ro för dig själv – är
              du välkommen hit.
            </p>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="font-semibold text-choc-900">
                Utbildning &amp; certifikat
              </h4>
              <ul className="mt-3 space-y-2">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-choc-700"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-wood-400">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specializations */}
            <div className="mt-8">
              <h4 className="font-semibold text-choc-900">Specialiseringar</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {specializations.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-wood-200 bg-wood-50 px-4 py-1.5 text-xs font-medium text-wood-700"
                  >
                    ✦ {s}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-block rounded-full bg-wood-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500"
            >
              Läs mer om mig
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
