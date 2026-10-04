import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Injection Mold Quality Control & Documentation",
  description:
    "Arktech supports export injection mold projects with ISO 9001 quality management, mold inspection, sample validation, dimensional reports and export documentation.",
  alternates: { canonical: "/company/quality-documentation" }
};

const qualityProcess = [
  "DFM Engineering",
  "Mold Inspection",
  "Mold Trial",
  "Product Inspection",
  "Dimensional Report",
  "Documentation",
  "Export Shipment"
];

const moldInspectionItems = [
  "Mold structure and component inspection",
  "Cavity and core insert inspection",
  "Slider, lifter and ejector system checks",
  "Cooling circuit verification",
  "Hot runner connection checks when applicable",
  "Mold movement and dry-run verification",
  "Mold surface, edge and chamfer inspection",
  "Spare parts verification",
  "Final mold condition inspection before shipment"
];

const moldedPartInspectionItems = [
  "T0 and T1 sample review",
  "Critical dimension verification",
  "Visual appearance inspection",
  "Flash, short shot, sink mark and deformation review",
  "Assembly and fit check",
  "Surface finish and texture review",
  "Color and cosmetic inspection when required",
  "Comparison against the customer 2D drawing"
];

const reportFields = [
  ["Drawing dimension reference", "Links each inspection result to the relevant drawing characteristic."],
  ["Nominal dimension", "Records the specified target dimension from the approved drawing."],
  ["Tolerance", "Shows the agreed upper and lower acceptance limits."],
  ["Actual measurement", "Records the measured result for the inspected sample."],
  ["Pass / Fail status", "Identifies whether the result is within the agreed tolerance."],
  ["Measurement method", "Documents the agreed method used for the characteristic."],
  ["Inspection date / sample stage", "Connects the result to the relevant T0, T1 or later validation stage."]
];

const documentationGroups = [
  {
    stage: "Engineering Release",
    items: ["DFM Report", "Mold Design Review"]
  },
  {
    stage: "Mold Trial & Validation",
    items: ["Mold Trial Report", "Process Parameter Sheet", "Dimensional Inspection Report", "Mold Trial Photos", "Mold Trial Video"]
  },
  {
    stage: "Tooling & Material Records",
    items: ["Steel Certificate", "Material Certificate", "Heat Treatment Certificate", "Spare Parts List"]
  },
  {
    stage: "Export Release",
    items: ["Packing Photos", "Export Packing Checklist"]
  }
];

const exportChecks = [
  "Final mold condition and movement review",
  "Approved spare parts and loose components verified",
  "Required tooling and quality records organized",
  "Packing photos and export packing checklist completed",
  "Shipment release coordinated against the agreed project status"
];

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li className="flex gap-3 rounded-sm border border-[var(--line)] bg-white p-4 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={item}>
          <span aria-hidden="true" className="mt-0.5 text-[var(--brand)]">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function QualityDocumentationPage() {
  return (
    <>
      <PageHero
        eyebrow="QUALITY & DOCUMENTATION"
        title="Injection Mold Quality & Documentation"
        body="Arktech supports export injection mold projects with structured mold inspection, sample validation, dimensional reporting, tooling records and export delivery checks."
        image={{
          src: "/images/quality/dimensional-inspection-report-anonymized.webp",
          alt: "Anonymized dimensional inspection report for injection mold sample validation"
        }}
      />

      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Quality System &amp; Certifications</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)]">Quality management supporting tooling approval and export delivery.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
              Quality activities are integrated into engineering review, mold manufacturing, trial preparation, sample validation and shipment release. Records are prepared according to project requirements so customer engineering teams can review tooling status and improvement actions.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/services">View Capabilities</Link>
            </div>
          </div>
          <div className="rounded-sm border border-[var(--line)] bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Certified Quality System</p>
            <p className="mt-3 text-3xl font-bold text-[var(--brand-dark)]">ISO 9001:2015</p>
            <p className="mt-3 leading-7 text-[var(--muted)]">A structured quality management framework supporting project review, inspection records, corrective actions and delivery documentation.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Quality Control Process</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--brand-dark)]">Quality control from DFM review to export shipment</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Each stage creates a clear review point for tooling development, mold trial feedback, sample validation and final release.</p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {qualityProcess.map((step, index) => (
              <li className="relative rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4" key={step}>
                <span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm font-bold leading-5 text-[var(--brand-dark)]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]">
            <Image alt="Large injection mold undergoing structure and component inspection before trial" className="object-cover object-center" fill sizes="(min-width: 1024px) 48vw, 100vw" src="/images/process/tooling-manufacturing-plan-mold.png" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Mold Inspection</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)]">Injection Mold Inspection Before Trial and Export</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">Mold inspection is carried out during tooling build, trial preparation and before shipment. The inspection scope is aligned with the mold design, tooling specification and agreed customer requirements.</p>
            <div className="mt-6"><Checklist items={moldInspectionItems} /></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Molded Part Inspection</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)]">Molded Part Inspection &amp; Sample Validation</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">Trial samples are reviewed against the approved product drawing and project requirements. Findings support tooling adjustments, process review and the next customer approval stage.</p>
            <div className="mt-6"><Checklist items={moldedPartInspectionItems} /></div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]">
            <Image alt="Molded plastic sample dimensional inspection and validation" className="object-cover object-center" fill sizes="(min-width: 1024px) 46vw, 100vw" src="/images/process/sample-validation-inspection-cmm.png" />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Dimensional Inspection Report</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--brand-dark)]">Dimensional Inspection Reports for Tooling Approval</h2>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">Dimensional inspection reports are prepared for critical product dimensions based on customer drawings and agreed inspection requirements. Results help engineering teams review tooling status and confirm improvement actions before approval.</p>
          <div className="mt-8 overflow-x-auto rounded-sm border border-[var(--line)] bg-white shadow-sm">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-[var(--brand-dark)] text-white">
                <tr><th className="px-5 py-4 text-sm font-bold">Report field</th><th className="px-5 py-4 text-sm font-bold">Typical record structure</th></tr>
              </thead>
              <tbody>
                {reportFields.map(([field, purpose]) => (
                  <tr className="border-t border-[var(--line)]" key={field}><th className="px-5 py-4 text-sm font-bold text-[var(--brand-dark)]">{field}</th><td className="px-5 py-4 text-sm leading-6 text-[var(--muted)]">{purpose}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">Report scope and measurement methods are confirmed according to the drawing, critical characteristics and project approval requirements.</p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Quality Records &amp; Tooling Documentation</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--brand-dark)]">Tooling Documentation Package</h2>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">Available records are organized by project stage so customer teams can review engineering release, mold trial results, material records and export preparation efficiently. The exact package depends on the agreed project scope.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]">
              <Image alt="Export injection mold tooling documentation and pre-shipment validation package" className="object-contain object-center" fill sizes="(min-width: 1024px) 42vw, 100vw" src="/images/documentation/tooling-documentation-package.png" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {documentationGroups.map((group) => (
                <article className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5" key={group.stage}>
                  <h3 className="text-lg font-bold text-[var(--brand-dark)]">{group.stage}</h3>
                  <ul className="mt-4 grid gap-2">
                    {group.items.map((item) => <li className="flex gap-2 text-sm leading-6 text-[var(--muted)]" key={item}><span aria-hidden="true" className="text-[var(--brand)]">✓</span><span>{item}</span></li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Export Delivery Readiness</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)]">Final checks before mold packing and export shipment</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">Before shipment, the team reviews final mold condition, required records, loose components, spare parts and packing evidence against the agreed delivery scope.</p>
          </div>
          <Checklist items={exportChecks} />
        </div>
      </section>

      <CTA />
    </>
  );
}
