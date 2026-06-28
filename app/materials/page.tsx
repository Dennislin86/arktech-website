import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { materials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plastic Injection Molding Materials",
  description:
    "Engineering plastic material guidance for ABS, PC, PP, PA, POM, PMMA, TPE, PBT, PPS, and glass-filled injection molded parts."
};

const guidance = [
  "Mechanical strength, impact, and dimensional stability",
  "Heat resistance, flame rating, and chemical exposure",
  "Cosmetic finish, texture, color, and weld line sensitivity",
  "Shrinkage, warpage risk, and mold steel considerations"
];

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Materials"
        title="Engineering resin support for injection molded parts."
        body="Select the right material for performance, cost, compliance, and manufacturability before mold steel is cut."
      />
      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold">Common molding materials</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              We can review your specified resin, recommend production-friendly alternatives, and plan trials for filled or specialty grades when needed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {materials.map((material) => (
              <div key={material} className="rounded-sm border border-[var(--line)] bg-white p-4 text-center font-bold shadow-sm">
                {material}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container-page">
          <h2 className="text-3xl font-bold">What we review before quoting.</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {guidance.map((item) => (
              <div key={item} className="border-l-4 border-[var(--accent)] bg-[var(--surface-soft)] p-5 font-bold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
