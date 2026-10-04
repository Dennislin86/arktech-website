import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

const reviewGroups = [
  {
    title: "Part Geometry & Moldability",
    topics: ["Wall Thickness", "Draft Angle", "Ribs & Bosses", "Snap-Fits"],
    description: "Review geometry that affects filling, release, local thickness, sink risk and basic manufacturability."
  },
  {
    title: "Tooling & Release Strategy",
    topics: ["Undercuts", "Parting Line", "Shutoffs", "Ejection Strategy"],
    description: "Evaluate release direction, split-line strategy, shut-off conditions and ejection requirements before mold design."
  },
  {
    title: "Flow & Runner Planning",
    topics: ["Gate Location", "Runner Concept"],
    description: "Review gate position, filling direction, cavity layout and hot- or cold-runner requirements around part geometry and material behavior."
  },
  {
    title: "Dimensional & Cosmetic Risk",
    topics: ["Sink & Warpage Risk", "Tolerance & Shrinkage", "Surface Finish & Texture"],
    description: "Evaluate shrinkage, deformation, critical dimensions and appearance requirements before tooling release."
  },
  {
    title: "Assembly & Insert Design",
    topics: ["Assembly Interfaces", "Insert Design"],
    description: "Review mating features, sealing areas, datum relationships and insert retention around the final product assembly."
  }
];

const riskGroups = [
  {
    title: "Filling Risks",
    terms: ["Short Shot", "Weld Lines", "Air Traps"],
    description: "Flow restrictions, long flow paths, trapped air and meeting flow fronts can affect filling, appearance and local performance."
  },
  {
    title: "Dimensional Risks",
    terms: ["Warpage", "Shrinkage", "Tolerance Risk"],
    description: "Material behavior, geometry, cooling and datum strategy can affect molded-part shape and dimensional stability."
  },
  {
    title: "Surface & Cosmetic Risks",
    terms: ["Sink Marks", "Flash Risk", "Ejection Marks", "Drag Marks", "Cosmetic Defects"],
    description: "Wall thickness, parting conditions, ejection, gating and texture can affect visible surfaces.",
    href: "/resources/injection-molding/sink-marks-causes-solutions",
    linkLabel: "Review Sink Mark Guidance"
  },
  {
    title: "Tooling Complexity Risks",
    terms: ["Difficult Undercuts", "Tooling Complexity", "Complex Mold Actions"],
    description: "Hidden geometry and difficult release conditions may require sliders, lifters, inserts or additional mold actions.",
    href: "/resources/injection-molds/slider-vs-lifter",
    linkLabel: "Compare Slider vs Lifter"
  }
];

const workflow = [
  ["CAD & Requirement Review", "Confirm geometry, drawings, material, function and available project requirements."],
  ["Material & Moldability Analysis", "Review resin behavior, wall thickness, release conditions, assembly and manufacturing constraints."],
  ["DFM Findings & Engineering Options", "Document key risks, tooling implications, open questions and practical options."],
  ["Customer Review & Design Revision", "Review comments, agree required changes and update product definition where needed."],
  ["Final DFM Confirmation & Tooling Release", "Recheck revised data, close agreed actions and release confirmed design into detailed mold design."]
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

const relatedCapabilities = [
  ["Injection Mold Manufacturing", "/services/injection-mold-manufacturing"],
  ["Mold Design & Approval", "/services/injection-mold-manufacturing"],
  ["Mold Flow Analysis", "/services/dfm-engineering#mold-flow-analysis"],
  ["Plastic Injection Molding", "/services/plastic-injection-molding"],
  ["Mold Trial & Validation", "/services/mold-trial-sampling-support"],
  ["Quality & Documentation", "/company/quality-documentation"],
  ["Co-Design & Product Engineering", "/services/dfm-engineering#co-design"]
];

const engineeringResources = [
  ["DFM Guide", "/resources/dfm-guide"],
  ["Wall Thickness Guidelines", "/resources/injection-molding/wall-thickness-guidelines"],
  ["Draft Angle Guidelines", "/resources/injection-molding/draft-angle-guidelines"],
  ["Material Selection Guide", "/resources/material-selection-guide"],
  ["Slider vs Lifter", "/resources/injection-molds/slider-vs-lifter"],
  ["Hot Runner vs Cold Runner", "/resources/injection-molds/hot-runner-vs-cold-runner"]
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
      name: "DFM Engineering for Injection Molded Parts",
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
      <div>
        <section className="border-b border-[var(--line)] bg-white">
          <div className="container-page grid items-center gap-9 py-12 sm:py-14 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:gap-12 lg:py-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">DFM Engineering</p>
              <h1 className="split-hero-title mt-4 text-[var(--brand-dark)]">
                Injection Molding DFM Engineering
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">Arktech reviews part geometry, material, assembly requirements and tooling feasibility—including wall thickness, draft, undercuts, gate strategy, shrinkage and critical interfaces—before mold design and steel cutting.</p>
              <ul aria-label="DFM review topics" className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm font-semibold leading-6 text-[var(--brand-dark)]">
                {["Geometry", "Material", "Gating", "Shrinkage", "Assembly Interfaces"].map((topic, index) => (
                  <li key={topic} className="inline-flex items-center gap-2">
                    {index > 0 ? <span aria-hidden="true" className="text-[var(--brand)]">·</span> : null}
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/request-a-quote" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-dark)]">Upload CAD for DFM Review</Link>
                <Link href="/request-a-quote" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white">Request Tooling Quote</Link>
              </div>
            </div>
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[#101010]">
              <div className="relative aspect-[16/10]">
                <Image src="/images/injection-mold-manufacturing/complete-dfm-engineering-review.webp" alt="DFM engineering review for injection molded parts before mold design" fill priority sizes="(min-width: 1024px) 62vw, 100vw" className="object-contain" />
              </div>
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
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">DFM Review Scope</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">What We Review in an Injection Molding DFM</h2>
              <div className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)] sm:text-lg">
                <p>Our DFM review evaluates part geometry, material behavior, moldability and tooling requirements before mold design begins.</p>
                <p>The goal is to identify manufacturing risks early and make key engineering decisions visible before steel cutting.</p>
              </div>
            </div>

            <figure className="mt-8 overflow-hidden rounded-md border border-[var(--line)] bg-white">
              <div className="relative aspect-[1812/817] w-full">
                <Image
                  src="/images/Engineering/injection-molding-dfm-report-anonymized.webp"
                  alt="Injection molding DFM report reviewing part design, moldability and tooling requirements"
                  fill
                  sizes="(min-width: 1280px) 1120px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2rem)"
                  className="object-contain"
                />
              </div>
            </figure>

            <div className="mt-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">DFM Review Topics</p>
              <div className="mt-4 grid gap-x-10 md:grid-cols-2">
                {reviewGroups.map((group, index) => (
                  <article key={group.title} className="border-t border-[var(--line)] py-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="text-lg font-bold text-[var(--brand-dark)]">{group.title}</h3>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm font-semibold leading-6 text-[var(--brand-dark)]" aria-label={`${group.title} review topics`}>
                      {group.topics.map((topic, topicIndex) => (
                        <li key={topic} className="inline-flex items-center gap-2">
                          {topicIndex > 0 ? <span aria-hidden="true" className="text-[var(--brand)]">·</span> : null}
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">{group.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-5 border-t border-[var(--line)] pt-7 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-lg font-bold text-[var(--brand-dark)]">Want feedback on your part before mold design starts?</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/request-a-quote" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-dark)]">Upload CAD for DFM Review <span aria-hidden="true" className="ml-2">→</span></Link>
                <Link href="/request-a-quote" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white">Request Tooling Quote <span aria-hidden="true" className="ml-2">→</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-page">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">Design Principles</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Design Principles for Injection Molded Parts</h2>
              <div className="mt-4 space-y-2 text-base leading-7 text-[var(--muted)] sm:text-lg">
                <p>Good injection molding design balances part function, moldability, material behavior and tooling requirements.</p>
                <p>These principles are reviewed together rather than as isolated design rules before tooling release.</p>
              </div>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(20rem,2fr)] lg:items-start xl:grid-cols-[minmax(0,13fr)_minmax(22rem,7fr)] xl:gap-12">
              <div className="grid gap-x-8 md:grid-cols-2">
                {[
                  ["Wall Thickness", "Keep walls as uniform as practical and use controlled transitions to reduce variation in filling, cooling and shrinkage."],
                  ["Draft Angle", "Provide sufficient draft for reliable part release, especially on deep, textured or cosmetic surfaces."],
                  ["Ribs & Bosses", "Reinforce structure without creating excessive local thickness that can increase sink, distortion or filling risk."],
                  ["Undercuts & Part Release", "Review undercuts early to determine whether design changes, sliders, lifters or other release mechanisms are required."],
                  ["Gate & Flow Considerations", "Consider gate access, flow direction and visible surfaces before finalizing part geometry."],
                  ["Tolerance, Shrinkage & Assembly", "Align critical dimensions, material shrinkage and mating features with realistic molding and assembly requirements."]
                ].map(([title, body], index) => (
                  <article key={title} className="border-t border-[var(--line)] py-5 sm:py-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-base font-extrabold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="text-xl font-bold leading-snug text-[var(--brand-dark)] sm:text-2xl">{title}</h3>
                    </div>
                    <p className="mt-3 text-[0.95rem] leading-6 text-[var(--muted)] sm:text-base sm:leading-7">{body}</p>
                  </article>
                ))}
              </div>

              <aside aria-labelledby="engineering-resources-title" className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 sm:p-6">
                <p id="engineering-resources-title" className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Engineering Resources</p>
                <div className="mt-4 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {[
                    ["Mold Design Guidelines", "Design guidance for wall thickness, draft, ribs, bosses and common molded features.", "View Mold Design Guidelines", "/resources/mold-design-guidelines"],
                    ["Material Selection Guide", "Compare common and engineering thermoplastics around performance, manufacturing and end-use requirements.", "View Material Selection Guide", "/resources/material-selection-guide"],
                    ["Slider vs Lifter", "Understand common side-action options used to release molded part undercuts.", "Read Slider vs Lifter", "/resources/injection-molds/slider-vs-lifter"]
                  ].map(([title, body, label, href]) => (
                    <div key={title} className="py-5 first:pt-4">
                      <h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
                      <Link href={href} className="focus-ring mt-3 inline-flex font-bold text-[var(--brand)] transition hover:translate-x-1 hover:underline">
                        {label} <span aria-hidden="true" className="ml-2">→</span>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <p className="font-bold text-[var(--brand-dark)]">Have a part ready for design review?</p>
                  <Link href="/request-a-quote" className="focus-ring mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-center font-bold text-white transition hover:bg-[var(--brand-dark)]">
                    Upload CAD for DFM Review <span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16">
          <div className="container-page">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">Undercuts &amp; Tooling Actions</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[2.75rem]">Undercut Solutions for Injection Molded Parts</h2>
              <div className="mt-4 space-y-2 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                <p>Sliders, lifters, shutoffs, removable inserts and unscrewing mechanisms are evaluated during DFM based on release direction, part geometry and production requirements.</p>
                <p>Where practical, geometry changes may also be considered to reduce tooling complexity without compromising part function.</p>
              </div>
            </div>

            <div className="mt-9 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Identify the Undercut", "Determine whether the feature is internal, external or threaded and confirm the required release direction.", "Internal · External · Threaded"],
                ["Select the Release Strategy", "Evaluate sliders, lifters, shutoffs, removable inserts or unscrewing mechanisms based on geometry, movement and production needs.", ""],
                ["Simplify Where Practical", "Review whether geometry can be adjusted to reduce mold actions, maintenance requirements or tooling complexity without compromising product function.", ""]
              ].map(([title, body, terms], index) => (
                <article key={title} className="bg-white p-5 sm:p-6">
                  <span className="text-base font-extrabold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-[var(--brand-dark)] sm:text-2xl">{title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-6 text-[var(--muted)] sm:text-base sm:leading-7">{body}</p>
                  {terms ? <p className="mt-4 text-sm font-semibold text-[var(--brand-dark)]">{terms}</p> : null}
                </article>
              ))}
            </div>

            <div className="mt-9 grid gap-8 border-t border-[var(--line)] pt-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-start">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Common Tooling Solutions</h3>
                <ul aria-label="Common tooling solutions for molded-part undercuts" className="mt-4 flex flex-wrap gap-2">
                  {["Sliders", "Lifters", "Shutoffs", "Removable Inserts", "Unscrewing Mechanisms"].map((solution) => (
                    <li key={solution} className="rounded-sm border border-[var(--line)] bg-white px-3 py-2 text-sm font-bold text-[var(--brand-dark)] sm:text-base">{solution}</li>
                  ))}
                </ul>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">The selected solution depends on undercut direction, available mold space, part release, maintenance access, cycle expectations and receiving machine requirements.</p>
                <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
                  <ArrowLink href="/resources/injection-molds/slider-vs-lifter">Read Slider vs Lifter</ArrowLink>
                  <ArrowLink href="/injection-molds#complex-injection-molds">Explore Complex Injection Molds</ArrowLink>
                </div>
              </div>

              <div className="border-t border-[var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-lg font-bold leading-7 text-[var(--brand-dark)]">Have a part with undercuts or threaded features?</p>
                <Link href="/request-a-quote" className="focus-ring mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-center font-bold text-white transition hover:bg-[var(--brand-dark)] sm:w-auto lg:w-full">
                  Upload CAD for DFM Review <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-page">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">Tooling Decisions</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[2.75rem]">Critical Tooling Decisions Before Mold Design Release</h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">Parting-line, shutoff, gate and runner decisions are reviewed during DFM because they directly influence mold construction, part appearance, filling behavior and production reliability.</p>
            </div>

            <div className="mt-9 grid gap-8 lg:grid-cols-2 lg:gap-0">
              <article className="lg:pr-10 xl:pr-12">
                <h3 className="text-2xl font-bold leading-tight text-[var(--brand-dark)] sm:text-3xl">Parting Line &amp; Shutoff Strategy</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">Review split-line location, shut-off direction and sealing conditions around cosmetic surfaces, flash-sensitive areas and mold steel conditions.</p>
                <ul className="mt-6 grid gap-3">
                  {["Cosmetic & Visible Surfaces", "Flash-Sensitive Areas", "Sealing / Shut-Off Surfaces", "Complex Split-Line Conditions"].map((item) => (
                    <li key={item} className="border-l-2 border-[var(--brand)] py-1 pl-4 text-base font-bold leading-6 text-[var(--brand-dark)] sm:text-lg">{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">The selected parting and shut-off strategy should support moldability, tool reliability and acceptable witness-line placement.</p>
                <div className="mt-5"><ArrowLink href="/services/injection-mold-manufacturing">Explore Mold Design &amp; Approval</ArrowLink></div>
              </article>

              <article className="border-t border-[var(--line)] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12">
                <h3 className="text-2xl font-bold leading-tight text-[var(--brand-dark)] sm:text-3xl">Gate, Flow &amp; Runner Strategy</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">Gate and runner strategy is reviewed around material flow, pressure, weld lines, air traps, cosmetic requirements and cavity balance.</p>
                <ul className="mt-6 grid gap-3">
                  {["Gate Location & Vestige", "Flow Length & Pressure", "Weld Lines & Air Traps", "Cold Runner / Hot Runner Concept"].map((item) => (
                    <li key={item} className="border-l-2 border-[var(--brand)] py-1 pl-4 text-base font-bold leading-6 text-[var(--brand-dark)] sm:text-lg">{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">Mold flow analysis can be used when the part geometry, material, flow length or gating strategy requires deeper filling analysis.</p>
                <div className="mt-5"><ArrowLink href="/services/dfm-engineering#mold-flow-analysis">View Mold Flow Analysis</ArrowLink></div>
              </article>
            </div>

            <div className="mt-9 flex flex-col gap-5 border-t border-[var(--line)] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-bold text-[var(--brand-dark)]">Have a part ready for tooling review?</p>
              <Link href="/request-a-quote" className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-[var(--brand-dark)] sm:w-auto">
                Upload CAD for DFM Review <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16">
          <div className="container-page">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Material Review</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[2.75rem]">Material &amp; Process Considerations in DFM</h2>
              <div className="mt-4 max-w-3xl space-y-2 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                <p>Material behavior affects part geometry, shrinkage, flow, gating, cooling, dimensional stability, mold temperature and tool wear.</p>
                <p>DFM reviews these factors together with the selected resin and end-use requirements before tooling decisions are finalized.</p>
              </div>
            </div>

            <div className="mt-9 grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0">
              <article className="lg:pr-10 xl:pr-12">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-dark)]">Material Families</h3>
                <dl className="mt-5 grid gap-x-8 sm:grid-cols-2">
                  {[
                    ["General-Purpose Thermoplastics", "ABS · PP · PMMA"],
                    ["Engineering Plastics", "PC · PC/ABS · PA / Nylon · PBT · POM"],
                    ["High-Performance & Reinforced Plastics", "PPS · PPSU · PEEK · Glass-Filled Grades"],
                    ["Elastomers", "TPU / TPE"]
                  ].map(([family, materials]) => (
                    <div key={family} className="border-b border-[var(--line)] py-4 first:pt-0 sm:[&:nth-child(2)]:pt-0">
                      <dt className="text-base font-bold leading-6 text-[var(--brand-dark)] sm:text-lg">{family}</dt>
                      <dd className="mt-1.5 text-sm font-medium leading-6 text-[var(--muted)] sm:text-base">{materials}</dd>
                    </div>
                  ))}
                </dl>

                <h4 className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-dark)]">DFM Factors Influenced by Material</h4>
                <ul className="mt-3 grid grid-cols-2 gap-x-7">
                  {["Shrinkage", "Flow Behavior", "Mold Temperature", "Gate / Runner Strategy", "Cooling", "Tool Wear", "Surface / Cosmetic Requirements", "Dimensional Stability"].map((factor) => (
                    <li key={factor} className="border-b border-[var(--line)] py-2.5 text-sm font-bold leading-5 text-[var(--brand-dark)] sm:text-base">{factor}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">The same part geometry may require different DFM decisions depending on resin shrinkage, flow, temperature, reinforcement and surface requirements.</p>
                <div className="mt-5"><ArrowLink href="/resources/material-selection-guide">View Material Selection Guide</ArrowLink></div>
              </article>

              <div className="grid content-start gap-4 border-t border-[var(--line)] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12">
                <article className="border-l-2 border-[var(--brand)] bg-white p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Transparent &amp; Cosmetic Parts</p>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-[var(--brand-dark)] sm:text-2xl">DFM for Transparent &amp; Cosmetic Parts</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">Review gate vestige, weld lines, flow marks, polishing requirements, ejection visibility and cosmetic surfaces for clear or appearance-critical components.</p>
                  <p className="mt-4 text-sm font-semibold leading-6 text-[var(--brand-dark)]">Gate Vestige · Weld Lines · Flow Marks · Polishing · Ejection Marks · Cosmetic Surfaces</p>
                </article>

                <article className="border-l-2 border-[var(--brand)] bg-white p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">High-Performance &amp; Reinforced Plastics</p>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-[var(--brand-dark)] sm:text-2xl">DFM for High-Performance &amp; Reinforced Plastics</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">Review flow behavior, processing temperature, shrinkage, wear, gate and runner design, mold temperature and tooling-material requirements for PPS, PPSU, PEEK and glass-filled grades.</p>
                  <p className="mt-4 text-sm font-semibold leading-6 text-[var(--brand-dark)]">Flow · Processing Temperature · Shrinkage · Wear · Gate / Runner · Mold Temperature · Tooling Material</p>
                </article>

                <div className="mt-2 border-t border-[var(--line)] pt-6">
                  <p className="text-base font-bold leading-6 text-[var(--brand-dark)] sm:text-lg">Have a material-sensitive or high-performance molding project?</p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
                    <Link href="/request-a-quote" className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-center text-sm font-bold text-white transition hover:bg-[var(--brand-dark)] sm:w-auto">
                      Upload CAD for DFM Review <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                    <ArrowLink href="/resources/injection-molding/engineering-plastics-guide">Explore Engineering Plastics Guide</ArrowLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-page">
            <Heading eyebrow="Tolerance & Assembly" title="Tolerance, Fit & Assembly Review" body="DFM reviews critical dimensions and assembly interfaces together with material shrinkage, molding capability and inspection requirements so the molded parts can function correctly in the complete assembly." />
            <div className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Critical Dimensions", "Review dimensions that directly affect function, sealing, location or assembly."],
                ["Tolerance Feasibility", "Evaluate whether drawing tolerances are realistic for the selected material, part geometry and molding process."],
                ["Stack-Up & Datums", "Review datum strategy and tolerance accumulation across mating components."],
                ["Mating & Snap-Fit Interfaces", "Check engagement, retention, clearances and expected molded-part variation."],
                ["Sealing & Functional Interfaces", "Review sealing surfaces, contact conditions and functional relationships between molded components."],
                ["Insert Positioning", "Review insert location, retention and tolerance relationships with surrounding molded geometry."]
              ].map(([title, body]) => (
                <article key={title} className="border-l-2 border-[var(--brand)] pl-5">
                  <h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-bold text-[var(--brand-dark)]">Have critical dimensions or assembly interfaces to review?</p>
              <ArrowLink href="/request-a-quote">Upload CAD + Drawings for DFM Review</ArrowLink>
            </div>
          </div>
        </section>

        <section id="co-design" className="scroll-mt-24 bg-[var(--surface-soft)] py-16">
          <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white">
              <Image src="/images/capabilities/co-design-dfm-engineering.webp" alt="Engineer reviewing plastic part geometry during co-design and DFM" width={1600} height={1000} sizes="(min-width: 1024px) 44vw, 100vw" className="h-auto w-full" />
            </figure>
            <div>
              <Heading eyebrow="Co-Design" title="Co-Design Before Tooling" body="When design changes are required, Arktech can work with the customer’s engineering team to review geometry, assembly interfaces, material behavior and tooling feasibility before tooling release." />
              <ol className="mt-7 space-y-4">
                {[
                  ["Customer Inputs", "CAD files, drawings, material requirements and application requirements are reviewed."],
                  ["Manufacturability Risks", "Arktech identifies geometry, moldability, tooling and assembly concerns."],
                  ["Engineering Options", "Practical design or tooling options are discussed with the customer."],
                  ["Revision & Release", "Revised geometry is rechecked before agreed design is released for tooling."]
                ].map(([title, body], index) => (
                  <li key={title} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-[var(--line)] pb-4">
                    <span className="font-bold text-[var(--brand)]">0{index + 1}</span>
                    <div><h3 className="font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-1 text-sm leading-6 text-[var(--muted)]">{body}</p></div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">Co-design focuses on practical manufacturability and tooling decisions while the customer retains product-design ownership.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <ArrowLink href="/services/dfm-engineering#co-design">Explore Co-Design & Product Engineering</ArrowLink>
                <ArrowLink href="/request-a-quote">Upload CAD for DFM Review</ArrowLink>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-page">
            <Heading eyebrow="DFM Example" title="Typical Design Issues Found During DFM Review" body="The examples below show common engineering discussion patterns during DFM. Final recommendations always depend on the actual part geometry, material, function and tooling requirements." />
            <div className="mt-8 overflow-hidden rounded-sm border border-[var(--line)]">
              <table className="block w-full border-collapse text-left md:table">
                <thead className="hidden bg-[var(--brand-dark)] text-white md:table-header-group"><tr><th className="p-4">Design Issue</th><th className="p-4">Engineering Review</th><th className="p-4">Typical Direction</th></tr></thead>
                <tbody className="block divide-y divide-[var(--line)] md:table-row-group">
                  {[
                    ["Thick Wall", "Sink / cooling / shrinkage concern", "Review wall transition and surrounding geometry"],
                    ["Insufficient Draft", "Release and drag-mark risk", "Add project-appropriate draft where feasible"],
                    ["Deep Undercut", "Complex release / tooling action", "Evaluate slider, lifter, insert or geometry simplification"],
                    ["Unsupported Boss", "Sink / assembly / local-strength concern", "Review boss, ribs and surrounding wall structure"],
                    ["Critical Tolerance", "Shrinkage / datum / molding capability concern", "Align tolerance, datum and inspection strategy"]
                  ].map(row => (
                    <tr key={row[0]} className="block bg-white p-4 md:table-row md:p-0">
                      <td className="block font-bold text-[var(--brand-dark)] md:table-cell md:p-4"><span className="mb-1 block text-xs uppercase tracking-[0.12em] text-[var(--brand)] md:hidden">Design Issue</span>{row[0]}</td>
                      <td className="mt-3 block text-[var(--muted)] md:table-cell md:p-4"><span className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)] md:hidden">Engineering Review</span>{row[1]}</td>
                      <td className="mt-3 block text-[var(--muted)] md:table-cell md:p-4"><span className="mb-1 block text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)] md:hidden">Typical Direction</span>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16">
          <div className="container-page">
            <Heading eyebrow="Common Risks" title="Common Injection Molding Design Risks" />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {riskGroups.map(group => (
                <article key={group.title} className="border-t-2 border-[var(--brand)] bg-white p-6">
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">{group.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[var(--brand-dark)]">{group.terms.join(" · ")}</p>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{group.description}</p>
                  {group.href && group.linkLabel ? <div className="mt-4"><ArrowLink href={group.href}>{group.linkLabel}</ArrowLink></div> : null}
                </article>
              ))}
            </div>
            <div className="mt-6"><ArrowLink href="/services/dfm-engineering#mold-flow-analysis">View Mold Flow Analysis</ArrowLink></div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Heading eyebrow="DFM Deliverables" title="What You Receive from a DFM Review" body="Depending on project scope, Arktech can provide documented findings, engineering recommendations and open issues for review before mold design release." />
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Annotated DFM Report", "Parting Line Review", "Gate Recommendation", "Ejection Review", "Slider / Lifter Proposal", "Draft & Wall-Thickness Feedback", "Material & Shrinkage Considerations", "Mold Structure Recommendations", "Open Issue List", "Design Revision Discussion"].map(item => <li key={item} className="flex gap-3 text-sm font-semibold text-[var(--brand-dark)]"><span aria-hidden="true" className="text-[var(--brand)]">—</span>{item}</li>)}
              </ul>
              <div className="mt-7"><ArrowLink href="/request-a-quote">Upload CAD to Start a DFM Review</ArrowLink></div>
            </div>
            <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4 sm:p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Example DFM Report</p>
              <Image src="/images/Engineering/dfm-report-tooling-review-example.webp" alt="Anonymized injection molding DFM report showing parting, gating, venting, tooling actions, cooling and ejection review" width={1600} height={490} sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full" />
            </figure>
          </div>
        </section>

        <section className="bg-[var(--surface-soft)] py-16">
          <div className="container-page">
            <Heading eyebrow="DFM Workflow" title="From CAD Review to Tooling Release" body="A documented review sequence connects customer requirements, engineering feedback and final mold-design release." />
            <ol className="mt-9 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {workflow.map(([title, body], index) => <li key={title} className="bg-white p-5"><span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 font-bold leading-6 text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></li>)}
            </ol>
            <div className="mt-8 flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-bold text-[var(--brand-dark)]">Have CAD ready for review?</p>
              <ArrowLink href="/request-a-quote">Upload CAD for DFM Review</ArrowLink>
            </div>
          </div>
        </section>

        <section id="mold-flow-analysis" className="scroll-mt-24 bg-white py-16">
          <div className="container-page">
            <Heading eyebrow="DFM vs Mold Flow" title="DFM Review vs Mold Flow Analysis" body="DFM and Moldflow support related engineering decisions, but they answer different questions during product and tooling development." />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <article className="border-l-2 border-[var(--brand)] bg-[var(--surface-soft)] p-6">
                <h3 className="text-2xl font-bold text-[var(--brand-dark)]">DFM Review</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">Reviews part geometry, material, moldability, parting, tooling actions, gating, ejection, tolerance, assembly and tooling feasibility before mold design release.</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Best for</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[var(--brand-dark)]">Geometry · Moldability · Tooling Decisions · Assembly · Release Strategy</p>
              </article>
              <article className="border-l-2 border-[var(--brand)] bg-[var(--surface-soft)] p-6">
                <h3 className="text-2xl font-bold text-[var(--brand-dark)]">Mold Flow Analysis</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">Provides simulation support for filling, pressure, flow balance, weld lines, air traps, temperature behavior and warpage when project complexity or risk justifies deeper analysis.</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Best for</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[var(--brand-dark)]">Filling · Pressure · Balance · Weld Lines · Air Traps · Warpage</p>
              </article>
            </div>
            <div className="mt-7 border-t border-[var(--line)] pt-6">
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Use Both When Needed</h3>
              <p className="mt-2 max-w-4xl leading-7 text-[var(--muted)]">Complex geometry, long flow paths, multiple gates, high-performance materials or demanding dimensional requirements may benefit from both DFM review and Moldflow analysis.</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <ArrowLink href="/services/dfm-engineering#mold-flow-analysis">Explore Mold Flow Analysis</ArrowLink>
                <ArrowLink href="/request-a-quote">Upload CAD for DFM Review</ArrowLink>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--surface-soft)] py-14">
          <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Heading eyebrow="Related Capabilities" title="Continue into Tooling & Production Support" />
              <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {relatedCapabilities.map(([label, href]) => <Link key={label} href={href} className="focus-ring flex items-center justify-between gap-4 py-3 font-semibold text-[var(--brand-dark)] transition hover:text-[var(--brand)]"><span>{label}</span><span aria-hidden="true">→</span></Link>)}
              </div>
            </div>
            <div>
              <Heading eyebrow="Engineering Resources" title="Injection Molding Design & DFM Guides" />
              <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {engineeringResources.map(([label, href]) => <Link key={label} href={href} className="focus-ring flex items-center justify-between gap-4 py-3 font-semibold text-[var(--brand-dark)] transition hover:text-[var(--brand)]"><span>{label}</span><span aria-hidden="true">→</span></Link>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[#F4F6F8] py-16">
          <div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Ready to Review Your Part Before Tooling?</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">Send your CAD files, drawings, material information and key project requirements for DFM review before mold design begins.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/request-a-quote" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-[var(--brand-dark)]">Upload CAD for DFM Review</Link>
              <Link href="/request-a-quote" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 text-center font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white">Request Tooling Quote</Link>
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
      </div>
    </>
  );
}
