const rules = [
  {
    icon: "🕐",
    title: "Avbokning senast 24 timmar innan",
    text: "Kostnadsfri avbokning eller ombokning upp till 24 timmar före inbokad tid.",
  },
  {
    icon: "💳",
    title: "Sen avbokning (under 24h)",
    text: "Vid avbokning kortare än 24 timmar i förväg debiteras 50% av behandlingens pris.",
  },
  {
    icon: "🚪",
    title: "Uteblivet besök",
    text: "Om du inte dyker upp och inte har avbokat debiteras full avgift för den bokade behandlingen.",
  },
  {
    icon: "💛",
    title: "Undantag",
    text: "Vi förstår att livet kan vara oförutsägbart. Vid akut sjukdom eller nödfall löser vi det tillsammans.",
  },
];

export default function CancellationPolicy() {
  return (
    <section className="bg-rose-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            Avbokningspolicy
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Bra att veta
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-600">
            Vi reserverar tid enbart för dig. För att kunna erbjuda tider till
            alla behöver vi ett tydligt avbokningsförfarande.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {rules.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-rose-100"
            >
              <span className="mt-0.5 text-2xl">{r.icon}</span>
              <div>
                <p className="font-semibold text-slate-800">{r.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  {r.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
