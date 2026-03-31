"use client";

import { useOptimistic, useTransition } from "react";
import { markBookingCompleted } from "@/app/admin/actions";

interface Booking {
  id: string;
  date: string;
  start_time: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

interface Props {
  bookings: Booking[];
}

const STATUS_STYLE: Record<string, string> = {
  pending: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  completed: "bg-green-50 text-green-700 ring-1 ring-green-200",
  cancelled: "bg-red-50 text-red-700 ring-1 ring-red-200",
};
const STATUS_LABEL: Record<string, string> = {
  pending: "Väntande",
  completed: "Avklarad",
  cancelled: "Avbokad",
};

export default function AdminBookingsList({ bookings }: Props) {
  const [optimistic, updateOptimistic] = useOptimistic(
    bookings,
    (state, id: string) =>
      state.map((b) => (b.id === id ? { ...b, status: "completed" } : b))
  );
  const [, startTransition] = useTransition();

  const today = new Date().toISOString().split("T")[0];

  function handleComplete(id: string) {
    startTransition(async () => {
      updateOptimistic(id);
      await markBookingCompleted(id);
    });
  }

  if (optimistic.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center ring-1 ring-choc-200 border border-choc-200">
        <p className="text-sm text-choc-700">Inga bokningar ännu.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white ring-1 ring-sand-200">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-sand-100 bg-sand-50 text-left">
              <th className="px-4 py-3 font-semibold text-choc-700">Datum</th>
              <th className="px-4 py-3 font-semibold text-choc-700">Tid</th>
              <th className="px-4 py-3 font-semibold text-choc-700">Namn</th>
              <th className="hidden px-4 py-3 font-semibold text-choc-700 sm:table-cell">E-post</th>
              <th className="hidden px-4 py-3 font-semibold text-choc-700 md:table-cell">Telefon</th>
              <th className="hidden px-4 py-3 font-semibold text-choc-700 lg:table-cell">Behandling</th>
              <th className="px-4 py-3 font-semibold text-choc-700">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {optimistic.map((b) => {
              const isPast = b.date < today;
              return (
                <tr
                  key={b.id}
                  className={[
                    "border-b border-sand-100 transition-colors last:border-0 hover:bg-sand-50",
                    isPast ? "opacity-55" : "",
                  ].join(" ")}
                >
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-choc-900">
                    {new Date(b.date + "T00:00:00").toLocaleDateString("sv-SE", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-choc-700">
                    {b.start_time?.slice(0, 5)}
                  </td>
                  <td className="px-4 py-3 font-medium text-choc-900">{b.name}</td>
                  <td className="hidden px-4 py-3 text-choc-700 sm:table-cell">
                    <a href={`mailto:${b.email}`} className="hover:text-wood-600 hover:underline">
                      {b.email}
                    </a>
                  </td>
                  <td className="hidden px-4 py-3 text-choc-600 md:table-cell">
                    {b.phone ? (
                      <a href={`tel:${b.phone}`} className="hover:text-wood-600 hover:underline">
                        {b.phone}
                      </a>
                    ) : (
                      <span className="text-choc-300">–</span>
                    )}
                  </td>
                  <td className="hidden px-4 py-3 text-choc-600 lg:table-cell">
                    {b.service ?? <span className="text-choc-300">–</span>}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        STATUS_STYLE[b.status] ?? "bg-sand-50 text-choc-600 ring-1 ring-sand-200"
                      }`}
                    >
                      {STATUS_LABEL[b.status] ?? b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {b.status === "pending" && (
                      <button
                        onClick={() => handleComplete(b.id)}
                        className="whitespace-nowrap rounded-lg bg-wood-50 px-3 py-1.5 text-xs font-medium text-wood-700 transition-colors hover:bg-wood-100"
                      >
                        Markera klar
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
