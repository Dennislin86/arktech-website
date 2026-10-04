import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { pillarGuides, resourceArticles } from "@/lib/engineering-resources";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Injection Molding Engineering Resources | Arktech Mold" },
  description: "Engineering guides for injection molding DFM, mold design, plastic materials, molding defects, tooling validation and export mold projects.",
  alternates: { canonical: "/resources" },
  openGraph: { title: "Injection Molding Engineering Resources | Arktech Mold", description: "Practical engineering guidance for plastic part design, injection molds, materials, troubleshooting and export tooling.", url: `${site.url}/resources`, type: "website" }
};

const topics = [
  { title: "DFM & Plastic Part Design", body: "Wall thickness, draft, ribs, bosses and undercuts before tooling release.", links: resourceArticles.filter((item) => item.topic === "DFM & Plastic Part Design") },
  { title: "Injection Mold Design", body: "Runner systems, cavitation and mold actions for production tooling.", links: resourceArticles.filter((item) => item.topic === "Injection Mold Design") },
  { title: "Injection Molding", body: "Production planning, clear components and stable molding support.", links: resourceArticles.filter((item) => item.topic === "Injection Molding") },
  { title: "Materials", body: "Material-family selection and engineering plastics for functional parts.", links: resourceArticles.filter((item) => item.topic === "Materials") },
  { title: "Defects & Troubleshooting", body: "Engineering diagnosis for common molded-part quality risks.", links: resourceArticles.filter((item) => item.topic === "Defects & Troubleshooting") },
  { title: "Tooling & Validation", body: "Trial, inspection, approval records and export tooling preparation.", links: [{ shortTitle: "Manufacturing FAQ", path: "/resources/faq" }, { shortTitle: "Quality & Documentation", path: "/company/quality-documentation" }, { shortTitle: "Project Management", path: "/company/project-management" }] }
];

const popularQuestions = [
  ["How should wall thickness be designed for injection molding?", "/resources/injection-molding/wall-thickness-guidelines"],
  ["How much draft does a molded plastic part need?", "/resources/injection-molding/draft-angle-guidelines"],
  ["When should a hot runner be used?", "/resources/injection-molds/hot-runner-vs-cold-runner"],
  ["Should we use a multi-cavity or family mold?", "/resources/injection-molds/multi-cavity-vs-family-mold"],
  ["What causes sink marks in molded parts?", "/resources/injection-molding/sink-marks-causes-solutions"],
  ["What causes injection molded parts to warp?", "/resources/injection-molding/warpage-causes-solutions"],
  ["How are sliders different from lifters?", "/resources/injection-molds/slider-vs-lifter"],
  ["How do PPS, PBT and PA compare?", "/resources/materials/pps-vs-pbt-vs-pa"]
];

const challenges = [
  ["Reduce sink marks", "/resources/injection-molding/sink-marks-causes-solutions"], ["Control warpage", "/resources/injection-molding/warpage-causes-solutions"],
  ["Release an undercut", "/resources/injection-molding/undercut-design"], ["Select a runner system", "/resources/injection-molds/hot-runner-vs-cold-runner"],
  ["Improve part release", "/resources/injection-molding/draft-angle-guidelines"], ["Design ribs and bosses", "/resources/injection-molding/ribs-bosses-design"],
  ["Choose a material", "/resources/material-selection-guide"], ["Plan a multi-cavity tool", "/resources/injection-molds/multi-cavity-vs-family-mold"],
  ["Mold transparent parts", "/resources/injection-molding/transparent-plastic-molding"], ["Prepare an export tool", "/resources/mold-design-guidelines"]
];

const roles = [
  { title: "Product & Mechanical Engineers", body: "Design parts that can be molded, released and inspected without avoidable tooling complexity.", links: [["DFM Guide", "/resources/dfm-guide"], ["Wall Thickness", "/resources/injection-molding/wall-thickness-guidelines"], ["Draft Angle", "/resources/injection-molding/draft-angle-guidelines"]] },
  { title: "Tooling & Molding Teams", body: "Review mold construction, runner strategy, actions and process risks before approval.", links: [["Mold Design Guidelines", "/resources/mold-design-guidelines"], ["Hot vs Cold Runner", "/resources/injection-molds/hot-runner-vs-cold-runner"], ["Slider vs Lifter", "/resources/injection-molds/slider-vs-lifter"]] },
  { title: "Sourcing & Program Teams", body: "Connect engineering decisions with project visibility, quality records and export readiness.", links: [["Manufacturing FAQ", "/resources/faq"], ["Project Management", "/company/project-management"], ["Case Studies", "/case-studies"]] }
];

const featuredProjects = [
  { title: "Automotive Multi-Cavity Mold", href: "/case-studies/automotive-sensor-housing-tooling", image: "/images/case-studies/automotive-multi-cavity-mold.webp", alt: "Automotive multi-cavity injection mold project" },
  { title: "Smart Home Plastic Housing", href: "/case-studies/smart-home-plastic-housing", image: "/images/case-studies/ihgs-housing.webp", alt: "Smart home plastic housing project" },
  { title: "Medical Device Cartridge Molding", href: "/case-studies/medical-device-cartridge-molding", image: "/images/case-studies/medical-education-device.webp", alt: "Medical device plastic product project" }
];

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-white">
        <div className="container-page grid gap-9 py-12 sm:py-14 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:items-center lg:gap-12 lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">ENGINEERING RESOURCES</p>
            <h1 className="split-hero-title mt-4 text-[var(--brand-dark)]">Injection Molding &amp; Mold Engineering Resources</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">Practical guidance for plastic part design, injection mold engineering, material selection, molded-part troubleshooting, tooling validation and export delivery.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a className="focus-ring rounded-sm bg-[var(--brand)] px-5 py-3 font-bold text-white hover:bg-[var(--brand-hover)]" href="#featured-guides">Explore Engineering Guides</a><Link className="focus-ring rounded-sm border border-[var(--brand-dark)] px-5 py-3 font-bold text-[var(--brand-dark)] hover:bg-[var(--brand-dark)] hover:text-white" href="/resources/faq">Browse Manufacturing FAQ</Link></div>
          </div>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
            <Image alt="Injection mold DFM report and engineering resource reference" className="object-cover object-center" fill priority sizes="(min-width: 1024px) 62vw, 100vw" src="/images/Engineering/dfm-report-tooling-review-example.webp" />
          </figure>
        </div>
      </section>

      <section className="scroll-mt-24 bg-[var(--surface-soft)] py-14 sm:py-16" id="featured-guides">
        <div className="container-page"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Pillar Guides</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Featured Engineering Guides</h2><p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Start with a complete guide, then move into focused technical articles for the decision in front of your team.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">{pillarGuides.map((guide) => <article className="group overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm" key={guide.path}><Link className="focus-ring relative block aspect-[16/9] overflow-hidden" href={guide.path}><Image alt={guide.imageAlt} className="object-cover transition duration-300 group-hover:scale-[1.02]" fill sizes="(min-width: 768px) 50vw, 100vw" src={guide.image} /></Link><div className="p-6"><p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--brand)]">{guide.topic}</p><h3 className="mt-2 text-2xl font-bold text-[var(--brand-dark)]">{guide.shortTitle}</h3><p className="mt-3 leading-7 text-[var(--muted)]">{guide.description}</p><Link className="focus-ring mt-5 inline-flex font-bold text-[var(--brand)]" href={guide.path}>Read the guide →</Link></div></article>)}</div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Topic Library</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Explore by Topic</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{topics.map((topic, index) => <article className="border-l-4 border-[var(--brand)] bg-[var(--surface-soft)] p-6" key={topic.title}><span className="text-xs font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)]">{topic.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{topic.body}</p><ul className="mt-5 grid gap-2">{topic.links.slice(0, 4).map((link) => <li key={link.path}><Link className="focus-ring text-sm font-bold text-[var(--brand-dark)] hover:text-[var(--brand)]" href={link.path}>{link.shortTitle} →</Link></li>)}</ul></article>)}</div></div></section>

      <section className="border-y border-[var(--line)] bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Popular Engineering Questions</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Find a Practical Answer Faster</h2><div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">{popularQuestions.map(([label, href], index) => <Link className="focus-ring group flex min-h-36 flex-col justify-between rounded-sm border border-[var(--line)] bg-white p-5 transition hover:border-[var(--brand)]" href={href} key={href}><span className="text-xs font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><span className="mt-4 font-bold leading-6 text-[var(--brand-dark)]">{label}</span><span className="mt-4 text-sm font-bold text-[var(--brand)]">Read answer →</span></Link>)}</div></div></section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page"><Link className="focus-ring group grid gap-6 rounded-md border border-[var(--line)] bg-[var(--brand-dark)] p-7 text-white sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center" href="/resources/faq"><div><p className="text-sm font-bold uppercase tracking-[.14em] text-red-200">Manufacturing Help Center</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Injection Molding &amp; Tooling FAQ</h2><p className="mt-4 max-w-3xl leading-7 text-slate-200">Practical answers covering tooling, molding, DFM, materials, trials, quality documentation, transfer and RFQ preparation.</p></div><span className="font-bold text-white transition group-hover:translate-x-1">Browse 60+ answers →</span></Link></div></section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Real Tooling Projects</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Engineering Decisions Applied to Real Projects</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{featuredProjects.map((project) => <Link className="focus-ring group overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm" href={project.href} key={project.href}><div className="relative aspect-[4/3]"><Image alt={project.alt} className="object-cover transition duration-300 group-hover:scale-[1.02]" fill sizes="(min-width: 768px) 33vw, 100vw" src={project.image} /></div><div className="p-5"><h3 className="text-xl font-bold text-[var(--brand-dark)]">{project.title}</h3><span className="mt-3 inline-flex font-bold text-[var(--brand)]">View project →</span></div></Link>)}</div><Link className="focus-ring mt-7 inline-flex font-bold text-[var(--brand)]" href="/case-studies">View all six project case studies →</Link></div></section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Browse by Challenge</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">What Are You Trying to Solve?</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{challenges.map(([label, href]) => <Link className="focus-ring flex min-h-24 items-center justify-between rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4 font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:bg-white" href={href} key={href}>{label}<span aria-hidden="true" className="ml-3 text-[var(--brand)]">→</span></Link>)}</div></div></section>

      <section className="border-y border-[var(--line)] bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Resources for Your Role</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Use the Library the Way Your Team Works</h2><div className="mt-8 grid gap-5 lg:grid-cols-3">{roles.map((role) => <article className="rounded-sm border border-[var(--line)] bg-white p-6" key={role.title}><h3 className="text-xl font-bold text-[var(--brand-dark)]">{role.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{role.body}</p><ul className="mt-5 grid gap-2">{role.links.map(([label, href]) => <li key={href}><Link className="focus-ring text-sm font-bold text-[var(--brand)]" href={href}>{label} →</Link></li>)}</ul></article>)}</div></div></section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Engineering Article Library</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Latest Engineering Resources</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{resourceArticles.slice(0, 6).map((item) => <Link className="focus-ring group rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 transition hover:border-[var(--brand)] hover:bg-white" href={item.path} key={item.path}><p className="text-xs font-bold uppercase tracking-[.12em] text-[var(--brand)]">{item.topic}</p><h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)]">{item.shortTitle}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p><span className="mt-4 inline-flex text-sm font-bold text-[var(--brand)]">Read article →</span></Link>)}</div></div></section>

      <section className="border-y border-[var(--line)] bg-[var(--surface-soft)] py-12"><div className="container-page grid gap-8 lg:grid-cols-[.55fr_.45fr] lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Extended Manufacturing Resources</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)]">Beyond Injection Molds</h2><p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">For programs that also require CNC machining, die casting, sheet metal, prototypes or assembly, explore the wider Arktech Group manufacturing platform.</p></div><div className="flex flex-wrap gap-3 lg:justify-end"><a className="focus-ring rounded-sm border border-[var(--brand-dark)] px-5 py-3 font-bold text-[var(--brand-dark)] hover:bg-white" href="https://www.arktech-group.com">Explore Arktech Group ↗</a><Link className="focus-ring rounded-sm bg-[var(--brand)] px-5 py-3 font-bold text-white" href="/company/arktech-group">Group Overview</Link></div></div></section>

      <section className="bg-white py-12"><div className="container-page"><h2 className="text-2xl font-bold text-[var(--brand-dark)]">Related Capabilities</h2><div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">{[["DFM Engineering", "/services/dfm-engineering"], ["Injection Mold Manufacturing", "/services/injection-mold-manufacturing"], ["Plastic Injection Molding", "/services/plastic-injection-molding"], ["Mold Trial & Validation", "/services/mold-trial-sampling-support"], ["Quality & Documentation", "/company/quality-documentation"]].map(([label, href]) => <Link className="focus-ring font-bold text-[var(--brand)]" href={href} key={href}>{label} →</Link>)}</div></div></section>
      <CTA />
    </>
  );
}
