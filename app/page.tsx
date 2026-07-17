import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Injection Mold Manufacturer | Export Tooling Partner | Arktech Mold" },
  description:
    "Arktech Mold provides export injection molds, DFM engineering support, precision tooling and plastic injection molding solutions for global OEMs and injection molding companies.",
  keywords: [
    "injection mold manufacturer",
    "export tooling partner",
    "plastic injection molding",
    "OEM manufacturing partner"
  ],
  alternates: { canonical: "https://www.arktech-group.com" },
  openGraph: {
    title: "Injection Mold Manufacturer | Export Tooling Partner | Arktech Mold",
    description:
      "Arktech Mold provides export injection molds, DFM engineering support, precision tooling and plastic injection molding solutions for global OEMs and injection molding companies.",
    url: "https://www.arktech-group.com",
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
    body: "Advanced tooling solutions for complex plastic parts requiring tight tolerances, multiple actions and stable production performance.",
    image: "/images/mold-types/hot-runner-molds.webp",
    alt: "Complex precision injection mold with multiple cavities and tooling actions",
    href: "/injection-molds/complex-injection-molds"
  },
  {
    title: "Multi-Cavity Injection Molds",
    body: "High-efficiency tooling solutions for mass production with optimized cavity layouts, stable cycle times and consistent part quality.",
    image: "/images/mold-types/multi-cavity-injection-molds.png",
    alt: "Multi-cavity injection molds for consistent high-volume plastic production",
    href: "/injection-molds/multi-cavity-molds"
  },
  {
    title: "Insert Molding Tools",
    body: "Integrated tooling solutions combining plastic components with metal inserts and functional components.",
    image: "/images/mold-types/insert-molding-tools.png",
    alt: "Insert molding tools for plastic parts with metal inserts",
    href: "/injection-molds/insert-molding"
  },
  {
    title: "Unscrewing Molds",
    body: "Advanced mold solutions for threaded components using rotating cores and automated release mechanisms.",
    image: "/images/mold-types/unscrewing-molds.png",
    alt: "Unscrewing injection mold with rotating core mechanism for threaded plastic parts",
    href: "/injection-molds/unscrewing-molds"
  },
  {
    title: "Two-Shot / 2K Injection Molds",
    body: "Multi-material and multi-color injection tooling for complex products requiring combined materials and functional designs.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.png",
    alt: "Two-shot 2K injection mold for multi-material and multi-color plastic parts",
    href: "/injection-molds/2k-molds"
  },
  {
    title: "Prototype Injection Molds",
    body: "Cost-effective tooling solutions for product validation, engineering trials and early-stage production testing.",
    image: "/images/mold-types/prototype-injection-mold.png",
    alt: "Prototype injection mold and molded part for engineering validation and bridge tooling",
    href: "/injection-molds/prototype-molds"
  }
];

const engineeringCapabilities = [
  {
    title: "Co-design Support",
    body: "Supporting customers during product development with design optimization, material considerations and manufacturing feasibility review."
  },
  {
    title: "DFM Analysis",
    body: "Professional DFM review to identify molding risks, optimize part design and improve tooling reliability before mold manufacturing."
  }
];

const reasons = [
  {
    title: "Co-design Support",
    body: "Our engineers review product designs before tooling to identify molding risks and optimization opportunities."
  },
  {
    title: "Export Tooling Experience",
    body: "Supporting international customers with professional communication, documentation and global shipping experience."
  },
  {
    title: "Complete Mold Manufacturing Control",
    body: "From precision machining and EDM to polishing, assembly and trial testing, we control the complete tooling process."
  },
  {
    title: "Production Support",
    body: "Beyond mold making, we support injection molding and production ramp-up."
  }
];

const supportingCapabilities = [
  {
    title: "CNC Machining",
    body: "Precision machining support for mold components, prototypes and production parts.",
    image: "/images/capabilities/cnc-machining.jpg",
    alt: "Precision CNC machining for aluminum and stainless steel components",
    href: "/services/cnc-metal-parts"
  },
  {
    title: "Rapid Prototyping",
    body: "Fast validation parts before injection mold production.",
    image: "/images/capabilities/rapid-prototyping-v3.png",
    alt: "Rapid prototype parts for product design validation",
    href: "/services/rapid-prototyping"
  },
  {
    title: "Assembly & Secondary Operations",
    body: "Product finishing, assembly and production support for ready-to-use products.",
    image: "/images/capabilities/assembly-secondary-operations.webp",
    alt: "Electronics component assembly and secondary production operations",
    href: "/services/assembly-secondary-operations"
  },
  {
    title: "Die Casting",
    body: "Aluminum and zinc component manufacturing for specific product requirements.",
    image: "/images/seo/die-casting-cnc-metal-parts.png",
    alt: "Aluminum and zinc die casting components for industrial products",
    href: "/services/die-casting-mold"
  }
];

const injectionProductionPoints = [
  {
    title: "Mold Trial & Validation",
    body: "Mold trial support, process adjustment and sample validation before production release."
  },
  {
    title: "Low Volume Production",
    body: "Flexible low volume injection molding for product validation, pilot runs and early market launch."
  },
  {
    title: "Bridge Production",
    body: "Bridge production support between prototype validation and full-scale manufacturing."
  },
  {
    title: "Mass Production",
    body: "Stable mass production with optimized processes, quality control and consistent part performance."
  },
  {
    title: "Quality Control & Production Management",
    body: "Production quality control, inspection documentation and delivery management for global customers."
  }
];

const trustProof = [
  "15+ Years Export Manufacturing Experience",
  "ISO 9001 Quality Management",
  "DFM Engineering Support",
  "Mold Trial Validation",
  "Inspection Documentation",
  "Export Tooling Experience"
];

const industries = [
  {
    title: "Smart Home",
    image: "/images/industries/home-appliance-smart-home-components.jpg",
    alt: "Injection molded housings and components for smart home products",
    href: "/industries/smart-home"
  },
  {
    title: "Robotics",
    image: "/images/industries/robotics-injection-mold-components.jpg",
    alt: "Custom injection molded housings and precision components for robotics applications",
    href: "/industries/robotics"
  },
  {
    title: "Medical Devices",
    image: "/images/industries/medical-healthcare-device-parts.jpg",
    alt: "Precision plastic housings for medical devices",
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
    image: "/images/capabilities/injection-mold-manufacturing.jpg",
    alt: "Industrial plastic components, technical molded parts and injection molds",
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
  "RFQ & CAD Review",
  "DFM Feedback",
  "Mold Design Approval",
  "Steel Cutting",
  "Precision Machining",
  "Mold Assembly",
  "T1 Trial",
  "Export Delivery"
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arktech Mold",
    url: "https://www.arktech-group.com",
    logo: "https://www.arktech-group.com/images/arktech-mold-logo.png",
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
          src="/images/seo/arktech-tooling-manufacturing-hero.png"
          alt="Export injection mold with molded plastic parts and precision tooling components"
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,31,51,0.98)_0%,rgba(11,31,51,0.90)_46%,rgba(11,31,51,0.30)_100%)]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-[min(1240px,calc(100%-32px))] items-center py-20 lg:min-h-[720px] lg:py-28">
          <div className="max-w-[850px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f1c5c5] sm:text-sm">EXPORT INJECTION MOLD MANUFACTURER</p>
            <h1 className="mt-5 text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-[3.2rem] lg:text-[4rem]">
              Export Tooling &amp; Manufacturing Partner for Global OEMs and Injection Molding Companies
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              From product co-design and DFM analysis to precision mold manufacturing and injection production, Arktech Mold helps global OEMs and injection molding companies develop reliable plastic parts with high-quality tooling solutions and production support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Start Your RFQ
              </Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/80 bg-white/10 px-6 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--brand-dark)]" href="#capabilities">
                Explore Injection Mold Capabilities
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
              <h2 id="concept-heading" className="section-heading">From Product Concept to Production</h2>
              <div className="mt-6 space-y-4 leading-7 text-[var(--muted)]">
                <p>A successful plastic part starts with the right engineering decisions.</p>
                <p>Our team supports customers from early product review, mold design optimization and DFM analysis through mold manufacturing, trial validation and final production support.</p>
                <p>We help customers reduce tooling risks, improve mold reliability and achieve faster production launch.</p>
              </div>
            </div>
            <ol className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3" aria-label="Product development process">
              {developmentSteps.map((step, index) => (
                <li className="group min-h-36 bg-[var(--surface-soft)] p-5 transition hover:bg-white" key={step}>
                  <span className="text-sm font-bold tracking-[0.14em] text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-8 font-bold text-[var(--brand-dark)]">{step}</p>
                  <span aria-hidden="true" className="mt-3 block text-xl text-[var(--brand)]">→</span>
                </li>
              ))}
            </ol>
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
                src="/images/capabilities/co-design-dfm-engineering.webp"
                alt="Product design support, co-design and DFM engineering review for injection molding projects"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">PRODUCT SUPPORT</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]">Engineering Support</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {engineeringCapabilities.map((capability) => (
                  <div className="border-l-2 border-[var(--brand)] pl-4" key={capability.title}>
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
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image src={capability.image} alt={capability.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-contain p-3 transition duration-500 group-hover:scale-[1.035]" />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-6">
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">{capability.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{capability.body}</p>
                  <Link className="focus-ring mt-auto inline-flex items-center gap-2 pt-5 font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={capability.href}>
                    View capability <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <article className="mt-10 grid overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-72 bg-[var(--brand-dark)]">
              <Image
                src="/images/capabilities/plastic-injection-molding-production.png"
                alt="Plastic injection molding production equipment manufacturing molded parts"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">PRODUCTION CAPABILITY</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]">Plastic Injection Molding Production</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">From mold trial validation to low volume, bridge and mass production, Arktech provides plastic injection molding solutions with process optimization, quality control and reliable delivery support for global OEM products.</p>
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
              <Link className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/services/plastic-injection-molding">
                Explore Plastic Injection Molding
              </Link>
            </div>
          </article>
          <div className="mt-10 border-t border-[var(--line)] pt-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">ADDITIONAL MANUFACTURING SUPPORT BY ARKTECH GROUP</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]">Beyond tooling and injection molding, Arktech Group provides additional manufacturing resources to support complete product programs.</h3>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {supportingCapabilities.map((capability) => (
                <Link className="group rounded-sm border border-[var(--line)] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-sm" href={capability.href} key={capability.title}>
                  <h4 className="font-bold text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{capability.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{capability.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-white sm:py-20 lg:py-24" aria-labelledby="why-heading">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f1c5c5]">A RELIABLE EXPORT TOOLING PARTNER</p>
          <h2 id="why-heading" className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">Why Choose Arktech Mold</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <article className="min-h-64 bg-[#102d4b] p-6 lg:p-7" key={reason.title}>
                <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 text-sm font-bold text-[#f1c5c5]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-xl font-bold text-white">{reason.title}</h3>
                <p className="mt-4 leading-7 text-white/70">{reason.body}</p>
              </article>
            ))}
          </div>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3" aria-label="Arktech manufacturing credibility">
            {trustProof.map((item) => (
              <li className="flex min-h-16 items-center gap-3 bg-[#102d4b] px-5 py-3 text-sm font-semibold text-white/90" key={item}>
                <span aria-hidden="true" className="text-[var(--brand)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="industries-heading">
        <div className="container-page">
          <p className="section-eyebrow">APPLICATION EXPERIENCE</p>
          <h2 id="industries-heading" className="section-heading">Industries We Serve</h2>
          <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">Injection mold and plastic part development support for innovative products across demanding global markets.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="border-l-4 border-[var(--brand)] bg-[var(--surface-soft)] p-5">
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">OEM Product Companies</h3>
              <p className="mt-2 leading-7 text-[var(--muted)]">Supporting OEM product companies from product development, co-design, DFM review, tooling and production support.</p>
            </article>
            <article className="border-l-4 border-[var(--brand)] bg-[var(--surface-soft)] p-5">
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">EMS Manufacturing Companies</h3>
              <p className="mt-2 leading-7 text-[var(--muted)]">Supporting EMS partners with tooling, injection molding, secondary processing and assembly solutions.</p>
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
          <h2 id="process-heading" className="section-heading">Our Mold Manufacturing Process</h2>
          <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">A clear, documented workflow keeps engineering decisions, tool build progress and export delivery aligned.</p>
          <ol className="mt-10 grid overflow-hidden rounded-sm border border-[var(--line)] bg-white sm:grid-cols-2 lg:grid-cols-4" aria-label="Mold manufacturing process">
            {manufacturingSteps.map((step, index) => (
              <li className="relative min-h-40 border-b border-[var(--line)] p-5 last:border-b-0 sm:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-child(n+5)]:border-b-0" key={step}>
                <span className="text-sm font-bold tracking-[0.14em] text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-9 max-w-[12rem] text-lg font-bold leading-6 text-[var(--brand-dark)]">{step}</p>
                {index < manufacturingSteps.length - 1 ? <span aria-hidden="true" className="absolute bottom-5 right-5 text-xl text-[var(--brand)]">→</span> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--industrial-blue)] py-16 text-white sm:py-20" aria-label="Request an injection mold quotation">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 opacity-20 lg:block">
          <Image src="/images/capabilities/plastic-injection-molding.webp" alt="" fill sizes="40vw" className="object-cover" />
        </div>
        <div className="relative container-page">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-4xl">Ready to Develop Your Next Injection Mold Project?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Send us your 3D CAD files and project requirements. Our engineering team will review your design and provide professional tooling feedback.</p>
          <ol className="mt-6 flex max-w-2xl flex-col gap-2 text-sm font-semibold text-white/90 sm:flex-row sm:items-center" aria-label="RFQ engineering review steps">
            {["Upload CAD Data", "DFM Review", "Tooling Quotation"].map((step, index) => (
              <li className="flex items-center gap-2" key={step}>
                <span className="inline-flex size-7 items-center justify-center rounded-full border border-white/30 text-xs">{index + 1}</span>
                {step}
                {index < 2 ? <span aria-hidden="true" className="hidden px-2 text-white/40 sm:inline">→</span> : null}
              </li>
            ))}
          </ol>
          <Link className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-7 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[var(--brand-hover)]" href="/request-a-quote">
            Get Mold Quotation
          </Link>
        </div>
      </section>
    </div>
  );
}
