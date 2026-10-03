import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

const reviewScope = [
  ["Wall Thickness", "Review wall uniformity and transitions that may affect filling, cooling, shrinkage and visible sink."],
  ["Draft Angle", "Check release direction and draft needs for deep, textured or cosmetic surfaces."],
  ["Ribs & Bosses", "Evaluate reinforcement and assembly features against local thickness, sink and molding access."],
  ["Snap-Fits", "Review flex direction, engagement, release and surrounding wall support."],
  ["Undercuts", "Identify geometry that may require sliders, lifters, inserts or a design adjustment."],
  ["Parting Line", "Consider split-line position, cosmetic impact, sealing surfaces and steel conditions."],
  ["Shutoffs", "Review shutoff direction, contact conditions and geometry that influences tooling reliability."],
  ["Gate Location", "Assess filling direction, gate vestige, appearance and downstream functional surfaces."],
  ["Runner Concept", "Consider cavity layout, material behavior and cold- or hot-runner requirements."],
  ["Ejection Strategy", "Check likely ejector locations, release balance and witness-mark sensitivity."],
  ["Sink & Warpage Risk", "Identify geometry and material conditions that may create uneven shrinkage or deformation."],
  ["Tolerance & Shrinkage", "Review critical dimensions against resin behavior, tooling strategy and measurement needs."],
  ["Assembly Interfaces", "Evaluate mating parts, gaps, sealing areas and datum relationships across the assembly."],
  ["Surface Finish & Texture", "Coordinate appearance requirements with draft, parting, gating and ejection."],
  ["Insert Design", "Review insert retention, positioning, molding access and surrounding plastic geometry."]
];

const risks = [
  ["Sink Marks", "Local thickness can create uneven cooling and visible depressions."],
  ["Warpage", "Geometry, material and cooling imbalance can affect part shape."],
  ["Short Shot", "Restricted flow or trapped air may prevent complete filling."],
  ["Weld Lines", "Meeting flow fronts can affect appearance or local performance."],
  ["Air Traps", "Enclosed flow paths may require venting or geometry review."],
  ["Flash Risk", "Parting and shutoff conditions influence flash-sensitive areas."],
  ["Ejection Marks", "Ejector placement must balance release and visible-surface needs."],
  ["Drag Marks", "Insufficient release conditions can mark deep or textured walls."],
  ["Difficult Undercuts", "Hidden features may require complex mold actions."],
  ["Tooling Complexity", "Part geometry can add actions, inserts and maintenance points."],
  ["Tolerance Risk", "Resin shrinkage and datum strategy affect dimensional stability."],
  ["Cosmetic Defects", "Gating, flow, ejection and texture influence appearance."]
];

const workflow = [
  ["CAD & Drawing Review", "Confirm geometry, drawings and available product requirements."],
  ["Material & Application Review", "Align resin, function, appearance and operating conditions."],
  ["Moldability Analysis", "Review geometry, tooling actions, filling, ejection and risk areas."],
  ["DFM Report", "Document findings, open questions and practical engineering options."],
  ["Customer Feedback", "Review comments and agree which changes or risks are accepted."],
  ["Co-Design / Design Revision", "Support practical geometry updates when changes are required."],
  ["Final DFM Confirmation", "Recheck revised data and close agreed engineering actions."],
  ["Mold Design Release", "Move the confirmed part definition into detailed mold design."]
];

const faqs = [
  ["What is DFM for injection molding?", "DFM is an engineering review of plastic part geometry, material, function and tooling feasibility before detailed mold design and manufacturing."],
  ["When should DFM be completed?", "DFM should be completed before mold design approval and steel cutting, while product and tooling decisions can still be reviewed efficiently."],
  ["What information is required for a DFM review?", "Provide available 3D CAD data, 2D drawings, material, finish, functional, assembly and production requirements."],
  ["What does an injection molding DFM report include?", "Depending on project needs, it may include annotated findings for draft, wall thickness, parting, gating, ejection, undercuts, tolerances and open decisions."],
  ["Can Arktech suggest changes to my plastic part design?", "Yes. Arktech can propose practical geometry options for moldability, tooling feasibility and assembly review; the customer retains product-design approval."],
  ["Does Arktech review draft, wall thickness, ribs and bosses?", "Yes. These features are reviewed together because their interaction can affect release, filling, cooling, sink, structure and appearance."],
  ["Can mold flow analysis be included?", "Mold flow analysis can be considered for higher-risk or complex parts when simulation would support filling, pressure, weld-line, air-trap or warpage decisions."],
  ["How are undercuts handled during DFM?", "The team identifies the undercut direction and evaluates sliders, lifters, unscrewing actions, removable inserts, shutoffs or geometry simplification."],
  ["Is DFM completed before mold design?", "Yes. DFM findings should be resolved or clearly accepted before the detailed mold design is released."]
];

const related = [
  ["Injection Mold Manufacturing", "/services/injection-mold-manufacturing"],
  ["Mold Design & Approval", "/services/injection-mold-manufacturing"],
  ["Mold Flow Analysis", "/services/dfm-engineering#mold-flow-analysis"],
  ["Plastic Injection Molding", "/services/plastic-injection-molding"],
  ["Mold Trial & Validation", "/services/mold-trial-sampling-support"],
  ["Quality & Documentation", "/company/quality-documentation"],
  ["Co-Design & Product Engineering", "/services/dfm-engineering#co-design"],
  ["DFM Guide", "/resources/dfm-guide"],
  ["Wall Thickness Guidelines", "/resources/injection-molding/wall-thickness-guidelines"],
  ["Draft Angle Guidelines", "/resources/injection-molding/draft-angle-guidelines"],
  ["Material Selection Guide", "/resources/material-selection-guide"],
  ["Request a Quote", "/request-a-quote"]
];

function Heading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="inline-flex font-bold text-[var(--brand)] transition hover:translate-x-1 hover:underline">{children} <span aria-hidden="true" className="ml-2">→</span></Link>;
}

export function DfmEngineeringPage() {
  const pageUrl = `${site.url}/services/dfm-engineering`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "DFM Engineering for Plastic Injection Molded Parts",
      description: "Injection molding DFM and moldability analysis before mold design and tooling release.",
      url: pageUrl,
      provider: { "@id": `${site.url}/#organization` }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer }
      }))
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }} />
      <main>
        <section className="border-b border-[var(--line)] bg-white">
          <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">DFM Engineering</p>
              <h1 className="internal-page-title mt-4 text-[var(--brand-dark)]">DFM Engineering for Plastic Injection Molded Parts</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">Arktech reviews plastic part geometry, material, assembly requirements and tooling feasibility before mold design and steel cutting, helping identify manufacturability risks early in the project.</p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">When changes are needed, our engineering team can work with the customer through practical co-design to improve moldability, assembly and tooling feasibility before release.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-dark)]">Upload CAD for DFM Review</Link>
                <Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white">Request Tooling Quote</Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src="/images/Engineering/injection-mold-engineering-dfm-analysis.webp" alt="Arktech engineers reviewing DFM analysis and injection mold design" fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="border-t border-[var(--line)] px-5 py-4 text-sm font-semibold text-[var(--brand-dark)]">Plastic part DFM, Moldflow review and mold engineering before tooling release</figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16">
          <div className="container-page">
            <Heading eyebrow="Why DFM Before Tooling" title="Why DFM Review Matters Before Mold Design" body="DFM helps identify product and tooling risks before mold design and steel cutting, when changes are generally easier to evaluate and implement." />
            <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
              {["Reduce avoidable tooling changes", "Improve moldability", "Improve part consistency", "Clarify design and tooling decisions before release"].map((item, index) => (
                <div key={item} className="bg-white p-6"><span className="text-sm font-bold text-[var(--brand)]">0{index + 1}</span><p className="mt-3 font-bold leading-6 text-[var(--brand-dark)]">{item}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] pb-16">
          <div className="container-page">
            <Heading eyebrow="DFM Review Scope" title="What We Review in an Injection Molding DFM" body="The review connects plastic part design, material behavior and mold construction so key decisions are visible before tooling begins." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reviewScope.map(([title, body], index) => (
                <article key={title} className="border-l-2 border-[var(--brand)] bg-white p-5">
                  <div className="flex items-baseline gap-3"><span className="text-xs font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><h3 className="font-bold text-[var(--brand-dark)]">{title}</h3></div>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-page">
            <Heading eyebrow="Design Principles" title="Key Design Considerations for Molded Plastic Parts" body="DFM reviews design features as one connected molding system rather than isolated checklist items." />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                {[
                  ["Wall Thickness", "Uniform walls and controlled thick-to-thin transitions can support more predictable filling, cooling and shrinkage. Sink and dimensional behavior remain material- and geometry-dependent."],
                  ["Draft Angle", "Draft supports release from the mold. Deep walls, cosmetic faces and textured surfaces require project-specific review rather than one universal value."],
                  ["Ribs & Bosses", "Ribs can reinforce structure and bosses can support assembly, but their thickness and relationship to surrounding walls must be reviewed for sink, filling and local strength."]
                ].map(([title, body], index) => (
                  <article key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[var(--line)] pb-7 last:border-0">
                    <span className="text-2xl font-extrabold text-[var(--brand)]">0{index + 1}</span>
                    <div><h3 className="text-xl font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 leading-7 text-[var(--muted)]">{body}</p></div>
                  </article>
                ))}
              </div>
              <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white">
                <Image src="/images/process/dfm-engineering-feedback-old-website.png" alt="DFM review showing plastic part geometry and injection mold engineering feedback" width={1086} height={572} sizes="(min-width: 1024px) 44vw, 100vw" className="h-auto w-full" />
                <figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm text-[var(--muted)]">Engineering review connects product geometry with the proposed mold structure.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16">
          <div className="container-page">
            <Heading eyebrow="Undercuts & Tooling Actions" title="Undercuts, Sliders, Lifters & Unscrewing Features" body="DFM identifies tooling complexity early and evaluates whether part geometry can be simplified before detailed mold design." />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Identify the undercut", "Determine the release direction and whether the feature is internal, external or threaded."],
                ["Select a practical action", "Evaluate sliders, lifters, unscrewing systems, removable inserts or other mold actions."],
                ["Consider shutoffs", "Review whether a suitable shutoff can simplify the tool while maintaining part function."],
                ["Review removable inserts", "Consider manual inserts only where project requirements and production needs support them."],
                ["Evaluate threaded features", "Check thread direction, core movement and access for unscrewing requirements."],
                ["Simplify where practical", "Discuss geometry changes that may reduce mold actions without compromising the product."]
              ].map(([title, body]) => <article key={title} className="rounded-sm border border-[var(--line)] bg-white p-5"><h3 className="font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></article>)}
            </div>
            <div className="mt-8"><ArrowLink href="/services/injection-mold-manufacturing">View Mold Design & Approval</ArrowLink></div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-page grid gap-12 lg:grid-cols-2">
            <div>
              <Heading eyebrow="Parting Line & Shutoffs" title="Parting Line & Shutoff Strategy" />
              <p className="mt-5 leading-7 text-[var(--muted)]">Parting-line selection is reviewed against cosmetic impact, flash-sensitive areas, sealing surfaces, complex split lines and the steel conditions created by the product geometry. Shutoff direction and contact conditions are evaluated as part of the same moldability decision.</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Cosmetic impact", "Flash-sensitive areas", "Sealing surfaces", "Shutoff conditions", "Complex split lines", "Steel conditions"].map(item => <li key={item} className="border-l-2 border-[var(--brand)] pl-3 font-semibold text-[var(--brand-dark)]">{item}</li>)}
              </ul>
            </div>
            <div>
              <Heading eyebrow="Gating & Filling" title="Gate Location, Flow & Filling Considerations" />
              <p className="mt-5 leading-7 text-[var(--muted)]">Gate location is reviewed with flow length, pressure, weld lines, air traps, gate vestige, cosmetic surfaces and multi-gate balance. Cold- and hot-runner concepts are considered against resin, cavity and project requirements.</p>
              <p className="mt-4 leading-7 text-[var(--muted)]">Mold flow analysis can be used when required for higher-risk or more complex parts.</p>
              <div className="mt-6"><ArrowLink href="/services/dfm-engineering#mold-flow-analysis">View Mold Flow Analysis</ArrowLink></div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16">
          <div className="container-page">
            <Heading eyebrow="Material Review" title="Material & Process Considerations in DFM" body="Material selection influences part geometry, processing and tool decisions. The review considers shrinkage, flow, wall thickness, draft, gating, cooling, dimensional stability, mold temperature and potential tool wear." />
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="rounded-sm border border-[var(--line)] bg-white p-6">
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">Verified material families</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["ABS", "PC", "PC/ABS", "PP", "PA / Nylon", "PBT", "POM", "PMMA", "TPU / TPE", "PPS", "PPSU", "PEEK", "Glass-filled grades"].map(item => <span key={item} className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 text-sm font-semibold text-[var(--brand-dark)]">{item}</span>)}
                </div>
                <div className="mt-6"><ArrowLink href="/resources/material-selection-guide">View Material Selection Guide</ArrowLink></div>
              </article>
              <div className="grid gap-4">
                <article className="border-l-2 border-[var(--brand)] bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Transparent Parts</p>
                  <h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)]">DFM considerations for clear components</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Review cosmetic surfaces, gate vestige, flow and weld lines, material handling, polishing requirements and the visibility of ejection marks. Optical-grade performance is confirmed only against project-specific requirements.</p>
                </article>
                <article className="border-l-2 border-[var(--brand)] bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Engineering Plastics</p>
                  <h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)]">DFM for reinforced and high-performance resins</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Consider flow behavior, processing temperature, wear, dimensional stability, gate and runner design, mold temperature and tooling-material implications.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-page">
            <Heading eyebrow="Tolerance & Assembly" title="Tolerance, Fit & Assembly Review" body="DFM considers how molded parts interact with the complete assembly, not only whether one part can be molded." />
            <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
              {["Critical dimensions", "Tolerance feasibility", "Tolerance stack-up", "Mating parts", "Snap-fit interfaces", "Sealing surfaces", "Insert positions", "Assembly gaps", "Functional interfaces"].map(item => <div key={item} className="bg-white p-5 font-semibold text-[var(--brand-dark)]">{item}</div>)}
            </div>
          </div>
        </section>

        <section id="co-design" className="scroll-mt-24 bg-[var(--surface-soft)] py-16">
          <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white">
              <Image src="/images/capabilities/co-design-dfm-engineering.webp" alt="Engineer reviewing plastic part geometry during co-design and DFM" width={1600} height={1000} sizes="(min-width: 1024px) 44vw, 100vw" className="h-auto w-full" />
            </figure>
            <div>
              <Heading eyebrow="Co-Design" title="Co-Design Before Tooling" body="When changes are required, Arktech can work with the customer's engineering team to review product geometry, assembly interfaces, material selection and moldability before tooling release." />
              <ol className="mt-7 space-y-3">
                {["Customer provides CAD, drawings and requirements", "Arktech identifies manufacturability risks", "Practical engineering options are proposed", "Customer reviews and approves changes", "Revised geometry is checked again", "Final design is released for tooling"].map((item, index) => <li key={item} className="flex gap-4 border-b border-[var(--line)] pb-3"><span className="font-bold text-[var(--brand)]">0{index + 1}</span><span className="font-semibold text-[var(--brand-dark)]">{item}</span></li>)}
              </ol>
              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">Co-design here means practical engineering collaboration for manufacturability and tooling feasibility; it is not positioned as full industrial-design ownership.</p>
              <div className="mt-6"><ArrowLink href="/services/dfm-engineering#co-design">Co-Design & Product Engineering</ArrowLink></div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-page">
            <Heading eyebrow="DFM Example" title="Typical Design Issues Identified During DFM" body="These representative review patterns illustrate the engineering discussion; they are not claims about a specific customer project result." />
            <div className="mt-8 overflow-x-auto rounded-sm border border-[var(--line)]">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead className="bg-[var(--brand-dark)] text-white"><tr><th className="p-4">Before DFM</th><th className="p-4">Engineering Review</th><th className="p-4">Recommended Direction</th></tr></thead>
                <tbody className="divide-y divide-[var(--line)]">
                  {[
                    ["Thick wall", "Sink and cooling concern", "Review geometry and wall transition"],
                    ["No draft", "Release and drag-mark risk", "Add project-appropriate draft"],
                    ["Deep undercut", "Complex mold action", "Evaluate slider, lifter or simpler geometry"],
                    ["Unsupported boss", "Assembly and sink concern", "Review boss, rib and surrounding wall"],
                    ["Critical tolerance", "Molding capability and datum review", "Align tolerance, datum and inspection approach"]
                  ].map(row => <tr key={row[0]} className="bg-white"><td className="p-4 font-bold text-[var(--brand-dark)]">{row[0]}</td><td className="p-4 text-[var(--muted)]">{row[1]}</td><td className="p-4 text-[var(--muted)]">{row[2]}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16">
          <div className="container-page">
            <Heading eyebrow="Common Risks" title="Common Injection Molding Design Risks" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {risks.map(([title, body]) => <article key={title} className="bg-white p-5"><h3 className="font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Heading eyebrow="DFM Deliverables" title="What You Receive from a DFM Review" body="Depending on project requirements, the review can include the following engineering records and discussions." />
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Annotated DFM report", "Parting line review", "Gate recommendation", "Ejection review", "Slider or lifter proposal", "Draft and wall-thickness feedback", "Material and shrinkage considerations", "Mold structure recommendations", "Open issue list", "Design revision discussion"].map(item => <li key={item} className="flex gap-3 text-sm font-semibold text-[var(--brand-dark)]"><span aria-hidden="true" className="text-[var(--brand)]">—</span>{item}</li>)}
              </ul>
            </div>
            <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--surface-soft)]">
              <Image src="/images/process/dfm-engineering-feedback-old-website.png" alt="Arktech DFM report review with plastic part and mold engineering feedback" width={1086} height={572} sizes="(min-width: 1024px) 52vw, 100vw" className="h-auto w-full" />
              <figcaption className="border-t border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--muted)]">Example engineering visual showing DFM findings and mold-structure review.</figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16">
          <div className="container-page">
            <Heading eyebrow="DFM Workflow" title="From CAD Review to Tooling Release" body="A documented review sequence connects customer requirements, engineering feedback and final mold-design release." />
            <ol className="mt-9 grid overflow-hidden rounded-sm border border-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
              {workflow.map(([title, body], index) => <li key={title} className="relative border-b border-r border-[var(--line)] bg-white p-5 last:border-b-0"><span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></li>)}
            </ol>
          </div>
        </section>

        <section id="mold-flow-analysis" className="scroll-mt-24 bg-white py-16">
          <div className="container-page">
            <Heading eyebrow="DFM vs Mold Flow" title="When Mold Flow Analysis Is Useful" body="DFM and Moldflow support related decisions, but they are not identical engineering activities." />
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <article className="border-l-2 border-[var(--brand)] bg-[var(--surface-soft)] p-6"><h3 className="text-xl font-bold text-[var(--brand-dark)]">DFM review</h3><p className="mt-3 leading-7 text-[var(--muted)]">Reviews geometry, material, tooling actions, manufacturability, parting, gating, ejection, tolerance and assembly decisions.</p></article>
              <article className="border-l-2 border-[var(--brand)] bg-[var(--surface-soft)] p-6"><h3 className="text-xl font-bold text-[var(--brand-dark)]">Mold flow analysis</h3><p className="mt-3 leading-7 text-[var(--muted)]">Provides simulation support for filling, pressure, balance, weld lines, air traps and warpage when the project risk or complexity justifies it.</p></article>
            </div>
            <div className="mt-10 rounded-sm border border-[var(--line)] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">From DFM to Mold Design</p>
              <h3 className="mt-2 text-2xl font-bold text-[var(--brand-dark)]">DFM Before Mold Design Approval</h3>
              <p className="mt-3 max-w-4xl leading-7 text-[var(--muted)]">DFM findings should be resolved or clearly accepted before detailed mold design is released, helping reduce late tooling changes and keeping engineering decisions traceable.</p>
              <div className="mt-5"><ArrowLink href="/services/injection-mold-manufacturing">View Mold Design & Approval</ArrowLink></div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white py-12">
          <div className="container-page">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">Related Capabilities</p>
            <div className="mt-5 flex flex-wrap gap-x-7 gap-y-4">
              {related.map(([label, href]) => <Link key={label} href={href} className="font-semibold text-[var(--brand-dark)] underline-offset-4 hover:text-[var(--brand)] hover:underline">{label} <span aria-hidden="true">→</span></Link>)}
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16">
          <div className="container-page">
            <Heading eyebrow="FAQ" title="Injection Molding DFM FAQs" />
            <div className="mt-8 max-w-4xl divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {faqs.map(([question, answer]) => <details key={question} className="group bg-white px-5 py-1"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-[var(--brand-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]">{question}<span aria-hidden="true" className="text-xl text-[var(--brand)] group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-5 leading-7 text-[var(--muted)]">{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[#F4F6F8] py-16">
          <div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">Start with a DFM Review</p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Review Your Plastic Part Before Tooling</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">Send us your CAD files, drawings, material requirements and functional requirements. Our engineering team will review moldability, tooling risks, key design considerations and next-step recommendations.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-dark)]">Upload CAD for DFM Review</Link>
              <Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white">Request Tooling Quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
