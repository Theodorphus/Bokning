"use client";

import { useActionState, useEffect, useRef } from "react";
import { addTimeSlot } from "@/app/admin/actions";

export default function AdminAddTimeSlotForm() {
  const [state, formAction, pending] = useActionState(addTimeSlot, null);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="rounded-xl bg-white p-6 ring-1 ring-sand-200">
      <form ref={formRef} action={formAction} className="space-y-4">
        {/* Date + Time */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="slot-date" className="block text-xs font-semibold text-choc-700 mb-1.5">
              Datum <span className="text-wood-500">*</span>
            </label>
            <input
              id="slot-date"
              name="date"
              type="date"
              required
              min={today}
              className="w-full rounded-lg px-3 py-2.5 text-sm text-choc-800 ring-1 ring-sand-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white"
            />
          </div>
          <div>
            <label htmlFor="slot-time" className="block text-xs font-semibold text-choc-700 mb-1.5">
              Starttid <span className="text-wood-500">*</span>
            </label>
            <input
              id="slot-time"
              name="start_time"
              type="time"
              required
              className="w-full rounded-lg px-3 py-2.5 text-sm text-choc-800 ring-1 ring-sand-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white"
            />
          </div>
        </div>

        {/* Duration + Service */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="slot-duration" className="block text-xs font-semibold text-choc-700 mb-1.5">
              Längd
            </label>
            <select
              id="slot-duration"
              name="duration_minutes"
              defaultValue="60"
              className="w-full rounded-lg px-3 py-2.5 text-sm text-choc-800 ring-1 ring-sand-200 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white"
            >
              <option value="30">30 min</option>
              <option value="45">45 min</option>
              <option value="60">60 min</option>
              <option value="75">75 min</option>
              <option value="90">90 min</option>
            </select>
          </div>
          <div>
            <label htmlFor="slot-service" className="block text-xs font-semibold text-choc-700 mb-1.5">
              Behandling (valfritt)
            </label>
            <input
              id="slot-service"
              name="service_id"
              type="text"
              placeholder="t.ex. avslappningsmassage"
              className="w-full rounded-lg px-3 py-2.5 text-sm text-choc-800 ring-1 ring-sand-200 placeholder:text-choc-400 focus:outline-none focus:ring-2 focus:ring-wood-400 bg-white"
            />
          </div>
        </div>

        {/* Feedback */}
        {state?.error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
            {state.error}
          </p>
        )}
        {state?.success && (
          <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700 ring-1 ring-green-200">
            ✓ Tidslucka tillagd!
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-xl bg-wood-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-wood-500 focus:outline-none focus:ring-2 focus:ring-wood-400 focus:ring-offset-2 disabled:opacity-50"
        >
          {pending ? "Lägger till…" : "Lägg till tidslucka"}
        </button>
      </form>
    </div>
  );
}
