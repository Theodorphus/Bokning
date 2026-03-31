"use client";

import { useActionState } from "react";
import { updateGlobalSettings } from "@/app/admin/actions";

interface AdminSettingsPanelProps {
  showGiftCards: boolean;
  showCorporateMassage: boolean;
}

export default function AdminSettingsPanel({ showGiftCards, showCorporateMassage }: AdminSettingsPanelProps) {
  const [state, formAction, pending] = useActionState(updateGlobalSettings, null);

  return (
    <div className="rounded-xl bg-white p-6 ring-1 ring-choc-200 border border-choc-200">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-choc-800">Webbplatsinställningar</h2>
        <p className="mt-1 text-sm text-choc-700">Hantera funktioner och sidor på webbplatsen</p>
      </div>

      <form action={formAction} className="space-y-6">
        {/* Gift Cards toggle */}
        <div className="flex items-center justify-between rounded-lg bg-choc-50 p-4 border border-choc-200">
          <div className="flex-1">
            <label htmlFor="show-gift-cards" className="text-sm font-semibold text-choc-800">
              Presentkortssida
            </label>
            <p className="mt-1 text-xs text-choc-700">
              Aktivera eller inaktivera presentkortssidan. Länken försvinner från menyn när den är inaktiverad.
            </p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <input
              id="show-gift-cards"
              name="show_gift_cards"
              type="checkbox"
              defaultChecked={showGiftCards}
              className="h-5 w-5 rounded border-choc-200 text-wood-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Corporate Massage toggle */}
        <div className="flex items-center justify-between rounded-lg bg-choc-50 p-4 border border-choc-200">
          <div className="flex-1">
            <label htmlFor="show-corporate-massage" className="text-sm font-semibold text-choc-800">
              Företagsmassage-sidan
            </label>
            <p className="mt-1 text-xs text-choc-700">
              Aktivera eller inaktivera företagsmassage-sidan. Länken försvinner från menyn när den är inaktiverad.
            </p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <input
              id="show-corporate-massage"
              name="show_corporate_massage"
              type="checkbox"
              defaultChecked={showCorporateMassage}
              className="h-5 w-5 rounded border-choc-200 text-wood-600 cursor-pointer"
            />
          </div>
        </div>

        {/* Message */}
        {state?.success && (
          <div className="rounded-lg bg-green-50 p-4 border border-green-200">
            <p className="text-sm font-medium text-green-800">Inställningar uppdaterade!</p>
          </div>
        )}
        {state?.error && (
          <div className="rounded-lg bg-red-50 p-4 border border-red-200">
            <p className="text-sm font-medium text-red-800">{state.error}</p>
          </div>
        )}

        {/* Save button */}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-wood-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-wood-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? "Sparar..." : "Spara inställningar"}
        </button>
      </form>
    </div>
  );
}
