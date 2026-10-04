import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Arktech Mold | Plastic Tooling & Molding Partner for OEMs",
    template: "%s | Arktech Mold"
  },
  description: site.description,
  icons: {
    icon: "/favicon-arktech.png",
    apple: "/apple-touch-icon.png"
  },
  keywords: [
    "tooling and manufacturing partner",
    "export injection molds",
    "plastic injection molding",
    "die casting molds",
    "CNC machined metal parts",
    "OEM plastic and metal components",
    "DFM engineering support",
    "export mold tooling",
    "injection molding companies Europe",
    "injection molding companies North America"
  ],
  openGraph: {
    title: "Arktech Mold",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/images/hero/export-injection-mold-manufacturing-hero.webp",
        alt: "Arktech export injection mold manufacturing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Arktech Mold",
    description: site.description,
    images: ["/images/hero/export-injection-mold-manufacturing-hero.webp"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
