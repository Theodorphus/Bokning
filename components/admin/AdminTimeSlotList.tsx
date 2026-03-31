"use client";

import { useOptimistic, useTransition } from "react";
import { deleteTimeSlot } from "@/app/admin/actions";

interface Slot {
  id: string;
  date: string;
  start_time: string;
  duration_minutes: number;
  service_id: string | null;
  is_available: boolean;
}

interface Props {
  slots: Slot[];
}

export default function AdminTimeSlotList({ slots }: Props) {
  const [optimistic, removeOptimistic] = useOptimistic(
    slots,
    (state, id: string) => state.filter((s) => s.id !== id)
  );
  const [, startTransition] = useTransition();

  function handleDelete(id: string) {
    startTransition(async () => {
      removeOptimistic(id);
      await deleteTimeSlot(id);
    });
  }

  if (optimistic.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 text-center ring-1 ring-choc-200 border border-choc-200">
        <p className="text-sm text-choc-700">Inga kommande tidsluckor.</p>
      </div>
    );
  }

  // Group by date
  const byDate = optimistic.reduce<Record<string, Slot[]>>((acc, slot) => {
    (acc[slot.date] ??= []).push(slot);
    return acc;
  }, {});

  return (
    <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
      {Object.entries(byDate).map(([date, dateSlots]) => (
        <div key={date} className="overflow-hidden rounded-xl bg-white ring-1 ring-sand-200">
          {/* Date header */}
          <div className="border-b border-sand-100 bg-sand-50 px-4 py-2.5">
            <p className="text-xs font-semibold capitalize text-choc-700">
              {new Date(date + "T00:00:00").toLocaleDateString("sv-SE", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>
          </div>

          {/* Slots */}
          <ul className="divide-y divide-sand-100">
            {dateSlots.map((slot) => (
              <li key={slot.id} className="flex items-center justify-between px-4 py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-choc-900">
                    {slot.start_time.slice(0, 5)}
                  </span>
                  <span className="text-xs text-choc-700">{slot.duration_minutes} min</span>
                  {slot.service_id && (
                    <span className="rounded-full bg-wood-50 px-2 py-0.5 text-xs text-wood-700">
                      {slot.service_id}
                    </span>
                  )}
                  {!slot.is_available && (
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
                      Bokad
                    </span>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(slot.id)}
                  aria-label="Ta bort tidslucka"
                  className="ml-4 flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                >
                  Ta bort
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
