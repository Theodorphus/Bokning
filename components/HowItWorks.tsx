import SectionHeader from "@/components/ui/SectionHeader";

interface Step {
  step: string;
  icon: string;
  title: string;
  text: string;
}

interface HowItWorksProps {
  variant?: "default" | "corporate";
}

const defaultSteps: Step[] = [
  {
    step: "1",
    icon: "📋",
    title: "Boka tid",
    text: "Välj behandling och skicka din förfrågan online – tar bara ett par minuter.",
  },
  {
    step: "2",
    icon: "📧",
    title: "Vi bekräftar",
    text: "Du får en bekräftelse via e-post inom kort med alla detaljer.",
  },
  {
    step: "3",
    icon: "🚶",
    title: "Du kommer till studion",
    text: "Välkommen till vår lugna studio på Storgatan 12. Kom gärna 5 min tidigt.",
  },
  {
    step: "4",
    icon: "💳",
    title: "Betalning på plats",
    text: "Betala enkelt med Swish, kort, Klarna eller presentkort efter behandlingen.",
  },
];

const corporateSteps: Step[] = [
  {
    step: "1",
    icon: "📝",
    title: "Skicka offertförfrågan",
    text: "Fyll i formuläret med antal anställda och önskemål – vi återkommer inom en arbetsdag.",
  },
  {
    step: "2",
    icon: "🗓️",
    title: "Vi skräddarsyr ett upplägg",
    text: "Baserat på era behov och kalender tar vi fram ett förslag på schema och paket.",
  },
  {
    step: "3",
    icon: "🏢",
    title: "Vi kommer till er",
    text: "Vår terapeut kommer till er arbetsplats eller ni besöker vår studio – ni väljer.",
  },
  {
    step: "4",
    icon: "🧾",
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
                  className="absolute left-7 top-7 hidden h-px w-full bg-wood-100 lg:block"
                />
              )}
              <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-wood-50 text-2xl ring-1 ring-wood-100">
                {s.icon}
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-wood-600 text-[10px] font-bold text-white">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-5 font-semibold text-choc-800">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-choc-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
