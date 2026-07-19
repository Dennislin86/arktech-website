import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box, Cog, FileSearch, FlaskConical, PackageCheck, PenTool, SearchCheck, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Injection Mold Manufacturer China | Export Tooling Partner | Arktech Mold" },
  description:
    "Arktech Mold is an export injection mold manufacturer in China, providing custom injection molds, DFM engineering support, precision tooling and plastic injection molding solutions for global OEM customers.",
  keywords: [
    "injection mold manufacturer",
    "injection mold manufacturer China",
    "China injection mold supplier",
    "custom injection molds",
    "DFM engineering",
    "export tooling partner",
    "plastic injection molding",
    "OEM customers"
  ],
  alternates: { canonical: "https://www.arktechmold.com" },
  openGraph: {
    title: "Injection Mold Manufacturer China | Export Tooling Partner | Arktech Mold",
    description:
      "Arktech Mold is an export injection mold manufacturer in China, providing custom injection molds, DFM engineering support, precision tooling and plastic injection molding solutions for global OEM customers.",
    url: "https://www.arktechmold.com",
    type: "website"
  }
};

const developmentSteps = [
  "Co-design",
  "DFM Review",
  "Mold Design",
  "Tool Manufacturing",
  "T1 Trial",
  "Injection Production"
];

const capabilities = [
  {
    title: "Complex & Precision Injection Molds",
    body: "Advanced tooling for complex parts requiring tight tolerances and multiple actions.",
    image: "/images/mold-types/complex-injection-molds.JPG",
    alt: "Complex injection molds manufactured for precision plastic parts",
    href: "/injection-molds/complex-injection-molds"
  },
  {
    title: "Multi-Cavity Injection Molds",
    body: "High-efficiency molds for mass production with stable cycles and quality.",
    image: "/images/mold-types/multi-cavity-injection-molds.png",
    alt: "Multi-cavity injection molds for high volume plastic production",
    href: "/injection-molds/multi-cavity-molds"
  },
  {
    title: "Insert Molding Tools",
    body: "Tooling solutions combining plastic parts with metal inserts.",
    image: "/images/mold-types/insert-molding-tools.png",
    alt: "Insert molding tools combining plastic parts with metal inserts",
    href: "/injection-molds/insert-molding"
  },
  {
    title: "Unscrewing Molds",
    body: "Molds for threaded components using rotating cores and automated release.",
    image: "/images/mold-types/unscrewing-molds.png",
    alt: "Unscrewing injection molds for threaded plastic components",
    href: "/injection-molds/unscrewing-molds"
  },
  {
    title: "Two-Shot / 2K Injection Molds",
    body: "Multi-material tooling for complex products with combined functions.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.png",
    alt: "Two-shot 2K injection molds for multi-material plastic products",
    href: "/injection-molds/2k-molds"
  },
  {
    title: "Prototype Injection Molds",
    body: "Prototype tooling for validation, trials and early production.",
    image: "/images/mold-types/prototype-injection-mold.png",
    alt: "Prototype injection molds for product validation and engineering trials",
    href: "/injection-molds/prototype-molds"
  }
];

const engineeringCapabilities = [
  {
    title: "Co-design Support",
    body: "Product design optimization and manufacturing feasibility review before tooling development."
  },
  {
    title: "DFM Analysis",
    body: "Identify molding risks, improve part design and optimize tooling reliability before mold manufacturing."
  },
  {
    title: "Moldflow Analysis",
    body: "Flow simulation, filling analysis, cooling evaluation and warpage prediction for better mold performance."
  },
  {
    title: "Mold Design",
    body: "Professional mold structure design including parting line, gating concept and tooling solutions."
  },
  {
    title: "Tooling Optimization",
    body: "Engineering improvements for cycle time, mold reliability and production stability."
  }
];

const reasons = [
  {
    icon: "01",
    title: "Engineering-Led Tooling Development",
    body: "Our engineers support product review, DFM analysis and mold design optimization to reduce tooling risks before manufacturing."
  },
  {
    icon: "02",
    title: "Global Export Tooling Experience",
    body: "Supporting OEM customers worldwide with technical communication, tooling documentation and international project management."
  },
  {
    icon: "03",
    title: "Complete Tooling Process Control",
    body: "From precision machining and EDM to polishing, mold assembly and trial validation, we control the complete injection mold manufacturing process."
  },
  {
    icon: "04",
    title: "Injection Production Support",
    body: "Supporting injection molding production, process optimization, quality control and production ramp-up after mold approval."
  }
];

const supportingCapabilities = [
  {
    title: "CNC Machining",
    body: "Precision CNC machining support for mold components, prototypes and production parts.",
    image: "/images/capabilities/cnc-machining.jpg",
    alt: "Precision CNC machining for aluminum and stainless steel components",
    href: "/services/cnc-metal-parts"
  },
  {
    title: "Rapid Prototyping",
    body: "Fast prototype solutions for design validation before injection mold manufacturing and production release.",
    image: "/images/capabilities/rapid-prototyping-v3.png",
    alt: "Rapid prototype parts for product design validation",
    href: "/services/rapid-prototyping"
  },
  {
    title: "Die Casting",
    body: "Aluminum and zinc die casting solutions for durable industrial components and product requirements.",
    image: "/images/seo/die-casting-cnc-metal-parts.png",
    alt: "Aluminum and zinc die casting components for industrial products",
    href: "/services/die-casting-mold"
  },
  {
    title: "Assembly & Secondary Operations",
    body: "Product finishing, assembly and secondary processing support for ready-to-use products.",
    image: "/images/capabilities/assembly-secondary-operations.webp",
    alt: "Electronics component assembly and secondary production operations",
    href: "/services/assembly-secondary-operations"
  }
];

const injectionProductionPoints = [
  {
    title: "Mold Trial & Validation",
    body: "Mold trial support, process adjustment and sample validation before production release."
  },
  {
    title: "Low Volume Production",
    body: "Flexible injection molding for product validation, pilot runs and early market launch."
  },
  {
    title: "Bridge Production",
    body: "Production support between prototype validation and full-scale manufacturing."
  },
  {
    title: "Mass Production",
    body: "Stable mass production with optimized processes and consistent part quality."
  },
  {
    title: "Quality Control & Production Management",
    body: "Quality control, inspection documentation and production management for global OEM requirements."
  }
];

const injectionProductionHighlights = [
  {
    value: "25-480T",
    label: "Injection Molding Machines"
  },
  {
    value: "<2g to >2.5kg",
    label: "Part Weight Range"
  },
  {
    value: "Prototype to Mass Production",
    label: "Production Flexibility"
  },
  {
    value: "Engineering & Commodity Materials",
    label: "Material Capability"
  }
];

const trustProof = [
  {
    icon: "✓",
    value: "150+",
    label: "Mold Projects Annually"
  },
  {
    icon: "✓",
    value: "15+",
    label: "Years Export Tooling Experience"
  },
  {
    icon: "✓",
    value: "ISO 9001",
    label: "Quality Management"
  },
  {
    icon: "✓",
    value: "Global OEM & EMS",
    label: "Customer Support"
  },
  {
    icon: "✓",
    value: "DFM Engineering",
    label: "Moldflow & Design Optimization"
  },
  {
    icon: "✓",
    value: "Mold Trial Validation",
    label: "Inspection Documentation"
  },
  {
    icon: "✓",
    value: "Complex Mold Capability",
    label: "Multi-Cavity, Insert & 2K Tooling"
  },
  {
    icon: "✓",
    value: "Quality Documentation",
    label: "Inspection Reports & Production Records"
  }
];

const industries = [
  {
    title: "Smart Home & IoT Devices",
    image: "/images/industries/home-appliance-smart-home-components.jpg",
    alt: "Injection molded housings and plastic components for smart home and IoT devices",
    href: "/industries/smart-home"
  },
  {
    title: "Robotics & Automation",
    image: "/images/industries/robotics-injection-mold-components.jpg",
    alt: "Injection molded housings and precision plastic components for robotics and automation",
    href: "/industries/robotics"
  },
  {
    title: "Medical & Healthcare Devices",
    image: "/images/industries/medical-healthcare-device-parts.jpg",
    alt: "Precision injection molded plastic housings for medical and healthcare devices",
    href: "/industries/medical-devices"
  },
  {
    title: "Consumer Electronics",
    image: "/images/industries/consumer-electronics-enclosures.jpg",
    alt: "Injection molded enclosures for consumer electronics",
    href: "/industries/consumer-electronics"
  },
  {
    title: "Automotive Interior",
    image: "/images/case-studies/two-shot-light-cover.webp",
    alt: "Two-shot injection mold and molded light-cover components for automotive interiors",
    href: "/industries/automotive-interior"
  },
  {
    title: "Industrial Products",
    image: "/images/capabilities/plastic-injection-molding.webp",
    alt: "Industrial plastic housings and technical molded components under quality inspection",
    href: "/industries/industrial-products"
  },
  {
    title: "EMS Manufacturing",
    image: "/images/capabilities/assembly-secondary-operations.webp",
    alt: "Electronics assembly line supporting EMS manufacturing programs",
    href: "/industries/ems-manufacturing"
  }
];

const manufacturingSteps = [
  {
    icon: FileSearch,
    title: "RFQ & CAD Review",
    body: "Review CAD data, requirements and tooling feasibility before quotation."
  },
  {
    icon: SearchCheck,
    title: "DFM Feedback & Moldflow Analysis",
    body: "Use DFM and Moldflow analysis to evaluate filling, cooling and warpage risks."
  },
  {
    icon: PenTool,
    title: "Mold Design Approval",
    body: "Approve mold structure, parting lines, gating and tooling solutions."
  },
  {
    icon: Box,
    title: "Steel Cutting & Tool Preparation",
    body: "Prepare approved mold steel and tooling components for manufacturing."
  },
  {
    icon: Cog,
    title: "Precision Machining",
    body: "Precision CNC machining and EDM for accurate mold components."
  },
  {
    icon: Wrench,
    title: "Mold Assembly & Fitting Adjustment",
    body: "Assemble, fit and adjust mold components before trial."
  },
  {
    icon: FlaskConical,
    title: "Mold Trial, Testing & Optimization",
    body: "Trial, test and optimize molding parameters, part quality and performance."
  },
  {
    icon: PackageCheck,
    title: "Final Inspection & Export Delivery",
    body: "Complete final inspection, documentation, packing and export delivery."
  }
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ManufacturingBusiness"],
    name: "Arktech Mold",
    url: "https://www.arktechmold.com",
    logo: "https://www.arktechmold.com/images/arktech-mold-logo.png",
    description:
      "Export tooling and plastic manufacturing partner supporting global OEMs with DFM engineering, injection molds and production solutions.",
    areaServed: "Worldwide",
    knowsAbout: [
      "Complex injection molds",
      "Precision injection molds",
      "Multi-cavity injection molds",
      "Insert molding",
      "Overmolding",
      "Unscrewing molds",
      "Two-shot injection molding",
      "Prototype injection molds",
      "DFM analysis",
      "Moldflow analysis",
      "Plastic injection molding",
      "Export tooling"
    ]
  };

  return (
    <div className="flex flex-col">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />

      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[var(--brand-dark)] lg:min-h-[720px]">
        <Image
          src="/images/hero/export-injection-mold-manufacturing-hero.webp"
          alt="Export injection mold with molded plastic parts and precision tooling components"
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,51,0.94)_0%,rgba(11,31,51,0.84)_46%,rgba(11,31,51,0.26)_100%)]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-[min(1240px,calc(100%-32px))] items-center py-20 lg:min-h-[720px]">
          <div className="max-w-[850px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f1c5c5] sm:text-sm">EXPORT TOOLING &amp; INJECTION MOLD MANUFACTURER</p>
            <h1 className="mt-5 text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[3.2rem] lg:text-[3.5rem]">
              Export Tooling &amp; Manufacturing Partner for Global OEMs and Injection Molding Companies
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              From product co-design and DFM analysis to precision mold manufacturing and injection production, Arktech Mold helps global OEMs develop reliable plastic parts with professional tooling and production support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Start Your RFQ
              </Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/80 bg-white/10 px-6 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--brand-dark)]" href="#capabilities">
                Explore Injection Molds
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-sm border border-white/20 bg-white/20">
              {["DFM Engineering", "Export Tooling", "Production Support"].map((item) => (
                <p className="flex min-h-16 items-center justify-center bg-[rgba(11,31,51,0.78)] px-3 text-center text-xs font-semibold leading-5 text-white/90 sm:text-sm" key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="concept-heading">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="section-eyebrow">ENGINEERING-LED DEVELOPMENT</p>
              <h2 id="concept-heading" className="section-heading">From Product Design to Injection Mold Production</h2>
              <div className="mt-6 space-y-4 leading-7 text-[var(--muted)]">
                <p>Successful plastic products start with the right engineering decisions before tooling begins.</p>
                <p>Our engineering team supports customers from product review, DFM analysis and mold design optimization through injection mold manufacturing, trial validation and plastic injection molding production.</p>
                <p>We help customers reduce tooling risks, improve mold reliability and achieve faster production launch with a structured engineering workflow.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
              <div className="relative aspect-[16/9] min-h-56 bg-white">
                <Image
                  src="/images/capabilities/product-design-injection-mold-production.jpg"
                  alt="Product design, engineering, injection molding tool development and production workflow"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-contain object-center"
                />
              </div>
              <ol className="grid grid-cols-2 gap-px border-t border-[var(--line)] bg-[var(--line)] sm:grid-cols-3" aria-label="Product development process">
                {developmentSteps.map((step, index) => (
                  <li className="group min-h-20 bg-[var(--surface-soft)] p-3 transition hover:bg-white sm:min-h-24 sm:p-4" key={step}>
                    <span className="text-xs font-bold tracking-[0.14em] text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 font-bold leading-tight text-[var(--brand-dark)]">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20 lg:py-24" id="capabilities" aria-labelledby="capabilities-heading">
        <div className="container-page">
          <p className="section-eyebrow">MANUFACTURING CAPABILITIES</p>
          <h2 id="capabilities-heading" className="section-heading max-w-4xl">Injection Mold Manufacturing &amp; Plastic Injection Molding Capabilities</h2>
          <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">From product design support and DFM engineering to export tooling and plastic injection molding production, Arktech helps global OEMs develop reliable plastic products with complete manufacturing support.</p>
          <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">As an OEM manufacturing partner, Arktech also provides coordinated tooling and EMS manufacturing support for molded-product programs.</p>
          <article className="mt-10 grid overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-72 bg-[var(--brand-dark)]">
              <Image
                src="/images/engineering/injection-mold-engineering-dfm-analysis.webp"
                alt="Injection mold engineering support with DFM analysis, Moldflow simulation and mold design review"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">TOOLING ENGINEERING SUPPORT</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]">Injection Mold Engineering Support</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">From DFM analysis and Moldflow simulation to mold design optimization, Arktech provides engineering support to reduce tooling risks and improve injection mold performance before manufacturing.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {engineeringCapabilities.map((capability, index) => (
                  <div className="border-l-2 border-[var(--brand)] pl-4" key={capability.title}>
                    <span className="text-xs font-bold tracking-[0.14em] text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                    <h4 className="font-bold text-[var(--brand-dark)]">{capability.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{capability.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <div className="mt-10">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">CORE TOOLING</p>
            <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]">Injection Mold Manufacturing</h3>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md" key={capability.title}>
                <div className="relative h-64 overflow-hidden bg-white sm:h-72 md:h-72 lg:h-80 xl:h-96">
                  <Image src={capability.image} alt={capability.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-contain p-2 transition duration-500 group-hover:scale-[1.035]" />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-5">
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{capability.body}</p>
                  <Link className="focus-ring mt-auto inline-flex items-center gap-2 pt-4 font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={capability.href}>
                    View capability <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <article className="mt-10 grid overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative aspect-video min-h-0 overflow-hidden bg-[var(--brand-dark)] lg:aspect-auto lg:min-h-72">
              <video
                aria-label="Plastic injection molding production equipment manufacturing molded parts"
                autoPlay
                className="absolute inset-0 h-full w-full object-cover"
                loop
                muted
                playsInline
                poster="/images/capabilities/plastic-injection-molding-production.png"
                preload="metadata"
              >
                <source src="/videos/injection-molding-production-homepage.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">INJECTION MOLDING PRODUCTION</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]">Plastic Injection Molding Production</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">From mold trial validation to low volume and mass production, Arktech provides flexible plastic injection molding solutions for global OEMs, supporting parts from small precision components to large structural housings.</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4" aria-label="Plastic injection molding production capabilities">
                {injectionProductionHighlights.map((highlight) => (
                  <li className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-3" key={highlight.label}>
                    <strong className="block text-sm leading-5 text-[var(--brand-dark)]">{highlight.value}</strong>
                    <span className="mt-1 block text-xs leading-5 text-[var(--muted)]">{highlight.label}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-5 grid gap-4 text-sm text-[var(--brand-dark)] sm:grid-cols-2" aria-label="Plastic injection molding production journey">
                {injectionProductionPoints.map((point) => (
                  <li className="flex items-start gap-2" key={point.title}>
                    <span aria-hidden="true" className="font-bold text-[var(--brand)]">✓</span>
                    <span>
                      <strong className="block">{point.title}</strong>
                      <span className="mt-1 block leading-6 text-[var(--muted)]">{point.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">Supporting engineering and commodity materials including ABS, PC, PA, POM, PP and customer-specified materials.</p>
              <Link className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/services/plastic-injection-molding">
                Explore Plastic Injection Molding
              </Link>
            </div>
          </article>
          <div className="mt-10 border-t border-[var(--line)] pt-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">ARKTECH GROUP RESOURCES</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]">Additional Manufacturing Support by Arktech Group</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">Beyond injection mold manufacturing and plastic injection molding, Arktech Group provides additional manufacturing resources to support complete product programs when required.</p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {supportingCapabilities.map((capability) => (
                <Link className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-sm" href={capability.href} key={capability.title}>
                  <div className="relative h-40 overflow-hidden bg-[var(--surface-soft)] sm:h-32">
                    <Image src={capability.image} alt={capability.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-center transition duration-300 group-hover:scale-[1.025]" />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-[var(--line)] p-4">
                    <h4 className="font-bold text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{capability.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{capability.body}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:items-center">
              <span className="font-semibold text-[var(--brand-dark)]">Need additional manufacturing resources?</span>
              <a className="focus-ring font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="https://www.arktech-group.com">Explore Arktech Group capabilities →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-white sm:py-20 lg:py-24" aria-labelledby="why-heading">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f1c5c5]">A TRUSTED EXPORT INJECTION MOLD MANUFACTURER</p>
          <h2 id="why-heading" className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Why Choose Arktech Mold</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article className="min-h-56 bg-[#102d4b] p-5 lg:p-6" key={reason.title}>
                <span aria-hidden="true" className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-xl text-[#f1c5c5]">{reason.icon}</span>
                <h3 className="mt-5 text-xl font-bold text-white">{reason.title}</h3>
                <p className="mt-3 leading-6 text-white/70">{reason.body}</p>
              </article>
            ))}
          </div>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4" aria-label="Arktech manufacturing credibility">
            {trustProof.map((item) => (
              <li className="flex min-h-32 flex-col items-start justify-center bg-[#102d4b] px-5 py-4" key={item.label}>
                <span aria-hidden="true" className="text-lg text-[#f1c5c5]">{item.icon}</span>
                <strong className="mt-2 text-xl font-semibold leading-6 text-white">{item.value}</strong>
                <span className="mt-1 text-sm font-semibold leading-5 text-white/70">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="industries-heading">
        <div className="container-page">
          <p className="section-eyebrow">APPLICATION EXPERIENCE</p>
          <h2 id="industries-heading" className="section-heading">Industries We Serve</h2>
          <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">As an OEM manufacturing partner, Arktech supports OEMs, EMS providers and injection molding companies with injection mold manufacturing and plastic component production for demanding global industries.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="border-l-4 border-[var(--brand)] bg-[var(--surface-soft)] p-5">
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">OEM Product Companies</h3>
              <p className="mt-2 leading-7 text-[var(--muted)]">Supporting OEM product companies from co-design and DFM review to injection mold manufacturing and plastic production support.</p>
            </article>
            <article className="border-l-4 border-[var(--brand)] bg-[var(--surface-soft)] p-5">
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">EMS Manufacturing Companies</h3>
              <p className="mt-2 leading-7 text-[var(--muted)]">Supporting EMS partners with tooling, injection molding, secondary processing and production solutions.</p>
            </article>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Link className={`group relative min-h-72 overflow-hidden rounded-sm bg-[var(--brand-dark)] ${index === 0 ? "lg:col-span-2" : ""}`} href={industry.href} key={industry.title}>
                <Image src={industry.image} alt={industry.alt} fill sizes={index === 0 ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"} className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(11,31,51,0.92)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  <span aria-hidden="true" className="text-xl text-white">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20 lg:py-24" aria-labelledby="process-heading">
        <div className="container-page">
          <p className="section-eyebrow">CONTROLLED TOOLING EXECUTION</p>
          <h2 id="process-heading" className="section-heading">Injection Mold Manufacturing Process</h2>
          <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">From CAD review and DFM analysis to mold validation and export delivery, Arktech follows a controlled injection mold manufacturing process to ensure quality, reliability and production readiness.</p>
          <ol className="mt-10 grid overflow-hidden rounded-sm border border-[var(--line)] bg-white sm:grid-cols-2 lg:grid-cols-4" aria-label="Injection mold manufacturing process">
            {manufacturingSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <li className="relative min-h-36 border-b border-[var(--line)] p-4 last:border-b-0 sm:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(n+5)]:border-b-0" key={step.title}>
                  <div className="flex items-center gap-3">
                    <StepIcon aria-hidden="true" className="size-5 text-[var(--brand)]" strokeWidth={1.75} />
                    <span className="text-xs font-bold tracking-[0.14em] text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-6 text-[var(--brand-dark)]">{step.title}</h3>
                  <p className="mt-2 pb-6 text-sm leading-5 text-[var(--muted)]">{step.body}</p>
                  {index < manufacturingSteps.length - 1 ? <span aria-hidden="true" className="absolute bottom-4 right-4 text-lg text-[var(--brand)]">→</span> : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#123B32] text-white" aria-label="Request an injection mold quotation">
        <div className="relative z-10 container-page py-16 sm:py-20">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-white lg:max-w-[56%] sm:text-4xl">Ready to Develop Your Next Injection Mold Project?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80 lg:max-w-[56%]">Send your 3D CAD files and project requirements. Our tooling engineers will review your design and provide DFM feedback, mold recommendations and quotation support.</p>
          <ol className="mt-6 flex max-w-2xl flex-col gap-2 text-sm font-semibold text-white/90 sm:flex-row sm:items-center lg:max-w-[56%]" aria-label="RFQ engineering review steps">
            {["Upload CAD Files", "DFM Review", "Mold Quotation"].map((step, index) => (
              <li className="flex items-center gap-2" key={step}>
                <span className="inline-flex size-7 items-center justify-center rounded-full border border-white/30 text-xs">{index + 1}</span>
                {step}
                {index < 2 ? <span aria-hidden="true" className="hidden px-2 text-white/40 sm:inline">→</span> : null}
              </li>
            ))}
          </ol>
          <Link className="focus-ring mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[var(--brand)] px-7 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--brand-hover)] sm:w-auto" href="/request-a-quote">
            Submit CAD for Mold Review
          </Link>
        </div>
        <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-2/5">
          <Image src="/images/capabilities/plastic-injection-molding.webp" alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover brightness-110 saturate-[0.85]" />
          <div className="absolute inset-0 bg-[#123B32]/25" />
        </div>
      </section>
    </div>
  );
}
