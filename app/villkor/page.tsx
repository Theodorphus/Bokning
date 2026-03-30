import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bokningsvillkor – Wellness Studio",
  description: "Läs våra boknings- och avbokningsvillkor för behandlingar hos Wellness Studio.",
};

export default function VillkorPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-wood-500">Juridisk information</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-choc-800 sm:text-4xl">
        Boknings- och avbokningsvillkor
      </h1>
      <p className="mt-4 text-sm text-choc-500">Senast uppdaterad: mars 2025</p>

      <div className="mt-10 space-y-10 text-sm leading-7 text-choc-600">
        <section>
          <h2 className="text-base font-semibold text-choc-800">1. Bokningsbekräftelse</h2>
          <p className="mt-3">
            En bokning anses bekräftad när du mottagit en skriftlig bekräftelse via e-post
            från oss. Bokningsförfrågningar som skickats via vår webbplats är inte bindande
            förrän vi bekräftat tid och behandling.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-choc-800">2. Avbokning och ombokning</h2>
          <p className="mt-3">Följande avbokningsregler gäller:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Mer än 24 timmar före behandlingen:</strong> Kostnadsfri avbokning
              eller ombokning.
            </li>
            <li>
              <strong>Mindre än 24 timmar före behandlingen:</strong> 50 % av
              behandlingspriset debiteras.
            </li>
            <li>
              <strong>Utebliven närvaro (no-show):</strong> Fullt pris debiteras.
            </li>
          </ul>
          <p className="mt-3">
            Avbokning sker via telefon (070-123 45 67) eller e-post (kontakt@wellness.se).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-choc-800">3. Försening</h2>
          <p className="mt-3">
            Vid försening reduceras behandlingstiden med motsvarande tid för att inte
            påverka nästa kunds bokade tid. Priset kvarstår oförändrat.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-choc-800">4. Hälsotillstånd</h2>
          <p className="mt-3">
            Du ansvarar för att informera terapeuten om eventuella hälsoproblem,
            medicinska tillstånd, allergier eller graviditet innan behandlingen påbörjas.
            Wellness Studio förbehåller sig rätten att avvisa eller avbryta en behandling
            om det bedöms olämpligt utifrån kundens hälsotillstånd.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-choc-800">5. Presentkort</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Presentkort är giltiga i 12 månader från inköpsdatum.</li>
            <li>Presentkort kan inte lösas in mot kontanter.</li>
            <li>Borttappade presentkort ersätts ej.</li>
            <li>Presentkort kan inte kombineras med andra erbjudanden eller rabatter.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-choc-800">6. Betalning</h2>
          <p className="mt-3">
            Betalning sker i samband med behandlingen. Vi accepterar Swish, kortbetalning,
            Klarna och presentkort. Kontantbetalning hanteras ej.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-choc-800">7. Klagomål</h2>
          <p className="mt-3">
            Om du inte är nöjd med din behandling ber vi dig kontakta oss snarast möjligt
            via e-post eller telefon. Vi strävar efter att lösa eventuella klagomål
            skyndsamt och på ett tillfredsställande sätt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-choc-800">8. Kontakt</h2>
          <ul className="mt-3 space-y-1 pl-4">
            <li>Wellness Studio</li>
            <li>Storgatan 12, 111 22 Stockholm</li>
            <li>
              <a href="tel:+46701234567" className="text-wood-600 hover:underline">
                070-123 45 67
              </a>
            </li>
            <li>
              <a href="mailto:kontakt@wellness.se" className="text-wood-600 hover:underline">
                kontakt@wellness.se
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
