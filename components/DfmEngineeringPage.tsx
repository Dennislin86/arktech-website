import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

const proofItems = ["Product Co-Design", "DFM & Moldability", "Moldflow Analysis", "Mold Design Engineering", "Trial & Validation"];

const coDesignGroups = [
  ["Part Structure", "Wall thickness, ribs, bosses, draft, radii and deep features"],
  ["Assembly & Function", "Snap-fits, mating interfaces and critical functional areas"],
  ["Appearance", "Cosmetic surfaces, texture zones and visible witness-line restrictions"],
  ["Material & Molding Risk", "Material behavior, local mass, sink and warpage considerations"]
];

const reviewAreas = [
  ["Part Geometry", ["Wall thickness", "Ribs & bosses", "Corners", "Deep features", "Part structure"]],
  ["Draft & Undercuts", ["Draft direction", "Draft angle", "Undercuts", "Side actions", "Slider / lifter requirements"]],
  ["Parting & Mold Opening", ["Mold opening direction", "Parting line", "Shut-offs", "Core / cavity split"]],
  ["Gate & Filling Strategy", ["Gate location", "Gate type", "Runner concept", "Appearance restrictions", "Filling considerations"]],
  ["Ejection & Mold Actions", ["Part release", "Ejector locations", "Sliders", "Lifters", "Unscrewing requirements"]],
  ["Critical Dimensions & Appearance", ["Critical dimensions", "Tolerance requirements", "Cosmetic surfaces", "Texture", "Assembly interfaces"]]
] as const;

const issueExamples = [
  { number: "01", title: "Local Thickness & Sink Risk", risk: "Heavy rib, boss or wall intersections can create uneven cooling and visible sink.", review: "Evaluate local mass, parent-wall relationships and functional load paths.", decision: "Core out or rebalance the geometry while preserving required function." },
  { number: "02", title: "Undercut & Release Risk", risk: "Features outside the mold-opening direction can prevent clean part release.", review: "Confirm pull direction, shut-offs and the practical mold-action options.", decision: "Revise geometry or define a slider, lifter, insert or unscrewing concept." },
  { number: "03", title: "Gate, Flow & Appearance Risk", risk: "Gate position and flow direction can affect vestige, weld lines, air traps and cosmetics.", review: "Review material, flow length, appearance zones and assembly requirements.", decision: "Define a gating concept and use Moldflow when deeper filling analysis is required." }
];

const engineeringFlow = ["CAD & Requirements", "Product / DFM Review", "Moldflow When Required", "Engineering Decisions", "Mold Concept", "Customer / Engineering Confirmation", "Mold Design", "Steel Cutting"];

const moldDesignGroups = [
  ["Mold Layout", "Core and cavity layout, parting, shut-offs and cavity arrangement"],
  ["Plastic Delivery", "Gate, runner and hot-runner considerations around the confirmed part"],
  ["Mold Actions", "Slider, lifter, unscrewing, insert and ejection mechanisms where required"],
  ["Production Interface", "Cooling concept, machine compatibility and trial requirements"]
];

const reviewInputs = [
  ["CAD Data", "3D product data in a supported CAD format."],
  ["2D Drawing", "Critical dimensions, tolerances and inspection requirements where available."],
  ["Material", "Resin grade or material requirements."],
  ["Appearance Requirements", "Texture, polish, cosmetic surfaces and visible areas."],
  ["Production Requirements", "Expected quantities and production requirements when available."],
  ["Assembly / Functional Requirements", "Mating parts, interfaces and critical functional areas where relevant."]
];

const faqs = [
  ["What is injection molding engineering?", "Injection molding engineering connects product requirements, DFM, moldability, Moldflow when required, mold concept, detailed mold design and validation before production."],
  ["When should DFM be completed?", "DFM should be completed before detailed mold design and steel cutting, while product and tooling decisions can still be reviewed efficiently."],
  ["What information is needed for an engineering review?", "Provide the available 3D CAD data, 2D drawings, material, appearance, assembly, functional and production requirements."],
  ["What is reviewed before tooling release?", "The scope can include geometry, draft, undercuts, parting, gating, ejection, mold actions, critical dimensions, appearance and assembly interfaces."],
  ["What is the difference between DFM and Moldflow analysis?", "DFM is the broader product and tooling review. Moldflow is a process simulation used when filling, pressure, weld lines, air traps, packing or warpage risks require deeper analysis."],
  ["Is Moldflow analysis required for every mold?", "No. Moldflow can be used when part geometry, material, flow length, gating or performance risk justifies deeper simulation."],
  ["Can Arktech recommend product design changes?", "Arktech can review, evaluate and discuss practical geometry options with the customer. Product-design approval remains with the customer."],
  ["What happens after engineering approval?", "After the agreed product and tooling decisions are confirmed, the project can move into detailed mold design, steel cutting, manufacturing and trial validation."],
  ["Does engineering support continue through mold trial?", "Engineering findings can be checked against trial samples, molding parameters and dimensional results, with corrections reviewed when required before approval."]
];

const relatedCapabilities = [
  ["Injection Mold Manufacturing", "/injection-mold-manufacturing"],
  ["Plastic Injection Molding", "/plastic-injection-molding"],
  ["Injection Mold Types", "/injection-molds"],
  ["Mold Trial & Validation", "/injection-molds/mold-trial-validation"]
];

const engineeringResources = [
  ["Injection Molding DFM Guide", "/resources/dfm-guide"],
  ["Wall Thickness Guidelines", "/resources/injection-molding/wall-thickness-guidelines"],
  ["Draft Angle Guidelines", "/resources/injection-molding/draft-angle-guidelines"],
  ["Material Selection Guide", "/resources/material-selection-guide"]
];

function Heading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[2.75rem]">{title}</h2>{body ? <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{body}</p> : null}</div>;
}

function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="focus-ring inline-flex items-center font-bold text-[var(--brand)] transition hover:translate-x-1 hover:underline" href={href}>{children}<span aria-hidden="true" className="ml-2">→</span></Link>;
}

export function DfmEngineeringPage() {
  const pageUrl = `${site.url}/injection-molding-engineering/`;
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: "Injection Molding Engineering & DFM Support", description: "Injection molding engineering support from product co-design and DFM to Moldflow analysis, mold design and tooling validation before production.", url: pageUrl, serviceType: "Injection molding engineering, DFM and Moldflow analysis", provider: { "@id": `${site.url}/#organization` } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: "Capabilities", item: `${site.url}/manufacturing-capabilities` }, { "@type": "ListItem", position: 3, name: "Injection Molding Engineering", item: pageUrl }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
  ];

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }} />
    <main>
      <section className="border-b border-[var(--line)] bg-white">
        <div className="container-page py-5"><nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]"><Link className="hover:text-[var(--brand)]" href="/">Home</Link><span aria-hidden="true" className="mx-2">/</span><Link className="hover:text-[var(--brand)]" href="/manufacturing-capabilities">Capabilities</Link><span aria-hidden="true" className="mx-2">/</span><span aria-current="page">Injection Molding Engineering</span></nav></div>
        <div className="container-page grid items-center gap-10 pb-14 pt-5 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-14 lg:pb-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">Engineering Before Tooling</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.025em] text-[var(--brand-dark)] sm:text-5xl lg:text-[3.5rem]">Injection Molding Engineering &amp; DFM Support</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">Improve product moldability, identify tooling risks and define the right mold concept before steel cutting through co-design, DFM, Moldflow analysis and mold engineering.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-[var(--brand-dark)]" href="/request-a-quote">Upload CAD for Engineering Review</Link><Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 text-center font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="#engineering-review">See What We Review</Link></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-[1.4fr_0.8fr] sm:grid-rows-2">
            <figure className="relative min-h-72 overflow-hidden rounded-md border border-[var(--line)] bg-[#eef1f4] sm:row-span-2 sm:min-h-[430px]"><Image alt="Injection molding DFM engineering report reviewing product and tooling risks" className="object-contain" fill priority sizes="(min-width: 1024px) 38vw, (min-width: 640px) 62vw, 100vw" src="/images/injection-mold-manufacturing/complete-dfm-engineering-review.webp" /></figure>
            <figure className="relative min-h-48 overflow-hidden rounded-md border border-[var(--line)] bg-[#eef1f4]"><Image alt="Annotated product CAD showing wall thickness and rib design review" className="object-cover" fill sizes="(min-width: 1024px) 18vw, 38vw" src="/images/plastic-injection-molding/wall-thickness-rib-design.webp" /></figure>
            <figure className="relative min-h-48 overflow-hidden rounded-md border border-[var(--line)] bg-[#eef1f4]"><Image alt="Moldflow filling analysis for an injection molded component" className="object-cover" fill sizes="(min-width: 1024px) 18vw, 38vw" src="/images/capabilities/moldflow-filling-analysis.webp" /></figure>
          </div>
        </div>
      </section>

      <section aria-label="Engineering support scope" className="border-b border-[var(--line)] bg-[var(--brand-dark)] text-white"><div className="container-page flex flex-wrap justify-center gap-x-8 gap-y-3 py-5 text-center text-sm font-bold sm:justify-between">{proofItems.map((item) => <span key={item}>{item}</span>)}</div></section>

      <section className="bg-white py-16" id="co-design"><div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14"><figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]"><Image alt="Annotated product CAD for injection molding co-design review" className="h-auto w-full" height={780} sizes="(min-width: 1024px) 46vw, 100vw" src="/images/plastic-injection-molding/wall-thickness-rib-design.webp" width={1220} /></figure><div><Heading eyebrow="Product Co-Design" title="Product Co-Design for Injection Molding" body="Engineering support does not start only after the product design is frozen. Arktech can review part geometry and production requirements with the customer before tooling decisions are finalized." /><div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">{coDesignGroups.map(([title, body]) => <article className="bg-white p-5" key={title}><h3 className="font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></article>)}</div><p className="mt-6 text-sm leading-6 text-[var(--muted)]">Recommendations are reviewed with the customer around function, appearance, material behavior and manufacturing feasibility; product-design approval remains with the customer.</p></div></div></section>

      <section className="bg-[var(--surface-soft)] py-16" id="engineering-review"><div className="container-page grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14"><div><Heading eyebrow="DFM & Moldability" title="DFM & Moldability Review" body="Before mold design begins, the part is reviewed for manufacturability, mold release, gating, ejection, appearance and tooling risks." /><p className="mt-6 leading-7 text-[var(--muted)]">The review connects product geometry with practical tool construction. Findings are documented so open decisions can be discussed before the mold concept is released.</p><div className="mt-7"><ArrowLink href="/request-a-quote">Upload CAD for Engineering Review</ArrowLink></div></div><figure className="overflow-hidden rounded-md border border-[var(--line)] bg-white p-3"><Image alt="Anonymized injection molding DFM report with moldability and tooling review" className="h-auto w-full" height={817} sizes="(min-width: 1024px) 49vw, 100vw" src="/images/Engineering/injection-molding-dfm-report-anonymized.webp" width={1812} /></figure></div></section>

      <section className="bg-white py-16"><div className="container-page"><Heading eyebrow="Engineering Review Scope" title="What We Review Before Tooling" body="Six connected review areas help the customer and tooling team resolve product, moldability and mold-concept questions before steel cutting." /><div className="mt-9 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">{reviewAreas.map(([title, items], index) => <article className="bg-white p-6" key={title}><span className="text-sm font-bold text-[var(--brand)]">0{index + 1}</span><h3 className="mt-3 text-xl font-bold text-[var(--brand-dark)]">{title}</h3><ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">{items.map((item) => <li className="flex gap-2" key={item}><span aria-hidden="true" className="text-[var(--brand)]">—</span>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="bg-[var(--surface-soft)] py-16"><div className="container-page"><Heading eyebrow="Engineering Deliverables" title="What You Receive in an Engineering Review" body="The actual deliverables depend on project scope. Real engineering records are used to document moldability findings, tooling concepts and open decisions for customer review." /><div className="mt-9 grid gap-6 lg:grid-cols-3">{[["Part & Moldability Review", "/images/Engineering/injection-molding-dfm-report-anonymized.webp", "Anonymized DFM report showing injection molded part and moldability findings"], ["Tooling Concept Review", "/images/process/dfm-engineering-feedback-old-website.png", "Injection mold engineering concept with core cavity and tooling review"], ["Engineering Decisions & Open Items", "/images/Engineering/dfm-report-tooling-review-example.webp", "DFM tooling review example documenting engineering decisions and open items"]].map(([title, src, alt]) => <article className="overflow-hidden rounded-md border border-[var(--line)] bg-white" key={title}><div className="relative aspect-[16/10] bg-[#eef1f4]"><Image alt={alt} className="object-contain" fill sizes="(min-width: 1024px) 31vw, 100vw" src={src} /></div><div className="p-5"><h3 className="text-xl font-bold text-[var(--brand-dark)]">{title}</h3></div></article>)}</div></div></section>

      <section className="bg-white py-16" id="moldflow-analysis"><div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14"><div><Heading eyebrow="Moldflow When Required" title="Moldflow Analysis & Filling Simulation" body="Moldflow analysis can be used when filling behavior, pressure, weld lines, air traps, warpage or other process risks require deeper simulation." /><ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold text-[var(--brand-dark)] sm:text-base">{["Fill Pattern", "Injection Pressure", "Weld Lines", "Air Traps", "Gate Location", "Runner Balance", "Packing Behavior", "Warpage Where Analyzed"].map((item) => <li className="border-l-2 border-[var(--brand)] pl-3" key={item}>{item}</li>)}</ul><p className="mt-7 text-sm leading-6 text-[var(--muted)]">Simulation scope is selected around the part, material and tooling risk. Moldflow is not presented as a mandatory step for every project.</p></div><figure className="overflow-hidden rounded-md border border-[var(--line)] bg-white p-3"><Image alt="Moldflow filling analysis showing progressive fill results for an injection molded component" className="h-auto w-full" height={1100} sizes="(min-width: 1024px) 48vw, 100vw" src="/images/capabilities/moldflow-filling-analysis.webp" width={1653} /><figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-[var(--muted)]">Real Moldflow filling-result view used to evaluate progressive cavity filling.</figcaption></figure></div></section>

      <section className="bg-[var(--surface-soft)] py-16"><div className="container-page"><Heading eyebrow="Engineering Decisions" title="Typical Engineering Issues We Resolve" body="The examples below show how an engineering risk is translated into a review focus and an agreed direction before detailed mold design." /><div className="mt-9 grid gap-6 lg:grid-cols-3">{issueExamples.map((issue) => <article className="rounded-md border border-[var(--line)] bg-white p-6" key={issue.title}><span className="text-sm font-bold text-[var(--brand)]">{issue.number}</span><h3 className="mt-3 text-xl font-bold text-[var(--brand-dark)]">{issue.title}</h3>{(["risk", "review", "decision"] as const).map((key) => <div className="mt-5" key={key}><p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{key}</p><p className="mt-1 text-sm leading-6 text-[var(--muted)]">{issue[key]}</p></div>)}</article>)}</div></div></section>

      <section className="bg-[var(--brand-dark)] py-16 text-white"><div className="container-page"><div className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-red-300">Engineering Workflow</p><h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">From Engineering Review to Mold Design</h2><p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">The review sequence connects product requirements, engineering decisions and mold design release, with customer or engineering confirmation as required before steel cutting.</p></div><ol className="mt-9 grid gap-px overflow-hidden rounded-sm bg-white/20 sm:grid-cols-2 lg:grid-cols-4">{engineeringFlow.map((step, index) => <li className="bg-[var(--brand-dark)] p-5" key={step}><span className="text-sm font-bold text-red-300">0{index + 1}</span><p className="mt-3 font-bold leading-6">{step}</p></li>)}</ol></div></section>

      <section className="bg-white py-16" id="mold-design-engineering"><div className="container-page grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14"><figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]"><Image alt="3D injection mold design with core cavity layout and mold engineering details" className="h-auto w-full" height={572} sizes="(min-width: 1024px) 48vw, 100vw" src="/images/process/dfm-engineering-feedback-old-website.png" width={1086} /></figure><div><Heading eyebrow="Mold Engineering" title="Mold Design Engineering" body="After the product and tooling concept are reviewed, the engineering process moves into detailed mold design for manufacturing and validation." /><div className="mt-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">{moldDesignGroups.map(([title, body]) => <div className="py-4" key={title}><h3 className="font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-1 text-sm leading-6 text-[var(--muted)]">{body}</p></div>)}</div><div className="mt-6"><ArrowLink href="/injection-mold-manufacturing">Explore Injection Mold Manufacturing</ArrowLink></div></div></div></section>

      <section className="bg-[var(--surface-soft)] py-16" id="engineering-validation"><div className="container-page"><Heading eyebrow="Trial & Validation" title="Engineering Validation Before Production" body="Mold trials connect the approved engineering direction with molded samples, recorded process conditions, dimensional results and required corrections before production release." /><div className="mt-9 grid gap-6 lg:grid-cols-3">{[["Mold Trial", "/images/injection-mold-manufacturing/mold-trial-report-evidence.webp", "Injection mold trial report documenting mold condition and validation"], ["Dimensional Inspection", "/images/quality/dimensional-inspection-report-anonymized.webp", "Dimensional inspection report for injection molded trial samples"], ["Molding Parameters", "/images/injection-mold-manufacturing/injection-molding-process-parameters.webp", "Injection molding process parameter sheet from mold trial"]].map(([title, src, alt]) => <article className="overflow-hidden rounded-md border border-[var(--line)] bg-white" key={title}><div className="relative aspect-[16/10] bg-white"><Image alt={alt} className="object-contain p-2" fill sizes="(min-width: 1024px) 31vw, 100vw" src={src} /></div><div className="p-5"><h3 className="text-xl font-bold text-[var(--brand-dark)]">{title}</h3></div></article>)}</div><div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--brand-dark)]">{["Mold Trial", "Measure / Review", "Engineering Correction", "Re-Trial When Required", "Approval"].map((step, index) => <span className="inline-flex items-center gap-3" key={step}>{index > 0 ? <span aria-hidden="true" className="text-[var(--brand)]">→</span> : null}{step}</span>)}</div></div></section>

      <section className="bg-white py-16"><div className="container-page"><Heading eyebrow="Start an Engineering Review" title="What to Send for an Engineering Review" body="Share the available product and project information so the engineering team can understand the part, its function and the intended manufacturing requirements." /><div className="mt-9 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">{reviewInputs.map(([title, body]) => <article className="bg-white p-5" key={title}><h3 className="font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></article>)}</div><div className="mt-7"><Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-[var(--brand-dark)]" href="/request-a-quote">Upload CAD for Engineering Review <span aria-hidden="true" className="ml-2">→</span></Link></div></div></section>

      <section className="bg-[var(--surface-soft)] py-16"><div className="container-page"><Heading eyebrow="Choose the Right Review" title="DFM Review vs Moldflow Analysis" body="DFM and Moldflow support different engineering decisions. Moldflow can be used where deeper simulation is required; it does not replace the broader product and tooling review." /><div className="mt-9 grid gap-6 md:grid-cols-2"><article className="border-t-4 border-[var(--brand)] bg-white p-6"><h3 className="text-2xl font-bold text-[var(--brand-dark)]">DFM & Engineering Review</h3><ul className="mt-5 space-y-3 text-[var(--muted)]">{["Product moldability", "Draft & undercuts", "Parting & ejection", "Tooling concept", "Critical dimensions", "Engineering decisions"].map((item) => <li className="border-b border-[var(--line)] pb-3" key={item}>{item}</li>)}</ul></article><article className="border-t-4 border-[var(--brand-dark)] bg-white p-6"><h3 className="text-2xl font-bold text-[var(--brand-dark)]">Moldflow Analysis</h3><ul className="mt-5 space-y-3 text-[var(--muted)]">{["Filling behavior", "Flow pattern", "Pressure trends", "Weld lines / air traps", "Packing behavior", "Warpage where analyzed"].map((item) => <li className="border-b border-[var(--line)] pb-3" key={item}>{item}</li>)}</ul></article></div></div></section>

      <section className="border-y border-[var(--line)] bg-white py-14"><div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16"><div><Heading eyebrow="Related Capabilities" title="Continue into Tooling & Production" /><div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">{relatedCapabilities.map(([label, href]) => <Link className="focus-ring flex items-center justify-between gap-4 py-3 font-semibold text-[var(--brand-dark)] transition hover:text-[var(--brand)]" href={href} key={label}><span>{label}</span><span aria-hidden="true">→</span></Link>)}</div></div><div><Heading eyebrow="Engineering Resources" title="Injection Molding Design Guides" /><div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">{engineeringResources.map(([label, href]) => <Link className="focus-ring flex items-center justify-between gap-4 py-3 font-semibold text-[var(--brand-dark)] transition hover:text-[var(--brand)]" href={href} key={label}><span>{label}</span><span aria-hidden="true">→</span></Link>)}</div></div></div></section>

      <section className="bg-[var(--surface-soft)] py-16"><div className="container-page"><Heading eyebrow="FAQ" title="Injection Molding Engineering FAQs" /><div className="mt-8 max-w-4xl divide-y divide-[var(--line)] border-y border-[var(--line)]">{faqs.map(([question, answer]) => <details className="group bg-white px-5 py-1" key={question}><summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-[var(--brand-dark)]">{question}<span aria-hidden="true" className="text-xl text-[var(--brand)] group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-5 leading-7 text-[var(--muted)]">{answer}</p></details>)}</div></div></section>

      <section className="bg-[var(--brand-dark)] py-16 text-white"><div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-red-300">Engineering Before Tooling</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Start Your Injection Molding Engineering Review</h2><p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">Send your CAD files, drawings, material and project requirements so the engineering team can review moldability and tooling risks before mold design begins.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-white hover:text-[var(--brand-dark)]" href="/request-a-quote">Upload CAD for Engineering Review</Link><Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white px-6 text-center font-bold text-white transition hover:bg-white hover:text-[var(--brand-dark)]" href="/request-a-quote">Request Tooling Quote</Link></div></div></section>
    </main>
  </>;
}
