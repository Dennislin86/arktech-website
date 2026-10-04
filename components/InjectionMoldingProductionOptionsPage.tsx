import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const stages = [
  {
    id: "prototype",
    number: "01",
    title: "Prototype Injection Molding",
    intro: "Prototype molding supports engineering validation before production requirements are fully released.",
    purposes: ["Engineering validation", "Functional samples", "Design verification", "Assembly checks", "Early-stage builds"],
    considerations: ["Lower initial production demand", "Design iteration", "Sample approval", "Material confirmation", "Tooling strategy based on future plans"],
    image: "/images/mold-types/prototype-injection-mold.webp",
    alt: "Prototype injection mold and molded plastic component for engineering validation",
    cta: "Discuss Prototype Molding"
  },
  {
    id: "low-volume",
    number: "02",
    title: "Low-Volume Production",
    intro: "Low-volume injection molding connects approved designs with repeatable pilot, launch or bridge production.",
    purposes: ["Bridge production", "Pilot production", "Market launch", "Service and spare parts", "Controlled production quantities"],
    considerations: ["Repeatability", "Production readiness", "Material supply", "Process stability", "Inspection, packaging and secondary operations"],
    image: "/images/capabilities/plastic-injection-molding-production.webp",
    alt: "Plastic injection molding machine supporting low-volume component production",
    cta: "Discuss Low-Volume Production"
  },
  {
    id: "mass-production",
    number: "03",
    title: "Mass Production",
    intro: "Mass-production programs prioritize stable repeat manufacturing, controlled quality and recurring delivery.",
    purposes: ["Stable repeat production", "Higher-volume manufacturing", "Long-term programs", "Controlled processing", "Recurring delivery"],
    considerations: ["Production tooling and process validation", "Multi-cavity or hot-runner strategy when appropriate", "Quality control and batch consistency", "Production scheduling", "Packaging and delivery"],
    image: "/images/process/export-delivery-production-support-molding.png",
    alt: "Injection mold running in a molding machine for repeat plastic part production",
    cta: "Discuss Mass Production"
  }
];

const comparison = [
  ["Project Stage", "Engineering build", "Pilot, launch or bridge", "Stable repeat program"],
  ["Primary Goal", "Validate design and function", "Balance flexibility and repeatability", "Maintain repeat production"],
  ["Tooling Approach", "Selected around validation and future plans", "Prepared for controlled production", "Production tooling matched to program needs"],
  ["Design Flexibility", "Highest", "Moderate, with controlled changes", "Lowest after process release"],
  ["Production Stability", "Sample-focused", "Repeatable pilot or batch production", "Validated recurring production"],
  ["Inspection Focus", "Sample and functional review", "Batch and repeatability checks", "Process, dimensional and recurring records"],
  ["Secondary Operations", "As needed for validation", "Integrated for launch or batch supply", "Planned into repeat production"],
  ["Best Fit", "Design verification and assembly checks", "Market launch, uncertain demand or service parts", "Long-term supply with stable demand"]
];

const process = [
  ["CAD & Requirements", "Review part data, material, function, finish and expected production needs."],
  ["DFM Review", "Identify molding, assembly and tooling risks before release."],
  ["Tooling Strategy", "Align the mold approach with validation and future production requirements."],
  ["Mold Trial", "Establish initial processing and produce samples for review."],
  ["Sample Approval", "Confirm critical dimensions, appearance, fit and agreed functions."],
  ["Prototype / Pilot Production", "Run the approved project stage with appropriate inspection."],
  ["Production Validation", "Confirm process stability, records, secondary operations and packaging."],
  ["Repeat Production", "Manage recurring batches, inspection and delivery requirements."]
];

const faqs = [
  ["What is the difference between prototype and production injection molding?", "Prototype molding focuses on engineering validation and design confirmation. Production molding places greater emphasis on repeatability, process stability, inspection and recurring supply."],
  ["When should I move from prototype molding to low-volume production?", "The move is appropriate after the part, material, assembly and sample requirements are sufficiently confirmed for controlled repeat production."],
  ["Can Arktech support low-volume injection molding?", "Yes. Low-volume support can be planned for pilot builds, market launch, bridge production, service parts or controlled demand."],
  ["Can the same mold be used for later mass production?", "Sometimes. The decision depends on the original tooling strategy, material, part design, expected life, cavity plan and future production requirements."],
  ["What changes when moving to mass production?", "Tooling durability, process validation, material supply, quality records, scheduling, maintenance, packaging and repeat delivery receive greater emphasis."],
  ["Can Arktech provide production after mold approval?", "Yes. Selected projects can continue from mold trial and sample approval into prototype, low-volume or repeat molding production."],
  ["What inspection is available for repeat production?", "Inspection can include critical dimensions, visual appearance, assembly or fit checks, process records and final packaging review according to agreed requirements."],
  ["Can secondary operations and assembly be included?", "Yes. Supported operations can include printing, laser marking, ultrasonic welding, heat staking, insert installation, painting, assembly and packaging when confirmed for the project."]
];

const related = [
  ["Plastic Injection Molding", "/plastic-injection-molding"],
  ["Injection Mold Manufacturing", "/injection-mold-manufacturing"],
  ["DFM Engineering", "/injection-molding-engineering"],
  ["Insert & Overmolding", "/injection-molds/overmolding-tools"],
  ["Two-Shot / 2K Molding", "/injection-molds/two-shot-2k-molds"],
  ["Transparent Part Injection Molding", "/plastic-injection-molding"],
  ["Engineering Plastics Injection Molding", "/plastic-injection-molding"],
  ["Quality & Documentation", "/company/quality-documentation"]
];

function Heading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

export function InjectionMoldingProductionOptionsPage() {
  const pageUrl = `${site.url}/services/injection-molding-production-options`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Injection Molding Production Options",
      description: "Prototype, low-volume and mass-production injection molding paths with tooling, DFM, inspection, secondary operations and assembly support.",
      url: pageUrl,
      provider: { "@id": `${site.url}/#organization` }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }))
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replaceAll("<", "\\u003c") }} />
      <div>
        <section className="border-b border-[var(--line)] bg-white">
          <div className="container-page grid gap-9 py-12 sm:py-14 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:items-center lg:gap-12 lg:py-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">Production Options</p>
              <h1 className="split-hero-title mt-4 text-[var(--brand-dark)]">Injection Molding from Prototype to Mass Production</h1>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">Arktech supports injection molding programs from early engineering builds through low-volume production and stable repeat mass production. Tooling, DFM, material selection, inspection and secondary operations can be coordinated according to each production stage.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-dark)]">Upload CAD for DFM Review</Link>
                <Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white">Request Injection Molding Quote</Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
              <div className="relative aspect-[16/10]"><Image src="/images/capabilities/plastic-injection-molding-production.webp" alt="Arktech plastic injection molding production for molded component programs" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" /></div>
            </figure>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
          <div className="container-page">
            <Heading eyebrow="Production Path" title="Choose the Right Injection Molding Production Stage" body="The appropriate path depends on design maturity, validation needs, tooling strategy and how the molded parts will be supplied." />
            <div className="mt-10 space-y-8">
              {stages.map((stage, index) => (
                <article id={stage.id} key={stage.id} className="scroll-mt-24 overflow-hidden rounded-md border border-[var(--line)] bg-white lg:grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[430px] ${index % 2 ? "lg:order-2" : ""}`}><Image src={stage.image} alt={stage.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" /></div>
                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-sm font-bold text-[var(--brand)]">{stage.number}</p>
                    <h3 className="mt-2 text-2xl font-bold text-[var(--brand-dark)] sm:text-3xl">{stage.title}</h3>
                    <p className="mt-4 leading-7 text-[var(--muted)]">{stage.intro}</p>
                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      <div><h4 className="font-bold text-[var(--brand-dark)]">Purpose</h4><ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">{stage.purposes.map(item => <li key={item} className="flex gap-2"><span className="text-[var(--brand)]">—</span>{item}</li>)}</ul></div>
                      <div><h4 className="font-bold text-[var(--brand-dark)]">Typical considerations</h4><ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--muted)]">{stage.considerations.map(item => <li key={item} className="flex gap-2"><span className="text-[var(--brand)]">—</span>{item}</li>)}</ul></div>
                    </div>
                    <Link href="/request-a-quote" className="mt-7 inline-flex font-bold text-[var(--brand)] hover:underline">{stage.cta} <span className="ml-2" aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-page">
            <Heading eyebrow="Production Comparison" title="Prototype vs Low-Volume vs Mass Production" body="Each stage supports a different balance of design flexibility, repeatability and production control. No option is universally better." />
            <div className="mt-8 hidden overflow-hidden rounded-sm border border-[var(--line)] lg:grid lg:grid-cols-[1.05fr_repeat(3,1fr)]">
              <div className="bg-[var(--brand-dark)] p-4 font-bold text-white">Comparison</div>{["Prototype", "Low Volume", "Mass Production"].map(item => <div key={item} className="bg-[var(--brand-dark)] p-4 font-bold text-white">{item}</div>)}
              {comparison.flatMap(row => row.map((cell, index) => <div key={`${row[0]}-${index}`} className={`border-t border-[var(--line)] p-4 text-sm leading-6 ${index === 0 ? "bg-[var(--surface-soft)] font-bold text-[var(--brand-dark)]" : "bg-white text-[var(--muted)]"}`}>{cell}</div>))}
            </div>
            <div className="mt-8 grid gap-5 lg:hidden">
              {[1,2,3].map(column => <article key={column} className="rounded-sm border border-[var(--line)] bg-white"><h3 className="bg-[var(--brand-dark)] px-5 py-4 font-bold text-white">{["Prototype", "Low Volume", "Mass Production"][column-1]}</h3><dl className="divide-y divide-[var(--line)]">{comparison.map(row => <div key={row[0]} className="p-4"><dt className="text-sm font-bold text-[var(--brand-dark)]">{row[0]}</dt><dd className="mt-1 text-sm leading-6 text-[var(--muted)]">{row[column]}</dd></div>)}</dl></article>)}
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Heading eyebrow="Tooling Strategy" title="Tooling Strategy Changes with Production Requirements" body="Prototype projects may prioritize engineering validation and flexibility. Low-volume production requires greater repeatability and production readiness, while mass-production tooling is planned around stable recurring manufacture." />
              <p className="mt-5 leading-7 text-[var(--muted)]">Depending on the part, resin and program, mass-production planning may consider production-grade tooling, multi-cavity layouts, hot-runner systems, spare inserts, wear components, process stability and maintenance. Not every program requires every feature.</p>
              <Link href="/injection-mold-manufacturing" className="mt-6 inline-flex font-bold text-[var(--brand)] hover:underline">View Injection Mold Manufacturing <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-white"><Image src="/images/mold-types/prototype-injection-mold.webp" alt="Injection mold tooling prepared for plastic part production" fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" /></div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-page">
            <Heading eyebrow="Materials" title="Materials for Prototype and Production Molding" body="Material selection may influence tooling, shrinkage, processing temperature, dimensional stability, surface finish and production consistency." />
            <div className="mt-8 grid overflow-hidden rounded-sm border border-[var(--line)] md:grid-cols-3">
              {[
                ["Common Thermoplastics", ["ABS", "PC", "PC/ABS", "PP", "POM", "PMMA", "TPU"]],
                ["Engineering Plastics", ["PA / Nylon", "PBT", "PPS"]],
                ["High-Performance Plastics", ["PPSU", "PEEK"]]
              ].map(([title, materials], index) => <article key={title as string} className={`p-6 ${index ? "border-t border-[var(--line)] md:border-l md:border-t-0" : ""}`}><h3 className="text-xl font-bold text-[var(--brand-dark)]">{title as string}</h3><div className="mt-5 flex flex-wrap gap-2">{(materials as string[]).map(item => <span key={item} className="rounded-sm bg-[var(--surface-soft)] px-3 py-2 text-sm font-semibold text-[var(--brand-dark)]">{item}</span>)}</div></article>)}
            </div>
            <Link href="/resources/material-selection-guide" className="mt-6 inline-flex font-bold text-[var(--brand)] hover:underline">View Material Selection Guide <span className="ml-2" aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-white"><Image src="/images/process/sample-validation-inspection-cmm.png" alt="Molded plastic sample dimensional inspection for production approval" fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" /></div>
            <div>
              <Heading eyebrow="Quality Control" title="Production Quality from First Samples to Repeat Runs" body="Inspection planning develops with the production stage: sample validation for prototype builds, repeatability and batch inspection for low-volume work, and controlled process, dimensional, appearance and packaging checks for recurring production." />
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">{["First article and sample inspection", "Critical dimension inspection", "Process parameter control", "Visual inspection", "Assembly and fit check", "Production inspection", "Final packaging inspection"].map(item => <li key={item} className="border-l-2 border-[var(--brand)] bg-white p-4 font-semibold text-[var(--brand-dark)]">{item}</li>)}</ul>
              <Link href="/company/quality-documentation" className="mt-6 inline-flex font-bold text-[var(--brand)] hover:underline">View Quality & Documentation <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Heading eyebrow="Secondary Operations" title="Secondary Operations & Assembly" body="Supported post-molding processes can be coordinated according to part design, finish requirements and the intended production stage." />
              <div className="mt-7 flex flex-wrap gap-2">{["Pad Printing", "Screen Printing", "Ultrasonic Welding", "Heat Staking", "Laser Marking", "Painting / Coating", "Threaded Insert Installation", "Assembly", "Packaging"].map(item => <span key={item} className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 text-sm font-semibold text-[var(--brand-dark)]">{item}</span>)}</div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]"><Image src="/images/capabilities/Secondary-Operations.jpg" alt="Arktech secondary operations workshop for printed and finished molded parts" fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" /></div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
          <div className="container-page">
            <Heading eyebrow="Choosing a Production Path" title="Which Production Option Fits Your Project?" />
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {[
                ["Prototype may fit when", ["The product design is still being validated", "Functional samples are required", "Assembly must be checked", "Production requirements are not finalized"]],
                ["Low volume may fit when", ["Launch quantities are controlled", "Bridge production is required", "Demand remains uncertain", "Service or replacement quantities are needed"]],
                ["Mass production may fit when", ["The design is stable", "Repeat production is required", "Process consistency matters", "Long-term supply is planned"]]
              ].map(([title, items], index) => <article key={title as string} className="rounded-sm border border-[var(--line)] bg-white p-6"><span className="text-sm font-bold text-[var(--brand)]">0{index+1}</span><h3 className="mt-3 text-xl font-bold text-[var(--brand-dark)]">{title as string}</h3><ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">{(items as string[]).map(item => <li key={item} className="flex gap-2"><span className="text-[var(--brand)]">—</span>{item}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-page">
            <Heading eyebrow="Production Workflow" title="From Prototype to Production" body="The same engineering path can support an early build and then add the controls required for pilot and repeat production." />
            <ol className="mt-9 grid overflow-hidden rounded-sm border border-[var(--line)] md:grid-cols-2 lg:grid-cols-4">{process.map(([title, body], index) => <li key={title} className="border-b border-r border-[var(--line)] p-5"><span className="text-sm font-bold text-[var(--brand)]">{String(index+1).padStart(2,"0")}</span><h3 className="mt-3 font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></li>)}</ol>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
          <div className="container-page">
            <Heading eyebrow="Real Production" title="Production Evidence from Molding to Inspection" body="Existing Arktech visuals show the manufacturing, mold setup, sample inspection and finishing activities that support production programs." />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["/images/capabilities/plastic-injection-molding-production.webp", "Plastic injection molding machine producing molded components", "Injection Molding"],
                ["/images/process/sample-validation-inspection-cmm.png", "Dimensional inspection of injection molded production samples", "Sample Inspection"],
                ["/images/capabilities/assembly-secondary-operations.webp", "Assembly line supporting finished molded product programs", "Assembly Support"]
              ].map(([src, alt, label]) => <figure key={src} className="overflow-hidden rounded-sm border border-[var(--line)] bg-white"><div className="relative aspect-[16/10]"><Image src={src} alt={alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /></div><figcaption className="px-5 py-4 font-bold text-[var(--brand-dark)]">{label}</figcaption></figure>)}
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] pb-16 sm:pb-20">
          <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Heading eyebrow="FAQ" title="Injection Molding Production FAQs" />
              <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">{faqs.map(([question, answer]) => <details key={question} className="group bg-white px-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-[var(--brand-dark)]">{question}<span className="text-xl text-[var(--brand)] group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pb-5 leading-7 text-[var(--muted)]">{answer}</p></details>)}</div>
            </div>
            <aside className="lg:pt-12"><div className="rounded-sm border border-[var(--line)] bg-white p-6"><p className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">Related Capabilities</p><div className="mt-5 grid gap-3">{related.map(([label,href]) => <Link key={label} href={href} className="border-b border-[var(--line)] pb-3 font-semibold text-[var(--brand-dark)] hover:text-[var(--brand)]">{label} <span aria-hidden="true">→</span></Link>)}</div></div></aside>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[#F4F6F8] py-16">
          <div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">Plan Your Production Path</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Plan Your Injection Molding Production</h2><p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">Send us your CAD files, drawings, material requirements and expected production needs. Our engineering team will review DFM, tooling and production requirements and help define the appropriate molding path.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"><Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white hover:bg-[var(--brand-dark)]">Upload CAD for DFM Review</Link><Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 font-bold text-[var(--brand-dark)] hover:bg-[var(--brand-dark)] hover:text-white">Request Injection Molding Quote</Link></div>
          </div>
        </section>
      </div>
    </>
  );
}
