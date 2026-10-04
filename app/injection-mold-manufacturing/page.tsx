import type { Metadata } from "next";
import { InjectionMoldManufacturingPage } from "@/components/InjectionMoldManufacturingPage";
import { site } from "@/lib/site";

const title = "Injection Mold Manufacturer & Export Tooling | Arktech";
const description =
  "Arktech manufactures export-ready injection molds with DFM engineering, mold design, CNC and EDM machining, fitting, mold trials, validation, tooling documentation, spare parts and export preparation.";
const canonical = `${site.url}/injection-mold-manufacturing`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description: "Export-ready injection mold manufacturing with DFM, mold trials, validation and documented tooling delivery.",
    type: "website",
    url: canonical,
    images: [{ url: "/images/mold-types/Precision-Molds.png", alt: "Precision export injection mold manufactured by Arktech" }]
  }
};

export default function InjectionMoldManufacturingRoute() {
  return <InjectionMoldManufacturingPage />;
}
