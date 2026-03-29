import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tack för din bokning – Wellness Studio",
  description: "Vi har mottagit din bokningsförfrågan och återkommer snart.",
  robots: { index: false },
};

export default function TackPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-50">
          <svg
            className="h-10 w-10 text-rose-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
          Tack för din förfrågan!
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Vi har mottagit din bokningsförfrågan och skickat en bekräftelse till
          din e-postadress. Vi återkommer inom kort för att bekräfta din tid.
        </p>

        <div className="mt-8 rounded-2xl bg-stone-50 p-6 text-left text-sm leading-7 text-slate-600 ring-1 ring-stone-100">
          <p className="font-semibold text-slate-800">Vad händer nu?</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Vi bekräftar din bokade tid via e-post eller telefon.</li>
            <li>Du får en påminnelse dagen innan din behandling.</li>
            <li>Kom gärna 5 minuter tidigt så du kan slappna av innan behandlingen.</li>
          </ol>
        </div>

        <div className="mt-8 rounded-2xl bg-rose-50 p-6 text-left text-sm leading-7 text-slate-600 ring-1 ring-rose-100">
          <p className="font-semibold text-slate-800">Behöver du ändra eller avboka?</p>
          <p className="mt-2">
            Kontakta oss minst 24 timmar innan din behandling:
          </p>
          <div className="mt-3 space-y-1">
            <p>
              <a href="tel:+46701234567" className="font-medium text-rose-600 hover:text-rose-500">
                070-123 45 67
              </a>
            </p>
            <p>
              <a href="mailto:kontakt@wellness.se" className="font-medium text-rose-600 hover:text-rose-500">
                kontakt@wellness.se
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
          >
            Tillbaka till startsidan
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-stone-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-stone-50"
          >
            Utforska fler behandlingar
          </Link>
        </div>
      </div>
    </div>
  );
}
