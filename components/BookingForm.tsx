"use client";

import { useEffect, useState } from "react";
import type { Service } from "@/lib/services";

interface BookingFormProps {
  services: Service[];
  selectedService: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-lg px-4 py-3 text-sm text-slate-800 ring-1 ring-stone-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-shadow bg-white disabled:bg-stone-50 disabled:text-slate-400";

const labelClasses = "block text-sm font-medium text-slate-700 mb-1.5";

export default function BookingForm({
  services,
  selectedService,
}: BookingFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceValue, setServiceValue] = useState(selectedService);

  useEffect(() => {
    setServiceValue(selectedService);
  }, [selectedService]);

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50">
          <svg
            className="h-8 w-8 text-rose-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-800">Tack!</h3>
        <p className="text-slate-600">Vi återkommer inom kort.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-rose-600 underline-offset-2 hover:underline"
        >
          Skicka en ny förfrågan
        </button>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement)
        ?.value ?? "";

    const data = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      service: serviceValue,
      datetime: get("datetime"),
      message: get("message"),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(
          (json as { message?: string }).message ?? "Något gick fel. Försök igen."
        );
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Något gick fel. Försök igen."
      );
    }
  }

  const isLoading = status === "loading";

  return (
    <div className="rounded-2xl bg-white px-6 py-10 shadow-lg ring-1 ring-stone-100 sm:px-10">
      <h2 className="text-xl font-bold text-slate-800">
        Skicka bokningsförfrågan
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Fyll i formuläret så återkommer vi för att bekräfta din tid.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        {/* Name + Email row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Namn <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Ditt namn"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              E-post <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="din@email.com"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Phone + Datetime row */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+46 70 000 00 00"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="datetime" className={labelClasses}>
              Önskad tid
            </label>
            <input
              id="datetime"
              name="datetime"
              type="datetime-local"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Service select */}
        {services.length > 0 && (
          <div>
            <label htmlFor="service" className={labelClasses}>
              Behandling
            </label>
            <select
              id="service"
              name="service"
              value={serviceValue}
              onChange={(e) => setServiceValue(e.target.value)}
              disabled={isLoading}
              className={inputClasses}
            >
              <option value="">Välj behandling...</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                  {s.serviceFields.price ? ` – ${s.serviceFields.price}` : ""}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Övriga önskemål eller frågor..."
            disabled={isLoading}
            className={inputClasses}
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <p
            role="alert"
            className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200"
          >
            {errorMessage}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isLoading && (
            <svg
              className="h-4 w-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
          )}
          {isLoading ? "Skickar..." : "Skicka förfrågan"}
        </button>
      </form>
    </div>
  );
}
