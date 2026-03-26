import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.serviceFields.shortDescription ?? undefined,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  const { title, serviceFields } = service;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/services"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Alla tjänster
      </Link>

      {serviceFields.image?.sourceUrl && (
        <div className="relative mt-6 aspect-video overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={serviceFields.image.sourceUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      )}

      <div className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>

        {serviceFields.price && (
          <p className="mt-3 text-xl font-semibold text-indigo-600">
            {serviceFields.price}
          </p>
        )}

        {serviceFields.shortDescription && (
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {serviceFields.shortDescription}
          </p>
        )}

        <div className="mt-10">
          <a
            href="#kontakt"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Kontakta oss
          </a>
        </div>
      </div>
    </div>
  );
}
