import Link from "next/link";

const hours = [
  { day: "Måndag", time: "09:00 – 20:00", open: true },
  { day: "Tisdag", time: "09:00 – 20:00", open: true },
  { day: "Onsdag", time: "09:00 – 20:00", open: true },
  { day: "Torsdag", time: "09:00 – 20:00", open: true },
  { day: "Fredag", time: "09:00 – 18:00", open: true },
  { day: "Lördag", time: "10:00 – 17:00", open: true },
  { day: "Söndag", time: "Stängt", open: false },
];

export default function OpeningHours() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Opening hours */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
              Öppettider
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
              När vi har öppet
            </h2>

            <dl className="mt-8 divide-y divide-stone-100">
              {hours.map(({ day, time, open }) => (
                <div
                  key={day}
                  className="flex items-center justify-between py-3.5"
                >
                  <dt className="text-sm font-medium text-slate-700">{day}</dt>
                  <dd
                    className={`text-sm font-semibold ${open ? "text-slate-800" : "text-slate-400"}`}
                  >
                    {time}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm text-slate-500">
              * Kvällstider och helger kan variera. Kontakta oss för aktuell
              information.
            </p>
          </div>

          {/* Contact + CTA */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
              Kontakt
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
              Nå oss enkelt
            </h2>

            <div className="mt-8 space-y-5">
              <a
                href="tel:+46701234567"
                className="flex items-center gap-4 rounded-xl border border-stone-200 bg-stone-50 px-5 py-4 transition-colors hover:bg-rose-50 hover:border-rose-200"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-rose-100">
                  <svg
                    className="h-5 w-5 text-rose-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Telefon</p>
                  <p className="font-semibold text-slate-800">
                    070-123 45 67
                  </p>
                </div>
              </a>

              <a
                href="mailto:kontakt@wellness.se"
                className="flex items-center gap-4 rounded-xl border border-stone-200 bg-stone-50 px-5 py-4 transition-colors hover:bg-rose-50 hover:border-rose-200"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-rose-100">
                  <svg
                    className="h-5 w-5 text-rose-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">E-post</p>
                  <p className="font-semibold text-slate-800">
                    kontakt@wellness.se
                  </p>
                </div>
              </a>
            </div>

            <Link
              href="/booking"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-rose-600 px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-500"
            >
              Boka din tid nu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
