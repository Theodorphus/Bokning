"use client";

import { useState } from "react";
import { useTransition } from "react";
import type { Service } from "@/lib/cms-types";

interface AdminServicesPanelProps {
  services: Service[];
}

export default function AdminServicesPanel({ services: initialServices }: AdminServicesPanelProps) {
  const [services, setServices] = useState(initialServices);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [, startTransition] = useTransition();
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    short_description: "",
    description: "",
    price: "",
    duration: "",
    image_url: "",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      short_description: "",
      description: "",
      price: "",
      duration: "",
      image_url: "",
    });
    setEditingId(null);
    setShowForm(false);
    setFormError("");
    setFormSuccess("");
  };

  const handleEdit = (service: Service) => {
    setFormData({
      title: service.title,
      slug: service.slug,
      short_description: service.short_description || "",
      description: service.description || "",
      price: service.price || "",
      duration: service.duration || "",
      image_url: service.image_url || "",
    });
    setEditingId(service.id);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    try {
      const url = editingId ? `/api/services/${editingId}` : "/api/services";
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Något gick fel");
      }

      const result = await response.json();

      startTransition(() => {
        if (editingId) {
          setServices(services.map((s) => (s.id === editingId ? result : s)));
        } else {
          setServices([...services, result]);
        }
        setFormSuccess(editingId ? "Tjänst uppdaterad!" : "Tjänst skapad!");
        setTimeout(resetForm, 1500);
      });
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Något gick fel");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Är du säker på att du vill ta bort denna tjänst?")) return;

    try {
      const response = await fetch(`/api/services/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Kunde inte ta bort");

      startTransition(() => {
        setServices(services.filter((s) => s.id !== id));
      });
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Kunde inte ta bort tjänsten");
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 ring-1 ring-choc-200 border border-choc-200">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-choc-800">Hantera tjänster</h2>
        <p className="mt-1 text-sm text-choc-700">Lägg till, redigera eller ta bort behandlingar</p>
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4 rounded-lg bg-choc-50 p-4 border border-choc-200">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Titel (t.ex. Avslappningsmassage)"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="rounded-lg px-3 py-2 text-sm text-choc-800 ring-1 ring-choc-200 bg-white"
              required
            />
            <input
              type="text"
              placeholder="Slug (t.ex. avslappningsmassage)"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="rounded-lg px-3 py-2 text-sm text-choc-800 ring-1 ring-choc-200 bg-white"
              required
            />
          </div>

          <textarea
            placeholder="Kort beskrivning"
            value={formData.short_description}
            onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
            className="w-full rounded-lg px-3 py-2 text-sm text-choc-800 ring-1 ring-choc-200 bg-white resize-none"
            rows={2}
          />

          <textarea
            placeholder="Fullständig beskrivning"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full rounded-lg px-3 py-2 text-sm text-choc-800 ring-1 ring-choc-200 bg-white resize-none"
            rows={2}
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <input
              type="text"
              placeholder="Pris (t.ex. från 695 kr)"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="rounded-lg px-3 py-2 text-sm text-choc-800 ring-1 ring-choc-200 bg-white"
            />
            <input
              type="text"
              placeholder="Tid (t.ex. 60 min)"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="rounded-lg px-3 py-2 text-sm text-choc-800 ring-1 ring-choc-200 bg-white"
            />
            <input
              type="text"
              placeholder="Bildsökväg"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              className="rounded-lg px-3 py-2 text-sm text-choc-800 ring-1 ring-choc-200 bg-white"
            />
          </div>

          {formError && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800 border border-red-200">{formError}</div>}
          {formSuccess && (
            <div className="rounded-lg bg-green-50 p-3 text-sm text-green-800 border border-green-200">{formSuccess}</div>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-wood-600 px-4 py-2 text-sm font-semibold text-white hover:bg-wood-500"
            >
              {editingId ? "Uppdatera" : "Skapa"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 rounded-lg border border-choc-200 px-4 py-2 text-sm font-semibold text-choc-700 hover:bg-choc-50"
            >
              Avbryt
            </button>
          </div>
        </form>
      )}

      {/* Add button */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 rounded-lg bg-wood-600 px-4 py-2 text-sm font-semibold text-white hover:bg-wood-500"
        >
          + Ny tjänst
        </button>
      )}

      {/* Services list */}
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-between gap-3 rounded-lg bg-choc-50 p-4 border border-choc-200"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-choc-800">{service.title}</h3>
              <p className="text-xs text-choc-600">
                {service.price} · {service.duration}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(service)}
                className="rounded-lg bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 hover:bg-blue-200"
              >
                Redigera
              </button>
              <button
                onClick={() => handleDelete(service.id)}
                className="rounded-lg bg-red-100 px-3 py-1 text-xs font-medium text-red-700 hover:bg-red-200"
              >
                Ta bort
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
