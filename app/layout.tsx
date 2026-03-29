import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
