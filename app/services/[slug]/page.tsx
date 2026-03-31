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

  const ogImage =
    service.image_url ||
    `https://picsum.photos/seed/${slug}/1200/630`;

  return {
    title: service.title,
    description:
      service.short_description ??
      `Boka ${service.title} hos Wellness Studio i Stockholm.`,
    alternates: { canonical: `https://wellness-studio.se/services/${slug}` },
    openGraph: {
      title: `${service.title} – Wellness Studio`,
      description:
        service.short_description ??
        `Boka ${service.title} hos Wellness Studio i Stockholm.`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
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

  const { title, short_description, price, image_url } = service;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: short_description ?? undefined,
    provider: {
      "@type": "LocalBusiness",
      name: "Wellness Studio",
      url: "https://wellness-studio.se",
    },
    areaServed: "Stockholm",
    offers: price
      ? {
          "@type": "Offer",
          price: price,
          priceCurrency: "SEK",
        }
      : undefined,
  };

  const imageUrl =
    image_url ||
    `https://picsum.photos/seed/${slug}/1200/600`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div>
        {/* Back link */}
        <div className="bg-white border-b border-sand-100">
          <div className="mx-auto max-w-5xl px-6 py-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-choc-500 transition-colors hover:text-wood-600"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Alla behandlingar
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[21/9] overflow-hidden bg-sand-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold tracking-tight text-choc-900 sm:text-4xl">
                {title}
              </h1>

              {price && (
                <p className="mt-3 text-2xl font-bold text-wood-600">
                  {price}
                </p>
              )}

              {short_description && (
                <p className="mt-6 text-lg leading-8 text-choc-600">
                  {short_description}
                </p>
              )}

              {/* Benefits list */}
              <div className="mt-10">
                <h2 className="text-lg font-semibold text-choc-800">
                  Vad ingår i behandlingen?
                </h2>
                <ul className="mt-4 space-y-3">
                  {[
                    "Individuell konsultation innan behandlingen",
                    "Anpassad teknik efter dina behov",
                    "Ekologiska massageoljor",
                    "Lugn och välkomnade studiomiljö",
                    "Rekommendationer för hemövningar",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-choc-600">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-wood-100 text-wood-600 text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl bg-wood-50 p-7 ring-1 ring-wood-100">
                <h2 className="font-semibold text-choc-800">Boka {title}</h2>
                {price && (
                  <p className="mt-1 text-sm text-choc-500">
                    Pris: <span className="font-semibold text-wood-600">{price}</span>
                  </p>
                )}
                <p className="mt-4 text-sm leading-7 text-choc-600">
                  Välkommen att boka din tid online. Vi bekräftar bokningen via
                  e-post inom kort.
                </p>
                <Link
                  href={`/booking?service=${encodeURIComponent(title)}`}
                  className="mt-6 flex w-full items-center justify-center rounded-full bg-wood-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-wood-500"
                >
                  Boka {title}
                </Link>
                <div className="mt-6 space-y-2 text-sm text-choc-600">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-wood-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+46701234567" className="hover:text-wood-600">070-123 45 67</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-wood-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:kontakt@wellness.se" className="hover:text-wood-600">kontakt@wellness.se</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related CTA */}
        <section className="bg-sand-50 py-16">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="text-xl font-bold text-choc-800">Vill du se fler behandlingar?</h2>
            <p className="mt-3 text-sm text-choc-600">
              Vi erbjuder ett brett utbud av massagebehandlingar – alla anpassade efter dina behov.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-block text-sm font-semibold text-wood-600 hover:text-wood-500"
            >
              ← Tillbaka till alla behandlingar
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
