import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/FullBleedHero";
import { InjectionMoldProjectsCarousel } from "@/components/InjectionMoldProjectsCarousel";
import { site } from "@/lib/site";

const pageTitle = "Injection Mold Examples & Export Tooling Projects | Arktech";
const pageDescription =
  "Explore injection mold types for different part geometries, production volumes and molding requirements, including precision, multi-cavity, complex, hot runner, insert, overmolding, 2K, unscrewing and large molds.";
const pageUrl = `${site.url}/tooling-examples`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: pageUrl,
    images: [{ url: "/images/mold-types/Precision-Molds.png", alt: "Completed precision injection mold for production tooling" }]
  }
};

type MoldType = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
};

const coreMolds: MoldType[] = [
  {
    id: "precision-injection-molds",
    title: "Precision Injection Molds",
    description: "Precision tooling for parts requiring controlled dimensions, repeatable molding and stable assembly interfaces.",
    image: "/images/mold-types/Precision-Molds.png",
    alt: "Precision injection mold for controlled-dimension plastic parts and repeatable production"
  },
  {
    id: "multi-cavity-molds",
    title: "Multi-Cavity Injection Molds",
    description: "Multi-cavity tooling engineered for balanced filling, cooling and cavity-to-cavity repeatability.",
    image: "/images/mold-types/multi-cavity-injection-molds.webp",
    alt: "Multi-cavity injection mold with repeated production cavities",
    href: "/tooling-examples/multi-cavity-molds"
  },
  {
    id: "complex-injection-molds",
    title: "Complex Injection Molds",
    description: "Tooling for demanding geometry, undercuts, coordinated side actions and engineered mold movements.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Complex injection mold with coordinated side-action mechanisms"
  },
  {
    id: "large-injection-molds",
    title: "Large Injection Molds",
    description: "Large-format tooling for housings, panels and structural plastic components.",
    image: "/images/mold-types/large-component-molds.JPG",
    alt: "Large injection mold for structural plastic housings and panels",
    href: "/tooling-examples/large-component-molds"
  },
  {
    id: "prototype-injection-molds",
    title: "Prototype Injection Molds",
    description: "Prototype tooling for engineering validation, functional samples and early production builds.",
    image: "/images/mold-types/prototype-injection-mold.webp",
    alt: "Prototype injection mold with a molded part for engineering validation"
  }
];

const specialtyMolds: MoldType[] = [
  {
    id: "insert-molding-tools",
    title: "Insert Molding Tools",
    description: "Tooling for molding plastic around metal inserts or prepared components with location, retention and molding access reviewed before release.",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Insert molding tool for plastic parts with integrated inserts",
    href: "/tooling-examples/insert-molds"
  },
  {
    id: "overmolding-tools",
    title: "Overmolding Tools",
    description: "Tooling for molding a second compatible material over a substrate or first molded component with bonding, shut-off and interface requirements reviewed.",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Production mold used for insert and overmolding tooling applications",
    href: "/tooling-examples/overmolding-tools"
  },
  {
    id: "two-shot-2k-molds",
    title: "Two-Shot / 2K Molds",
    description: "Two-material or two-color tooling planned around shot sequence, material compatibility and molding-machine configuration.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp",
    alt: "Two-shot 2K injection mold for multi-material plastic parts",
    href: "/tooling-examples/two-shot-2k-molds"
  }
];

const specializedMolds: MoldType[] = [
  {
    id: "unscrewing-molds",
    title: "Unscrewing Molds",
    description: "Mechanically controlled tooling for threaded plastic parts that cannot be released reliably through straight ejection.",
    image: "/images/mold-types/unscrewing-molds.webp",
    alt: "Unscrewing injection mold for threaded plastic components",
    href: "/tooling-examples/unscrewing-molds"
  },
  {
    id: "hot-runner-molds",
    title: "Hot Runner Molds",
    description: "Hot runner tooling evaluated around material flow, gate control, cavity layout and production requirements.",
    image: "/images/mold-types/hot-runner-molds.webp",
    alt: "Hot runner injection mold for controlled production molding",
    href: "/tooling-examples/hot-runner-molds"
  },
  {
    id: "high-temperature-injection-molds",
    title: "High-Temperature Injection Molds",
    description: "Tooling engineered around the drying, flow, mold-temperature, wear and validation requirements of verified high-temperature engineering thermoplastics such as PPS, PPSU and PEEK.",
    image: "/images/mold-types/hot-runner-molds.webp",
    alt: "Injection mold tooling for high-temperature engineering thermoplastic processing",
    href: "/resources/injection-molding/engineering-plastics-guide"
  }
];

const requirementRoutes = [
  {
    title: "Need Higher Output?",
    terms: "Production volume · cavity count · cycle requirements",
    links: [
      { label: "Multi-Cavity Molds", href: "/tooling-examples/multi-cavity-molds" },
      { label: "Hot Runner Molds", href: "/tooling-examples/hot-runner-molds" }
    ]
  },
  {
    title: "Complex Geometry or Undercuts?",
    terms: "Parting · sliders · lifters · side actions · threaded features",
    links: [
      { label: "Complex Injection Molds" },
      { label: "Unscrewing Molds", href: "/tooling-examples/unscrewing-molds" },
      { label: "Slider vs Lifter Guide", href: "/resources/injection-molds/slider-vs-lifter" }
    ]
  },
  {
    title: "Multiple Materials or Inserts?",
    terms: "Insert · overmolding · 2K",
    links: [
      { label: "Insert Molding Tools", href: "/tooling-examples/insert-molds" },
      { label: "Overmolding Tools", href: "/tooling-examples/overmolding-tools" },
      { label: "Two-Shot / 2K Molds", href: "/tooling-examples/two-shot-2k-molds" }
    ]
  },
  {
    title: "Large Housing or Structural Part?",
    terms: "Part size · machine compatibility · cooling · mold movement",
    links: [{ label: "Large Injection Molds", href: "/tooling-examples/large-component-molds" }]
  },
  {
    title: "High-Temperature Material Requirements?",
    terms: "PPS · PPSU · PEEK · mold temperature · material preparation",
    links: [
      { label: "High-Temperature Injection Molds", href: "#high-temperature-injection-molds" },
      { label: "Engineering Plastics Guide", href: "/resources/injection-molding/engineering-plastics-guide" },
      { label: "Material Selection Guide", href: "/resources/material-selection-guide" }
    ]
  }
] as const;

const engineeringLinks = [
  ["DFM Engineering", "/services/dfm-engineering"],
  ["Mold Design & Approval", "/services/injection-mold-manufacturing"],
  ["Mold Flow Analysis", "/services/dfm-engineering#mold-flow-analysis"],
  ["Mold Trial & Validation", "/services/mold-trial-sampling-support"],
  ["Injection Mold Manufacturing", "/services/injection-mold-manufacturing"]
] as const;

const buyerCards = [
  {
    title: "Product Companies & OEM Teams",
    description: "For product teams developing molded components and moving from engineering into production tooling.",
    label: "Explore Plastic Injection Molding",
    href: "/services/plastic-injection-molding"
  },
  {
    title: "Injection Molding Companies",
    description: "For molders requiring additional tooling capacity and molds compatible with their receiving production environment.",
    label: "Explore Injection Mold Manufacturing",
    href: "/services/injection-mold-manufacturing"
  },
  {
    title: "Engineering & Sourcing Teams",
    description: "For teams coordinating specifications, technical review, supplier communication and tooling delivery.",
    label: "Explore DFM Engineering",
    href: "/services/dfm-engineering"
  }
] as const;

const relatedCapabilities = [
  ["Injection Mold Manufacturing", "/services/injection-mold-manufacturing"],
  ["DFM Engineering", "/services/dfm-engineering"],
  ["Mold Trial & Validation", "/services/mold-trial-sampling-support"],
  ["Plastic Injection Molding", "/services/plastic-injection-molding"],
  ["Quality & Documentation", "/company/quality-documentation"],
  ["Project Management", "/company/project-management"]
] as const;

const engineeringResources = [
  ["Mold Design Guidelines", "/resources/mold-design-guidelines"],
  ["Hot Runner vs Cold Runner", "/resources/injection-molds/hot-runner-vs-cold-runner"],
  ["Slider vs Lifter", "/resources/injection-molds/slider-vs-lifter"],
  ["Material Selection Guide", "/resources/material-selection-guide"],
  ["Wall Thickness Guidelines", "/resources/injection-molding/wall-thickness-guidelines"],
  ["Draft Angle Guidelines", "/resources/injection-molding/draft-angle-guidelines"]
] as const;

const faqs = [
  ["What injection mold types can Arktech manufacture?", "Arktech supports precision, multi-cavity, family, complex, large, prototype, insert, overmolding, two-shot / 2K, unscrewing, hot runner and project-verified high-temperature injection molds."],
  ["How do I choose the right injection mold type?", "The tooling direction depends on part geometry, resin, expected production volume, cavity strategy, gate requirements, finish and the receiving molding machine. These inputs are reviewed before a mold concept is confirmed."],
  ["When should a multi-cavity mold be used?", "Multi-cavity tooling may suit repeat production when demand, part size, resin behavior, filling balance, cooling and the available machine support multiple cavities."],
  ["What is the difference between hot runner and cold runner tooling?", "A cold runner solidifies and is removed with each cycle. A hot runner keeps material in the runner system molten. Selection depends on resin, part design, gate requirements, production needs and maintenance capability."],
  ["When is an unscrewing mold required?", "An unscrewing mechanism is considered for threaded features that cannot be released reliably by straight ejection, part deformation or another simpler mold action."],
  ["What is the difference between overmolding and two-shot molding?", "Overmolding places a second material over a prepared substrate or first component, while two-shot molding produces both materials in a coordinated machine and mold sequence. The practical choice depends on materials, geometry, volume and equipment."],
  ["Can a mold be designed for my existing injection molding machine?", "Yes. The receiving machine information should be reviewed before mold design release, including platen and tie-bar constraints, shot capacity, interfaces and hot runner controls where applicable."]
] as const;

function SectionHeading({ eyebrow, title, body, id }: { eyebrow: string; title: string; body?: string; id: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl" id={id}>{title}</h2>
      {body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

function MoldCard({ mold, size = "medium" }: { mold: MoldType; size?: "large" | "medium" }) {
  const content = (
    <>
      <div className={`relative overflow-hidden bg-[#f3f5f7] ${size === "large" ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <Image alt={mold.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes={size === "large" ? "(min-width: 1024px) 48vw, 100vw" : "(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"} src={mold.image} />
      </div>
      <div className={`flex flex-1 flex-col border-t border-[var(--line)] ${size === "large" ? "p-6 sm:p-7" : "p-5"}`}>
        <h3 className={`${size === "large" ? "text-2xl sm:text-[1.75rem]" : "text-xl"} font-bold leading-tight text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]`}>{mold.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-[var(--muted)]">{mold.description}</p>
        {mold.href ? <span className="mt-5 text-sm font-bold text-[var(--brand)]">Explore <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span></span> : null}
      </div>
    </>
  );
  const className = "group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition hover:border-[var(--brand)] motion-reduce:transition-none";
  if (mold.href) return <Link aria-label={`Explore ${mold.title}`} className={`focus-ring ${className}`} href={mold.href} id={mold.id}>{content}</Link>;
  return <article className={className} id={mold.id}>{content}</article>;
}

export default function ToolingExamplesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Injection Molds", item: pageUrl }
    ]
  };
  const collectionSchema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Injection Mold Types for Production Tooling", description: pageDescription, url: pageUrl, isPartOf: { "@type": "WebSite", name: site.name, url: site.url } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return (
    <>
      {[breadcrumbSchema, collectionSchema, faqSchema].map((schema, index) => <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} key={index} type="application/ld+json" />)}

      <FullBleedHero
        backgroundImages={[{
          src: "/images/mold-types/complex-injection-molds.png",
          alt: "Completed complex Arktech injection mold with coordinated tooling mechanisms",
          position: "right"
        }]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Injection Molds" }]}
        description="Explore real Arktech tooling examples including custom production molds, multi-cavity molds, complex tooling, hot runner systems and specialized mold structures for overseas production."
        eyebrow="Real Tooling Projects"
        height="standard"
        primaryCta={{ label: "View Tooling Projects", href: "#mold-types" }}
        secondaryCta={{ label: "Upload CAD for DFM Review", href: "/request-a-quote" }}
        title="Injection Mold & Tooling Examples"
      />

      <section aria-labelledby="core-mold-types-heading" className="scroll-mt-24 bg-[var(--surface-soft)] py-14 sm:py-16" id="mold-types"><div className="container-page scroll-mt-24" id="production-injection-molds"><SectionHeading eyebrow="Core Mold Types" id="core-mold-types-heading" title="Injection Mold Types for Production Applications" body="Different mold types are selected around part geometry, production volume, material, cavity requirements, machine conditions and long-term tooling needs." /><div className="mt-9 grid auto-rows-fr gap-6 lg:grid-cols-2">{coreMolds.map((mold) => <MoldCard key={mold.title} mold={mold} size="large" />)}</div></div></section>

      <section aria-labelledby="specialty-molding-heading" className="scroll-mt-24 bg-white py-14 sm:py-16" id="insert-overmolding-tools"><div className="container-page"><SectionHeading eyebrow="Specialty Molding" id="specialty-molding-heading" title="Specialty Injection Molding Tools" body="Tooling structures are selected around how materials, inserts and molded interfaces must be formed within the production process." /><div className="mt-9 grid auto-rows-fr gap-5 md:grid-cols-3">{specialtyMolds.map((mold) => <MoldCard key={mold.title} mold={mold} />)}</div></div></section>

      <section aria-labelledby="specialized-tooling-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><SectionHeading eyebrow="Specialized Tooling" id="specialized-tooling-heading" title="Specialized Mold Structures & Flow Systems" body="Thread release, melt delivery and gate control can require dedicated mold mechanisms or flow-system engineering." /><div className="mt-9 grid auto-rows-fr gap-5 md:grid-cols-3">{specializedMolds.map((mold) => <MoldCard key={mold.title} mold={mold} />)}</div></div></section>

      <section aria-labelledby="requirements-heading" className="bg-white py-14 sm:py-16"><div className="container-page"><SectionHeading eyebrow="Choose by Project Requirement" id="requirements-heading" title="Find the Right Mold Type for Your Project" body="Start with the production or part-design requirement that has the greatest influence on the tooling concept." /><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-6">{requirementRoutes.map((route, index) => <article className={`rounded-md border border-[var(--line)] bg-[var(--surface-soft)] p-6 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`} key={route.title}><p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Project Route {String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 text-xl font-bold text-[var(--brand-dark)]">{route.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{route.terms}</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">{route.links.map((link) => "href" in link ? <Link className="focus-ring text-sm font-bold text-[var(--brand)] hover:underline" href={link.href} key={link.label}>{link.label} →</Link> : <span className="text-sm font-semibold text-[var(--brand-dark)]" key={link.label}>{link.label}</span>)}</div></article>)}</div></div></section>

      <InjectionMoldProjectsCarousel />

      <section aria-labelledby="engineering-support-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><SectionHeading eyebrow="Related Engineering" id="engineering-support-heading" title="Engineering Support Behind Every Mold Type" body="Mold selection is coordinated with part manufacturability, mold design, flow behavior, validation and the receiving production environment." /><div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-y border-[var(--line)] py-6">{engineeringLinks.map(([label, href]) => <Link className="focus-ring font-bold text-[var(--brand-dark)] transition hover:text-[var(--brand)]" href={href} key={label}>{label} <span aria-hidden="true" className="text-[var(--brand)]">→</span></Link>)}</div></div></section>

      <section aria-labelledby="who-we-support-heading" className="bg-white py-14 sm:py-16"><div className="container-page"><SectionHeading eyebrow="Who We Support" id="who-we-support-heading" title="Built for Product Teams, Molders and Sourcing Engineers" /><div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-3">{buyerCards.map((card) => <article className="flex h-full flex-col border-t-2 border-[var(--brand)] bg-[var(--surface-soft)] p-6" key={card.title}><h3 className="text-xl font-bold text-[var(--brand-dark)]">{card.title}</h3><p className="mt-3 flex-1 leading-7 text-[var(--muted)]">{card.description}</p><Link className="focus-ring mt-5 text-sm font-bold text-[var(--brand)] hover:underline" href={card.href}>{card.label} →</Link></article>)}</div></div></section>

      <section aria-labelledby="related-capabilities-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><SectionHeading eyebrow="Related Capabilities" id="related-capabilities-heading" title="Continue into Tooling & Production Support" /><div className="mt-7 grid border-x border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">{relatedCapabilities.map(([label, href]) => <Link className="focus-ring flex min-h-16 items-center justify-between border-b border-[var(--line)] bg-white px-5 font-bold text-[var(--brand-dark)] transition hover:bg-[#fff8f8] hover:text-[var(--brand)] sm:border-r" href={href} key={label}><span>{label}</span><span aria-hidden="true">→</span></Link>)}</div></div></section>

      <section aria-labelledby="resources-heading" className="bg-white py-14 sm:py-16"><div className="container-page"><SectionHeading eyebrow="Engineering Resources" id="resources-heading" title="Injection Mold Design & Tooling Guides" /><ul className="mt-7 grid gap-x-8 border-y border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">{engineeringResources.map(([label, href]) => <li className="border-b border-[var(--line)] last:border-b-0" key={label}><Link className="focus-ring flex min-h-16 items-center justify-between font-semibold text-[var(--brand-dark)] transition hover:text-[var(--brand)]" href={href}><span>{label}</span><span aria-hidden="true" className="text-[var(--brand)]">→</span></Link></li>)}</ul></div></section>

      <section aria-labelledby="faq-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page grid gap-8 lg:grid-cols-[minmax(0,36fr)_minmax(0,64fr)] lg:gap-14"><SectionHeading eyebrow="FAQ" id="faq-heading" title="Injection Mold Type FAQs" /><div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">{faqs.map(([question, answer]) => <details className="group py-1" key={question}><summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold text-[var(--brand-dark)]"><span>{question}</span><span aria-hidden="true" className="text-xl text-[var(--brand)] group-open:hidden">+</span><span aria-hidden="true" className="hidden text-xl text-[var(--brand)] group-open:inline">−</span></summary><p className="pb-5 leading-7 text-[var(--muted)]">{answer}</p></details>)}</div></div></section>

      <section className="border-t border-[var(--line)] bg-[var(--cta-bg)] py-14 sm:py-16"><div className="container-page grid gap-8 lg:grid-cols-[minmax(0,58fr)_minmax(320px,42fr)] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Start Your Tooling Review</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Not Sure Which Mold Type Fits Your Project?</h2><p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Send your CAD files, drawings, resin, expected production volume and molding-machine requirements. Our engineering team can review the part and recommend a practical tooling direction.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link></div></div></section>
    </>
  );
}
