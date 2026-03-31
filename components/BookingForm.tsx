"use client";

import { useState } from "react";
import type { Service } from "@/lib/services";

interface Props {
  slotId: string;
  slotDate: string;   // display string, e.g. "måndag 14 april 2026"
  slotTime: string;   // "HH:MM"
  services: Service[];
  initialService?: string;
  onSuccess: (name: string, date: string, time: string, service?: string) => void;
}

const inputCls =
  "w-full rounded-lg px-4 py-3 text-sm text-choc-800 ring-1 ring-choc-200 placeholder:text-choc-500 focus:outline-none focus:ring-2 focus:ring-wood-400 transition-shadow bg-white disabled:bg-choc-50 disabled:text-choc-500";
const labelCls = "block text-sm font-medium text-choc-800 mb-1.5";

export default function BookingForm({
  slotId,
  slotDate,
  slotTime,
  services,
  initialService = "",
  onSuccess,
}: Props) {
  const [service, setService] = useState(initialService);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const get = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement)?.value ?? "";

    const payload = {
      slot_id: slotId,
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      service,
      message: get("message"),
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message ?? "Något gick fel. Försök igen.");
      }

      onSuccess(payload.name, slotDate, slotTime, service || undefined);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Något gick fel. Försök igen.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Selected time reminder */}
      <div className="rounded-xl bg-wood-50 px-5 py-3 ring-1 ring-wood-100 text-sm text-choc-700">
        <span className="font-semibold text-wood-700">Vald tid:</span>{" "}
        <span className="capitalize">{slotDate}</span> kl. {slotTime}
      </div>

      {/* Service dropdown */}
      {services.length > 0 && (
        <div>
          <label className={labelCls}>Behandling</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            disabled={loading}
            className={inputCls}
          >
            <option value="">Välj behandling (valfritt)…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
                {s.price ? ` – ${s.price}` : ""}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-name" className={labelCls}>
            Namn <span className="text-wood-500">*</span>
          </label>
          <input
            id="bf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Ditt namn"
            disabled={loading}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="bf-email" className={labelCls}>
            E-post <span className="text-wood-500">*</span>
          </label>
          <input
            id="bf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="din@email.com"
            disabled={loading}
            className={inputCls}
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="bf-phone" className={labelCls}>
          Telefon
        </label>
        <input
          id="bf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+46 70 000 00 00"
          disabled={loading}
          className={`${inputCls} sm:max-w-xs`}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="bf-message" className={labelCls}>
          Meddelande
        </label>
        <textarea
          id="bf-message"
          name="message"
          rows={4}
          placeholder="Övriga önskemål, allergier eller frågor…"
          disabled={loading}
          className={inputCls}
        />
      </div>

      {/* Error */}
      {error && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200"
        >
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-wood-600 px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-wood-500 focus:outline-none focus:ring-2 focus:ring-wood-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {loading ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Skickar…
          </>
        ) : (
          "Bekräfta bokning"
        )}
      </button>
    </form>
  );
}
