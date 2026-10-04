import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/FullBleedHero";
import { caseStudies } from "@/lib/case-studies";
import { allEngineeringResources, type EngineeringResource } from "@/lib/engineering-resources";
import { site } from "@/lib/site";

const pageTitle = "Injection Molding & Mold Design Resources | Arktech";
const pageDescription = "Technical resources for injection molding, DFM, mold design, tooling, materials, mold trials and production, with practical guides and real project case studies.";
const pageUrl = `${site.url}/resources`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, type: "website" }
};

const featuredPaths = [
  "/resources/dfm-guide",
  "/resources/mold-design-guidelines",
  "/resources/injection-molding-guide"
];

const featuredResources = featuredPaths
  .map((path) => allEngineeringResources.find((resource) => resource.path === path))
  .filter((resource): resource is EngineeringResource => Boolean(resource));

const topicGroups = [
  {
    id: "engineering-dfm",
    title: "Engineering & DFM",
    description: "Design plastic parts around molding, release, assembly and tooling requirements before mold design approval.",
    resources: allEngineeringResources.filter((resource) => resource.topic === "DFM & Plastic Part Design")
  },
  {
    id: "mold-design-tooling",
    title: "Injection Mold Design & Tooling",
    description: "Review mold architecture, runner systems, cavitation and tooling actions for reliable production molds.",
    resources: allEngineeringResources.filter((resource) => resource.topic === "Injection Mold Design")
  },
  {
    id: "plastic-injection-molding",
    title: "Plastic Injection Molding",
    description: "Plan molding, diagnose common defects and validate parts for repeatable prototype and production programs.",
    resources: allEngineeringResources.filter((resource) => resource.topic === "Injection Molding" || resource.topic === "Defects & Troubleshooting")
  },
  {
    id: "materials-surface-finish",
    title: "Materials & Surface Finish",
    description: "Compare thermoplastic families and processing considerations around function, appearance and dimensional stability.",
    resources: allEngineeringResources.filter((resource) => resource.topic === "Materials")
  }
];

const technicalResources = topicGroups.map((group) => ({
  ...group,
  resources: group.resources.filter((resource) => !featuredPaths.includes(resource.path))
}));

const selectedCaseSlugs = [
  "automotive-sensor-housing-tooling",
  "smart-home-plastic-housing",
  "two-shot-2k-injection-mold-tooling"
];

const selectedCaseStudies = selectedCaseSlugs
  .map((slug) => caseStudies.find((project) => project.slug === slug))
  .filter((project): project is (typeof caseStudies)[number] => Boolean(project));

const popularQuestions = [
  ["How should wall thickness be designed for injection molding?", "/resources/injection-molding/wall-thickness-guidelines"],
  ["How much draft does an injection molded part need?", "/resources/injection-molding/draft-angle-guidelines"],
  ["When should a hot runner be used instead of a cold runner?", "/resources/injection-molds/hot-runner-vs-cold-runner"],
  ["Should a project use a multi-cavity or family mold?", "/resources/injection-molds/multi-cavity-vs-family-mold"],
  ["What causes sink marks in molded plastic parts?", "/resources/injection-molding/sink-marks-causes-solutions"],
  ["How are mold sliders different from lifters?", "/resources/injection-molds/slider-vs-lifter"]
];

function ResourceCard({ resource }: { resource: EngineeringResource }) {
  return (
    <Link className="focus-ring group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)]" href={resource.path}>
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
        <Image alt={resource.imageAlt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02]" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={resource.image} />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{resource.topic}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-[var(--brand-dark)] sm:text-2xl">{resource.shortTitle}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--muted)] sm:text-[15px]">{resource.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand)]">Read guide <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span></span>
      </div>
    </Link>
  );
}

export default function ResourcesPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: { "@id": `${site.url}/#website` },
      about: ["Injection molding", "Design for manufacturability", "Injection mold design", "Plastic materials", "Mold trials"]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: "Resources", item: pageUrl }
      ]
    }
  ];

  return (
    <>
      {structuredData.map((schema, index) => <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }} key={index} type="application/ld+json" />)}

      <FullBleedHero
        backgroundImages={[
          { src: "/images/Engineering/injection-mold-engineering-dfm-analysis.webp", alt: "Injection mold DFM engineering review on CAD workstations", position: "center" },
          { src: "/images/mold-types/complex-injection-molds.png", alt: "Completed complex injection mold with multiple tooling actions", position: "center" },
          { src: "/images/quality/dimensional-inspection-report-anonymized.webp", alt: "Anonymized dimensional inspection report for molded trial samples", position: "center" }
        ]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        description="Practical engineering guides, design references and real project insights for injection molds, plastic parts and production."
        eyebrow="Technical Resources"
        height="standard"
        overlay="strong"
        primaryCta={{ label: "Explore Technical Guides", href: "#featured-resources" }}
        secondaryCta={{ label: "View Case Studies", href: "#case-studies" }}
        title="Injection Molding & Tooling Resources"
      />

      <section className="scroll-mt-24 bg-[var(--surface-soft)] py-16 sm:py-20" id="featured-resources">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Featured Technical Resources</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl lg:text-5xl">Start with the Core Engineering Guides</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">Use these practical guides to align plastic part design, injection mold engineering and molding production decisions before project release.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{featuredResources.map((resource) => <ResourceCard key={resource.path} resource={resource} />)}</div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white py-12 sm:py-14">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Browse by Topic</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Find the Right Technical Reference</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">Browse the current resource library by the engineering decision or project stage your team is reviewing.</p>
          </div>
          <nav aria-label="Technical resource topics" className="mt-7 flex flex-wrap gap-3">
            {topicGroups.map((topic) => <Link className="focus-ring rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2.5 text-sm font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:bg-white hover:text-[var(--brand)]" href={`#${topic.id}`} key={topic.id}>{topic.title}</Link>)}
            <Link className="focus-ring rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2.5 text-sm font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:bg-white hover:text-[var(--brand)]" href="#case-studies">Case Studies</Link>
          </nav>
        </div>
      </section>

      <section className="scroll-mt-24 bg-white py-16 sm:py-20" id="technical-resources">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Technical Resources</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl lg:text-5xl">Selected Guides for Tooling and Molding Decisions</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">Move from broad engineering guidance into focused references for moldability, tooling architecture, processing risks and material selection.</p>
          <div className="mt-12 space-y-14">
            {technicalResources.map((group) => (
              <section className="scroll-mt-24" id={group.id} key={group.id}>
                <div className="grid gap-4 border-b border-[var(--line)] pb-5 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
                  <h3 className="text-2xl font-bold text-[var(--brand-dark)] sm:text-3xl">{group.title}</h3>
                  <p className="max-w-3xl text-sm leading-6 text-[var(--muted)] sm:text-base">{group.description}</p>
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{group.resources.map((resource) => <ResourceCard key={resource.path} resource={resource} />)}</div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--surface-soft)] py-16 sm:py-20" id="case-studies">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Real Tooling &amp; Molding Case Studies</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl lg:text-5xl">Engineering Decisions Applied to Real Projects</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">See how DFM, tooling strategy, mold trials and validation were connected across documented Arktech project examples.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {selectedCaseStudies.map((project) => (
              <Link className="focus-ring group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)]" href={`/case-studies/${project.slug}`} key={project.slug}>
                <div className="relative aspect-[4/3] overflow-hidden bg-white"><Image alt={project.imageAlt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02]" fill sizes="(min-width: 768px) 33vw, 100vw" src={project.image} /></div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{project.industry}</p>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-[var(--brand-dark)] sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--muted)]">{project.projectOverview}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--brand)]">View case study <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span></span>
                </div>
              </Link>
            ))}
          </div>
          <Link className="focus-ring mt-7 inline-flex items-center gap-2 font-bold text-[var(--brand)]" href="/case-studies">View All Case Studies <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Popular Engineering Questions</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Go Directly to a Practical Answer</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">These links lead to focused technical articles, not a duplicate FAQ block.</p>
          </div>
          <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {popularQuestions.map(([label, href]) => <li key={href}><Link className="focus-ring group flex items-center justify-between gap-5 py-4 font-semibold leading-6 text-[var(--brand-dark)] transition hover:text-[var(--brand)] sm:text-lg" href={href}><span>{label}</span><span aria-hidden="true" className="shrink-0 text-[var(--brand)] transition group-hover:translate-x-1">→</span></Link></li>)}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-8 rounded-md border border-[var(--line)] bg-[var(--brand-dark)] p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-200">Project-Specific Engineering Support</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">Need Advice for a Specific Injection Molding Project?</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-200">Share your CAD files, drawings and project requirements for a practical DFM review, tooling recommendation and production discussion.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 py-3 font-bold text-white transition hover:bg-red-700" href="/request-a-quote">Upload CAD for DFM Review</Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-slate-400 px-6 py-3 font-bold text-white transition hover:border-white hover:bg-white/10" href="/manufacturing-capabilities">Explore Manufacturing Capabilities</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
