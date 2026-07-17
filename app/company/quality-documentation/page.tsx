import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Injection Mold Quality Control & Documentation | Arktech",
  description:
    "Arktech supports export injection mold projects with ISO quality management, DFM reports, mold trial reports, dimensional inspection reports, material certificates, steel certificates, spare parts lists and export packing checklists."
};

const certifications = ["ISO 9001:2015", "ISO 13485:2016"];

const documentationItems = [
  "DFM Report",
  "Mold Design Review",
  "Mold Trial Report",
  "Dimensional Inspection Report",
  "Steel Certificate",
  "Material Certificate",
  "Spare Parts List",
  "Export Packing Checklist"
];

const qualitySteps = [
  {
    title: "Before tooling release",
    body: "DFM engineering, mold design review and risk alignment help overseas customers confirm part geometry, material selection, tolerances and tooling strategy."
  },
  {
    title: "During mold trial",
    body: "Mold trial reports, T1 sample review and dimensional inspection reports help customers evaluate tooling status and required improvement actions."
  },
  {
    title: "Before shipment",
    body: "Steel certificates, material certificates, spare parts lists and export packing checklists support transparent export tooling delivery."
  }
];

export default function QualityDocumentationPage() {
  return (
    <>
      <PageHero
        eyebrow="QUALITY & DOCUMENTATION"
        title="Injection Mold Quality Control & Documentation"
        body="Arktech supports export injection mold projects with practical quality control, mold trial documentation, inspection reports and export delivery records for overseas customers."
      />

      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Quality System</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)]">
              Quality management for tooling, molding and component manufacturing.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              For export injection molds, quality documentation is part of the delivery—not an afterthought. We support DFM reports, mold trial reports, dimensional inspection reports and shipment preparation documents so engineering teams can review tooling status clearly.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Upload CAD for DFM Review
              </Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/services">
                View Capabilities
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((certification) => (
              <div className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm" key={certification}>
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Certification</p>
                <p className="mt-2 text-2xl font-bold text-[var(--brand-dark)]">{certification}</p>
              </div>
            ))}
            <div className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm sm:col-span-2">
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Shipment Readiness</p>
              <p className="mt-2 text-xl font-bold text-[var(--brand-dark)]">Inspection before shipment and export documentation support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Documentation Checklist</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--brand-dark)]">Documents overseas customers can review before export delivery.</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {documentationItems.map((item) => (
              <div className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4 text-sm font-bold leading-6 text-[var(--brand-dark)] shadow-sm" key={item}>
                <span className="mr-2 text-[var(--brand)]">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {qualitySteps.map((step) => (
            <article className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm" key={step.title}>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
