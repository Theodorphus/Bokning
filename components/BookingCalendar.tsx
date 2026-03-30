"use client";

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { sv } from "react-day-picker/locale";
import "react-day-picker/src/style.css";

interface Props {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

export default function BookingCalendar({ selectedDate, onSelectDate }: Props) {
  const [availableDates, setAvailableDates] = useState<Set<string>>(new Set());
  const [month, setMonth] = useState<Date>(new Date());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAvailableMonth = async () => {
      setLoading(true);
      const year = month.getFullYear();
      const m = month.getMonth();
      const daysInMonth = new Date(year, m + 1, 0).getDate();
      const dates = new Set<string>();

      // Fetch all days in the month in parallel
      const promises = Array.from({ length: daysInMonth }, (_, i) => {
        const d = new Date(year, m, i + 1);
        const dateStr = d.toISOString().split("T")[0];
        return fetch(`/api/slots?date=${dateStr}`)
          .then((r) => r.json())
          .then((data) => {
            if (data.slots?.length > 0) dates.add(dateStr);
          })
          .catch(() => {});
      });

      await Promise.all(promises);
      setAvailableDates(dates);
      setLoading(false);
    };

    fetchAvailableMonth();
  }, [month]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isAvailable = (date: Date) => {
    const str = date.toISOString().split("T")[0];
    return availableDates.has(str);
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-white/70">
          <span className="text-sm text-choc-500">Laddar tillgängliga tider…</span>
        </div>
      )}
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onSelectDate}
        month={month}
        onMonthChange={setMonth}
        locale={sv}
        disabled={[
          { before: today },
          (date) => !isAvailable(date),
        ]}
        modifiers={{ available: (date) => isAvailable(date) }}
        modifiersClassNames={{
          available: "rdp-day--available",
        }}
        classNames={{
          root: "rdp-custom",
        }}
      />
      <style>{`
        .rdp-custom {
          --rdp-accent-color: #A68A6A;
          --rdp-accent-background-color: #FBF7F3;
          font-family: inherit;
        }
        .rdp-day--available:not([disabled]) {
          font-weight: 600;
          color: #4A3828;
        }
        .rdp-day--available:not([disabled]):hover {
          background-color: #F2E8D9;
        }
      `}</style>
    </div>
  );
}
