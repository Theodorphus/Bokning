import { getSupabaseAdmin } from "@/lib/supabase-server";
import AdminBookingsList from "@/components/admin/AdminBookingsList";
import AdminAddTimeSlotForm from "@/components/admin/AdminAddTimeSlotForm";
import AdminTimeSlotList from "@/components/admin/AdminTimeSlotList";
import AdminExportButton from "@/components/admin/AdminExportButton";
import { logoutAction } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const db = getSupabaseAdmin();
  const today = new Date().toISOString().split("T")[0];

  const [{ data: bookings }, { data: slots }] = await Promise.all([
    db
      .from("bookings")
      .select("id, date, start_time, service, name, email, phone, message, status, created_at")
      .order("date", { ascending: true })
      .order("start_time", { ascending: true }),
    db
      .from("time_slots")
      .select("id, date, start_time, duration_minutes, service_id, is_available")
      .gte("date", today)
      .order("date", { ascending: true })
      .order("start_time", { ascending: true }),
  ]);

  const allBookings = bookings ?? [];
  const allSlots = slots ?? [];

  const upcoming = allBookings.filter((b) => b.date >= today);
  const pendingCount = upcoming.filter((b) => b.status === "pending").length;
  const completedCount = allBookings.filter((b) => b.status === "completed").length;
  const availableSlots = allSlots.filter((s) => s.is_available).length;

  // Show upcoming first, then past
  const sorted = [
    ...allBookings.filter((b) => b.date >= today),
    ...allBookings.filter((b) => b.date < today).reverse(),
  ];

  return (
    <div className="min-h-screen bg-sand-50">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 border-b border-sand-200 bg-white/95 backdrop-blur-sm px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div>
            <h1 className="text-base font-bold text-choc-900">Wellness Studio</h1>
            <p className="text-xs text-choc-500">Bokningshantering</p>
          </div>
          <div className="flex items-center gap-3">
            <AdminExportButton />
            <form action={logoutAction}>
              <button
                type="submit"
                className="rounded-lg border border-sand-200 px-4 py-2 text-sm font-medium text-choc-600 transition-colors hover:bg-sand-50"
              >
                Logga ut
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-6 py-10">
        {/* ── Stats ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Kommande bokningar", value: upcoming.length, color: "text-choc-900" },
            { label: "Väntande svar", value: pendingCount, color: "text-amber-700" },
            { label: "Avklarade", value: completedCount, color: "text-green-700" },
            { label: "Lediga tider", value: availableSlots, color: "text-wood-600" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-white p-5 ring-1 ring-sand-200"
            >
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="mt-1 text-xs text-choc-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Bookings list ───────────────────────────────────────────── */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-choc-900">Bokningar</h2>
            <span className="text-xs text-choc-500">{allBookings.length} totalt</span>
          </div>
          <AdminBookingsList bookings={sorted} />
        </section>

        {/* ── Time slot management ────────────────────────────────────── */}
        <div className="grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="mb-4 text-base font-bold text-choc-900">Lägg till ny tid</h2>
            <AdminAddTimeSlotForm />
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-choc-900">Kommande tidsluckor</h2>
              <span className="text-xs text-choc-500">{allSlots.length} st</span>
            </div>
            <AdminTimeSlotList slots={allSlots} />
          </section>
        </div>
      </main>
    </div>
  );
}
