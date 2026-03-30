"use client";

import { useMemo, useState } from "react";
import type { SlotsByDate } from "@/lib/booking-types";

interface Props {
  slotsByDate: SlotsByDate;
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

// Swedish weekday headers, starting Monday
const WEEKDAYS = ["Må", "Ti", "On", "To", "Fr", "Lö", "Sö"];

// Swedish month names
const MONTHS = [
  "januari", "februari", "mars", "april", "maj", "juni",
  "juli", "augusti", "september", "oktober", "november", "december",
];

function toDateStr(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

interface DayCell {
  day: number;
  dateStr: string;
  date: Date;
  isCurrentMonth: boolean;
  isPast: boolean;
  isToday: boolean;
  isAvailable: boolean;
  isSelected: boolean;
}

export default function Calendar({ slotsByDate, selectedDate, onSelectDate }: Props) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // Start on the month that contains today (or selected date)
  const [viewYear, setViewYear] = useState(() =>
    selectedDate ? selectedDate.getFullYear() : today.getFullYear()
  );
  const [viewMonth, setViewMonth] = useState(() =>
    selectedDate ? selectedDate.getMonth() : today.getMonth()
  );

  const availableDateStrings = useMemo(
    () => new Set(Object.keys(slotsByDate)),
    [slotsByDate]
  );

  // Build the 6-row × 7-col grid
  const cells = useMemo<DayCell[]>(() => {
    const result: DayCell[] = [];
    const firstDay = new Date(viewYear, viewMonth, 1);
    // Day-of-week for the 1st: 0=Sun…6=Sat → convert to Mon-first (0=Mon…6=Sun)
    const startDow = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

    // Leading days from previous month
    for (let i = startDow - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const prevMonth = viewMonth === 0 ? 11 : viewMonth - 1;
      const prevYear = viewMonth === 0 ? viewYear - 1 : viewYear;
      const date = new Date(prevYear, prevMonth, day);
      result.push({
        day,
        dateStr: toDateStr(prevYear, prevMonth, day),
        date,
        isCurrentMonth: false,
        isPast: date < today,
        isToday: false,
        isAvailable: false,
        isSelected: false,
      });
    }

    // Days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(viewYear, viewMonth, day);
      const dateStr = toDateStr(viewYear, viewMonth, day);
      result.push({
        day,
        dateStr,
        date,
        isCurrentMonth: true,
        isPast: date < today,
        isToday: isSameDay(date, today),
        isAvailable: availableDateStrings.has(dateStr),
        isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      });
    }

    // Trailing days to complete the grid (always fill to multiple of 7)
    const remainder = result.length % 7;
    if (remainder !== 0) {
      const trailing = 7 - remainder;
      const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1;
      const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear;
      for (let day = 1; day <= trailing; day++) {
        const date = new Date(nextYear, nextMonth, day);
        result.push({
          day,
          dateStr: toDateStr(nextYear, nextMonth, day),
          date,
          isCurrentMonth: false,
          isPast: date < today,
          isToday: false,
          isAvailable: false,
          isSelected: false,
        });
      }
    }

    return result;
  }, [viewYear, viewMonth, today, availableDateStrings, selectedDate]);

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  }

  function handleClick(cell: DayCell) {
    if (!cell.isCurrentMonth || cell.isPast || !cell.isAvailable) return;
    if (selectedDate && isSameDay(cell.date, selectedDate)) {
      onSelectDate(undefined); // deselect
    } else {
      onSelectDate(cell.date);
    }
  }

  // Disable prev-nav if we're already on the current month
  const isCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();

  return (
    <div className="w-full select-none">
      {/* ── Navigation ──────────────────────────────────────────── */}
      <div className="mb-5 flex items-center justify-between">
        <button
          type="button"
          onClick={prevMonth}
          disabled={isCurrentMonth}
          aria-label="Föregående månad"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-sand-200 bg-sand-50 text-choc-600 transition-colors hover:bg-sand-100 disabled:pointer-events-none disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <h2 className="text-base font-bold capitalize tracking-tight text-choc-800">
          {MONTHS[viewMonth]} {viewYear}
        </h2>

        <button
          type="button"
          onClick={nextMonth}
          aria-label="Nästa månad"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-sand-200 bg-sand-50 text-choc-600 transition-colors hover:bg-sand-100"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── Weekday headers ─────────────────────────────────────── */}
      <div className="mb-2 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((wd) => (
          <div
            key={wd}
            className="py-1 text-center text-[0.65rem] font-semibold uppercase tracking-widest text-choc-400"
          >
            {wd}
          </div>
        ))}
      </div>

      {/* ── Day grid ────────────────────────────────────────────── */}
      <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
        {cells.map((cell, i) => {
          const isClickable = cell.isCurrentMonth && !cell.isPast && cell.isAvailable;

          // Style decision tree
          let cellStyle: string;
          if (!cell.isCurrentMonth) {
            // Faded placeholder — not interactive
            cellStyle = "opacity-20 pointer-events-none text-choc-400";
          } else if (cell.isSelected) {
            // Selected
            cellStyle =
              "bg-olive-500 text-white shadow-md ring-2 ring-olive-500 ring-offset-1 font-bold";
          } else if (cell.isAvailable) {
            // Available — clickable, highlighted
            cellStyle =
              "border border-olive-400/50 bg-olive-400/10 text-choc-800 font-semibold hover:bg-olive-400/25 hover:border-olive-400 cursor-pointer";
          } else if (cell.isPast) {
            // Past — greyed, not interactive
            cellStyle = "text-choc-300 opacity-40 pointer-events-none";
          } else {
            // Future but no slots
            cellStyle = "text-choc-400 opacity-50 pointer-events-none";
          }

          return (
            <button
              key={`${cell.dateStr}-${i}`}
              type="button"
              onClick={() => handleClick(cell)}
              disabled={!isClickable}
              aria-label={`${cell.day} ${MONTHS[viewMonth]}`}
              aria-pressed={cell.isSelected}
              className={[
                "relative flex flex-col items-center justify-center rounded-xl py-2.5 text-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 focus-visible:ring-offset-1",
                cellStyle,
              ].join(" ")}
            >
              <span>{cell.day}</span>
              {/* Dot for today */}
              {cell.isToday && !cell.isSelected && (
                <span className="mt-0.5 h-1 w-1 rounded-full bg-olive-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Legend ──────────────────────────────────────────────── */}
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-choc-500">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-5 rounded border border-olive-400/50 bg-olive-400/10" />
          Lediga tider
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-5 rounded bg-olive-500" />
          Vald
        </span>
      </div>
    </div>
  );
}
