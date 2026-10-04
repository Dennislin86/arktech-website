import type { Metadata } from "next";
import { PlasticInjectionMoldingPage } from "@/components/PlasticInjectionMoldingPage";
import { site } from "@/lib/site";

const title = "Custom Plastic Injection Molding 25–550T | Arktech";
const description =
  "Custom plastic injection molding services from prototype and low-volume molding to scalable production, inspection, secondary operations and assembly for global OEM projects.";
const canonical = `${site.url}/plastic-injection-molding/`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description: "Custom plastic injection molding from prototype and low-volume builds through repeat production, inspection and assembly.",
    type: "website",
    url: canonical,
    images: [{ url: "/images/capabilities/plastic-injection-molding-production-video-frame.webp", alt: "Plastic injection molding production at Arktech" }]
  }
};

export default function PlasticInjectionMoldingRoute() {
  return <PlasticInjectionMoldingPage />;
}
