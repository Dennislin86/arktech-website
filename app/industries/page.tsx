import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/FullBleedHero";
import { site } from "@/lib/site";

type Industry = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
  href: string;
  cta: string;
};

const industries: Industry[] = [
  {
    title: "Smart Home & IoT",
    description: "Tooling and molded plastic components for connected devices such as smart locks, controls, routers, sensors and IoT product housings.",
    tags: ["Appearance Control", "Precision Tooling", "Assembly Features"],
    image: "/images/industries/smart-device-housings.png",
    alt: "Smart home cameras hubs sensors and connected devices with molded plastic housings",
    href: "/industries/smart-home",
    cta: "Explore Smart Home & IoT"
  },
  {
    title: "Home Appliances",
    description: "Injection molds and plastic components for appliance housings, control panels, knobs and structural parts where appearance, fit and repeatable production matter.",
    tags: ["Housing Tooling", "Warpage Review", "Repeat Production"],
    image: "/images/industries/home-appliance.png",
    alt: "Home appliances with molded plastic housings controls and functional components in a kitchen",
    href: "/industries/home-appliance",
    cta: "Explore Home Appliances"
  },
  {
    title: "Consumer Electronics",
    description: "Injection molds and molded components for electronic housings, bezels, buttons and structural parts requiring appearance control, fit and production consistency.",
    tags: ["High-Gloss Surfaces", "2K / Overmolding", "Precision Tooling"],
    image: "/images/industries/consumer-electronics-enclosures.png",
    alt: "Consumer electronics with molded plastic housings controls and product enclosures",
    href: "/industries/consumer-electronics",
    cta: "Explore Consumer Electronics"
  },
  {
    title: "Pet Tech Products",
    description: "Tooling and molded plastic components for smart feeders, connected pet devices, monitoring products and automated pet-care applications.",
    tags: ["Product Housings", "Functional Interfaces", "Assembly Features"],
    image: "/images/industries/pet-lifestyle-product-parts.png",
    alt: "Dog and cat using a smart pet feeder water device and connected pet camera",
    href: "/industries/pet-tech",
    cta: "Explore Pet Tech Products"
  },
  {
    title: "Automotive Components",
    description: "Injection molds and plastic components for interior controls, buttons, vents, panels and functional automotive parts with dimensional and surface requirements.",
    tags: ["Texture & Appearance", "Dimensional Control", "Production Tooling"],
    image: "/images/industries/Automotive-Components.png",
    alt: "Automotive interior controls panels and functional molded plastic components",
    href: "/industries/automotive-components",
    cta: "Explore Automotive Components"
  },
  {
    title: "Industrial Automation",
    description: "Tooling and molded plastic components for controllers, sensors, automation equipment housings and functional industrial products.",
    tags: ["Functional Geometry", "Durable Housings", "Assembly Fit"],
    image: "/images/industries/robotics-injection-mold-components.webp",
    alt: "Industrial automation components including sensor housings controllers and precision parts",
    href: "/industries/industrial-automation",
    cta: "Explore Industrial Automation"
  },
  {
    title: "Medical Device Components",
    description: "Injection molds and molded plastic components for medical device housings, enclosures and functional parts, with attention to dimensional control, material requirements and validation.",
    tags: ["Dimensional Review", "Housing Tooling", "Sample Validation"],
    image: "/images/industries/medial-industry.webp",
    alt: "Medical equipment with molded plastic housings functional components and control interfaces",
    href: "/industries/medical-devices",
    cta: "Explore Medical Devices"
  }
];

const capabilityBar = [
  ["DFM & Co-Design", "/injection-molding-engineering"],
  ["Injection Molds", "/injection-molds"],
  ["Mold Trial & Validation", "/injection-molds/mold-trial-validation"],
  ["Plastic Injection Molding 25–550T", "/services/plastic-injection-molding"]
] as const;

const priorities = [
  ["01", "Appearance & Surface Quality", "Visible consumer, appliance and automotive components may require controlled parting lines, gates, texture, polish and cosmetic surfaces."],
  ["02", "Dimensional Control", "Assemblies, interfaces and functional parts require attention to critical dimensions, fit and repeatability during tooling and validation."],
  ["03", "Material & Environment", "Material selection and tooling decisions may depend on temperature, strength, appearance, chemical exposure and functional requirements."],
  ["04", "Tooling Complexity", "Undercuts, threads, inserts, side actions and multiple materials can require specialized tooling strategies."],
  ["05", "Production Volume", "Prototype, bridge, multi-cavity and production tooling decisions should reflect expected demand and manufacturing requirements."],
  ["06", "Mold Trial & Validation", "Trial samples, molding parameters and dimensional inspection support engineering decisions before production or export."]
] as const;

const applicationThemes = [
  { number: "01", title: "Appearance-Critical Parts", body: "High-gloss surfaces, texture, visible parting lines and gate restrictions can influence both product and mold design.", href: "/injection-molds/high-gloss-injection-molds", link: "Explore Appearance Tooling" },
  { number: "02", title: "Complex Functional Parts", body: "Undercuts, sliders, lifters, inserts, threads and assembly interfaces may require more complex mold concepts.", href: "/injection-molds/complex-injection-molds", link: "Explore Complex Tooling" },
  { number: "03", title: "Production Components", body: "Multi-cavity tooling, mold validation and injection production support repeatable manufacturing for higher-volume programs.", href: "/injection-molds/multi-cavity-molds", link: "Explore Multi-Cavity Molds" }
];

const projects = [
  { title: "Smart Home Housing Project", process: "DFM engineering · Injection mold manufacturing · Molded-part validation", priorities: "Cosmetic surfaces · Snap-fit and assembly interfaces", image: "/images/case-studies/ihgs-housing.webp", alt: "Smart home housing components and product assembly developed through injection molding engineering", href: "/case-studies/smart-home-plastic-housing", cta: "View Smart Home Project" },
  { title: "Automotive Sensor Housing Tooling", process: "Export tooling · Mold trial · Dimensional inspection", priorities: "Dimensional stability · Repeat production", image: "/images/case-studies/automotive-multi-cavity-mold.webp", alt: "Automotive sensor housing multi-cavity injection mold and molded components", href: "/case-studies/automotive-sensor-housing-tooling", cta: "View Automotive Project" },
  { title: "Medical Education Device", process: "Product engineering · Injection tooling · Plastic component production", priorities: "Housing interfaces · Product assembly review", image: "/images/case-studies/medical-education-device.webp", alt: "Medical education device housing development engineering and injection molding project", href: "/industries/medical-devices", cta: "Explore Medical Applications" }
];

const capabilityLinks = [
  ["Injection Mold Manufacturing", "Production tooling from engineering and mold design through manufacturing and trial.", "/services/injection-mold-manufacturing"],
  ["Plastic Injection Molding", "Mold validation and plastic part production from low-volume builds to mass production.", "/services/plastic-injection-molding"],
  ["Injection Mold Types", "Multi-cavity, family, 2K, unscrewing, high-gloss and other tooling for different product requirements.", "/injection-molds"],
  ["Engineering & DFM", "Product co-design, moldability review and Moldflow support before mold design release.", "/injection-molding-engineering"],
  ["Mold Trial & Validation", "Trial samples, process parameters and dimensional results reviewed before approval.", "/injection-molds/mold-trial-validation"],
  ["Supporting Manufacturing", "Supporting processes are available through Arktech Group where the project requires them.", "/manufacturing-capabilities"]
] as const;

const faqs = [
  ["What industries does Arktech support with injection molding and tooling?", "Arktech supports smart home and IoT, home appliances, consumer electronics, pet tech, automotive, industrial automation and medical device component programs. Project scope is confirmed against the actual CAD, application and production requirements."],
  ["Can Arktech support both mold manufacturing and plastic part production?", "Yes. Projects can include DFM, injection mold manufacturing, mold trials, validation and plastic injection molding. Customers can also source export tooling for production at their own molding facility."],
  ["Can tooling be adapted to customer molding machines and production requirements?", "Customer machine data, mold standards, interfaces, hot-runner requirements and production expectations should be shared before mold design release so compatibility can be reviewed."],
  ["What information should I provide for an industry-specific tooling project?", "Send 3D CAD and 2D drawings together with material, annual volume, appearance requirements, critical dimensions, intended molding location and any assembly or validation requirements."],
  ["Can Arktech support appearance-critical consumer and automotive parts?", "Appearance-critical parts can be reviewed around texture, polish, parting lines, gates, ejector locations and acceptable witness marks before tooling release and during sample validation."],
  ["Can Arktech support medical device housings and functional plastic components?", "Arktech can review tooling and molding programs for medical device housings, enclosures and functional plastic components. Project-specific material, inspection and validation requirements must be defined by the customer; no unverified certification or cleanroom claim is implied."]
] as const;

const resources = [
  ["Injection Molding DFM Guide", "Review product geometry and tooling risk before steel release.", "/resources/dfm-guide"],
  ["Injection Mold Types", "Compare tooling structures for different part and production requirements.", "/injection-molds"],
  ["Mold Trial & Validation", "Understand sampling, corrections, inspection and approval before release.", "/injection-molds/mold-trial-validation"]
] as const;

const pageUrl = `${site.url}/industries/`;
const pageTitle = "Injection Molding for Electronics, Automotive & Product Industries | Arktech";
const pageDescription = "Custom injection molds and plastic injection molding for smart home, appliances, electronics, pet tech, automotive, medical and industrial products, from DFM through production.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: pageUrl,
    images: [{ url: "/images/industries/smart-device-housings.png", alt: "Smart home devices with injection molded plastic housings and controls" }]
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/images/industries/smart-device-housings.png"] }
};

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-soft)]">
        <Image alt={industry.alt} className="object-cover object-center transition duration-500 group-hover:scale-[1.025]" fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" src={industry.image} />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold leading-snug text-[var(--brand-dark)] sm:text-2xl">{industry.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)] sm:text-[15px]">{industry.description}</p>
        <ul aria-label={`${industry.title} capability priorities`} className="mt-5 flex flex-wrap gap-2">
          {industry.tags.map((tag) => <li className="rounded-full bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--brand-dark)]" key={tag}>{tag}</li>)}
        </ul>
        <Link className="focus-ring mt-5 inline-flex w-fit rounded-sm font-bold text-[var(--brand)] transition group-hover:text-[var(--brand-dark)]" href={industry.href}>{industry.cta}<span aria-hidden="true" className="ml-1.5 transition group-hover:translate-x-1">→</span></Link>
      </div>
    </article>
  );
}

export default function IndustriesPage() {
  const structuredData = [
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: pageTitle, description: pageDescription, isPartOf: { "@id": `${site.url}/#website` }, about: ["Injection mold manufacturing", "Plastic injection molding", "Product industry applications"] },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` }, { "@type": "ListItem", position: 2, name: "Industries", item: pageUrl }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
  ];

  return (
    <>
      {structuredData.map((schema, index) => <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }} key={index} type="application/ld+json" />)}

      <FullBleedHero
        backgroundImages={[
          { src: "/images/industries/smart-device-housings.png", alt: "Smart home products with molded plastic housings", position: "center" },
          { src: "/images/industries/consumer-electronics-enclosures.png", alt: "Consumer electronics with molded enclosures", position: "center" },
          { src: "/images/industries/Automotive-Components.png", alt: "Automotive interior controls and molded components", position: "center" },
          { src: "/images/industries/medial-industry.webp", alt: "Medical equipment with molded plastic housings", position: "center" }
        ]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        description="From product development and DFM to export tooling and plastic injection production, Arktech supports product companies across electronics, appliances, pet tech, automotive, medical and industrial applications."
        eyebrow="Industries & Applications"
        height="standard"
        overlay="strong"
        primaryCta={{ label: "Upload CAD for DFM Review", href: "/request-a-quote" }}
        secondaryCta={{ label: "Explore Applications", href: "#industries" }}
        title="Injection Molding & Tooling for Product Industries"
      />

      <nav aria-label="Core manufacturing capabilities" className="border-b border-[var(--line)] bg-white">
        <div className="container-page grid divide-y divide-[var(--line)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {capabilityBar.map(([label, href]) => <Link className="focus-ring flex min-h-16 items-center justify-between gap-4 px-4 py-4 text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--brand)] sm:px-5" href={href} key={label}>{label}<span aria-hidden="true" className="text-[var(--brand)]">→</span></Link>)}
        </div>
      </nav>

      <section className="scroll-mt-24 bg-[var(--surface-soft)] py-16 sm:py-20" id="industries">
        <div className="container-page">
          <SectionHeading eyebrow="Industries We Serve" title="Industries We Support" body="Arktech connects product requirements with injection mold manufacturing, plastic injection molding and the engineering decisions needed before production." />
          <div className="mt-9 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => <IndustryCard industry={industry} key={industry.title} />)}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Application Engineering" title="Engineering Priorities Vary by Application" body="Product appearance, operating conditions, assembly interfaces and production demand change which tooling and molding decisions matter most." />
          <div className="mt-9 grid gap-x-8 border-y border-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
            {priorities.map(([number, title, body]) => (
              <article className="border-b border-[var(--line)] py-6 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0" key={title}>
                <span className="text-sm font-bold tracking-wider text-[var(--brand)]">{number}</span>
                <h3 className="mt-3 text-xl font-bold text-[var(--brand-dark)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base">{body}</p>
                {title === "Tooling Complexity" ? <Link className="focus-ring mt-4 inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/injection-molds">Explore Injection Mold Types →</Link> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-white sm:py-20">
        <div className="container-page">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-300">Application to Tooling</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">From Application Requirements to Production Tooling</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">Product geometry and customer expectations shape the mold concept, validation plan and production route.</p>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {applicationThemes.map((theme) => (
              <article className="flex h-full flex-col border-t border-white/25 pt-6" key={theme.title}>
                <span className="text-sm font-bold tracking-wider text-red-300">{theme.number}</span>
                <h3 className="mt-3 text-2xl font-bold">{theme.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-200">{theme.body}</p>
                <Link className="focus-ring mt-6 inline-flex w-fit rounded-sm font-bold text-red-300 transition hover:text-white" href={theme.href}>{theme.link}<span aria-hidden="true" className="ml-1.5">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Real Application Proof" title="Selected Application Projects" body="Three existing project examples connect product applications with verified engineering, tooling and manufacturing support." />
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)]" key={project.title}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-soft)]"><Image alt={project.alt} className="object-cover object-center transition duration-500 group-hover:scale-[1.025]" fill sizes="(min-width: 1024px) 33vw, 100vw" src={project.image} /></div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-bold text-[var(--brand-dark)]">{project.title}</h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-[var(--brand-dark)]">{project.process}</p>
                  <p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)]">Engineering priorities: {project.priorities}.</p>
                  <Link className="focus-ring mt-5 inline-flex w-fit rounded-sm font-bold text-[var(--brand)] transition group-hover:text-[var(--brand-dark)]" href={project.href}>{project.cta}<span aria-hidden="true" className="ml-1.5 transition group-hover:translate-x-1">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Connected Capabilities" title="Manufacturing Capabilities Across Industries" body="Move from your product application into the most relevant tooling, engineering or molding capability." />
          <div className="mt-9 grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
            {capabilityLinks.map(([title, body, href]) => (
              <Link className="focus-ring group flex min-h-44 flex-col bg-white p-6 transition hover:bg-slate-50" href={href} key={title}>
                <h3 className="text-xl font-bold text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{body}</p>
                <span className="mt-5 text-sm font-bold text-[var(--brand)]">Explore capability <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <SectionHeading eyebrow="Buyer Questions" title="Frequently Asked Questions" />
            <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {faqs.map(([question, answer]) => (
                <details className="group py-5" key={question}>
                  <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-5 rounded-sm text-lg font-bold text-[var(--brand-dark)] marker:hidden">{question}<span aria-hidden="true" className="text-2xl font-normal text-[var(--brand)] transition group-open:rotate-45">+</span></summary>
                  <p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-[var(--muted)] sm:text-base">{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <aside aria-labelledby="selected-resources-heading" className="lg:border-l lg:border-[var(--line)] lg:pl-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Selected Resources</p>
            <h2 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]" id="selected-resources-heading">Plan the Next Engineering Step</h2>
            <div className="mt-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {resources.map(([title, body, href]) => (
                <Link className="focus-ring group block py-5" href={href} key={title}>
                  <span className="flex items-start justify-between gap-4 font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{title}<span aria-hidden="true">→</span></span>
                  <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">{body}</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Start Your Application Review</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Discuss Your Product Application</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">Share your CAD data, material, application and production requirements for DFM, tooling and injection molding review.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
            <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 text-center font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
