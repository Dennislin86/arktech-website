import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/FullBleedHero";
import { InjectionMoldProjectsCarousel } from "@/components/InjectionMoldProjectsCarousel";
import { site } from "@/lib/site";

type MoldCardData = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
  cta?: string;
};

const coreMolds: MoldCardData[] = [
  {
    id: "precision-injection-molds",
    title: "Precision Injection Molds",
    description: "Tooling for plastic parts with demanding dimensional, fit and repeatability requirements, supported by controlled machining and dimensional validation.",
    image: "/images/mold-types/Precision-Molds.png",
    alt: "Precision injection mold for controlled-dimension plastic parts"
  },
  {
    id: "complex-injection-molds",
    title: "Complex Injection Molds",
    description: "Injection molds using slides, lifters, side actions and other mechanisms for complex geometry, undercuts and challenging part release.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Complex injection mold with multiple side-action mechanisms"
  },
  {
    id: "multi-cavity-molds",
    title: "Multi-Cavity Injection Molds",
    description: "Multiple identical cavities for repeat production, with attention to filling balance, cooling and cavity-to-cavity consistency.",
    image: "/images/mold-types/multi-cavity-injection-molds.webp",
    alt: "Multi-cavity injection mold with identical production cavities",
    href: "/injection-molds/multi-cavity-molds"
  },
  {
    id: "family-injection-molds",
    title: "Family Injection Molds",
    description: "Different related parts produced in one mold when material, molding conditions and production ratios make family tooling practical.",
    image: "/images/mold-types/Family-molds.JPG",
    alt: "Family injection mold with cavities for several related plastic parts"
  },
  {
    id: "large-injection-molds",
    title: "Large Injection Molds",
    description: "Tooling for large plastic housings, panels and structural components, with attention to cooling, warpage, handling and machine compatibility.",
    image: "/images/mold-types/large-component-molds.JPG",
    alt: "Large injection mold for structural plastic housings",
    href: "/injection-molds/large-injection-molds"
  },
  {
    id: "prototype-injection-molds",
    title: "Prototype Injection Molds",
    description: "Tooling for design validation, pilot builds and early production stages before full-scale manufacturing.",
    image: "/images/mold-types/prototype-injection-mold.webp",
    alt: "Prototype injection mold and molded part for design validation"
  }
];

const specializedMolds: MoldCardData[] = [
  {
    id: "unscrewing-molds",
    title: "Unscrewing Injection Molds",
    description: "Tooling for molded internal or external threads that require controlled unscrewing before part ejection.",
    image: "/images/mold-types/unscrewing-molds.webp",
    alt: "Unscrewing mold for threaded plastic components",
    href: "/injection-molds/unscrewing-molds"
  },
  {
    id: "high-gloss-injection-molds",
    title: "High-Gloss Injection Molds",
    description: "Mirror-polished injection tooling for plastic housings, panels and visible parts with demanding surface appearance requirements.",
    image: "/images/mold-types/High-Gloss Injection Molds.JPG",
    alt: "Mirror-polished mold cavities for high-gloss plastic housings"
  },
  {
    id: "high-temperature-injection-molds",
    title: "High-Temperature Injection Molds",
    description: "Tooling designed for high-temperature engineering resins with suitable mold materials, temperature control and process considerations.",
    image: "/images/mold-types/hot-runner-molds.webp",
    alt: "Injection mold tooling for high-temperature engineering resins",
    href: "/resources/injection-molding/engineering-plastics-guide"
  }
];

const specialtyMolding: MoldCardData[] = [
  {
    id: "insert-molding",
    title: "Insert Molding",
    description: "Metal inserts, terminals, bushings or other components positioned and molded directly into the plastic part.",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Insert molding tool for plastic parts with integrated metal inserts",
    href: "/injection-molds/insert-molding-tools"
  },
  {
    id: "two-shot-2k-molding",
    title: "Two-Shot / 2K Molding",
    description: "Two-material or two-color molding using coordinated first- and second-shot tooling and compatible machine configuration.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp",
    alt: "Two-shot 2K mold and multi-material molded component",
    href: "/injection-molds/two-shot-2k-molds"
  },
  {
    id: "in-mold-labeling",
    title: "In-Mold Labeling (IML)",
    description: "Labels or decorative films positioned in the mold and integrated with the plastic part during the injection molding cycle.",
    image: "/images/mold-types/In-mould labelling (IML).png",
    alt: "In-mold labeling process integrating a decorative film with a plastic part",
    href: "/request-a-quote",
    cta: "Discuss IML Project"
  }
];

const supportItems = [
  { title: "DFM & Co-Design", body: "Review part geometry, draft, parting, gating, ejection and the tooling concept before mold design release.", href: "/injection-molding-engineering" },
  { title: "Mold Manufacturing", body: "Coordinate machining, EDM, fitting, assembly and toolmaking around the approved mold design.", href: "/services/injection-mold-manufacturing" },
  { title: "Mold Trial & Validation", body: "Manage trial setup, molding parameters, samples, dimensional inspection, corrections and approval records.", href: "/services/mold-trial-sampling-support" },
  { title: "Export Tooling Support", body: "Prepare machine compatibility information, agreed documentation, spare parts, packing and export delivery.", href: "/services/injection-mold-manufacturing" }
] as const;

const resources = [
  { title: "Injection Mold Design Guidelines", body: "Review the design decisions that influence mold structure, release and maintainability.", href: "/resources/mold-design-guidelines" },
  { title: "Mold Trial & Validation", body: "See how mold trials, samples, dimensional inspection and engineering corrections support approval.", href: "/services/mold-trial-sampling-support" },
  { title: "Engineering Plastics Guide", body: "Compare material-performance and molding considerations before resin and tooling decisions are released.", href: "/resources/injection-molding/engineering-plastics-guide" }
] as const;

const faqs = [
  ["How do you choose between multi-cavity and family molds?", "A multi-cavity mold produces identical parts, while a family mold produces different related parts. The practical choice depends on demand ratio, part size, material, filling balance, cooling and production planning."],
  ["When is an unscrewing mold required?", "Unscrewing tooling is considered when molded threads cannot be released reliably by straight ejection, part deformation or a simpler mold action."],
  ["Can Arktech support hot runner and valve-gate tooling?", "Hot runner and valve-gate options can be evaluated according to resin, part geometry, cavity layout, gate requirements and the receiving production environment."],
  ["What information is needed for a DFM and tooling quotation?", "CAD data, drawings, resin, expected volume, finish, critical dimensions, receiving machine information and any customer tooling standards help define the tooling direction."],
  ["Can Arktech support mold trials and dimensional validation before export?", "Yes. Project support can include mold trials, process parameter records, sample review, dimensional inspection, correction actions and agreed approval documentation before shipment."]
] as const;

function SectionHeading({ eyebrow, title, body, id }: { eyebrow: string; title: string; body?: string; id: string }) {
  return <div className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl" id={id}>{title}</h2>{body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}</div>;
}

function MoldCard({ mold }: { mold: MoldCardData }) {
  const content = <><div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]"><Image alt={mold.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw" src={mold.image} /></div><div className="flex flex-1 flex-col border-t border-[var(--line)] p-5"><h3 className="text-xl font-bold leading-tight text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{mold.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">{mold.description}</p>{mold.href ? <span className="mt-4 text-sm font-bold text-[var(--brand)]">{mold.cta ?? "Explore"} <span aria-hidden="true">→</span></span> : null}</div></>;
  const classes = "group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition hover:border-[var(--brand)] motion-reduce:transition-none";
  return mold.href ? <Link aria-label={`${mold.cta ?? "Explore"} ${mold.title}`} className={`focus-ring ${classes}`} href={mold.href} id={mold.id}>{content}</Link> : <article className={classes} id={mold.id}>{content}</article>;
}

export function InjectionMoldsHubPage() {
  const pageUrl = `${site.url}/injection-molds/`;
  const pageDescription = "Explore custom injection molds, specialized tooling and real mold projects from Arktech, including multi-cavity, family, 2K, unscrewing and high-gloss tooling.";
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: "Injection Molds", item: pageUrl }] },
    { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${pageUrl}#webpage`, name: "Custom Injection Molds for Production", description: pageDescription, url: pageUrl, isPartOf: { "@type": "WebSite", name: site.name, url: site.url } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
  ];

  return <>
    {schemas.map((schema, index) => <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} key={index} type="application/ld+json" />)}
    <FullBleedHero backgroundImages={[{ src: "/images/mold-types/complex-injection-molds.png", alt: "Completed complex Arktech injection mold with coordinated side actions", position: "right" }]} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Injection Molds" }]} description="Explore injection mold configurations, specialized tooling and molding processes for production programs, supported by DFM, mold trials, dimensional validation and export tooling documentation." eyebrow="Injection Molds" height="standard" primaryCta={{ label: "Upload CAD for DFM Review", href: "/request-a-quote" }} secondaryCta={{ label: "Request Tooling Quote", href: "/request-a-quote" }} title="Custom Injection Molds for Production" />

    <section aria-labelledby="core-mold-types-heading" className="scroll-mt-24 bg-[var(--surface-soft)] py-14 sm:py-16" id="mold-types"><div className="container-page"><SectionHeading eyebrow="Core Mold Types" id="core-mold-types-heading" title="Core Injection Mold Configurations" body="Select the mold configuration around part geometry, production volume, cavity strategy, material and receiving machine requirements." /><div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">{coreMolds.map((mold) => <MoldCard key={mold.id} mold={mold} />)}</div></div></section>

    <section aria-labelledby="specialized-tooling-heading" className="bg-white py-14 sm:py-16"><div className="container-page"><SectionHeading eyebrow="Specialized Tooling" id="specialized-tooling-heading" title="Specialized Tooling Capabilities" body="Special mold mechanisms, surface requirements and resin conditions are reviewed as part of the tooling concept." /><div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-3">{specializedMolds.map((mold) => <MoldCard key={mold.id} mold={mold} />)}</div></div></section>

    <section aria-labelledby="specialty-molding-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><SectionHeading eyebrow="Specialty Molding" id="specialty-molding-heading" title="Specialty Injection Molding Processes" body="These tooling approaches integrate inserts, multiple materials or decorative films into the molding sequence." /><div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-3">{specialtyMolding.map((mold) => <MoldCard key={mold.id} mold={mold} />)}</div><div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold"><Link className="focus-ring text-[var(--brand)] hover:underline" href="/injection-molds/overmolding-tools">Explore Overmolding Tools →</Link><Link className="focus-ring text-[var(--brand)] hover:underline" href="/services/plastic-injection-molding">Explore Plastic Injection Molding →</Link></div></div></section>

    <InjectionMoldProjectsCarousel />

    <section aria-labelledby="engineering-support-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><SectionHeading eyebrow="Engineering & Export Tooling Support" id="engineering-support-heading" title="Support from DFM Through Export Delivery" body="Arktech connects mold selection with engineering review, tool manufacture, trial evidence and preparation for the receiving production environment." /><div className="mt-8 grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4">{supportItems.map((item) => <Link className="focus-ring group bg-white p-5 transition hover:bg-[#fff8f8]" href={item.href} key={item.title}><h3 className="font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.body}</p><span className="mt-4 inline-flex text-sm font-bold text-[var(--brand)]">Explore →</span></Link>)}</div><div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--line)] pt-6"><p className="w-full text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)] sm:w-auto">Related Tooling Options</p><Link className="focus-ring font-semibold text-[var(--brand-dark)] hover:text-[var(--brand)]" href="/injection-molds/hot-runner-molds">Hot Runner Systems →</Link><Link className="focus-ring font-semibold text-[var(--brand-dark)] hover:text-[var(--brand)]" href="/injection-molds/overmolding-tools">Overmolding Tools →</Link></div></div></section>

    <section aria-labelledby="resources-heading" className="bg-white py-14 sm:py-16"><div className="container-page"><SectionHeading eyebrow="Selected Resources" id="resources-heading" title="Engineering Guidance for Tooling Decisions" /><div className="mt-8 grid gap-5 md:grid-cols-3">{resources.map((resource) => <Link className="focus-ring group border-t-2 border-[var(--brand)] bg-[var(--surface-soft)] p-5" href={resource.href} key={resource.title}><h3 className="text-lg font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{resource.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{resource.body}</p><span className="mt-4 inline-flex text-sm font-bold text-[var(--brand)]">Read Resource →</span></Link>)}</div></div></section>

    <section aria-labelledby="faq-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page grid gap-8 lg:grid-cols-[minmax(0,36fr)_minmax(0,64fr)] lg:gap-14"><SectionHeading eyebrow="FAQ" id="faq-heading" title="Injection Mold Purchasing FAQs" /><div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">{faqs.map(([question, answer]) => <details className="group" key={question}><summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold text-[var(--brand-dark)]"><span>{question}</span><span aria-hidden="true" className="text-xl text-[var(--brand)] group-open:hidden">+</span><span aria-hidden="true" className="hidden text-xl text-[var(--brand)] group-open:inline">−</span></summary><p className="pb-5 leading-7 text-[var(--muted)]">{answer}</p></details>)}</div></div></section>

    <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-14 sm:py-16"><div className="container-page grid gap-8 lg:grid-cols-[minmax(0,58fr)_minmax(320px,42fr)] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Start Your Tooling Review</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Discuss Your Injection Mold Project</h2><p className="mt-4 max-w-3xl leading-7 text-[var(--cta-body)]">Upload your CAD data and project requirements for DFM review, tooling discussion and quotation.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link></div></div></section>
  </>;
}
