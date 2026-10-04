import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/FullBleedHero";
import { site } from "@/lib/site";

type Industry = {
  title: string;
  description: string;
  applications: string[];
  image: string;
  alt: string;
  href?: string;
};

const industries: Industry[] = [
  {
    title: "Robotics",
    description: "Precision housings and functional molded components for robotic, automation and intelligent hardware products.",
    applications: ["Robot Housings", "Sensor Enclosures", "Functional Covers", "Structural Plastic Components"],
    image: "/images/industries/robotics-automation.png",
    alt: "Robotic automation equipment handling molded components in a production facility",
    href: "/industries/robotics"
  },
  {
    title: "Medical & Healthcare Devices",
    description: "Plastic housings and functional components requiring controlled geometry, clean appearance, dimensional review and project documentation.",
    applications: ["Device Housings", "Control Panels", "Covers", "Functional Plastic Components"],
    image: "/images/industries/medial-industry.webp",
    alt: "Medical and healthcare equipment with precision plastic components",
    href: "/industries/medical-devices"
  },
  {
    title: "Automotive Components",
    description: "Tooling and molding for interior, control and functional plastic components requiring repeatability, texture and assembly accuracy.",
    applications: ["Interior Trim", "Switch Panels", "Air Vent Components", "Clips & Covers"],
    image: "/images/industries/Automotive-Components.png",
    alt: "Automotive interior components including dashboard controls display housing and functional plastic parts",
    href: "/industries/automotive-components"
  },
  {
    title: "Smart Home & IoT",
    description: "Cosmetic housings and functional components for connected devices, controls and intelligent home products.",
    applications: ["Smart Device Housings", "Control Panels", "Router Enclosures", "Buttons & Bezels"],
    image: "/images/industries/smart-device-housings.png",
    alt: "Smart home cameras controls sensors and connected device housings",
    href: "/industries/smart-home"
  },
  {
    title: "Energy Storage & EV Charging",
    description: "Structural and functional plastic components for charging, energy storage and electrical hardware products.",
    applications: ["Charging Enclosures", "Connector Housings", "Control Housings", "Structural Components"],
    image: "/images/industries/autimotive-ev.webp",
    alt: "Electric vehicle charging equipment for automotive and EV applications",
    href: "/industries/new-energy"
  },
  {
    title: "Home Appliance",
    description: "Plastic housings, covers and functional molded parts for consumer and household appliance products.",
    applications: ["Appliance Housings", "Control Panels", "Handles", "Functional Covers"],
    image: "/images/industries/home-appliance.png",
    alt: "Home appliances with molded housings and electronic control panels",
    href: "/industries/home-appliance"
  },
  {
    title: "Pet Tech Products",
    description: "Molded housings and functional parts for connected pet products, feeding devices and intelligent pet hardware.",
    applications: ["Smart Feeders", "Water Devices", "Electronics Housings", "Plastic Assemblies"],
    image: "/images/industries/pet-lifestyle-product-parts.png",
    alt: "Smart pet feeders water dispensers and connected pet technology products",
    href: "/industries/pet-tech"
  },
  {
    title: "Consumer Electronics",
    description: "Cosmetic and functional plastic parts for electronics, smart hardware and portable consumer products.",
    applications: ["Electronic Housings", "Power Products", "Routers", "Windows & Bezels"],
    image: "/images/industries/consumer-electronics-enclosures.png",
    alt: "Consumer electronics products including headphones smart devices cameras and mobile accessories",
    href: "/industries/consumer-electronics"
  }
];

const requirements = [
  { number: "01", title: "Dimensional Control", body: "Critical for robotics, medical, automotive and functional assemblies where interfaces must align consistently." },
  { number: "02", title: "Cosmetic Surface Quality", body: "Important for consumer electronics, smart home and appliance housings with visible customer-facing surfaces." },
  { number: "03", title: "Engineering Materials", body: "Selected for EV charging, robotics, automotive and performance-focused products according to application needs." },
  { number: "04", title: "Assembly & Fit", body: "Reviewed for smart devices, electronics, pet tech and medical housings with snaps, fasteners or mating parts." },
  { number: "05", title: "Production Repeatability", body: "Supports automotive, appliance, electronics and repeat-production programs after tooling and process validation." },
  { number: "06", title: "Documentation", body: "Provides review evidence for export tooling, medical-related programs, OEM projects and customer validation." }
];

const capabilityRows = [
  ["Robotics", "DFM", "Complex Molds", "Engineering Plastics", "Insert Molding"],
  ["Medical & Healthcare", "DFM", "Dimensional Review", "Documentation", "Molded Housings"],
  ["Automotive", "Production Molds", "Texture & Appearance", "Insert Molding", "Repeat Production"],
  ["Smart Home & IoT", "Cosmetic Housings", "2K Molding", "Transparent Parts", "Assembly"],
  ["Energy Storage & EV", "Engineering Plastics", "Insert Molding", "Structural Housings", "Production Tooling"],
  ["Home Appliance", "Large Housings", "Texture", "Production Molds", "Mass Production"],
  ["Pet Tech Products", "Housings", "Assembly", "Low Volume to Production", "Cosmetic Parts"],
  ["Consumer Electronics", "Cosmetic Parts", "Transparent Parts", "2K Molding", "Overmolding"]
];

const capabilityLinks: Record<string, string> = {
  DFM: "/injection-molding-engineering",
  "Complex Molds": "/services/injection-mold-manufacturing",
  "Engineering Plastics": "/services/plastic-injection-molding",
  "Insert Molding": "/injection-molds/insert-molding-tools",
  "Production Molds": "/services/injection-mold-manufacturing",
  Documentation: "/company/quality-documentation",
  "2K Molding": "/injection-molds/two-shot-2k-molds",
  Assembly: "/services/plastic-metal-assembly",
  "Production Tooling": "/services/injection-mold-manufacturing",
  "Large Housings": "/injection-molds/large-injection-molds",
  "Mass Production": "/services/injection-molding-production-options",
  "Low Volume to Production": "/services/injection-molding-production-options",
  Overmolding: "/injection-molds/overmolding-tools"
};

const process = [
  { number: "01", title: "Co-Design & DFM", body: "Review geometry, application requirements, material targets and manufacturing risks before tooling release.", href: "/injection-molding-engineering" },
  { number: "02", title: "Injection Mold Manufacturing", body: "Build the tooling strategy around part geometry, production needs and the intended molding location.", href: "/services/injection-mold-manufacturing" },
  { number: "03", title: "Mold Trial & Validation", body: "Evaluate samples, molding conditions and improvement actions before customer approval.", href: "/services/mold-trial-sampling-support" },
  { number: "04", title: "Plastic Injection Molding", body: "Move approved tooling into low-volume or repeat production with defined process requirements.", href: "/services/plastic-injection-molding" },
  { number: "05", title: "Secondary Operations & Assembly", body: "Coordinate finishing, inserts, printing, welding and assembly when required by the product program.", href: "/services/plastic-metal-assembly" }
];

const materialGroups = [
  { title: "General-Purpose Plastics", materials: ["ABS", "PP", "PC", "PC/ABS"] },
  { title: "Engineering Plastics", materials: ["PA / Nylon", "PBT", "POM", "TPU"] },
  { title: "High-Performance Materials", materials: ["PPS", "PPSU", "PEEK"] }
];

const scenarios = [
  { title: "Robotics", parts: ["Complex housing", "Engineering plastic", "Assembly interfaces", "Tooling actions"] },
  { title: "Smart Home", parts: ["Cosmetic enclosure", "Transparent window", "Snap-fit assembly"] },
  { title: "Automotive", parts: ["Textured interior component", "Repeat-production tooling"] },
  { title: "EV Charging", parts: ["Structural housing", "Integrated inserts", "Dimensional stability"] }
];

const resources = [
  { type: "CASE STUDY", title: "Automotive Sensor Housing Tooling", href: "/case-studies/automotive-sensor-housing-tooling" },
  { type: "CASE STUDY", title: "Medical Device Cartridge Molding", href: "/case-studies/medical-device-cartridge-molding" },
  { type: "CASE STUDY", title: "Smart Home Plastic Housing", href: "/case-studies/smart-home-plastic-housing" },
  { type: "ENGINEERING GUIDE", title: "Injection Molding DFM Guide", href: "/resources/dfm-guide" },
  { type: "CAPABILITY", title: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
  { type: "CAPABILITY", title: "Plastic Injection Molding", href: "/services/plastic-injection-molding" }
];

export const metadata: Metadata = {
  title: { absolute: "Injection Molding for Smart Home, Medical & Automotive | Arktech" },
  description: "Explore Arktech injection molding and tooling capabilities for robotics, medical devices, automotive, smart home, EV charging, home appliances, pet tech and consumer electronics.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Injection Molding for Smart Home, Medical & Automotive | Arktech",
    description: "Industry-specific injection molding, export tooling and DFM support for robotics, medical, automotive, smart home and EV product teams.",
    type: "website",
    url: `${site.url}/industries`,
    images: [{ url: "/images/industries/Automotive-Components.png", alt: "Injection molded components for automotive and other product industries" }]
  }
};

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

function Capability({ label }: { label: string }) {
  const href = capabilityLinks[label];
  const classes = "inline-flex rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--brand-dark)]";
  return href ? <Link className={`${classes} transition hover:border-[var(--brand)] hover:text-[var(--brand)]`} href={href}>{label}</Link> : <span className={classes}>{label}</span>;
}

export default function IndustriesPage() {
  return (
    <>
      <FullBleedHero
        backgroundImages={[
          { src: "/images/industries/robotics-automation.png", alt: "Robotics product application supported by injection molding and tooling", position: "center" },
          { src: "/images/industries/medial-industry.webp", alt: "Medical device application with precision molded plastic components", position: "center" },
          { src: "/images/industries/Automotive-Components.png", alt: "Automotive components supported by custom tooling and plastic injection molding", position: "center" },
          { src: "/images/industries/autimotive-ev.webp", alt: "EV charging application supported by molded housings and components", position: "center" }
        ]}
        description="Arktech supports robotics, medical devices, automotive, smart home, EV charging, home appliances, pet tech and consumer electronics with DFM, export tooling and plastic injection molding."
        eyebrow="Industries We Serve"
        height="standard"
        overlay="strong"
        primaryCta={{ label: "Explore Industries", href: "#industry-grid" }}
        secondaryCta={{ label: "Upload CAD for DFM Review", href: "/request-a-quote" }}
        title="Injection Molding & Tooling Across Key Product Industries"
      />

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20" id="industry-grid">
        <div className="container-page">
          <SectionHeading eyebrow="Industries We Serve" title="Manufacturing Support Across Eight Product Categories" body="Each product category brings different decisions around geometry, materials, tooling actions, appearance, inspection and production scale." />
          <div className="mt-9 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <article className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md" key={industry.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image alt={industry.alt} className="h-full w-full object-fill transition duration-500 group-hover:scale-[1.02]" fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" src={industry.image} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold leading-snug text-[var(--brand-dark)]">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{industry.description}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2" aria-label={`${industry.title} applications`}>
                    {industry.applications.map((item) => <li className="rounded-sm bg-[var(--surface-soft)] px-2.5 py-2 text-xs font-semibold leading-5 text-[var(--brand-dark)]" key={item}>{item}</li>)}
                  </ul>
                  {industry.href ? <Link className="focus-ring mt-5 inline-flex w-fit rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={industry.href}>Explore {industry.title} <span className="ml-1.5" aria-hidden="true">→</span></Link> : <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Industry overview</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Industry Requirements" title="Manufacturing Requirements Vary by Industry" body="The same molded-part process can carry very different priorities depending on how the finished product is used, assembled and approved." />
          <div className="mt-9 grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
            {requirements.map((item) => (
              <article className="bg-white p-6 sm:p-7" key={item.title}>
                <div className="flex items-start gap-4">
                  <span className="text-sm font-bold tracking-wider text-[var(--brand)]">{item.number}</span>
                  <div>
                    <h3 className="font-bold uppercase tracking-wide text-[var(--brand-dark)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20" id="capabilities-by-industry">
        <div className="container-page">
          <SectionHeading eyebrow="Capabilities by Industry" title="Relevant Tooling &amp; Molding Capabilities by Industry" body="This matrix connects typical product requirements with the Arktech capabilities most often reviewed during RFQ and DFM planning." />
          <div className="mt-9 overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
            {capabilityRows.map(([industry, ...items], index) => (
              <div className={`grid gap-4 p-5 sm:p-6 lg:grid-cols-[260px_1fr] lg:items-center ${index ? "border-t border-[var(--line)]" : ""}`} key={industry}>
                <h3 className="text-base font-bold text-[var(--brand-dark)]">{industry}</h3>
                <div className="flex flex-wrap gap-2">{items.map((item) => <Capability key={item} label={item} />)}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">Capability combinations are reviewed against the actual CAD data, material, volume, application and approval requirements for each project.</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="From Development to Production" title="A Connected Manufacturing Path" body="Arktech connects application requirements to engineering, tooling, validation and production decisions through one documented project path." />
          <ol className="mt-9 grid gap-4 lg:grid-cols-5">
            {process.map((step, index) => (
              <li className="relative flex h-full flex-col rounded-md border border-[var(--line)] bg-white p-5 shadow-sm" key={step.number}>
                <span className="text-sm font-bold tracking-wider text-[var(--brand)]">{step.number}</span>
                <h3 className="mt-3 text-lg font-bold text-[var(--brand-dark)]">{step.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
                <Link className="focus-ring mt-4 inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={step.href}>View capability <span className="ml-1" aria-hidden="true">→</span></Link>
                {index < process.length - 1 ? <span aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-bold text-white lg:flex">›</span> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="Materials" title="Materials for Different Product Requirements" body="Material selection may depend on impact, temperature, dimensional stability, appearance, wear, transparency, chemical resistance and the specific product environment." />
          <div className="grid gap-4 sm:grid-cols-3">
            {materialGroups.map((group) => (
              <article className="rounded-md border border-[var(--line)] bg-white p-5 shadow-sm" key={group.title}>
                <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--brand-dark)]">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{group.materials.map((material) => <li className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1.5 text-sm font-semibold text-[var(--brand-dark)]" key={material}>{material}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Quality & Documentation" title="Quality Support for Tooling &amp; Production Programs" body="Engineering and approval records help global teams review tooling status, molded samples and export readiness with clear project evidence." />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {["DFM Records", "Mold Trial Reports", "Dimensional Inspection", "Process Parameter Sheets", "Material & Steel Certificates where applicable", "Sample Approval", "Packing & Export Records"].map((item) => <li className="flex items-start gap-3 rounded-sm border border-[var(--line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--brand-dark)]" key={item}><span aria-hidden="true" className="mt-0.5 text-[var(--brand)]">✓</span>{item}</li>)}
            </ul>
            <Link className="focus-ring mt-7 inline-flex rounded-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/company/quality-documentation">View Quality &amp; Documentation <span className="ml-1.5" aria-hidden="true">→</span></Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
            <Image alt="Molded plastic sample dimensional inspection and validation for tooling approval" className="object-cover object-center" fill sizes="(min-width: 1024px) 45vw, 100vw" src="/images/process/sample-validation-inspection-cmm.png" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Typical Project Scenarios" title="How Industry Requirements Translate into Manufacturing Decisions" body="These illustrative scenarios show how application needs shape material, tooling and production discussions. They are not presented as customer case studies." />
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {scenarios.map((scenario) => (
              <article className="rounded-md border border-[var(--line)] bg-white p-6 shadow-sm" key={scenario.title}>
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">{scenario.title}</h3>
                <ul className="mt-5 space-y-3">
                  {scenario.parts.map((part, index) => <li className="flex items-start gap-3 text-sm font-semibold leading-6 text-[var(--muted)]" key={part}><span aria-hidden="true" className="font-bold text-[var(--brand)]">{index ? "+" : "→"}</span>{part}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Verified Examples & Buyer Guidance" title="Related Projects &amp; Resources" body="Explore existing Arktech project examples, DFM guidance and core manufacturing capabilities relevant to industry programs." />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link className="focus-ring group rounded-md border border-[var(--line)] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-md" href={resource.href} key={resource.title}>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{resource.type}</span>
                <span className="mt-3 flex items-start justify-between gap-4 text-lg font-bold text-[var(--brand-dark)]"><span>{resource.title}</span><span aria-hidden="true" className="text-[var(--brand)] transition group-hover:translate-x-1">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">Start Your Project</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Discuss Your Product &amp; Manufacturing Requirements</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">Send us your CAD files, drawings, material requirements, expected volumes and application requirements. Our engineering team will review DFM, tooling, molding and production considerations for your project.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
            <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Manufacturing Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
