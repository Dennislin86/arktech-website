import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InjectionMoldingProductionVideo } from "@/components/InjectionMoldingProductionVideo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Injection Mold Manufacturer & Plastic Injection Molding | Arktech" },
  description:
    "Arktech is an injection mold manufacturer and plastic injection molding partner for global OEM teams, with DFM, export tooling, validation and production support.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Injection Mold Manufacturer & Plastic Injection Molding | Arktech",
    description: "Injection mold manufacturing, DFM engineering and plastic injection molding for global product companies and injection molders.",
    type: "website",
    url: site.url,
    images: [{ url: "/images/hero/export-injection-mold-manufacturing-hero.webp", alt: "Export injection mold manufacturing at Arktech" }]
  },
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
    context: "Developing a new product?",
    title: "Product Companies & OEM Teams",
    body: "Need help moving from CAD and DFM into tooling, samples and repeat production? Arktech supports product teams from product development through plastic injection molding and production support.",
    needs: ["DFM before tooling", "Tooling + molded-part production", "Prototype → repeat production"],
    primaryCta: "Explore Plastic Injection Molding",
    primaryHref: "/services/plastic-injection-molding",
    secondaryCta: "Upload CAD for DFM Review",
    secondaryHref: "/request-a-quote",
    image: "/images/case-studies/medical-education-device.webp",
    imageAlt: "Medical education device product development, engineering and manufacturing workflow"
  },
  {
    context: "Need more tooling capacity?",
    title: "Injection Molding Companies",
    body: "Need export-ready molds built for your production equipment and customer requirements? Arktech supports molders that need additional offshore toolmaking capacity, mold trials, validation and documented tooling delivery.",
    needs: ["Additional tooling capacity", "Machine-compatible export molds", "Trial, validation & spare parts"],
    primaryCta: "Explore Export Tooling",
    primaryHref: "/services/injection-mold-manufacturing",
    secondaryCta: "Request Tooling Quote",
    secondaryHref: "/request-a-quote",
    image: "/images/company/Precision Mold to Global Delivery.png",
    imageAlt: "Completed export injection mold, mold trial validation and export packing preparation"
  }
];

const coreCapabilities = [
  {
    title: "Export Injection Mold Manufacturing",
    description:
      "Export-grade injection mold manufacturing for product companies and injection molding companies, including complex molds, multi-cavity molds, hot runner molds, insert molding tools and other production tooling.",
    image: "/images/capabilities/injection-mold-manufacturing.png",
    alt: "Production injection molds and molded components manufactured by Arktech",
    href: "/services/injection-mold-manufacturing",
    cta: "Explore Injection Molds"
  },
  {
    title: "Mold Trial, Sampling & Validation",
    description:
      "Structured mold trials, sample review, dimensional inspection and engineering improvements before tooling approval and export delivery.",
    image: "/images/capabilities/mold-trial-sampling-support.png",
    alt: "Injection mold trial, sample validation and dimensional inspection support",
    href: "/company/project-management#mold-trial-validation",
    cta: "View Mold Trial & Validation"
  },
  {
    title: "Plastic Injection Molding",
    description:
      "Prototype, low-volume and mass-production plastic injection molding for engineering components, industrial housings and OEM products.",
    image: "/images/capabilities/plastic-injection-molding-production.webp",
    alt: "Plastic injection molding quality inspection with digital caliper measuring a white plastic enclosure",
    href: "/services/plastic-injection-molding",
    cta: "Explore Injection Molding"
  }
];

const groupSupportingCapabilities = [
  {
    title: "CNC Machining",
    description: "Precision machined metal and plastic components for prototypes, tooling and production.",
    image: "/images/capabilities/cnc-machining.webp",
    alt: "Precision CNC machined metal and plastic components",
    objectPosition: "center"
  },
  {
    title: "Die Casting",
    description: "Aluminum and zinc die cast components with machining and surface finishing support.",
    image: "/images/capabilities/die-casting.webp",
    alt: "Aluminum and zinc die cast components manufactured by Arktech Group",
    objectPosition: "center"
  },
  {
    title: "Sheet Metal Fabrication",
    description: "Laser cutting, bending, welding and finishing for custom sheet metal components.",
    image: "/images/capabilities/sheet-metal-fabrication.jpg",
    alt: "Custom sheet metal components produced by Arktech Group",
    objectPosition: "center"
  },
  {
    title: "Rapid Prototyping",
    description: "Rapid prototypes for design validation, functional testing and early-stage product development.",
    image: "/images/capabilities/rapid-prototyping-v3.webp",
    alt: "Rapid prototyping equipment and prototype components for design validation",
    objectPosition: "center"
  },
  {
    title: "Assembly",
    description: "Component and product assembly support for production-ready OEM projects.",
    image: "/images/capabilities/assembly-secondary-operations.webp",
    alt: "Component assembly support for OEM production projects",
    objectPosition: "center"
  },
  {
    title: "Secondary Operations",
    description: "Printing, ultrasonic welding, heat staking, surface finishing, inspection and other post-molding processes.",
    image: "/images/capabilities/Secondary-Operations.jpg",
    alt: "Arktech pad printing workshop for secondary operations on molded plastic parts",
    objectPosition: "center"
  }
];

const groupCaseStudies = [
  {
    category: "Medical Device",
    title: "Laparoscopic Simulator",
    description:
      "Product development support covering design, 3D modeling, plastic mold building, mass production, secondary operations and assembly.",
    image: "/images/case-studies/medical-education-device.webp",
    alt: "Medical laparoscopic simulator product development and manufacturing case study"
  },
  {
    category: "Smart Home & IoT",
    title: "Motion Tracker",
    description:
      "Compact BLE motion tracker development with in-mold labeling, plastic mold building, mass production and product assembly.",
    image: "/images/case-studies/smart-home-iot-project.webp",
    alt: "Smart home motion tracker product development and injection molding case study"
  },
  {
    category: "Industrial Product",
    title: "Fan Blade Mold with 7 Sliders",
    description:
      "Complex fan blade tooling using seven directional sliders and lifters with balanced hot-runner filling.",
    image: "/images/case-studies/fan-blade-mold.webp",
    alt: "Industrial fan blade injection mold with seven sliders and lifters"
  },
  {
    category: "IoT Appliance",
    title: "Zinc Die Casting Control Housing",
    description:
      "Die casting tooling, zinc component production, deburring, sand blasting and painting for an IoT control housing.",
    image: "/images/case-studies/die-casting-control-housing.webp",
    alt: "Zinc die casting tooling and control housing manufacturing case study"
  }
];

const toolingCategories = [
  {
    title: "Precision Injection Molds",
    description: "Precision tooling for parts requiring controlled dimensions, repeatable molding, stable assembly interfaces and consistent production performance.",
    image: "/images/mold-types/Precision-Molds.png",
    alt: "Precision injection mold for controlled-dimension plastic parts and repeatable production",
    href: "/tooling-examples#production-injection-molds"
  },
  {
    title: "Multi-Cavity Molds",
    description: "Balanced multi-cavity mold systems for repeatable dimensions, controlled cooling and efficient recurring production.",
    image: "/images/mold-types/multi-cavity-injection-molds.webp",
    alt: "Multi-cavity injection molds for repeat plastic part production",
    href: "/tooling-examples/multi-cavity-molds"
  },
  {
    title: "Complex Injection Molds",
    description: "Complex tooling configurations for demanding geometry, coordinated side actions, undercuts and engineered mold movements.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Complex injection mold with multiple sliders and tooling mechanisms",
    href: "/tooling-examples#complex-injection-molds"
  },
  {
    title: "Large Injection Molds",
    description: "Large tooling for industrial housings and structural plastic parts with controlled cooling, movement and dimensional stability.",
    image: "/images/mold-types/large-component-molds.JPG",
    alt: "Large injection mold for industrial housings and structural plastic parts",
    href: "/tooling-examples/large-component-molds"
  },
  {
    title: "Insert & Overmolding Tools",
    description: "Tooling for molding around metal inserts, prepared substrates or compatible second materials.",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Insert and overmolding tools for integrated plastic and metal components",
    href: "/tooling-examples#insert-overmolding-tools"
  },
  {
    title: "Two-Shot / 2K Molds",
    description: "Two-material or two-color molds engineered around shot sequence, material compatibility and machine configuration.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp",
    alt: "Two-shot and 2K injection mold for multi-material plastic parts",
    href: "/tooling-examples/two-shot-2k-molds"
  },
  {
    title: "Unscrewing Molds",
    description: "Mechanically controlled tooling for threaded plastic parts requiring reliable core rotation and release.",
    image: "/images/mold-types/unscrewing-molds.webp",
    alt: "Unscrewing injection mold for internally threaded plastic components",
    href: "/tooling-examples/unscrewing-molds"
  },
  {
    title: "Hot Runner Molds",
    description: "Hot runner tooling evaluated for balanced material delivery, gate control and stable recurring production.",
    image: "/images/mold-types/hot-runner-molds.webp",
    alt: "Hot runner injection mold for controlled production molding",
    href: "/tooling-examples/hot-runner-molds"
  },
  {
    title: "Prototype Injection Molds",
    description: "Prototype injection molds for engineering validation, functional samples and early-stage product development before larger production tooling commitments.",
    image: "/images/mold-types/prototype-injection-mold.webp",
    alt: "Prototype injection mold and molded plastic component for engineering validation",
    href: "/tooling-examples#production-injection-molds"
  }
];

type HomepageIndustry = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
};

const industryCategories: HomepageIndustry[] = [
  {
    title: "Robotics",
    description: "Housings, sensors and automation components.",
    image: "/images/industries/robotics-automation.png",
    alt: "Robotics applications with molded housings sensors and automation components",
    href: "/industries/robotics"
  },
  {
    title: "Medical & Healthcare Devices",
    description: "Precision housings and molded device components.",
    image: "/images/industries/medial-industry.webp",
    alt: "Medical device housings and precision molded plastic components",
    href: "/industries/medical-devices"
  },
  {
    title: "Automotive Components",
    description: "Interior, control and functional plastic parts.",
    image: "/images/industries/Automotive-Components.png",
    alt: "Automotive interior control and functional plastic components"
  },
  {
    title: "Smart Home & IoT",
    description: "Device housings, sensors and connected products.",
    image: "/images/industries/smart-device-housings.png",
    alt: "Smart home device housings sensors and connected products",
    href: "/industries/smart-home"
  },
  {
    title: "Energy Storage & EV Charging",
    description: "Charging housings, connectors and power components.",
    image: "/images/industries/autimotive-ev.webp",
    alt: "EV charging housings connectors and molded power components",
    href: "/industries/new-energy"
  },
  {
    title: "Home Appliance",
    description: "Appliance housings, control panels and functional parts.",
    image: "/images/industries/home-appliance.png",
    alt: "Home appliance housings control panels and functional molded parts"
  },
  {
    title: "Pet Tech Products",
    description: "Smart feeders, cameras and connected pet devices.",
    image: "/images/industries/pet-lifestyle-product-parts.png",
    alt: "Smart pet feeders cameras and connected pet devices",
    href: "/industries/pet-tech"
  },
  {
    title: "Consumer Electronics",
    description: "Electronic enclosures and functional molded components.",
    image: "/images/industries/consumer-electronics-enclosures.png",
    alt: "Consumer electronics enclosures and functional molded plastic components"
  }
];

const deliverySteps = [
  {
    title: "RFQ & CAD Review",
    description: "We review drawings, STEP files, materials, volume and project requirements.",
    icon: "cad",
    image: "/images/process/rfq-cad-review-old-website.png",
    alt: "CAD files and engineering review for export injection mold RFQ"
  },
  {
    title: "DFM Engineering Feedback",
    description: "Our engineering team identifies tooling risks, part design issues and cost drivers.",
    icon: "review",
    image: "/images/process/dfm-engineering-feedback-old-website.png",
    alt: "DFM engineering feedback for plastic part design and tooling risk review"
  },
  {
    title: "Mold Design & Tool Manufacturing",
    description: "We define mold structure, steel, cavities, lead time, sampling and production strategy.",
    icon: "tooling",
    image: "/images/process/tooling-manufacturing-plan-mold.png",
    alt: "Injection mold manufacturing plan and export tooling development"
  },
  {
    title: "Sample Validation & Inspection",
    description: "T1 samples, dimensional inspection and improvement actions are managed before approval.",
    icon: "approval",
    image: "/images/process/sample-validation-inspection-cmm.png",
    alt: "Plastic injection molded sample validation and dimensional inspection"
  },
  {
    title: "Export Delivery & Production Support",
    description: "We support export packing, spare parts, repeat orders and ongoing production.",
    icon: "delivery",
    image: "/images/process/export-delivery-production-support-molding.png",
    alt: "Production support and export delivery preparation for manufacturing projects"
  }
];

function MetricIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8
  };

  return (
    <svg aria-hidden="true" className="size-8" viewBox="0 0 32 32">
      {type === "experience" && <><circle {...common} cx="16" cy="16" r="11" /><path {...common} d="M16 9v7l5 3M9 4l-3 4M23 4l3 4" /></>}
      {type === "projects" && <><path {...common} d="M6 8h20v18H6zM10 5h12v3" /><path {...common} d="M11 14h10M11 19h7" /><path {...common} d="M23 18l2 2 4-5" /></>}
      {type === "quality" && <><path {...common} d="M16 3l10 4v7c0 7-4.2 12-10 15C10.2 26 6 21 6 14V7z" /><path {...common} d="M11 16l3 3 7-8" /></>}
      {type === "response" && <><path {...common} d="M5 7h16v13H9l-4 4z" /><path {...common} d="M21 11h5v13h-4" /><path {...common} d="M10 12h6M10 16h4" /></>}
      {type === "communication" && <><path {...common} d="M5 7h22v13H14l-6 5v-5H5z" /><path {...common} d="M10 12h12M10 16h8" /><path {...common} d="M21 21l3 3 3-3" /></>}
    </svg>
  );
}

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
      <section className="order-1 relative isolate overflow-hidden bg-[var(--brand-dark)] text-white">
        <Image
          src="/images/hero/export-injection-mold-manufacturing-hero.webp"
          alt="Export injection molds manufactured by Arktech for overseas production"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[68%_center] sm:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,35,58,0.88)_0%,rgba(8,35,58,0.78)_44%,rgba(8,35,58,0.56)_70%,rgba(8,35,58,0.38)_100%)] sm:bg-[linear-gradient(90deg,rgba(8,35,58,0.86)_0%,rgba(8,35,58,0.75)_48%,rgba(8,35,58,0.52)_76%,rgba(8,35,58,0.34)_100%)]" />
        <div className="mx-auto flex min-h-[680px] w-[min(1240px,calc(100%-32px))] items-center py-12 sm:min-h-[620px] sm:py-14 md:min-h-[660px] lg:min-h-[700px] xl:min-h-[720px]">
          <div className="w-full max-w-[1100px]">
            <div className="max-w-[900px]">
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-white/80 sm:text-[15px]">
                Export Injection Molds &amp; Manufacturing Support
              </p>
              <h1 className="mt-4 max-w-[900px] text-[2.25rem] font-bold leading-[1.06] tracking-[-0.025em] text-white sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] xl:text-[3.75rem]">
                Export Injection Mold Manufacturing for Product Companies &amp; Injection Molders
              </h1>
              <p className="mt-5 max-w-[820px] text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-xl lg:leading-8">
                Arktech supports product companies and injection molding companies with DFM engineering, export injection mold manufacturing, mold trials and plastic injection molding from tooling development through validated production.
              </p>
              <p className="mt-4 text-sm font-bold uppercase leading-6 tracking-[0.06em] text-[#f1d0d0] sm:text-[15px]">
                DFM Engineering <span aria-hidden="true">→</span> Tooling Development <span aria-hidden="true">→</span> Mold Trial &amp; Validation <span aria-hidden="true">→</span> Production
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)] sm:w-auto" href="/request-a-quote">
                  Upload CAD for DFM Review
                </Link>
                <Link className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-white/80 bg-[rgba(8,35,58,0.28)] px-6 font-bold text-white transition hover:bg-white hover:text-[var(--brand-dark)] sm:w-auto" href="/services">
                  View Capabilities
                </Link>
              </div>
            </div>

            <ul className="mt-6 grid max-w-[1050px] grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/25 bg-white/20 sm:grid-cols-4" aria-label="Manufacturing trust indicators">
              {[
                ["quality", "ISO 9001 Certified Manufacturing"],
                ["engineering", "DFM Engineering Review"],
                ["workflow", "Prototype → Production Support"],
                ["security", "NDA / Confidential Project Support"]
              ].map(([icon, label]) => (
                <li className="flex min-h-[70px] items-center gap-3 bg-[rgba(15,45,69,0.68)] px-3 py-3 text-sm font-semibold leading-5 text-white sm:px-4" key={label}>
                  <span className="shrink-0 text-white/80" aria-hidden="true"><TrustIcon type={icon} /></span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-5 grid max-w-[820px] grid-cols-3 gap-4 border-t border-white/25 pt-4">
              <div>
                <dt className="text-lg font-bold text-white sm:text-xl">15+</dt>
                <dd className="mt-1 text-xs font-medium leading-5 text-white/75 sm:text-sm">Years Experience</dd>
              </div>
              <div>
                <dt className="text-lg font-bold text-white sm:text-xl">200+</dt>
                <dd className="mt-1 text-xs font-medium leading-5 text-white/75 sm:text-sm">Export Tooling Projects / Year</dd>
              </div>
              <div>
                <dt className="text-lg font-bold text-white sm:text-xl">ISO 9001</dt>
                <dd className="mt-1 text-xs font-medium leading-5 text-white/75 sm:text-sm">Certified</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="order-2 bg-white py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">WHO WE SUPPORT</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.01em] text-[var(--brand-dark)] sm:text-[2.5rem]">
            Built for Product Companies &amp; Injection Molders
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">
            Whether you are developing a new product or sourcing export-ready tooling for an existing molding operation, Arktech provides engineering-led support from review through validation and production.
          </p>
          <div className="mt-9 grid auto-rows-fr gap-8 md:grid-cols-2">
            {whoWeServe.map((buyer) => (
              <article
                key={buyer.title}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    src={buyer.image}
                    alt={buyer.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{buyer.context}</p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-[var(--brand-dark)] sm:text-3xl">{buyer.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)] lg:text-lg">{buyer.body}</p>
                  <ul className="mt-5 space-y-3" aria-label={`${buyer.title} project needs`}>
                    {buyer.needs.map((need) => (
                      <li className="flex items-start gap-3 font-semibold leading-6 text-[var(--brand-dark)]" key={need}>
                        <span aria-hidden="true" className="font-bold text-[var(--brand)]">✓</span>
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col items-start gap-4 pt-7 sm:flex-row sm:items-center">
                    <Link
                      aria-label={`${buyer.primaryCta} for ${buyer.title}`}
                      className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]"
                      href={buyer.primaryHref}
                    >
                      {buyer.primaryCta}
                      <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                    <Link
                      className="focus-ring inline-flex min-h-11 items-center rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]"
                      href={buyer.secondaryHref}
                    >
                      {buyer.secondaryCta}<span aria-hidden="true" className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trust-system" className="order-7 scroll-mt-24 bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="trust-delivery-heading">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">TRUST &amp; DELIVERY PROOF</p>
          <h2 id="trust-delivery-heading" className="mt-3 max-w-4xl text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Built to Reduce Tooling Risk and Support Export Production</h2>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            Arktech combines DFM engineering, controlled tooling execution, inspection documentation and export delivery support to help OEM product companies, EMS manufacturers and injection molding companies move projects from RFQ to production with lower risk.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["15+ Years Experience", "Tooling and manufacturing support for overseas projects.", "experience"],
              ["200+ Export Tooling Projects / Year", "Normal mold size: 500 × 500 mm. Export injection molds and production support for global customers.", "projects"],
              ["ISO 9001 Certified", "Quality management system for tooling, molding and component manufacturing.", "quality"],
              ["24h RFQ Response Target", "Engineering review for new CAD files, drawings and production requirements.", "response"],
              ["One-Window Communication in English", "Clear English communication for RFQ, DFM review, tooling updates and project follow-up.", "communication"]
            ].map(([title, description, icon]) => (
              <article className="rounded-sm border border-[var(--line)] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-md" key={title}>
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-sm bg-[var(--accent-soft)] text-[var(--brand)]">
                  <MetricIcon type={icon} />
                </div>
                <h3 className="text-lg font-bold text-[var(--brand)]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <div className="max-w-5xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">HOW TO WORK WITH US</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)] sm:text-3xl">Engineering-to-Production Delivery</h3>
              <p className="mt-3 max-w-4xl leading-7 text-[var(--muted)]">
                Send us your CAD files, drawings or samples for engineering and DFM review. We confirm materials, tolerances, finishes, lead time and pricing before tooling, sampling, production inspection and export delivery.
              </p>
            </div>
            <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {deliverySteps.map((step, index) => (
                <li className="group overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md" key={step.title}>
                  <div className="relative aspect-[16/11] overflow-hidden bg-[var(--surface-soft)]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,51,0.02),rgba(11,31,51,0.26))]" />
                    <div className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full bg-white/95 text-[var(--brand)] shadow-sm">
                      <DeliveryIcon type={step.icon} />
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-sm font-bold tracking-[0.12em] text-[var(--brand)]">0{index + 1}</span>
                    <h4 className="mt-3 text-lg font-bold leading-6 text-[var(--brand-dark)] transition-colors group-hover:text-[var(--brand)]">{step.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 grid gap-6 rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm sm:p-6 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:items-start lg:gap-8">
            <div className="lg:col-start-2 lg:row-start-1">
              <h3 className="text-xl font-bold text-[var(--brand-dark)] sm:text-2xl">Tooling Documentation &amp; Pre-Shipment Validation</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                Each export mold is prepared with organized engineering, trial, inspection, certification and packing records for customer review before shipment.
              </p>
            </div>
            <div className="relative aspect-[624/582] overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] lg:col-start-1 lg:row-span-3 lg:row-start-1">
              <Image
                src="/images/documentation/tooling-documentation-package.png"
                alt="Export injection mold tooling documentation and pre-shipment validation package"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain object-center"
              />
            </div>
            <ul className="grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2 lg:col-start-2 lg:row-start-2">
              {["DFM Report", "Mold Trial Report", "Dimensional Inspection Report", "Steel Certificate", "Material Certificate", "Spare Parts List", "Export Packing Checklist"].map((item) => (
                <li className="flex items-center gap-2" key={item}><span className="font-bold text-[var(--brand)]">✓</span>{item}</li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-start-2 lg:row-start-3">
              <Link className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Start RFQ</Link>
              <Link className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Upload CAD for DFM Review</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="manufacturing-capabilities" className="order-3 scroll-mt-24 py-14" aria-labelledby="manufacturing-capabilities-heading">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Core Capabilities</p>
          <h2 id="manufacturing-capabilities-heading" className="mt-3 max-w-4xl text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">
            Injection Mold Manufacturing &amp; Production Capabilities
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            From DFM engineering and export tooling to mold validation and plastic injection molding, Arktech supports projects from tooling development through production.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreCapabilities.map((capability) => (
              <article
                key={capability.title}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    src={capability.image}
                    alt={capability.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center brightness-[0.97] transition duration-500 group-hover:scale-[1.03] group-hover:brightness-100"
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
                    {capability.cta}
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-md border border-[var(--line)] bg-[var(--surface-soft)] p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Arktech Group</p>
                <h3 className="mt-2 text-2xl font-bold text-[var(--brand-dark)]">Extended Manufacturing Support from Arktech Group</h3>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-[var(--muted)]">
                  When projects require additional manufacturing processes, the wider Arktech Group provides complementary support for prototypes, metal components, secondary operations and complete assemblies.
                </p>
              </div>
              <a
                className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]"
                href="https://www.arktech-group.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Arktech Group <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groupSupportingCapabilities.map((capability) => (
                <article key={capability.title} className="group overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm transition hover:border-[var(--brand)] hover:shadow-md">
                  <div className="relative h-36 overflow-hidden bg-white">
                    <Image
                      src={capability.image}
                      alt={capability.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.025]"
                      style={{ objectPosition: capability.objectPosition }}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-base font-bold text-[var(--brand-dark)]">{capability.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{capability.description}</p>
                    <a
                      className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]"
                      href="https://www.arktech-group.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Arktech Group <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="order-4 bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Injection Mold Types</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">Injection Molds for Production &amp; Complex Applications</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">From custom production molds and prototype tooling to multi-cavity, 2K, insert, overmolding, unscrewing and hot runner molds, Arktech supports a wide range of mold structures for overseas production.</p>
          <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {toolingCategories.map((category) => (
              <Link href={category.href} key={category.title} className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-fill object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-lg font-bold text-[var(--brand-dark)]">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link className="focus-ring mt-7 inline-flex font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href="/tooling-examples">View All Injection Molds <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
      </section>

      <section className="order-5 bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="injection-molding-production-heading">
        <div className="container-page grid gap-7 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-x-10">
          <div className="lg:col-start-2 lg:row-start-1">
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Plastic Injection Molding</p>
            <h2 id="injection-molding-production-heading" className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">
              Injection Molding from Tool Validation to Production
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Arktech supports plastic injection molding after tool development, from mold trials and process validation to low-volume and repeat production.
            </p>
            <p className="mt-3 leading-7 text-[var(--muted)]">
              Customers can choose export tooling only or continue with molded part production through the same engineering and project team.
            </p>
          </div>

          <div className="lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
            <InjectionMoldingProductionVideo />
          </div>

          <div className="lg:col-start-2 lg:row-start-2">
            <ul className="grid gap-x-5 gap-y-2.5 text-sm font-semibold text-[var(--brand-dark)] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                "Mold Trial & Process Validation",
                "Low-Volume Production",
                "Mass Production",
                "Process Control",
                "Quality Inspection",
                "Assembly & Packaging"
              ].map((item) => (
                <li className="flex items-start gap-2" key={item}>
                  <span aria-hidden="true" className="font-bold text-[var(--brand)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]"
              href="/services/plastic-injection-molding"
            >
              Explore Injection Molding <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="order-6 py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">INDUSTRIES SERVED</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">Tooling &amp; Injection Molding for Key Product Industries</h2>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">Arktech supports product teams across robotics, medical devices, automotive, smart products, EV charging and other OEM applications with export tooling, plastic injection molding and engineering support.</p>
          <div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2 min-[1200px]:grid-cols-4">
            {industryCategories.map((industry) => {
              const cardContent = (
                <>
                  <div className="relative aspect-video overflow-hidden bg-[var(--surface-soft)]">
                    <Image
                      src={industry.image}
                      alt={industry.alt}
                      fill
                      sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl font-bold leading-7 text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{industry.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{industry.description}</p>
                  </div>
                </>
              );

              return industry.href ? (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="focus-ring group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)] hover:shadow-sm"
                  aria-label={industry.title}
                >
                  {cardContent}
                </Link>
              ) : (
                <article key={industry.title} className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white">
                  {cardContent}
                </article>
              );
            })}
          </div>
          <Link className="focus-ring mt-7 inline-flex rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href="/industries">
            Explore All Industries <span className="ml-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="order-10 bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Case Studies</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">Real Product Development &amp; Manufacturing Projects</h2>
          <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">
            Selected Arktech Group projects covering product development, injection mold manufacturing, plastic production, die casting and assembly support.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {groupCaseStudies.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--surface)]">
                <div className="relative aspect-[16/10]">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-[var(--brand)]">{item.category}</p>
                  <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{item.description}</p>
                  <a
                    className="mt-5 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]"
                    href="https://www.arktech-group.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Arktech Group <span className="ml-1" aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <Link className="focus-ring mt-7 inline-flex rounded-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/case-studies">
            View Arktech Mold tooling case studies →
          </Link>
        </div>
      </section>
    </div>
  );
}
