import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const images = [
  {
    src: "https://picsum.photos/seed/spa-room-1/800/600",
    alt: "Behandlingsrum med mjukt ljus och varma toner",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://picsum.photos/seed/spa-towels/400/300",
    alt: "Varma handdukar och loungerock",
    className: "col-span-1",
  },
  {
    src: "https://picsum.photos/seed/spa-candles/400/300",
    alt: "Stämningsfull belysning med levande ljus",
    className: "col-span-1",
  },
  {
    src: "https://picsum.photos/seed/spa-stones/400/300",
    alt: "Hot stones och eteriska oljor",
    className: "col-span-1",
  },
  {
    src: "https://picsum.photos/seed/spa-reception/400/300",
    alt: "Lugnt väntrum och välkomnande reception",
    className: "col-span-1",
  },
];

export default function StudioSection() {
  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Vår studio"
          title="En plats för ro och återhämtning"
          body="Vår studio är designad för att ge dig maximal avkoppling från första stund – mjukt ljus, doftande oljor och ett lugnt tempo."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Large feature image */}
          <div className="relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-2xl sm:aspect-auto sm:h-full">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>

          {/* Four smaller images */}
          {images.slice(1).map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { icon: "🌿", title: "Naturliga ingredienser", text: "Vi använder enbart ekologiska oljor och naturbaserade produkter." },
            { icon: "🤫", title: "Stiltyst miljö", text: "Telefoner stängs av. Du förtjänar en stund utan avbrott." },
            { icon: "♨️", title: "Perfekt temperatur", text: "Behandlingsrummet håller alltid rätt temperatur för maximal avkoppling." },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-stone-100">
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <div>
                <h3 className="font-semibold text-slate-800">{f.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
