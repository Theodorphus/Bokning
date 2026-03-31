"use client";

import { useActionState } from "react";
import { savePageContent } from "@/app/admin/actions";
import type { PageContent } from "@/lib/cms-types";

interface AdminHomepageFormProps {
  content: PageContent;
}

export default function AdminHomepageForm({ content }: AdminHomepageFormProps) {
  const [state, formAction, pending] = useActionState(savePageContent, null);

  return (
    <div className="rounded-xl bg-white p-6 ring-1 ring-choc-200 border border-choc-200">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-choc-800">Redigera startsida</h2>
        <p className="mt-1 text-sm text-choc-700">Uppdatera hero-sektion på hemligastartsida</p>
      </div>

      <form action={formAction} className="space-y-6">
        <input type="hidden" name="page" value="homepage" />

        {/* Hero Title */}
        <div>
          <label htmlFor="hero_title" className="block text-sm font-semibold text-choc-800 mb-2">
            Hero-titel
          </label>
          <input
            id="hero_title"
            name="hero_title"
            type="text"
            defaultValue={content.hero_title || ""}
            className="w-full rounded-lg px-4 py-3 text-sm text-choc-800 ring-1 ring-choc-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white"
            placeholder="t.ex. Hitta din balans. Känn skillnaden."
          />
        </div>

        {/* Hero Subtitle */}
        <div>
          <label htmlFor="hero_subtitle" className="block text-sm font-semibold text-choc-800 mb-2">
            Hero-undertext
          </label>
          <textarea
            id="hero_subtitle"
            name="hero_subtitle"
            rows={3}
            defaultValue={content.hero_subtitle || ""}
            className="w-full rounded-lg px-4 py-3 text-sm text-choc-800 ring-1 ring-choc-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white resize-none"
            placeholder="Huvudtext för hero-sektion..."
          />
        </div>

        {/* Hero Image */}
        <div>
          <label htmlFor="hero_image" className="block text-sm font-semibold text-choc-800 mb-2">
            Hero-bild (sökväg)
          </label>
          <input
            id="hero_image"
            name="hero_image"
            type="text"
            defaultValue={content.hero_image || ""}
            className="w-full rounded-lg px-4 py-3 text-sm text-choc-800 ring-1 ring-choc-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white"
            placeholder="t.ex. /images/hero.png"
          />
          <p className="mt-2 text-xs text-choc-600">
            Bilden måste ligga i /public/images/
          </p>
        </div>

        {/* Messages */}
        {state?.success && (
          <div className="rounded-lg bg-green-50 p-4 border border-green-200">
            <p className="text-sm font-medium text-green-800">Startsidan uppdaterad!</p>
          </div>
        )}
        {state?.error && (
          <div className="rounded-lg bg-red-50 p-4 border border-red-200">
            <p className="text-sm font-medium text-red-800">{state.error}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-wood-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-wood-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Sparar..." : "Spara startsida"}
        </button>
      </form>
    </div>
  );
}
