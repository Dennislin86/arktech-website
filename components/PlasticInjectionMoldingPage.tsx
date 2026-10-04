import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/FullBleedHero";
import { LazyAutoplayVideo } from "@/components/LazyAutoplayVideo";
import { site } from "@/lib/site";

const productionCapabilityStrip = [
  { value: "25–550T", label: "Clamping Force" },
  { value: "<2 g to >2.5 kg", label: "Part Weight Range" },
  { value: "Prototype → Mass Production", label: "Production Scale" },
  { value: "Engineering Thermoplastics", label: "Material Capability" }
];

const injectionMoldingCapabilityPaths = [
  {
    label: "Production Scale",
    title: "Prototype to Mass Production",
    body: "Support from engineering samples and low-volume builds through repeat production.",
    href: "#production-options"
  },
  {
    label: "Material Capability",
    title: "Engineering Thermoplastics",
    body: "Common and engineering-grade thermoplastics selected around product, performance and manufacturing requirements.",
    href: "#materials"
  },
  {
    label: "Complex Molding",
    title: "Insert & Overmolding",
    body: "Insert molding and overmolding for integrated components, interfaces and multi-material applications.",
    href: "#specialty-molding"
  },
  {
    label: "Production Validation",
    title: "Inspection & Validation",
    body: "Sample review, dimensional inspection and validation before production release.",
    href: "#quality"
  }
];

const coDesignSupportItems = [
  {
    title: "Part Design & Moldability",
    body: "Wall thickness, ribs, bosses, draft and undercuts reviewed before tooling."
  },
  {
    title: "Material Selection",
    body: "Evaluate resin properties around strength, heat, chemical resistance, shrinkage and appearance."
  },
  {
    title: "Tooling Compatibility",
    body: "Review part geometry, gate strategy, shrinkage and tooling requirements before steel cutting."
  },
  {
    title: "Supplier Coordination",
    body: "Coordinate technical data and processing input with material suppliers when required."
  }
];

const coDesignResources = [
  {
    title: "DFM Engineering",
    body: "Review part geometry and moldability before tooling.",
    label: "Explore DFM Engineering",
    href: "/injection-molding-engineering"
  },
  {
    title: "Material Selection Guide",
    body: "Compare common and engineering thermoplastics for molded parts.",
    label: "View Material Selection Guide",
    href: "/resources/material-selection-guide"
  },
  {
    title: "Injection Molding Design Guide",
    body: "Design considerations for draft, wall thickness, ribs and molded features.",
    label: "Read Design Guide",
    href: "/resources/injection-molding-guide"
  }
];

const productionOptions = [
  {
    number: "01",
    title: "Prototype Injection Molding",
    body: "Production-intent molded parts for design verification, functional testing and early customer evaluation before larger-volume production.",
    focus: ["Engineering samples", "Functional validation", "Early DFM alignment"],
    href: "/services/injection-molding-production-options#prototype"
  },
  {
    number: "02",
    title: "Low-Volume Production",
    body: "Controlled injection molding support for bridge production, pilot builds, market launch and specialist programs that do not yet require full-scale output.",
    focus: ["Bridge production", "Pilot runs", "Launch support"],
    href: "/services/injection-molding-production-options#low-volume"
  },
  {
    number: "03",
    title: "Mass Production Support",
    body: "Repeatable molding programs with process validation, part inspection, secondary operations and assembly support for ongoing OEM supply.",
    focus: ["Stable supply", "Quality control", "Repeat production"],
    href: "/services/injection-molding-production-options#mass-production"
  }
];

const materialGroups = [
  {
    title: "General-Purpose Thermoplastics",
    materials: ["ABS", "PP", "PE", "PS", "PMMA"],
    body: "Common materials for molded housings, covers, consumer products and general functional components."
  },
  {
    title: "Engineering Plastics & Elastomers",
    materials: ["PC", "PC/ABS", "PA / Nylon", "POM", "PBT", "TPU / TPE"],
    body: "Materials selected where strength, wear resistance, dimensional stability, toughness or flexibility are important."
  },
  {
    title: "High-Performance & Reinforced Plastics",
    materials: ["PA66-GF", "PBT-GF", "PPS", "PPSU", "PEEK"],
    body: "Application-specific materials for higher temperature, stiffness, chemical resistance and demanding engineering requirements."
  }
];

const materialSelectionConsiderations = [
  "Strength & stiffness",
  "Heat resistance",
  "Chemical resistance",
  "Shrinkage & stability",
  "Surface appearance",
  "Regulatory needs"
];

const sliderLifterReviewPoints = [
  {
    number: "01",
    title: "Undercut Release Direction",
    body: "Confirm how side undercuts can be released without part damage or mold interference."
  },
  {
    number: "02",
    title: "Slider / Lifter Travel & Clearance",
    body: "Review movement distance, available space and mechanism clearance for stable operation."
  },
  {
    number: "03",
    title: "Shut-Off & Insert Structure",
    body: "Evaluate shut-off surfaces, insert construction and steel conditions around moving features."
  },
  {
    number: "04",
    title: "Ejection & Interference Check",
    body: "Check slider, lifter and ejection sequences to reduce collision and release risk during mold operation."
  }
];

const processSteps = [
  {
    number: "01",
    title: "CAD & DFM Review",
    body: "Review CAD data, drawings, material, expected volume, finish and assembly requirements before tooling release."
  },
  {
    number: "02",
    title: "Tooling & Material Preparation",
    body: "Confirm tooling readiness, resin specification, color, additives and material drying requirements before molding."
  },
  {
    number: "03",
    title: "Mold Trial & Sample Approval",
    body: "Establish process conditions, review molded samples and complete required engineering corrections before approval."
  },
  {
    number: "04",
    title: "Production & Quality Control",
    body: "Run approved molding conditions with process monitoring, dimensional inspection and visual checks based on project requirements."
  },
  {
    number: "05",
    title: "Secondary Operations & Delivery",
    body: "Complete required finishing, assembly, packaging and delivery preparation."
  }
];

const specialtyMoldingCapabilities = [
  {
    title: "Insert Molding",
    body: "Mold plastic around threaded inserts, bushings or other pre-positioned components to create stronger assembly interfaces and integrated functional features.",
    applications: "Threaded inserts · bushings · contacts · embedded components",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Insert molding tool for plastic components with integrated metal inserts",
    href: "/injection-molds/insert-molding-tools",
    link: "Explore Insert Molding"
  },
  {
    title: "Overmolding",
    body: "Combine rigid and soft materials to add grip, sealing, impact protection or functional surfaces while reducing separate assembly steps.",
    applications: "Seals · grips · protective surfaces · soft-touch features",
    image: "/images/material-capabilities/silicone-tpu-tpe-elastomer-components.webp",
    alt: "Overmolded plastic components with rigid and soft materials",
    href: "/injection-molds/overmolding-tools",
    link: "Explore Overmolding"
  },
  {
    title: "Two-Shot / 2K Molding",
    body: "Integrate two compatible materials or colors within a controlled molding process for multi-material parts and repeat production.",
    applications: "Dual-material parts · two-color components · integrated soft / rigid parts",
    image: "/images/case-studies/two-shot-light-cover.webp",
    alt: "Two-shot 2K molded component with two materials",
    href: "/injection-molds/two-shot-2k-molds",
    link: "Explore 2K Molding"
  }
];

const productionToolingOptions = [
  {
    title: "Multi-Cavity Tooling",
    body: "Higher-output production using multiple balanced cavities for repeatable part production.",
    href: "/injection-molds/multi-cavity-molds",
    link: "Explore Multi-Cavity Molds"
  },
  {
    title: "Hot Runner Systems",
    body: "Runner-control solutions that can reduce material waste and support more stable repeat production.",
    href: "/injection-molds/hot-runner-molds",
    link: "Explore Hot Runner Molds"
  },
  {
    title: "Unscrewing / Threaded Parts",
    body: "Controlled core rotation and tooling mechanisms for molded internal or external threaded features.",
    href: "/injection-molds/unscrewing-molds",
    link: "Explore Unscrewing Molds"
  },
  {
    title: "Valve Gate Systems",
    body: "Controlled gating for applications requiring improved gate control, multi-cavity balance or cosmetic performance.",
    href: "/injection-molds/hot-runner-molds",
    link: "View Valve Gate Support"
  }
];

const moldedPartQualityCards = [
  {
    number: "01",
    title: "Dimensional Inspection",
    body: "Critical dimensions are checked against customer drawings and agreed tolerances to support sample review, tooling approval and production release."
  },
  {
    number: "02",
    title: "Visual & Cosmetic Inspection",
    body: "Molded parts are reviewed for visible defects and appearance requirements such as flash, short shots, sink marks, deformation, color, texture and surface finish when specified."
  },
  {
    number: "03",
    title: "Assembly & Fit Verification",
    body: "Interfaces, inserts, mating features and functional fit can be reviewed to confirm that molded components meet agreed assembly requirements."
  },
  {
    number: "04",
    title: "Sample Approval & Validation",
    body: "T0 / T1 samples are reviewed against customer requirements, with engineering corrections and follow-up actions managed before production approval when required."
  }
];

const secondaryOperationGroups = [
  {
    number: "01",
    title: "Printing & Marking",
    body: "Add logos, labels, symbols and functional markings to molded plastic parts using appropriate post-molding marking processes.",
    processes: ["Pad Printing", "Screen Printing", "Laser Marking"]
  },
  {
    number: "02",
    title: "Welding & Heat Staking",
    body: "Join molded plastic components using controlled post-molding processes for permanent assembly and production-ready part integration.",
    processes: ["Ultrasonic Welding", "Heat Staking"]
  },
  {
    number: "03",
    title: "Insert Installation & Assembly",
    body: "Install threaded inserts, fasteners and related components, then complete part or sub-assembly work based on project requirements.",
    processes: ["Threaded Inserts", "Fasteners", "Component Assembly", "Functional Fit-Up"]
  },
  {
    number: "04",
    title: "Finishing, Inspection & Packaging",
    body: "Complete required finishing, visual inspection and production packaging so molded parts can move closer to final assembly or delivery condition.",
    processes: ["Painting / Coating", "Visual Inspection", "Final Part Review", "Production Packaging"]
  }
];

const applicationIndustries = [
  {
    title: "Robotics",
    application: "Robot housings · Sensor enclosures",
    image: "/images/industries/robotics-automation.png",
    alt: "Injection molded housings and enclosures for robotics applications",
    href: "/industries/robotics"
  },
  {
    title: "Medical & Healthcare Devices",
    application: "Medical housings · Precision plastic parts",
    image: "/images/industries/medial-industry.webp",
    alt: "Injection molded housings and precision plastic parts for medical devices",
    href: "/industries/medical-devices"
  },
  {
    title: "Automotive Components",
    application: "Interior parts · Control housings",
    image: "/images/industries/Automotive-Components.png",
    alt: "Injection molded interior components and control housings for automotive applications"
  },
  {
    title: "Smart Home & IoT",
    application: "Device housings · Sensor enclosures",
    image: "/images/industries/smart-device-housings.png",
    alt: "Injection molded device housings and sensor enclosures for smart home products",
    href: "/industries/smart-home"
  },
  {
    title: "Energy Storage & EV Charging",
    application: "Charging housings · Connectors",
    image: "/images/industries/autimotive-ev.webp",
    alt: "Injection molded housings and connector components for EV charging applications",
    href: "/industries/new-energy"
  },
  {
    title: "Home Appliance",
    application: "Appliance housings · Control panels",
    image: "/images/industries/home-appliance.png",
    alt: "Injection molded housings and control panels for home appliance products"
  },
  {
    title: "Pet Tech Products",
    application: "Smart feeders · Device housings",
    image: "/images/industries/pet-lifestyle-product-parts.png",
    alt: "Injection molded smart feeder and device housings for pet tech products",
    href: "/industries/pet-tech"
  },
  {
    title: "Consumer Electronics",
    application: "Electronic enclosures · Insert-molded parts",
    image: "/images/industries/consumer-electronics-enclosures.png",
    alt: "Injection molded enclosures and insert-molded parts for consumer electronics"
  }
];

const reasons = [
  {
    number: "01",
    title: "DFM Before Tooling",
    subtitle: "Review manufacturability before steel cutting",
    body: "Part geometry, material, tooling risks and assembly requirements are reviewed before tooling release to help reduce avoidable engineering changes later in the project.",
    label: "View DFM Engineering",
    href: "/injection-molding-engineering"
  },
  {
    number: "02",
    title: "Tooling + Molding Under One Project",
    subtitle: "One engineering path from mold development to molded-part production",
    body: "Mold design, tool manufacturing, mold trials, corrections and production molding can be coordinated through the same engineering and project team.",
    label: "Explore Injection Mold Manufacturing",
    href: "/services/injection-mold-manufacturing"
  },
  {
    number: "03",
    title: "Validation Before Production",
    subtitle: "Review samples, dimensions and fit before production release",
    body: "T0 / T1 samples, critical dimensions, visual requirements and assembly fit can be reviewed before production approval based on project needs.",
    label: "View Quality & Documentation",
    href: "/company/quality-documentation"
  },
  {
    number: "04",
    title: "Secondary Operations & Extended Manufacturing",
    subtitle: "Coordinate finishing, assembly and complementary manufacturing support",
    body: "Secondary operations, assembly and complementary metal-component support can be coordinated through the wider Arktech Group when a project requires a broader manufacturing scope.",
    label: "Explore Arktech Group",
    href: site.company.legacyWebsite,
    external: true
  }
];

const whyArktechProof = [
  { value: "25–550T", label: "Clamping Force" },
  { value: "<2 g to >2.5 kg", label: "Part Weight Range" },
  { value: "DFM Review", label: "Engineering Before Tooling" },
  { value: "Inspection & Documentation", label: "Validation Support" }
];

const productionProofCards = [
  {
    src: "/images/process/export-delivery-production-support-molding.png",
    alt: "Injection mold trial and process setup before production",
    title: "Mold Trial & Process Setup",
    body: "Tooling is trialed and molding conditions are reviewed before sample approval and repeat production."
  },
  {
    src: "/images/process/sample-validation-inspection-cmm.png",
    alt: "Dimensional inspection and validation of injection molded plastic parts",
    title: "Sample Inspection & Validation",
    body: "Critical dimensions, appearance and fit can be reviewed against drawings and approved samples before production release.",
    href: "/company/quality-documentation"
  }
];

const productionEvidenceProof = [
  { value: "25–550T", label: "Clamping Force" },
  { value: "<2 g to >2.5 kg", label: "Part Weight Range" },
  { value: "Prototype → Mass Production", label: "Production Scale" },
  { value: "DFM + Validation", label: "Engineering Support" }
];

const faqs = [
  {
    question: "What information is needed for a plastic injection molding quote?",
    answer: "Send available 3D CAD data, 2D drawings, resin or material requirements, expected volume, finish requirements, assembly needs and delivery region. Existing tooling information should also be included when applicable."
  },
  {
    question: "Can Arktech support prototype, low-volume and mass-production molding?",
    answer: "Yes. Project planning can cover prototype validation, low-volume or bridge production and scalable production support. The suitable approach depends on part design, material, validation needs and expected volume."
  },
  {
    question: "Which plastic materials can be injection molded?",
    answer: "Verified material families include ABS, PC, PC/ABS, PP, POM, PMMA, TPU, PA/Nylon, PBT, PPS, PPSU and PEEK. Final resin selection is reviewed against part function, environment, appearance, moldability and project requirements."
  },
  {
    question: "Do you provide DFM feedback before tooling and molding?",
    answer: "Yes. DFM review can cover wall thickness, draft, ribs, bosses, undercuts, parting lines, gating, ejection, shrinkage, tolerance and visible surface requirements before tooling release."
  },
  {
    question: "Can you handle insert molding and overmolding?",
    answer: "Insert molding and overmolding are supported when the part design, insert specification, material compatibility and required production method have been reviewed and confirmed."
  },
  {
    question: "How are injection molded samples inspected?",
    answer: "Inspection is planned around agreed requirements and may include visual review, critical dimension checks, fit or assembly verification, surface review and comparison with customer drawings."
  }
];

const faqRelatedCapabilities = [
  { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
  { label: "DFM Engineering", href: "/injection-molding-engineering" },
  { label: "Mold Trial & Sampling Support", href: "/services/mold-trial-sampling-support" },
  { label: "Quality & Documentation", href: "/company/quality-documentation" }
];

const faqRelatedResources = [
  { label: "Injection Molding Guide", href: "/resources/injection-molding-guide" },
  { label: "Material Selection Guide", href: "/resources/material-selection-guide" },
  { label: "Sink Marks: Causes & Solutions", href: "/resources/injection-molding/sink-marks-causes-solutions" },
  { label: "Engineering Plastics Guide", href: "/resources/injection-molding/engineering-plastics-guide" }
];

function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }} />;
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

export function PlasticInjectionMoldingPage() {
  const pageUrl = `${site.url}/services/plastic-injection-molding`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Custom Plastic Injection Molding",
      description: "Custom plastic injection molding services from prototype and low-volume molding to scalable production, inspection, secondary operations and assembly.",
      url: pageUrl,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: ["Europe", "North America", "Worldwide"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Capabilities", item: `${site.url}/manufacturing-capabilities/` },
        { "@type": "ListItem", position: 3, name: "Plastic Injection Molding", item: pageUrl }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={schemas} />

      <FullBleedHero
        backgroundImages={[{
          src: "/images/capabilities/plastic-injection-molding-production-video-frame.webp",
          alt: "Plastic injection molding production line for OEM molded components",
          position: "right"
        }]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/manufacturing-capabilities" },
          { label: "Plastic Injection Molding" }
        ]}
        description="Arktech supports injection molding for engineering components, product housings and OEM programs from prototype builds and low-volume production through stable repeat and mass production."
        eyebrow="Plastic Injection Molding"
        height="standard"
        primaryCta={{ label: "Upload CAD for DFM Review", href: "/request-a-quote" }}
        secondaryCta={{ label: "Request Injection Molding Quote", href: "/request-a-quote" }}
        supportingLine="Prototype · Low Volume · Mass Production · Secondary Operations"
        title="Custom Plastic Injection Molding from Prototype to Production"
      />

      <section aria-label="Plastic injection molding production capability" className="bg-[var(--brand-dark)] text-white">
        <div className="container-page grid grid-cols-2 divide-x divide-y divide-white/20 lg:grid-cols-4 lg:divide-y-0">
          {productionCapabilityStrip.map((item) => (
            <div className="min-h-28 px-4 py-5 sm:px-6" key={item.label}>
              <p className="text-lg font-extrabold leading-tight tracking-[-0.02em] sm:text-xl">{item.value}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-300 sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-12 sm:py-16" aria-labelledby="injection-molding-capabilities-heading">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Injection Molding Capabilities</p>
          <h2 id="injection-molding-capabilities-heading" className="mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl lg:text-[44px] xl:text-[46px]">
            Plastic Injection Molding for Prototype to Production
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            Arktech supports plastic injection molding from engineering samples and low-volume builds through repeat and mass production. Our molding capabilities cover small precision components, larger housings, engineering thermoplastics, insert molding, overmolding and production validation.
          </p>
          <p className="mt-4 text-sm font-bold leading-6 text-[var(--brand-dark)] sm:text-base">
            25–550T machines <span aria-hidden="true" className="mx-2 text-[var(--brand)]">·</span> &lt;2 g to &gt;2.5 kg molded parts
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,56fr)_minmax(0,44fr)] lg:items-stretch lg:gap-8">
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--brand-dark)] shadow-sm">
              <div className="aspect-[16/10] overflow-hidden lg:h-full lg:min-h-[420px] lg:aspect-auto">
                <LazyAutoplayVideo
                  ariaLabel="Plastic injection molding production process at Arktech"
                  className="h-full w-full object-cover object-center"
                  poster="/images/capabilities/plastic-injection-molding-production.webp"
                  preload="metadata"
                  src="/videos/injection-molding-production-homepage.mp4"
                />
              </div>
            </figure>

            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2" role="list" aria-label="Plastic injection molding capability paths">
              {injectionMoldingCapabilityPaths.map((capability) => (
                <Link
                  className="focus-ring group flex min-h-[180px] flex-col rounded-sm border border-[var(--line)] bg-white p-4 transition hover:border-[var(--brand)] sm:p-5"
                  href={capability.href}
                  key={capability.title}
                  role="listitem"
                >
                  <p className="text-xs font-bold uppercase leading-[1.3] tracking-[0.04em] text-[var(--brand)] sm:text-sm">{capability.label}</p>
                  <h3 className="mt-3 text-xl font-bold leading-[1.15] text-[var(--brand-dark)] transition group-hover:text-[var(--brand)] sm:text-2xl xl:text-[1.625rem]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-[15px]">{capability.body}</p>
                  <span aria-hidden="true" className="mt-auto pt-3 text-lg font-bold text-[var(--brand)] transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg font-bold text-[var(--brand-dark)]">Have a part ready for molding?</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-dark)]" href="/request-a-quote">
                Upload CAD for DFM Review →
              </Link>
              <Link className="focus-ring inline-flex min-h-11 items-center rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href="#production-options">
                View Production Options →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white py-12 sm:py-16" aria-labelledby="co-design-support-heading">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Co-Design &amp; Material Support</p>
          <h2 id="co-design-support-heading" className="mt-3 max-w-5xl text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl lg:text-[46px]">
            Co-Design Support for Injection Molded Parts
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            Arktech works with product teams before tooling to review part geometry, moldability, material requirements and production risks. When needed, we also coordinate with raw-material suppliers to support resin selection and processing requirements.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,64fr)_minmax(280px,36fr)] lg:items-start lg:gap-8">
            <div>
              <div className="grid gap-4 sm:grid-cols-2" role="list" aria-label="Injection molding co-design support">
                {coDesignSupportItems.map((item) => (
                  <article className="border-l-2 border-[var(--brand)] bg-[var(--surface-soft)] px-4 py-4 sm:px-5 sm:py-5" key={item.title} role="listitem">
                    <h3 className="text-xl font-bold leading-[1.2] text-[var(--brand-dark)] sm:text-[22px]">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-[var(--muted)] sm:text-base">{item.body}</p>
                  </article>
                ))}
              </div>

              <div className="mt-6 border-t border-[var(--line)] pt-6">
                <p className="text-lg font-bold leading-7 text-[var(--brand-dark)]">Not sure whether your part or material is ready for tooling?</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                    Upload CAD for DFM Review →
                  </Link>
                  <Link className="focus-ring inline-flex min-h-11 items-center rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href="/resources/material-selection-guide">
                    View Material Selection Guide →
                  </Link>
                </div>
              </div>
            </div>

            <aside className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 sm:p-6" aria-label="Engineering resources">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Engineering Resources</p>
              <div className="mt-4 divide-y divide-[var(--line)]">
                {coDesignResources.map((resource) => (
                  <article className="py-4 first:pt-0 last:pb-0" key={resource.title}>
                    <h3 className="text-xl font-bold leading-[1.2] text-[var(--brand-dark)] sm:text-[22px]">{resource.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">{resource.body}</p>
                    <Link className="focus-ring mt-3 inline-flex rounded-sm text-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)] hover:underline" href={resource.href}>
                      {resource.label} →
                    </Link>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="production-options" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Production Planning</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl lg:text-[46px]">Plastic Injection Molding Production Options</h2>
            <div className="mt-4 max-w-4xl space-y-2 text-base leading-7 text-[var(--muted)] sm:text-lg">
              <p>Arktech supports plastic injection molding from prototype validation through low-volume production and repeat manufacturing. We help product teams choose the right production path based on validation stage, part complexity, demand planning and long-term supply requirements.</p>
              <p>Programs can include DFM review, tooling support, mold trials, process setup, sample approval, inspection and secondary operations depending on the stage of production.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,47fr)_minmax(0,53fr)] lg:items-stretch lg:gap-8">
            <figure className="flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden bg-[var(--brand-dark)] lg:min-h-[560px] lg:flex-1 lg:aspect-auto">
                <LazyAutoplayVideo
                  ariaLabel="Plastic injection molding production process"
                  className="h-full w-full object-cover object-center"
                  poster="/images/capabilities/plastic-injection-molding-production.webp"
                  preload="metadata"
                  src="/videos/Injection%20Molding/injection-molding-production1.mp4"
                />
              </div>
              <figcaption className="border-t border-[var(--line)] bg-white px-5 py-4 text-sm font-semibold leading-6 text-[var(--brand-dark)]">
                Plastic injection molding support from engineering samples to repeat OEM production.
              </figcaption>
            </figure>

            <div className="flex flex-col gap-3">
              {productionOptions.map((option) => (
                <article className="grid grid-cols-[32px_1fr] gap-3 rounded-sm border border-[var(--line)] bg-white p-4 sm:grid-cols-[40px_1fr] sm:p-5" key={option.title}>
                  <p className="text-sm font-bold tracking-[0.08em] text-[var(--brand)]" aria-hidden="true">{option.number}</p>
                  <div>
                    <h3 className="text-xl font-bold leading-[1.2] text-[var(--brand-dark)] sm:text-[22px]">{option.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">{option.body}</p>
                    <p className="mt-3 text-sm leading-6 text-[var(--brand-dark)]">
                      <span className="font-bold">Support focus:</span> {option.focus.join(" · ")}
                    </p>
                    <Link className="focus-ring mt-3 inline-flex rounded-sm text-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)] hover:underline" href={option.href}>View production stage →</Link>
                  </div>
                </article>
              ))}

              <div className="mt-1 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4 sm:flex sm:items-center sm:justify-between sm:gap-5 sm:p-5">
                <p className="text-base font-bold leading-6 text-[var(--brand-dark)] sm:max-w-[220px]">Need help choosing the right production path?</p>
                <div className="mt-4 flex flex-col gap-3 sm:mt-0 sm:items-end">
                  <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-4 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/services/injection-molding-production-options">
                    Compare Production Options →
                  </Link>
                  <Link className="focus-ring inline-flex min-h-10 items-center rounded-sm text-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href="/request-a-quote">
                    Upload CAD for DFM Review →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="materials" className="scroll-mt-24 bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Material Selection</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl lg:text-[46px]">Plastic Materials for Injection Molding</h2>
            <div className="mt-4 max-w-4xl space-y-2 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              <p>Arktech supports material selection for injection molding based on mechanical performance, dimensional stability, heat and chemical resistance, appearance, regulatory requirements and production conditions.</p>
              <p>During DFM and tooling development, we can also review resin behavior, shrinkage and processing requirements against part geometry and end-use needs.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,44fr)_minmax(0,56fr)] lg:items-stretch lg:gap-8">
            <figure className="relative min-h-[360px] overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm sm:min-h-[480px] lg:min-h-0">
              <Image
                alt="Engineering plastic injection molded housings and functional components"
                className="object-cover object-center"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                src="/images/material-capabilities/engineering-plastic-parts-abs-pc-pa-pom.webp"
              />
            </figure>

            <div className="overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
              <div className="px-5 pb-1 pt-5 sm:px-6 sm:pt-6">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Material Families</p>
              </div>
              <div className="divide-y divide-[var(--line)]">
                {materialGroups.map((group) => (
                  <article className="px-5 py-4 sm:px-6 sm:py-5" key={group.title}>
                    <h3 className="text-xl font-bold leading-[1.2] text-[var(--brand-dark)] sm:text-[22px]">{group.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-[var(--muted)] sm:text-base">{group.body}</p>
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${group.title} materials`}>
                      {group.materials.map((material) => (
                        <li className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-2.5 py-1 text-sm font-bold text-[var(--brand-dark)]" key={material}>
                          {material}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="border-t border-[var(--line)] bg-[var(--surface-soft)] px-5 py-4 sm:px-6">
                <h3 className="text-lg font-bold text-[var(--brand-dark)] sm:text-xl">Project-Specific Material Review</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Final resin grade, glass-fiber content, additives, color and certification requirements are confirmed against project specifications before production.</p>
              </div>
            </div>
          </div>

          <div className="mt-7 border-y border-[var(--line)] py-5 lg:grid lg:grid-cols-[260px_1fr] lg:items-center lg:gap-6">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Material Selection Considerations</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:mt-0 xl:grid-cols-6" aria-label="Material selection considerations">
              {materialSelectionConsiderations.map((consideration) => (
                <li className="flex gap-2 text-sm font-semibold leading-5 text-[var(--brand-dark)]" key={consideration}>
                  <span aria-hidden="true" className="font-bold text-[var(--brand)]">—</span>
                  <span>{consideration}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-5 rounded-sm border border-[var(--line)] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <h3 className="text-xl font-bold leading-7 text-[var(--brand-dark)]">Not sure which resin fits your application?</h3>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/resources/material-selection-guide">
                View Material Selection Guide →
              </Link>
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">
                Upload CAD for DFM Review →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="dfm-moldability-review" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="DFM & Moldability Review"
            title="Design for Plastic Injection Molding"
            body="Injection molding DFM reviews complex undercuts and moving mold features before mold design and steel cutting. Slider and lifter analysis helps define release direction, travel, clearance, shut-off conditions and ejection sequence."
          />

          <div className="mt-9 overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] lg:grid lg:grid-cols-[minmax(0,56fr)_minmax(0,44fr)]">
            <figure className="flex items-center justify-center bg-white p-3 sm:p-5 lg:self-start lg:border-r lg:border-[var(--line)]">
              <div className="relative aspect-[61/39] w-full overflow-hidden bg-white">
                <Image
                  alt="DFM analysis showing slider and lifter directions for undercut mold construction"
                  className="object-contain object-center"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  src="/images/injection-mold-manufacturing/ejection-slider-lifter.webp"
                />
              </div>
            </figure>

            <div className="border-t border-[var(--line)] bg-white p-5 sm:p-7 lg:border-t-0 lg:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Tooling Engineering Review</p>
              <h3 id="slider-lifter-review" className="scroll-mt-24 mt-3 text-2xl font-bold leading-[1.15] text-[var(--brand-dark)] sm:text-[30px]">Slider &amp; Lifter Mold Construction Review</h3>
              <div className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] sm:text-[17px]">
                <p>Slider and lifter mechanisms are reviewed during DFM to confirm undercut release, movement direction, shut-off conditions, insert structure and sufficient space for reliable mold operation.</p>
                <p>The review helps identify tooling risks before mold design and steel cutting, especially for parts with side actions, deep undercuts or complex release requirements.</p>
              </div>

              <ol className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]" aria-label="Slider and lifter mold construction review points">
                {sliderLifterReviewPoints.map((point) => (
                  <li className="grid grid-cols-[32px_1fr] gap-3 py-4" key={point.title}>
                    <span className="text-sm font-bold text-[var(--brand)]">{point.number}</span>
                    <div>
                      <h4 className="text-lg font-bold leading-6 text-[var(--brand-dark)]">{point.title}</h4>
                      <p className="mt-1 text-[15px] leading-6 text-[var(--muted)]">{point.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="mt-6 border-l-2 border-[var(--brand)] bg-[var(--surface-soft)] p-4 sm:p-5" aria-label="Complex undercut DFM review">
                <h4 className="text-lg font-bold text-[var(--brand-dark)]">Have a complex undercut or side-action part?</h4>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-4 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review →</Link>
                  <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-4 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/injection-molding-engineering">Explore DFM Engineering →</Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,44fr)_minmax(0,56fr)] lg:items-center lg:gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Production Workflow</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Plastic Injection Molding Process</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                From CAD review and DFM through tooling, trial, production and final delivery, Arktech coordinates each stage to help OEM teams move from design to stable molded-part supply.
              </p>
            </div>

            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  alt="Injection mold opening during plastic part production"
                  className="object-cover object-center"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src="/images/process/export-delivery-production-support-molding.png"
                />
              </div>
              <figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm font-medium text-[var(--muted)]">
                Injection mold setup for molded-part production and process validation.
              </figcaption>
            </figure>
          </div>

          <ol className="relative mt-10 grid gap-7 md:grid-cols-5 md:gap-4" aria-label="Plastic injection molding production stages">
            <span aria-hidden="true" className="absolute bottom-3 left-[19px] top-3 w-px bg-[var(--line)] md:hidden" />
            <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-[var(--line)] md:block" />
            {processSteps.map((step) => (
              <li className="relative z-10 flex gap-4 md:block md:px-2" key={step.title}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand)] bg-[var(--surface-soft)] text-sm font-bold text-[var(--brand)] md:mx-auto">
                  {step.number}
                </div>
                <div className="pb-1 md:mt-5 md:text-center">
                  <h3 className="text-base font-bold leading-6 text-[var(--brand-dark)] sm:text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col gap-5 rounded-sm border border-[var(--line)] bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">Have a part ready for molding?</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">Upload your CAD files for DFM review and production planning.</p>
            </div>
            <Link className="focus-ring inline-flex shrink-0 items-center justify-center rounded-sm bg-[var(--brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-dark)]" href="/request-a-quote">
              Upload CAD for DFM Review →
            </Link>
          </div>
        </div>
      </section>

      <section id="specialty-molding" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Specialty Molding"
            title="Specialty Injection Molding Capabilities"
            body="Arktech supports insert molding, overmolding and multi-material molding for parts that require integrated inserts, soft-touch surfaces, sealing features or multiple materials. Production tooling can also incorporate multi-cavity layouts, hot runners and unscrewing mechanisms based on part geometry, materials and expected production volume."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {specialtyMoldingCapabilities.map((capability) => (
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:border-slate-300" key={capability.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    alt={capability.alt}
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    src={capability.image}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{capability.body}</p>
                  <p className="mt-4 border-t border-[var(--line)] pt-4 text-xs leading-5 text-[var(--muted)]">
                    <span className="font-bold text-[var(--brand-dark)]">Typical applications:</span> {capability.applications}
                  </p>
                  <Link className="focus-ring mt-4 inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] hover:underline" href={capability.href}>
                    {capability.link} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-[var(--line)] pt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Production Tooling Options</p>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]">Tooling architecture is selected around output, resin behavior, threaded features and appearance requirements.</p>
              </div>
              <Link className="focus-ring inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] hover:underline" href="/services/injection-mold-manufacturing">
                Injection Mold Manufacturing →
              </Link>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {productionToolingOptions.map((option) => (
                <article className="border-l-2 border-[var(--brand)] bg-[var(--surface-soft)] px-4 py-4" key={option.title}>
                  <h3 className="text-base font-bold leading-6 text-[var(--brand-dark)]">{option.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{option.body}</p>
                  <Link className="focus-ring mt-3 inline-flex w-fit rounded-sm text-xs font-bold text-[var(--brand)] hover:underline" href={option.href}>
                    {option.link} →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <aside className="mt-8 flex flex-col gap-5 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6" aria-label="Specialty molding DFM review">
            <div>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">Not sure which molding process fits your part?</h3>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-[var(--muted)]">Send us your CAD file, material requirements and expected volume for DFM review and process recommendation.</p>
              <Link className="focus-ring mt-2 inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand-dark)] hover:text-[var(--brand)] hover:underline" href="/injection-molding-engineering">
                DFM Engineering Support →
              </Link>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:items-end">
              <Link className="focus-ring inline-flex items-center justify-center rounded-sm bg-[var(--brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-dark)]" href="/request-a-quote">
                Upload CAD for DFM Review →
              </Link>
              <Link className="focus-ring inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] hover:underline" href="/request-a-quote">
                Request Injection Molding Quote →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section id="quality" className="scroll-mt-24 bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Part Validation"
            title="Quality Control for Injection Molded Parts"
            body="Inspection requirements are defined around customer drawings, critical dimensions, approved samples and functional or cosmetic risks. Arktech can support dimensional inspection, visual review, fit verification and sample validation before production release."
          />

          <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:items-start lg:gap-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {moldedPartQualityCards.map((card) => (
                <article className="border-l-2 border-[var(--brand)] bg-white px-5 py-5" key={card.title}>
                  <p className="text-sm font-bold text-[var(--brand)]">{card.number}</p>
                  <h3 className="mt-2 text-lg font-bold leading-6 text-[var(--brand-dark)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{card.body}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image alt="Dimensional inspection of injection molded plastic parts using measurement equipment" className="object-cover object-center" fill sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw" src="/images/process/sample-validation-inspection-cmm.png" />
                </div>
                <figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm font-bold text-[var(--brand-dark)]">Dimensional Inspection</figcaption>
              </figure>

              <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image alt="Visual and dimensional inspection of molded plastic components" className="object-cover object-center" fill sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw" src="/images/capabilities/mold-trial-sampling-support.png" />
                </div>
                <figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm font-bold text-[var(--brand-dark)]">Sample &amp; Visual Inspection</figcaption>
              </figure>

              <article className="overflow-hidden rounded-sm border border-[var(--line)] bg-white sm:col-span-2">
                <div className="grid gap-0 md:grid-cols-[minmax(0,56fr)_minmax(240px,44fr)] md:items-stretch">
                  <div className="relative min-h-64 bg-white md:min-h-72">
                    <Image alt="Anonymized dimensional inspection report for molded plastic parts" className="object-contain object-center p-4" fill sizes="(min-width: 1024px) 30vw, (min-width: 768px) 55vw, 100vw" src="/images/quality/dimensional-inspection-report-anonymized.webp" />
                  </div>
                  <div className="border-t border-[var(--line)] p-5 md:border-l md:border-t-0">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Dimensional Inspection Report</p>
                    <h3 className="mt-3 text-lg font-bold text-[var(--brand-dark)]">Measurement Evidence for Production Approval</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Critical dimensions can be recorded against drawing requirements to support tooling approval, sample validation and production release.</p>
                    <p className="mt-3 text-xs leading-5 text-[var(--muted)]">Representative Arktech report preview with customer and project identification removed.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <aside className="mt-7 flex flex-col gap-5 rounded-sm border border-[var(--line)] bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6" aria-label="Dimensional inspection review">
            <div>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">Need dimensional inspection for your molded parts?</h3>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-[var(--muted)]">Send us your CAD files and drawings so our engineering team can review critical dimensions and inspection requirements.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:items-end">
              <Link className="focus-ring inline-flex items-center justify-center rounded-sm bg-[var(--brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-dark)]" href="/request-a-quote">
                Upload CAD for DFM Review →
              </Link>
              <Link className="focus-ring inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand-dark)] hover:text-[var(--brand)] hover:underline" href="/company/quality-documentation">View Quality &amp; Documentation →</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-x-12 lg:gap-y-6">
            <figure className="order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]">
                <Image
                  alt="Secondary operations and pad printing for injection molded plastic parts"
                  className="object-cover object-center"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  src="/images/capabilities/secondary-operations-pad-printing.webp"
                />
              </div>
              <figcaption className="mt-2 text-sm leading-6 text-[var(--muted)]">Secondary operations and assembly for molded plastic components.</figcaption>
            </figure>

            <div className="order-1 lg:col-start-2 lg:row-start-1">
              <SectionHeading
                eyebrow="Part Completion"
                title="Secondary Operations & Assembly"
                body="Post-molding services help turn molded components into production-ready parts through printing, welding, insert installation, assembly, inspection and packaging."
              />
              <p className="mt-5 max-w-3xl leading-7 text-[var(--brand-dark)]">By coordinating molding and secondary operations under one project, customers can reduce supplier handoffs and receive parts closer to final assembly condition.</p>
            </div>

            <figure className="order-3 grid overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] sm:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] sm:items-center lg:col-start-2 lg:row-start-2">
              <div className="relative aspect-[4/3] min-h-48 sm:aspect-square">
                <Image
                  alt="Component assembly and fit-up for molded plastic parts"
                  className="object-cover object-center"
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 100vw"
                  src="/images/capabilities/molded-part-component-assembly.webp"
                />
              </div>
              <figcaption className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Process Detail</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Close-up component assembly and fit verification for molded plastic parts.</p>
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {secondaryOperationGroups.map((group) => (
              <article className="flex h-full flex-col rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--brand)] sm:p-6" key={group.number}>
                <div className="flex items-start gap-4">
                  <p className="shrink-0 text-sm font-bold text-[var(--brand)]">{group.number}</p>
                  <div>
                    <h3 className="text-xl font-bold leading-tight text-[var(--brand-dark)]">{group.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{group.body}</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2 pl-9" aria-label={`${group.title} processes`}>
                  {group.processes.map((process) => (
                    <li className="rounded-sm border border-[var(--line)] bg-white px-3 py-2 text-xs font-semibold text-[var(--brand-dark)]" key={process}>{process}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="mt-7 border-l-2 border-[var(--brand)] bg-[var(--surface-soft)] px-5 py-4 sm:px-6" aria-label="Why coordinated secondary operations matter">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Why It Matters</p>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-[var(--brand-dark)]">By coordinating injection molding and secondary operations under one project, customers can reduce supplier handoffs and receive molded parts closer to final assembly condition.</p>
          </aside>

          <aside className="mt-8 grid gap-5 rounded-md border border-[var(--line)] bg-[var(--surface-soft)] p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center" aria-label="Secondary operations manufacturing quote">
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Need molded parts delivered assembly-ready?</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]">Send us your CAD files, assembly requirements and finishing specifications for manufacturing review.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Request Manufacturing Quote →</Link>
              <Link className="focus-ring inline-flex w-fit rounded-sm font-bold text-[var(--brand-dark)] transition hover:text-[var(--brand)] hover:underline" href="/request-a-quote">Upload CAD for DFM Review →</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="OEM Applications" title="Plastic Injection Molding Applications" body="Arktech supports injection molded housings, enclosures, structural parts and functional plastic components across robotics, medical devices, automotive, smart products, EV charging and other OEM applications." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 min-[1200px]:grid-cols-4 min-[1200px]:gap-6">
            {applicationIndustries.map((industry) => {
              const cardContent = (
                <>
                  <div className="relative aspect-video overflow-hidden bg-white">
                    <Image
                      alt={industry.alt}
                      className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                      fill
                      sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
                      src={industry.image}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="min-h-12 text-lg font-bold leading-6 text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{industry.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{industry.application}</p>
                  </div>
                </>
              );

              return industry.href ? (
                <Link
                  aria-label={`${industry.title}: ${industry.application}`}
                  className="focus-ring group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:-translate-y-0.5 hover:border-[var(--brand)]"
                  href={industry.href}
                  key={industry.title}
                >
                  {cardContent}
                </Link>
              ) : (
                <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={industry.title}>
                  {cardContent}
                </article>
              );
            })}
          </div>
          <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-3xl text-sm leading-6 text-[var(--muted)]">Explore industry-specific tooling, materials, engineering considerations and molding applications for your product category.</p>
            <Link className="focus-ring inline-flex w-fit shrink-0 rounded-sm font-bold text-[var(--brand)] hover:underline" href="/industries">Explore All Industries →</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Arktech"
            title="Why Product Teams Choose Arktech for Injection Molding"
            body="Arktech combines DFM engineering, tooling, injection molding, part validation and secondary operations under one coordinated project. This helps product teams reduce supplier handoffs, identify manufacturing risks earlier and move from development into repeat production with clearer engineering communication."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 min-[1200px]:grid-cols-4">
            {reasons.map((reason) => (
              <article className="flex h-full flex-col rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 sm:p-6" key={reason.title}>
                <p className="text-sm font-bold tracking-[0.08em] text-[var(--brand)]">{reason.number}</p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-[var(--brand-dark)]">{reason.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[var(--brand-dark)]">{reason.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{reason.body}</p>
                {reason.external ? (
                  <a className="focus-ring mt-5 inline-flex w-fit items-end gap-1 rounded-sm text-sm font-bold text-[var(--brand)] hover:underline lg:mt-auto lg:pt-5" href={reason.href}>
                    <span>{reason.label}</span><span aria-hidden="true" className="shrink-0">→</span>
                  </a>
                ) : (
                  <Link className="focus-ring mt-5 inline-flex w-fit items-end gap-1 rounded-sm text-sm font-bold text-[var(--brand)] hover:underline lg:mt-auto lg:pt-5" href={reason.href}>
                    <span>{reason.label}</span><span aria-hidden="true" className="shrink-0">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>

          <dl className="mt-7 grid grid-cols-2 border-y border-[var(--line)] bg-[var(--surface-soft)] sm:grid-cols-4">
            {whyArktechProof.map((item, index) => (
              <div className={`px-4 py-5 sm:px-5 ${index % 2 === 1 ? "border-l border-[var(--line)]" : ""} ${index > 1 ? "border-t border-[var(--line)] sm:border-t-0" : ""} ${index > 0 ? "sm:border-l sm:border-[var(--line)]" : ""}`} key={item.label}>
                <dt className="text-sm font-bold leading-5 text-[var(--brand-dark)] sm:text-base">{item.value}</dt>
                <dd className="mt-1 text-xs font-medium leading-5 text-[var(--muted)] sm:text-sm">{item.label}</dd>
              </div>
            ))}
          </dl>

          <aside className="mt-7 flex flex-col gap-4 border-l-2 border-[var(--brand)] pl-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8" aria-label="Injection molding engineering review">
            <div>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">Need help choosing the right tooling and production path?</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">Send us your CAD files and project requirements for engineering review.</p>
            </div>
            <Link className="focus-ring inline-flex w-fit shrink-0 rounded-sm text-sm font-bold text-[var(--brand)] hover:underline" href="/request-a-quote">
              Upload CAD for DFM Review →
            </Link>
          </aside>

        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page">
          <div>
            <SectionHeading
              eyebrow="Real Production"
              title="Inside Arktech Plastic Injection Molding Production"
              body="See how Arktech supports injection molding projects through production setup, mold trials, molded-part inspection and process validation before repeat production. Real production visuals show how tooling, process setup and part validation connect before ongoing supply."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,63fr)_minmax(320px,37fr)] lg:items-stretch">
              <figure className="flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-[var(--brand-dark)]">
                  <LazyAutoplayVideo
                    ariaLabel="Plastic injection molding production process at Arktech"
                    className="h-full w-full object-cover object-center"
                    poster="/images/capabilities/plastic-injection-molding-production.webp"
                    src="/videos/injection-molding-production.mp4"
                  />
                </div>
                <figcaption className="flex flex-1 flex-col border-t border-[var(--line)] p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">Injection Molding Production</h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">Production molding for functional plastic parts, housings and OEM components after tooling, process and sample validation.</p>
                  <p className="mt-4 text-sm font-semibold text-[var(--brand-dark)]">Prototype · Low Volume · Repeat Production</p>
                </figcaption>
              </figure>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {productionProofCards.map((proof) => (
                  <article className="flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white" key={proof.title}>
                    <div className="relative aspect-video overflow-hidden bg-[var(--surface-soft)]">
                      <Image alt={proof.alt} className="object-cover object-center" fill sizes="(min-width: 1024px) 37vw, (min-width: 640px) 50vw, 100vw" src={proof.src} />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-[var(--brand-dark)]">{proof.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{proof.body}</p>
                      {proof.href ? (
                        <Link className="focus-ring mt-4 inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] hover:underline lg:mt-auto lg:pt-4" href={proof.href}>
                          View Quality &amp; Documentation →
                        </Link>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 overflow-hidden rounded-sm bg-[var(--surface-soft)] min-[1200px]:grid-cols-4">
              {productionEvidenceProof.map((item, index) => (
                <div className={`px-4 py-5 sm:px-5 ${index % 2 === 1 ? "border-l border-[var(--line)]" : ""} ${index > 1 ? "border-t border-[var(--line)] min-[1200px]:border-t-0" : ""} ${index > 0 ? "min-[1200px]:border-l min-[1200px]:border-[var(--line)]" : ""}`} key={item.label}>
                  <dt className="text-sm font-extrabold leading-5 text-[var(--brand-dark)] sm:text-base">{item.value}</dt>
                  <dd className="mt-1 text-xs font-medium leading-5 text-[var(--muted)] sm:text-sm">{item.label}</dd>
                </div>
              ))}
            </dl>

            <aside className="mt-6 rounded-sm bg-[var(--surface-soft)] px-5 py-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-6" aria-label="Plastic injection molding production review">
              <div>
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">Want to review your part for production?</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">Send us your CAD files, material requirements and expected volumes for DFM and injection molding review.</p>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:min-w-fit sm:flex-row">
                <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                  Upload CAD for DFM Review →
                </Link>
                <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">
                  Request Injection Molding Quote →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,70fr)_minmax(280px,30fr)] lg:items-start">
            <div>
              <SectionHeading eyebrow="Buyer Questions" title="Plastic Injection Molding FAQs" />
              <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {faqs.map((faq, index) => (
                  <details className="group bg-[var(--surface-soft)] px-5 py-1 sm:px-6" key={faq.question} open={index === 0}>
                    <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-5 font-bold text-[var(--brand-dark)]">
                      {faq.question}<span aria-hidden="true" className="text-xl text-[var(--brand)] group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-3xl pb-4 leading-7 text-[var(--muted)]">{faq.answer}</p>
                    {index === 0 ? <Link className="focus-ring mb-5 inline-flex rounded-sm text-sm font-bold text-[var(--brand)] hover:underline" href="/request-a-quote">Upload CAD for DFM Review →</Link> : null}
                  </details>
                ))}
              </div>
            </div>
            <div className="grid gap-5 lg:sticky lg:top-28">
              <aside className="rounded-md border border-[var(--line)] bg-[var(--surface-soft)] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Related Capabilities</p>
                <nav aria-label="Related capabilities" className="mt-4 divide-y divide-[var(--line)]">
                  {faqRelatedCapabilities.map((item) => <Link className="focus-ring flex items-center justify-between gap-3 rounded-sm py-3.5 font-semibold text-[var(--brand-dark)] hover:text-[var(--brand)]" href={item.href} key={item.href}>{item.label}<span aria-hidden="true">→</span></Link>)}
                </nav>
              </aside>
              <aside className="rounded-md border border-[var(--line)] bg-[var(--surface-soft)] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Related Resources</p>
                <nav aria-label="Related resources" className="mt-4 divide-y divide-[var(--line)]">
                  {faqRelatedResources.map((item) => <Link className="focus-ring flex items-center justify-between gap-3 rounded-sm py-3.5 font-semibold text-[var(--brand-dark)] hover:text-[var(--brand)]" href={item.href} key={item.href}>{item.label}<span aria-hidden="true">→</span></Link>)}
                </nav>
              </aside>
            </div>
          </div>

          <aside className="mt-10 flex flex-col gap-5 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6 sm:flex-row sm:items-center sm:justify-between" aria-label="Injection molding project review">
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Ready to review a plastic injection molding project?</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Share your CAD files, material requirements and expected volume for engineering review.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
              <Link className="focus-ring inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Injection Molding Quote</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16">
        <div className="container-page grid gap-7 lg:grid-cols-[minmax(0,62fr)_minmax(320px,38fr)] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Start a Molding RFQ</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Ready to Review Your Plastic Injection Molding Project?</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Send CAD files, drawings, material requirements, expected volumes and any assembly or finish specifications for an engineering review.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
            <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 font-bold text-[var(--brand-dark)] hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Injection Molding Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
