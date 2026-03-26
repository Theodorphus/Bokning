"use client";

import { useState } from "react";
import type { Service } from "@/lib/services";
import ServiceCard from "./ServiceCard";
import BookingForm from "./BookingForm";

interface BookingClientProps {
  services: Service[];
}

export default function BookingClient({ services }: BookingClientProps) {
  const [selectedService, setSelectedService] = useState("");

  function handleSelect(name: string) {
    setSelectedService(name);
    document
      .getElementById("booking-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      {/* Treatments section */}
      {services.length > 0 && (
        <section id="treatments">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">
            Våra behandlingar
          </h2>
          <p className="mt-2 text-slate-600">
            Välj en behandling nedan för att börja bokningen
          </p>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard
                  service={service}
                  selected={selectedService === service.title}
                  onSelect={handleSelect}
                />
              </li>
            ))}
          </ul>

          <div className="my-16 border-t border-stone-100" />
        </section>
      )}

      {/* Booking form */}
      <div id="booking-form">
        <BookingForm services={services} selectedService={selectedService} />
      </div>
    </div>
  );
}
