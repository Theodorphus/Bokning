"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Hem" },
  { href: "/services", label: "Tjänster" },
  { href: "/about", label: "Om oss" },
  { href: "/gift-cards", label: "Presentkort" },
  { href: "/corporate-massage", label: "Företag" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-choc-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-choc-900"
        >
          Wellness Studio
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors hover:text-wood-600 ${
                  pathname === href ? "text-wood-600" : "text-choc-600"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/booking"
              className="rounded-full bg-wood-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-wood-500"
            >
              Boka tid
            </Link>
          </li>
        </ul>

        {/* Mobile: Boka + toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/booking"
            className="rounded-full bg-wood-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-wood-500"
          >
            Boka
          </Link>
          <button
            className="flex items-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Öppna meny"
          >
            <svg
              className="h-6 w-6 text-choc-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col border-t border-choc-100 lg:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-sand-50 ${
                  pathname === href ? "text-wood-600" : "text-choc-700"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
