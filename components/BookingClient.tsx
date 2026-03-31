"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Service } from "@/lib/services";
import type { Slot, SlotsByDate } from "@/lib/booking-types";
import Calendar from "./Calendar";
import TimeSlotList from "./TimeSlotList";
import BookingForm from "./BookingForm";
import BookingSuccess from "./BookingSuccess";

interface Props {
  services: Service[];
}

type Step = "pick-date" | "pick-slot" | "fill-form" | "success";

interface SuccessData {
  name: string;
  date: string;
  time: string;
  service?: string;
}

function toDisplayDate(isoDate: string) {
  return new Date(isoDate + "T00:00:00").toLocaleDateString("sv-SE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BookingClient({ services }: Props) {
  // ── Data ──────────────────────────────────────────────────────────────
  const [allSlots, setAllSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    fetch("/api/slots")
      .then((r) => r.json())
      .then((d) => setAllSlots(d.slots ?? []))
      .catch(() => setFetchError("Kunde inte hämta tillgängliga tider. Ladda om sidan."))
      .finally(() => setLoadingSlots(false));
  }, []);

  const slotsByDate: SlotsByDate = useMemo(() => {
    const grouped: SlotsByDate = {};
    for (const slot of allSlots) {
      (grouped[slot.date] ??= []).push(slot);
    }
    return grouped;
  }, [allSlots]);

  // ── Selection state ───────────────────────────────────────────────────
  const [step, setStep] = useState<Step>("pick-date");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<Slot | undefined>();
  const [successData, setSuccessData] = useState<SuccessData | undefined>();

  const selectedDateStr = selectedDate
    ? selectedDate.toISOString().split("T")[0]
    : "";
  const slotsForDate = selectedDateStr ? (slotsByDate[selectedDateStr] ?? []) : [];

  // ── Handlers ──────────────────────────────────────────────────────────
  const handleDateSelect = useCallback((date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedSlot(undefined);
    setStep(date ? "pick-slot" : "pick-date");
    // Scroll to slot list on mobile
    if (date) {
      setTimeout(
        () => document.getElementById("slot-list")?.scrollIntoView({ behavior: "smooth", block: "start" }),
        50
      );
    }
  }, []);

  const handleSlotSelect = useCallback((slot: Slot) => {
    setSelectedSlot(slot);
    setStep("fill-form");
    setTimeout(
      () => document.getElementById("booking-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50
    );
  }, []);

  const handleSuccess = useCallback(
    (name: string, date: string, time: string, service?: string) => {
      setSuccessData({ name, date, time, service });
      setStep("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  const handleReset = useCallback(() => {
    setStep("pick-date");
    setSelectedDate(undefined);
    setSelectedSlot(undefined);
    setSuccessData(undefined);
    // Re-fetch slots so the booked one is gone
    setLoadingSlots(true);
    fetch("/api/slots")
      .then((r) => r.json())
      .then((d) => setAllSlots(d.slots ?? []))
      .finally(() => setLoadingSlots(false));
  }, []);

  // ── Render ────────────────────────────────────────────────────────────

  if (step === "success" && successData) {
    return (
      <BookingSuccess
        name={successData.name}
        date={successData.date}
        time={successData.time}
        service={successData.service}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="space-y-10">
      {/* Loading / error state */}
      {loadingSlots && (
        <div className="flex items-center gap-3 rounded-xl bg-choc-50 px-5 py-4 text-sm text-choc-700 ring-1 ring-choc-200 border border-choc-200">
          <svg className="h-4 w-4 animate-spin text-wood-500" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Hämtar tillgängliga tider…
        </div>
      )}
      {fetchError && (
        <p className="rounded-xl bg-red-50 px-5 py-4 text-sm text-red-700 ring-1 ring-red-200">
          {fetchError}
        </p>
      )}

      {/* Main card */}
      {!fetchError && (
        <div className="rounded-2xl bg-white shadow-lg ring-1 ring-sand-100 overflow-hidden">
          {/* Progress bar */}
          <div className="flex border-b border-sand-100">
            {(["pick-date", "pick-slot", "fill-form"] as Step[]).map((s, i) => {
              const stepIndex = ["pick-date", "pick-slot", "fill-form"].indexOf(step);
              const isDone = i < stepIndex;
              const isCurrent = s === step;
              const labels = ["Välj datum", "Välj tid", "Dina uppgifter"];
              return (
                <div
                  key={s}
                  className={[
                    "flex-1 py-3 px-2 text-center text-xs font-medium transition-colors",
                    isCurrent
                      ? "bg-wood-600 text-white"
                      : isDone
                      ? "bg-wood-50 text-wood-600"
                      : "text-choc-500",
                  ].join(" ")}
                >
                  <span className="hidden sm:inline">{i + 1}. </span>
                  {labels[i]}
                </div>
              );
            })}
          </div>

          <div className="p-6 sm:p-10">
            {/* STEP 1 – Calendar */}
            <div>
              <p className="mb-4 text-sm font-semibold text-choc-700">
                Välj ett datum med lediga tider
              </p>
              {loadingSlots ? (
                <div className="h-64 animate-pulse rounded-xl bg-sand-50" />
              ) : (
                <Calendar
                  slotsByDate={slotsByDate}
                  selectedDate={selectedDate}
                  onSelectDate={handleDateSelect}
                />
              )}
            </div>

            {/* STEP 2 – Time slots */}
            {selectedDate && (
              <div id="slot-list" className="mt-8 border-t border-sand-100 pt-8">
                <p className="mb-4 text-sm font-semibold text-choc-700">
                  Lediga tider{" "}
                  <span className="font-normal text-choc-500 capitalize">
                    {toDisplayDate(selectedDateStr)}
                  </span>
                </p>
                <TimeSlotList
                  slots={slotsForDate}
                  selectedSlotId={selectedSlot?.id}
                  onSelect={handleSlotSelect}
                />
              </div>
            )}

            {/* STEP 3 – Booking form */}
            {selectedSlot && step === "fill-form" && (
              <div id="booking-form-section" className="mt-8 border-t border-sand-100 pt-8">
                <p className="mb-6 text-sm font-semibold text-choc-700">
                  Dina uppgifter
                </p>
                <BookingForm
                  slotId={selectedSlot.id}
                  slotDate={toDisplayDate(selectedSlot.date)}
                  slotTime={selectedSlot.start_time.slice(0, 5)}
                  services={services}
                  onSuccess={handleSuccess}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
