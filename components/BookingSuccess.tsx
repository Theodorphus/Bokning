"use client";

import Link from "next/link";

interface Props {
  name: string;
  date: string;
  time: string;
  service?: string | null;
  onReset: () => void;
}

export default function BookingSuccess({ name, date, time, service, onReset }: Props) {
  return (
    <div className="flex flex-col items-center py-12 text-center">
      {/* Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-wood-100 text-4xl shadow-sm ring-1 ring-wood-200">
        ✓
      </div>

      <h2 className="mt-6 text-2xl font-bold text-choc-800">
        Tack, {name}!
      </h2>
      <p className="mt-2 text-choc-600">
        Din bokningsförfrågan är skickad. Vi återkommer med en bekräftelse via e-post.
      </p>

      {/* Booking summary */}
      <div className="mt-8 w-full max-w-sm rounded-2xl bg-sand-50 p-6 ring-1 ring-sand-200 text-left space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-wood-500">
          Din bokning
        </p>
        {service && (
          <div className="flex justify-between text-sm">
            <span className="text-choc-500">Behandling</span>
            <span className="font-medium text-choc-800">{service}</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-choc-500">Datum</span>
          <span className="font-medium text-choc-800 capitalize">{date}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-choc-500">Tid</span>
          <span className="font-medium text-choc-800">kl. {time}</span>
        </div>
      </div>

      <p className="mt-6 max-w-xs text-xs text-choc-500">
        Avbokning är kostnadsfri upp till 24 timmar innan behandlingen.
        Kontakta oss på{" "}
        <a href="mailto:kontakt@wellness.se" className="text-wood-600 underline underline-offset-2">
          kontakt@wellness.se
        </a>{" "}
        eller{" "}
        <a href="tel:+46701234567" className="text-wood-600 underline underline-offset-2">
          070-123 45 67
        </a>
        .
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={onReset}
          className="rounded-full border border-sand-300 bg-white px-6 py-3 text-sm font-medium text-choc-700 transition-colors hover:bg-sand-50"
        >
          Boka en till tid
        </button>
        <Link
          href="/"
          className="rounded-full bg-wood-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-wood-500"
        >
          Till startsidan
        </Link>
      </div>
    </div>
  );
}
