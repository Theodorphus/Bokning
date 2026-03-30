import Image from "next/image";

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

const whyChooseMe = [
  {
    title: "Skräddarsydd behandling",
    text: "Varje behandling anpassas helt efter dina behov och önskemål – inga standardlösningar.",
    icon: "🎯",
  },
  {
    title: "Trygg miljö",
    text: "Diskret, ren och lugn lokal. Du ska känna dig helt bekväm från första stund.",
    icon: "🌿",
  },
  {
    title: "Lång erfarenhet",
    text: "Över 10 år och tusentals behandlingar ger mig förmågan att snabbt förstå vad din kropp behöver.",
    icon: "⭐",
  },
];

export default function TherapistIntro() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-wood-500">
            Din massageterapeut
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-choc-800 sm:text-4xl">
            Möt Anna Lindgren
          </h2>
        </div>

        {/* Main intro row */}
        <div className="mt-14 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="h-64 w-64 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white">
                <Image
                  src="/images/portratt.png"
                  alt="Anna Lindgren, massageterapeut"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-wood-600 px-5 py-1.5 text-xs font-semibold text-white shadow-lg">
                10+ års erfarenhet
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-xl font-bold text-choc-800">
              Anna Lindgren, Massageterapeut
            </h3>
            <p className="mt-4 leading-8 text-choc-600">
              Välkommen till min studio! Jag har arbetat som massageterapeut i
              över tio år och brinner för att hjälpa människor att känna sig
              bättre – både fysiskt och mentalt. Varje behandling är för mig ett
              sätt att ge dig utrymme att slappna av och återhämta dig.
            </p>
            <p className="mt-4 leading-8 text-choc-600">
              Jag tror på ett holistiskt synsätt där kropp och sinne hänger
              ihop. Oavsett om du söker avkoppling efter en stressig period,
              lindring av muskelspänningar eller en stunds ro för dig själv – är
              du välkommen hit.
            </p>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="font-semibold text-choc-800">
                Utbildning &amp; certifikat
              </h4>
              <ul className="mt-3 space-y-2">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-choc-600">
                    <span className="mt-0.5 flex-shrink-0 text-wood-400">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-16 border-t border-sand-100 pt-12">
          <h3 className="text-center text-xl font-bold text-choc-800">
            Specialiseringar
          </h3>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {specializations.map((s) => (
              <li
                key={s}
                className="rounded-full border border-wood-200 bg-wood-50 px-5 py-2 text-sm font-medium text-wood-700"
              >
                ✦ {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Why choose me */}
        <div className="mt-12">
          <h3 className="text-center text-xl font-bold text-choc-800">
            Varför välja mig?
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {whyChooseMe.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-sand-50 p-7 text-center ring-1 ring-sand-100"
              >
                <span className="text-3xl">{item.icon}</span>
                <h4 className="mt-4 font-semibold text-choc-800">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-choc-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
