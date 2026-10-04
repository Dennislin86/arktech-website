import type { Metadata } from "next";
import { DfmEngineeringPage } from "@/components/DfmEngineeringPage";

const title = "Injection Molding Engineering, DFM & Moldflow | Arktech";
const description = "Injection molding engineering support from product co-design and DFM to Moldflow analysis, mold design and tooling validation before production.";
const canonical = "https://www.arktechmold.com/injection-molding-engineering";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "website",
    url: canonical,
    images: [{
      url: "/images/injection-mold-manufacturing/complete-dfm-engineering-review.webp",
      alt: "Injection molding engineering and DFM review before tooling"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/injection-mold-manufacturing/complete-dfm-engineering-review.webp"]
  }
};

export default function InjectionMoldingEngineeringPage() {
  return <DfmEngineeringPage />;
}
