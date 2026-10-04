import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FullBleedHero } from "@/components/FullBleedHero";
import styles from "@/components/InjectionMoldManufacturingPage.module.css";
import { ManufacturingTrialEvidence } from "@/components/ManufacturingTrialEvidence";
import { ToolroomFactoryVideo } from "@/components/ToolroomFactoryVideo";
import { LazyAutoplayVideo } from "@/components/LazyAutoplayVideo";

const coreToolmakingCapabilities = [
  {
    title: "CNC Machining",
    body: "Machining mold bases, cavities, cores, inserts and electrodes from approved tooling data."
  },
  {
    title: "EDM & Wire Cutting",
    body: "Producing detailed features, deep ribs, slots and tooling geometry where required."
  },
  {
    title: "Mold Fitting & Assembly",
    body: "Fitting inserts, shut-offs and moving mechanisms, then assembling the complete mold."
  },
  {
    title: "Surface Finishing & Build Checks",
    body: "Finishing specified molding surfaces and checking cooling, ejection and mechanism operation before trial."
  }
];

const manufacturingProof = [
  { label: "Mold Size", value: <>Up to 2,000&nbsp;mm</> },
  { label: "Tool Weight", value: <>Up to 30&nbsp;Tonnes</> },
  { label: "Annual Capacity", value: <>200+ Molds / Year</> }
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
    href: "/injection-molds/mold-trial-validation"
  },
  {
    title: "Export Preparation",
    body: "Final mold inspection, protection, packing and shipment preparation are completed before delivery.",
    href: "/company/project-management"
  }
];

const handoverDocumentationLabels = [
  "Tooling Drawings & Data",
  "Trial & Inspection Records",
  "Spare Parts Information",
  "Packing Records"
] as const;

type ToolingTypeCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
  imageClassName: string;
  href?: string;
  supportingLabel?: string;
};

const toolingTypes: ToolingTypeCard[] = [
  {
    title: "Complex Injection Molds",
    description: "For parts with undercuts and coordinated mold actions.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Complex injection mold with sliders lifters and coordinated side actions",
    imageClassName: "object-contain object-center",
    href: "/injection-molds/complex-injection-molds"
  },
  {
    title: "Multi-Cavity Injection Molds",
    description: "For producing multiple parts per molding cycle.",
    image: "/images/mold-types/multi-cavity-injection-molds.webp",
    alt: "Multi-cavity injection mold for balanced filling and repeatable production",
    imageClassName: "object-cover object-center",
    href: "/injection-molds/multi-cavity-molds"
  },
  {
    title: "Hot Runner Molds",
    description: "For tooling requirements using hot runner systems.",
    image: "/images/mold-types/hot-runner-molds.webp",
    alt: "Hot runner injection mold for material flow and gate control",
    imageClassName: "object-contain object-center",
    href: "/injection-molds/hot-runner-molds"
  },
  {
    title: "Two-Shot / 2K Molds",
    description: "For two-material or two-color plastic components.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp",
    alt: "Two-shot 2K injection mold for two-material plastic components",
    imageClassName: "object-contain object-center",
    href: "/injection-molds/two-shot-2k-molds"
  },
  {
    title: "Insert Molding Tools",
    description: "For molding plastic around prepared inserts.",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Insert molding tool for plastic molded around prepared components",
    imageClassName: "object-cover object-center",
    href: "/injection-molds/insert-molding-tools"
  },
  {
    title: "Unscrewing Molds",
    description: "For threaded parts requiring controlled release.",
    image: "/images/mold-types/unscrewing-molds.webp",
    alt: "Unscrewing injection mold for threaded plastic parts",
    imageClassName: "object-cover object-center",
    href: "/injection-molds/unscrewing-molds"
  },
  {
    title: "Large Injection Molds",
    description: "For large housings, panels and structural parts.",
    image: "/images/mold-types/large-component-molds.JPG",
    alt: "Large injection mold for housings panels and structural plastic components",
    imageClassName: "object-cover object-center",
    href: "/injection-molds/large-injection-molds"
  },
  {
    title: "Prototype Injection Molds",
    description: "For engineering samples and early tooling validation.",
    image: "/images/mold-types/prototype-injection-mold.webp",
    alt: "Prototype injection mold with molded sample for engineering validation",
    imageClassName: "object-contain object-center",
    href: "/injection-molds/prototype-injection-molds"
  },
  {
    title: "Die Casting Dies",
    supportingLabel: "Supporting Tooling · Arktech Group",
    description: "Tooling for metal die casting projects, supported by Arktech Group.",
    image: "/images/case-studies/die-casting-control-housing.webp",
    alt: "Die casting die with raw and finished metal control housing",
    imageClassName: "object-contain object-center"
  }
];

const toolroomCapabilities = [
  {
    title: "Precision Machining",
    body: "Manufacturing cavities, cores, inserts and mold components from approved tooling data."
  },
  {
    title: "EDM & Wire Cutting",
    body: "Completing detailed features and complex tooling geometry where required."
  },
  {
    title: "Mold Fitting & Finishing",
    body: "Fitting components, adjusting shut-offs and finishing specified surfaces."
  },
  {
    title: "Assembly & Trial Preparation",
    body: "Checking mold mechanisms, cooling and ejection before trial."
  }
];

const manufacturingProcessSteps = [
  {
    number: "01",
    title: "Steel & Mold Base Preparation",
    body: "Prepare mold steel, bases and inserts against the approved tooling specification."
  },
  {
    number: "02",
    title: "CNC Machining",
    body: "Machine cavities, cores, inserts, electrodes and mold components from released tooling data."
  },
  {
    number: "03",
    title: "EDM & Wire Cutting",
    body: "Complete detailed features, ribs, slots and tooling geometry where required."
  },
  {
    number: "04",
    title: "Fitting & Surface Finishing",
    body: "Fit components and shut-offs, and finish specified molding surfaces."
  },
  {
    number: "05",
    title: "Mold Assembly & Build Checks",
    body: "Assemble mold components and check mechanisms, cooling connections and ejection before trial."
  },
  {
    number: "06",
    title: "Mold Trial & Approval",
    body: "Run mold trials, review samples and inspection results, and complete required corrections before approval."
  }
];

const toolroomEquipment = [
  {
    title: "CNC Machining",
    image: "/images/factory-workshop/injection-mold-cnc-machining-workshop.webp",
    alt: "Rows of CNC machining centers in the injection mold toolroom",
    imageClassName: "object-cover object-center"
  },
  {
    title: "EDM",
    image: "/images/factory-workshop/injection-mold-edm-machine.webp",
    alt: "Electrical discharge machining machine in the injection mold toolroom",
    imageClassName: "object-cover object-center"
  },
  {
    title: "Mold Spotting Machine",
    image: "/images/factory-workshop/injection-mold-spotting-machine.webp",
    alt: "Mold spotting machine with an injection mold positioned on the worktable",
    imageClassName: "object-cover object-center"
  }
];

const toolingRequirements = [
  {
    title: "Tooling Standards & Materials",
    body: "Approved steel specifications and customer component standards, including DME / HASCO-compatible components when specified."
  },
  {
    title: "Machine & Utility Interfaces",
    body: "Mold dimensions, mounting, cooling and hot runner connections matched to the receiving production setup."
  },
  {
    title: "Mechanisms & Replaceable Components",
    body: "Agreed sliders, lifters, unscrewing mechanisms and replaceable inserts built to the approved mold design."
  },
  {
    title: "Spare Parts & Tooling Data",
    body: "Agreed spare components and final tooling information prepared for maintenance and handover."
  }
];
const faqs = [
  {
    question: "What information is needed for a tooling quotation?",
    answer: "Please share your CAD files, available 2D drawings, resin requirements, expected production volume, receiving machine information and tooling standards. If some details are not yet available, identify the open items so they can be reviewed during quotation."
  },
  {
    question: "Can you build molds for our injection molding machine and tooling standards?",
    answer: "Tooling requirements are reviewed against the machine information and mold specification you provide, including mounting, utility connections, component standards and steel requirements. Compatibility and any open requirements should be confirmed before manufacturing release."
  },
  {
    question: "When does the mold manufacturing lead time start?",
    answer: "The quotation should identify the agreed start milestone and what the schedule covers, such as first trial or completed tooling. Design approval, tooling complexity, changes and approval requirements can affect the project schedule."
  },
  {
    question: "How are molds trialed and approved before shipment?",
    answer: "Completed molds undergo trials and sample inspection, with required corrections and re-trials before approval. Trial records and inspection results support customer review against the agreed project requirements.",
    links: [
      { label: "Explore Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" }
    ]
  },
  {
    question: "What documentation and spare parts can be supplied with the mold?",
    answer: "The handover package can include agreed tooling drawings, component information, trial and inspection records, and spare-parts information. Spare inserts and wear components are defined by the project scope rather than automatically included with every mold.",
    links: [
      { label: "Explore Tooling Documentation", href: "/injection-molds/tooling-documentation" },
      { label: "Explore Mold Spare Parts", href: "/injection-molds/mold-spare-parts" }
    ]
  }
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
        primaryCta={{ label: "Request Tooling Quote", href: "/request-a-quote" }}
        secondaryCta={{ label: "Explore Injection Molds", href: "/injection-molds" }}
        supportingLine="DFM · Tooling · Mold Trial · Validation · Export Delivery"
        title="Export Injection Molds for Global Production"
        bottomContent={(
          <div className="mt-8 border-t border-white/20 bg-[#071f34]/90" data-mold-manufacturing-proof>
            <dl className="grid grid-cols-2 md:grid-cols-3" aria-label="Injection mold manufacturing capacity">
              {manufacturingProof.map((item, index) => (
                <div
                  className={`relative px-4 py-4 sm:px-5 sm:py-[18px] md:col-span-1 md:px-6 ${index === 0 ? "border-b border-r border-white/15 md:border-b-0" : index === 1 ? "border-b border-white/15 md:border-b-0 md:border-r" : "col-span-2 md:col-span-1"}`}
                  key={item.label}
                >
                  <span aria-hidden="true" className="mb-2 block h-0.5 w-8 bg-[var(--brand)]" />
                  <dt className="text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-slate-300 sm:text-[13px]">{item.label}</dt>
                  <dd className="mt-1 text-[21px] font-bold leading-tight tracking-[-0.01em] text-white sm:text-2xl lg:text-[27px]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
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

              <div className="mt-7 border-t border-[var(--line)] pt-6">
                <h3 className="text-2xl font-bold leading-tight text-[var(--brand-dark)]">Tooling Documentation for Handover</h3>
                <p className="mt-3 text-[15px] leading-6 text-[var(--muted)]">Agreed tooling files, validation records and spare-parts information are prepared to support installation and maintenance after delivery.</p>
                <ul className="mt-5 grid gap-x-5 sm:grid-cols-2" aria-label="Tooling handover documentation">
                  {handoverDocumentationLabels.map((label) => (
                    <li className="border-t border-[var(--line)] py-3 text-sm font-semibold leading-5 text-[var(--brand-dark)]" key={label}>
                      <span aria-hidden="true" className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                      {label}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <TextLink href="/injection-molds/tooling-documentation">Explore Tooling Documentation</TextLink>
                </div>
                <div className="mt-5 border-t border-[var(--line)] pt-5">
                  <p className="text-sm font-semibold leading-6 text-[var(--brand-dark)]">Need molded parts after tooling approval?</p>
                  <div className="mt-2">
                    <TextLink href="/plastic-injection-molding">Explore Plastic Injection Molding</TextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Core Toolmaking Capabilities"
            title="Injection Mold Manufacturing Capabilities"
            body="From approved mold designs, Arktech machines, fits and assembles mold components into complete production tooling, ready for inspection and mold trials."
          />

          <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:items-start lg:gap-10">
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  alt="Arktech toolmakers fitting and assembling injection mold components"
                  className="object-cover object-center"
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  src="/images/factory-workshop/injection-mold-fitting-workshop.webp"
                />
              </div>
            </figure>

            <div className="grid gap-x-6 sm:grid-cols-2" aria-label="Core injection mold toolmaking capabilities">
              {coreToolmakingCapabilities.map((capability) => (
                <article className="border-t border-[var(--line)] py-5 first:pt-4 sm:first:pt-5" key={capability.title}>
                  <span aria-hidden="true" className="mb-3 block h-0.5 w-8 bg-[var(--brand)]" />
                  <h3 className="text-xl font-bold leading-7 text-[var(--brand-dark)]">{capability.title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">{capability.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-7 flex lg:justify-end">
            <TextLink href="#mold-manufacturing-process">Explore the Mold Manufacturing Process</TextLink>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-10 sm:py-12">
        <div className="container-page border-l-2 border-[var(--brand)] pl-5 sm:pl-7">
          <SectionHeader
            eyebrow="Engineering to Manufacturing"
            title="From Engineering Approval to Toolmaking"
            body="Engineering decisions and mold design are reviewed before steel cutting. Approved tooling data then moves into steel preparation, machining, fitting and assembly."
          />
          <div className="mt-5">
            <TextLink href="/injection-molding-engineering">Explore Injection Molding Engineering</TextLink>
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 bg-white py-14 sm:py-16" id="mold-manufacturing-process">
        <div className="container-page">
          <SectionHeader
            eyebrow="Mold Manufacturing Process"
            title="From Approved Mold Design to Finished Tooling"
            body="Arktech builds production tooling from approved mold designs through steel preparation, machining, fitting, assembly and mold trials."
          />

          <ol className="mt-9 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3" aria-label="Injection mold manufacturing process">
            {manufacturingProcessSteps.map((stage) => (
              <li className="border-t border-[var(--line)] py-5" key={stage.number}>
                <span className="text-sm font-bold text-[var(--brand)]">{stage.number}</span>
                <h3 className="mt-2 text-xl font-bold leading-7 text-[var(--brand-dark)]">{stage.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="core-hero-shell">
          <SectionHeader
            eyebrow="Tooling Types"
            title="Injection Mold Types & Supporting Tooling"
            body="Explore eight injection mold configurations, with supporting die casting tooling available through Arktech Group."
          />

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {toolingTypes.map((type) => {
              const cardContent = (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f6f8]">
                    <Image
                      alt={type.alt}
                      className={`${styles.image} ${type.imageClassName}`}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1280px) 430px, (min-width: 768px) calc(50vw - 28px), calc(100vw - 32px)"
                      src={type.image}
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-[var(--brand)] bg-white px-5 py-4">
                    {type.supportingLabel ? (
                      <p className="mb-2 text-xs font-semibold uppercase leading-5 tracking-[0.06em] text-[var(--muted)]">{type.supportingLabel}</p>
                    ) : null}
                    <h3 className={`${styles.title} text-lg font-bold leading-snug text-[var(--brand-dark)] sm:text-xl`}>
                      {type.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)] sm:text-[15px]">
                      {type.description}
                    </p>
                  </div>
                </>
              );

              return type.href ? (
                <Link
                  className={`${styles.card} focus-ring flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white`}
                  href={type.href}
                  key={type.title}
                >
                  {cardContent}
                </Link>
              ) : (
                <article className="flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white" key={type.title}>
                  {cardContent}
                </article>
              );
            })}
          </div>

          <div className="mt-9 border-t border-[var(--line)] pt-6">
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition-colors hover:bg-[var(--brand-dark)] hover:text-white" href="/injection-molds">
              Explore All Injection Mold Types <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <div className="grid gap-x-10 lg:grid-cols-[minmax(0,60fr)_minmax(0,40fr)] lg:items-start">
            <div className="lg:col-start-2 lg:row-start-1">
              <SectionHeader
                eyebrow="Toolroom Capabilities"
                title="Inside Arktech’s Injection Mold Toolroom"
                body="See the facilities and team supporting machining, fitting and assembly of production injection molds."
              />
            </div>

            <div className="mt-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <ToolroomFactoryVideo />
            </div>

            <div className="mt-7 grid gap-x-6 sm:grid-cols-2 lg:col-start-2 lg:row-start-2" aria-label="Injection mold toolroom capabilities">
              {toolroomCapabilities.map((item) => (
                <article className="border-t border-[var(--line)] py-4" key={item.title}>
                  <span aria-hidden="true" className="mb-3 block h-0.5 w-8 bg-[var(--brand)]" />
                  <h3 className="text-lg font-bold leading-snug text-[var(--brand-dark)] sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 border-t border-[var(--line)] pt-5 lg:col-start-2 lg:row-start-3">
              <Link className="focus-ring inline-flex min-h-11 w-fit items-center text-[17px] font-semibold text-[var(--brand)] transition hover:text-[var(--brand-hover)]" href="#manufacturing-equipment">
                View Manufacturing Equipment <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="scroll-mt-28 mt-9 grid gap-5 border-t border-[var(--line)] pt-7 md:grid-cols-3" id="manufacturing-equipment" aria-label="Manufacturing equipment">
            {toolroomEquipment.map((item) => (
              <figure key={item.title}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--surface-soft)]">
                  <Image
                    alt={item.alt}
                    className={item.imageClassName}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1280px) 384px, (min-width: 768px) 33vw, 100vw"
                    src={item.image}
                  />
                </div>
                <figcaption className="mt-2.5 text-[15px] font-semibold leading-6 text-[var(--brand-dark)]">{item.title}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-bold leading-6 text-[var(--brand-dark)]">Need tooling built for your production requirements?</p>
            <Link className="focus-ring inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">
              Request Tooling Quote <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-12 sm:py-14">
        <div className="container-page">
          <SectionHeader
            eyebrow="Export Tooling Requirements"
            title="Built to Your Tooling & Machine Requirements"
            body="Mold construction is aligned with your approved tooling specification, receiving machine and maintenance requirements."
          />

          <div className="mt-7 grid gap-x-8 sm:grid-cols-2" aria-label="Export tooling build requirements">
            {toolingRequirements.map((item) => (
              <article className="border-t border-[var(--line)] py-5" key={item.title}>
                <span aria-hidden="true" className="mb-3 block h-0.5 w-8 bg-[var(--brand)]" />
                <h3 className="text-xl font-bold leading-snug text-[var(--brand-dark)]">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>

          <nav aria-label="Related tooling requirements" className="mt-3 flex flex-col items-start gap-3 border-t border-[var(--line)] pt-5 sm:flex-row sm:flex-wrap sm:gap-x-7">
            <TextLink href="/injection-molds">Explore Injection Mold Types</TextLink>
            <TextLink href="/injection-molds/export-tooling-transfer">Explore Export Tooling &amp; Mold Transfer</TextLink>
          </nav>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-12 sm:py-14">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:items-start lg:gap-10 xl:gap-12">
            <div className="max-w-xl">
              <SectionHeader
                eyebrow="Mold Trial & Validation"
                title="Tested Before Tooling Approval"
                body="Completed molds undergo trials, sample inspection and required corrections before approval. Trial reports, dimensional results and process parameters document the validation work."
              />
              <div className="mt-6">
                <TextLink href="/injection-molds/mold-trial-validation">Explore Mold Trial &amp; Validation</TextLink>
              </div>
            </div>
            <ManufacturingTrialEvidence />
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeader eyebrow="FAQ" title="Export Tooling FAQs" />
          <div className="mt-7 max-w-4xl divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((faq) => (
              <details className="group" key={faq.question}>
                <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 rounded-sm py-4 font-bold leading-6 text-[var(--brand-dark)] marker:hidden">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="shrink-0 text-lg font-medium text-[var(--brand)] group-open:hidden">+</span>
                  <span aria-hidden="true" className="hidden shrink-0 text-lg font-medium text-[var(--brand)] group-open:inline">−</span>
                </summary>
                <div className="max-w-3xl pb-5 pr-8">
                  <p className="text-[15px] leading-7 text-[var(--muted)]">{faq.answer}</p>
                  {faq.links?.length ? (
                    <div className="mt-3 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                      {faq.links.map((link) => (
                        <TextLink href={link.href} key={link.href}>{link.label}</TextLink>
                      ))}
                    </div>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20"><div className="container-page grid gap-8 lg:grid-cols-[minmax(0,56fr)_minmax(320px,44fr)] lg:items-center lg:gap-12"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Start Your Export Mold Project</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Start Your Export Injection Mold Project</h2><p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Send your CAD files, drawings, resin requirements, customer machine information and tooling standards. Arktech will review the mold manufacturing requirements and prepare a tooling quotation.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:min-w-[440px] lg:justify-self-end"><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">Request Tooling Quote</Link><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Upload CAD for DFM Review</Link></div></div></section>
    </>
  );
}
