import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy – Wellness Studio",
  description: "Läs om hur Wellness Studio hanterar dina personuppgifter i enlighet med GDPR.",
};

export default function IntegritetspolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-rose-500">Juridisk information</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
        Integritetspolicy
      </h1>
      <p className="mt-4 text-sm text-slate-500">Senast uppdaterad: mars 2025</p>

      <div className="mt-10 space-y-10 text-sm leading-7 text-slate-600">
        <section>
          <h2 className="text-base font-semibold text-slate-800">1. Personuppgiftsansvarig</h2>
          <p className="mt-3">
            Wellness Studio (nedan "vi", "oss" eller "företaget") är personuppgiftsansvarig för
            behandlingen av dina personuppgifter. Kontaktuppgifter:
          </p>
          <ul className="mt-3 space-y-1 pl-4">
            <li>Wellness Studio</li>
            <li>Storgatan 12, 111 22 Stockholm</li>
            <li>
              E-post:{" "}
              <a href="mailto:kontakt@wellness.se" className="text-rose-600 hover:underline">
                kontakt@wellness.se
              </a>
            </li>
            <li>Telefon: 070-123 45 67</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800">2. Vilka uppgifter vi samlar in</h2>
          <p className="mt-3">
            När du gör en bokningsförfrågan via vår webbplats samlar vi in följande uppgifter:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Namn</li>
            <li>E-postadress</li>
            <li>Telefonnummer</li>
            <li>Önskad behandling och tid</li>
            <li>Eventuellt meddelande du skriver</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800">3. Varför vi behandlar dina uppgifter</h2>
          <p className="mt-3">Vi behandlar dina personuppgifter för att:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Hantera och bekräfta din bokningsförfrågan (rättslig grund: avtal)</li>
            <li>Kontakta dig med information om din bokning (rättslig grund: avtal)</li>
            <li>Fullgöra bokningsbekräftelse via e-post (rättslig grund: avtal)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800">4. Hur länge vi sparar uppgifter</h2>
          <p className="mt-3">
            Vi sparar dina uppgifter så länge det krävs för att hantera din bokning, och
            därefter i enlighet med tillämplig lagstiftning (t.ex. bokföringslagen som
            kräver 7 år för räkenskapsinformation). Uppgifter som inte längre är nödvändiga
            raderas löpande.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800">5. Delning av uppgifter</h2>
          <p className="mt-3">
            Vi säljer aldrig dina personuppgifter till tredje part. Vi kan dela uppgifter
            med:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <strong>Resend</strong> – e-postleverantör som skickar bokningsbekräftelser
              (personuppgiftsbiträde)
            </li>
          </ul>
          <p className="mt-3">
            Alla tredjepartsaktörer är bundna av personuppgiftsbiträdesavtal och får
            enbart behandla dina uppgifter enligt våra instruktioner.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800">6. Dina rättigheter</h2>
          <p className="mt-3">Enligt GDPR har du rätt att:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Begära tillgång till dina personuppgifter</li>
            <li>Begära rättelse av felaktiga uppgifter</li>
            <li>Begära radering ("rätten att bli glömd")</li>
            <li>Begära begränsning av behandlingen</li>
            <li>Invända mot behandlingen</li>
            <li>Begära dataportabilitet</li>
          </ul>
          <p className="mt-3">
            Kontakta oss på{" "}
            <a href="mailto:kontakt@wellness.se" className="text-rose-600 hover:underline">
              kontakt@wellness.se
            </a>{" "}
            för att utöva dina rättigheter. Du har även rätt att lämna klagomål till
            Integritetsskyddsmyndigheten (IMY) på{" "}
            <a
              href="https://www.imy.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:underline"
            >
              imy.se
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800">7. Cookies</h2>
          <p className="mt-3">
            Vår webbplats använder en inbäddad karta från Google Maps. Google kan sätta
            cookies i samband med detta. Genom att använda webbplatsen godkänner du detta.
            Du kan blockera cookies i dina webbläsarinställningar, men det kan påverka
            webbplatsens funktionalitet.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-800">8. Kontakt</h2>
          <p className="mt-3">
            Har du frågor om hur vi behandlar dina personuppgifter? Kontakta oss på{" "}
            <a href="mailto:kontakt@wellness.se" className="text-rose-600 hover:underline">
              kontakt@wellness.se
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
