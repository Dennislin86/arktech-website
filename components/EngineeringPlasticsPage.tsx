import Image from "next/image";
import Link from "next/link";
import type { InjectionMoldingProcessPageData } from "@/lib/injection-molding-process-pages";
import { site } from "@/lib/site";

const materials = [
  { name: "PC", fullName: "Polycarbonate", use: "Tough functional and transparent components" },
  { name: "PA6 / PA66", fullName: "Polyamide / Nylon", use: "Mechanical and structural parts" },
  { name: "POM", fullName: "Polyoxymethylene / Acetal", use: "Gears and moving components" },
  { name: "PBT", fullName: "Polybutylene Terephthalate", use: "Electrical and technical housings" },
  { name: "PC/ABS", fullName: "Engineering Polymer Blend", use: "Product housings and functional components" },
  { name: "PA-GF / PBT-GF", fullName: "Glass-Fiber Reinforced Polymers", use: "Structural and reinforced components" },
  { name: "PPS", fullName: "Polyphenylene Sulfide", use: "Heat-resistant technical applications" },
  { name: "PPSU / PEEK", fullName: "High-Performance Polymers", use: "Specialized engineering applications", qualified: true }
];

const engineeringTopics = [
  { title: "Material & Shrinkage Review", body: "Material grade, shrinkage behavior, moisture sensitivity and dimensional requirements are reviewed during project planning." },
  { title: "Mold & Gate Design", body: "Part geometry, gate selection, cooling, venting and ejection are evaluated according to tooling and production requirements." },
  { title: "Process Development", body: "Material preparation, trial conditions and molding parameter adjustments are evaluated during sampling and process development." },
  { title: "Dimensional Validation", body: "Critical dimensions, part fit and sample approval requirements are reviewed using project-specific inspection documentation." }
];

const applications = [
  {
    title: "Functional Housings",
    body: "Housing geometry is reviewed around wall transitions, fastening features, visible surfaces and mating interfaces.",
    image: "/images/tooling-gallery/optimized/arktech-plastic-part-img-6424-2c3e00f77eff.webp",
    alt: "Translucent molded housing and matching lid"
  },
  {
    title: "Gears & Mechanical Components",
    body: "Moving and rotating component requirements are reviewed around geometry, fit, wear surfaces and assembly needs.",
    image: "/images/tooling-gallery/optimized/arktech-plastic-part-img-6423-61ef99147f17.webp",
    alt: "Decorative molded cover and black vented circular component"
  },
  {
    title: "Reinforced Structural Parts",
    body: "Structural geometry and load paths are reviewed with the specified resin and reinforcement grade before tooling decisions.",
    image: "/images/tooling-gallery/optimized/arktech-plastic-part-img-6417-d62fc99aaa19.webp",
    alt: "Two gray molded panels with open lattice structures"
  },
  {
    title: "Electrical & Technical Components",
    body: "Technical housings are planned around interfaces, fastening features, sealing edges and project-specific material requirements.",
    image: "/images/tooling-gallery/optimized/arktech-plastic-part-img-6475-934bf4875750.webp",
    alt: "Gray and black molded rectangular housing components with sealing edges"
  }
];

const manufacturingSteps = [
  {
    title: "Precision Injection Tooling",
    body: "Precision injection tooling is developed around part geometry, material requirements and production objectives.",
    image: "/images/tooling-gallery/optimized/arktech-mould-precision-injection-mold-7de25512c101.webp",
    alt: "Precision injection mold open on a workshop bench",
    href: "/injection-mold-manufacturing",
    linkLabel: "Explore mold manufacturing"
  },
  {
    title: "Injection Molding Production",
    body: "Plastic injection molding from 25–550T supports project-specific sampling and repeat production requirements.",
    image: "/images/capabilities/plastic-injection-molding-production-video-frame.webp",
    alt: "Clear molded parts beside an automated injection molding cell",
    href: "/plastic-injection-molding",
    linkLabel: "Explore plastic injection molding"
  },
  {
    title: "Mold Trial & Dimensional Inspection",
    body: "Mold trials, sample inspection and engineering feedback help verify molded parts against agreed project requirements.",
    image: "/images/quality/mold-insert-cmm-inspection-poster.webp",
    alt: "CMM probe measuring a metal mold insert",
    href: "/mold-trial-validation",
    linkLabel: "View mold trial and validation",
    contain: true
  }
];

const projects = [
  {
    title: "Automotive Sensor Housing Tooling",
    body: "A multi-cavity tooling project focused on repeated housing geometry, cavity balance and dimensional validation.",
    image: "/images/case-studies/automotive-multi-cavity-mold.webp",
    alt: "Automotive sensor housing multi-cavity mold and molded components",
    href: "/case-studies/automotive-sensor-housing-tooling"
  },
  {
    title: "Medical Device Cartridge Molding",
    body: "A tooling and molded-component project reviewed around assembly interfaces and critical drawing characteristics.",
    image: "/images/case-studies/medical-device-cartridge-molding.webp",
    alt: "Medical diagnostic device with injection molds and molded housing components",
    href: "/case-studies/medical-device-cartridge-molding"
  },
  {
    title: "Smart Home Plastic Housing",
    body: "A connected-device enclosure project covering visible surfaces, assembly features and molded housing validation.",
    image: "/images/case-studies/ihgs-housing.webp",
    alt: "Smart home plastic housing components and assembly diagram",
    href: "/case-studies/smart-home-plastic-housing"
  }
];

function SectionHeading({ eyebrow, title, body, id }: { eyebrow: string; title: string; body: string; id?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl" id={id}>{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p>
    </div>
  );
}

export function EngineeringPlasticsPage({ page }: { page: InjectionMoldingProcessPageData }) {
  const pageUrl = `${site.url}/plastic-injection-molding/engineering-plastics`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      description: page.metaDescription,
      url: pageUrl,
      provider: { "@id": `${site.url}/#organization` }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Plastic Injection Molding", item: `${site.url}/plastic-injection-molding` },
        { "@type": "ListItem", position: 3, name: page.h1, item: pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))
    }
  ];

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replaceAll("<", "\\u003c") }} type="application/ld+json" />

      <section className="border-b border-[var(--line)] bg-[var(--surface-soft)]">
        <div className="container-page py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/plastic-injection-molding">Plastic Injection Molding</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-[var(--brand-dark)]">Engineering Plastics</li>
            </ol>
          </nav>
        </div>
        <div className="container-page grid gap-9 pb-12 pt-4 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:items-center lg:gap-12 lg:pb-16 lg:pt-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">ENGINEERING PLASTICS INJECTION MOLDING</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-[var(--brand-dark)] sm:text-5xl lg:text-[3rem] xl:text-[3.25rem]">Engineering Plastics Injection Molding</h1>
            <p className="mt-5 text-xl font-semibold leading-8 text-[var(--brand-dark)]">Precision molding for functional plastic components using PC, PA, POM, PBT, PPS and other engineering thermoplastics.</p>
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">From material and DFM review to injection mold manufacturing, mold trials, dimensional inspection and repeat production, Arktech supports OEM teams with integrated tooling and molding services.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Engineering plastics molding capabilities">
              {["Plastic Injection Molding: 25–550T", "Engineering Thermoplastics", "DFM & Precision Tooling", "Mold Trial & Validation"].map((item) => (
                <li className="flex items-start gap-3 border-l-2 border-[var(--brand)] pl-3 font-semibold leading-6 text-[var(--brand-dark)]" key={item}>
                  <span aria-hidden="true" className="mt-1 text-[var(--brand)]">✓</span><span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Email CAD for Engineering Review</Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 text-center font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="#engineering-plastic-materials">Explore Materials</Link>
            </div>
          </div>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
            <Image alt={page.heroAlt} className="object-cover object-center" fill priority sizes="(min-width: 1024px) 55vw, 100vw" src={page.heroImage} />
          </figure>
        </div>
      </section>

      <section className="scroll-mt-28 bg-white py-14 sm:py-16" id="engineering-plastic-materials">
        <div className="container-page">
          <SectionHeading eyebrow="Material Capabilities" title="Engineering Plastics We Support" body="Engineering thermoplastics are selected according to mechanical, thermal, dimensional and application requirements. Arktech reviews material grades, part geometry and tooling conditions before confirming the molding approach." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {materials.map((material) => (
              <article className="border border-[var(--line)] border-t-4 border-t-[var(--brand)] bg-[var(--surface-soft)] p-5" key={material.name}>
                <p className="text-2xl font-bold text-[var(--brand)]">{material.name}</p>
                <h3 className="mt-2 text-lg font-bold leading-6 text-[var(--brand-dark)]">{material.fullName}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{material.use}.</p>
                {material.qualified ? <p className="mt-3 text-xs font-semibold leading-5 text-[var(--muted)]">Available for material and project feasibility review.</p> : null}
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-4 border-l-2 border-[var(--brand)] pl-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-4xl text-sm leading-6 text-[var(--muted)]">The exact supplier, grade, technical data sheet, compliance needs and availability must be confirmed for each project before tooling or production approval.</p>
            <Link className="focus-ring shrink-0 rounded-sm font-bold text-[var(--brand)] hover:underline" href="/resources/material-selection-guide">View Material Selection Guide <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,44fr)_minmax(0,56fr)] lg:items-center lg:gap-12">
          <div>
            <SectionHeading eyebrow="Engineering & Process Control" title="Engineering Support for Reliable Molding" body="Engineering plastics require coordinated material selection, tooling design, process development and part validation. Our engineering review focuses on project-specific requirements rather than generic processing assumptions." />
            <figure className="relative mt-7 aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
              <Image alt="Engineers reviewing injection molding DFM and mold analysis on CAD monitors" className="object-cover object-center" fill sizes="(min-width: 1024px) 40vw, 100vw" src="/images/Engineering/injection-mold-engineering-dfm-analysis.webp" />
            </figure>
          </div>
          <div className="grid overflow-hidden border border-[var(--line)] bg-white sm:grid-cols-2">
            {engineeringTopics.map((topic, index) => (
              <article className={`${index >= 2 ? "border-t" : ""} ${index % 2 === 1 ? "sm:border-l" : ""} border-[var(--line)] p-5 sm:p-6`} key={topic.title}>
                <h3 className="text-lg font-bold text-[var(--brand-dark)]">{topic.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{topic.body}</p>
              </article>
            ))}
            <div className="border-t border-[var(--line)] p-5 sm:col-span-2 sm:p-6">
              <Link className="focus-ring inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:underline" href="/injection-molding-engineering">Explore DFM & Mold Engineering <span aria-hidden="true" className="ml-2">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Molded Part Applications" title="Engineering Plastic Injection Molded Parts" body="Engineering plastics are used for functional components requiring mechanical performance, dimensional stability or application-specific material properties." />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {applications.map((application) => (
              <article className="overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={application.title}>
                <div className="relative aspect-[5/4] overflow-hidden bg-[var(--surface-soft)]">
                  <Image alt={application.alt} className="object-contain p-3" fill sizes="(min-width: 768px) 50vw, 100vw" src={application.image} />
                </div>
                <div className="border-t border-[var(--line)] p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">{application.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{application.body}</p>
                </div>
              </article>
            ))}
          </div>
          <Link className="focus-ring mt-7 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:underline" href="/portfolio">Explore Injection Mold & Plastic Part Projects <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Integrated Manufacturing" title="From Precision Tooling to Validated Plastic Parts" body="Tooling, molding and inspection requirements are coordinated around the approved part data, exact material grade and agreed project scope." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {manufacturingSteps.map((step) => (
              <article className="flex overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={step.title}>
                <div className="flex w-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <Image alt={step.alt} className={step.contain ? "object-contain p-2" : "object-cover object-center"} fill sizes="(min-width: 768px) 33vw, 100vw" src={step.image} />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-[var(--line)] p-5">
                    <h3 className="text-xl font-bold text-[var(--brand-dark)]">{step.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
                    <Link className="focus-ring mt-5 inline-flex min-h-11 items-center font-bold text-[var(--brand)] hover:underline" href={step.href}>{step.linkLabel} <span aria-hidden="true" className="ml-2">→</span></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-6 text-[var(--muted)]">Quality records and inspection scope are agreed around the customer drawing and project requirements. <Link className="focus-ring font-bold text-[var(--brand)] hover:underline" href="/quality-documentation">Review quality documentation and inspection records</Link>.</p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Real Project Experience" title="Explore Related Injection Molding Projects" body="These published projects show real tooling and molded-part programs. Material details are stated only where the project record confirms them." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Link className="focus-ring group flex flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none" href={project.href} key={project.title}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-soft)]">
                  <Image alt={project.alt} className="object-contain object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none" fill sizes="(min-width: 768px) 33vw, 100vw" src={project.image} />
                </div>
                <div className="flex flex-1 flex-col border-t border-[var(--line)] p-5">
                  <h3 className="text-xl font-bold leading-tight text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{project.body}</p>
                  <span className="mt-5 font-bold text-[var(--brand)]">View project <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
          <Link className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/portfolio">Explore Injection Molds & Molded Parts</Link>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16" aria-labelledby="engineering-plastics-faq-heading">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="Engineering Plastics Injection Molding FAQ" body="Project decisions depend on the part design, exact supplier grade and agreed functional and inspection requirements." id="engineering-plastics-faq-heading" />
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {page.faqs.map((faq) => (
              <details className="group" key={faq.question}>
                <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 rounded-sm py-4 font-bold text-[var(--brand-dark)] marker:hidden">
                  <span>{faq.question}</span><span aria-hidden="true" className="text-xl text-[var(--brand)] transition group-open:rotate-45 motion-reduce:transition-none">+</span>
                </summary>
                <p className="max-w-4xl pb-5 pr-8 text-sm leading-7 text-[var(--muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">START YOUR PROJECT</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Request an Engineering Plastics Injection Molding Quote</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--cta-body)] sm:text-lg">Share your CAD files, material requirements, estimated production volume and critical specifications. Our engineering team will review the available project information and advise on tooling and molding feasibility.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Email CAD & Request a Quote</Link>
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 text-center font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/contact">Contact Our Engineering Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
