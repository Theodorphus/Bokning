import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tack för din offertförfrågan – Wellness Studio",
  description: "Vi har mottagit din offertförfrågan och återkommer inom en arbetsdag.",
  robots: { index: false },
};

export default function CorporateTackPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-wood-50">
          <svg
            className="h-10 w-10 text-wood-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-choc-800 sm:text-4xl">
          Tack för din offertförfrågan!
        </h1>
        <p className="mt-4 text-lg leading-8 text-choc-600">
          Vi har mottagit er förfrågan och skickat en bekräftelse till din
          e-postadress. En av våra konsulter återkommer inom en arbetsdag med
          ett skräddarsytt förslag.
        </p>

        <div className="mt-8 rounded-2xl bg-sand-50 p-6 text-left text-sm leading-7 text-choc-600 ring-1 ring-sand-100">
          <p className="font-semibold text-choc-800">Vad händer nu?</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Vi granskar er förfrågan och tar fram ett anpassat upplägg.</li>
            <li>Du kontaktas via e-post eller telefon inom en arbetsdag.</li>
            <li>Vi bokar ett kort möte för att diskutera detaljer och schema.</li>
            <li>Behandlingarna startar enligt överenskommet upplägg.</li>
          </ol>
        </div>

        <div className="mt-8 rounded-2xl bg-wood-50 p-6 text-left text-sm leading-7 text-choc-600 ring-1 ring-wood-100">
          <p className="font-semibold text-choc-800">Kontakta oss direkt</p>
          <p className="mt-2">Vill du prata med oss direkt?</p>
          <div className="mt-3 space-y-1">
            <p>
              <a href="tel:+46701234567" className="font-medium text-wood-600 hover:text-wood-500">
                070-123 45 67
              </a>
            </p>
            <p>
              <a href="mailto:kontakt@wellness.se" className="font-medium text-wood-600 hover:text-wood-500">
                kontakt@wellness.se
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-wood-600 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500"
          >
            Tillbaka till startsidan
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-sand-300 bg-white px-8 py-4 text-sm font-semibold text-choc-700 shadow-sm transition-colors hover:bg-sand-50"
          >
            Se alla behandlingar
          </Link>
        </div>
      </div>
    </div>
  );
}
