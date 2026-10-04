import Image from "next/image";
import Link from "next/link";
import { DfmReportPreview } from "@/components/DfmReportPreview";
import { HomeIndustryPanels } from "@/components/HomeIndustryPanels";
import { InjectionMoldingProductionVideo } from "@/components/InjectionMoldingProductionVideo";
import { ManufacturingYouTubeVideo } from "@/components/ManufacturingYouTubeVideo";
import { ToolingGallery } from "@/components/ToolingGallery";
import { ValidationEvidenceGallery } from "@/components/ValidationEvidenceGallery";

const proofItems = [
  "DFM & Mold Design",
  "Export Tooling",
  "Mold Trial & Validation",
  "Plastic Injection Molding 25–550T",
  "Global Delivery"
] as const;

const buyerPaths = [
  {
    eyebrow: "From Part Design to Production",
    title: "Product Companies & OEM Teams",
    body: "Bring your plastic parts into production with support for co-design, DFM, mold manufacturing and injection molding—from initial CAD review to validated samples and production.",
    points: ["Co-design & DFM Support", "Mold Development & Validation", "Low-Volume & Mass Production"],
    image: "/images/company/arktech-product-design-injection-mold-production.webp",
    alt: "Product design, DFM, mold development and injection molding production workflow",
    cta: "Explore Tooling & Production Support",
    href: "/services/plastic-injection-molding"
  },
  {
    eyebrow: "Export Molds for Your Production",
    title: "Injection Molding Companies",
    body: "Expand your tooling capacity with injection molds built to your machine specifications and tooling standards, supported by documented mold trials, export preparation and spare parts.",
    points: ["Machine & Tooling Standard Compatibility", "Mold Trials & Technical Documentation", "Export Preparation & Spare Parts"],
    image: "/images/company/arktech-export-injection-mold-global-delivery.webp",
    alt: "Completed export injection mold with mold trial validation and packing preparation",
    cta: "Explore Export Tooling",
    href: "/services/injection-mold-manufacturing"
  }
] as const;

const moldCapabilities = [
  {
    title: "Precision Injection Molds",
    body: "Controlled tooling for repeatable dimensions, fit and production performance.",
    image: "/images/mold-types/Precision-Molds.png",
    alt: "Precision injection mold for controlled-dimension plastic parts",
    href: "/injection-molds/precision-injection-molds"
  },
  {
    title: "Complex Injection Molds",
    body: "Slides, lifters and coordinated side actions for demanding part geometry.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Complex injection mold with multiple side-action mechanisms",
    href: "/injection-molds/complex-injection-molds"
  },
  {
    title: "Multi-Cavity Injection Molds",
    body: "Balanced cavities and cooling for consistent repeat production.",
    image: "/images/mold-types/multi-cavity-injection-molds.webp",
    alt: "Multi-cavity injection mold with repeated production cavities",
    href: "/injection-molds/multi-cavity-molds"
  },
  {
    title: "Family Injection Molds",
    body: "Related parts produced together when demand and molding conditions align.",
    image: "/images/mold-types/Family-molds.JPG",
    alt: "Family injection mold with several related part cavities",
    href: "/injection-molds/family-molds"
  },
  {
    title: "Two-Shot / 2K Molds",
    body: "Coordinated tooling for compatible two-material or two-color parts.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp",
    alt: "Two-shot 2K injection mold for multi-material plastic parts",
    href: "/injection-molds/two-shot-2k-molds"
  },
  {
    title: "Unscrewing Injection Molds",
    body: "Controlled core rotation for internal and external molded threads.",
    image: "/images/mold-types/unscrewing-molds.webp",
    alt: "Unscrewing injection mold for threaded plastic components",
    href: "/injection-molds/unscrewing-molds"
  }
] as const;

const supportingCapabilities = [
  {
    title: "CNC Machining",
    body: "Precision metal and plastic parts for prototypes, assemblies and production.",
    image: "/images/capabilities/cnc-machining.webp",
    alt: "CNC machined components arranged on a work surface",
    fit: "object-cover"
  },
  {
    title: "Die Casting",
    body: "Aluminum and zinc components with machining and finishing support.",
    image: "/images/capabilities/die-casting.webp",
    alt: "Die-cast component housings and structural parts on a workbench",
    fit: "object-cover"
  },
  {
    title: "Sheet Metal Fabrication",
    body: "Enclosures, brackets and sheet metal components with fabrication and finishing.",
    image: "/images/capabilities/sheet-metal-fabrication.jpg",
    alt: "Sheet metal clips brackets and formed components arranged on a surface",
    fit: "object-cover"
  },
  {
    title: "Rapid Prototyping",
    body: "Physical prototypes for fit, function and design review before tooling.",
    image: "/images/capabilities/rapid-prototyping-v2.jpg",
    alt: "Prototype plastic trim components arranged for product review",
    fit: "object-contain"
  },
  {
    title: "Vacuum Casting",
    body: "Small batches of prototype parts for product evaluation and pre-production review.",
    image: "/images/case-studies/vacuum-casting-prototype.webp",
    alt: "Silicone vacuum casting molds with a clear prototype part",
    fit: "object-contain"
  },
  {
    title: "Assembly & Secondary Operations",
    body: "Printing, welding, inserts, assembly and packaging for molded parts and product programs.",
    image: "/images/capabilities/molded-part-component-assembly.webp",
    alt: "Operator assembling molded plastic components at a work fixture",
    fit: "object-cover"
  }
] as const;

function SectionHeading({ eyebrow, title, body, id }: { eyebrow: string; title: string; body?: string; id: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)] sm:text-sm">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.015em] text-[var(--brand-dark)] sm:text-4xl" id={id}>
        {title}
      </h2>
      {body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
      {items.map((item) => (
        <li className="flex items-start gap-3 font-semibold leading-6 text-[var(--brand-dark)]" key={item}>
          <span aria-hidden="true" className="mt-0.5 text-[var(--brand)]">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function HomePage() {
  return (
    <div className="overflow-x-clip">
      <section className="relative isolate overflow-hidden bg-[var(--brand-dark)] text-white" aria-labelledby="homepage-hero-heading">
        <Image alt="Export injection molds and molded plastic parts manufactured by Arktech" className="-z-20 object-cover object-[64%_center] sm:object-center" fill priority sizes="100vw" src="/images/hero/export-injection-mold-manufacturing-hero.webp" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,35,58,0.96)_0%,rgba(8,35,58,0.90)_56%,rgba(8,35,58,0.68)_100%)] sm:bg-[linear-gradient(90deg,rgba(8,35,58,0.95)_0%,rgba(8,35,58,0.87)_46%,rgba(8,35,58,0.48)_72%,rgba(8,35,58,0.18)_100%)] lg:bg-[linear-gradient(90deg,rgba(8,35,58,0.95)_0%,rgba(8,35,58,0.88)_43%,rgba(8,35,58,0.44)_65%,rgba(8,35,58,0.10)_100%)]" />
        <div className="container-page flex min-h-[640px] items-center py-12 sm:min-h-[650px] sm:py-14 lg:min-h-[660px] lg:py-16">
          <div className="w-full sm:max-w-[800px] lg:w-[65%] lg:max-w-[740px]">
            <p className="text-xs font-bold uppercase tracking-[0.11em] text-white/90 sm:text-sm">Export Tooling &amp; Plastic Part Production</p>
            <h1 className="mt-4 text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-white sm:text-[2.5rem] md:text-[2.75rem] lg:text-[2.875rem]" id="homepage-hero-heading">
              <span className="lg:block">Injection Mold Manufacturer &amp;</span>{" "}
              <span className="lg:block">Plastic Injection Molding Partner</span>
            </h1>
            <p className="mt-5 max-w-[720px] text-[0.9375rem] leading-6 text-white sm:text-base sm:leading-7 lg:text-lg lg:leading-8">Custom export molds and plastic part production for OEMs, product companies and injection molders—from DFM and mold design to trial validation and global delivery.</p>

            <div className="mt-6 grid max-w-[740px] grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5" aria-label="Arktech tooling and molding capabilities">
              {proofItems.map((item) => (
                <span className={`flex min-h-10 items-center gap-2 rounded-sm border border-white/25 bg-white/10 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white backdrop-blur-[2px] sm:min-h-11 sm:px-3.5 sm:text-sm ${item === "Plastic Injection Molding 25–550T" ? "col-span-2 whitespace-nowrap" : ""}`} key={item}>
                  <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Request a Tooling Quote</Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/80 bg-[rgba(8,35,58,0.28)] px-6 font-bold text-white transition hover:bg-white hover:text-[var(--brand-dark)]" href="/injection-molds">Explore Injection Molds <span aria-hidden="true" className="ml-2">→</span></Link>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/85">Share your CAD files and project requirements.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="who-we-support-heading">
        <div className="container-page">
          <SectionHeading body="Export injection molds for your molding facility. Tooling and plastic part production for your product." eyebrow="Buyer Paths" id="who-we-support-heading" title="Who We Support" />
          <div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2 lg:gap-6">
            {buyerPaths.map((buyer) => (
              <article className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition hover:border-[var(--brand)]" key={buyer.title}>
                <div className="relative aspect-video overflow-hidden bg-[#eef2f5]">
                  <Image
                    alt={buyer.alt}
                    className="object-contain object-center transition duration-300 group-hover:scale-[1.01] motion-reduce:transition-none"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src={buyer.image}
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{buyer.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-[var(--brand-dark)] sm:text-3xl">{buyer.title}</h3>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{buyer.body}</p>
                  <ul className="mt-5 space-y-3">
                    {buyer.points.map((point) => (
                      <li className="flex items-start gap-3 font-semibold leading-6 text-[var(--brand-dark)]" key={point}>
                        <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link className="focus-ring mt-auto inline-flex min-h-11 items-center self-start pt-6 font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={buyer.href}>{buyer.cta} <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="mold-capabilities-heading">
        <div className="container-page">
          <SectionHeading body="Representative production-tooling categories for precision, complex geometry, cavity strategy and controlled mold movement." eyebrow="What We Build" id="mold-capabilities-heading" title="Injection Mold Capabilities" />
          <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moldCapabilities.map((mold) => <Link className="focus-ring group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)] hover:shadow-sm" href={mold.href} key={mold.title}><div className="relative aspect-[16/10] overflow-hidden bg-white"><Image alt={mold.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={mold.image} /></div><div className="flex flex-1 flex-col border-t border-[var(--line)] p-5"><h3 className="text-xl font-bold leading-tight text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{mold.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{mold.body}</p></div></Link>)}
          </div>
          <Link className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/injection-molds">Explore All Injection Mold Types <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white py-12 sm:py-14" aria-labelledby="supporting-capabilities-heading">
        <div className="container-page">
          <SectionHeading body="Complement your injection mold and plastic molding projects with CNC machining, die casting, sheet metal, prototyping, vacuum casting and assembly support provided by Arktech Group." eyebrow="Support by Arktech Group" id="supporting-capabilities-heading" title="Supporting Manufacturing Capabilities" />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportingCapabilities.map((capability) => (
              <article className="flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-[0_1px_2px_rgba(8,35,58,0.04)]" key={capability.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#eef2f5]">
                  <Image alt={capability.alt} className={`${capability.fit} object-center`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={capability.image} />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-4 sm:p-5">
                  <h3 className="text-lg font-bold leading-6 text-[var(--brand-dark)]">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{capability.body}</p>
                </div>
              </article>
            ))}
          </div>
          <a className="focus-ring mt-6 inline-flex min-h-11 items-center font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href="https://arktech-group.com/" rel="noopener noreferrer" target="_blank">Explore Manufacturing Support at Arktech Group <span aria-hidden="true" className="ml-2">↗</span><span className="sr-only"> (opens in a new window)</span></a>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="dfm-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,54fr)_minmax(0,46fr)] lg:items-center lg:gap-12 xl:gap-14">
          <DfmReportPreview />
          <div><SectionHeading body="Review moldability, release, filling and tooling risks before steel is machined." eyebrow="DFM & Mold Design" id="dfm-heading" title="Engineering Before Steel Cutting" /><div className="mt-6"><CheckList items={["Parting line", "Draft & undercuts", "Gate strategy", "Ejection", "Steel-safe conditions", "Moldability risks"]} /></div><Link className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/injection-molding-engineering">Explore DFM &amp; Mold Design <span aria-hidden="true" className="ml-2">→</span></Link></div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-14 text-white sm:py-16" aria-labelledby="mold-manufacturing-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:items-center lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f3b9b9] sm:text-sm">Export Tooling · In-House Toolroom</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl" id="mold-manufacturing-heading">Injection Mold Manufacturing</h2>
            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">From CNC and EDM machining to fitting, assembly and mold trials, we build export injection molds around your machine specifications and tooling requirements.</p>
            <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15 sm:grid-cols-2">
              {[
                ["CNC & EDM Machining", "Precision machining of mold plates, inserts and tooling components."],
                ["Mold Fitting & Assembly", "Fitting, assembly and checks of mold movement and function."],
                ["Mold Trial & Inspection", "Sampling and inspection before customer review."],
                ["Export Preparation & Documentation", "Tooling records and shipment preparation for mold transfer."]
              ].map(([title, body]) => (
                <article className="bg-[var(--brand-dark)] p-4" key={title}>
                  <h3 className="text-base font-bold leading-6 text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-white/70">{body}</p>
                </article>
              ))}
            </div>
            <Link className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[#f3b9b9] transition hover:text-white" href="/services/injection-mold-manufacturing">Explore Mold Manufacturing <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
          <ManufacturingYouTubeVideo />
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="validation-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,43fr)_minmax(0,57fr)] lg:items-center lg:gap-12">
          <div><SectionHeading body="Trial evidence and engineering records support correction decisions and customer approval before shipment or production release." eyebrow="Documented Validation" id="validation-heading" title="Mold Trial, Validation & Approval" /><div className="mt-6"><CheckList items={["T0 / T1 Mold Trial", "Molding Parameter Recording", "Dimensional Inspection", "Correction Tracking", "Customer Approval Support"]} /></div><Link className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/injection-molds/mold-trial-validation">View Mold Trial &amp; Validation <span aria-hidden="true" className="ml-2">→</span></Link></div>
          <ValidationEvidenceGallery />
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="plastic-molding-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:items-center lg:gap-12">
          <InjectionMoldingProductionVideo />
          <div><SectionHeading body="Keep tooling development, mold trials and plastic part production under one engineering workflow." eyebrow="Plastic Injection Molding" id="plastic-molding-heading" title="Plastic Injection Molding from Tool Validation to Production" /><div className="mt-6"><CheckList items={["25–550T Injection Molding", "Mold Trial & Process Optimization", "Low-Volume Production", "Mass Production", "Quality Inspection", "Secondary Operations"]} /></div><Link className="focus-ring mt-7 inline-flex min-h-11 items-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white hover:bg-[var(--brand-hover)]" href="/services/plastic-injection-molding">Explore Plastic Injection Molding <span aria-hidden="true" className="ml-2">→</span></Link></div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="industries-heading">
        <div className="container-page">
          <SectionHeading body="Export injection molds and plastic part production for housings, enclosures and functional components across key industries." eyebrow="Applications" id="industries-heading" title="Industries Served" />
        </div>
        <div className="mt-8"><HomeIndustryPanels /></div>
        <div className="container-page">
          <Link className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/industries">Explore All Industries <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
      </section>

      <ToolingGallery />

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20" aria-labelledby="homepage-rfq-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,56fr)_minmax(320px,44fr)] lg:items-center lg:gap-12">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Start Your RFQ</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl" id="homepage-rfq-heading">Start Your Injection Mold Project</h2><p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Upload your CAD data and project requirements for DFM review, tooling discussion and quotation.</p></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[440px] lg:justify-self-end"><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link></div>
        </div>
      </section>
    </div>
  );
}
