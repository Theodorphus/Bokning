"use client";

import type { Slot } from "@/lib/booking-types";

interface Props {
  slots: Slot[];
  selectedSlotId: string | undefined;
  onSelect: (slot: Slot) => void;
}

export default function TimeSlotList({ slots, selectedSlotId, onSelect }: Props) {
  if (slots.length === 0) {
    return (
      <p className="rounded-xl bg-sand-100 px-4 py-3 text-sm text-choc-500">
        Inga lediga tider detta datum.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {slots.map((slot) => {
        const time = slot.start_time.slice(0, 5);
        const isSelected = slot.id === selectedSlotId;
        return (
          <button
            key={slot.id}
            type="button"
            onClick={() => onSelect(slot)}
            aria-pressed={isSelected}
            className={[
              "rounded-xl border px-5 py-2.5 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-wood-600 focus-visible:ring-offset-2",
              isSelected
                ? "border-wood-600 bg-wood-600 text-white shadow-sm"
                : "border-sand-200 bg-white text-choc-700 hover:border-wood-300 hover:bg-wood-50",
            ].join(" ")}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
}
