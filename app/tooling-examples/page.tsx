import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { seoImageAlt, seoImageForSlug } from "@/lib/images";
import { toolingExamplePages } from "@/lib/page-data";

export const metadata: Metadata = {
  title: "Tooling Examples",
  description:
    "Representative export injection mold, overmold, insert mold, die casting die, prototype tooling, and production tooling examples from Arktech."
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
  return (
    <>
      <PageHero
        eyebrow="Tooling Examples"
        title="Export tooling examples for injection molding companies and OEM product teams."
        body="Arktech builds production molds, prototype tools, die casting dies, and complex mold mechanisms for customers who need practical engineering support before shipment."
      />
      <section className="py-14">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {toolingExamplePages.map((example) => (
            <article key={example.slug} className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image src={seoImageForSlug(example.slug)} alt={seoImageAlt(example.title)} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold leading-7">{example.title}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {example.description}
                </p>
                <Link className="mt-5 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={`/tooling-examples/${example.slug}`}>
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Tooling discipline</p>
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
