import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-36 lg:py-44">
      <Image
        src="/images/hero.png"
        alt="Avkopplande massage hos Wellness Studio i Stockholm"
        fill
        className="object-cover opacity-50"
        priority
        sizes="100vw"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/80"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-300">
          Välkommen till Wellness Studio
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hitta din balans.<br className="hidden sm:block" /> Känn skillnaden.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-200">
          Professionell massage i hjärtat av Stockholm. Varje behandling
          skräddarsys efter just dina behov – oavsett om du söker avkoppling
          eller smärtlindring.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/booking"
            className="rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Boka din tid
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Se alla behandlingar
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
          <span className="flex items-center gap-2">
            <span className="text-rose-400">✓</span>
            Certifierad terapeut
          </span>
          <span className="flex items-center gap-2">
            <span className="text-rose-400">✓</span>
            10+ års erfarenhet
          </span>
          <span className="flex items-center gap-2">
            <span className="text-rose-400">✓</span>
            120+ nöjda kunder
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
      >
        <svg
          className="h-5 w-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
