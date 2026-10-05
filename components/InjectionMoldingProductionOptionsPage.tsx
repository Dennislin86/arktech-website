import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const stages = [
  {
    id: "prototype",
    title: "Prototype Injection Molding",
    body: "Molded parts for functional, fit and assembly evaluation before production requirements are finalized.",
    considerations: ["Design and assembly confirmation", "Material and sample requirements", "Tooling strategy for future production"],
    image: "/images/mold-types/prototype-injection-mold.webp",
    alt: "Injection mold with a white molded housing for engineering evaluation"
  },
  {
    id: "low-volume",
    title: "Low-Volume Injection Molding",
    body: "Controlled production batches for product launches, uncertain demand and service parts.",
    considerations: ["Expected batch demand", "Process repeatability and material supply", "Inspection and secondary operations"],
    image: "/images/capabilities/plastic-injection-molding-production-video-frame.webp",
    alt: "Clear molded plastic parts beside an automated injection molding cell"
  },
  {
    id: "mass-production",
    title: "Mass Production Injection Molding",
    body: "Repeat production planned around confirmed tooling, process control and recurring supply requirements.",
    considerations: ["Tooling and process readiness", "Material supply and production planning", "Inspection, packaging and recurring delivery"],
    image: "/images/process/export-delivery-production-support-molding.png",
    alt: "Injection mold installed in a molding machine for plastic part production"
  }
];

const comparison = [
  ["Project Stage", "Engineering evaluation", "Launch, pilot or service demand", "Released repeat program"],
  ["Main Objective", "Confirm fit, function and assembly", "Supply controlled batches while demand develops", "Support recurring production requirements"],
  ["Tooling Readiness", "Tooling strategy aligned with validation needs", "Approved tooling prepared for repeat batches", "Confirmed tooling and maintenance planning"],
  ["Expected Demand", "Sample and evaluation quantities", "Intermittent or developing batch demand", "Recurring demand and supply planning"],
  ["Inspection Requirements", "Sample and functional evaluation", "Batch and repeatability checks", "Agreed recurring production inspection"],
  ["Scale-Up Considerations", "Record design and tooling learning", "Review material, process and supply stability", "Plan process control, maintenance and recurring delivery"]
];

const decisionFactors = [
  ["Project stage", "Whether the program is evaluating a design, preparing a launch or releasing repeat production."],
  ["Demand and repeat orders", "Expected batch patterns and future orders affect tooling, material and production planning."],
  ["Tooling validation", "The mold and approved samples should support the intended production and inspection scope."],
  ["Part requirements", "Material, appearance, critical dimensions and functional checks influence the selected route."],
  ["Finishing and scale-up", "Secondary operations, assembly, packaging and supply requirements should be planned with molding."]
];

const readinessSteps = [
  "Confirm tooling and sample status",
  "Agree material, inspection and finishing requirements",
  "Plan the required production stage",
  "Review process stability and supply needs before scale-up"
];

const evidence = [
  {
    title: "Injection Molding Production",
    body: "Machine and tooling selection are reviewed around the actual mold, part and required production stage.",
    image: "/images/capabilities/plastic-injection-molding-production-video-frame.webp",
    alt: "Clear molded plastic parts beside an automated injection molding cell"
  },
  {
    title: "Molded-Part Inspection",
    body: "Inspection can progress from sample and functional evaluation to agreed batch and recurring-production checks.",
    image: "/images/process/sample-validation-inspection-cmm.png",
    alt: "Operator reviewing a measurement screen beside dimensional inspection equipment"
  },
  {
    title: "Finishing & Assembly",
    body: "Confirmed secondary operations and assembly requirements can be planned with the selected production route.",
    image: "/images/capabilities/secondary-operations-pad-printing.webp",
    alt: "Operators working at pad-printing stations for molded plastic parts"
  }
];

const faqs = [
  { question: "When is low-volume production suitable?", answer: "Low-volume production can suit launches, developing demand, service parts or controlled batches after the part, material, tooling and inspection requirements are sufficiently defined." },
  { question: "Can an existing mold be used for later mass production?", answer: "Possibly. The decision depends on the mold design, condition, material, cavity plan and the agreed future production, inspection and maintenance requirements." },
  { question: "What should be confirmed before scaling production?", answer: "Teams should confirm tooling and sample status, resin and color, critical dimensions, appearance, secondary operations, packaging and the expected repeat-demand pattern." },
  { question: "Can production continue after mold approval?", answer: "Yes, when the production scope is agreed and the approved tooling, samples and process conditions support the required molding program." },
  { question: "How are inspection and secondary operations planned?", answer: "They are defined around the drawing, approved sample, project stage and delivery requirements. Not every project needs the same inspection or post-molding scope." }
];

const related = [
  { label: "Plastic Injection Molding", href: "/plastic-injection-molding" },
  { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
  { label: "Quality & Documentation", href: "/company/quality-documentation" }
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

export function InjectionMoldingProductionOptionsPage() {
  const pageUrl = `${site.url}/plastic-injection-molding/production-options`;
  const schemas = [
    { "@context": "https://schema.org", "@type": "Service", name: "Injection Molding Production Options", description: "Prototype, low-volume and mass-production injection molding options reviewed around tooling readiness, project stage, inspection needs and repeat demand.", url: pageUrl, provider: { "@id": `${site.url}/#organization` } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }
  ];

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replaceAll("<", "\\u003c") }} type="application/ld+json" />

      <section className="border-b border-[var(--line)] bg-white">
        <div className="container-page py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/">Home</Link></li><li aria-hidden="true">/</li>
              <li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/plastic-injection-molding">Plastic Injection Molding</Link></li><li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-[var(--brand-dark)]">Production Options</li>
            </ol>
          </nav>
        </div>
        <div className="container-page grid gap-9 pb-12 pt-5 sm:pb-14 xl:grid-cols-[minmax(0,43fr)_minmax(0,57fr)] lg:items-center lg:gap-12 lg:pb-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">Production Planning</p>
            <h1 className="internal-page-title mt-4 text-[var(--brand-dark)]">Injection Molding Production Options</h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">From prototype builds to low-volume batches and repeat production, choose a molding route based on your project stage, tooling readiness and expected demand.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Request Injection Molding Quote</Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="#production-comparison">Compare Production Options</Link>
            </div>
          </div>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
            <Image alt="Clear molded plastic parts beside an automated injection molding cell" className="object-cover object-center" fill priority sizes="(min-width: 1280px) 51vw, (min-width: 1024px) 48vw, 100vw" src="/images/capabilities/plastic-injection-molding-production-video-frame.webp" />
          </figure>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Three Production Options" title="Choose a Route for Your Current Project Stage" body="The production route should follow the part, tooling and supply requirements rather than an arbitrary quantity threshold." />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {stages.map((stage) => (
              <article className="scroll-mt-28 overflow-hidden rounded-md border border-[var(--line)] bg-white" id={stage.id} key={stage.id}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-soft)]"><Image alt={stage.alt} className="object-cover object-center" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={stage.image} /></div>
                <div className="p-5 sm:p-6"><h3 className="text-xl font-bold leading-[1.25] text-[var(--brand-dark)]">{stage.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{stage.body}</p><ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-4 text-sm leading-6 text-[var(--brand-dark)]">{stage.considerations.map((item) => <li className="flex gap-2" key={item}><span aria-hidden="true" className="text-[var(--brand)]">—</span><span>{item}</span></li>)}</ul></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 bg-white py-14 sm:py-16" id="production-comparison">
        <div className="container-page">
          <SectionHeading eyebrow="Production Comparison" title="Compare Injection Molding Production Options" body="The practical differences depend on part geometry, tooling status and the requirements used to release each production stage." />
          <div aria-label="Scrollable comparison table" className="mt-8 overflow-x-auto rounded-sm border border-[var(--line)]" role="region" tabIndex={0}>
            <table className="min-w-[860px] w-full border-collapse text-left text-sm">
              <caption className="sr-only">Comparison of prototype, low-volume and mass-production injection molding options</caption>
              <thead className="bg-[var(--brand-dark)] text-white"><tr><th className="p-4" scope="col">Decision Area</th><th className="p-4" scope="col">Prototype</th><th className="p-4" scope="col">Low Volume</th><th className="p-4" scope="col">Mass Production</th></tr></thead>
              <tbody>{comparison.map((row) => <tr className="border-t border-[var(--line)] align-top" key={row[0]}><th className="w-[19%] bg-[var(--surface-soft)] p-4 font-bold leading-6 text-[var(--brand-dark)]" scope="row">{row[0]}</th>{row.slice(1).map((cell) => <td className="w-[27%] p-4 leading-6 text-[var(--muted)]" key={cell}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col gap-3 border-l-2 border-[var(--brand)] bg-[var(--surface-soft)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><p className="font-bold text-[var(--brand-dark)]">Not sure which route fits your project?</p><Link className="focus-ring inline-flex min-h-11 w-fit items-center rounded-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)] hover:underline" href="/request-a-quote">Discuss Production Requirements →</Link></div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page grid gap-9 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12">
          <div><SectionHeading eyebrow="Decision Factors" title="What Determines the Right Production Route?" /><p className="mt-5 text-base leading-7 text-[var(--muted)]">The suitability of an existing mold for later production depends on its design, condition and the agreed production requirements.</p><Link className="focus-ring mt-5 inline-flex rounded-sm font-bold text-[var(--brand)] hover:underline" href="/injection-mold-manufacturing">Explore Injection Mold Manufacturing →</Link></div>
          <dl className="divide-y divide-[var(--line)] border-y border-[var(--line)]">{decisionFactors.map(([title, body]) => <div className="grid gap-1 py-4 sm:grid-cols-[0.34fr_0.66fr] sm:gap-6" key={title}><dt className="font-bold text-[var(--brand-dark)]">{title}</dt><dd className="text-sm leading-6 text-[var(--muted)]">{body}</dd></div>)}</dl>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-9 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12">
          <div><SectionHeading eyebrow="Production Readiness" title="From Validated Tooling to Repeat Production" body="Projects may begin at different stages. Not every customer must proceed through all production options." /><div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-[var(--brand)]"><Link className="focus-ring rounded-sm hover:underline" href="/injection-molds/mold-trial-validation">Mold Trial & Validation →</Link><Link className="focus-ring rounded-sm hover:underline" href="/plastic-injection-molding">Plastic Injection Molding →</Link></div></div>
          <ol className="grid gap-3 sm:grid-cols-2">{readinessSteps.map((step, index) => <li className="flex min-h-24 gap-4 border border-[var(--line)] bg-[var(--surface-soft)] p-4" key={step}><span className="font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><span className="font-semibold leading-6 text-[var(--brand-dark)]">{step}</span></li>)}</ol>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page"><SectionHeading eyebrow="Production Evidence" title="Production, Inspection & Finishing Evidence" body="Production planning includes the molding stage together with the agreed inspection, finishing and assembly scope." /><div className="mt-8 grid gap-5 md:grid-cols-3">{evidence.map((item) => <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={item.title}><div className="relative aspect-[16/10] overflow-hidden bg-white"><Image alt={item.alt} className="object-cover object-center" fill sizes="(min-width: 768px) 33vw, 100vw" src={item.image} /></div><figcaption className="p-5"><h3 className="text-lg font-bold text-[var(--brand-dark)]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p></figcaption></figure>)}</div><p className="mt-6 max-w-4xl text-sm leading-6 text-[var(--muted)]">Material and grade should be confirmed for the actual part and application. See the <Link className="focus-ring rounded-sm font-bold text-[var(--brand)] hover:underline" href="/resources/material-selection-guide">Material Selection Guide</Link> and review project-specific inspection records through <Link className="focus-ring rounded-sm font-bold text-[var(--brand)] hover:underline" href="/company/quality-documentation">Quality & Documentation</Link>.</p></div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.64fr_0.36fr] lg:gap-14">
          <div><SectionHeading eyebrow="Production FAQ" title="Planning an Injection Molding Production Route" /><div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">{faqs.map((faq) => <details className="group" key={faq.question}><summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 rounded-sm py-4 font-bold text-[var(--brand-dark)] marker:hidden"><span>{faq.question}</span><span aria-hidden="true" className="text-xl text-[var(--brand)] transition group-open:rotate-45 motion-reduce:transition-none">+</span></summary><p className="max-w-3xl pb-5 pr-10 text-sm leading-7 text-[var(--muted)] sm:text-base">{faq.answer}</p></details>)}</div></div>
          <aside><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Related Links</p><nav aria-label="Related injection molding resources" className="mt-4 divide-y divide-[var(--line)] border-y border-[var(--line)]">{related.map((item) => <Link className="focus-ring flex min-h-12 items-center justify-between rounded-sm py-3 font-bold text-[var(--brand-dark)] hover:text-[var(--brand)]" href={item.href} key={item.href}>{item.label}<span aria-hidden="true">→</span></Link>)}</nav></aside>
        </div>
      </section>

      <section className="border-y border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-14">
        <div className="container-page flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Start Your Production Review</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Discuss Your Injection Molding Production Requirements</h2><p className="mt-4 text-base leading-7 text-[var(--cta-body)]">Share your part files, material, tooling status, expected batch quantities and inspection requirements so we can review a suitable production route.</p></div><Link className="focus-ring inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Request Injection Molding Quote</Link></div>
      </section>
    </>
  );
}
