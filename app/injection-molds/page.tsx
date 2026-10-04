import type { Metadata } from "next";
import { InjectionMoldsHubPage } from "@/components/InjectionMoldsHubPage";
import { site } from "@/lib/site";

const title = "Custom Injection Molds & Tooling Projects | Arktech";
const description = "Explore custom injection molds, specialized tooling and real mold projects from Arktech, including multi-cavity, family, 2K, unscrewing and high-gloss tooling.";
const canonical = `${site.url}/injection-molds`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "website",
    url: canonical,
    images: [{ url: "/images/mold-types/complex-injection-molds.png", alt: "Completed complex injection mold built by Arktech" }]
  }
};

export default function InjectionMoldsPage() {
  return <InjectionMoldsHubPage />;
}
