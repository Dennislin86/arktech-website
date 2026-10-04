import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { FullBleedHero } from "@/components/FullBleedHero";
import { LazyAutoplayVideo } from "@/components/LazyAutoplayVideo";
import { ManufacturingYouTubeVideo } from "@/components/ManufacturingYouTubeVideo";

const primaryCapabilities = [
  {
    eyebrow: "Export Tooling",
    title: "Injection Mold Manufacturing",
    description:
      "DFM, mold design, toolmaking, fitting, mold trials and export tooling support for production molds built to customer requirements.",
    points: ["DFM & Mold Design", "CNC / EDM Machining", "Fitting & Assembly", "Mold Trial", "Export Tooling"],
    cta: "Explore Injection Mold Manufacturing",
    href: "/injection-mold-manufacturing",
    video: null,
    youtube: true,
    poster: "/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp",
    ariaLabel: "Arktech injection mold manufacturing process",
    mediaLabel: "Real Arktech toolmaking, fitting and mold assembly"
  },
  {
    eyebrow: "Molded Part Production",
    title: "Plastic Injection Molding",
    description:
      "Plastic part production from mold validation and process optimization through low-volume and mass production, supported by 25–550T injection molding capacity.",
    points: ["25–550T Injection Molding", "Mold Trial & Process Optimization", "Low-Volume Production", "Mass Production", "Quality Inspection", "Secondary Operations"],
    cta: "Explore Plastic Injection Molding",
    href: "/plastic-injection-molding",
    video: "/videos/Injection Molding/injection-molding-production1.mp4",
    youtube: false,
    poster: "/images/capabilities/plastic-injection-molding-production-video-frame.webp",
    ariaLabel: "Plastic injection molding production process at Arktech",
    mediaLabel: "Real Arktech injection molding production"
  }
];

const injectionMoldTypeLinks = [
  { label: "Precision Injection Molds", href: "/injection-molds/precision-injection-molds" },
  { label: "Complex Injection Molds", href: "/injection-molds/complex-injection-molds" },
  { label: "Multi-Cavity Molds", href: "/injection-molds/multi-cavity-molds" },
  { label: "Prototype Molds", href: "/injection-molds/prototype-injection-molds" },
  { label: "Large Molds", href: "/injection-molds/large-injection-molds" }
];

const engineeringCapabilities = [
  {
    title: "DFM & Co-Design",
    description: "Review part geometry, draft, parting lines, undercuts, gate strategy, ejection and steel-safe conditions before steel cutting.",
    detail: "Part Review · Tooling Concept · Moldability Risk",
    image: "/images/Engineering/injection-molding-dfm-report-anonymized.webp",
    alt: "DFM report for injection mold design review",
    href: "/injection-molding-engineering"
  },
  {
    title: "Mold Trial & Validation",
    description: "Review T0 and T1 samples, molding parameters, correction actions and approval evidence before release.",
    detail: "Samples · Process Parameters · Correction Tracking",
    image: "/images/process/export-delivery-production-support-molding.png",
    alt: "Injection mold trial and sample validation before approval",
    href: "/injection-molds/mold-trial-validation"
  },
  {
    title: "Quality Inspection",
    description: "Verify tooling condition, molded samples, critical dimensions and required project documentation.",
    detail: "Dimensional Inspection · Sample Verification · Records",
    image: "/images/process/sample-validation-inspection-cmm.png",
    alt: "Dimensional inspection during injection mold trial validation",
    href: "/company/quality-documentation"
  }
];

const specialtyMoldingLinks = [
  { label: "Insert Molding", href: "/injection-molds/insert-molding-tools" },
  { label: "Two-Shot / 2K Molding", href: "/injection-molds/two-shot-2k-molds" },
  { label: "Overmolding", href: "/injection-molds/overmolding-tools" },
  { label: "In-Mold Labeling (IML)", href: "/injection-molds#in-mold-labeling" }
];

const supportingCapabilities = [
  { title: "CNC Machining", description: "Metal and plastic parts for prototypes, functional components and assemblies.", image: "/images/capabilities/cnc-machining.webp", alt: "CNC machined components arranged on a work surface", imageClassName: "object-cover object-center" },
  { title: "Die Casting", description: "Aluminum and zinc components with machining and finishing support.", image: "/images/capabilities/die-casting.webp", alt: "Die-cast component housings and structural parts on a workbench", imageClassName: "object-cover object-center" },
  { title: "Sheet Metal Fabrication", description: "Enclosures, brackets and formed parts for product assemblies.", image: "/images/capabilities/sheet-metal-fabrication.jpg", alt: "Sheet metal clips brackets and formed components arranged on a surface", imageClassName: "object-contain object-center p-2" },
  { title: "Rapid Prototyping", description: "Prototypes for fit, function and design review before tooling.", image: "/images/capabilities/rapid-prototyping-v2.jpg", alt: "Prototype plastic trim components arranged for product review", imageClassName: "object-contain object-center p-5" },
  { title: "Vacuum Casting", description: "Small batches of prototype parts for product evaluation.", image: "/images/case-studies/vacuum-casting-prototype.webp", alt: "Silicone vacuum casting molds with a clear prototype part", imageClassName: "object-contain object-center p-3" },
  { title: "Assembly & Secondary Operations", description: "Printing, welding, inserts, assembly and packaging support.", image: "/images/capabilities/molded-part-component-assembly.webp", alt: "Operator assembling molded plastic components at a work fixture", imageClassName: "object-cover object-center" }
];

const manufacturingPaths = [
  { question: "Need a Production Mold?", description: "Start with injection mold design, DFM, toolmaking and mold trial support.", cta: "Injection Mold Manufacturing", href: "/injection-mold-manufacturing" },
  { question: "Need Molded Plastic Parts?", description: "Move from mold validation into low-volume or mass plastic injection production.", cta: "Plastic Injection Molding", href: "/plastic-injection-molding" },
  { question: "Need a Specialized Mold?", description: "Explore mold types for complex geometry, production volume, materials and molding requirements.", cta: "Explore Injection Molds", href: "/injection-molds" },
  { question: "Still Validating the Product?", description: "Start with DFM and engineering review before committing to production tooling.", cta: "Start with DFM Engineering", href: "/injection-molding-engineering" }
];

const processStages = [
  ["01", "DFM & Co-Design", "Review geometry, materials and tooling risks before release."],
  ["02", "Injection Mold Manufacturing", "Build and fit the approved production tooling."],
  ["03", "Mold Trial & Validation", "Trial the mold, inspect samples and track corrections."],
  ["04", "Plastic Injection Molding", "Move approved tooling into low-volume or repeat production."],
  ["05", "Inspection & Secondary Operations", "Complete required verification, finishing and assembly support."]
];

const industries = [
  { title: "Industrial Automation", description: "Tooling and molded components for controllers, sensors and automation products.", image: "/images/industries/Industrial-parts.jpg", alt: "Industrial automation housings sensors and functional components", href: "/industries/industrial-automation" },
  { title: "Medical & Healthcare Devices", description: "Precision tooling and molded housings for medical and diagnostic product applications.", image: "/images/industries/medial-industry.webp", alt: "Medical device housings and precision molded components", href: "/industries/medical-devices" },
  { title: "Automotive Components", description: "Tooling and molded parts for interiors, controls and functional automotive applications.", image: "/images/industries/Automotive-Components.png", alt: "Automotive control and functional injection molded components", href: "/industries/automotive" },
  { title: "Smart Home & IoT", description: "Molded housings and enclosures for sensors, hubs and connected devices.", image: "/images/industries/smart-device-housings.png", alt: "Smart home device housings and connected product enclosures", href: "/industries/smart-home-iot" },
  { title: "Home Appliances", description: "Tooling and molded housings, panels and functional plastic parts for appliances.", image: "/images/industries/home-appliance.png", alt: "Home appliance housings and molded functional plastic parts", href: "/industries/home-appliances" },
  { title: "Pet Tech Products", description: "Molded housings and functional parts for connected pet-care products.", image: "/images/industries/pet-lifestyle-product-parts.png", alt: "Smart pet product housings and molded plastic components", href: "/industries/pet-tech" },
  { title: "Consumer Electronics", description: "Injection molded enclosures and structural components for electronic products.", image: "/images/industries/consumer-electronics-enclosures.png", alt: "Consumer electronics enclosures and molded plastic components", href: "/industries/consumer-electronics" }
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
        backgroundImages={[{ src: "/images/hero/tooling-mold-trial-engineering-capabilities.webp", alt: "Injection mold tooling, mold trial and engineering support at Arktech Mold", position: "right" }]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing Capabilities" }]}
        description="From DFM and export tooling to mold trials, plastic injection production and supporting manufacturing processes, Arktech provides an integrated path from product development to production."
        eyebrow="Manufacturing Capabilities"
        height="standard"
        primaryCta={{ label: "Upload CAD for DFM Review", href: "/request-a-quote" }}
        secondaryCta={{ label: "Request a Quote", href: "/request-a-quote" }}
        title="Injection Mold & Plastic Manufacturing Capabilities"
        bottomContent={(
          <div className="mt-8 border-t border-white/25 bg-[#071f34]/80 backdrop-blur-sm" data-capability-proof>
            <ul className="grid grid-cols-2 text-sm leading-5 text-white/90 sm:grid-cols-3 lg:grid-cols-5" aria-label="Arktech manufacturing capability proof">
              <li className="flex min-h-16 items-center gap-2 border-b border-r border-white/15 px-3 py-3 font-medium sm:px-4 lg:border-b-0">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>DFM &amp; Mold Design</span>
              </li>
              <li className="flex min-h-16 items-center gap-2 border-b border-white/15 px-3 py-3 font-medium sm:border-r sm:px-4 lg:border-b-0">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>Molds up to <strong className="whitespace-nowrap font-bold text-white">2,000&nbsp;mm</strong> / <strong className="whitespace-nowrap font-bold text-white">30&nbsp;Tonnes</strong></span>
              </li>
              <li className="flex min-h-16 items-center gap-2 border-b border-r border-white/15 px-3 py-3 font-medium sm:px-4 lg:border-b-0">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                <span><strong className="whitespace-nowrap font-bold text-white">200+</strong> Molds per Year</span>
              </li>
              <li className="flex min-h-16 items-center gap-2 border-b border-white/15 px-3 py-3 font-medium sm:border-r sm:px-4 lg:border-b-0">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>Injection Molding · <strong className="whitespace-nowrap font-bold text-white">25–550T</strong></span>
              </li>
              <li className="col-span-2 flex min-h-16 items-center gap-2 border-r border-white/15 px-3 py-3 font-medium sm:col-span-1 sm:px-4 lg:border-r-0">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                <span>Export Tooling</span>
              </li>
            </ul>
          </div>
        )}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20" id="primary-capabilities">
        <div className="container-page">
          <SectionHeading eyebrow="Core Business" title="Primary Manufacturing Capabilities" body="Arktech connects export injection mold manufacturing with plastic injection molding production. Choose the capability path that matches your tooling or molded-part program." />
          <div className="mt-10 space-y-8 lg:space-y-10">
            {primaryCapabilities.map((capability, index) => (
              <Fragment key={capability.title}>
                <article className="grid overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)]">
                  <div className={`relative aspect-video overflow-hidden bg-[var(--brand-dark)] lg:aspect-auto lg:min-h-[430px] ${index === 1 ? "lg:order-2" : ""}`}>
                    {capability.youtube ? (
                      <ManufacturingYouTubeVideo layout="fill" requireFinePointerForAutoplay sizes="(min-width: 1024px) 55vw, 100vw" />
                    ) : (
                      <>
                        <LazyAutoplayVideo ariaLabel={capability.ariaLabel} className="absolute inset-0 h-full w-full object-cover" poster={capability.poster} preload="none" src={capability.video ?? ""} />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08233acc] to-transparent px-5 pb-5 pt-16 text-sm font-semibold text-white sm:px-6" aria-hidden="true">{capability.mediaLabel}</div>
                      </>
                    )}
                  </div>
                  <div className={`flex flex-col justify-center bg-white p-6 sm:p-8 lg:p-10 ${index === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-[var(--brand)]">{capability.eyebrow}</p>
                    <h3 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{capability.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[var(--muted)]">{capability.description}</p>
                    <ul className="mt-6 grid gap-x-5 gap-y-2 border-t border-[var(--line)] pt-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" aria-label={`${capability.title} capabilities`}>
                      {capability.points.map((point) => <li className="flex items-start gap-2 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={point}><span aria-hidden="true" className="text-[var(--brand)]">✓</span>{point}</li>)}
                    </ul>
                    <Link className="focus-ring mt-7 inline-flex min-h-12 w-fit items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href={capability.href}>{capability.cta}<span className="ml-2" aria-hidden="true">→</span></Link>
                  </div>
                </article>

                {index === 0 ? (
                  <nav aria-labelledby="injection-mold-types-navigation" className="border-y border-[var(--line)] bg-[var(--surface-soft)] px-5 py-5 sm:px-6 sm:py-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.11em] text-[var(--brand)]" id="injection-mold-types-navigation">Injection Mold Types</h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)] sm:text-base">Explore tooling options for part geometry, cavity layout and production requirements.</p>
                      </div>
                      <Link className="focus-ring inline-flex min-h-11 shrink-0 items-center font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href="/injection-molds">Explore All Injection Mold Types <span className="ml-1" aria-hidden="true">→</span></Link>
                    </div>
                    <ul aria-label="Injection mold type pages" className="mt-4 flex flex-wrap gap-2">
                      {injectionMoldTypeLinks.map((moldType) => (
                        <li key={moldType.href}>
                          <Link className="focus-ring inline-flex min-h-11 items-center rounded-sm border border-[var(--line)] bg-white px-3.5 py-2 text-sm font-semibold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href={moldType.href}>{moldType.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ) : null}

                {index === 1 ? (
                  <nav aria-labelledby="specialty-molding-navigation" className="border-y border-[var(--line)] bg-[var(--surface-soft)] px-5 py-5 sm:px-6 sm:py-6" id="specialty-molding">
                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-[var(--brand)]">Molding Processes</p>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-[var(--brand-dark)] sm:text-2xl" id="specialty-molding-navigation">Specialty Molding Capabilities</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base">Explore molding processes for integrated inserts, multi-material parts, functional surfaces and in-mold decoration.</p>
                    <ul aria-label="Specialty molding capability pages" className="mt-4 flex flex-wrap gap-2">
                      {specialtyMoldingLinks.map((process) => (
                        <li key={process.href}>
                          <Link className="focus-ring inline-flex min-h-11 items-center rounded-sm border border-[var(--line)] bg-white px-3.5 py-2 text-sm font-semibold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href={process.href}>{process.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ) : null}
              </Fragment>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--line)] pt-6"><Link className="focus-ring font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/injection-molds">Explore Injection Mold Types →</Link><Link className="focus-ring font-bold text-[var(--brand-dark)] hover:text-[var(--brand)]" href="/resources">View Engineering Resources →</Link></div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" id="engineering-validation">
        <div className="container-page">
          <SectionHeading eyebrow="Engineering Support" title="Engineering & Validation" body="Engineering review and documented validation connect product requirements with practical tooling and production decisions." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {engineeringCapabilities.map((capability) => (
              <Link className="focus-ring group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:border-[var(--brand)]" href={capability.href} key={capability.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-white"><Image alt={capability.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 768px) 33vw, 100vw" src={capability.image} /></div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-5"><h3 className="text-xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{capability.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{capability.description}</p><p className="mt-4 border-t border-[var(--line)] pt-4 text-xs font-bold uppercase leading-5 tracking-[0.04em] text-[var(--brand-dark)]">{capability.detail}</p><span className="mt-4 text-sm font-bold text-[var(--brand)]">Explore capability →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" id="supporting-capabilities">
        <div className="container-page">
          <SectionHeading eyebrow="SUPPORT BY ARKTECH GROUP" title="Supporting Manufacturing Capabilities" body="Complete your OEM and ODM product programs with metal parts, prototypes, finishing and assembly support from Arktech Group, alongside injection molds and molded plastic parts." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {supportingCapabilities.map((capability) => <article className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-[0_1px_2px_rgba(8,35,58,0.04)]" key={capability.title}><div className="relative aspect-[16/10] overflow-hidden bg-[#f5f6f7]"><Image alt={capability.alt} className={capability.imageClassName} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={capability.image} /></div><div className="border-t border-[var(--line)] p-5"><h3 className="text-xl font-bold leading-7 text-[var(--brand-dark)]">{capability.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)] sm:text-[15px]">{capability.description}</p></div></article>)}
          </div>
          <a className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href="https://arktech-group.com/" rel="noopener noreferrer" target="_blank">Explore OEM &amp; ODM Manufacturing Support at Arktech Group <span className="ml-1" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new window)</span></a>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" id="manufacturing-path">
        <div className="container-page">
          <SectionHeading eyebrow="Choose Your Starting Point" title="Find the Right Manufacturing Path" body="Start with the project need that best matches your current stage. Each route leads to a focused engineering or production capability." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {manufacturingPaths.map((path, index) => <Link className="focus-ring group flex min-h-52 flex-col justify-between rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6 transition hover:border-[var(--brand)] sm:p-7" href={path.href} key={path.question}><div><p className="text-sm font-bold text-[var(--brand)]">0{index + 1}</p><h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{path.question}</h3><p className="mt-3 max-w-xl text-base leading-7 text-[var(--muted)]">{path.description}</p></div><span className="mt-6 inline-flex font-bold text-[var(--brand)]">{path.cta}<span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-14 text-white sm:py-16" id="capability-flow">
        <div className="container-page">
          <div className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[#ffb2b5]">Connected Manufacturing</p><h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl lg:text-[44px]">From Product Design to Tooling and Production</h2><p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">Core steps are coordinated around project requirements. Supporting processes are added only where the product program needs them.</p></div>
          <ol className="relative mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-5" aria-label="Arktech product development to production capability flow">
            {processStages.map(([number, title, description], index) => <li className="relative border-t-2 border-[var(--brand)] pt-5" key={title}><span className="text-sm font-bold text-[#ffb2b5]">{number}</span><h3 className="mt-2 text-lg font-bold leading-6 text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>{index < processStages.length - 1 ? <span className="absolute -right-4 top-5 hidden text-xl font-bold text-[#ffb2b5] lg:block" aria-hidden="true">→</span> : null}</li>)}
          </ol>
          <p className="mt-8 border-t border-white/15 pt-6 text-sm font-semibold text-slate-300">Supporting processes are available as required by the project.</p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" id="industries-applications">
        <div className="container-page">
          <SectionHeading eyebrow="Industries & Applications" title="Industries & Applications" body="Explore how Arktech tooling, plastic injection molding and engineering capabilities connect with real product applications." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => <Link className="focus-ring group overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:border-[var(--brand)]" href={industry.href} key={industry.title}><div className="relative aspect-[16/9] overflow-hidden"><Image alt={industry.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={industry.image} /></div><div className="border-t border-[var(--line)] p-5"><h3 className="text-lg font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{industry.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{industry.description}</p></div></Link>)}
          </div>
          <Link className="focus-ring mt-7 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/industries">Explore Industries →</Link>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Start Your Project</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Discuss Your Manufacturing Project</h2><p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Upload your CAD data and project requirements for DFM review, tooling discussion and production quotation.</p></div>
          <div className="grid gap-3 sm:grid-cols-2"><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Request a Quote</Link></div>
        </div>
      </section>
    </>
  );
}
