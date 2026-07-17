import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Injection Mold Project Management from RFQ to Mold Shipping | Arktech",
  description:
    "Arktech manages export injection mold projects with RFQ review, DFM feedback, mold design control, weekly reports, mold trial validation, inspection documentation and mold shipping file packages."
};

const workflowImage = "/images/company/project-management-system.webp";
const shippingPackageImage = "/images/company/mold-shipping-file-package.jpg";

const hasWorkflowImage = existsSync(join(process.cwd(), "public", workflowImage));
const hasShippingPackageImage = existsSync(join(process.cwd(), "public", shippingPackageImage));

const workflowPhases = [
  {
    phase: "01",
    title: "RFQ, Quotation & DFM Review",
    body:
      "We start with RFQ review, part analysis, mold flow thinking, DFM reporting and technical feedback before mold design begins.",
    items: ["RFQ review", "Quotation", "Part review", "Mold flow analysis", "DFM report"]
  },
  {
    phase: "02",
    title: "2D / 3D Mold Design Approval",
    body:
      "The tooling concept is converted into 2D and 3D mold design data for customer review, alignment and approval before steel cutting.",
    items: ["2D mold design", "3D mold design", "Mold design review", "Customer approval"]
  },
  {
    phase: "03",
    title: "Tooling Manufacturing & Weekly Reports",
    body:
      "Mold manufacturing is controlled through planning, steel and component ordering, material checking, machining, CMM measurement, fitting and assembly.",
    items: ["Planning", "Steel order", "Machining", "CMM measurement", "Weekly report"]
  },
  {
    phase: "04",
    title: "Mold Trial, Inspection & Sample Approval",
    body:
      "After mold trial, Arktech supports process parameter records, measurement reports, sample feedback and engineering changes until samples are approved.",
    items: ["Mold trial", "Trial video", "Injection parameters", "Measurement report", "Sample approval"]
  },
  {
    phase: "05",
    title: "Packing, Mold Shipment & Production Support",
    body:
      "Before export delivery, the mold is inspected, dried, packed and shipped with documentation, spare parts support and production preparation records.",
    items: ["4-hour dry run", "Mold inspection", "Clear packing", "Mold shipment", "Production support"]
  }
];

const weeklyReports = [
  "Tooling schedule update",
  "Machining progress",
  "Mold component status",
  "Steel and component order status",
  "Open issue tracking",
  "Engineering change records",
  "Trial plan and next steps",
  "Weekly progress report update"
];

const validationItems = [
  "Mold trial video",
  "Injection process parameter sheet",
  "Sample photos",
  "FAI / dimensional inspection report",
  "Mold trial report",
  "Engineering change record",
  "Sample approval follow-up"
];

const documentGroups = [
  {
    title: "Mold Design Data",
    items: ["Tooling 2D Drawings", "Tooling 3D Data", "Electrode Drawings", "Hot Runner Information"]
  },
  {
    title: "Trial & Validation Records",
    items: [
      "Process Parameter Sheet",
      "Mold Trial Report",
      "FAI / Sample Dimensional Inspection Report",
      "Sample Photos",
      "Mold Test Video",
      "Cooling Check Video",
      "4-Hour Dry Run Video"
    ]
  },
  {
    title: "Material & Shipment Records",
    items: [
      "Steel Certification",
      "Mold Component Inspection Photos",
      "Mold Packing Photos",
      "Spare Parts List",
      "Export Packing Checklist"
    ]
  }
];

const shippingFiles = [
  "Tooling 2D Drawings",
  "Tooling 3D Data",
  "Process Parameter Sheet",
  "FAI / Sample Dimensional Inspection Report",
  "Electrode Drawings",
  "Sample Photos",
  "Steel Certification",
  "Mold Packing Photos",
  "Mold Component Inspection Photos",
  "Hot Runner Information",
  "Mold Test Video",
  "Cooling Check Video",
  "4-Hour Dry Run Video",
  "Mold Trial Report"
];

function SectionHeader({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 leading-7 text-[var(--muted)]">{body}</p> : null}
    </div>
  );
}

export default function ProjectManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="PROJECT MANAGEMENT"
        title="Injection Mold Project Management from RFQ to Mold Shipping"
        body="Arktech manages export injection mold projects with structured RFQ review, DFM feedback, mold design control, weekly progress reporting, mold trial validation, inspection documentation and mold shipping file packages for overseas customers."
      />

      <section className="py-14">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Project Management Overview"
              title="Structured Project Management for Export Injection Molds"
              body="Export injection mold projects require clear engineering communication, controlled tooling execution and reliable documentation before shipment. Arktech manages each mold project through RFQ review, DFM feedback, mold design approval, mold manufacturing, trial validation, inspection, packing and shipment support."
            />
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Our injection mold project management approach helps product companies and injection molding companies reduce tooling risk, track open issues and prepare molds for installation and production after delivery.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Upload CAD for DFM Review
              </Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">
                Request Manufacturing Quote
              </Link>
            </div>
          </div>
          <div className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Core Controls</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["RFQ review", "DFM feedback", "Mold design review", "Weekly reporting", "Mold trial report", "Dimensional inspection report"].map((item) => (
                <div className="rounded-sm bg-[var(--surface-soft)] p-4 text-sm font-bold leading-6 text-[var(--brand-dark)]" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page">
          <SectionHeader
            eyebrow="Project Management System"
            title="Visual Workflow from RFQ to Mold Shipping"
            body="The flowchart below shows how Arktech manages export injection mold projects from RFQ, quotation and DFM engineering through mold design, weekly reporting, mold trial, measurement reports, sample approval, packing and final export delivery."
          />
          {hasWorkflowImage ? (
            <figure className="mt-8 overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
              <Image
                alt="Arktech project management system flowchart for export injection mold projects from RFQ and DFM review to mold trial, inspection, packing and mold shipping"
                className="h-auto w-full"
                height={1221}
                priority
                src={workflowImage}
                width={1800}
              />
              <figcaption className="border-t border-[var(--line)] bg-[var(--surface-soft)] px-5 py-4 text-sm leading-6 text-[var(--muted)]">
                Visual project management flow for export injection molds, including DFM review, mold design approval, weekly reports, steel certification, heat treatment records, mold trial reports, measurement reports, mold inspection and export packing.
              </figcaption>
            </figure>
          ) : null}
          <div className="mt-8 grid gap-5 lg:grid-cols-5">
            {workflowPhases.map((phase) => (
              <article className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 shadow-sm" key={phase.title}>
                <span className="text-sm font-bold text-[var(--brand)]">{phase.phase}</span>
                <h3 className="mt-3 text-lg font-bold leading-6 text-[var(--brand-dark)]">{phase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{phase.body}</p>
                <ul className="mt-4 grid gap-2">
                  {phase.items.map((item) => (
                    <li className="rounded-sm bg-white px-3 py-2 text-xs font-bold leading-5 text-[var(--brand-dark)]" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Weekly Progress Reporting"
              title="Weekly Progress Reporting for Overseas Customers"
              body="During mold manufacturing, Arktech provides project updates to help overseas customers track tooling progress, machining status, mold component preparation, mold fitting, trial planning and open engineering actions."
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {weeklyReports.map((item) => (
              <li className="rounded-sm border border-[var(--line)] bg-white p-4 text-sm font-bold leading-6 text-[var(--brand-dark)] shadow-sm" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Mold Trial & Validation"
              title="Mold Trial, Inspection and Validation Support"
              body="Before mold shipment, Arktech conducts mold trials and supports sample validation through process parameter records, sample inspection, mold trial reports and customer feedback follow-up."
            />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {validationItems.map((item) => (
              <li className="flex gap-3 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4 text-sm font-bold leading-6 text-[var(--brand-dark)] shadow-sm" key={item}>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          <SectionHeader
            eyebrow="Documentation Before Mold Shipping"
            title="Documentation Before Mold Shipping"
            body="Before mold shipment, Arktech prepares a structured mold shipping file package to help customers receive, install, validate and maintain the mold after delivery."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {documentGroups.map((group) => (
              <article className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm" key={group.title}>
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">{group.title}</h3>
                <ul className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <li className="rounded-sm bg-[var(--surface-soft)] px-4 py-3 text-sm font-semibold leading-6 text-[var(--muted)]" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Mold Shipping File Package"
              title="Mold Shipping File Package for Export Tooling"
              body="For export injection molds, Arktech can prepare a complete shipping file package including design data, trial records, inspection reports, material certificates, packing photos and mold test videos. This helps overseas customers validate mold condition before shipment and prepare for installation after arrival."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {shippingFiles.map((file) => (
                <div className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4 text-sm font-bold leading-6 text-[var(--brand-dark)] shadow-sm" key={file}>
                  {file}
                </div>
              ))}
            </div>
          </div>
          {hasShippingPackageImage ? (
            <div className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
              <Image
                alt="Arktech mold shipping file package for export injection mold projects"
                className="h-auto w-full"
                height={900}
                src={shippingPackageImage}
                width={1200}
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-14 text-white">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4c7ca]">Start Your Export Mold Project</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">Start Your Export Mold Project</h2>
            <p className="mt-4 max-w-4xl leading-7 text-white/75">
              Send CAD files, drawings, material requirements, expected volumes and delivery region. Our engineering team will review your project and provide DFM feedback, tooling planning and quotation details.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[430px]">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">
              Upload CAD for DFM Review
            </Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/70 px-5 font-bold text-white transition hover:bg-white hover:text-[var(--brand-dark)]" href="/request-a-quote">
              Request Manufacturing Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
