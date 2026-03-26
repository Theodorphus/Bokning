"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Gör det ont?",
    a: "Massage ska inte göra ont. Du kan känna ett visst tryck – särskilt vid djupvävnadsmassage – men det ska aldrig vara smärtsamt. Säg alltid till om du vill ha mer eller mindre tryck. Din komfort är alltid prioritet.",
  },
  {
    q: "Hur lång tid tar en behandling?",
    a: "Det beror på vilken behandling du väljer. Vi erbjuder allt från 30 minuters fokuserade behandlingar till 90 minuters helkroppsupplevelse. Rekommendationen är 60–90 minuter för bästa resultat.",
  },
  {
    q: "Hur bokar jag om eller avbokar?",
    a: "Du kan boka om eller avboka kostnadsfritt upp till 24 timmar innan din tid. Kontakta oss via telefon eller e-post. Vid avbokning kortare än 24 timmar debiteras 50% av behandlingens pris.",
  },
  {
    q: "Är massage lämpligt under graviditet?",
    a: "Ja! Vi erbjuder specialanpassad gravidmassage som är skräddarsydd för dig som väntar barn. Behandlingen är säker från och med vecka 12. Vi tar speciell hänsyn till läge, tryck och kontraindikationer.",
  },
  {
    q: "Vad ska jag tänka på innan?",
    a: "Undvik att äta en stor måltid direkt innan behandlingen. Kom gärna fem minuter tidigt så du hinner landa. Informera oss om eventuella skador, medicinska tillstånd eller om du är gravid.",
  },
  {
    q: "Hur betalar jag?",
    a: "Vi tar emot Swish, kortbetalning (Visa & Mastercard) och presentkort. Betalning sker i samband med behandlingen. Vi erbjuder också möjligheten att fakturera för företagskunder.",
  },
  {
    q: "Kan jag köpa presentkort?",
    a: "Absolut! Presentkort är en uppskattad present för alla tillfällen. Du kan välja ett specifikt belopp eller en specifik behandling. Kontakta oss via e-post eller telefon för att beställa.",
  },
  {
    q: "Vad händer om jag uteblir utan att avboka?",
    a: "Vid uteblivet besök utan avbokning debiteras hela behandlingens pris. Vi hoppas på förståelse – din bokade tid är reserverad enbart för dig och kan inte fyllas med kort varsel.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 flex-shrink-0 text-rose-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Vanliga frågor
          </h2>
          <p className="mx-auto mt-4 text-slate-600">
            Hittar du inte svaret du söker?{" "}
            <a
              href="mailto:kontakt@wellness.se"
              className="text-rose-600 hover:underline"
            >
              Kontakta oss
            </a>
            .
          </p>
        </div>

        <dl className="mt-12 divide-y divide-stone-100">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-5">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-800">
                      {faq.q}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </button>
                </dt>
                <dd
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 text-sm leading-7 text-slate-600">
                      {faq.a}
                    </p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
