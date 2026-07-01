import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { seoImageAlt, seoImageForSlug } from "@/lib/images";
import { caseStudyPages } from "@/lib/page-data";

export const metadata: Metadata = {
  title: "Export Injection Molds for OEM & Injection Molding Companies",
  description:
    "China tooling supplier for export injection molds and OEM manufacturing, supporting injection molding companies across Europe and North America.",
  keywords: [
    "export injection molds",
    "injection molding companies",
    "OEM manufacturing",
    "China tooling supplier",
    "injection molding companies Europe",
    "injection molding companies North America"
  ]
};

const whoWeServe = [
  {
    title: "Product Companies",
    href: "/solutions/product-companies",
    body: "For OEMs, EMS manufacturers, hardware brands and product development teams that need one reliable manufacturing partner from DFM to production.",
    badges: ["DFM Engineering", "Export Tooling", "Plastic Components", "Metal Components", "Assembly"],
    projects: ["Robot Controller Housing", "Industrial Electronics Enclosure", "Medical Device Housing", "Power Module Components"],
    cta: "Explore Product Company Solutions",
    image: "/images/who-we-serve/oem-product-companies.webp",
    imageAlt: "Plastic and precision metal components for OEM product companies"
  },
  {
    title: "Injection Molding Companies",
    href: "/solutions/injection-molding-companies",
    body: "For injection molding companies that need reliable offshore tooling capacity, export-ready injection molds, sampling support and spare parts.",
    badges: [
      "Export Tooling",
      "Meusburger / DME Standard",
      "Hot Runner Systems",
      "High-Temp Material Solutions",
      "Mirror Polish Molds",
      "Co-Design & Engineering Support",
      "Mold Design & 3D Drawing Support",
      "Sampling & Validation Support",
      "Spare Parts Support"
    ],
    projects: [
      "Insert Molding Tools",
      "Unscrewing Molds",
      "Gas-Assisted Injection Molds",
      "Multi-Cavity Injection Molds",
      "Large Component Molds",
      "Two-Shot (2K / Bi-Injection) Molds",
      "Thermoset Molds",
      "Die Casting Tooling"
    ],
    cta: "Explore Injection Molding Solutions",
    image: "/images/who-we-serve/injection-molding-tooling-companies.webp",
    imageAlt: "Completed export injection mold for injection molding and tooling companies"
  }
];

const oemCapabilities = [
  "DFM Engineering",
  "Export Tooling",
  "Rapid Prototyping",
  "R&D Product Design",
  "Plastic Components",
  "Metal Components",
  "Assembly",
  "Secondary Operations",
  "Surface Finishing"
];

const oemIndustryCategories = [
  "Automotive & Electric Vehicles",
  "Home Appliances & Smart Home Products",
  "Consumer Electronics & Electrical Devices",
  "Smart Devices & IoT Products",
  "Medical & Healthcare Devices",
  "Aerospace & Defense",
  "Industrial Equipment & Automation",
  "Pet & Lifestyle Products"
];

const whyArktech = [
  "Engineering-led DFM feedback before tooling release",
  "Support for both plastic and metal component programs",
  "Export documentation, trial reports, samples, and spare parts",
  "Clear communication for European and North American buyer expectations",
  "Manufacturing support from prototype validation to production supply",
  "Practical focus on cost, tolerance, material, finish, and launch risk"
];

const manufacturingCapabilities = [
  {
    title: "Custom Injection Mold Tooling Services",
    description:
      "We design and manufacture export-grade injection molds for OEM brands and molders, including multi-cavity molds, hot runner systems, insert molding, and mold transfer solutions.",
    image: "/images/seo/plastic-injection-molding.png",
    alt: "Production injection molds and molded components manufactured by Arktech",
    href: "/services/injection-mold-manufacturing"
  },
  {
    title: "Plastic Injection Molding Production",
    description:
      "Low & High-volume plastic injection molding for engineering components, industrial housings, consumer products, and OEM assemblies with stable quality and scalable production capacity.",
    image: "/images/capabilities/plastic-injection-molding.webp",
    alt: "Plastic injection molding quality inspection with digital caliper measuring a white plastic enclosure",
    href: "/services/plastic-injection-molding"
  },
  {
    title: "Precision CNC Machining Services",
    description:
      "Precision CNC machining for aluminum, stainless steel, brass, and engineering plastics, supporting prototypes, tooling components, and low-volume OEM production.",
    image: "/images/capabilities/cnc-machining.jpg",
    alt: "Precision CNC machined metal parts manufactured by Arktech",
    href: "/services/cnc-machining"
  },
  {
    title: "OEM Die Casting Services for Metal Parts",
    description:
      "Aluminum and zinc die casting solutions for industrial components, precision housings, and OEM metal parts with machining and surface finishing.",
    image: "/images/seo/die-casting-cnc-metal-parts.png",
    alt: "Aluminum and zinc die cast industrial components",
    href: "/services/die-casting"
  },
  {
    title: "Sheet Metal Fabrication for Industrial Enclosures",
    description:
      "Sheet metal fabrication for OEM enclosures, brackets, and industrial assemblies including laser cutting, bending, welding, and finishing.",
    image: "/images/capabilities/sheet-metal-fabrication.jpg",
    alt: "Fabricated sheet metal enclosures and industrial parts",
    href: "/services/sheet-metal-fabrication"
  },
  {
    title: "Rapid Prototyping for Product Development",
    description:
      "Fast SLA, SLS and CNC prototypes for design validation, functional testing and low-volume production.",
    image: "/images/capabilities/rapid-prototyping-v3.png",
    alt: "Rapid prototype parts produced with industrial 3D printing",
    href: "/services/rapid-prototyping"
  },
  {
    title: "Vacuum Casting for Product Prototyping",
    description:
      "High-quality polyurethane casting for bridge production, appearance models and functional prototypes.",
    image: "/images/capabilities/vacuum-casting-v3.png",
    alt: "Vacuum cast polyurethane prototype parts",
    href: "/services/vacuum-casting"
  },
  {
    title: "Assembly & Secondary Manufacturing Services",
    description:
      "Component assembly, ultrasonic welding, heat staking, printing, packaging and inspection before shipment.",
    image: "/images/capabilities/assembly-secondary-operations.webp",
    alt: "Electronics assembly line for component assembly and secondary operations",
    href: "/services/assembly-secondary-operations"
  },
  {
    title: "Product Engineering & Development Services",
    description:
      "Engineering support from concept to production including DFM analysis, material selection, CAD design, and manufacturability validation for OEM products.",
    image: "/images/capabilities/rd-product-development.webp",
    alt: "DFM engineering review and product development for manufactured components",
    href: "/services/rd-design"
  }
];

const toolingCategories = [
  {
    title: "Multi-Cavity Injection Molds",
    description: "Balanced multi-cavity mold systems designed for repeatable dimensions, consistent filling, efficient cooling, and high-volume output.",
    image: "/images/mold-types/multi-cavity-injection-molds.png",
    alt: "Multi-cavity injection molds for consistent high-volume plastic production"
  },
  {
    title: "Hot Runner Molds",
    description: "Hot runner tooling engineered for balanced filling, reduced material waste, stable cycle times, and high-volume molding programs.",
    image: "/images/seo/injection-mold-manufacturing.png",
    alt: "Hot runner injection molds for efficient high-volume plastic production"
  },
  {
    title: "Insert Molding Tools",
    description: "Precision tooling for molded components with threaded inserts, terminals, bushings, pins, and other integrated metal features.",
    image: "/images/mold-types/insert-molding-tools.png",
    alt: "Insert molding tools for plastic components with integrated metal inserts"
  },
  {
    title: "Overmolding Tools",
    description: "Overmolding tooling for soft-touch surfaces, integrated seals, grips, and multi-material product features.",
    image: "/images/capabilities/plastic-injection-molding-v2.png",
    alt: "Overmolding tools for soft-touch and multi-material plastic components"
  },
  {
    title: "Unscrewing Molds",
    description: "Mechanically driven tooling for plastic parts with internal or external threads, engineered for reliable release and production cycling.",
    image: "/images/mold-types/unscrewing-molds.png",
    alt: "Unscrewing injection molds for plastic parts with internal and external threads"
  },
  {
    title: "Two-Shot / 2K Molds",
    description: "Multi-material mold systems for integrated colors, soft-touch features, seals, grips, and functional two-component assemblies.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.png",
    alt: "Two-shot 2K bi-injection molds for multi-material plastic components"
  },
  {
    title: "Large Component Molds",
    description: "Robust tooling for large industrial housings and structural plastic parts with controlled cooling, movement, and dimensional stability.",
    image: "/images/mold-types/large-component-molds.png",
    alt: "Large component injection molds for industrial housings and structural plastic parts"
  },
  {
    title: "Die Casting Tooling",
    description: "Production tooling for aluminum and zinc components with coordinated slides, cooling, venting, trimming, and machining allowances.",
    image: "/images/mold-types/die-casting-tooling.png",
    alt: "Die casting tooling for aluminum and zinc production components"
  }
];

const industryCategories = [
  {
    title: "Robotics",
    description: "Precision plastic and metal components for robotic systems, end effectors, sensors, controllers, and automation equipment.",
    tags: ["Robot Housings", "End Effectors", "Sensor Mounts", "Precision Parts"],
    image: "/images/industries/aerospace-defense-precision-components.jpg",
    alt: "Precision plastic and metal components for robotics and automation systems",
    href: "/industries/robotics"
  },
  {
    title: "Medical & Healthcare Devices",
    description: "Precision plastic parts, medical housings, diagnostic product components, and clean assembly support for healthcare equipment.",
    tags: ["Medical Housings", "Diagnostic Devices", "Clean Assembly", "Precision Parts"],
    image: "/images/industries/medical-healthcare-device-parts.jpg",
    alt: "Precision plastic parts and medical device housings for healthcare equipment",
    href: "/industries/medical-devices"
  },
  {
    title: "Industrial Automation",
    description: "Durable components for industrial controls, sensors, fixtures, machinery, and automated production systems.",
    tags: ["Control Housings", "Automation Parts", "Sensors", "Assemblies"],
    image: "/images/industries/industrial-automation-components.jpg",
    alt: "Plastic and metal components for industrial automation equipment",
    href: "/industries/industrial-automation"
  },
  {
    title: "Smart Home & IoT",
    description: "Housings, sensors, connected device components, and assemblies for smart home and IoT product programs.",
    tags: ["IoT Sensors", "Smart Controls", "Connected Devices", "Device Housings"],
    image: "/images/industries/smart-iot-device-housings.jpg",
    alt: "Smart home and IoT device housings and precision components",
    href: "/industries/smart-home"
  },
  {
    title: "Energy Storage & EV Charging",
    description: "Plastic and metal components for battery systems, charging equipment, power electronics, connectors, and energy storage products.",
    tags: ["EV Charging", "Battery Housings", "Power Electronics", "Connectors"],
    image: "/images/industries/automotive-ev-components.jpg",
    alt: "Components for energy storage systems and electric vehicle charging products",
    href: "/industries/new-energy"
  },
  {
    title: "Home Appliance",
    description: "Injection-molded housings, smart device enclosures, control panels, and functional plastic parts for home appliance products.",
    tags: ["Appliance Housings", "Smart Device Enclosures", "Control Panels", "Functional Plastic Parts"],
    image: "/images/industries/home-appliance-smart-home-components.jpg",
    alt: "Plastic housings, control panels, and functional parts for home appliances",
    href: "/industries/smart-home"
  },
  {
    title: "Pet Tech Products",
    description: "Custom plastic molded parts, housings, accessories, and assembled components for connected and durable pet products.",
    tags: ["Smart Feeders", "Pet Devices", "Plastic Housings", "Assembly"],
    image: "/images/industries/pet-lifestyle-product-parts.jpg",
    alt: "Custom plastic molded parts and assemblies for pet technology products",
    href: "/industries/pet-tech"
  },
  {
    title: "Consumer Electronics",
    description: "Electronic housings, plastic enclosures, precision inserts, and assembled components for consumer electronics manufacturing.",
    tags: ["Electronic Housings", "Plastic Enclosures", "Insert Molding", "Assembly"],
    image: "/images/industries/consumer-electronics-enclosures.jpg",
    alt: "Custom plastic enclosures and housings for consumer electronics",
    href: "/industries"
  }
];

const oemWorkflow = [
  {
    title: "Upload CAD / RFQ Files",
    body: "Submit STEP, IGES, STL, or PDF files. Include material, tolerance, volume, and target lead time."
  },
  {
    title: "DFM Engineering Review",
    body: "Engineers analyze manufacturability, tooling strategy, material selection, and cost drivers."
  },
  {
    title: "Quotation & Production Plan",
    body: "Receive detailed quotation covering tooling, sampling, production, inspection, and export logistics."
  },
  {
    title: "Tooling to Mass Production",
    body: "Move from prototype or mold trial to stable production with export-ready delivery."
  }
];

const oemConfidence = [
  {
    title: "Manufacturability Review",
    body: "DFM feedback covers geometry, material behavior, tolerance risk, tooling strategy, and assembly interfaces before tooling release."
  },
  {
    title: "Quality Documentation",
    body: "Sampling records, inspection points, material notes, tooling corrections, and shipment documents help overseas teams evaluate launch readiness."
  },
  {
    title: "Prototype to Production",
    body: "Support ranges from prototype validation and bridge production to export molds, molded parts, CNC metal components, and repeat supply."
  },
  {
    title: "File Security",
    body: "Uploaded files are used only for engineering review and quotation. NDA-based projects can be supported when required."
  }
];

const qualitySignals = [
  "Export molds delivered to Europe & North America",
  "15+ years injection mold manufacturing experience",
  "DFM engineering support for overseas customers",
  "ISO 9001 certified production system",
  "OEM & EMS supply chain experience",
  "Tooling validation and sampling before shipment"
];

const deliverySteps = [
  { title: "RFQ & CAD Review", description: "We review drawings, STEP files, materials, volume and project requirements.", icon: "cad" },
  { title: "DFM Engineering Feedback", description: "Our engineering team identifies tooling risks, part design issues and cost drivers.", icon: "review" },
  { title: "Tooling & Manufacturing Plan", description: "We define mold structure, steel, cavities, lead time, sampling and production strategy.", icon: "tooling" },
  { title: "Sample Validation & Inspection", description: "T1 samples, dimensional inspection and improvement actions are managed before approval.", icon: "approval" },
  { title: "Export Delivery & Production Support", description: "We support export packing, spare parts, repeat orders and ongoing production.", icon: "delivery" }
];

function DeliveryIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7
  };

  return (
    <svg aria-hidden="true" className="size-9" viewBox="0 0 32 32">
      {type === "cad" && <><path {...common} d="M8 3.5h11l5 5V28H8z" /><path {...common} d="M19 3.5V9h5M11.5 22l4-8 4 8M13 19h5" /></>}
      {type === "review" && <><rect {...common} height="25" rx="2" width="20" x="6" y="4" /><path {...common} d="M11 10l1.5 1.5L15 9M18 10h4M11 16l1.5 1.5L15 15M18 16h4M11 22l1.5 1.5L15 21M18 22h4" /></>}
      {type === "tooling" && <><path {...common} d="M7 9h18v16H7zM11 5h10v4M11 14h10v7H11z" /><path {...common} d="M16 12v2M16 21v2M9 17h2M21 17h2" /></>}
      {type === "approval" && <><path {...common} d="M6 6h14v18H6zM10 11h6M10 15h6" /><circle {...common} cx="22" cy="21" r="6" /><path {...common} d="M19.5 21l1.7 1.7 3.5-4" /></>}
      {type === "production" && <><path {...common} d="M4 27V14l7 4v-5l7 5v-6l10 5v10zM8 23h3M15 23h3M22 23h3" /><path {...common} d="M23 12V5h3v9" /></>}
      {type === "delivery" && <><path {...common} d="M3 8h16v14H3zM19 13h5l5 5v4H19z" /><circle {...common} cx="9" cy="24" r="2.5" /><circle {...common} cx="24" cy="24" r="2.5" /><path {...common} d="M7 13l2 2 4-4" /></>}
    </svg>
  );
}

const chooseArktechReasons = [
  { title: "Engineering-Led DFM Review", description: "Early feasibility review, DFM analysis, and manufacturability validation before tooling release.", icon: "engineering" },
  { title: "Integrated Manufacturing Coordination", description: "Tooling, injection molding, CNC machining, die casting, finishing, and assembly under one workflow.", icon: "workflow" },
  { title: "ISO-Controlled Quality System", description: "Structured inspection and validation process for stable OEM manufacturing programs.", icon: "quality" },
  { title: "Export Tooling Experience", description: "15+ years supporting tooling and component projects for Europe and North America.", icon: "export" },
  { title: "Secure CAD & NDA Protection", description: "Confidential project handling for CAD files, drawings, and customer technical data.", icon: "security" },
  { title: "Sampling & Spare Parts Support", description: "Trial, sampling, approval, export documentation, and spare parts support after delivery.", icon: "support" }
];

function TrustIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7
  };

  return (
    <svg aria-hidden="true" className="size-8" viewBox="0 0 32 32">
      {type === "engineering" && <><path {...common} d="M7 4h13l5 5v19H7zM20 4v5h5" /><path {...common} d="M11 21l4-8 4 8M12.5 18h5" /></>}
      {type === "workflow" && <><rect {...common} height="8" rx="1.5" width="8" x="3" y="4" /><rect {...common} height="8" rx="1.5" width="8" x="21" y="4" /><rect {...common} height="8" rx="1.5" width="8" x="12" y="20" /><path {...common} d="M11 8h10M7 12v4h9v4M25 12v4h-9" /></>}
      {type === "quality" && <><path {...common} d="M9 4h14v20H9zM13 9h6M13 13h6" /><circle {...common} cx="21.5" cy="22.5" r="5.5" /><path {...common} d="M19 22.5l1.6 1.6 3.4-3.7" /></>}
      {type === "export" && <><circle {...common} cx="14" cy="15" r="10" /><path {...common} d="M4 15h20M14 5c3 3 4.5 6.3 4.5 10S17 22 14 25M14 5c-3 3-4.5 6.3-4.5 10S11 22 14 25M21 25h8M26 21l4 4-4 4" /></>}
      {type === "security" && <><path {...common} d="M16 3l10 4v7c0 7-4.2 12-10 15C10.2 26 6 21 6 14V7z" /><rect {...common} height="8" rx="1.5" width="10" x="11" y="14" /><path {...common} d="M13 14v-2a3 3 0 016 0v2" /></>}
      {type === "support" && <><path {...common} d="M5 5h14v18H5zM9 10h6M9 14h6" /><circle {...common} cx="21" cy="21" r="6" /><path {...common} d="M18.5 21l1.7 1.7 3.5-4M24 7h4v7" /></>}
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="order-1 relative min-h-[74vh] overflow-hidden bg-[var(--brand-dark)]">
        <Image
          src="/images/seo/arktech-tooling-manufacturing-hero.png"
          alt="Completed steel injection mold with plastic housings, die cast components, precision metal parts and product assembly components"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,55,94,0.97),rgba(23,55,94,0.84),rgba(23,55,94,0.28))]" />
        <div className="relative mx-auto flex min-h-[74vh] w-[min(1240px,calc(100%-32px))] items-center py-20 sm:py-24 lg:py-28">
          <div className="max-w-[1040px]">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f1c5c5]">Global Export Tooling & Precision Manufacturing Platform</p>
            <h1 className="mt-5 max-w-[1000px] text-[2rem] font-semibold leading-[1.14] tracking-[-0.015em] text-white sm:text-[2.4rem] lg:text-[2.75rem]">
              Injection Molds, Plastic & Metal Components & Manufacturing Solutions from China
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-[1.65] text-white/85 lg:text-[17px]">
              End-to-end manufacturing support for OEM brands and injection molders—from DFM engineering and export tooling to validated mass production in China.
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.1em] text-[#f1c5c5]">DFM Engineering → Tooling Development → Validated Mass Production</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white shadow-sm transition hover:bg-[var(--brand-hover)] sm:w-auto" href="/request-a-quote">
                Request Manufacturing Quote
              </Link>
              <Link className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-white/80 bg-white/10 px-6 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[var(--brand-dark)] sm:w-auto" href="/request-a-quote">
                Upload CAD for DFM Review
              </Link>
              <Link className="focus-ring inline-flex min-h-12 w-full items-center justify-center px-2 font-semibold text-white/90 underline decoration-white/40 underline-offset-8 transition hover:text-white hover:decoration-white sm:w-auto" href="#manufacturing-capabilities">
                Explore Manufacturing Capabilities
              </Link>
            </div>
            <ul className="mt-6 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/25 bg-white/20 sm:grid-cols-4" aria-label="Manufacturing trust indicators">
              {[
                ["🛡", "ISO 9001 Certified Manufacturing"],
                ["⚙", "DFM Engineering Review"],
                ["🏭", "Prototype → Production Support"],
                ["🔒", "NDA Protection"]
              ].map(([icon, label]) => (
                <li className="flex min-h-20 items-center gap-3 bg-[rgba(16,45,78,0.82)] px-4 py-3 text-sm font-semibold leading-5 text-white" key={label}>
                  <span aria-hidden="true" className="text-xl">{icon}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-7 grid max-w-3xl gap-5 border-t border-white/25 pt-5 sm:grid-cols-3">
              <div>
                <dt className="text-xl font-semibold text-white">15+</dt>
                <dd className="mt-1 text-sm font-medium text-white/75">Years Experience</dd>
              </div>
              <div>
                <dt className="text-xl font-semibold text-white">300+</dt>
                <dd className="mt-1 text-sm font-medium text-white/75">Export Molds / Year</dd>
              </div>
              <div>
                <dt className="text-lg font-semibold text-white">ISO 9001</dt>
                <dd className="mt-1 text-sm font-medium text-white/75">Certified</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="order-2 bg-white py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">WHO WE SUPPORT</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.01em] text-[var(--brand-dark)] sm:text-[2.5rem]">
            Manufacturing Support for Product Companies and Injection Molding Companies
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">
            Arktech supports product-driven companies and injection molding companies with DFM engineering, export tooling, plastic injection molding, CNC machining, die casting, assembly and quality documentation.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {whoWeServe.map((buyer) => (
              <article
                key={buyer.title}
                className="group flex h-full flex-col rounded-sm border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[var(--surface-soft)]">
                  <Image
                    src={buyer.image}
                    alt={buyer.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[var(--brand-dark)] transition-colors group-hover:text-[var(--brand)]">{buyer.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{buyer.body}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3" aria-label={`${buyer.title} capabilities`}>
                  {(buyer.title === "Product Companies" ? oemCapabilities : buyer.badges).map((item) => (
                    <li className="flex min-h-16 items-center rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 text-xs font-bold leading-5 text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:bg-[var(--accent-soft)]" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  aria-label={`${buyer.cta} for ${buyer.title}`}
                  className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]"
                  href={buyer.href}
                >
                  {buyer.cta}
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trust-system" className="order-6 scroll-mt-24 bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="trust-delivery-heading">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">TRUST &amp; DELIVERY PROOF</p>
          <h2 id="trust-delivery-heading" className="mt-3 max-w-4xl text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Built to Reduce Tooling Risk and Support Export Production</h2>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            Arktech combines DFM engineering, controlled tooling execution, inspection documentation and export delivery support to help OEM product companies, EMS manufacturers and injection molding companies move projects from RFQ to production with lower risk.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["15+ Years Experience", "Tooling and manufacturing support for overseas projects."],
              ["300+ Export Tooling Projects", "Injection molds, die casting tooling and production support for global customers."],
              ["ISO 9001 Certified", "Quality management system for tooling, molding and component manufacturing."],
              ["24h RFQ Response Target", "Engineering review for new CAD files, drawings and production requirements."]
            ].map(([title, description]) => (
              <article className="rounded-sm border border-[var(--line)] bg-white p-4 shadow-sm" key={title}>
                <h3 className="text-lg font-bold text-[var(--brand)]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-[var(--brand-dark)]">Engineering-to-Production Delivery</h3>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {deliverySteps.map((step, index) => (
                <li className="rounded-sm border border-[var(--line)] bg-white p-4 shadow-sm" key={step.title}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-sm font-bold text-[var(--brand)]">0{index + 1}</span>
                    <span className="text-[var(--industrial-blue)]"><DeliveryIcon type={step.icon} /></span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold leading-5 text-[var(--brand-dark)]">{step.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 grid gap-6 rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Documentation Before Shipment</h3>
              <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-4">
                {["DFM Report", "Mold Trial Report", "Dimensional Inspection Report", "Steel Certificate", "Material Certificate", "Spare Parts List", "Export Packing Checklist"].map((item) => (
                  <li className="flex items-center gap-2" key={item}><span className="font-bold text-[var(--brand)]">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Start RFQ</Link>
              <Link className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Upload CAD for DFM Review</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="manufacturing-capabilities" className="order-3 scroll-mt-24 py-14" aria-labelledby="manufacturing-capabilities-heading">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Manufacturing Capabilities</p>
          <h2 id="manufacturing-capabilities-heading" className="mt-3 max-w-4xl text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">
            Engineering & Manufacturing Capabilities for Injection Molding & Precision Production
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            We integrate DFM engineering, tooling development, precision manufacturing, and production validation into a structured engineering system that helps OEM brands and injection molders reduce development risk, improve manufacturability, and accelerate time to market.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {manufacturingCapabilities.map((capability) => (
              <article
                key={capability.title}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    src={capability.image}
                    alt={capability.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover brightness-[0.96] transition duration-500 group-hover:scale-[1.04] group-hover:brightness-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">{capability.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{capability.description}</p>
                  <Link
                    aria-label={`View ${capability.title} capability`}
                    className="mt-auto inline-flex items-center gap-2 pt-5 font-bold text-[var(--brand)] transition-colors hover:text-[var(--brand-dark)]"
                    href={capability.href}
                  >
                    View capability
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hidden bg-[var(--brand-dark)] py-14 text-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-[#f4c7ca]">How to Start an RFQ</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">From CAD Upload to Manufacturable Injection Molds and Precision Components</h2>
            <p className="mt-4 leading-7 text-[#e6e9f2]">
              Upload your RFQ files for engineering review, manufacturability analysis, and export tooling quotation from our China manufacturing team.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {oemWorkflow.map((step, index) => (
              <article key={step.title} className="rounded-sm border border-white/15 bg-white/8 p-5">
                <p className="text-sm font-bold text-[#f4c7ca]">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#e6e9f2]">{step.body}</p>
                {index === 0 && (
                  <Link className="mt-5 inline-flex font-bold text-white underline decoration-[#f4c7ca] underline-offset-4" href="/request-a-quote">
                    Upload Files for DFM Review
                  </Link>
                )}
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-sm border border-white/20 bg-white p-6 text-[var(--foreground)] shadow-xl sm:p-8">
            <div className="grid gap-7 lg:grid-cols-[0.55fr_1fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Engineering Intake</p>
                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Start Your DFM Review</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">Share the essential project details now, then complete the secure CAD upload on the DFM review page.</p>
              </div>
              <form action="/request-a-quote" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" method="get">
                <label className="grid gap-2 text-sm font-bold sm:col-span-2 lg:col-span-2">
                  CAD upload
                  <input accept=".step,.stp,.iges,.igs,.stl,.x_t,.pdf,.zip" className="min-h-12 rounded-sm border border-dashed border-[var(--brand)] px-3 py-2 font-normal" multiple name="files" type="file" />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Material
                  <input className="min-h-12 rounded-sm border border-[var(--line)] px-3 font-normal" name="material" placeholder="e.g. ABS" />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Volume
                  <input className="min-h-12 rounded-sm border border-[var(--line)] px-3 font-normal" name="volume" placeholder="Annual units" />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Lead time
                  <input className="min-h-12 rounded-sm border border-[var(--line)] px-3 font-normal" name="lead-time" placeholder="Target date" />
                </label>
                <label className="grid gap-2 text-sm font-bold sm:col-span-2 lg:col-span-2">
                  Target country
                  <input className="min-h-12 rounded-sm border border-[var(--line)] px-3 font-normal" name="target-country" placeholder="Country" />
                </label>
                <button className="min-h-12 rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)] sm:col-span-2 lg:col-span-3 lg:self-end" type="submit">
                  Get Engineering Feedback in 24 Hours
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="order-5 bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Tooling Examples</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">Injection Mold Types & Engineering Solutions</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Specialized mold engineering for complex geometries, multiple materials, production scale, and demanding industrial applications.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {toolingCategories.map((category) => (
              <article key={category.title} className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md lg:h-[420px]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)] lg:h-3/4 lg:shrink-0 lg:aspect-auto">
                  <Image src={category.image} alt={category.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
                </div>
                <div className="flex flex-1 items-center p-4 lg:h-1/4 lg:min-h-0">
                  <h3 className="text-lg font-bold text-[var(--brand-dark)]">{category.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="order-4 py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">INDUSTRIES SERVED</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">Plastic and Metal Components for Demanding OEM Product Categories</h2>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">We support OEM brands and manufacturing companies across automotive, appliances, electronics, medical, industrial, aerospace, smart devices, and lifestyle product categories with injection molds, plastic components, metal parts, prototypes, and production-ready manufacturing solutions.</p>
          <div className="mt-8 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industryCategories.map((industry) => (
              <article key={industry.title} className="group flex flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md">
                <div className="relative aspect-[5/4] overflow-hidden bg-[var(--surface-soft)]">
                  <Image src={industry.image} alt={industry.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-contain transition duration-500 group-hover:scale-[1.025]" />
                </div>
                <div className="flex flex-col p-3">
                  <h3 className="text-sm font-bold leading-5 text-[var(--brand-dark)]">{industry.title}</h3>
                  <ul className="mt-2 grid grid-cols-2 gap-1.5" aria-label={`${industry.title} applications`}>
                    {industry.tags.map((tag) => (
                      <li key={tag} className="flex min-h-7 items-center rounded-sm bg-[var(--surface-soft)] px-2 py-1 text-[10px] font-semibold leading-3 text-[var(--brand-dark)]">{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="order-10 bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Case Studies</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">Selected export tooling and manufacturing outcomes.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {caseStudyPages.map((item) => (
              <article key={item.slug} className="overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--surface)]">
                <div className="relative aspect-[16/10]">
                  <Image src={seoImageForSlug(item.slug)} alt={seoImageAlt(item.title)} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-[var(--brand)]">{item.region}</p>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{item.description}</p>
                  <Link className="mt-5 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={`/case-studies/${item.slug}`}>
                    View case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="order-11">
        <CTA />
      </div>
    </div>
  );
}
