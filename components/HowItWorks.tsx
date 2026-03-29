import SectionHeader from "@/components/ui/SectionHeader";

interface Step {
  step: string;
  title: string;
  text: string;
}

interface HowItWorksProps {
  variant?: "default" | "corporate";
}

const defaultSteps: Step[] = [
  {
    step: "1",
    title: "Boka tid",
    text: "Välj behandling och skicka din förfrågan online – tar bara ett par minuter.",
  },
  {
    step: "2",
    title: "Vi bekräftar",
    text: "Du får en bekräftelse via e-post inom kort med alla detaljer.",
  },
  {
    step: "3",
    title: "Du kommer till studion",
    text: "Välkommen till vår lugna studio på Storgatan 12. Kom gärna 5 min tidigt.",
  },
  {
    step: "4",
    title: "Betalning på plats",
    text: "Betala enkelt med Swish, kort, Klarna eller presentkort efter behandlingen.",
  },
];

const corporateSteps: Step[] = [
  {
    step: "1",
    title: "Skicka offertförfrågan",
    text: "Fyll i formuläret med antal anställda och önskemål – vi återkommer inom en arbetsdag.",
  },
  {
    step: "2",
    title: "Vi skräddarsyr ett upplägg",
    text: "Baserat på era behov och kalender tar vi fram ett förslag på schema och paket.",
  },
  {
    step: "3",
    title: "Vi kommer till er",
    text: "Vår terapeut kommer till er arbetsplats eller ni besöker vår studio – ni väljer.",
  },
  {
    step: "4",
    title: "Faktura till företaget",
    text: "Smidig fakturahantering direkt till företaget. Inga krångliga utlägg för personalen.",
  },
];

export default function HowItWorks({ variant = "default" }: HowItWorksProps) {
  const steps = variant === "corporate" ? corporateSteps : defaultSteps;
  const eyebrow = variant === "corporate" ? "Så funkar det för företag" : "Så funkar det";
  const title = variant === "corporate" ? "Enkelt från offert till behandling" : "Från bokning till avkoppling";

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow={eyebrow} title={title} />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-start">
              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute left-6 top-6 hidden h-px w-full bg-rose-100 lg:block"
                />
              )}
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-600 text-sm font-bold text-white shadow-md">
                {s.step}
              </div>
              <h3 className="mt-5 font-semibold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
