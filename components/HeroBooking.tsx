import Image from "next/image";

export default function HeroBooking() {
  return (
    <section className="relative overflow-hidden bg-choc-900 py-24 sm:py-32">
      <Image
        src="/images/hero.png"
        alt="Boka massage hos Wellness Studio"
        fill
        className="object-cover opacity-40"
        priority
        sizes="100vw"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-choc-900/60 via-choc-900/30 to-choc-900/80"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-wood-300">
          Välkommen
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Boka massage
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-choc-200 sm:text-xl">
          Välj behandling och tid – vi tar hand om resten
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#booking-form"
            className="rounded-full bg-wood-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500 focus:outline-none focus:ring-2 focus:ring-wood-400 focus:ring-offset-2"
          >
            Boka nu
          </a>
          <a
            href="#treatments"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Se behandlingar
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-choc-300">
          <span className="flex items-center gap-2">
            <span className="text-wood-400">✓</span>
            Certifierad terapeut
          </span>
          <span className="flex items-center gap-2">
            <span className="text-wood-400">✓</span>
            Enkel onlinebokning
          </span>
          <span className="flex items-center gap-2">
            <span className="text-wood-400">✓</span>
            Bekräftelse via e-post
          </span>
        </div>
      </div>
    </section>
  );
}
