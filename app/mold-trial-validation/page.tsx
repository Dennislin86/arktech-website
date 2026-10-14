import type { Metadata } from "next";
import { ToolingSupportPage } from "@/components/ToolingSupportPage";
import { site } from "@/lib/site";
import { toolingSupportPages } from "@/lib/tooling-support-pages";

const page = toolingSupportPages["mold-trial-validation"];
const canonical = `${site.url}/mold-trial-validation`;

export const metadata: Metadata = {
  title: { absolute: page.seoTitle },
  description: page.description,
  alternates: { canonical },
  openGraph: {
    title: page.seoTitle,
    description: page.description,
    type: "website",
    url: canonical,
    images: [{ url: page.ogImage, alt: page.heroAlt }]
  }
};

export default function MoldTrialValidationPage() {
  return <ToolingSupportPage slug="mold-trial-validation" />;
}
