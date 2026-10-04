import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Injection Mold Project Management | Export Tooling",
  description:
    "See how Arktech manages export injection mold projects through DFM, mold design approval, progress reporting, mold trials, sample approval and export delivery.",
  alternates: { canonical: "/company/project-management" }
};

const projectControls = [
  "RFQ & Requirement Review",
  "DFM Action Tracking",
  "Mold Design Approval",
  "Tooling Schedule Control",
  "Weekly Progress Reporting",
  "Engineering Change Control",
  "Open-Issue Tracking",
  "Trial & Approval Planning"
];

const workflowStages = [
  {
    number: "01",
    title: "RFQ & DFM Review",
    body: "Confirm project requirements and resolve manufacturability questions before mold design release.",
    items: ["RFQ Review", "Quotation", "Part Review", "Material / Volume Review", "Moldflow, when required", "DFM Feedback"]
  },
  {
    number: "02",
    title: "Mold Design & Approval",
    body: "Coordinate design review and customer feedback before the approved tooling design moves into manufacturing.",
    items: ["2D Mold Design", "3D Mold Design", "Mold Design Review", "Customer Feedback", "Customer Approval"]
  },
  {
    number: "03",
    title: "Tooling Manufacturing",
    body: "Follow the manufacturing plan, ordered components and mold build activities through assembly.",
    items: ["Planning", "Steel & Component Ordering", "Material Checking", "Machining", "Fitting", "Assembly"]
  },
  {
    number: "04",
    title: "Weekly Project Control",
    body: "Keep overseas teams informed about schedule status, current work, open actions and the next milestone.",
    items: ["Tooling Schedule", "Machining Progress", "Component Status", "Open Issues", "Engineering Changes", "Trial Planning"]
  },
  {
    number: "05",
    title: "Mold Trial & Sample Approval",
    body: "Coordinate trial activity, sample feedback and required changes through the customer approval loop.",
    items: ["Mold Trial", "Trial Video", "Injection Parameters", "Sample Review", "Customer Feedback", "Engineering Changes", "Sample Approval"]
  },
  {
    number: "06",
    title: "Export Delivery & Handover",
    body: "Organize the approved tool, agreed records, spare parts and packing information for export delivery.",
    items: ["Final Mold Check", "Dry Run, when required", "Tooling Documentation", "Spare Parts", "Packing Verification", "Mold Shipment"]
  }
];

const workflowVisuals = [
  {
    src: "/images/process/dfm-engineering-feedback-old-website.png",
    alt: "2D and 3D mold design review for export tooling",
    label: "Design review"
  },
  {
    src: "/images/factory-workshop/injection-mold-cnc-machining-workshop.webp",
    alt: "Injection mold machining progress in the Arktech CNC workshop",
    label: "Tool manufacturing"
  },
  {
    src: "/images/project-management/weekly-tooling-progress-report.webp",
    alt: "Injection mold project weekly progress report",
    label: "Weekly reporting"
  },
  {
    src: "/images/process/export-delivery-production-support-molding.png",
    alt: "Injection mold trial and production preparation",
    label: "Mold trial"
  },
  {
    src: "/images/documentation/tooling-documentation-package.png",
    alt: "Export injection mold documentation package for project handover",
    label: "Project handover"
  }
];

const weeklyUpdateItems = [
  "Overall tooling schedule",
  "Machining progress",
  "Steel & component status",
  "Mold fitting / assembly status",
  "Tooling photos",
  "Open issues",
  "Engineering changes",
  "Next milestone",
  "Planned trial date"
];

const changeControls = [
  { title: "Open Issue List", body: "Technical questions and unresolved items." },
  { title: "Revision Control", body: "Latest approved DFM, 2D and 3D data." },
  { title: "Engineering Change Record", body: "Tooling modifications and customer feedback." },
  { title: "Action Tracking", body: "Responsible person, target timing and completion status." }
];

const trialItems = [
  "Trial Schedule",
  "Mold Trial Status",
  "Sample Submission",
  "Customer Feedback",
  "Engineering Changes",
  "Re-Trial Planning",
  "Final Sample Approval"
];

const handoverItems = [
  "Final Mold 2D / 3D Data",
  "Trial & Approval Records",
  "Spare Parts List",
  "Tooling Documentation",
  "Packing Verification",
  "Export Shipment Coordination"
];

const communicationAreas = [
  { title: "Engineering Coordination", body: "DFM, mold design and technical questions." },
  { title: "Schedule Coordination", body: "Milestones, manufacturing progress and trial planning." },
  { title: "Customer Feedback", body: "Drawing revisions, sample comments and approvals." },
  { title: "Delivery Coordination", body: "Documentation, packing and shipment preparation." }
];

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">{body}</p>
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="focus-ring inline-flex items-center font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={href}>
      {children} <span aria-hidden="true" className="ml-2">→</span>
    </Link>
  );
}

export default function ProjectManagementPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-white">
        <div className="container-page grid gap-9 py-12 sm:py-14 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:items-center lg:gap-12 lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Project Management</p>
            <h1 className="split-hero-title mt-4 text-[var(--brand-dark)]">
              Export Mold Project Management
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              Arktech manages export injection mold projects through structured RFQ review, DFM feedback, mold design approval, weekly progress reporting, engineering change control, mold trial coordination, sample approval and export delivery support.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3" aria-label="Arktech project management records and tooling progress">
            <figure className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
              <Image alt="Injection mold project weekly progress report" className="object-contain object-center p-3" fill priority sizes="(min-width: 1024px) 50vw, 100vw" src="/images/project-management/weekly-tooling-progress-report.webp" />
            </figure>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
              <Image alt="2D and 3D mold design review for export tooling" className="object-contain object-center" fill sizes="(min-width: 1024px) 25vw, 50vw" src="/images/process/dfm-engineering-feedback-old-website.png" />
            </figure>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
              <Image alt="Injection mold manufacturing progress and project control" className="object-cover object-center" fill sizes="(min-width: 1024px) 25vw, 50vw" src="/images/process/tooling-manufacturing-plan-mold.png" />
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader eyebrow="Project Management Overview" title="Structured Project Management for Export Injection Molds" body="Each export tooling project is coordinated through defined engineering milestones, customer approvals, weekly project updates and action tracking. This helps overseas engineering and sourcing teams follow tooling status, identify open issues early and prepare for mold trial, sample approval and production transfer." />
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <TextLink href="/injection-molding-engineering">DFM Engineering</TextLink>
              <TextLink href="/services/injection-mold-manufacturing">Injection Mold Manufacturing</TextLink>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Project Controls</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {projectControls.map((control) => <div className="border-l-2 border-[var(--brand)] bg-white px-4 py-3 text-sm font-bold leading-6 text-[var(--brand-dark)]" key={control}>{control}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <SectionHeader eyebrow="Project Workflow" title="Project Workflow from RFQ to Export Delivery" body="Six connected stages organize injection mold DFM, mold design approval, tooling manufacturing, weekly project control, trial coordination and final export handover." />
          <ol className="mt-9 grid gap-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
            {workflowStages.map((stage, index) => (
              <li className="relative border-t-2 border-[var(--brand)] bg-[var(--surface-soft)] p-5 sm:p-6" key={stage.number}>
                <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-bold leading-7 text-[var(--brand-dark)]">{stage.title}</h3><span className="shrink-0 text-2xl font-bold text-[var(--brand)]">{stage.number}</span></div>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{stage.body}</p>
                <ul className="mt-5 grid gap-2 border-t border-[var(--line)] pt-4">
                  {stage.items.map((item) => <li className="flex gap-2 text-sm leading-6 text-[var(--brand-dark)]" key={item}><span aria-hidden="true" className="text-[var(--brand)]">—</span><span>{item}</span></li>)}
                </ul>
                {index < workflowStages.length - 1 ? <span aria-hidden="true" className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xl text-[var(--brand)] lg:hidden">↓</span> : null}
                {(index + 1) % 3 !== 0 ? <span aria-hidden="true" className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-xl text-[var(--brand)] lg:block">→</span> : null}
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {workflowVisuals.map((visual) => (
              <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={visual.label}>
                <div className="relative aspect-[16/10] bg-[var(--surface-soft)]"><Image alt={visual.alt} className="object-cover object-center" fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" src={visual.src} /></div>
                <figcaption className="px-4 py-3 text-sm font-bold text-[var(--brand-dark)]">{visual.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
            <div className="relative aspect-[16/10]"><Image alt="Injection mold project weekly progress report" className="object-contain object-center p-4" fill sizes="(min-width: 1024px) 55vw, 100vw" src="/images/project-management/weekly-tooling-progress-report.webp" /></div>
            <figcaption className="border-t border-[var(--line)] px-5 py-3 text-sm leading-6 text-[var(--muted)]">Real Arktech weekly tooling schedule and manufacturing progress-photo format, extracted from the retained project management workflow source.</figcaption>
          </figure>
          <div>
            <SectionHeader eyebrow="Weekly Progress Reporting" title="Weekly Project Visibility for Overseas Customers" body="During mold manufacturing, Arktech provides regular project updates so overseas engineering and sourcing teams can review tooling progress, current activities, open issues and upcoming milestones without being onsite." />
            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {weeklyUpdateItems.map((item) => <li className="flex gap-2 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={item}><span aria-hidden="true" className="text-[var(--brand)]">✓</span><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader eyebrow="Engineering Change & Issue Control" title="Managing Revisions, Open Issues and Engineering Changes" body="Tooling projects can change during design, manufacturing and mold trial. Arktech tracks technical questions, customer feedback, design revisions and required actions so both teams work from the latest approved information." />
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {changeControls.map((control) => <article className="border-l-2 border-[var(--brand)] bg-[var(--surface-soft)] p-4" key={control.title}><h3 className="text-sm font-bold uppercase tracking-wide text-[var(--brand-dark)]">{control.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{control.body}</p></article>)}
            </div>
          </div>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
            <Image alt="Annotated DFM and mold design review for engineering change control" className="object-contain object-center" fill sizes="(min-width: 1024px) 52vw, 100vw" src="/images/process/dfm-engineering-feedback-old-website.png" />
          </figure>
        </div>
      </section>

      <section id="mold-trial-validation" className="scroll-mt-24 bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
            <Image alt="Mold trial and sample approval coordination" className="object-cover object-center" fill sizes="(min-width: 1024px) 52vw, 100vw" src="/images/process/export-delivery-production-support-molding.png" />
          </figure>
          <div>
            <SectionHeader eyebrow="Trial & Approval Coordination" title="Mold Trial, Customer Feedback and Sample Approval" body="The project team coordinates trial timing, sample submission, customer comments and required tooling changes through the approval cycle. Detailed inspection and quality records are covered on the Quality & Documentation page." />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {trialItems.map((item) => <li className="border-l-2 border-[var(--brand)] bg-white px-4 py-3 text-sm font-bold leading-6 text-[var(--brand-dark)]" key={item}>{item}</li>)}
            </ul>
            <div className="mt-6"><TextLink href="/company/quality-documentation">View Quality &amp; Documentation</TextLink></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader eyebrow="Export Delivery & Project Handover" title="Project Handover Before Export Delivery" body="Once tooling is approved, Arktech coordinates final project handover, documentation, spare parts verification, packing preparation and export shipment support." />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {handoverItems.map((item) => <div className="border-b border-[var(--line)] pb-3 text-sm font-bold leading-6 text-[var(--brand-dark)]" key={item}>{item}</div>)}
            </div>
            <div className="mt-6"><TextLink href="/company/quality-documentation">View Quality &amp; Documentation Package</TextLink></div>
          </div>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
            <Image alt="Export injection mold documentation package for project handover" className="object-contain object-center p-3" fill sizes="(min-width: 1024px) 52vw, 100vw" src="/images/documentation/tooling-documentation-package.png" />
          </figure>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeader eyebrow="Project Communication" title="One-Window Engineering Communication" body="Overseas tooling projects are easier to manage when engineering questions, timing, approvals and open actions are coordinated through one project contact." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {communicationAreas.map((area) => <article className="border-t-2 border-[var(--brand)] bg-white p-5" key={area.title}><h3 className="text-sm font-bold uppercase tracking-wide text-[var(--brand-dark)]">{area.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{area.body}</p></article>)}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm">
            <TextLink href="/injection-molds/mold-trial-validation">Mold Trial &amp; Validation</TextLink>
            <TextLink href="/request-a-quote">Request a Quote</TextLink>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,56fr)_minmax(320px,44fr)] lg:items-center lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Start Your Export Mold Project</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Start Your Export Mold Project</h2>
            <p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Send us your CAD files, drawings, material requirements, expected volumes and delivery region. Our engineering team will review your project and provide DFM feedback, tooling planning and quotation details.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[440px] lg:justify-self-end">
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
