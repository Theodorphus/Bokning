export default function HeroBooking() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-rose-50 to-white py-24 sm:py-32">
      {/* Decorative blurred circles */}
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
          Välkommen
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
          Boka massage
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
          Välj behandling och tid – vi tar hand om resten
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#booking-form"
            className="rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
          >
            Boka nu
          </a>
          <a
            href="#treatments"
            className="rounded-full border border-stone-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-stone-50"
          >
            Se behandlingar
          </a>
        </div>
      </div>
    </section>
  );
}
