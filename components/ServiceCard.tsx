"use client";

import Image from "next/image";
import type { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
  selected: boolean;
  onSelect: (name: string) => void;
}

export default function ServiceCard({
  service,
  selected,
  onSelect,
}: ServiceCardProps) {
  const cardClasses = [
    "group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all",
    selected
      ? "border-rose-400 ring-2 ring-rose-400"
      : "border-slate-200 hover:shadow-md hover:border-stone-300",
  ].join(" ");

  return (
    <article
      className={cardClasses}
      onClick={() => onSelect(service.title)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(service.title);
        }
      }}
      role="button"
      tabIndex={0}
    >
      {service.serviceFields.image?.sourceUrl && (
        <div className="relative aspect-video overflow-hidden bg-stone-100">
          <Image
            src={service.serviceFields.image.sourceUrl}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-slate-800">{service.title}</h3>

        {service.serviceFields.shortDescription && (
          <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">
            {service.serviceFields.shortDescription}
          </p>
        )}

        {service.serviceFields.price && (
          <p className="mt-3 text-sm font-semibold text-rose-600">
            {service.serviceFields.price}
          </p>
        )}

        <button
          type="button"
          className={[
            "mt-4 rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
            selected
              ? "bg-rose-100 text-rose-700"
              : "bg-rose-600 text-white hover:bg-rose-500",
          ].join(" ")}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(service.title);
          }}
        >
          {selected ? "✓ Vald" : "Välj behandling"}
        </button>
      </div>
    </article>
  );
}
