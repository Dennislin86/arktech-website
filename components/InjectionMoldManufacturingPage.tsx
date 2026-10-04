import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FullBleedHero } from "@/components/FullBleedHero";
import { LazyAutoplayVideo } from "@/components/LazyAutoplayVideo";

const capabilities = [
  { title: "DFM & Tooling Engineering", body: "Review part geometry, moldability, gating, cooling, ejection and moving mechanisms before steel cutting.", href: "/injection-molding-engineering", link: "Explore DFM Engineering" },
  { title: "Mold Design & Approval", body: "Finalize mold structure, parting strategy, inserts, sliders, lifters, hot runner layout and receiving machine requirements for approval." },
  { title: "Precision Mold Manufacturing", body: "Coordinate CNC machining, EDM, wire cutting, grinding and precision machining of mold steel and tooling components." },
  { title: "Mold Fitting & Assembly", body: "Fit and verify inserts, movements, shut-offs, cooling connections and key mold mechanisms before trial." },
  { title: "Mold Trial & Validation", body: "Run structured mold trials, inspect samples, review dimensions and complete correction loops before tooling approval.", href: "/company/project-management#mold-trial-validation", link: "View Mold Trial & Validation" },
  { title: "Documentation & Export Delivery", body: "Prepare agreed inspection records, tooling data, spare parts information, packing evidence and handover documents for overseas delivery.", href: "/company/quality-documentation", link: "View Quality & Documentation" }
];

const coreCapabilityImages = [
  {
    title: "DFM & Mold Design",
    image: "/images/Engineering/injection-mold-engineering-dfm-analysis.webp",
    alt: "DFM engineering and mold design review for export injection mold manufacturing"
  },
  {
    title: "Precision Mold Manufacturing",
    image: "/images/factory-workshop/injection-mold-cnc-machining-workshop.webp",
    alt: "Precision mold manufacturing with CNC machining equipment for injection tooling"
  },
  {
    title: "Mold Trial & Validation",
    image: "/images/process/export-delivery-production-support-molding.png",
    alt: "Injection mold trial and sample validation before export delivery"
  }
];

const exportReadyCapabilities = [
  {
    title: "Machine & Interface Compatibility",
    body: "Mold dimensions, clamping requirements, connections and machine interface are reviewed for the receiving production environment.",
    href: "/injection-molding-engineering"
  },
  {
    title: "Mold Trial & Validation",
    body: "Tooling is trialed, corrected and validated before shipment based on approved samples and project requirements.",
    href: "/company/project-management#mold-trial-validation"
  },
  {
    title: "Documentation & Spare Parts",
    body: "Relevant tooling documentation, inspection records and agreed spare components are prepared for transfer.",
    href: "/company/quality-documentation"
  },
  {
    title: "Export Preparation",
    body: "Final mold inspection, protection, packing and shipment preparation are completed before delivery.",
    href: "/company/project-management"
  }
];

const moldTypes = [
  {
    title: "Complex Injection Molds",
    description: "Tooling for undercuts, sliders, lifters and coordinated side actions in demanding part geometries.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Complex injection mold with sliders lifters and coordinated side actions",
    href: "/injection-molds/complex-injection-molds"
  },
  {
    title: "Multi-Cavity Injection Molds",
    description: "Multi-cavity tooling engineered for balanced filling, dimensional consistency and repeatable production.",
    image: "/images/mold-types/multi-cavity-injection-molds.webp",
    alt: "Multi-cavity injection mold for balanced filling and repeatable production",
    href: "/injection-molds/multi-cavity-molds"
  },
  {
    title: "Hot Runner Molds",
    description: "Hot runner tooling designed around material flow, gate control and production efficiency.",
    image: "/images/mold-types/hot-runner-molds.webp",
    alt: "Hot runner injection mold for material flow and gate control",
    href: "/injection-molds/hot-runner-molds"
  },
  {
    title: "Two-Shot / 2K Molds",
    description: "Two-material or two-color tooling engineered around shot sequence, material compatibility and machine configuration.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp",
    alt: "Two-shot 2K injection mold for two-material plastic components",
    href: "/injection-molds/two-shot-2k-molds"
  },
  {
    title: "Insert Molding Tools",
    description: "Tooling for molding plastic around metal inserts and prepared components.",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Insert molding tool for plastic molded around prepared components",
    href: "/injection-molds/insert-molding-tools"
  },
  {
    title: "Unscrewing Molds",
    description: "Mechanically controlled tooling for threaded parts and internal screw features.",
    image: "/images/mold-types/unscrewing-molds.webp",
    alt: "Unscrewing injection mold for threaded plastic parts",
    href: "/injection-molds/unscrewing-molds"
  },
  {
    title: "Large Injection Molds",
    description: "Large-format tooling for housings, panels and structural plastic components.",
    image: "/images/mold-types/large-component-molds.JPG",
    alt: "Large injection mold for housings panels and structural plastic components",
    href: "/injection-molds/large-injection-molds"
  },
  {
    title: "Prototype Injection Molds",
    description: "Prototype tooling for engineering samples, validation and early production builds.",
    image: "/images/mold-types/prototype-injection-mold.webp",
    alt: "Prototype injection mold with molded sample for engineering validation",
    href: "/injection-molds/prototype-injection-molds"
  }
];

const toolroomCapabilities = [
  {
    title: "Precision Machining",
    processes: "CNC Rough Machining · Precision CNC Machining · Drilling & Milling · Grinding",
    body: "Machining of cavity, core, inserts and mold components from approved tooling data."
  },
  {
    title: "EDM & Wire Cutting",
    processes: "EDM · Wire EDM",
    body: "Electrical discharge machining and wire cutting for ribs, slots, deep features and complex mold geometry."
  },
  {
    title: "Mold Fitting & Finishing",
    processes: "Steel Preparation · Mold Fitting · Polishing",
    body: "Fitting, shut-off adjustment, component preparation and surface finishing before final assembly."
  },
  {
    title: "Assembly & Trial Preparation",
    processes: "Mold Assembly · Trial Preparation",
    body: "Final assembly, mechanism checks, cooling and ejection verification before mold trial."
  }
];

const toolroomManufacturingFlow = [
  {
    title: "Steel Preparation",
    body: "Mold steel and inserts are prepared according to the approved tooling specification and machining requirements."
  },
  {
    title: "CNC Machining",
    body: "Cavity, core, inserts and mold components are precision-machined from the released tooling data."
  },
  {
    title: "EDM & Wire Cutting",
    body: "Detailed features, ribs, slots and complex geometry are completed using EDM and wire EDM where required."
  },
  {
    title: "Fitting & Polishing",
    body: "Mold components are fitted, shut-offs checked and required molding surfaces finished or polished."
  },
  {
    title: "Mold Assembly",
    body: "Inserts, sliders, lifters, cooling, ejection and standard components are assembled and verified before trial."
  },
  {
    title: "Mold Trial",
    body: "Completed tooling moves into mold trial, sample review and correction before final approval."
  }
];

const equipment = [
  {
    title: "CNC Machining Centers",
    body: "Precision machining of mold bases, cavity and core inserts, electrodes and tooling components from released manufacturing data.",
    image: "/images/factory-workshop/injection-mold-cnc-machining-workshop.webp",
    alt: "CNC machining centers supporting injection mold component manufacturing"
  },
  {
    title: "EDM Machines",
    body: "Electrical discharge machining for deep ribs, internal details and geometry that cannot be efficiently produced by conventional cutting.",
    image: "/images/factory-workshop/injection-mold-edm-machine.webp",
    alt: "Electrical discharge machining equipment for injection mold details"
  },
  {
    title: "Wire EDM",
    body: "Precision wire cutting for inserts, slots, shut-offs and high-accuracy mold features.",
    image: "/images/facility/41fc5d07-28a3-4fbf-9826-edaca9de7b2a.jpg",
    alt: "Wire cutting equipment in the injection mold toolroom"
  },
  {
    title: "Grinding & Milling",
    body: "Supporting machining and finishing operations for mold components, inserts and tooling details.",
    image: "/images/factory-workshop/injection-mold-precision-grinding-workshop.webp",
    alt: "Grinding and milling equipment for injection mold components and inserts"
  },
  {
    title: "Mold Fitting & Assembly",
    body: "Dedicated fitting and assembly work for inserts, sliders, lifters, ejection, cooling and standard mold components.",
    image: "/images/factory-workshop/injection-mold-fitting-workshop.webp",
    alt: "Toolmakers fitting and assembling injection mold components"
  }
];

const processStages = [
  {
    number: "01",
    title: "Engineering",
    steps: ["DFM & Tooling Review", "Mold Design Approval"],
    body: "Confirm part data, moldability, tooling requirements and final mold structure before manufacturing release.",
    link: { label: "Explore DFM Engineering", href: "/injection-molding-engineering" }
  },
  {
    number: "02",
    title: "Tool Build",
    steps: ["Steel & Component Preparation", "CNC Machining", "EDM / Wire EDM"],
    body: "Prepare mold steel and components, then machine cavity, core, inserts and precision tooling features from the released design."
  },
  {
    number: "03",
    title: "Assembly",
    steps: ["Fitting", "Polishing", "Mold Assembly"],
    body: "Fit shut-offs, finish specified molding surfaces and assemble the complete mold before trial."
  },
  {
    number: "04",
    title: "Trial & Validation",
    steps: ["Mold Trial", "Correction & Validation"],
    body: "Run structured mold trials, review samples and dimensions, then complete engineering corrections before approval.",
    link: { label: "View Mold Trial & Validation", href: "/company/project-management#mold-trial-validation" }
  },
  {
    number: "05",
    title: "Release & Delivery",
    steps: ["Final Inspection", "Packing & Export Delivery"],
    body: "Verify final mold condition, documentation and agreed spare-parts preparation, then protect and prepare the tooling package for shipment.",
    link: { label: "View Quality & Documentation", href: "/company/quality-documentation" }
  }
];

const dfmReviewTopics = [
  { title: "Parting Line & Shut-Off", body: "Define cavity / core split, shut-off conditions and insert boundaries." },
  { title: "Cooling & Water Channels", body: "Review cooling layout and thermal control around the molded geometry." },
  { title: "Gate & Runner Strategy", body: "Evaluate gate location, runner layout and hot / cold runner requirements." },
  { title: "Slider / Lifter / Undercuts", body: "Resolve undercut release direction, movement travel and side-action structure." },
  { title: "Ejection & Moving Mechanisms", body: "Review ejector layout, sequence, clearance and moving-component interaction." },
  { title: "Steel, Inserts & Standards", body: "Confirm steel selection, replaceable inserts and agreed tooling standards." }
];

const toolingDecisions = [
  "Number of Cavities",
  "Hot Runner vs Cold Runner",
  "Slider / Lifter Requirements",
  "Unscrewing Mechanism",
  "Interchangeable Inserts",
  "Steel Specification",
  "Cooling Strategy",
  "Customer Machine Interface",
  "Spare Insert Requirements",
  "Tooling Documentation Requirements"
];
const exportToolingGroups = [
  {
    title: "Customer Tooling Standard",
    items: [
      "Customer-Specific Mold Standards",
      "DME / HASCO-Compatible Components When Specified",
      "Approved Steel Specifications"
    ],
    body: "Tool construction, component standards and steel requirements are aligned with the approved tooling specification."
  },
  {
    title: "Machine & Utility Interface",
    items: [
      "Customer Machine Compatibility",
      "Cooling Connection Requirements",
      "Hot Runner & Electrical Connections"
    ],
    body: "Machine interface, cooling, electrical and hot runner requirements are reviewed for the receiving production environment."
  },
  {
    title: "Serviceability & Spare Support",
    items: ["Interchangeable Inserts", "Spare Inserts & Wear Parts"],
    body: "Replaceable tooling elements and agreed spare components can be prepared to support maintenance and long-term production."
  },
  {
    title: "Tooling Data & Handover",
    items: ["Final 2D / 3D Tooling Data", "Agreed Documentation / Handover Data"],
    body: "Final tooling information and agreed handover documentation are prepared for transfer and future maintenance."
  }
];

const complexToolingGroups = [
  {
    title: "Flow & Gating",
    items: ["Hot Runner Systems", "Valve Gate Systems", "Multi-Cavity Layouts"],
    body: "Runner, gating and cavity layout are selected around material flow, part quality and production requirements."
  },
  {
    title: "Moving Mechanisms",
    items: ["Sliders", "Lifters", "Unscrewing Mechanisms"],
    body: "Moving mechanisms are engineered around undercut release, travel, locking, clearance and reliable mold operation."
  },
  {
    title: "Changeable Tooling",
    items: ["Interchangeable Inserts"],
    body: "Interchangeable inserts can support part variants, serviceability and controlled tooling changes where appropriate."
  },
  {
    title: "Specialty Molding",
    items: ["Insert Molding", "Overmolding", "Two-Shot / 2K"],
    body: "Specialized tooling can be developed for inserts, multi-material parts and two-shot molding requirements."
  }
];
const trialValidationGroups = [
  {
    title: "Trial Setup",
    items: ["Trial Preparation", "Injection Parameter Recording"],
    body: "Prepare the tool, machine conditions and trial setup, then record the key molding parameters used for sample production."
  },
  {
    title: "Sample Validation",
    items: ["Sample Review", "Dimensional Check"],
    body: "Review molded samples for appearance, function and dimensional requirements against the approved project criteria."
  },
  {
    title: "Correction Loop",
    items: ["Customer Feedback", "Engineering Corrections", "Re-Trial"],
    body: "Translate sample feedback and inspection results into controlled engineering changes, followed by re-trial where required."
  },
  {
    title: "Approval & Release",
    items: ["Final Approval Coordination"],
    body: "Coordinate final sample approval, validation records and project release requirements before export delivery."
  }
];

const primaryTrialValidationEvidence = {
  label: "Mold Trial Report",
  description: "Trial setup, mold condition, observations and validation records.",
  image: "/images/injection-mold-manufacturing/mold-trial-report-evidence.webp",
  alt: "Injection mold trial report documenting mold condition and validation",
  width: 1400,
  height: 1037
};

const supportingTrialValidationEvidence = [
  {
    label: "Dimensional Inspection",
    description: "Critical dimensions and inspection results from molded trial samples.",
    image: "/images/quality/dimensional-inspection-report-anonymized.webp",
    alt: "Dimensional inspection report for injection molded trial samples"
  },
  {
    label: "Process Parameters",
    description: "Recorded molding conditions used during sample validation.",
    image: "/images/injection-mold-manufacturing/injection-molding-process-parameters.webp",
    alt: "Injection molding process parameter sheet from mold trial"
  }
];
const documentationItems = ["DFM Report", "Mold Trial Report", "Dimensional Inspection Report", "Steel / Material Certificates", "Tooling 2D / 3D Data", "Spare Parts List", "Hot Runner Information", "Cooling Information", "Packing Photos", "Export Packing Checklist"];

const audiences = [
  { title: "Product Companies", body: "OEMs, hardware brands and product teams developing plastic products for overseas markets." },
  { title: "Injection Molding Companies", body: "Molders requiring offshore toolmaking capacity, export-ready molds, validation records and spare-parts support." },
  { title: "Engineering & Sourcing Teams", body: "Teams requiring DFM, technical communication, project updates, tool validation and documented delivery." }
];

const relatedCapabilities = [
  { label: "DFM Engineering", href: "/injection-molding-engineering" },
  { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
  { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
  { label: "Quality & Documentation", href: "/company/quality-documentation" },
  { label: "Mold Spare Parts", href: "/injection-molds/mold-spare-parts" },
  { label: "Project Management", href: "/company/project-management" },
  { label: "Mold Design Guidelines", href: "/resources/mold-design-guidelines" },
  { label: "Hot Runner vs Cold Runner", href: "/resources/injection-molds/hot-runner-vs-cold-runner" },
  { label: "Slider vs Lifter", href: "/resources/injection-molds/slider-vs-lifter" }
];

const faqs = [
  { question: "Can Arktech build export injection molds for overseas molding factories?", answer: "Yes. Arktech supports export tooling from DFM and mold design review through tool manufacturing, trials, validation, documentation, spare parts and export preparation." },
  { question: "What injection mold types can Arktech manufacture?", answer: "Supported projects include complex molds, multi-cavity molds, hot runner molds, insert molding tools, overmolding tools, two-shot or 2K molds, unscrewing molds and large component molds." },
  { question: "What mold manufacturing processes are used?", answer: "The process can include steel preparation, CNC machining, EDM, wire EDM, grinding, fitting, polishing, assembly, mold trial, correction and final inspection according to the approved tool design." },
  { question: "Can Arktech support hot runner and multi-cavity molds?", answer: "Yes. Hot runner selection, cavity layout, thermal balance, service access and trial behavior are reviewed against the resin, part geometry and customer production requirements." },
  { question: "Can the mold be designed for our injection molding machine?", answer: "Yes. Mold dimensions, platen and tie-bar limits, locating and connection requirements can be reviewed against customer-provided machine data before mold design approval." },
  { question: "What mold standards can you support?", answer: "Arktech works to customer-specific mold standards and can review DME, HASCO or equivalent component requirements where they are defined in the approved tooling specification." },
  { question: "Do you provide mold trials before shipment?", answer: "Yes. Trial support can include injection parameter records, sample review, dimensional checks, customer feedback, engineering corrections, re-trial and final approval coordination." },
  { question: "What documentation is provided before export?", answer: "The agreed package may include DFM records, mold trial and dimensional reports, certificates, tooling data, spare-parts information, cooling and hot runner records, and packing evidence." },
  { question: "Can you provide spare inserts and wear parts?", answer: "Yes. Replaceable inserts, wear components and other agreed spare parts can be prepared against the approved mold design and project requirements." }
];

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{title}</h2>{body ? <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">{body}</p> : null}</div>;
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="focus-ring inline-flex w-fit rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={href}>{children}<span className="ml-2" aria-hidden="true">→</span></Link>;
}

export function InjectionMoldManufacturingPage() {
  return (
    <>
      <FullBleedHero
        backgroundImages={[{
          src: "/images/mold-types/Precision-Molds.png",
          alt: "Completed export-ready precision injection mold built by Arktech",
          position: "right"
        }]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/manufacturing-capabilities" },
          { label: "Injection Mold Manufacturing" }
        ]}
        description="Arktech manufactures export-ready injection molds in China for product companies and injection molders worldwide, with DFM engineering, mold design, mold trials, validation and documented delivery before shipment."
        eyebrow="Export Injection Mold Manufacturing"
        height="standard"
        primaryCta={{ label: "Upload CAD for DFM Review", href: "/request-a-quote" }}
        secondaryCta={{ label: "Request Tooling Quote", href: "/request-a-quote" }}
        supportingLine="DFM · Tooling · Mold Trial · Validation · Export Delivery"
        title="Export Injection Molds for Global Production"
      />

      <section className="bg-[var(--surface-soft)] py-12 sm:py-14 lg:py-16">
        <div className="container-page">
          <div className="max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Export Tooling Overview</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl lg:text-[46px]">
              Export-Ready Injection Molds for Overseas Production
            </h2>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,55fr)_minmax(0,45fr)]">
            <div className="space-y-6 lg:space-y-7">
              <figure className="relative aspect-[16/9] overflow-hidden rounded-md border border-[var(--line)] bg-white">
                <Image
                  alt="Precision injection mold manufacturing, validation and global delivery preparation"
                  className="object-contain object-center"
                  fill
                  sizes="(min-width: 1280px) 55vw, (min-width: 1024px) 50vw, 100vw"
                  src="/images/injection-mold-manufacturing/Precision Mold to Global Delivery.png"
                />
              </figure>

              <figure className="relative aspect-video overflow-hidden rounded-md border border-[var(--line)] bg-[var(--brand-dark)]">
                <LazyAutoplayVideo
                  ariaLabel="Arktech injection mold manufacturing process"
                  className="h-full w-full object-cover object-center"
                  poster="/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp"
                  preload="metadata"
                  rootMargin="100px 0px"
                  src="/videos/injection-mold-manufacturing/mold-manufacturing.mp4"
                  threshold={0.25}
                />
                <figcaption className="pointer-events-none absolute left-3 top-3 rounded-sm bg-[rgba(8,35,58,0.84)] px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white sm:left-4 sm:top-4 sm:text-[13px]">
                  Mold Manufacturing
                </figcaption>
              </figure>
            </div>

            <div>
              <div className="space-y-3 text-[17px] leading-[1.6] text-[var(--muted)]">
                <p>Arktech builds injection molds for overseas production environments, with DFM review, mold design approval, tool manufacturing, mold trials, validation, documentation and export preparation coordinated around the customer&apos;s machine, tooling standards and production requirements.</p>
                <p>The goal is not only to produce acceptable samples, but to deliver tooling that can be installed, maintained and used reliably after shipment.</p>
              </div>

              <div className="mt-6 grid gap-x-6 sm:grid-cols-2">
                {exportReadyCapabilities.map((item) => (
                  <Link
                    className="focus-ring group border-t border-[var(--line)] py-4 transition hover:border-[var(--brand)]"
                    href={item.href}
                    key={item.title}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-lg font-bold leading-6 text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{item.title}</span>
                      <span aria-hidden="true" className="mt-0.5 text-[var(--brand)] transition group-hover:translate-x-0.5">→</span>
                    </span>
                    <span className="mt-2 block text-[15px] leading-6 text-[var(--muted)]">{item.body}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-6 border-t border-[var(--line)] pt-5">
                <p className="text-lg font-bold leading-7 text-[var(--brand-dark)]">Need tooling built for your molding machine and production standard?</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review <span className="ml-2" aria-hidden="true">→</span></Link>
                  <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote <span className="ml-2" aria-hidden="true">→</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Core Capabilities"
            title="Injection Mold Manufacturing Capabilities"
            body="From DFM and mold design through precision mold manufacturing, mold trials and documented export delivery, Arktech manages the tooling process around your production requirements."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3" aria-label="Injection mold manufacturing evidence">
            {coreCapabilityImages.map((item) => (
              <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={item.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    alt={item.alt}
                    className="object-cover object-center"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={item.image}
                  />
                </div>
                <figcaption className="border-t border-[var(--line)] px-4 py-3 text-base font-bold leading-6 text-[var(--brand-dark)] sm:text-lg">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>

          <ol className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3" aria-label="Injection mold manufacturing journey">
            {capabilities.map((capability, index) => (
              <li className="relative" key={capability.title}>
                <article className="group flex h-full flex-col border border-[var(--line)] border-t-2 border-t-[var(--brand)] bg-white p-5 transition hover:border-[var(--brand)]">
                  <span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl font-bold leading-7 text-[var(--brand-dark)] sm:text-2xl">{capability.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-6 text-[var(--muted)]">{capability.body}</p>
                  {capability.href ? (
                    <Link className="focus-ring mt-4 inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={capability.href}>
                      {capability.link}<span className="ml-2" aria-hidden="true">→</span>
                    </Link>
                  ) : null}
                </article>
                {index % 3 !== 2 ? <span aria-hidden="true" className="absolute -right-[17px] top-1/2 z-10 hidden h-px w-[17px] bg-red-200 lg:block" /> : null}
              </li>
            ))}
          </ol>

          <aside className="mt-9 grid gap-5 border-t border-[var(--line)] bg-[var(--surface-soft)] p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center" aria-label="Start an injection mold manufacturing project">
            <h3 className="text-lg font-bold leading-7 text-[var(--brand-dark)] sm:text-xl">Have a mold project ready for engineering review?</h3>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Tooling Engineering"
            title="Mold Engineering Before Steel Cutting"
          />
          <div className="mt-5 max-w-4xl space-y-3 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            <p>After part moldability is reviewed, Arktech develops the mold concept around part geometry, production requirements, customer machine conditions and tooling standards before steel cutting begins.</p>
            <p>Engineering review focuses on mold structure, parting strategy, cooling, gating, ejection, moving mechanisms, steel selection and long-term production requirements.</p>
          </div>

          <figure className="mt-9 overflow-hidden rounded-md border border-[var(--line)] bg-white lg:grid lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)]">
            <div className="relative aspect-[16/10] min-h-[280px] overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[430px]">
              <Image alt="Injection mold engineering team reviewing production mold design before steel cutting" className="object-cover object-center" fill loading="lazy" sizes="(min-width: 1024px) 58vw, 100vw" src="/images/factory-workshop/injection-mold-engineering-office.webp" />
            </div>
            <figcaption className="flex flex-col justify-center border-t border-[var(--line)] bg-[var(--brand-dark)] p-6 text-white lg:border-l lg:border-t-0 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-red-200">Production Mold Design</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">Tool Structure Matched to the Receiving Production Environment</h3>
              <p className="mt-4 leading-7 text-slate-300">Mold design approval connects tool structure, cooling, runner and gate strategy, ejection, moving mechanisms, component standards and customer machine compatibility before manufacturing release.</p>
              <Link className="focus-ring mt-6 inline-flex w-fit rounded-sm font-bold text-white transition hover:text-red-200" href="/injection-molding-engineering">Explore DFM Engineering <span className="ml-2" aria-hidden="true">→</span></Link>
            </figcaption>
          </figure>

          <div className="mt-12 border-t border-[var(--line)] pt-10">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">DFM Engineering Review</p>
            <h3 className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-[var(--brand-dark)] sm:text-3xl">Mold Engineering Review Before Manufacturing Release</h3>

            <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:items-start lg:gap-10">
              <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-white">
                <div className="relative aspect-[4/5] bg-slate-100">
                  <Image
                    alt="Injection molding DFM engineering report with tooling review items"
                    className="object-contain object-center"
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    src="/images/injection-mold-manufacturing/dfm-engineering-report.webp"
                  />
                </div>
                <figcaption className="border-t border-[var(--line)] px-4 py-3 text-[15px] leading-6 text-[var(--muted)] sm:px-5 sm:text-base">
                  Real DFM review covering parting line, gating, cooling, ejection and tooling risks before mold release.
                </figcaption>
              </figure>

              <div>
                <ol className="grid gap-x-6 sm:grid-cols-2" aria-label="Injection mold DFM engineering review topics">
                  {dfmReviewTopics.map((topic, index) => (
                    <li className="border-b border-[var(--line)] py-4 first:pt-0" key={topic.title}>
                      <div className="flex items-start gap-3">
                        <span className="pt-0.5 text-xs font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                        <div>
                          <h4 className="text-base font-bold leading-6 text-[var(--brand-dark)] sm:text-lg">{topic.title}</h4>
                          <p className="mt-1.5 text-sm leading-6 text-[var(--muted)] sm:text-[15px]">{topic.body}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">Engineering decisions are reviewed before mold design approval and steel cutting to reduce avoidable tooling changes later in the project.</p>
                <div className="mt-6 border-l-2 border-[var(--brand)] bg-white p-5">
                  <p className="font-bold text-[var(--brand-dark)]">Have a complex part or tooling requirement?</p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row">
                    <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-4 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review <span className="ml-2" aria-hidden="true">→</span></Link>
                    <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-4 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/injection-molding-engineering">Explore DFM Engineering <span className="ml-2" aria-hidden="true">→</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 border-t border-[var(--line)] pt-10 lg:grid-cols-[minmax(0,64fr)_minmax(0,36fr)] lg:items-stretch">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Key Tooling Decisions</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)] sm:text-3xl">Decisions Confirmed Before Mold Build</h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">Key tooling decisions are reviewed before mold design approval to align mold structure, production requirements and customer machine conditions.</p>
              <ul className="mt-5 grid gap-x-6 sm:grid-cols-2">
                {toolingDecisions.map((item) => <li className="border-b border-[var(--line)] py-3 text-base font-bold leading-6 text-[var(--brand-dark)] sm:text-[17px]" key={item}>{item}</li>)}
              </ul>
            </div>
            <aside className="flex h-full flex-col justify-center border-l-2 border-[var(--brand)] bg-white p-6 sm:p-7">
              <h3 className="text-xl font-bold leading-tight text-[var(--brand-dark)] sm:text-2xl">Need a tooling review before mold design starts?</h3>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">Send your CAD files, 2D drawings, machine information and tooling requirements for engineering review before mold design approval.</p>
              <div className="mt-6 flex flex-col gap-3">
                <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review <span className="ml-2" aria-hidden="true">→</span></Link>
                <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/injection-molding-engineering">Explore DFM Engineering <span className="ml-2" aria-hidden="true">→</span></Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Engineering to Toolroom"
            title="From Approved Mold Design to Toolroom Manufacturing"
          />
          <div className="mt-5 max-w-4xl space-y-3 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            <p>Once the mold design is approved, released tooling data moves into steel preparation, CNC machining, EDM, wire cutting, fitting, polishing, assembly and mold trial.</p>
            <p>Arktech coordinates each manufacturing stage against the approved mold design, tooling specification and production requirements.</p>
          </div>
          <p className="mt-5 text-sm font-semibold leading-6 text-[var(--brand-dark)] sm:text-base">
            Approved tooling data <span className="px-1 text-[var(--brand)]" aria-hidden="true">→</span> machining <span className="px-1 text-[var(--brand)]" aria-hidden="true">→</span> fitting <span className="px-1 text-[var(--brand)]" aria-hidden="true">→</span> assembly <span className="px-1 text-[var(--brand)]" aria-hidden="true">→</span> mold trial
          </p>

          <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:items-stretch lg:gap-12">
            <figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] lg:aspect-auto">
              <Image
                alt="Injection mold fitting and tooling component verification in the Arktech toolroom"
                className="object-cover object-center"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 46vw, 100vw"
                src="/images/factory-workshop/injection-mold-fitting-workshop.webp"
              />
            </figure>

            <div className="flex min-w-0 flex-col">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Toolroom Manufacturing Flow</p>
              <ol className="relative mt-4 ml-3 border-l border-red-200" aria-label="Toolroom manufacturing flow from approved mold design to mold trial">
                {toolroomManufacturingFlow.map((stage, index) => (
                  <li className="group relative ml-6 border-b border-[var(--line)] py-4 pl-3 first:pt-0 last:border-b-0 last:pb-0" key={stage.title}>
                    <span className="absolute -left-[2.45rem] top-4 inline-flex min-w-8 justify-center bg-white py-0.5 text-xs font-bold text-[var(--brand)] group-first:top-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-bold leading-6 text-[var(--brand-dark)] sm:text-xl">{stage.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">{stage.body}</p>
                  </li>
                ))}
              </ol>

              <aside className="mt-7 border-t border-[var(--line)] pt-6" aria-label="Continue with mold manufacturing or start a tooling review">
                <p className="font-bold leading-6 text-[var(--brand-dark)]">See how approved mold designs move into production tooling.</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-4 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/services/injection-mold-manufacturing#mold-manufacturing-process">Explore Mold Manufacturing Process <span className="ml-2" aria-hidden="true">→</span></Link>
                  <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-4 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review <span className="ml-2" aria-hidden="true">→</span></Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Mold Types"
            title="Injection Mold Types for Production Tooling"
            body="From complex and multi-cavity molds to hot runner, 2K, insert, unscrewing and large tooling, Arktech manufactures injection molds around part geometry, resin, production volume and customer machine requirements."
          />

          <div className="mt-9 grid auto-rows-fr gap-6 md:grid-cols-2">
            {moldTypes.map((type) => (
              <Link
                className="focus-ring group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition-colors duration-200 hover:border-[var(--brand)]"
                href={type.href}
                key={type.title}
              >
                <div className="relative aspect-video overflow-hidden bg-[#f4f6f8]">
                  <Image
                    alt={type.alt}
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.025]"
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src={type.image}
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] bg-white p-5">
                  <h3 className="text-xl font-bold leading-tight text-[var(--brand-dark)] transition-colors duration-200 group-hover:text-[var(--brand)] sm:text-[22px]">
                    {type.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-6 text-[var(--muted)]">
                    {type.description}
                  </p>
                  <span className="mt-4 inline-flex w-fit items-center text-sm font-bold text-[var(--brand)]">
                    Explore
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 border-t border-[var(--line)] pt-6 sm:flex-row sm:flex-wrap">
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition-colors hover:bg-[var(--brand-dark)] hover:text-white" href="/injection-molds">
              Explore All Injection Mold Types <span className="ml-2" aria-hidden="true">→</span>
            </Link>
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-5 text-sm font-bold text-white transition-colors hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">
              Request Tooling Quote <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-7 xl:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] xl:items-stretch xl:gap-x-10 xl:gap-y-6">
          <figure className="order-2 flex flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white xl:order-1 xl:row-span-3 xl:h-full">
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-soft)] xl:min-h-[560px] xl:flex-1 xl:aspect-auto">
              <LazyAutoplayVideo
                ariaLabel="Arktech mold manufacturing and toolroom process"
                className="h-full w-full object-cover object-center"
                poster="/images/injection-mold-manufacturing/arktech-toolroom-video-poster.webp"
                preload="metadata"
                rootMargin="100px 0px"
                src="/videos/injection-mold-manufacturing/arktech-mold-toolroom.mp4"
                threshold={0.25}
              />
              <span className="pointer-events-none absolute left-3 top-3 rounded-sm bg-[rgba(8,35,58,0.84)] px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white sm:left-4 sm:top-4 sm:text-[13px]">
                Mold Manufacturing
              </span>
            </div>
            <figcaption className="border-t border-[var(--line)] px-4 py-3 text-[15px] leading-6 text-[var(--muted)] sm:px-5 sm:text-base">
              Real mold manufacturing, fitting and assembly in Arktech’s toolroom.
            </figcaption>
          </figure>

          <div className="order-1 xl:order-2 xl:col-start-2">
            <SectionHeader
              eyebrow="Toolroom Capabilities"
              title="Toolroom Capabilities for Injection Mold Manufacturing"
              body="Arktech’s toolroom supports mold steel machining, EDM, wire cutting, fitting, polishing and final assembly for production injection molds, working from approved mold design and customer tooling requirements."
            />
          </div>

          <div className="order-3 grid gap-x-7 gap-y-6 min-[769px]:grid-cols-2 xl:col-start-2" aria-label="Injection mold toolroom capabilities">
            {toolroomCapabilities.map((item) => (
              <article className="border-t border-[var(--line)] pt-4" key={item.title}>
                <h3 className="text-[23px] font-bold leading-[1.18] text-[var(--brand-dark)] sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-[13px] font-bold uppercase leading-5 tracking-[0.05em] text-[var(--brand)] sm:text-sm">{item.processes}</p>
                <p className="mt-2.5 text-[15px] leading-6 text-[var(--muted)] sm:text-base lg:text-[17px] lg:leading-7">{item.body}</p>
              </article>
            ))}
          </div>

          <Link className="focus-ring order-4 inline-flex min-h-11 w-fit items-center text-[17px] font-semibold text-[var(--brand)] transition hover:text-[var(--brand-hover)] xl:col-start-2" href="#manufacturing-equipment">
            View Manufacturing Equipment <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="scroll-mt-28 bg-[var(--surface-soft)] py-14 sm:py-16" id="manufacturing-equipment">
        <div className="container-page">
          <SectionHeader
            eyebrow="Manufacturing Equipment"
            title="Equipment Supporting Injection Mold Manufacturing"
            body="Arktech’s moldmaking equipment supports steel preparation, precision CNC machining, EDM, wire cutting, grinding, fitting and related tooling work throughout the injection mold manufacturing process."
          />

          <div className="mt-9 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
            {equipment.map((item) => (
              <article className="flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={item.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    alt={item.alt}
                    className="object-cover object-center"
                    fill
                    loading="lazy"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    src={item.image}
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-5">
                  <h3 className="text-lg font-bold leading-tight text-[var(--brand-dark)] sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-[15px]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-5 border-t border-[var(--line)] pt-7 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-lg font-bold text-[var(--brand-dark)]">Need tooling built for your production requirements?</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Request Tooling Quote <span className="ml-2" aria-hidden="true">→</span>
              </Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">
                Upload CAD for DFM Review <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 bg-white py-14 sm:py-16" id="mold-manufacturing-process">
        <div className="container-page">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Mold Manufacturing Process</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">How an Injection Mold Is Manufactured</h2>
            <div className="mt-4 max-w-3xl space-y-2 text-[17px] leading-7 text-[var(--muted)]">
              <p>Arktech manages injection mold manufacturing from DFM and mold design through machining, assembly, mold trial, validation and export delivery.</p>
              <p>Each stage is coordinated against approved tooling requirements, customer machine conditions and production expectations.</p>
            </div>
          </div>

          <figure className="mt-9 overflow-hidden rounded-md border border-[var(--line)] bg-white sm:mt-10">
            <Image
              alt="Injection mold manufacturing and project management process from DFM through mold trial and export delivery"
              className="h-auto w-full object-contain object-center"
              height={1221}
              loading="lazy"
              sizes="(min-width: 1280px) 1200px, calc(100vw - 32px)"
              src="/images/Project/project-management-system.webp"
              width={1800}
            />
          </figure>

          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-0">
            {processStages.map((stage, index) => (
              <li className="relative border-t-2 border-[var(--brand)] bg-[var(--surface-soft)] px-5 py-6 xl:border-l xl:border-l-[var(--line)] xl:bg-white xl:first:border-l-0" key={stage.title}>
                <span className="text-base font-bold text-[var(--brand)]">{stage.number}</span>
                <h3 className="mt-2 text-xl font-bold leading-tight text-[var(--brand-dark)] sm:text-2xl">{stage.title}</h3>
                <ul className="mt-4 space-y-2">
                  {stage.steps.map((step) => (
                    <li className="flex gap-2 text-[15px] font-bold leading-5 text-[var(--brand-dark)]" key={step}>
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" aria-hidden="true" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[15px] leading-6 text-[var(--muted)]">{stage.body}</p>
                {stage.link ? (
                  <Link className="focus-ring mt-5 inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={stage.link.href}>
                    {stage.link.label} <span className="ml-2" aria-hidden="true">→</span>
                  </Link>
                ) : null}
                {index < processStages.length - 1 ? (
                  <span className="absolute -right-3 top-7 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-[var(--line)] bg-white text-sm font-bold text-[var(--brand)] xl:flex" aria-hidden="true">→</span>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col gap-5 border-t border-[var(--line)] pt-7 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-lg font-bold text-[var(--brand-dark)] sm:text-xl">Have a new mold project to review?</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Upload CAD for DFM Review
              </Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">
                Request Tooling Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
            <article className="lg:pr-10 xl:pr-14">
              <SectionHeader
                eyebrow="Mold Standards & Build Options"
                title="Export Tooling Standards and Build Options"
                body="Export tooling is configured around the customer’s approved mold specification, receiving machine, component standards, maintenance requirements and handover expectations."
              />
              <div className="mt-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {exportToolingGroups.map((group) => (
                  <div className="py-5" key={group.title}>
                    <h3 className="text-xl font-bold leading-snug text-[var(--brand-dark)]">{group.title}</h3>
                    <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5" aria-label={`${group.title} requirements`}>
                      {group.items.map((item) => (
                        <li className="flex items-start gap-2 text-[15px] font-semibold leading-6 text-[var(--brand-dark)]" key={item}>
                          <span className="mt-[0.68rem] size-1 shrink-0 rounded-full bg-[var(--brand)]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2.5 text-[15px] leading-6 text-[var(--muted)]">{group.body}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border-t border-[var(--line)] pt-12 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-14">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Complex Tooling Features</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Complex Tooling Features for Production Molds</h2>
              <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Complex tooling features are selected around part geometry, undercuts, resin, production volume and receiving machine requirements.</p>
              <div className="mt-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {complexToolingGroups.map((group) => (
                  <div className="py-5" key={group.title}>
                    <h3 className="text-xl font-bold leading-snug text-[var(--brand-dark)]">{group.title}</h3>
                    <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5" aria-label={`${group.title} features`}>
                      {group.items.map((item) => (
                        <li className="flex items-start gap-2 text-[15px] font-semibold leading-6 text-[var(--brand-dark)]" key={item}>
                          <span className="mt-[0.68rem] size-1 shrink-0 rounded-full bg-[var(--brand)]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2.5 text-[15px] leading-6 text-[var(--muted)]">{group.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <TextLink href="/injection-molds/complex-injection-molds">Explore Complex Injection Molds</TextLink>
              </div>
            </article>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-[var(--line)] pt-7 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl text-lg font-bold leading-7 text-[var(--brand-dark)] sm:text-xl">Need a mold configured for your machine, tooling standard or complex part geometry?</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-5 text-center text-sm font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Upload CAD for DFM Review
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-center text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">
                Request Tooling Quote
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:items-start lg:gap-12 xl:gap-14">
            <div>
              <SectionHeader eyebrow="Mold Trial & Validation" title="Mold Trial, Correction and Approval" />
              <div className="mt-4 max-w-3xl space-y-3 text-base leading-7 text-[var(--muted)] sm:text-lg">
                <p>Mold trials combine process setup, sample review, dimensional inspection and engineering feedback before tooling approval and export release.</p>
                <p>Trial records, molding parameters and inspection results help document the correction loop from initial samples through final approval.</p>
              </div>

              <div className="mt-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {trialValidationGroups.map((group) => (
                  <article className="py-5" key={group.title}>
                    <h3 className="text-xl font-bold leading-snug text-[var(--brand-dark)]">{group.title}</h3>
                    <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5" aria-label={`${group.title} validation steps`}>
                      {group.items.map((item) => (
                        <li className="flex items-start gap-2 text-[15px] font-semibold leading-6 text-[var(--brand-dark)]" key={item}>
                          <span className="mt-[0.68rem] size-1 shrink-0 rounded-full bg-[var(--brand)]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2.5 text-[15px] leading-6 text-[var(--muted)]">{group.body}</p>
                  </article>
                ))}
              </div>

              <nav aria-label="Mold trial and quality resources" className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
                <TextLink href="/company/project-management#mold-trial-validation">View Mold Trial &amp; Validation</TextLink>
                <TextLink href="/company/quality-documentation">View Quality &amp; Documentation</TextLink>
              </nav>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)] sm:text-sm">Documented Validation</p>
              <div className="mt-5 space-y-5">
                <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white">
                  <Image
                    alt={primaryTrialValidationEvidence.alt}
                    className="h-auto w-full object-contain object-center"
                    height={primaryTrialValidationEvidence.height}
                    loading="lazy"
                    sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 50vw, 100vw"
                    src={primaryTrialValidationEvidence.image}
                    width={primaryTrialValidationEvidence.width}
                  />
                  <figcaption className="border-t border-[var(--line)] px-4 py-4 sm:px-5">
                    <p className="text-base font-bold text-[var(--brand-dark)] sm:text-lg">{primaryTrialValidationEvidence.label}</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)] sm:text-[15px]">{primaryTrialValidationEvidence.description}</p>
                  </figcaption>
                </figure>

                <div className="grid gap-5 lg:grid-cols-2">
                  {supportingTrialValidationEvidence.map((item) => (
                    <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={item.label}>
                      <div className="relative aspect-[4/3] overflow-hidden bg-white">
                        <Image
                          alt={item.alt}
                          className="object-contain object-center"
                          fill
                          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 24vw, (min-width: 768px) 50vw, 100vw"
                          src={item.image}
                        />
                      </div>
                      <figcaption className="border-t border-[var(--line)] px-4 py-4">
                        <p className="text-sm font-bold text-[var(--brand-dark)] sm:text-base">{item.label}</p>
                        <p className="mt-1 text-[13px] leading-5 text-[var(--muted)] sm:text-sm">{item.description}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-[var(--line)] pt-7 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl text-lg font-bold leading-7 text-[var(--brand-dark)] sm:text-xl">Need documented mold trials before export delivery?</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-5 text-center text-sm font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Upload CAD for DFM Review
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-center text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">
                Request Tooling Quote
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page grid gap-10 lg:grid-cols-[minmax(0,56fr)_minmax(0,44fr)] lg:items-center lg:gap-14"><figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm"><Image alt="Export injection mold tooling documentation and validation package" className="object-contain object-center p-3" fill sizes="(min-width: 1024px) 56vw, 100vw" src="/images/documentation/tooling-documentation-package.png" /></figure><div><SectionHeader eyebrow="Quality & Documentation" title="Tooling Inspection and Documentation Before Export" body="Concise tooling records help overseas teams review approval status, prepare for installation and maintain the mold after delivery." /><div className="mt-7 grid gap-x-6 sm:grid-cols-2">{documentationItems.map((item) => <div className="border-b border-[var(--line)] py-3 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={item}>{item}</div>)}</div><div className="mt-6"><TextLink href="/company/quality-documentation">View Quality & Documentation</TextLink></div></div></div></section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page"><SectionHeader eyebrow="Who We Support" title="Export Tooling for Product and Molding Companies" /><div className="mt-8 grid gap-5 lg:grid-cols-3">{audiences.map((audience, index) => <article className="border-t-2 border-[var(--brand)] bg-[var(--surface-soft)] p-5" key={audience.title}><span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 text-sm font-bold uppercase tracking-[0.08em] text-[var(--brand-dark)]">{audience.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{audience.body}</p></article>)}</div><div className="mt-12 border-t border-[var(--line)] pt-10"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Related Capabilities</p><h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]">Supporting Engineering, Trial and Production Services</h3><nav aria-label="Related injection mold manufacturing capabilities" className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{relatedCapabilities.map((item) => <Link className="focus-ring flex min-h-16 items-center justify-between rounded-sm border border-[var(--line)] bg-white px-4 py-3 text-sm font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href={item.href} key={item.href}><span>{item.label}</span><span aria-hidden="true">→</span></Link>)}</nav></div></div></section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><SectionHeader eyebrow="FAQ" title="Export Injection Mold Manufacturing Questions" body="Practical answers for OEM teams, injection molders and sourcing engineers evaluating an export tooling partner." /><div className="mt-7 grid gap-3 lg:grid-cols-2">{faqs.map((faq) => <details className="group rounded-sm border border-[var(--line)] bg-white p-5" key={faq.question}><summary className="cursor-pointer font-bold leading-6 text-[var(--brand-dark)] marker:text-[var(--brand)]">{faq.question}</summary><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{faq.answer}</p></details>)}</div></div></section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20"><div className="container-page grid gap-8 lg:grid-cols-[minmax(0,56fr)_minmax(320px,44fr)] lg:items-center lg:gap-12"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Start Your Export Mold Project</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Start Your Export Injection Mold Project</h2><p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Send us your CAD files, drawings, material requirements, tooling standards and target production requirements. Our engineering team will review DFM, mold structure, manufacturing requirements and quotation details.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:min-w-[440px] lg:justify-self-end"><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link></div></div></section>
    </>
  );
}
