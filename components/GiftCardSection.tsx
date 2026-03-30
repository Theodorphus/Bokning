import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const occasions = [
  { label: "Födelsedag", icon: "🎂" },
  { label: "Jul", icon: "🎄" },
  { label: "Mors dag", icon: "💐" },
  { label: "Alla hjärtans dag", icon: "❤️" },
  { label: "Student", icon: "🎓" },
  { label: "Tack-present", icon: "🙏" },
];

export default function GiftCardSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <SectionHeader
              eyebrow="Presentkort"
              title="Ge bort välmående"
              body="Ett presentkort på massage är mer än en present – det är en stund av ro, återhämtning och omsorg. Alltid uppskattat, alltid rätt."
              center={false}
            />

            {/* Occasions */}
            <div className="mt-8">
              <p className="text-sm font-medium text-slate-500">Perfekt till</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {occasions.map((o) => (
                  <li
                    key={o.label}
                    className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {o.icon} {o.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <ul className="mt-8 space-y-3">
              {[
                "Giltigt i 12 månader från köpdatum",
                "Skickas digitalt direkt via e-post",
                "Gäller alla behandlingar i studion",
                "Valfri behandling, belopp eller paket",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs text-rose-600">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/gift-cards"
                className="rounded-full bg-rose-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-rose-500"
              >
                Köp presentkort
              </Link>
              <a
                href="tel:+46701234567"
                className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-stone-50"
              >
                Ring oss
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/presentkort.png"
                alt="Presentkort på massage – ge bort välmående"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative blur */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-rose-200/40 blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
