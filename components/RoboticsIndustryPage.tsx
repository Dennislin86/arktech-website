import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const applications = [
  {
    title: "Robot Controller Housings",
    body: "Molded enclosures for controller electronics, connectors, indicators and assembly hardware."
  },
  {
    title: "Sensor & Camera Housings",
    body: "Protective molded enclosures and mounting interfaces for cameras, sensors and vision systems."
  },
  {
    title: "AMR / AGV Covers",
    body: "Exterior covers, access panels and protective housings for mobile robot and guided-vehicle platforms."
  },
  {
    title: "End-Effector Covers",
    body: "Lightweight protective covers and interfaces for grippers, tooling heads and robotic end effectors."
  },
  {
    title: "Joint & Motor Covers",
    body: "Molded covers designed around moving assemblies, fasteners, service access and cable exits."
  },
  {
    title: "Electronics Enclosures",
    body: "Functional housings for control boards, power modules, displays and connected robotics hardware."
  },
  {
    title: "Cable Routing Components",
    body: "Guides, clips, channels and protective parts that organize wiring through moving assemblies."
  },
  {
    title: "Functional Molded Interfaces",
    body: "Mounting features, brackets and precision molded parts that connect plastic, metal and electronic assemblies."
  }
];

const coreCapabilities = [
  {
    title: "Injection Mold Manufacturing",
    body: "Export injection molds developed around part geometry, material, expected production and receiving-plant requirements.",
    href: "/services/injection-mold-manufacturing"
  },
  {
    title: "Plastic Injection Molding",
    body: "Molding support for functional housings, covers and assembly-ready robotics components.",
    href: "/services/plastic-injection-molding"
  },
  {
    title: "DFM Engineering",
    body: "Early review of draft, wall thickness, ribs, bosses, undercuts, interfaces and tooling risks.",
    href: "/services/dfm-engineering"
  },
  {
    title: "Insert Molding",
    body: "Tooling support for molded parts that integrate approved threaded or functional inserts.",
    href: "/injection-molds#insert-overmolding-tools"
  },
  {
    title: "Overmolding",
    body: "Substrate, shutoff and material-interface review for multi-material grips, seals and protective features.",
    href: "/injection-molds/overmolding-tools"
  },
  {
    title: "Mold Trial & Validation",
    body: "Trial coordination, sample review and documented improvement actions before tooling approval.",
    href: "/services/mold-trial-sampling-support"
  }
];

const engineeringConsiderations = [
  {
    title: "Dimensional Stability",
    body: "Housing geometry, resin behavior and molding conditions are reviewed where stable fit and repeatable interfaces matter."
  },
  {
    title: "Sensor & Camera Alignment",
    body: "Mounting interfaces may need controlled geometry so sensing or optical alignment remains repeatable after assembly."
  },
  {
    title: "Tolerance Stack-Up",
    body: "Molded, machined and purchased components are considered together when multiple interfaces determine final fit."
  },
  {
    title: "Threaded Inserts & Fasteners",
    body: "Boss design, insert location, local wall thickness and assembly load are reviewed before tooling release."
  },
  {
    title: "Ribs, Bosses & Snap-Fits",
    body: "Structural features are balanced against sink, warpage, ejection and assembly requirements."
  },
  {
    title: "Cable Routing",
    body: "Channels, exits, strain-relief areas and service access are reviewed alongside moldability and part release."
  },
  {
    title: "Assembly Interfaces",
    body: "Locating features, datum strategy and mating surfaces are checked for practical assembly and inspection."
  },
  {
    title: "Repeated-Motion / Wear Considerations",
    body: "Material and geometry are reviewed where covers, guides or interfaces experience repeated contact or service cycles."
  }
];

const workflow = [
  {
    title: "CAD & DFM Review",
    body: "Review robotics part geometry, material targets, critical interfaces, assembly needs and tooling risks."
  },
  {
    title: "Prototype / Engineering Samples",
    body: "Use prototypes or machined samples to review fit, interfaces and functional geometry when required."
  },
  {
    title: "Export Tooling",
    body: "Develop the mold structure, steel strategy and customer approval records for the intended production environment."
  },
  {
    title: "Mold Trial & Validation",
    body: "Review molded samples, process conditions, assembly interfaces and agreed improvement actions."
  },
  {
    title: "Injection Production",
    body: "Move approved tooling and process settings into repeat production for robotics plastic components."
  },
  {
    title: "Assembly & Delivery",
    body: "Coordinate agreed inserts, secondary operations, assembly support, inspection and shipment preparation."
  }
];

const materials = [
  { title: "PC/ABS", body: "A practical family for housings that need a balance of impact performance, appearance and dimensional control." },
  { title: "ABS", body: "Commonly considered for rigid housings and covers with defined cosmetic and assembly requirements." },
  { title: "PC", body: "Considered where impact resistance, stiffness or transparent grades are relevant to the application." },
  { title: "PA / PA-GF", body: "Suitable for structural components requiring increased stiffness, strength and dimensional stability." },
  { title: "PBT", body: "Often evaluated for electrical or dimensional applications according to the selected grade and environment." },
  { title: "POM", body: "Used for selected functional parts where low friction, wear behavior and dimensional stability are important." },
  { title: "PP", body: "A lightweight option for selected covers and components when its mechanical and environmental properties fit the use case." },
  { title: "TPU", body: "Considered for flexible protection, grip or overmolded features after substrate compatibility is reviewed." }
];

const qualityItems = [
  "Critical Dimension Verification",
  "Sensor / Mounting Interface Inspection",
  "Insert Position Verification",
  "Assembly & Fit Check",
  "Cosmetic Surface Inspection",
  "Sample Approval"
];

const examples = [
  {
    title: "Robot Controller Housing Tooling",
    application: "Protective housing for controller electronics and connection interfaces.",
    focus: "Wall consistency, mounting bosses, connector openings, parting strategy and assembly fit.",
    capability: "DFM engineering, export tooling, mold trial and plastic injection molding."
  },
  {
    title: "Sensor Housing Mold & Injection Production",
    application: "Molded enclosure and mounting interface for a robotics sensing module.",
    focus: "Sensor alignment, datum definition, insert location, dimensional review and cosmetic surfaces.",
    capability: "DFM review, insert-molding support, sample validation and production molding."
  },
  {
    title: "AMR / AGV Plastic Housing Program",
    application: "Covers and access panels for an autonomous mobile platform.",
    focus: "Large surface control, fastening strategy, cable access, mating interfaces and serviceability.",
    capability: "Tooling development, injection molding, inspection and assembly support."
  }
];

const resources = [
  { label: "DFM Guide", href: "/resources/dfm-guide", body: "Review the design factors that affect molded-part quality, tooling risk and project decisions." },
  { label: "Material Selection Guide", href: "/resources/material-selection-guide", body: "Compare thermoplastic families against mechanical, dimensional and application needs." },
  { label: "Mold Design Guidelines", href: "/resources/mold-design-guidelines", body: "Understand mold architecture, gating, cooling, ejection and approval considerations." },
  { label: "Case Studies", href: "/case-studies", body: "Explore published Arktech tooling and manufacturing project examples." }
];

const relatedCapabilities = [
  { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
  { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
  { label: "DFM Engineering", href: "/services/dfm-engineering" },
  { label: "Mold Trial & Validation", href: "/services/mold-trial-sampling-support" },
  { label: "Quality & Documentation", href: "/company/quality-documentation" }
];

const faqs = [
  {
    question: "Can Arktech manufacture injection molds for robotics housings?",
    answer: "Yes. Arktech supports robotics housing projects with DFM review, export injection mold manufacturing, mold trials, sample validation and plastic injection molding."
  },
  {
    question: "What plastics are commonly used for robotics components?",
    answer: "Projects may evaluate PC/ABS, ABS, PC, PA or PA-GF, PBT, POM, PP and TPU. Final material selection depends on the actual mechanical, dimensional, thermal, cosmetic and assembly requirements."
  },
  {
    question: "Do you support insert molding for threaded inserts?",
    answer: "Yes, when the insert specification, retention method, boss geometry, loading method and surrounding plastic design have been reviewed and confirmed for the project."
  },
  {
    question: "Can Arktech manufacture AMR / AGV plastic housings?",
    answer: "Arktech can review AMR and AGV covers, access panels, controller housings and related molded components according to part size, material, appearance and production requirements."
  },
  {
    question: "Can you support low-volume robotics production?",
    answer: "Low-volume requirements can be reviewed alongside prototype, tooling and production options. The practical route depends on geometry, resin, tooling needs and expected demand."
  },
  {
    question: "How do you control critical assembly dimensions?",
    answer: "The team identifies critical interfaces during DFM, aligns them with drawing requirements, reviews sample measurements and confirms fit or assembly checks according to the agreed inspection plan."
  },
  {
    question: "Can molded plastic parts interface with CNC metal components?",
    answer: "Yes. Plastic-to-metal interfaces can be reviewed for datums, fasteners, inserts, tolerance stack-up and assembly fit. Related metal manufacturing support is provided through Arktech Group."
  },
  {
    question: "Do you provide DFM review before tooling?",
    answer: "Yes. DFM review can cover draft, wall thickness, ribs, bosses, parting, gating, ejection, material behavior and assembly interfaces before mold manufacturing."
  }
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="focus-ring inline-flex items-center gap-2 rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={href}>
      {children}<span aria-hidden="true">→</span>
    </Link>
  );
}

function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Robotics Injection Molding and Mold Manufacturing",
      description: "DFM engineering, export injection molds and plastic injection molding for robotics housings, sensor enclosures, AMR and AGV components and precision molded parts.",
      url: `${site.url}/industries/robotics`,
      provider: {
        "@type": "Organization",
        name: site.name,
        url: site.url
      },
      serviceType: ["Robotics injection molding", "Robotics injection mold manufacturing", "Robotics DFM engineering"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries` },
        { "@type": "ListItem", position: 3, name: "Robotics", item: `${site.url}/industries/robotics` }
      ]
    }
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }} />;
}

export function RoboticsIndustryPage() {
  return (
    <>
      <JsonLd />

      <section className="overflow-hidden bg-white">
        <div className="container-page py-10 sm:py-12 lg:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/industries">Industries</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-[var(--brand-dark)]">Robotics</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,47fr)_minmax(0,53fr)] lg:items-center lg:gap-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Robotics</p>
              <h1 className="internal-page-title mt-4">Injection Molds &amp; Plastic Components for Robotics Products</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Arktech supports robotics product teams with DFM engineering, export injection molds and plastic injection molding for robot housings, sensor enclosures, control components, AMR / AGV applications and precision molded parts.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm bg-[var(--brand)] px-6 py-3 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
                <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 py-3 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link>
              </div>
            </div>
            <figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
              <Image
                alt="Industrial robot handling molded robotics components in an automated production environment"
                className="object-cover object-center"
                fill
                priority
                sizes="(min-width: 1024px) 53vw, 100vw"
                src="/images/industries/robotics-automation.png"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Robotics Applications" title="Plastic Components for Robotics Applications" body="Robotics products combine protective housings, control interfaces and moving assemblies. The tooling approach depends on how each molded part fits, mounts, routes cables and supports the finished system." />
          <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(280px,38fr)_minmax(0,62fr)] lg:items-stretch">
            <figure className="relative min-h-72 overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm sm:min-h-96 lg:min-h-full">
              <Image alt="Robotics housings, sensor modules and precision components for automation applications" className="object-cover object-center" fill sizes="(min-width: 1024px) 38vw, 100vw" src="/images/industries/robotics-injection-mold-components.webp" />
            </figure>
            <div className="grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {applications.map((application, index) => (
                <article className="bg-white p-5 sm:p-6" key={application.title}>
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-bold text-[var(--brand-dark)]">{application.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{application.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Core Capabilities" title="Manufacturing Capabilities for Robotics Products" body="Arktech Mold leads the DFM, export tooling and plastic injection molding scope. Related metal and product-completion processes are available separately through Arktech Group." />
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreCapabilities.map((capability, index) => (
              <Link className="focus-ring group rounded-md border border-[var(--line)] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-md" href={capability.href} key={capability.title}>
                <span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-bold text-[var(--brand-dark)]">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{capability.body}</p>
                <span className="mt-5 inline-flex font-bold text-[var(--brand)]" aria-hidden="true">Explore <span className="ml-2 transition group-hover:translate-x-1">→</span></span>
              </Link>
            ))}
          </div>

          <aside className="mt-8 rounded-md border border-[#ccd7e3] bg-[#eef3f8] p-6 sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Extended Manufacturing by Arktech Group</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">Metal parts, prototypes and final product-completion support remain secondary to the core mold and molding scope on this page.</p>
              </div>
              <div>
                <ul className="grid gap-3 sm:grid-cols-2" aria-label="Extended manufacturing capabilities">
                  {["CNC Machining", "Sheet Metal Fabrication", "Rapid Prototyping", "Assembly"].map((item) => <li className="border-l-2 border-[var(--brand)] pl-3 font-semibold text-[var(--brand-dark)]" key={item}>{item}</li>)}
                </ul>
                <a className="focus-ring mt-5 inline-flex rounded-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="https://www.arktech-group.com">Extended Manufacturing by Arktech Group <span className="ml-2" aria-hidden="true">↗</span></a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="Engineering Considerations" title="Engineering Considerations for Robotics Components" body="Robotics DFM connects moldability with the alignment, fastening, cable-management and motion requirements of the finished assembly." />
            <figure className="relative mt-8 aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
              <Image alt="DFM engineering review for injection molded robotics component geometry" className="object-contain object-center" fill sizes="(min-width: 1024px) 42vw, 100vw" src="/images/process/dfm-engineering-feedback-old-website.png" />
            </figure>
            <div className="mt-6"><ArrowLink href="/services/dfm-engineering">View DFM Engineering</ArrowLink></div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {engineeringConsiderations.map((item, index) => (
              <article className="bg-white p-5 sm:p-6" key={item.title}>
                <span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold text-[var(--brand-dark)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Development to Production" title="From Robotics Prototype to Production" body="A connected engineering workflow carries robotics parts from early manufacturability review through tooling, validation, molding and delivery." />
          <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5 before:absolute before:left-0 before:right-0 before:top-5 before:hidden before:h-px before:bg-[var(--line)] lg:before:block">
            {workflow.map((step, index) => (
              <li className="relative" key={step.title}>
                <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full border-4 border-white bg-[var(--brand)] text-xs font-bold text-white shadow-sm">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-bold leading-6 text-[var(--brand-dark)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Materials" title="Materials for Robotics Plastic Components" body="Material selection depends on stiffness, impact resistance, wear, heat, appearance, dimensional stability and assembly requirements. Specific grades are reviewed against the actual service environment." />
          <div className="mt-9 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((material) => (
              <article className="border-t-2 border-[var(--brand)] py-5" key={material.title}>
                <h3 className="text-lg font-bold text-[var(--brand-dark)]">{material.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{material.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <ArrowLink href="/resources/material-selection-guide">View Material Selection Guide</ArrowLink>
            <p className="text-sm text-[var(--muted)]">Need machined aluminum or metal components? <a className="focus-ring ml-1 rounded-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="https://www.arktech-group.com">Extended Manufacturing by Arktech Group ↗</a></p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] lg:items-center lg:gap-14">
          <div>
            <SectionHeading eyebrow="Quality Control" title="Quality Control for Robotics Components" body="Robotics components often depend on repeatable interfaces between molded housings, sensors, fasteners and other assemblies. Inspection focuses on critical dimensions, fit, alignment and visual requirements based on project needs." />
            <ul className="mt-8 grid gap-x-7 sm:grid-cols-2">
              {qualityItems.map((item, index) => (
                <li className="flex items-center gap-3 border-b border-[var(--line)] py-4 font-semibold text-[var(--brand-dark)]" key={item}>
                  <span className="text-xs font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>{item}
                </li>
              ))}
            </ul>
            <div className="mt-6"><ArrowLink href="/company/quality-documentation">View Quality &amp; Documentation</ArrowLink></div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
            <Image alt="Dimensional inspection of molded robotics components for sample validation" className="object-cover object-center" fill sizes="(min-width: 1024px) 48vw, 100vw" src="/images/process/sample-validation-inspection-cmm.png" />
          </figure>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Application Examples" title="Robotics Tooling & Manufacturing Examples" body="These representative application scopes show how robotics requirements can connect with Arktech capabilities. They are not presented as customer case studies or claimed project results." />
          <div className="mt-9 grid overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)]">
            <figure className="relative min-h-72 bg-[var(--surface-soft)] sm:min-h-96 lg:min-h-full">
              <Image alt="Robotics housings, sensors and precision components representing tooling and molding applications" className="object-cover object-center" fill sizes="(min-width: 1024px) 38vw, 100vw" src="/images/industries/robotics-injection-mold-components.webp" />
            </figure>
            <div className="divide-y divide-[var(--line)]">
              {examples.map((example, index) => (
                <article className="p-6 sm:p-7" key={example.title}>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Example Application {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)]">{example.title}</h3>
                  <dl className="mt-4 grid gap-3 text-sm leading-6 sm:grid-cols-[110px_1fr]">
                    <dt className="font-bold text-[var(--brand-dark)]">Application</dt><dd className="text-[var(--muted)]">{example.application}</dd>
                    <dt className="font-bold text-[var(--brand-dark)]">Engineering focus</dt><dd className="text-[var(--muted)]">{example.focus}</dd>
                    <dt className="font-bold text-[var(--brand-dark)]">Arktech support</dt><dd className="text-[var(--muted)]">{example.capability}</dd>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Robotics Resources" title="Engineering Resources for Robotics Product Development" body="Use the existing engineering library to plan molded-part DFM, material selection, mold design and tooling approval before an RFQ is released." />
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => (
              <Link className="focus-ring group flex min-h-full flex-col rounded-md border border-[var(--line)] bg-white p-5 shadow-sm transition hover:border-[var(--brand)] hover:shadow-md" href={resource.href} key={resource.href}>
                <h3 className="text-lg font-bold text-[var(--brand-dark)]">{resource.label}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{resource.body}</p>
                <span className="mt-5 font-bold text-[var(--brand)]">Read resource <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
          <div className="mt-10 grid gap-6 border-t border-[var(--line)] pt-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Related Capabilities</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Continue from the robotics application into the relevant Arktech Mold engineering and production pages.</p>
            </div>
            <nav aria-label="Related robotics manufacturing capabilities" className="flex flex-wrap gap-x-7 gap-y-3">
              {relatedCapabilities.map((link) => <ArrowLink href={link.href} key={link.href}>{link.label}</ArrowLink>)}
              <ArrowLink href="/industries">View All Industries</ArrowLink>
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Frequently Asked Questions" title="Robotics FAQs" body="Practical answers for robotics engineering, sourcing and product-development teams evaluating molds and molded components." />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details className="group rounded-md border border-[var(--line)] bg-white p-5 shadow-sm" key={faq.question}>
                <summary className="cursor-pointer list-none pr-8 font-bold leading-6 text-[var(--brand-dark)] marker:hidden">{faq.question}<span className="float-right -mr-7 text-xl font-normal text-[var(--brand)] group-open:hidden" aria-hidden="true">+</span><span className="float-right -mr-7 hidden text-xl font-normal text-[var(--brand)] group-open:inline" aria-hidden="true">−</span></summary>
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,58fr)_minmax(320px,42fr)] lg:items-center lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Start Your Robotics Project</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Start Your Robotics Tooling or Molding Project</h2>
            <p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Send us your CAD files, drawings, material requirements, expected volumes and assembly requirements. Our engineering team will review DFM, tooling and production options for your robotics project.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:justify-self-end">
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
