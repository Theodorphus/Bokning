import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sidan hittades inte – Wellness Studio",
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
          Sidan hittades inte
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Sidan du letar efter finns inte längre eller har flyttats. Kanske
          kan du hitta det du söker via länkarna nedan?
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
          >
            Gå till startsidan
          </Link>
          <Link
            href="/booking"
            className="rounded-full border border-stone-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-stone-50"
          >
            Boka en tid
          </Link>
        </div>
        <div className="mt-12 flex justify-center gap-6 text-sm text-slate-500">
          <Link href="/services" className="hover:text-rose-600 transition-colors">Behandlingar</Link>
          <Link href="/about" className="hover:text-rose-600 transition-colors">Om oss</Link>
          <Link href="/gift-cards" className="hover:text-rose-600 transition-colors">Presentkort</Link>
          <Link href="/corporate-massage" className="hover:text-rose-600 transition-colors">Företag</Link>
        </div>
      </div>
    </div>
  );
}
