import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Injection Mold Types for Production & Specialized Tooling | Arktech Mold" },
  description:
    "Explore Arktech custom injection molds, production molds, multi-cavity, high-cavitation, large, complex, insert, overmolding, 2K, unscrewing, hot runner, valve gate and slider mold capabilities.",
  alternates: { canonical: "/tooling-examples" }
};

type MoldType = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  linkLabel: string;
  related?: Array<{ label: string; href: string }>;
};

const productionMolds: MoldType[] = [
  {
    id: "custom-injection-molds",
    title: "Custom Injection Molds",
    description:
      "Customer-specific mold structures developed around part geometry, resin, production requirements, molding-machine compatibility and agreed mold standards.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Custom injection mold with multiple engineered tooling actions",
    href: "/services/injection-mold-manufacturing",
    linkLabel: "View mold manufacturing"
  },
  {
    id: "production-injection-molds",
    title: "Production Injection Molds",
    description:
      "Production-ready molds planned for repeat molding, stable processing, service access, wear-component support and transfer to the customer’s production environment.",
    image: "/images/process/tooling-manufacturing-plan-mold.png",
    alt: "Production injection mold prepared for repeat molding and export delivery",
    href: "/services/injection-mold-manufacturing",
    linkLabel: "View production tooling"
  },
  {
    id: "multi-cavity-molds",
    title: "Multi-Cavity Molds",
    description:
      "Multiple-cavity mold layouts developed for balanced filling, repeatable part dimensions, controlled cooling and efficient recurring production.",
    image: "/images/mold-types/multi-cavity-injection-molds.webp",
    alt: "Multi-cavity injection molds for repeat plastic part production",
    href: "/tooling-examples/multi-cavity-molds",
    linkLabel: "View multi-cavity molds"
  },
  {
    id: "high-cavitation-molds",
    title: "High-Cavitation Molds",
    description:
      "Higher cavity-count tooling considered where production demand, part size, runner balance, cooling and the available molding machine support the strategy.",
    image: "/images/mold-types/multi-cavity-injection-molds.png",
    alt: "High-cavitation injection mold with repeated cavity layout",
    href: "/tooling-examples/multi-cavity-molds",
    linkLabel: "Review cavity strategy"
  },
  {
    id: "large-injection-molds",
    title: "Large Injection Molds",
    description:
      "Large molds for industrial housings and structural components, with attention to machine fit, cooling, movement, lifting and dimensional stability.",
    image: "/images/mold-types/large-component-molds.JPG",
    alt: "Large injection mold for industrial housing and structural plastic parts",
    href: "/tooling-examples/large-component-molds",
    linkLabel: "View large injection molds"
  },
  {
    id: "complex-injection-molds",
    title: "Complex Injection Molds",
    description:
      "Complex tooling configurations for demanding part geometry, coordinated side actions, undercuts and multiple engineered mold movements.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Complex injection mold with multiple sliders and tooling mechanisms",
    href: "/services/injection-mold-manufacturing",
    linkLabel: "Discuss complex tooling"
  }
];

const specializedTools: MoldType[] = [
  {
    id: "insert-overmolding-tools",
    title: "Insert & Overmolding Tools",
    description:
      "Tooling for molding around metal inserts, prepared substrates or compatible second materials, with location, shutoff and bonding risks reviewed before release.",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Insert molding tools for plastic components with integrated metal inserts",
    href: "/tooling-examples/insert-molds",
    linkLabel: "View insert molding tools",
    related: [{ label: "Overmolding tools", href: "/tooling-examples/overmolding-tools" }]
  },
  {
    id: "two-shot-2k-molds",
    title: "Two-Shot / 2K Molds",
    description:
      "Two-material or two-color tooling planned around molding-machine configuration, material compatibility, shot sequence and controlled transition lines.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp",
    alt: "Two-shot and 2K injection mold for multi-material plastic parts",
    href: "/tooling-examples/two-shot-2k-molds",
    linkLabel: "View two-shot / 2K molds"
  },
  {
    id: "unscrewing-molds",
    title: "Unscrewing Molds",
    description:
      "Mechanically controlled mold systems for threaded plastic parts that cannot be released reliably through straight ejection or part deformation.",
    image: "/images/mold-types/unscrewing-molds.webp",
    alt: "Unscrewing injection mold for internally threaded plastic components",
    href: "/tooling-examples/unscrewing-molds",
    linkLabel: "View unscrewing molds"
  },
  {
    id: "hot-runner-molds",
    title: "Hot Runner Molds",
    description:
      "Hot runner tooling evaluated for balanced delivery, gate control, material behavior, production stability and the customer’s molding requirements.",
    image: "/images/mold-types/hot-runner-molds.webp",
    alt: "Hot runner injection mold for controlled production molding",
    href: "/tooling-examples/hot-runner-molds",
    linkLabel: "View hot runner molds"
  },
  {
    id: "valve-gate-molds",
    title: "Valve Gate Molds",
    description:
      "Valve gate configurations considered where controlled gate opening, cosmetic gate requirements or filling strategy justify their use within a hot runner system.",
    image: "/images/mold-types/hot-runner-molds.webp",
    alt: "Hot runner injection mold representative of valve gate tooling engineering",
    href: "/tooling-examples/hot-runner-molds",
    linkLabel: "Review hot runner engineering"
  },
  {
    id: "slider-lifter-molds",
    title: "Slider & Lifter Molds",
    description:
      "Side-action tooling using sliders and lifters to release undercuts and complex features while maintaining a controlled molding and ejection sequence.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Complex injection mold with sliders and lifters for side-action release",
    href: "/services/injection-mold-manufacturing",
    linkLabel: "Discuss slider and lifter tooling"
  }
];

const selectionFactors = [
  "Part geometry and undercuts",
  "Annual production requirements",
  "Material and shrinkage behavior",
  "Cavity count and cycle requirements",
  "Cosmetic and surface requirements",
  "Parting, slider and lifter strategy",
  "Insert or overmolding requirements",
  "Hot runner and gate requirements",
  "Customer molding-machine requirements"
];

const engineeringLinks = [
  ["DFM Engineering", "/services/dfm-engineering"],
  ["Mold Design & Approval", "/services/injection-mold-manufacturing"],
  ["Mold Flow Analysis", "/services/dfm-engineering"],
  ["Mold Trial & Validation", "/services/mold-trial-sampling-support"],
  ["Injection Mold Manufacturing", "/services/injection-mold-manufacturing"]
] as const;

const faqs = [
  ["What injection mold types can Arktech manufacture?", "Arktech supports custom and production injection molds, including multi-cavity, large, complex, insert, overmolding, two-shot / 2K, unscrewing, hot runner and other application-specific mold structures."],
  ["When should a multi-cavity mold be used?", "A multi-cavity strategy may suit repeat production when part demand, resin behavior, mold balance, machine capacity and quality requirements support multiple cavities."],
  ["What is the difference between hot runner and cold runner tooling?", "A hot runner system keeps resin within the runner system molten, while a cold runner solidifies and is ejected with the parts. Selection depends on material, part design, volume, gate requirements and project economics."],
  ["Can Arktech build two-shot / 2K molds?", "Yes. Two-shot projects require early confirmation of material compatibility, shot sequence, rotary or transfer concept and customer molding-machine configuration."],
  ["Can Arktech build unscrewing molds for threaded parts?", "Yes. Thread geometry, release method, mechanism wear, lubrication, cycle sequence and maintenance requirements are reviewed during engineering."],
  ["Do you support insert and overmolding tooling?", "Yes. Insert location, substrate control, material compatibility, shutoff design and flash risk are reviewed according to the selected molding process."],
  ["Can molds be designed for customer injection molding machines?", "Yes. Machine information such as platen dimensions, tie-bar spacing, shot capacity, interface standards and hot runner controls should be provided before mold design release."]
] as const;

function MoldCard({ mold }: { mold: MoldType }) {
  return (
    <article className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm" id={mold.id}>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#f4f6f8]">
        <Image alt={mold.alt} className="object-cover object-center" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={mold.image} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-[var(--brand-dark)]">{mold.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-[var(--muted)]">{mold.description}</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-[var(--brand)]">
          <Link className="focus-ring hover:underline" href={mold.href}>{mold.linkLabel} →</Link>
          {mold.related?.map((link) => <Link className="focus-ring hover:underline" href={link.href} key={link.href}>{link.label} →</Link>)}
        </div>
      </div>
    </article>
  );
}

export default function ToolingExamplesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }))
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} type="application/ld+json" />
      <section className="border-b border-[var(--line)] bg-white">
        <div className="container-page grid gap-9 py-12 sm:py-16 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:items-center lg:gap-12 xl:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Injection Molds</p>
            <h1 className="internal-page-title mt-4 text-[var(--brand-dark)]">Injection Mold Types for Production &amp; Specialized Tooling</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">Arktech manufactures custom injection molds for overseas production, including multi-cavity, high-cavitation, hot runner, 2K, insert, overmolding, unscrewing and other complex tooling configurations.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
              <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
            <Image alt="Complex custom injection mold manufactured for overseas production" className="object-cover object-center" fill priority sizes="(min-width: 1024px) 42vw, 100vw" src="/images/mold-types/complex-injection-molds.png" />
          </div>
        </div>
      </section>
      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="production-molds-heading">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Production Tooling</p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl" id="production-molds-heading">Production Injection Molds</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Production mold strategy is selected around the part, required output, customer machine and long-term tooling expectations.</p>
          <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">{productionMolds.map((mold) => <MoldCard key={mold.title} mold={mold} />)}</div>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-16" aria-labelledby="specialized-tools-heading">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Complex Mold Actions</p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl" id="specialized-tools-heading">Specialized Molding Tools</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Specialized tooling is considered when material combinations, threaded geometry, undercuts, gating or molding-machine requirements need a more advanced mold structure.</p>
          <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">{specializedTools.map((mold) => <MoldCard key={mold.title} mold={mold} />)}</div>
        </div>
      </section>
      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page grid gap-9 lg:grid-cols-[minmax(0,44fr)_minmax(0,56fr)] lg:gap-14">
          <div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Buyer Guidance</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">How Mold Type Is Selected</h2><p className="mt-4 leading-7 text-[var(--muted)]">The appropriate mold type is defined by engineering and production requirements rather than by a single feature. Arktech reviews the part and receiving production environment before confirming a tooling concept.</p></div>
          <ul className="grid gap-3 sm:grid-cols-2">{selectionFactors.map((factor) => <li className="flex min-h-14 items-center gap-3 rounded-sm border border-[var(--line)] bg-white px-4 font-semibold text-[var(--brand-dark)]" key={factor}><span aria-hidden="true" className="text-[var(--brand)]">—</span>{factor}</li>)}</ul>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-16">
        <div className="container-page"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Related Engineering</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Engineering Support for Mold Selection</h2><p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Mold selection is coordinated with part manufacturability, mold design, flow behavior, validation and the complete tool-building process.</p><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{engineeringLinks.map(([label, href]) => <Link className="focus-ring flex min-h-20 items-center justify-between rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-4 font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href={href} key={label}><span>{label}</span><span aria-hidden="true">→</span></Link>)}</div></div>
      </section>
      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:gap-14"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">FAQ</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Injection Mold Type FAQs</h2></div><div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">{faqs.map(([question, answer]) => <details className="group py-1" key={question}><summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold text-[var(--brand-dark)]"><span>{question}</span><span aria-hidden="true" className="text-xl text-[var(--brand)] group-open:hidden">+</span><span aria-hidden="true" className="hidden text-xl text-[var(--brand)] group-open:inline">−</span></summary><p className="pb-5 leading-7 text-[var(--muted)]">{answer}</p></details>)}</div></div>
      </section>
      <section className="border-t border-[var(--line)] bg-[var(--cta-bg)] py-14 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,58fr)_minmax(320px,42fr)] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Start Your Tooling Project</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Select the Right Mold Strategy for Your Project</h2><p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Send us your CAD files, drawings, material requirements, production volumes and molding-machine information. Our engineering team will review DFM, mold structure and tooling options before quotation.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link></div></div>
      </section>
    </>
  );
}
