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
    title: "OEM & Product Companies",
    href: "/solutions",
    body: "End-to-end support for product companies from DFM engineering to plastic and metal component production.",
    badges: ["DFM Engineering", "Export Tooling", "Plastic Components", "Metal Components", "Assembly"],
    projects: ["Robot Controller Housing", "Industrial Electronics Enclosure", "Medical Device Housing", "Power Module Components"],
    cta: "Explore OEM & EMS Solutions",
    image: "/images/who-we-serve/oem-product-companies.webp",
    imageAlt: "Plastic and precision metal components for OEM product companies"
  },
  {
    title: "Injection Molding & Tooling Companies",
    href: "/solutions/injection-molding-companies",
    body: "We support global injection molders with export tooling, mold manufacturing, validation, and production-ready solutions.",
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
    title: "Insert Molding Tools",
    description: "Precision tooling for molded components with threaded inserts, terminals, bushings, pins, and other integrated metal features.",
    image: "/images/capabilities/injection-mold-manufacturing.jpg"
  },
  {
    title: "Unscrewing Molds",
    description: "Mechanically driven tooling for plastic parts with internal or external threads, engineered for reliable release and production cycling.",
    image: "/images/seo/injection-mold-manufacturing.png"
  },
  {
    title: "Gas-Assisted Injection Molds",
    description: "Gas-assisted tooling solutions for large or thick-wall components requiring reduced sink marks, lower weight, and controlled filling.",
    image: "/images/seo/plastic-injection-molding.png"
  },
  {
    title: "Multi-Cavity Injection Molds",
    description: "Balanced multi-cavity mold systems designed for repeatable dimensions, consistent filling, efficient cooling, and high-volume output.",
    image: "/images/capabilities/plastic-injection-molding.jpg"
  },
  {
    title: "Large Component Molds",
    description: "Robust tooling for large industrial housings and structural plastic parts with controlled cooling, movement, and dimensional stability.",
    image: "/images/capabilities/injection-mold-manufacturing.jpg"
  },
  {
    title: "Two-Shot (2K / Bi-Injection) Molds",
    description: "Multi-material mold systems for integrated colors, soft-touch features, seals, grips, and functional two-component assemblies.",
    image: "/images/capabilities/plastic-injection-molding-v2.png"
  },
  {
    title: "Thermoset Molds",
    description: "Specialized tooling for heat-resistant thermoset materials used in electrical, industrial, and demanding performance applications.",
    image: "/images/seo/injection-mold-manufacturing.png"
  },
  {
    title: "Die Casting Tooling",
    description: "Production tooling for aluminum and zinc components with coordinated slides, cooling, venting, trimming, and machining allowances.",
    image: "/images/capabilities/die-casting.jpg"
  }
];

const industryCategories = [
  {
    title: "Automotive & Electric Vehicles",
    description: "Tooling, plastic housings, die cast parts, and precision components for vehicle electronics, charging, sensing, and mobility systems.",
    image: "/images/capabilities/die-casting.jpg"
  },
  {
    title: "Home Appliances & Smart Home Products",
    description: "Cosmetic housings, internal mechanisms, molded components, and assemblies for connected appliances and smart home devices.",
    image: "/images/capabilities/plastic-injection-molding.webp"
  },
  {
    title: "Consumer Electronics & Electrical Devices",
    description: "Production-ready plastic and metal enclosures, brackets, inserts, and assembled components for electrical and electronic products.",
    image: "/images/capabilities/assembly-secondary-operations.webp"
  },
  {
    title: "Smart Devices & IoT Products",
    description: "Engineering and manufacturing support for connected sensors, controllers, gateways, wearable devices, and intelligent product platforms.",
    image: "/images/capabilities/rd-product-development.webp"
  },
  {
    title: "Medical & Healthcare Devices",
    description: "DFM, tooling, controlled molding, and precision component support for diagnostic equipment, device housings, and healthcare products.",
    image: "/images/seo/plastic-injection-molding.png"
  },
  {
    title: "Aerospace & Defense",
    description: "Precision-machined components, engineered materials, fixtures, and controlled manufacturing support for demanding technical programs.",
    image: "/images/capabilities/cnc-machining.jpg"
  },
  {
    title: "Industrial Equipment & Automation",
    description: "Durable housings, control enclosures, brackets, sensor components, and assemblies for machinery and factory automation systems.",
    image: "/images/capabilities/sheet-metal-fabrication.jpg"
  },
  {
    title: "Pet & Lifestyle Products",
    description: "Consumer-facing housings, mechanisms, molded parts, and assemblies for pet devices, dispensers, accessories, and lifestyle products.",
    image: "/images/seo/oem-industry-components.png"
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

export default function Home() {
  return (
    <>
      <section className="relative min-h-[74vh] overflow-hidden bg-[var(--brand-dark)]">
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
              <Link className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white shadow-sm transition hover:brightness-90 sm:w-auto" href="/request-a-quote">
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

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Industries We Serve</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.01em] text-[var(--brand-dark)] sm:text-[2.5rem]">
            Manufacturing Support for OEM Brands and Injection Molding Companies
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-[var(--muted)]">
            We provide integrated engineering and manufacturing support tailored to product companies and injection molders, covering design validation, tooling development, and production execution.
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
                  {(buyer.title === "OEM & Product Companies" ? oemCapabilities : buyer.badges).map((item) => (
                    <li className="flex min-h-16 items-center rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 text-xs font-bold leading-5 text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:bg-red-50" key={item}>
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

      <section id="manufacturing-capabilities" className="scroll-mt-24 py-14" aria-labelledby="manufacturing-capabilities-heading">
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

      <section className="bg-[var(--brand-dark)] py-14 text-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-[#f4c7ca]">DFM & RFQ Process</p>
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
                <button className="min-h-12 rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:brightness-90 sm:col-span-2 lg:col-span-3 lg:self-end" type="submit">
                  Get Engineering Feedback in 24 Hours
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Tooling Examples</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">Injection Mold Types & Engineering Solutions</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Specialized mold engineering for complex geometries, multiple materials, production scale, and demanding industrial applications.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {toolingCategories.map((category) => (
              <article key={category.title} className="flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--surface)] shadow-sm lg:h-[500px]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)] lg:h-3/4 lg:shrink-0 lg:aspect-auto">
                  <Image src={category.image} alt={`${category.title} tooling and engineering solution`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 items-center p-5 lg:h-1/4 lg:min-h-0 lg:p-4">
                  <h3 className="text-lg font-bold text-[var(--brand-dark)]">{category.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Industries Served</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">Manufacturing Support Across Demanding Product Industries</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Plastic and metal component manufacturing aligned with the engineering, quality, cosmetic, and production requirements of each product category.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industryCategories.map((industry) => (
              <article key={industry.title} className="flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md">
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
                  <Image src={industry.image} alt={`${industry.title} manufacturing components and applications`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 hover:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-[var(--brand-dark)]">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{industry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trust-system" className="trust-section scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="container-page">
          <header className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Trust System & Delivery Proof</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">
              Trusted Injection Molding & Tooling Partner for OEM Manufacturing
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
              We integrate DFM engineering, mold tooling development, precision manufacturing, and validated production processes to support OEM brands with reliable global delivery.
            </p>
          </header>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Manufacturing trust metrics">
            {[
              ["🛡", "ISO 9001 Certified Manufacturing System"],
              ["⚙", "15+ Years Injection Molding Experience"],
              ["🏭", "300+ Export Tooling Projects Delivered"],
              ["🌍", "Europe & North America Delivery Coverage"]
            ].map(([icon, text]) => (
              <div className="flex min-h-24 items-center gap-3 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 font-bold leading-6 text-[var(--brand-dark)]" key={text}>
                <span aria-hidden="true" className="text-2xl">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["DFM Engineering & Mold Optimization", ["Manufacturability review", "Mold flow & design optimization", "Early-stage risk reduction"]],
              ["Injection Molding & Precision Tooling", ["Multi-cavity & complex molds", "Plastic & metal components", "CNC machining & die casting integration"]],
              ["ISO-Controlled Quality & Validation System", ["First article inspection (FAI)", "Tooling validation & sample approval", "Production consistency control"]],
              ["Export Manufacturing & OEM Supply Chain", ["EU & North America export experience", "OEM supply chain coordination", "Stable mass production support"]]
            ].map(([title, items]) => (
              <article className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm" key={title as string}>
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">{title as string}</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--muted)]">
                  {(items as string[]).map((item) => (
                    <li className="flex gap-2" key={item}><span aria-hidden="true" className="text-[var(--brand)]">●</span><span>{item}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-[var(--line)] pt-12">
            <h2 className="text-3xl font-bold text-[var(--brand-dark)]">Proven Results From Global OEM Customers</h2>
            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              <article className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Customer Feedback</p>
                <blockquote className="mt-4 text-lg leading-8 text-[var(--brand-dark)]">
                  “Reliable tooling partner with strong engineering support. Helped us reduce mold risk during development.”
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-[var(--muted)]">— OEM Engineering Manager, Germany</p>
              </article>
              <article className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">Project Experience</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Automotive interior components tooling", "Medical device plastic housings", "Smart home product molds", "Industrial automation enclosures", "Consumer electronics components"].map((item) => (
                    <span className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 text-xs font-bold text-[var(--brand-dark)]" key={item}>{item}</span>
                  ))}
                </div>
              </article>
              <article className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">Performance Metrics</h3>
                <dl className="mt-4 grid gap-3">
                  {["First-pass sample approval rate", "On-time delivery rate", "Repeat customer ratio"].map((item) => (
                    <div className="rounded-sm bg-[var(--surface-soft)] p-4" key={item}>
                      <dt className="font-bold text-[var(--brand-dark)]">{item}</dt>
                      <dd className="mt-1 text-sm text-[var(--muted)]">Tracked by project and customer program</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </div>
          </div>

          <div className="mt-14 border-t border-[var(--line)] pt-12">
            <h2 className="text-3xl font-bold text-[var(--brand-dark)]">Structured Engineering-to-Production Delivery Process</h2>
            <ol className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {["DFM Engineering Review", "Mold Design & Tooling Development", "Prototype / Sample Validation", "Tool Optimization & Trial Run", "Mass Production Setup", "Final Inspection & Export Delivery"].map((step, index) => (
                <li className="relative rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5" key={step}>
                  <span className="text-sm font-bold text-[var(--brand)]">0{index + 1}</span>
                  <p className="mt-3 text-sm font-bold leading-6 text-[var(--brand-dark)]">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 flex flex-col gap-3 rounded-sm bg-[var(--brand-dark)] p-6 sm:flex-row sm:flex-wrap sm:items-center sm:p-8">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white hover:brightness-90" href="/request-a-quote">Upload CAD for DFM Review</Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/70 px-6 font-bold text-white hover:bg-white hover:text-[var(--brand-dark)]" href="/request-a-quote">Request Tooling Quote</Link>
            <Link className="inline-flex min-h-12 items-center justify-center px-5 font-bold text-white underline decoration-white/40 underline-offset-8" href="/contact">Start OEM Project Discussion</Link>
          </div>

          <p className="mt-6 text-sm leading-6 text-[var(--muted)]">
            Arktech combines injection molding tooling, OEM manufacturing in China, DFM engineering services, plastic & metal components manufacturing, export mold supplier experience, and precision tooling solutions within one controlled delivery system.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Why Arktech</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A practical manufacturing partner for export programs.</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Arktech focuses on the engineering, communication, and production details that help overseas buyers reduce sourcing risk.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyArktech.map((item) => (
              <div key={item} className="rounded-sm border border-[var(--line)] bg-white p-5 font-medium leading-7 text-[var(--foreground)] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">OEM Buyer Confidence</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">Built around the questions engineering and sourcing teams ask before choosing a supplier.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {oemConfidence.map((item) => (
              <article key={item.title} className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
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

      <CTA />
    </>
  );
}
