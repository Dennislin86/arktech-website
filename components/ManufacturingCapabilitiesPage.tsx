import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/FullBleedHero";

const primaryCapabilities = [
  {
    eyebrow: "Primary Capability 01",
    title: "Injection Mold Manufacturing",
    description:
      "DFM, mold design, toolmaking, fitting, mold trials and export tooling support for production molds built to customer requirements.",
    image: "/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp",
    alt: "Injection mold manufacturing in the Arktech toolroom",
    points: ["DFM & Mold Design", "CNC / EDM Machining", "Fitting & Assembly", "Mold Trial", "Export Tooling"],
    cta: "Explore Injection Mold Manufacturing",
    href: "/services/injection-mold-manufacturing"
  },
  {
    eyebrow: "Primary Capability 02",
    title: "Plastic Injection Molding",
    description:
      "Plastic part production from mold validation and process optimization through low-volume and mass production, supported by 25–550T injection molding capacity.",
    image: "/images/capabilities/plastic-injection-molding-production-video-frame.webp",
    alt: "Plastic injection molding production on an Arktech molding machine",
    points: ["25–550T Injection Molding", "Mold Trial & Process Optimization", "Low-Volume Production", "Mass Production", "Quality Inspection"],
    cta: "Explore Plastic Injection Molding",
    href: "/services/plastic-injection-molding"
  }
];

const engineeringCapabilities = [
  {
    title: "DFM & Co-Design",
    description: "Review part geometry, draft, parting lines, undercuts, gating, ejection and tooling risks before steel cutting.",
    image: "/images/Engineering/injection-molding-dfm-report-anonymized.webp",
    alt: "DFM report for injection mold design review",
    href: "/services/dfm-engineering"
  },
  {
    title: "Mold Trial & Validation",
    description: "Review T0 and T1 samples, molding parameters, correction actions and approval evidence before release.",
    image: "/images/process/export-delivery-production-support-molding.png",
    alt: "Injection mold trial and sample validation before approval",
    href: "/services/mold-trial-sampling-support"
  },
  {
    title: "Quality Inspection",
    description: "Verify tooling condition, molded samples, critical dimensions and required project documentation.",
    image: "/images/process/sample-validation-inspection-cmm.png",
    alt: "Dimensional inspection during injection mold trial validation",
    href: "/company/quality-documentation"
  }
];

const specialtyCapabilities = [
  {
    title: "Insert Molding",
    description: "Tooling for integrated metal or plastic inserts with controlled location and retention.",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Insert molding tool for integrated inserts in plastic components",
    href: "/injection-molds/insert-molding-tools"
  },
  {
    title: "Two-Shot / 2K Molding",
    description: "Mold concepts for two materials, colors or functional zones in a coordinated molding sequence.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp",
    alt: "Two-shot 2K injection mold for multi-material plastic components",
    href: "/injection-molds/two-shot-2k-molds"
  },
  {
    title: "Overmolding",
    description: "Tooling support for soft-touch, sealing, grip and other multi-material product requirements.",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Production mold used for overmolding tooling applications",
    href: "/injection-molds/overmolding-tools"
  }
];

const supportingCapabilities = [
  ["CNC Machining", "Precision machined metal and plastic components for prototypes, tooling and production support."],
  ["Die Casting", "Aluminum and zinc die-cast components for structural and functional product applications."],
  ["Sheet Metal Fabrication", "Cut, bent and formed components for housings, brackets and assemblies."],
  ["Rapid Prototyping", "Prototype parts for design review, fit checks and functional validation."],
  ["Vacuum Casting", "Small-batch cast parts for product evaluation and bridge requirements."],
  ["Assembly & Secondary Operations", "Printing, welding, insert installation, finishing and product assembly support."]
];

const processStages = [
  ["01", "DFM & Co-Design", "Review geometry, materials and tooling risks before release."],
  ["02", "Injection Mold Manufacturing", "Build and fit the approved production tooling."],
  ["03", "Mold Trial & Validation", "Trial the mold, inspect samples and track corrections."],
  ["04", "Plastic Injection Molding", "Move approved tooling into low-volume or repeat production."],
  ["05", "Inspection & Secondary Operations", "Complete required verification, finishing and assembly support."]
];

const industries = [
  {
    title: "Robotics",
    image: "/images/industries/robotics-automation.png",
    alt: "Robotics housings and automation components supported by injection tooling",
    href: "/industries/robotics"
  },
  {
    title: "Medical & Healthcare Devices",
    image: "/images/industries/medial-industry.webp",
    alt: "Medical device housings and precision molded components",
    href: "/industries/medical-devices"
  },
  {
    title: "Automotive Components",
    image: "/images/industries/Automotive-Components.png",
    alt: "Automotive control and functional injection molded components",
    href: "/industries/automotive-components"
  },
  {
    title: "Smart Home & IoT",
    image: "/images/industries/smart-device-housings.png",
    alt: "Smart home device housings and connected product enclosures",
    href: "/industries/smart-home"
  },
  {
    title: "Home Appliance",
    image: "/images/industries/home-appliance.png",
    alt: "Home appliance housings and molded functional plastic parts",
    href: "/industries/home-appliance"
  },
  {
    title: "Consumer Electronics",
    image: "/images/industries/consumer-electronics-enclosures.png",
    alt: "Consumer electronics enclosures and molded plastic components",
    href: "/industries/consumer-electronics"
  }
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.015em] text-[var(--brand-dark)] sm:text-4xl lg:text-[44px]">{title}</h2>
      {body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{body}</p> : null}
    </div>
  );
}

export function ManufacturingCapabilitiesPage() {
  return (
    <>
      <FullBleedHero
        backgroundImages={[{
          src: "/images/hero/tooling-mold-trial-engineering-capabilities.webp",
          alt: "Injection mold tooling, mold trial and engineering support at Arktech Mold",
          position: "right"
        }]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Manufacturing Capabilities" }
        ]}
        description="From DFM and export tooling to mold trials, plastic injection production and supporting manufacturing processes, Arktech provides an integrated path from product development to production."
        eyebrow="Manufacturing Capabilities"
        height="standard"
        primaryCta={{ label: "Upload CAD for DFM Review", href: "/request-a-quote" }}
        secondaryCta={{ label: "Request a Quote", href: "/request-a-quote" }}
        supportingLine="EXPORT INJECTION MOLDS · PLASTIC INJECTION MOLDING"
        title="Injection Mold & Plastic Manufacturing Capabilities"
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20" id="primary-capabilities">
        <div className="container-page">
          <SectionHeading
            eyebrow="Core Business"
            title="Primary Manufacturing Capabilities"
            body="Arktech's core work connects export injection mold manufacturing with plastic injection molding production. Choose the capability path that matches your tooling or molded-part program."
          />
          <div className="mt-9 grid gap-7 lg:grid-cols-2">
            {primaryCapabilities.map((capability) => (
              <article className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)] hover:shadow-md" key={capability.title}>
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface-soft)]">
                  <Image alt={capability.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 1024px) 50vw, 100vw" src={capability.image} />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.13em] text-[var(--brand)]">{capability.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-[var(--brand-dark)] sm:text-3xl">{capability.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">{capability.description}</p>
                  <ul className="mt-5 grid gap-x-5 gap-y-2 border-t border-[var(--line)] pt-5 sm:grid-cols-2" aria-label={`${capability.title} capabilities`}>
                    {capability.points.map((point) => <li className="flex items-start gap-2 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={point}><span aria-hidden="true" className="text-[var(--brand)]">✓</span>{point}</li>)}
                  </ul>
                  <Link className="focus-ring mt-7 inline-flex min-h-12 w-fit items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href={capability.href}>{capability.cta}<span className="ml-2" aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--line)] pt-6">
            <Link className="focus-ring font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/injection-molds">Explore Injection Mold Types →</Link>
            <Link className="focus-ring font-bold text-[var(--brand-dark)] hover:text-[var(--brand)]" href="/resources">View Engineering Resources →</Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" id="engineering-validation">
        <div className="container-page">
          <SectionHeading eyebrow="Engineering Support" title="Engineering & Validation" body="Engineering review and documented validation connect product requirements with practical tooling and production decisions." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {engineeringCapabilities.map((capability) => (
              <Link className="focus-ring group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:border-[var(--brand)]" href={capability.href} key={capability.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-white"><Image alt={capability.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 768px) 33vw, 100vw" src={capability.image} /></div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-5"><h3 className="text-xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{capability.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{capability.description}</p><span className="mt-4 text-sm font-bold text-[var(--brand)]">Explore capability →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" id="specialty-molding">
        <div className="container-page">
          <SectionHeading eyebrow="Molding Processes" title="Specialty Molding Capabilities" body="Compact routes into verified insert, multi-material and overmolding capability. Detailed mold-type engineering remains in the Injection Molds hub." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {specialtyCapabilities.map((capability) => (
              <Link className="focus-ring group grid grid-cols-[112px_minmax(0,1fr)] overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:border-[var(--brand)] sm:grid-cols-[152px_minmax(0,1fr)] md:grid-cols-1" href={capability.href} key={capability.title}>
                <div className="relative min-h-36 overflow-hidden bg-[var(--surface-soft)] md:aspect-[16/9]"><Image alt={capability.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 768px) 33vw, 152px" src={capability.image} /></div>
                <div className="p-5"><h3 className="text-xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{capability.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{capability.description}</p><span className="mt-4 inline-flex text-sm font-bold text-[var(--brand)]">View mold capability →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" id="supporting-capabilities">
        <div className="container-page">
          <SectionHeading eyebrow="Arktech Group" title="Supporting Manufacturing Capabilities" body="Additional manufacturing processes available when a tooling or molded-part program requires them." />
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--muted)]">Supporting processes for tooling, prototypes, metal components and assembly needs within broader product programs.</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {supportingCapabilities.map(([title, description]) => <article className="bg-white p-5 sm:p-6" key={title}><h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{description}</p></article>)}
          </div>
          <Link className="focus-ring mt-7 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/company/arktech-group">Explore Supporting Manufacturing by Arktech Group →</Link>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" id="capability-flow">
        <div className="container-page">
          <SectionHeading eyebrow="Connected Manufacturing" title="From Product Design to Tooling and Production" body="Core steps are coordinated around project requirements. Supporting processes are added only where the product program needs them." />
          <ol className="relative mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-5" aria-label="Arktech product development to production capability flow">
            {processStages.map(([number, title, description], index) => (
              <li className="relative border-t-2 border-[var(--brand)] pt-5" key={title}>
                <span className="text-sm font-bold text-[var(--brand)]">{number}</span>
                <h3 className="mt-2 text-lg font-bold leading-6 text-[var(--brand-dark)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{description}</p>
                {index < processStages.length - 1 ? <span className="absolute -right-4 top-5 hidden text-xl font-bold text-[var(--brand)] lg:block" aria-hidden="true">→</span> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" id="industries-applications">
        <div className="container-page">
          <SectionHeading eyebrow="Industries & Applications" title="Manufacturing Support Across Product Industries" body="Explore how Arktech's tooling, plastic injection molding and engineering capabilities connect with real product applications." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link className="focus-ring group overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:border-[var(--brand)]" href={industry.href} key={industry.title}>
                <div className="relative aspect-[16/9] overflow-hidden"><Image alt={industry.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={industry.image} /></div>
                <div className="border-t border-[var(--line)] p-4"><h3 className="text-lg font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{industry.title}</h3></div>
              </Link>
            ))}
          </div>
          <Link className="focus-ring mt-7 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/industries">Explore Industries →</Link>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Start Your Project</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Discuss Your Manufacturing Project</h2>
            <p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Upload your CAD data and project requirements for DFM review, tooling discussion and production quotation.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
