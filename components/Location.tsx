const details = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-9.5 11.25S.5 17.642.5 10.5a9.5 9.5 0 1119 0z"
      />
    ),
    label: "Adress",
    value: "Storgatan 12, 3 tr\n111 22 Stockholm",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    ),
    label: "Kollektivtrafik",
    value: "T-bana: Norra station (5 min)\nBuss 73, hållplats Storgatan",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    ),
    label: "Parkering",
    value: "Gatuparking på Storgatan\nP-hus Citygaraget, 100 m",
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    ),
    label: "Tillgänglighet",
    value: "Hiss finns i byggnaden\nPortkod: 1234#\nRullstolsanpassad entré",
  },
];

export default function Location() {
  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            Hitta hit
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Plats &amp; vägbeskrivning
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-stone-200">
            {/* Replace src with your Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.6!2d18.0686!3d59.3293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDE5JzQ1LjUiTiAxOMKwMDQnMDYuOSJF!5e0!3m2!1ssv!2sse!4v1"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karta till massagestudion"
              className="block"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            {details.map((d) => (
              <div key={d.label} className="flex gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-rose-50">
                  <svg
                    className="h-5 w-5 text-rose-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {d.icon}
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{d.label}</p>
                  <p className="mt-0.5 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {d.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
