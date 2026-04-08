import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Africa Narrative Signals | Independent Research Organization",
    template: "%s | Africa Narrative Signals",
  },
  description:
    "Africa Narrative Signals (ANS) is an independent research organization that analyzes political narratives, tracks misinformation, and strengthens information integrity across Africa.",
  keywords: [
    "Africa",
    "Narrative",
    "Misinformation",
    "Disinformation",
    "Research",
    "Information Integrity",
    "Digital Democracy",
    "Elections",
    "Policy",
  ],
  openGraph: {
    title: "Africa Narrative Signals",
    description:
      "Turning information flows into actionable intelligence across Africa.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-ink text-sand">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
