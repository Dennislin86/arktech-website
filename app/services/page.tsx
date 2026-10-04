import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/FullBleedHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Injection Molding & Tooling Services | Arktech" },
  description:
    "Explore Arktech capabilities in DFM engineering, export injection mold manufacturing, mold trials, plastic injection molding and extended manufacturing support including CNC machining, die casting, sheet metal, prototyping and assembly.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Injection Molding & Tooling Services | Arktech",
    description: "DFM engineering, export injection mold manufacturing, mold trials and plastic injection molding for global OEM programs.",
    type: "website",
    url: `${site.url}/services`,
    images: [{ url: "/images/capabilities/injection-mold-manufacturing.png", alt: "Arktech injection molding and export tooling services" }]
  }
};

type CapabilityLink = { label: string; href: string };

const coreCapabilities: Array<{
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  links: CapabilityLink[];
  cta: string;
  href: string;
}> = [
  {
    category: "Export Tooling",
    title: "Export Injection Mold Manufacturing",
    description:
      "DFM review, mold engineering, tool manufacturing, mold trials and validation support for export-ready injection mold programs.",
    image: "/images/capabilities/injection-mold-manufacturing.png",
    alt: "Export injection mold manufacturing for OEM tooling programs",
    links: [
      { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
      { label: "DFM & Mold Engineering", href: "/services/dfm-engineering" },
      { label: "Mold Trial & Validation", href: "/services/mold-trial-sampling-support" }
    ],
    cta: "Explore Export Tooling",
    href: "/services/injection-mold-manufacturing"
  },
  {
    category: "Injection Molding",
    title: "Plastic Injection Molding",
    description:
      "Prototype, low-volume and repeat production support for molded plastic parts, housings and OEM component programs.",
    image: "/images/capabilities/plastic-injection-molding-production-video-frame.webp",
    alt: "Plastic injection molding production for OEM plastic parts",
    links: [
      { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
      { label: "Production Options", href: "/services/injection-molding-production-options" },
      { label: "Insert & Overmolding", href: "/injection-molds#insert-overmolding-tools" }
    ],
    cta: "Explore Injection Molding",
    href: "/services/plastic-injection-molding"
  },
  {
    category: "Engineering Support",
    title: "Engineering Support for Product & Tooling Development",
    description:
      "Manufacturability review, DFM feedback, mold flow analysis and engineering support before tooling and production begin.",
    image: "/images/factory-workshop/injection-mold-engineering-office.webp",
    alt: "Engineering support for DFM review, mold flow analysis and product development",
    links: [
      { label: "Product Design Support", href: "/services/dfm-engineering#co-design" },
      { label: "DFM for Plastic Parts", href: "/services/dfm-engineering" },
      { label: "Mold Flow Analysis", href: "/services/dfm-engineering#mold-flow-analysis" }
    ],
    cta: "Explore Engineering Support",
    href: "/services/dfm-engineering"
  }
];

const processStages: Array<{
  title: string;
  description: string;
  image: string;
  alt: string;
  linkLabel: string;
  href: string;
  partnerLabel?: string;
}> = [
  {
    title: "Engineering Review",
    description: "Review CAD data, DFM, materials, tolerances and manufacturability before tooling decisions are finalized.",
    image: "/images/factory-workshop/injection-mold-engineering-office.webp",
    alt: "Engineering review for DFM, materials and injection molding requirements",
    linkLabel: "View DFM Engineering",
    href: "/services/dfm-engineering"
  },
  {
    title: "Export Tooling",
    description: "Develop and manufacture the injection mold based on approved engineering, tooling requirements and customer production conditions.",
    image: "/images/mold-types/large-component-molds.JPG",
    alt: "Export injection mold manufacturing and tooling preparation at Arktech",
    linkLabel: "Explore Injection Mold Manufacturing",
    href: "/services/injection-mold-manufacturing"
  },
  {
    title: "Mold Trial & Validation",
    description: "Trial the mold, review molded samples, inspect critical requirements and complete required engineering corrections before approval.",
    image: "/images/process/export-delivery-production-support-molding.png",
    alt: "Injection mold trial and sample validation before production approval",
    linkLabel: "View Mold Trial & Validation",
    href: "/services/mold-trial-sampling-support"
  },
  {
    title: "Injection Production",
    description: "Move approved tooling into prototype, low-volume or repeat injection molding production with controlled process and inspection requirements.",
    image: "/images/capabilities/plastic-injection-molding-production-video-frame.webp",
    alt: "Plastic injection molding production for prototype and repeat OEM supply",
    linkLabel: "Explore Plastic Injection Molding",
    href: "/services/plastic-injection-molding"
  },
  {
    title: "Extended Manufacturing",
    description: "Coordinate additional metal parts, secondary operations, assembly and related manufacturing support when a project requires a broader scope.",
    image: "/images/capabilities/cnc-machining.webp",
    alt: "Extended manufacturing support for CNC parts assembly and secondary operations",
    linkLabel: "Explore Arktech Group",
    href: "/company/arktech-group",
    partnerLabel: "Extended Manufacturing by Arktech Group"
  }
];

const extendedCapabilities = [
  {
    title: "CNC Machining",
    description: "Precision machined metal and plastic components for prototypes, engineering builds and production support.",
    image: "/images/capabilities/cnc-machining.webp",
    alt: "CNC machined metal and plastic components by Arktech Group",
    href: "https://www.arktech-group.com/service/cnc-machining/"
  },
  {
    title: "Die Casting",
    description: "Aluminum and zinc die-cast components for structural, thermal and functional product applications.",
    image: "/images/capabilities/die-casting.webp",
    alt: "Die cast aluminum components for structural and functional applications",
    href: "https://www.arktech-group.com/service/die-casting-3/"
  },
  {
    title: "Sheet Metal Fabrication",
    description: "Laser-cut, bent and formed sheet-metal components for housings, brackets and product assemblies.",
    image: "/images/capabilities/sheet-metal-fabrication.jpg",
    alt: "Sheet metal fabricated brackets housings and formed components",
    href: "https://www.arktech-group.com/service/metal-fabrication/"
  },
  {
    title: "Rapid Prototyping",
    description: "Prototype parts for design validation, fit checks, functional testing and early product development.",
    image: "/images/capabilities/rapid-prototyping-v3.webp",
    alt: "Rapid prototype parts for design validation and functional testing",
    href: "https://www.arktech-group.com/service/3d-printing-3/"
  },
  {
    title: "Assembly",
    description: "Component and product assembly support for plastic, metal and mixed-material projects.",
    image: "/images/capabilities/molded-part-component-assembly.webp",
    alt: "Product and component assembly support by Arktech Group",
    href: "https://www.arktech-group.com/service/secondary-operation-2/"
  },
  {
    title: "Secondary Operations",
    description: "Printing, welding, insert installation, finishing and post-molding processes for production-ready components.",
    image: "/images/capabilities/secondary-operations-pad-printing.webp",
    alt: "Secondary operations for molded plastic components including welding printing and insert installation",
    href: "https://www.arktech-group.com/service/secondary-operation-2/"
  }
];

const audiences = [
  {
    title: "Product Companies & OEM Teams",
    context:
      "For product companies developing new plastic products that need support moving from CAD and engineering review into tooling and production.",
    needs: [
      "DFM before tooling release",
      "Export mold development for new products",
      "Support moving from prototype into repeat production"
    ],
    image: "/images/process/rfq-cad-review-old-website.png",
    alt: "Product development and DFM review for new plastic products",
    primaryLabel: "Upload CAD for DFM Review",
    primaryHref: "/request-a-quote",
    secondaryLabel: "Explore Product Development Support",
    secondaryHref: "/services/dfm-engineering#co-design"
  },
  {
    title: "Injection Molding Companies",
    context:
      "For molders that already have production equipment but need additional tooling capacity, export-ready molds and engineering support.",
    needs: [
      "Additional offshore toolmaking capacity",
      "Export molds prepared for customer production equipment",
      "Mold trials, validation, documentation and spare inserts"
    ],
    image: "/images/process/tooling-manufacturing-plan-mold.png",
    alt: "Export injection mold manufacturing for injection molding companies",
    primaryLabel: "Explore Export Tooling",
    primaryHref: "/services/injection-mold-manufacturing",
    secondaryLabel: "Request Tooling Quote",
    secondaryHref: "/request-a-quote"
  },
  {
    title: "EMS & Manufacturing Partners",
    context:
      "For manufacturing teams coordinating plastic, metal and assembled components across a broader product program.",
    needs: [
      "Molded plastic housings and functional components",
      "Mixed plastic / metal component sourcing",
      "Assembly, secondary operations and delivery coordination"
    ],
    image: "/images/capabilities/assembly-secondary-operations-v2.jpg",
    alt: "Coordinated plastic metal and assembly manufacturing support",
    primaryLabel: "Explore Extended Manufacturing",
    primaryHref: "/company/arktech-group",
    secondaryLabel: "Explore Arktech Group ↗",
    secondaryHref: "https://www.arktech-group.com",
    external: true,
    partnerLabel: "Extended manufacturing support through Arktech Group"
  }
];

const industries = [
  {
    title: "Robotics",
    description: "Tooling and molded components for robot housings, sensors and automation products.",
    image: "/images/industries/robotics-automation.png",
    alt: "Robotics products supported by injection tooling and molded plastic components",
    href: "/industries/robotics"
  },
  {
    title: "Medical & Healthcare Devices",
    description: "Injection tooling and precision molded housings for medical and diagnostic product applications.",
    image: "/images/industries/medial-industry.webp",
    alt: "Medical device housings and precision molded plastic components",
    href: "/industries/medical-devices"
  },
  {
    title: "Automotive Components",
    description: "Tooling and molded plastic components for interiors, controls and functional automotive applications.",
    image: "/images/industries/Automotive-Components.png",
    alt: "Automotive interior and functional injection molded plastic components"
  },
  {
    title: "Smart Home & IoT",
    description: "Injection molded housings and enclosures for sensors, hubs and connected devices.",
    image: "/images/industries/smart-device-housings.png",
    alt: "Smart home and IoT device housings and sensor enclosures",
    href: "/industries/smart-home"
  },
  {
    title: "Energy Storage & EV Charging",
    description: "Molded housings, connector components and tooling support for charging and energy applications.",
    image: "/images/industries/autimotive-ev.webp",
    alt: "EV charging housings and molded connector components",
    href: "/industries/new-energy"
  },
  {
    title: "Home Appliance",
    description: "Tooling and molded housings, panels and functional plastic parts for appliance products.",
    image: "/images/industries/home-appliance.png",
    alt: "Home appliance housings control panels and molded plastic components"
  },
  {
    title: "Pet Tech Products",
    description: "Molded housings and functional components for smart feeders, cameras and connected pet products.",
    image: "/images/industries/pet-lifestyle-product-parts.png",
    alt: "Smart pet product housings and molded plastic components",
    href: "/industries/pet-tech"
  },
  {
    title: "Consumer Electronics",
    description: "Injection molded enclosures, structural parts and functional components for electronic products.",
    image: "/images/industries/consumer-electronics-enclosures.png",
    alt: "Consumer electronics enclosures and functional injection molded components"
  }
];

const proofCards = [
  {
    title: "DFM Before Tooling",
    outcome: "Identify manufacturability risks before steel cutting",
    body: "Part geometry, material, moldability and tooling risks can be reviewed before mold manufacturing begins, helping reduce avoidable engineering changes later in the project.",
    link: "View DFM Engineering",
    href: "/services/dfm-engineering"
  },
  {
    title: "Clear Project Visibility",
    outcome: "Track tooling progress, milestones and open actions",
    body: "Structured project communication helps customers follow tooling status, machining progress, trial planning, engineering changes and open actions throughout the project.",
    link: "View Project Management",
    href: "/company/project-management"
  },
  {
    title: "Validation Before Production",
    outcome: "Review samples, dimensions and corrections before release",
    body: "Mold trials, sample review, dimensional inspection and engineering corrections can be completed before tooling or molded-part production is released for ongoing use.",
    link: "View Mold Trial & Validation",
    href: "/services/mold-trial-sampling-support"
  },
  {
    title: "Documented Export Delivery",
    outcome: "Receive tooling records and shipment preparation for overseas production",
    body: "Export tooling projects can include design data, trial records, inspection reports, certificates, spare parts information and packing documentation based on project requirements.",
    link: "View Quality & Documentation",
    href: "/company/quality-documentation"
  }
];

const proofMetrics = [
  { value: "25–550T", label: "Injection Molding Range" },
  { value: "<2 g to >2.5 kg", label: "Part Weight Range" },
  { value: "DFM Review", label: "Before Tooling" },
  { value: "Inspection & Documentation", label: "Before Delivery" }
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">{body}</p> : null}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <FullBleedHero
        backgroundImages={[{
          src: "/images/hero/tooling-mold-trial-engineering-capabilities.webp",
          alt: "Arktech engineering, injection mold tooling and mold trial capabilities",
          position: "right"
        }]}
        description="Arktech supports product companies and injection molding companies from DFM engineering and export injection mold manufacturing through mold trials, plastic injection molding and extended manufacturing support."
        eyebrow="Arktech Capabilities"
        height="tall"
        primaryCta={{ label: "Explore Export Tooling", href: "/services/injection-mold-manufacturing" }}
        secondaryCta={{ label: "Upload CAD for DFM Review", href: "/request-a-quote" }}
        supportingLine="ENGINEERING → TOOLING → MOLDING → PRODUCTION"
        title="Engineering, Tooling & Manufacturing Capabilities"
      />
      <div className="sr-only" aria-hidden="true" id="core-capabilities" />

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Core Capabilities for Product Development & Production"
            body="Choose the capability path that matches your project—from export injection mold manufacturing and plastic injection molding to DFM and engineering support before production."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
            {coreCapabilities.map((capability, index) => (
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand)]/35 hover:shadow-md" key={capability.category}>
                <div className="relative aspect-video overflow-hidden bg-[var(--surface-soft)]">
                  <Image alt={capability.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02]" fill quality={84} sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw" src={capability.image} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">0{index + 1} · {capability.category}</p>
                  <h3 className="mt-3 text-[1.625rem] font-bold leading-[1.18] text-[var(--brand-dark)]">{capability.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">{capability.description}</p>
                  <ul className="mt-5 grid border-t border-[var(--line)] pt-2">
                    {capability.links.map((item) => (
                      <li key={`${capability.category}-${item.label}`}>
                        <Link className="focus-ring flex min-h-11 items-center justify-between rounded-sm py-2 text-base font-medium leading-6 text-[var(--brand-dark)] transition hover:text-[var(--brand)]" href={item.href}>{item.label}<span className="ml-3 text-[var(--brand)]" aria-hidden="true">→</span></Link>
                      </li>
                    ))}
                  </ul>
                  <Link className="focus-ring mt-auto inline-flex w-fit rounded-sm pt-6 font-bold text-[var(--brand)] transition hover:text-[var(--brand-hover)]" href={capability.href}>{capability.cta} <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
          <aside className="mt-8 grid gap-5 rounded-sm border border-[var(--line)] bg-[#f4f6f8] px-6 py-6 sm:px-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center" aria-label="Capability selection help">
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Not sure which capability fits your project?</h3>
              <p className="mt-2 max-w-3xl leading-7 text-[var(--muted)]">Upload your CAD files and project requirements for engineering review and we’ll help guide you to the right tooling or molding path.</p>
            </div>
            <Link className="focus-ring inline-flex w-fit rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review <span className="ml-2" aria-hidden="true">→</span></Link>
          </aside>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" id="development-to-production">
        <div className="container-page">
          <SectionHeading
            eyebrow="From Development to Production"
            title="A Connected Path from Engineering to Production"
            body="Arktech connects engineering review, export tooling, mold validation, injection molding and extended manufacturing support so each stage prepares the project for the next. This coordinated path helps product teams move from early design review into validated tooling and repeatable production with clearer engineering communication."
          />
          <ol className="relative mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5 xl:before:absolute xl:before:left-[8%] xl:before:right-[8%] xl:before:top-[5.5rem] xl:before:h-px xl:before:bg-[var(--line)]" aria-label="Arktech development-to-production workflow">
            {processStages.map((stage, index) => (
              <li className="group relative flex min-w-0 flex-col" key={stage.title}>
                <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--surface-soft)]">
                  <Image
                    alt={stage.alt}
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    fill
                    quality={82}
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    src={stage.image}
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col bg-white pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-[var(--brand)]">0{index + 1}</span>
                    {index < processStages.length - 1 ? <span className="hidden text-base font-bold text-[var(--brand)] md:inline xl:hidden" aria-hidden="true">→</span> : null}
                  </div>
                  <h3 className="mt-2 text-xl font-bold leading-7 text-[var(--brand-dark)]">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{stage.description}</p>
                  {stage.partnerLabel ? <p className="mt-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-dark)]">{stage.partnerLabel}</p> : null}
                  <Link className="focus-ring mt-auto inline-flex w-fit rounded-sm pt-4 text-sm font-bold leading-6 text-[var(--brand)] transition hover:text-[var(--brand-hover)]" href={stage.href}>{stage.linkLabel} <span className="ml-2" aria-hidden="true">→</span></Link>
                </div>
                {index < processStages.length - 1 ? <span className="absolute -bottom-7 left-1/2 z-20 -translate-x-1/2 text-xl font-bold text-[var(--brand)] md:hidden" aria-hidden="true">↓</span> : null}
                {index < processStages.length - 1 ? <span className="absolute -right-4 top-[5.5rem] z-20 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--line)] bg-white text-sm font-bold text-[var(--brand)] xl:flex" aria-hidden="true">→</span> : null}
              </li>
            ))}
          </ol>
          <aside className="mt-10 grid gap-6 rounded-sm border border-[var(--line)] bg-[#f4f6f8] px-6 py-6 sm:px-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center" aria-label="Project starting point assistance">
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Not sure where your project should start?</h3>
              <p className="mt-2 max-w-3xl leading-7 text-[var(--muted)]">Send us your CAD files, drawings and project requirements for engineering review. We can help identify the appropriate path from DFM and tooling through molding and production support.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review <span className="ml-2" aria-hidden="true">→</span></Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/contact">Request Manufacturing Quote <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Extended Manufacturing"
              title="Extended Manufacturing by Arktech Group"
              body="For projects that require complementary manufacturing beyond injection tooling and molding, Arktech Group can support CNC machining, die casting, sheet metal fabrication, rapid prototyping, assembly and secondary operations. These capabilities can be coordinated alongside plastic tooling and molding when a project requires mixed materials, prototypes, assemblies or additional production support."
            />
            <a className="focus-ring inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href="https://www.arktech-group.com" rel="noopener noreferrer" target="_blank">Explore Arktech Group <span className="ml-2" aria-hidden="true">↗</span></a>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:gap-6 min-[1200px]:grid-cols-3">
            {extendedCapabilities.map((capability) => (
              <a
                className="focus-ring group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:border-[var(--brand)]"
                href={capability.href}
                key={capability.title}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="relative aspect-video overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    alt={capability.alt}
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    fill
                    quality={82}
                    sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
                    src={capability.image}
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] px-4 py-4 sm:px-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">Arktech Group ↗</p>
                  <h3 className="mt-2 text-xl font-bold leading-7 text-[var(--brand-dark)] min-[1200px]:text-[22px]">{capability.title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">{capability.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who We Support"
            title="Built Around Different Manufacturing Needs"
            body="Different teams come to Arktech for different reasons—from new product development and export tooling capacity to coordinated molding, assembly and manufacturing support. Our role is to help each project enter the right engineering and manufacturing path based on its stage, internal resources and production requirements."
          />
          <div className="mt-9 grid gap-6 md:grid-cols-2 min-[1200px]:grid-cols-3 min-[1200px]:gap-7">
            {audiences.map((audience) => (
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand)]/35 hover:shadow-md" key={audience.title}>
                <div className="relative aspect-video overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    alt={audience.alt}
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    fill
                    quality={82}
                    sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
                    src={audience.image}
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-5 sm:p-6">
                  {audience.partnerLabel ? <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">{audience.partnerLabel}</p> : null}
                  <h3 className={`${audience.partnerLabel ? "mt-2" : ""} text-xl font-bold leading-7 text-[var(--brand-dark)]`}>{audience.title}</h3>
                  <p className="mt-3 text-[15px] leading-6 text-[var(--muted)]">{audience.context}</p>
                  <ul className="mt-5 grid gap-3 border-t border-[var(--line)] pt-5" aria-label={`${audience.title} support needs`}>
                    {audience.needs.map((need) => (
                      <li className="flex gap-3 text-sm leading-6 text-[var(--brand-dark)]" key={need}>
                        <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col items-start gap-3 pt-6">
                    <Link className="focus-ring inline-flex rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-hover)]" href={audience.primaryHref}>{audience.primaryLabel} <span className="ml-2" aria-hidden="true">→</span></Link>
                    {audience.external ? (
                      <a className="focus-ring inline-flex rounded-sm text-sm font-semibold text-[var(--brand-dark)] transition hover:text-[var(--brand)]" href={audience.secondaryHref} rel="noopener noreferrer" target="_blank">{audience.secondaryLabel}</a>
                    ) : (
                      <Link className="focus-ring inline-flex rounded-sm text-sm font-semibold text-[var(--brand-dark)] transition hover:text-[var(--brand)]" href={audience.secondaryHref}>{audience.secondaryLabel} <span className="ml-2" aria-hidden="true">→</span></Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="mt-8 grid gap-5 rounded-sm border border-[var(--line)] bg-[#f4f6f8] px-6 py-6 sm:px-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center" aria-label="Manufacturing path selection help">
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Not sure which path fits your project?</h3>
              <p className="mt-2 max-w-3xl leading-7 text-[var(--muted)]">Send us your CAD files, project stage and production requirements. Our engineering team can help identify the most appropriate tooling, molding or manufacturing path.</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-dark)]">Product Development · Export Tooling · Production Support · Extended Manufacturing</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review <span className="ml-2" aria-hidden="true">→</span></Link>
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/contact">Contact Arktech <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Manufacturing Support Across Key Product Industries"
            body="Arktech supports product teams across robotics, medical devices, automotive, smart products, EV charging and other OEM applications with export tooling, plastic injection molding and engineering support."
          />

          <div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2 min-[1200px]:grid-cols-4 min-[1200px]:gap-6">
            {industries.map((industry) => {
              const content = (
                <>
                  <div className="relative aspect-video overflow-hidden bg-white">
                    <Image
                      alt={industry.alt}
                      className={`object-cover object-center transition duration-300 ${industry.href ? "group-hover:scale-[1.02]" : ""}`}
                      fill
                      sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
                      src={industry.image}
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-[var(--line)] p-4 sm:p-5">
                    <h3 className={`text-xl font-bold leading-7 text-[var(--brand-dark)] transition ${industry.href ? "group-hover:text-[var(--brand)]" : ""}`}>{industry.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">{industry.description}</p>
                  </div>
                </>
              );

              return industry.href ? (
                <Link
                  className="focus-ring group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition duration-200 hover:border-[var(--brand)]"
                  href={industry.href}
                  key={industry.title}
                >
                  {content}
                </Link>
              ) : (
                <article className="flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={industry.title}>
                  {content}
                </article>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm leading-6 text-[var(--muted)]">Explore industry-specific applications, engineering considerations and manufacturing support for your product category.</p>
            <Link className="focus-ring inline-flex shrink-0 rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href="/industries">
              Explore All Industries <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" id="why-arktech">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Arktech"
            title="Why Product Teams Work with Arktech"
            body="Arktech combines early engineering review, structured project communication, validation before production and documented tooling delivery to help overseas teams manage manufacturing risk more clearly."
          />

          <div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2 min-[1200px]:grid-cols-4 min-[1200px]:gap-6">
            {proofCards.map((proof, index) => (
              <article className="group flex h-full flex-col rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand)] sm:p-6" key={proof.title}>
                <span className="text-sm font-bold tracking-[0.08em] text-[var(--brand)]">0{index + 1}</span>
                <h3 className="mt-3 text-[22px] font-bold leading-7 text-[var(--brand-dark)]">{proof.title}</h3>
                <p className="mt-3 text-[15px] font-semibold leading-6 text-[var(--brand-dark)]">{proof.outcome}</p>
                <p className="mt-3 flex-1 text-[15px] leading-6 text-[var(--muted)]">{proof.body}</p>
                <Link className="focus-ring mt-5 inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={proof.href}>
                  {proof.link} <span className="ml-2 transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] min-[1200px]:grid-cols-4">
            {proofMetrics.map((metric) => (
              <div className="bg-[#f4f6f8] px-4 py-5 sm:px-5" key={metric.label}>
                <dt className="text-lg font-bold leading-6 text-[var(--brand-dark)] sm:text-xl">{metric.value}</dt>
                <dd className="mt-1 text-sm leading-5 text-[var(--muted)]">{metric.label}</dd>
              </div>
            ))}
          </dl>

          <aside className="mt-5 grid gap-5 rounded-sm border border-[var(--line)] bg-[#f4f6f8] p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center" aria-label="Project review request">
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Have a project ready for review?</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base">Send us your CAD files, drawings and project requirements for engineering review and quotation planning.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review <span className="ml-2" aria-hidden="true">→</span></Link>
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Manufacturing Quote <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,56fr)_minmax(320px,44fr)] lg:items-center lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Start Your Project</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Start Your Tooling or Manufacturing Project</h2>
            <p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Send us your CAD files, drawings, material requirements, expected volumes and delivery region. Our engineering team will review your project and recommend the appropriate tooling, molding or manufacturing path.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[440px] lg:justify-self-end">
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Request Manufacturing Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
