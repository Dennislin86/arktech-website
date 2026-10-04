import Image from "next/image";
import Link from "next/link";
import { InjectionMoldingProductionVideo } from "@/components/InjectionMoldingProductionVideo";
import { LazyAutoplayVideo } from "@/components/LazyAutoplayVideo";

const proofItems = [
  "DFM & Mold Design",
  "Export Tooling",
  "Mold Trial & Validation",
  "Plastic Injection Molding 25–550T",
  "Global Delivery"
] as const;

const buyerPaths = [
  {
    eyebrow: "Developing a new product?",
    title: "Product Companies & OEM Teams",
    body: "From product design to production-ready tooling and molded parts.",
    cta: "Mold + Production Support",
    href: "/services/plastic-injection-molding"
  },
  {
    eyebrow: "Need more tooling capacity?",
    title: "Injection Molding Companies",
    body: "Export-ready molds engineered for your machines, standards and production requirements.",
    cta: "Export Tooling Support",
    href: "/services/injection-mold-manufacturing"
  }
] as const;

const featuredProjects = [
  {
    title: "Multi-Cavity Mold for Automotive Sensor Housing",
    moldType: "Multi-Cavity Production Mold",
    features: "Glass-filled PBT · Dimensional validation",
    image: "/images/case-studies/automotive-multi-cavity-mold.webp",
    alt: "Multi-cavity injection mold and molded automotive sensor housings",
    href: "/case-studies/automotive-sensor-housing-tooling"
  },
  {
    title: "Two-Shot Tooling for Integrated Light Cover",
    moldType: "Two-Shot / 2K Mold",
    features: "First- and second-shot alignment · Visible surfaces",
    image: "/images/case-studies/two-shot-light-cover.webp",
    alt: "First-shot and second-shot injection molds with molded light cover",
    href: "/case-studies/two-shot-2k-injection-mold-tooling"
  },
  {
    title: "Unscrewing Mold for Threaded Components",
    moldType: "Motor-Driven Unscrewing Mold",
    features: "Internal thread release · Mechanical validation",
    image: "/images/case-studies/unscrewing-mold.webp",
    alt: "Motor-driven unscrewing injection mold and threaded molded components",
    href: "/case-studies/unscrewing-threaded-component-mold"
  }
] as const;

const moldCapabilities = [
  {
    title: "Precision Injection Molds",
    body: "Controlled tooling for repeatable dimensions, fit and production performance.",
    image: "/images/mold-types/Precision-Molds.png",
    alt: "Precision injection mold for controlled-dimension plastic parts",
    href: "/injection-molds#precision-injection-molds"
  },
  {
    title: "Complex Injection Molds",
    body: "Slides, lifters and coordinated side actions for demanding part geometry.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Complex injection mold with multiple side-action mechanisms",
    href: "/injection-molds#complex-injection-molds"
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
    href: "/injection-molds#family-injection-molds"
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

const industries = [
  {
    title: "Robotics & Automation",
    body: "Housings, sensor interfaces and functional molded components.",
    image: "/images/industries/robotics-automation.png",
    alt: "Robotics housings and automation components supported by injection molding",
    href: "/industries/robotics"
  },
  {
    title: "Automotive Components",
    body: "Interior, control and functional plastic components.",
    image: "/images/industries/Automotive-Components.png",
    alt: "Automotive interior and functional molded plastic components",
    href: "/industries/automotive-components"
  },
  {
    title: "Smart Home & IoT",
    body: "Connected-device housings, sensors and control enclosures.",
    image: "/images/industries/smart-device-housings.png",
    alt: "Smart home and IoT device housings and sensor enclosures",
    href: "/industries/smart-home"
  },
  {
    title: "Home Appliance",
    body: "Appliance housings, control panels and functional parts.",
    image: "/images/industries/home-appliance.png",
    alt: "Home appliance housings control panels and molded components",
    href: "/industries/home-appliance"
  },
  {
    title: "Pet Tech Products",
    body: "Smart feeders, cameras and connected pet-product housings.",
    image: "/images/industries/pet-lifestyle-product-parts.png",
    alt: "Smart pet product housings and molded plastic components",
    href: "/industries/pet-tech"
  },
  {
    title: "Consumer Electronics",
    body: "Electronic enclosures and functional molded components.",
    image: "/images/industries/consumer-electronics-enclosures.png",
    alt: "Consumer electronics enclosures and functional plastic components",
    href: "/industries/consumer-electronics"
  }
] as const;

const supportingCapabilities = [
  ["CNC Machining", "Precision machined metal and plastic components."],
  ["Die Casting", "Aluminum and zinc components with finishing support."],
  ["Sheet Metal Fabrication", "Cut, bent, welded and finished sheet components."],
  ["Rapid Prototyping", "Physical parts for early engineering and design review."],
  ["Vacuum Casting", "Short-run prototype parts for validation and bridge needs."],
  ["Assembly & Secondary Operations", "Printing, welding, inserts, assembly and packaging."]
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
        <Image alt="Export injection molds manufactured by Arktech for global production" className="-z-20 object-cover object-[68%_center] sm:object-center" fill priority sizes="100vw" src="/images/hero/export-injection-mold-manufacturing-hero.webp" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,35,58,0.92)_0%,rgba(8,35,58,0.82)_48%,rgba(8,35,58,0.48)_78%,rgba(8,35,58,0.30)_100%)]" />
        <div className="container-page flex min-h-[610px] items-center py-14 sm:min-h-[620px] lg:min-h-[650px]">
          <div className="max-w-[1050px]">
            <p className="text-xs font-bold uppercase tracking-[0.11em] text-white/80 sm:text-sm">Export Injection Molds &amp; Plastic Injection Molding</p>
            <h1 className="mt-4 max-w-[1050px] text-[1.75rem] font-bold leading-[1.06] tracking-[-0.025em] text-white sm:text-[2.5rem] md:text-[3rem] lg:text-[3.35rem] xl:text-[3.625rem]" id="homepage-hero-heading">
              Export Injection Mold Manufacturer &amp; Plastic Injection Molding Partner
            </h1>
            <p className="mt-5 max-w-[800px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-xl">From DFM and export tooling to mold trials and plastic injection production, Arktech supports product companies and injection molding companies from tool development through production.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/80 bg-[rgba(8,35,58,0.34)] px-6 font-bold text-white transition hover:bg-white hover:text-[var(--brand-dark)]" href="/injection-molds">Explore Injection Molds <span aria-hidden="true" className="ml-2">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white" aria-label="Arktech tooling and molding proof points">
        <div className="container-page grid grid-cols-2 gap-x-5 gap-y-3 py-5 sm:grid-cols-3 lg:grid-cols-5 lg:py-6">
          {proofItems.map((item) => <p className="flex items-center gap-2 text-sm font-semibold leading-5 text-[var(--brand-dark)]" key={item}><span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[var(--brand)]" />{item}</p>)}
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="who-we-support-heading">
        <div className="container-page">
          <SectionHeading body="Two focused project paths for product teams developing molded parts and molders expanding export-tooling capacity." eyebrow="Buyer Paths" id="who-we-support-heading" title="Who We Support" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {buyerPaths.map((buyer) => <article className="border-t-2 border-[var(--brand)] bg-white p-6 sm:p-7" key={buyer.title}><p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{buyer.eyebrow}</p><h3 className="mt-3 text-2xl font-bold leading-tight text-[var(--brand-dark)] sm:text-3xl">{buyer.title}</h3><p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">{buyer.body}</p><Link className="focus-ring mt-5 inline-flex min-h-11 items-center font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={buyer.href}>{buyer.cta} <span aria-hidden="true" className="ml-2">→</span></Link></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="featured-projects-heading">
        <div className="container-page">
          <SectionHeading body="Selected completed tooling programs show how mold type, part geometry and validation requirements come together in real projects." eyebrow="Real Tooling Evidence" id="featured-projects-heading" title="Featured Injection Mold Projects" />
          <div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => <Link className="focus-ring group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)] hover:shadow-sm" href={project.href} key={project.title}><div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]"><Image alt={project.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" src={project.image} /></div><div className="flex flex-1 flex-col p-5"><p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--brand)]">{project.moldType}</p><h3 className="mt-2 text-xl font-bold leading-tight text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{project.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.features}</p><span className="mt-auto pt-4 text-sm font-bold text-[var(--brand)]">View Project <span aria-hidden="true">→</span></span></div></Link>)}
          </div>
          <Link className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/injection-molds">Explore Injection Mold Projects <span aria-hidden="true" className="ml-2">→</span></Link>
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

      <section className="bg-white py-14 sm:py-16" aria-labelledby="dfm-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:items-center lg:gap-12">
          <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-white"><div className="relative aspect-[16/10] bg-[var(--surface-soft)]"><Image alt="DFM report for injection mold design review" className="object-contain object-center" fill sizes="(min-width: 1024px) 48vw, 100vw" src="/images/Engineering/injection-molding-dfm-report-anonymized.webp" /></div><figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm leading-6 text-[var(--muted)]">Real engineering review before mold design release.</figcaption></figure>
          <div><SectionHeading body="Review moldability, release, filling and tooling risks before steel is machined." eyebrow="DFM & Mold Design" id="dfm-heading" title="Engineering Before Steel Cutting" /><div className="mt-6"><CheckList items={["Parting line", "Draft & undercuts", "Gate strategy", "Ejection", "Steel-safe conditions", "Moldability risks"]} /></div><Link className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/injection-molding-engineering">Explore DFM &amp; Mold Design <span aria-hidden="true" className="ml-2">→</span></Link></div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-14 text-white sm:py-16" aria-labelledby="mold-manufacturing-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-center lg:gap-12">
          <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f3b9b9] sm:text-sm">Export Tooling</p><h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl" id="mold-manufacturing-heading">Injection Mold Manufacturing</h2><p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">Production tooling engineered for export, customer machine compatibility and repeatable molding.</p><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{["Mold Design & DFM", "CNC / EDM Machining", "Fitting & Assembly", "Mold Trial Before Export"].map((item) => <li className="flex items-start gap-3 font-semibold text-white" key={item}><span aria-hidden="true" className="text-[#f3b9b9]">✓</span>{item}</li>)}</ul><Link className="focus-ring mt-7 inline-flex min-h-11 items-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white hover:bg-[var(--brand-hover)]" href="/services/injection-mold-manufacturing">Explore Mold Manufacturing <span aria-hidden="true" className="ml-2">→</span></Link></div>
          <figure className="overflow-hidden rounded-md border border-white/15 bg-black/20"><div className="relative aspect-video"><LazyAutoplayVideo ariaLabel="Arktech injection mold manufacturing process" className="h-full w-full object-cover object-center" poster="/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp" preload="metadata" src="/videos/injection-mold-manufacturing/mold-manufacturing.mp4" /></div><figcaption className="border-t border-white/15 px-4 py-3 text-sm text-white/70">Mold fitting and assembly during injection mold manufacturing.</figcaption></figure>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="toolroom-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,54fr)_minmax(0,46fr)] lg:items-center lg:gap-12">
          <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]"><div className="relative aspect-video"><LazyAutoplayVideo ariaLabel="Arktech mold manufacturing and toolroom process" className="h-full w-full object-cover object-center" poster="/images/injection-mold-manufacturing/arktech-toolroom-video-poster.webp" preload="metadata" src="/videos/injection-mold-manufacturing/arktech-mold-toolroom.mp4" /></div><figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm text-[var(--muted)]">Real mold fitting, assembly and toolroom work at Arktech.</figcaption></figure>
          <div><SectionHeading body="In-house execution connects approved engineering with tool build, fitting, trials and dimensional review." eyebrow="Inside Our Toolroom" id="toolroom-heading" title="Toolroom Capabilities" /><div className="mt-7 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">{[["Toolmaking", "CNC, EDM and precision mold-component work."], ["Mold Assembly", "Fitting, movement checks and final assembly."], ["Mold Trial", "Sampling with defined process conditions."], ["Inspection", "Tooling, sample and dimensional verification."]].map(([title, body]) => <article className="bg-white p-5" key={title}><h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></article>)}</div></div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="validation-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,43fr)_minmax(0,57fr)] lg:items-center lg:gap-12">
          <div><SectionHeading body="Trial evidence and engineering records support correction decisions and customer approval before shipment or production release." eyebrow="Documented Validation" id="validation-heading" title="Mold Trial, Validation & Approval" /><div className="mt-6"><CheckList items={["T0 / T1 Mold Trial", "Molding Parameter Recording", "Dimensional Inspection", "Correction Tracking", "Customer Approval Support"]} /></div><Link className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/services/mold-trial-sampling-support">View Mold Trial &amp; Validation <span aria-hidden="true" className="ml-2">→</span></Link></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-white"><div className="relative aspect-[4/3] bg-white"><Image alt="Dimensional inspection report from injection mold trial validation" className="object-contain object-center" fill sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw" src="/images/quality/dimensional-inspection-report-anonymized.webp" /></div><figcaption className="border-t border-[var(--line)] p-4"><h3 className="font-bold text-[var(--brand-dark)]">Dimensional Inspection Report</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Critical dimensions reviewed against agreed requirements.</p></figcaption></figure>
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-white"><div className="relative aspect-[4/3] bg-white"><Image alt="Injection molding parameter record from mold trial" className="object-contain object-center" fill sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw" src="/images/Mold trail/Injection parameter.png" /></div><figcaption className="border-t border-[var(--line)] p-4"><h3 className="font-bold text-[var(--brand-dark)]">Injection Molding Parameters</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Recorded conditions used during sample validation.</p></figcaption></figure>
          </div>
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
          <SectionHeading body="Export tooling and molded-part support for product teams across connected devices, automotive, appliances and engineered products." eyebrow="Applications" id="industries-heading" title="Industries Served" />
          <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">{industries.map((industry) => <Link className="focus-ring group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)]" href={industry.href} key={industry.title}><div className="relative aspect-video overflow-hidden bg-white"><Image alt={industry.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={industry.image} /></div><div className="flex flex-1 flex-col p-5"><h3 className="text-xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{industry.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{industry.body}</p></div></Link>)}</div>
          <Link className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/industries">Explore All Industries <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16" aria-labelledby="supporting-capabilities-heading">
        <div className="container-page">
          <SectionHeading body="Additional processes available when a tooling or molded-part program requires them." eyebrow="Arktech Group" id="supporting-capabilities-heading" title="Supporting Manufacturing Capabilities" />
          <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">{supportingCapabilities.map(([title, body]) => <article className="bg-[var(--surface-soft)] p-5" key={title}><h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></article>)}</div>
          <a className="focus-ring mt-6 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="https://www.arktech-group.com" rel="noopener noreferrer" target="_blank">Explore Arktech Group <span aria-hidden="true" className="ml-2">↗</span></a>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-14 text-white sm:py-16" aria-labelledby="homepage-rfq-heading">
        <div className="container-page grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f3b9b9] sm:text-sm">Start Your RFQ</p><h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl" id="homepage-rfq-heading">Start Your Injection Mold Project</h2><p className="mt-4 max-w-3xl text-base leading-7 text-white/75 sm:text-lg">Upload your CAD data and project requirements for DFM review, tooling discussion and quotation.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end"><Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link><Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/70 px-6 font-bold text-white hover:bg-white hover:text-[var(--brand-dark)]" href="/request-a-quote">Request Tooling Quote</Link></div>
        </div>
      </section>
    </div>
  );
}
