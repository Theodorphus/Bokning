"use client";

import { useEffect, useState } from "react";

interface Slot {
  id: string;
  start_time: string;
  duration_minutes: number;
  service_id: string | null;
}

interface Props {
  date: string;
  selectedSlotId: string | undefined;
  onSelectSlot: (slotId: string, startTime: string) => void;
}

export default function TimeSlotPicker({ date, selectedSlotId, onSelectSlot }: Props) {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!date) return;
    setLoading(true);
    fetch(`/api/slots?date=${date}`)
      .then((r) => r.json())
      .then((data) => setSlots(data.slots ?? []))
      .catch(() => setSlots([]))
      .finally(() => setLoading(false));
  }, [date]);

  if (loading) {
    return (
      <p className="py-4 text-sm text-choc-500">Laddar tillgängliga tider…</p>
    );
  }

  if (slots.length === 0) {
    return (
      <p className="py-4 text-sm text-choc-500">
        Inga lediga tider detta datum. Välj ett annat datum.
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
            onClick={() => onSelectSlot(slot.id, time)}
            className={[
              "rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wood-600",
              isSelected
                ? "border-wood-600 bg-wood-600 text-white"
                : "border-sand-200 bg-white text-choc-700 hover:border-wood-400 hover:bg-wood-50",
            ].join(" ")}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
}
