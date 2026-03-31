import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: "🌿",
    title: "Naturliga ingredienser",
    text: "Vi använder enbart ekologiska oljor och naturbaserade produkter.",
  },
  {
    icon: "🤫",
    title: "Stiltyst miljö",
    text: "Telefoner stängs av. Du förtjänar en stund utan avbrott.",
  },
  {
    icon: "♨️",
    title: "Perfekt temperatur",
    text: "Behandlingsrummet håller alltid rätt temperatur för maximal avkoppling.",
  },
];

export default function StudioSection() {
  return (
    <section className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Vår studio"
          title="En plats för ro och återhämtning"
          body="Designad för att ge dig maximal avkoppling från första stund – mjukt ljus, doftande oljor och ett lugnt tempo."
        />

        {/* Full-width studio image */}
        <div className="mt-12 relative aspect-[21/9] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/studio.png"
            alt="Wellness Studio – behandlingsrum med varmt och välkomnande ljus"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
          />
          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-wood-300">
              Storgatan 12, Stockholm
            </p>
            <p className="mt-1 text-lg font-bold text-white">
              Öppet mån–lör
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-choc-200"
            >
              <span className="flex-shrink-0 text-2xl">{f.icon}</span>
              <div>
                <h3 className="font-semibold text-choc-800">{f.title}</h3>
                <p className="mt-1 text-sm leading-6 text-choc-700">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
