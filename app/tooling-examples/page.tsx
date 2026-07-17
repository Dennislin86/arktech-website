import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { seoImageAlt, seoImageForSlug } from "@/lib/images";
import { toolingExamplePages } from "@/lib/page-data";

export const metadata: Metadata = {
  title: "Injection Mold Types & Export Tooling | Arktech Mold",
  description:
    "Explore multi-cavity, hot runner, insert, overmolding, 2K, unscrewing, large-part and gas-assisted injection molds with DFM, mold trials, inspection and export support.",
  alternates: {
    canonical: "/tooling-examples"
  },
  openGraph: {
    title: "Injection Mold Types & Export Tooling | Arktech Mold",
    description:
      "Explore multi-cavity, hot runner, insert, overmolding, 2K, unscrewing, large-part and gas-assisted injection molds with DFM, mold trials, inspection and export support.",
    url: "/tooling-examples"
  }
};

const proofPoints = [
  "DFM feedback before tool release",
  "Gate, cooling, venting, and ejection planning",
  "Steel, surface finish, and mold-base recommendations",
  "Trial reports, inspection data, and corrective actions",
  "Export documentation, spares, and crate preparation",
  "Support for molders receiving tools into local production"
];

export default function ToolingExamplesPage() {
  const injectionMoldPages = toolingExamplePages.filter((example) => example.slug !== "die-casting-molds");

  return (
    <>
      <PageHero
        eyebrow="INJECTION MOLD TYPES"
        title="Injection Mold Types for Production Tooling and Export Programs"
        body="Arktech Mold designs and manufactures multi-cavity, hot runner, insert, overmolding, 2K, unscrewing, large-part and gas-assisted injection molds for OEMs and injection molding companies. Each tooling program includes DFM review, mold design, trial sampling, inspection documentation, spare parts and export packing support."
      />
      <section className="py-14">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {injectionMoldPages.map((example) => (
            <article key={example.slug} className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image src={seoImageForSlug(example.slug)} alt={example.galleryImages?.[0]?.alt ?? seoImageAlt(example.title)} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold leading-7">{example.title}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {example.description}
                </p>
                <Link className="mt-5 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={`/tooling-examples/${example.slug}`}>
                  {example.slug === "hot-runner-molds" ? "View Hot Runner Mold Capabilities" : `Explore ${example.title}`}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="container-page mt-8">
          <Link className="inline-flex rounded-sm border border-[var(--line)] bg-white px-4 py-3 text-sm font-bold text-[var(--brand-dark)] shadow-sm transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href="/services/die-casting">
            Also need aluminum or zinc components? Explore Die Casting capabilities
          </Link>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Export tooling discipline</p>
            <h2 className="mt-3 text-3xl font-bold">What buyers can expect before a tool ships.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div key={point} className="rounded-sm bg-[var(--surface-soft)] p-4 text-sm font-bold text-[var(--foreground)]">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
