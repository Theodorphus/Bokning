"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormStatus = "idle" | "loading" | "error";

const inputClasses =
  "w-full rounded-lg px-4 py-3 text-sm text-slate-800 ring-1 ring-stone-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-shadow bg-white disabled:bg-stone-50 disabled:text-slate-400";

const labelClasses = "block text-sm font-medium text-slate-700 mb-1.5";

export default function CorporateForm() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)
        ?.value ?? "";

    const data = {
      name: get("name"),
      company: get("company"),
      email: get("email"),
      employees: get("employees"),
      message: get("message"),
    };

    try {
      const res = await fetch("/api/quote", {
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

      router.push("/corporate-massage/tack");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Något gick fel. Försök igen."
      );
    }
  }

  const isLoading = status === "loading";

  return (
    <div className="rounded-2xl bg-stone-50 px-8 py-10 ring-1 ring-stone-100">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="corp-name" className={labelClasses}>
              Namn <span className="text-rose-500">*</span>
            </label>
            <input
              id="corp-name"
              name="name"
              type="text"
              required
              placeholder="Ditt namn"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="corp-company" className={labelClasses}>
              Företag <span className="text-rose-500">*</span>
            </label>
            <input
              id="corp-company"
              name="company"
              type="text"
              required
              placeholder="Företagsnamn"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="corp-email" className={labelClasses}>
              E-post <span className="text-rose-500">*</span>
            </label>
            <input
              id="corp-email"
              name="email"
              type="email"
              required
              placeholder="din@foretag.se"
              disabled={isLoading}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="corp-employees" className={labelClasses}>
              Antal anställda
            </label>
            <select
              id="corp-employees"
              name="employees"
              disabled={isLoading}
              className={inputClasses}
            >
              <option value="">Välj...</option>
              <option value="1-5">1–5</option>
              <option value="6-15">6–15</option>
              <option value="16-30">16–30</option>
              <option value="30+">30+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="corp-message" className={labelClasses}>
            Berätta mer om vad ni söker
          </label>
          <textarea
            id="corp-message"
            name="message"
            rows={4}
            placeholder="Vilken typ av massage, ungefär när, hur ofta..."
            disabled={isLoading}
            className={inputClasses}
          />
        </div>

        {status === "error" && (
          <p
            role="alert"
            className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200"
          >
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isLoading && (
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          )}
          {isLoading ? "Skickar..." : "Skicka offertförfrågan"}
        </button>
      </form>
    </div>
  );
}
