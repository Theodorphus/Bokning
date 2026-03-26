export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
      <div className="relative mt-6 aspect-video animate-pulse overflow-hidden rounded-xl bg-slate-200" />
      <div className="mt-8 space-y-4">
        <div className="h-9 w-2/3 animate-pulse rounded-lg bg-slate-200" />
        <div className="h-6 w-24 animate-pulse rounded bg-slate-200" />
        <div className="mt-6 space-y-2">
          <div className="h-5 animate-pulse rounded bg-slate-100" />
          <div className="h-5 animate-pulse rounded bg-slate-100" />
          <div className="h-5 w-4/5 animate-pulse rounded bg-slate-100" />
        </div>
        <div className="mt-10 h-11 w-36 animate-pulse rounded-lg bg-slate-200" />
      </div>
    </div>
  );
}
