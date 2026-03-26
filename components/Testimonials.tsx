const testimonials = [
  {
    name: "Emma S.",
    location: "Stockholm",
    text: "Fantastisk massage! Kände mig helt ny efteråt. Otroligt skicklig på att hitta spänningar och lösa upp dem. Kommer definitivt tillbaka.",
    rating: 5,
    initials: "ES",
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Johan M.",
    location: "Solna",
    text: "Bokade en djupvävnadsmassage och det var precis vad jag behövde. Professionell, omtänksam och med perfekt trycknivå. Toppen!",
    rating: 5,
    initials: "JM",
    color: "bg-stone-200 text-stone-700",
  },
  {
    name: "Maria K.",
    location: "Lidingö",
    text: "Lugn och fin lokal, och behandlingen översteg mina förväntningar. Perfekt avkoppling efter en stressig period. Varmt rekommenderat.",
    rating: 5,
    initials: "MK",
    color: "bg-rose-200 text-rose-800",
  },
  {
    name: "Anders L.",
    location: "Danderyd",
    text: "Har gått hit regelbundet i över ett år. Märker stor skillnad i kroppen. Bästa investeringen jag gjort för min hälsa och mitt välmående.",
    rating: 5,
    initials: "AL",
    color: "bg-stone-100 text-stone-700",
  },
  {
    name: "Sofia B.",
    location: "Täby",
    text: "Fick ett presentkort av min man och det var en underbar upplevelse. Proffsig och avslappnad atmosfär. Perfekt present till vem som helst!",
    rating: 5,
    initials: "SB",
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Lars W.",
    location: "Stockholm",
    text: "Tog hit min chef för företagsmassage och alla var supernöjda. Smidigt, professionellt och verkligen välgörande. Vi bokar igen!",
    rating: 5,
    initials: "LW",
    color: "bg-stone-200 text-stone-700",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-rose-400 text-rose-400"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            Kundrecensioner
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Vad våra kunder säger
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Vi är stolta över att ha hjälpt hundratals kunder till bättre
            välmående och avkoppling.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-stone-100"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
