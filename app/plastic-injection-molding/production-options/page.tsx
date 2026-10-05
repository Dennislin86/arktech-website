import type { Metadata } from "next";
import { InjectionMoldingProductionOptionsPage } from "@/components/InjectionMoldingProductionOptionsPage";
import { site } from "@/lib/site";

const title = "Injection Molding Production Options: Low-Volume & Mass Production | Arktech";
const description = "Compare prototype, low-volume and mass production injection molding options based on tooling readiness, project stage, inspection needs and repeat demand.";
const canonical = `${site.url}/plastic-injection-molding/production-options`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "website",
    url: canonical,
    images: [{ url: "/images/capabilities/plastic-injection-molding-production-video-frame.webp", alt: "Clear molded plastic parts beside an automated injection molding cell" }]
  }
};

export default function ProductionOptionsPage() {
  return <InjectionMoldingProductionOptionsPage />;
}
