import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Tjänster",
  description: "Utforska våra tjänster",
};

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Tjänster
      </h1>
      <p className="mt-3 text-slate-600">
        {services.length} tjänst{services.length !== 1 ? "er" : ""}
      </p>

      {services.length === 0 ? (
        <p className="mt-12 text-slate-500">Inga tjänster hittades.</p>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {service.serviceFields.image?.sourceUrl && (
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
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
                  <h2 className="font-semibold text-slate-900 group-hover:text-indigo-600">
                    {service.title}
                  </h2>
                  {service.serviceFields.shortDescription && (
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">
                      {service.serviceFields.shortDescription}
                    </p>
                  )}
                  {service.serviceFields.price && (
                    <p className="mt-4 text-sm font-semibold text-indigo-600">
                      {service.serviceFields.price}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
