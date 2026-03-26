import Link from "next/link";

export default function HomePage() {
  return (

    
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Headless WordPress + Next.js
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          En återanvändbar starter-template för moderna kundhemsidor. WordPress
          som headless CMS, Next.js som frontend, Tailwind för styling och
          Apollo Client för GraphQL. Tailwind fungerar!
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Se våra tjänster
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
