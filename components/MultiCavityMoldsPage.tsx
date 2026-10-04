import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

const heroImage = "/images/mold-types/multi-cavity-injection-molds.webp";

const useCriteria = [
  {
    title: "Stable Part Design",
    body: "The product geometry and major functional requirements should be sufficiently mature before committing to a more complex multi-cavity tool."
  },
  {
    title: "Higher Production Demand",
    body: "Multiple cavities can increase output per cycle when annual volume and production planning justify the additional tooling investment."
  },
  {
    title: "Repeatable Part Requirements",
    body: "Critical dimensions, cosmetic surfaces and assembly interfaces should be reviewed for cavity-to-cavity consistency."
  },
  {
    title: "Suitable Part & Tool Layout",
    body: "Part size, runner layout, side actions, cooling, machine capacity and mold footprint must support a practical multi-cavity arrangement."
  }
];

const engineeringChallenges = [
  ["Filling Balance", "Runner and gate layout should support consistent filling across cavities."],
  ["Cooling Balance", "Cooling circuits should minimize cavity-to-cavity differences in mold temperature and shrinkage behavior."],
  ["Pressure & Packing", "Pressure loss and packing behavior should be evaluated across the full cavity layout."],
  ["Venting", "Consistent venting helps reduce cavity-specific short shot, burn and filling variation."],
  ["Ejection & Part Release", "Ejection should be repeatable across cavities without creating different witness marks or release behavior."],
  ["Cavity-to-Cavity Dimensions", "Critical dimensions should be evaluated by cavity rather than treating one sample as representative of the whole mold."]
] as const;

const runnerOptions = [
  ["Balanced Cold Runner", "May be considered when the part, resin, runner volume and production requirements support a balanced cold-runner layout."],
  ["Hot Runner System", "May be considered where material use, gate strategy, process control and production planning justify the added system complexity."],
  ["Valve Gate / Sequential Control", "May be evaluated where required by cavity layout, filling behavior, gate appearance or project-specific control needs."]
] as const;

const productionValues = [
  ["Higher Output per Cycle", "Multiple identical parts can be produced in each molding cycle when cavity layout and machine conditions are suitable."],
  ["Lower Machine Time per Part", "Higher output per cycle can reduce machine-time contribution per molded part when production volume justifies the tooling investment."],
  ["Repeatable Production Planning", "Balanced tooling can support more consistent recurring production across multiple cavities."],
  ["Cavity-Specific Maintenance & Serviceability", "Cavity identification, replaceable inserts and spare tooling components can simplify maintenance planning for long-term production."]
] as const;

const applications = [
  ["Clips & Fasteners", "Repeated small parts where stable release and cavity identification support production control.", null],
  ["Connector Components", "Functional connector parts requiring repeatable interfaces across each cavity.", null],
  ["Electronic Housings", "Compact housings and covers produced in repeat cycles for electronic assemblies.", null],
  ["Medical / Diagnostic Plastic Components", "Molded housings and functional parts reviewed against project-specific product requirements.", "/industries/medical-devices"],
  ["Smart Device Parts", "Enclosures, sensor housings and repeated components for connected products.", "/industries/smart-home"],
  ["Repeated Functional Components", "Production parts with critical fit, assembly or functional interfaces.", "/industries/robotics"]
] as const;

const designFeatures = [
  ["Flow System", "Balanced cold runner · Hot runner · Valve gate where required"],
  ["Cavity Serviceability", "Cavity numbering · Replaceable inserts · Spare inserts"],
  ["Cooling & Venting", "Balanced cooling circuits · Cavity-specific venting review"],
  ["Ejection", "Consistent ejector layout · Release behavior · Witness-mark planning"],
  ["Machine Interface", "Mold size · Machine compatibility · Utility connections"]
] as const;

const validationSteps = [
  ["Filling & Process Balance", "Review how each cavity fills, packs and responds under the selected molding conditions."],
  ["Visual Sample Review", "Compare appearance, gate condition, flash, burn and release marks by identified cavity."],
  ["Dimensional Inspection by Cavity", "Record critical measurements against the corresponding cavity rather than combining samples."],
  ["Correction & Re-Trial", "Trace improvement actions to the affected cavity and validate the result in a follow-up trial when required."]
] as const;

const industries = [
  ["Robotics & Automation", "Repeated housings, sensor parts and functional automation components.", "/industries/robotics"],
  ["Medical & Healthcare Devices", "Diagnostic housings and functional plastic components reviewed to project requirements.", "/industries/medical-devices"],
  ["Automotive Components", "Clips, connectors, controls and repeated functional components.", null],
  ["Smart Home & IoT", "Sensor housings, hubs and connected-device enclosures.", "/industries/smart-home"],
  ["Consumer Electronics", "Electronic enclosures and repeatable internal structural parts.", null],
  ["Home Appliance", "Housings, control parts and repeated functional components.", null]
] as const;

const relatedMolds = [
  ["Hot Runner Molds", "/injection-molds/hot-runner-molds"],
  ["Two-Shot / 2K Molds", "/injection-molds/two-shot-2k-molds"],
  ["Insert Molding Tools", "/injection-molds/insert-molding-tools"],
  ["Overmolding Tools", "/injection-molds/overmolding-tools"],
  ["Unscrewing Molds", "/injection-molds/unscrewing-molds"],
  ["Large Injection Molds", "/injection-molds/large-injection-molds"]
] as const;

const relatedCapabilities = [
  ["Injection Mold Manufacturing", "/services/injection-mold-manufacturing"],
  ["DFM Engineering", "/services/dfm-engineering"],
  ["Mold Flow Analysis", "/services/dfm-engineering#mold-flow-analysis"],
  ["Mold Trial & Validation", "/services/mold-trial-sampling-support"],
  ["Quality & Documentation", "/company/quality-documentation"],
  ["Plastic Injection Molding", "/services/plastic-injection-molding"],
  ["Tooling Spare Parts", "/services/tooling-spare-parts"]
] as const;

const faqs = [
  {
    question: "What is a multi-cavity injection mold?",
    answer: "A multi-cavity injection mold contains multiple cavities for producing more than one identical part in each molding cycle. The complete layout must be engineered so filling, cooling, venting, packing, ejection and dimensional review remain controlled across the cavities."
  },
  {
    question: "When should a project use a multi-cavity mold?",
    answer: "It is typically considered when the part design is sufficiently stable and forecast production demand justifies the additional tooling complexity. Part geometry, resin behavior, quality requirements, machine compatibility and long-term production planning also influence the decision."
  },
  {
    question: "How many cavities should an injection mold have?",
    answer: "There is no universal cavity count. The appropriate number depends on part size, material, runner layout, machine capacity, production volume, mold footprint and tooling requirements. These factors should be reviewed together during DFM and mold concept planning."
  },
  {
    question: "How do you balance filling in a multi-cavity mold?",
    answer: "Filling balance is addressed through cavity layout, runner and gate strategy, flow-length review, pressure-loss evaluation, venting and process validation. Mold flow analysis may be used when project complexity requires deeper filling analysis."
  },
  {
    question: "Can multi-cavity molds use hot runner systems?",
    answer: "Yes, a hot runner may be considered when it fits the part geometry, resin, gate requirements, production plan and maintenance approach. A balanced cold runner can also be appropriate; the decision is project-specific."
  },
  {
    question: "How are multi-cavity molds inspected and validated?",
    answer: "Trial samples should be identified by cavity so visual condition, filling behavior and critical dimensions can be reviewed separately. Any correction and re-trial actions can then be traced to the affected cavity condition."
  }
];

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--brand)] sm:text-sm">{children}</p>;
}

function SectionTitle({ eyebrow, title, body }: { eyebrow?: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="focus-ring inline-flex items-center gap-2 rounded-sm text-base font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={href}>
      {children}<span aria-hidden="true">→</span>
    </Link>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 py-3 text-center text-base font-bold text-white transition hover:bg-[var(--brand-hover)]" href={href}>
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children, inverse = false }: { href: string; children: ReactNode; inverse?: boolean }) {
  return (
    <Link className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border px-6 py-3 text-center text-base font-bold transition ${inverse ? "border-white/70 text-white hover:bg-white hover:text-[var(--brand-dark)]" : "border-[var(--brand-dark)] text-[var(--brand-dark)] hover:border-[var(--brand)] hover:text-[var(--brand)]"}`} href={href}>
      {children}
    </Link>
  );
}

export function MultiCavityMoldsPage() {
  const pageUrl = `${site.url}/injection-molds/multi-cavity-molds/`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Injection Molds", item: `${site.url}/injection-molds/` },
        { "@type": "ListItem", position: 3, name: "Multi-Cavity Injection Molds", item: pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      name: "Multi-Cavity Injection Molds",
      description: "Multi-cavity injection molds engineered for balanced filling, cooling, repeatable dimensions and production output.",
      url: pageUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Multi-Cavity Injection Mold Engineering and Tooling",
      serviceType: "Multi-cavity injection mold design, manufacturing and validation",
      url: pageUrl,
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      provider: {
        "@type": "Organization",
        name: site.name,
        url: site.url
      },
      areaServed: "Worldwide",
      description: "Multi-cavity injection molds engineered for balanced filling, cooling, repeatable dimensions and production output."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="border-b border-[var(--line)] bg-white">
        <div className="container-page py-6 lg:py-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/injection-molds">Injection Molds</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-[var(--brand-dark)]">Multi-Cavity Injection Molds</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--surface-soft)]">
        <div className="container-page grid items-center gap-9 py-12 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:gap-12 lg:py-16">
          <div>
            <Eyebrow>Injection Mold Type</Eyebrow>
            <h1 className="split-hero-title mt-4 text-[var(--brand-dark)]">
              Multi-Cavity Molds for Repeat Production
            </h1>
            <p className="mt-6 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">Multi-cavity injection molds produce multiple identical parts per cycle. Arktech supports DFM, cavity-layout planning, runner and cooling review, mold trials and cavity-specific validation for repeat production.</p>
            <p className="mt-6 text-sm font-bold leading-6 text-[var(--brand-dark)] sm:text-base">Balanced Filling · Cooling Strategy · Cavity Identification · Trial Validation</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/request-a-quote">Upload CAD for DFM Review</PrimaryButton>
              <SecondaryButton href="/request-a-quote">Request Tooling Quote</SecondaryButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[var(--line)] bg-white">
            <Image
              src={heroImage}
              alt="Multi-cavity injection mold with multiple production cavities"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionTitle eyebrow="When to Use Multi-Cavity Tooling" title="When Multi-Cavity Injection Molds Make Sense" body="Multi-cavity tooling is most useful when the part design is stable and production demand justifies the additional engineering required to keep multiple cavities filling, cooling and ejecting consistently." />
          <ol className="mt-9 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {useCriteria.map((item, index) => (
              <li className="grid grid-cols-[auto_1fr] gap-4 border-t border-[var(--line)] pt-5" key={item.title}>
                <span className="text-sm font-extrabold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">{item.title}</h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-3 border-l-4 border-[var(--brand)] pl-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-[var(--brand-dark)]">Not sure whether your part should move to multi-cavity tooling?</p>
            <ArrowLink href="/request-a-quote">Upload CAD for DFM Review</ArrowLink>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="Multi-Cavity Engineering" title="Engineering Challenges in Multi-Cavity Injection Molds" />
          <div className="mt-9 grid gap-x-8 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
            {engineeringChallenges.map(([title, body], index) => (
              <article className="border-t-2 border-[var(--brand)] pt-5" key={title}>
                <span className="text-xs font-extrabold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)]">{title}</h3>
                <p className="mt-2 leading-7 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionTitle eyebrow="Runner & Gating" title="Runner and Gate Strategy for Multi-Cavity Molds" body="Multi-cavity molds require runner and gate planning that considers flow balance, pressure loss, gate vestige, cavity spacing, resin behavior and production requirements." />
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {runnerOptions.map(([title, body]) => (
              <article className="border-l-4 border-[var(--brand)] bg-[var(--surface-soft)] p-6" key={title}>
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
            <ArrowLink href="/resources/injection-molds/hot-runner-vs-cold-runner">Hot Runner vs Cold Runner</ArrowLink>
            <ArrowLink href="/services/dfm-engineering#mold-flow-analysis">View Mold Flow Analysis</ArrowLink>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-white">
        <div className="container-page grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-red-200 sm:text-sm">Real Multi-Cavity Tooling</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl">Multi-Cavity Mold Project Examples</h2>
            <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg">This real Arktech tooling image shows open cavity and core halves with repeated production cavities, visible inserts and serviceable mold structure.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/15 bg-white">
            <Image src={heroImage} alt="Multi-cavity injection mold showing cavity and core halves" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-center" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionTitle eyebrow="Production Value" title="What Multi-Cavity Tooling Can Improve" />
          <div className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {productionValues.map(([title, body]) => (
              <article className="border-t border-[var(--line)] pt-5" key={title}>
                <h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="Typical Applications" title="Parts Commonly Suited to Multi-Cavity Tooling" />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map(([title, body, href]) => href ? (
              <Link className="focus-ring group rounded-sm border border-[var(--line)] bg-white p-5 transition hover:border-[var(--brand)]" href={href} key={title}>
                <h3 className="text-lg font-bold text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
              </Link>
            ) : (
              <article className="rounded-sm border border-[var(--line)] bg-white p-5" key={title}>
                <h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <SectionTitle eyebrow="DFM for Multi-Cavity Tooling" title="DFM Decisions Before Multi-Cavity Mold Design" />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">Multi-cavity tooling should be evaluated as a complete molding system rather than simply duplicating a single cavity.</p>
            <div className="mt-7"><ArrowLink href="/services/dfm-engineering">Explore DFM Engineering</ArrowLink></div>
          </div>
          <ol className="grid gap-3">
            {["Number of Cavities", "Part & Cavity Layout", "Runner / Gate Strategy", "Cooling & Venting", "Critical Dimensions by Cavity"].map((item, index) => (
              <li className="flex items-center gap-4 border-b border-[var(--line)] py-4" key={item}>
                <span className="text-sm font-extrabold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-lg font-bold text-[var(--brand-dark)]">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16">
        <div className="container-page">
          <SectionTitle title="Multi-Cavity Mold Design Features" />
          <div className="mt-9 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {designFeatures.map(([title, body]) => (
              <div className="grid gap-2 py-5 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:items-center" key={title}>
                <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-[var(--brand)]">{title}</h3>
                <p className="font-semibold leading-7 text-[var(--brand-dark)]">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
            <span>DFM → Mold Design → Tool Build → Trial → Validation → Export Delivery</span>
            <ArrowLink href="/services/injection-mold-manufacturing">How the mold is built</ArrowLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionTitle title="Material Considerations for Multi-Cavity Tooling" body="Material behavior affects flow balance, shrinkage, gate wear, mold temperature and dimensional consistency across cavities." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="border-t-2 border-[var(--brand)] pt-4"><h3 className="font-bold text-[var(--brand-dark)]">Common Thermoplastics</h3><p className="mt-2 leading-7 text-[var(--muted)]">ABS · PC · PC/ABS · PP · PA · POM · PBT</p></div>
            <div className="border-t-2 border-[var(--brand)] pt-4"><h3 className="font-bold text-[var(--brand-dark)]">Elastomers</h3><p className="mt-2 leading-7 text-[var(--muted)]">TPU / TPE where project-appropriate</p></div>
            <div className="border-t-2 border-[var(--brand)] pt-4"><h3 className="font-bold text-[var(--brand-dark)]">Engineering / Reinforced Materials</h3><p className="mt-2 leading-7 text-[var(--muted)]">Filled grades and higher-performance resins where verified</p></div>
          </div>
          <div className="mt-7"><ArrowLink href="/resources/material-selection-guide">View Material Selection Guide</ArrowLink></div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="Multi-Cavity Validation" title="Mold Trial and Cavity-to-Cavity Validation" body="Multi-cavity validation should identify samples by cavity so filling, dimensions and correction actions can be traced to the specific cavity condition." />
          <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {validationSteps.map(([title, body], index) => (
              <li className="bg-white p-5" key={title}>
                <span className="text-sm font-extrabold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold text-[var(--brand-dark)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-7"><ArrowLink href="/services/mold-trial-sampling-support">View Mold Trial & Validation</ArrowLink></div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <SectionTitle eyebrow="Documentation" title="Multi-Cavity Tooling Documentation" body="Depending on project requirements, the tooling handover package can include the records needed to review trial status, cavity-specific results and ongoing maintenance." />
          <div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {["Approved mold design data", "Mold trial records", "Cavity identification", "Dimensional inspection records", "Steel / component information where required", "Spare-parts information", "Packing / handover records"].map((item) => (
                <li className="border-l-2 border-[var(--brand)] pl-4 font-semibold leading-7 text-[var(--brand-dark)]" key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-7"><ArrowLink href="/company/quality-documentation">View Quality & Documentation</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-white">
        <div className="container-page">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-red-200 sm:text-sm">Why Arktech for Multi-Cavity Tooling</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl">Engineering Focus from DFM Through Tooling Validation</h2>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["DFM Before Steel Cutting", "Review cavity layout, runner strategy, cooling, release and critical dimensions before mold design approval."],
              ["Cavity-Specific Trial Review", "Identify samples by cavity so observations and correction actions remain traceable."],
              ["Export Tooling Documentation", "Prepare agreed design, trial, inspection and handover records for the receiving production team."],
              ["Tooling + Injection Molding Support", "Connect mold engineering with trial and molded-part production support where the project requires it."]
            ].map(([title, body]) => (
              <article className="border-t border-white/25 pt-5" key={title}>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <SectionTitle title="Industries Using Multi-Cavity Injection Tooling" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(([title, body, href]) => href ? (
              <Link className="focus-ring group border-b border-[var(--line)] py-5 transition hover:border-[var(--brand)]" href={href} key={title}>
                <h3 className="text-lg font-bold text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
              </Link>
            ) : (
              <article className="border-b border-[var(--line)] py-5" key={title}>
                <h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle title="Related Injection Mold Types" />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {relatedMolds.map(([label, href]) => (
                <Link className="focus-ring group flex items-center justify-between rounded-sm border border-[var(--line)] bg-white px-4 py-4 font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href={href} key={href}>
                  {label}<span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle title="Related Capabilities" />
            <div className="mt-7 flex flex-wrap gap-3">
              {relatedCapabilities.map(([label, href]) => (
                <Link className="focus-ring rounded-sm border border-[var(--line)] bg-white px-4 py-3 text-sm font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href={href} key={href}>{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page max-w-5xl">
          <SectionTitle title="Multi-Cavity Injection Mold FAQ" />
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((faq) => (
              <details className="group py-5" key={faq.question}>
                <summary className="focus-ring cursor-pointer rounded-sm pr-8 text-lg font-bold text-[var(--brand-dark)] marker:text-[var(--brand)]">{faq.question}</summary>
                <p className="mt-4 max-w-4xl leading-7 text-[var(--muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-red-200 sm:text-sm">Start a Tooling Review</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-5xl">Planning a Multi-Cavity Mold?</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg">Send your CAD files, drawings, resin information, expected production volume and receiving-machine requirements for engineering review.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/request-a-quote">Upload CAD for DFM Review</PrimaryButton>
            <SecondaryButton href="/request-a-quote" inverse>Request Tooling Quote</SecondaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
