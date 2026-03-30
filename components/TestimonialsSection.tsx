import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Emma S.",
    location: "Stockholm",
    text: "Fantastisk massage! Kände mig helt ny efteråt. Otroligt skicklig på att hitta spänningar och lösa upp dem. Kommer definitivt tillbaka.",
    rating: 5,
    initials: "ES",
    bg: "bakgrund1",
  },
  {
    name: "Johan M.",
    location: "Solna",
    text: "Bokade en djupvävnadsmassage och det var precis vad jag behövde. Professionell, omtänksam och med perfekt trycknivå. Toppen!",
    rating: 5,
    initials: "JM",
    bg: "bakgrund2",
  },
  {
    name: "Maria K.",
    location: "Lidingö",
    text: "Lugn och fin lokal, och behandlingen översteg mina förväntningar. Perfekt avkoppling efter en stressig period. Varmt rekommenderat.",
    rating: 5,
    initials: "MK",
    bg: "bakgrund1",
  },
  {
    name: "Anders L.",
    location: "Danderyd",
    text: "Har gått hit regelbundet i över ett år. Märker stor skillnad i kroppen. Bästa investeringen jag gjort för min hälsa och mitt välmående.",
    rating: 5,
    initials: "AL",
    bg: "bakgrund2",
  },
  {
    name: "Sofia B.",
    location: "Täby",
    text: "Fick ett presentkort av min man och det var en underbar upplevelse. Proffsig och avslappnad atmosfär. Perfekt present till vem som helst!",
    rating: 5,
    initials: "SB",
    bg: "bakgrund1",
  },
  {
    name: "Lars W.",
    location: "Stockholm",
    text: "Tog hit min chef för företagsmassage och alla var supernöjda. Smidigt, professionellt och verkligen välgörande. Vi bokar igen!",
    rating: 5,
    initials: "LW",
    bg: "bakgrund2",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} av 5 stjärnor`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-wood-400" : "fill-white/20"}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background image layer (alternates between bakgrund1 and bakgrund2) */}
      <div className="absolute inset-0">
        <Image
          src="/images/bakgrund1.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-choc-900/80"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-wood-400">
            Kundrecensioner
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Vad våra kunder säger
          </h2>

          {/* Rating summary */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur">
              <Stars count={5} />
              <span className="text-sm font-semibold text-white">4.9 av 5</span>
              <span className="text-sm text-white/60">· 120+ recensioner</span>
            </div>
          </div>
        </div>

        {/* Testimonial grid */}
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="relative overflow-hidden rounded-2xl bg-white/10 p-7 backdrop-blur ring-1 ring-white/10 transition-colors hover:bg-white/15"
            >
              {/* Background image per card (alternates) */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={`/images/${t.bg}.png`}
                  alt=""
                  fill
                  className="object-cover opacity-10"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  aria-hidden="true"
                />
              </div>

              <Stars count={t.rating} />

              <blockquote className="mt-4 text-sm leading-7 text-white/90">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-wood-600 text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/50">{t.location}</p>
                </div>
                <div className="ml-auto">
                  <svg
                    className="h-5 w-5 text-wood-400/50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="inline-block rounded-full bg-wood-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500"
          >
            Boka din tid
          </Link>
        </div>
      </div>
    </section>
  );
}
