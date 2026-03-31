"use client";

import { useActionState } from "react";
import { savePageContent } from "@/app/admin/actions";
import type { PageContent } from "@/lib/cms-types";

interface AdminGiftCardsFormProps {
  content: PageContent;
}

export default function AdminGiftCardsForm({ content }: AdminGiftCardsFormProps) {
  const [state, formAction, pending] = useActionState(savePageContent, null);

  return (
    <div className="rounded-xl bg-white p-6 ring-1 ring-choc-200 border border-choc-200">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-choc-800">Redigera presentkorts-sidan</h2>
        <p className="mt-1 text-sm text-choc-700">Uppdatera innehål på presentkorts-sidan</p>
      </div>

      <form action={formAction} className="space-y-6">
        <input type="hidden" name="page" value="gift_cards" />

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-choc-800 mb-2">
            Rubrik
          </label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={content.title || ""}
            className="w-full rounded-lg px-4 py-3 text-sm text-choc-800 ring-1 ring-choc-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white"
            placeholder="t.ex. Presentkort"
          />
        </div>

        {/* Body */}
        <div>
          <label htmlFor="body" className="block text-sm font-semibold text-choc-800 mb-2">
            Huvudtext
          </label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={content.body || ""}
            className="w-full rounded-lg px-4 py-3 text-sm text-choc-800 ring-1 ring-choc-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white resize-none"
            placeholder="Huvudtext för presentkorts-sidan..."
          />
        </div>

        {/* Image */}
        <div>
          <label htmlFor="image_url" className="block text-sm font-semibold text-choc-800 mb-2">
            Bild (sökväg)
          </label>
          <input
            id="image_url"
            name="image_url"
            type="text"
            defaultValue={content.image_url || ""}
            className="w-full rounded-lg px-4 py-3 text-sm text-choc-800 ring-1 ring-choc-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white"
            placeholder="t.ex. /images/gift-cards.png"
          />
          <p className="mt-2 text-xs text-choc-600">
            Bilden måste ligga i /public/images/
          </p>
        </div>

        {/* Messages */}
        {state?.success && (
          <div className="rounded-lg bg-green-50 p-4 border border-green-200">
            <p className="text-sm font-medium text-green-800">Presentkorts-sidan uppdaterad!</p>
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
          {pending ? "Sparar..." : "Spara presentkorts-sidan"}
        </button>
      </form>
    </div>
  );
}
