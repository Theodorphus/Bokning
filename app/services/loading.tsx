export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="h-9 w-40 animate-pulse rounded-lg bg-choc-200" />
      <div className="mt-3 h-5 w-24 animate-pulse rounded bg-choc-200" />
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <li
            key={i}
            className="overflow-hidden rounded-xl border border-choc-200 bg-white shadow-sm"
          >
            <div className="aspect-video animate-pulse bg-choc-200" />
            <div className="p-5">
              <div className="h-5 w-3/4 animate-pulse rounded bg-choc-200" />
              <div className="mt-3 space-y-2">
                <div className="h-4 animate-pulse rounded bg-choc-100" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-choc-100" />
              </div>
              <div className="mt-4 h-4 w-20 animate-pulse rounded bg-choc-200" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
