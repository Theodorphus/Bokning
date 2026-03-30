import SectionHeader from "@/components/ui/SectionHeader";

export const testimonialData = [
  {
    name: "Emma S.",
    location: "Stockholm",
    text: "Fantastisk massage! Kände mig helt ny efteråt. Otroligt skicklig på att hitta spänningar och lösa upp dem. Kommer definitivt tillbaka.",
    rating: 5,
    initials: "ES",
    color: "bg-wood-100 text-wood-700",
    avatarBg: "from-wood-200 to-wood-100",
  },
  {
    name: "Johan M.",
    location: "Solna",
    text: "Bokade en djupvävnadsmassage och det var precis vad jag behövde. Professionell, omtänksam och med perfekt trycknivå. Toppen!",
    rating: 5,
    initials: "JM",
    color: "bg-sand-200 text-sand-700",
    avatarBg: "from-sand-300 to-sand-200",
  },
  {
    name: "Maria K.",
    location: "Lidingö",
    text: "Lugn och fin lokal, och behandlingen översteg mina förväntningar. Perfekt avkoppling efter en stressig period. Varmt rekommenderat.",
    rating: 5,
    initials: "MK",
    color: "bg-wood-200 text-wood-800",
    avatarBg: "from-wood-300 to-wood-200",
  },
  {
    name: "Anders L.",
    location: "Danderyd",
    text: "Har gått hit regelbundet i över ett år. Märker stor skillnad i kroppen. Bästa investeringen jag gjort för min hälsa och mitt välmående.",
    rating: 5,
    initials: "AL",
    color: "bg-sand-100 text-sand-700",
    avatarBg: "from-sand-200 to-sand-100",
  },
  {
    name: "Sofia B.",
    location: "Täby",
    text: "Fick ett presentkort av min man och det var en underbar upplevelse. Proffsig och avslappnad atmosfär. Perfekt present till vem som helst!",
    rating: 5,
    initials: "SB",
    color: "bg-wood-100 text-wood-700",
    avatarBg: "from-wood-200 to-wood-100",
  },
  {
    name: "Lars W.",
    location: "Stockholm",
    text: "Tog hit min chef för företagsmassage och alla var supernöjda. Smidigt, professionellt och verkligen välgörande. Vi bokar igen!",
    rating: 5,
    initials: "LW",
    color: "bg-sand-200 text-sand-700",
    avatarBg: "from-sand-300 to-sand-200",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} av 5 stjärnor`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-wood-400 text-wood-400" : "fill-sand-200 text-sand-200"}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface TestimonialsProps {
  limit?: number;
  bg?: "white" | "stone";
}

export default function Testimonials({ limit, bg = "stone" }: TestimonialsProps) {
  const items = limit ? testimonialData.slice(0, limit) : testimonialData;
  const bgClass = bg === "white" ? "bg-white" : "bg-sand-50";

  return (
    <section className={`${bgClass} py-20 sm:py-28`}>
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Kundrecensioner"
          title="Vad våra kunder säger"
          body="Vi är stolta över att ha hjälpt hundratals kunder till bättre välmående och avkoppling."
        />

        {/* Rating summary */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-sm ring-1 ring-sand-100">
            <Stars count={5} />
            <span className="text-sm font-semibold text-choc-800">4.9 av 5</span>
            <span className="text-sm text-choc-500">· 120+ recensioner</span>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-sand-100 transition-shadow hover:shadow-md"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-7 text-choc-600">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-sand-100 pt-5">
                <div
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarBg} text-xs font-bold ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-choc-800">{t.name}</p>
                  <p className="text-xs text-choc-500">{t.location}</p>
                </div>
                <div className="ml-auto">
                  <svg className="h-5 w-5 text-wood-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
