"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Hide on booking page since the form is already there
  const isBookingPage = pathname === "/booking" || pathname.startsWith("/booking/");

  useEffect(() => {
    if (isBookingPage) {
      setVisible(false);
      return;
    }

    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBookingPage]);

  if (!visible || isBookingPage) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 lg:hidden">
      <Link
        href="/booking"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-4 text-sm font-semibold text-white shadow-2xl transition-colors hover:bg-rose-500 active:scale-95"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Boka tid
      </Link>
    </div>
  );
}
