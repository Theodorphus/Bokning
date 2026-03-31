import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { getGlobalOptions } from "@/lib/global-options";
import "./globals.css";

export const revalidate = 60; // ISR: revalidate var 60:e sekund

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Wellness Studio",
    default: "Wellness Studio – Professionell massage i Stockholm",
  },
  description:
    "Professionell massage i hjärtat av Stockholm. Boka avslappningsmassage, djupvävnadsmassage, sportmassage och mer. Enkel bokning online.",
  metadataBase: new URL("https://wellness-studio.se"),
  openGraph: {
    siteName: "Wellness Studio",
    locale: "sv_SE",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Hämta globala inställningar för feature flags
  const globalOptions = await getGlobalOptions();

  return (
    <html lang="sv" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-choc-50 text-choc-700">
        <Nav showGiftCards={globalOptions.showGiftCards} />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
