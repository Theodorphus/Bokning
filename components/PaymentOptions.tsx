const methods = [
  {
    name: "Swish",
    description: "Betala enkelt med Swish direkt på plats.",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    label: "bg-emerald-600",
    icon: (
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
        <rect width="40" height="40" rx="8" fill="#00B67A" />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="13"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          S
        </text>
      </svg>
    ),
  },
  {
    name: "Kortbetalning",
    description: "Visa och Mastercard accepteras.",
    bg: "bg-blue-50",
    border: "border-blue-200",
    label: "bg-blue-600",
    icon: (
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
        <rect width="40" height="40" rx="8" fill="#1a56db" />
        <rect x="6" y="12" width="28" height="18" rx="2" fill="white" opacity="0.2" />
        <rect x="6" y="18" width="28" height="5" fill="white" opacity="0.4" />
        <rect x="8" y="25" width="8" height="3" rx="1" fill="white" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: "Klarna",
    description: "Dela upp betalningen med Klarna.",
    bg: "bg-pink-50",
    border: "border-pink-200",
    label: "bg-pink-600",
    icon: (
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
        <rect width="40" height="40" rx="8" fill="#ffb3c7" />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#1a1a1a"
          fontSize="13"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          K
        </text>
      </svg>
    ),
  },
  {
    name: "Presentkort",
    description: "Lös in ett presentkort vid besöket.",
    bg: "bg-rose-50",
    border: "border-rose-200",
    label: "bg-rose-600",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
      >
        <rect width="40" height="40" rx="8" fill="#fce7f3" />
        <path
          d="M8 16h24v16H8zM8 16a4 4 0 018 0M8 16a4 4 0 014-4h8a4 4 0 014 4M20 16v16"
          stroke="#be185d"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function PaymentOptions() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            Betalning
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Vi accepterar
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((m) => (
            <div
              key={m.name}
              className={`flex flex-col items-center gap-3 rounded-2xl border ${m.border} ${m.bg} p-6 text-center`}
            >
              {m.icon}
              <p className="font-semibold text-slate-800">{m.name}</p>
              <p className="text-xs leading-5 text-slate-600">{m.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Betalning sker alltid i samband med behandlingen. Faktura tillgängligt
          för företagskunder.
        </p>
      </div>
    </section>
  );
}
