import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CompanyFactoryYouTubeVideo } from "@/components/CompanyFactoryYouTubeVideo";
import { FullBleedHero } from "@/components/FullBleedHero";
import { site } from "@/lib/site";

const facts = [
  { label: "Company Office", title: "Shenzhen", body: "Engineering communication and international project coordination." },
  { label: "Manufacturing", title: "Dongguan", body: "Toolmaking, mold assembly, trials and molding support." },
  { label: "Core Focus", title: "Export Tooling", body: "Production molds prepared for customer factories and molding programs." },
  { label: "Engineering", title: "DFM Before Tooling", body: "Product and mold review before steel cutting and manufacturing release." },
  { label: "Molding Capacity", title: "25–550T", body: "Plastic injection molding from validation builds through repeat production." },
  { label: "Project Support", title: "International Programs", body: "Technical communication, validation records and documented handover." }
] as const;

const workflow = [
  { number: "01", title: "Product Co-Design & DFM", body: "Review product geometry, material intent and tooling risk before mold design release.", href: "/injection-molding-engineering" },
  { number: "02", title: "Mold Engineering", body: "Define mold structure, actions, cooling, gating and customer-machine interfaces.", href: undefined },
  { number: "03", title: "Injection Mold Manufacturing", body: "Machine, fit and assemble production tooling against the approved design.", href: "/injection-mold-manufacturing" },
  { number: "04", title: "Mold Trial & Validation", body: "Review trial samples, process conditions, dimensions and correction actions.", href: "/injection-molds/mold-trial-validation" },
  { number: "05", title: "Plastic Injection Molding", body: "Move approved tools into low-volume, repeat or mass-production molding.", href: "/plastic-injection-molding" },
  { number: "06", title: "Inspection & Delivery", body: "Confirm agreed records, packing requirements and production handover.", href: undefined }
] as const;

const environmentItems = [
  ["Toolmaking", "CNC, EDM, fitting and tooling operations for production molds."],
  ["Mold Assembly", "Fitting, assembly and mold preparation before trial."],
  ["Mold Trial", "Trial samples and process review before approval or export."],
  ["Injection Molding & Inspection", "25–550T plastic injection molding and molded-part verification."]
] as const;

const qualityItems = [
  "Engineering review before steel cutting",
  "Tooling inspection during manufacturing",
  "Mold trial sample review",
  "Injection molding parameter records",
  "Dimensional inspection",
  "Correction and approval tracking"
] as const;

const exportItems = [
  ["Customer Machine Compatibility", "Review key tooling interfaces against supplied receiving-machine requirements."],
  ["Mold Trial & Validation", "Confirm mold function, trial samples and agreed engineering actions."],
  ["Tooling Documentation", "Prepare the agreed drawings, records and project-specific technical files."],
  ["Spare Parts Planning", "Identify project-specific inserts or replacement components where required."],
  ["Packing Preparation", "Protect the completed tooling and agreed handover items for shipment."],
  ["Technical Handover", "Connect validation status, documents and tooling information with customer production."]
] as const;

const industries = [
  ["Smart Home & IoT", "/industries/smart-home-iot"],
  ["Home Appliances", "/industries/home-appliances"],
  ["Consumer Electronics", "/industries/consumer-electronics"],
  ["Pet Tech Products", "/industries/pet-tech"],
  ["Automotive Components", "/industries/automotive"],
  ["Industrial Automation", "/industries/industrial-automation"],
  ["Medical Devices", "/industries/medical-devices"]
] as const;

const workingPrinciples = [
  ["01", "Engineering Before Steel Cutting", "Review product and tooling risks before manufacturing release."],
  ["02", "Clear Project Communication", "Connect engineering decisions, open items and project status with the customer team."],
  ["03", "Validation Before Handover", "Use mold trials, sample review and agreed inspection records before release."],
  ["04", "Support Through Production", "Maintain the tooling, documentation and manufacturing context needed after approval."]
] as const;

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{body}</p> : null}
    </div>
  );
}

function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="focus-ring inline-flex w-fit items-center rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={href}>
      {children}<span aria-hidden="true" className="ml-2">→</span>
    </Link>
  );
}

export function CompanyPage() {
  return (
    <>
      <FullBleedHero
        backgroundImages={[{
          src: "/images/factory-workshop/injection-mold-assembly-workshop.webp",
          alt: "Arktech injection mold manufacturing and assembly workshop in Dongguan",
          position: "center"
        }]}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Company" }]}
        description="Arktech supports product companies and injection molding companies with engineering, export injection molds, mold validation and plastic injection production."
        eyebrow="ABOUT ARKTECH"
        height="compact"
        overlay="strong"
        primaryCta={{ label: "Explore Manufacturing Capabilities", href: "/manufacturing-capabilities" }}
        secondaryCta={{ label: "Contact Arktech", href: "/contact" }}
        title="About Arktech"
      />

      <section className="border-b border-[var(--line)] bg-white py-14 sm:py-16" id="at-a-glance">
        <div className="container-page">
          <SectionHeading body="Arktech combines engineering review, export injection mold manufacturing, mold validation and plastic injection molding within one project workflow." eyebrow="Company Overview" title="Arktech at a Glance" />
          <div className="mt-8 grid border-y border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact, index) => (
              <article className={`px-1 py-6 sm:p-6 ${index < facts.length - 1 ? "border-b border-[var(--line)] lg:border-b-0" : ""} sm:border-r sm:border-[var(--line)] sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(-n+3)]:border-b`} key={fact.title}>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{fact.label}</p>
                <h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)] sm:text-2xl">{fact.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)] sm:text-base">{fact.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20" id="core-focus">
        <div className="container-page">
          <SectionHeading body="Our core manufacturing work connects production tooling with the molded components those tools are built to produce." eyebrow="Core Manufacturing" title="Our Core Manufacturing Focus" />
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            <article className="group overflow-hidden rounded-md border border-[var(--line)] bg-white">
              <div className="relative aspect-[16/9] overflow-hidden bg-white">
                <Image alt="Finished injection molds and molded parts manufactured by Arktech" className="object-cover object-center transition duration-500 group-hover:scale-[1.02]" fill sizes="(min-width: 1024px) 50vw, 100vw" src="/images/injection-mold-manufacturing/Precision Mold to Global Delivery.png" />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Export Tooling</p>
                <h3 className="mt-2 text-2xl font-bold text-[var(--brand-dark)] sm:text-3xl">Injection Mold Manufacturing</h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">Engineering, mold design, toolmaking, fitting, mold trials and export tooling support for production molds.</p>
                <div className="mt-5"><ArrowLink href="/injection-mold-manufacturing">Explore Injection Mold Manufacturing</ArrowLink></div>
              </div>
            </article>
            <article className="group overflow-hidden rounded-md border border-[var(--line)] bg-white">
              <div className="relative aspect-[16/9] overflow-hidden bg-white">
                <Image alt="Plastic injection molded component undergoing dimensional inspection at Arktech" className="object-cover object-center transition duration-500 group-hover:scale-[1.02]" fill sizes="(min-width: 1024px) 50vw, 100vw" src="/images/capabilities/plastic-injection-molding-production.webp" />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Molded-Part Production</p>
                <h3 className="mt-2 text-2xl font-bold text-[var(--brand-dark)] sm:text-3xl">Plastic Injection Molding</h3>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">Mold validation and plastic component production from low-volume builds through mass production using 25–550T injection molding capacity.</p>
                <div className="mt-5"><ArrowLink href="/plastic-injection-molding">Explore Plastic Injection Molding</ArrowLink></div>
              </div>
            </article>
          </div>
          <div className="mt-7 flex flex-col gap-4 border-t border-[var(--line)] pt-6 text-sm leading-6 text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:text-base">
            <p className="max-w-4xl">Supporting capabilities such as CNC machining, die casting, sheet metal, prototyping and assembly are available where required by the project.</p>
            <ArrowLink href="/manufacturing-capabilities">Explore Manufacturing Capabilities</ArrowLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" id="workflow">
        <div className="container-page">
          <SectionHeading body="A connected engineering and manufacturing path keeps product requirements, tooling decisions and production validation aligned." eyebrow="Integrated Workflow" title="From Product Development to Production" />
          <ol className="mt-10 grid gap-0 border-l-2 border-[var(--line)] pl-6 lg:grid-cols-6 lg:border-l-0 lg:border-t-2 lg:pl-0">
            {workflow.map((step) => (
              <li className="relative border-b border-[var(--line)] py-6 last:border-b-0 lg:border-b-0 lg:px-4 lg:pb-0 lg:pt-8" key={step.number}>
                <span className="absolute -left-[2.08rem] top-6 flex size-4 rounded-full border-4 border-white bg-[var(--brand)] lg:-top-[0.55rem] lg:left-4" aria-hidden="true" />
                <span className="text-sm font-bold tracking-[0.14em] text-[var(--brand)]">{step.number}</span>
                <h3 className="mt-3 text-lg font-bold leading-snug text-[var(--brand-dark)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
                {step.href ? <Link className="focus-ring mt-3 inline-flex rounded-sm text-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={step.href}>Explore <span className="sr-only">{step.title}</span><span aria-hidden="true" className="ml-1">→</span></Link> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-white sm:py-20" id="manufacturing-environment">
        <div className="container-page">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-300">Factory & Toolroom</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]">Our Manufacturing Environment</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">Real toolmaking, mold assembly, trial and molding activity connects the engineering plan with the physical tool and approved molded parts.</p>
          </div>
          <div className="mt-9 grid gap-6 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)]">
            <figure className="overflow-hidden rounded-md border border-white/15 bg-black/20">
              <div className="relative aspect-video">
                <CompanyFactoryYouTubeVideo />
              </div>
              <figcaption className="border-t border-white/15 px-5 py-4 text-sm text-slate-300">Mold fitting and assembly inside the Arktech toolroom.</figcaption>
            </figure>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <figure className="overflow-hidden rounded-md border border-white/15 bg-black/20">
                <div className="relative aspect-[16/9]"><Image alt="Injection mold fitting and assembly at Arktech" className="object-cover object-center" fill sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw" src="/images/factory-workshop/injection-mold-fitting-workshop.webp" /></div>
                <figcaption className="border-t border-white/15 px-4 py-3 text-sm text-slate-300">Tool fitting and assembly</figcaption>
              </figure>
              <figure className="overflow-hidden rounded-md border border-white/15 bg-black/20">
                <div className="relative aspect-[16/9]"><Image alt="Injection mold installed for trial and sample validation at Arktech" className="object-cover object-center" fill sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw" src="/images/Mold trail/Mold trial video photos.png" /></div>
                <figcaption className="border-t border-white/15 px-4 py-3 text-sm text-slate-300">Mold trial and sample review</figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 grid border-y border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {environmentItems.map(([title, body], index) => (
              <article className={`py-5 sm:p-5 ${index < environmentItems.length - 1 ? "border-b border-white/15 sm:border-b-0 sm:border-r" : ""} sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r`} key={title}>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" id="quality">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-start lg:gap-14">
          <div>
            <SectionHeading body="Arktech integrates engineering review and validation into the project workflow so tooling decisions, trial findings and approval status remain visible before handover." eyebrow="Engineering Evidence" title="Quality Built into Tooling & Production" />
            <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {qualityItems.map((item) => <li className="flex items-start gap-3 border-b border-[var(--line)] pb-3 font-semibold leading-6 text-[var(--brand-dark)]" key={item}><span aria-hidden="true" className="mt-2 h-0.5 w-5 shrink-0 bg-[var(--brand)]" />{item}</li>)}
            </ul>
            <div className="mt-7"><ArrowLink href="/company/quality-documentation">View Quality & Documentation</ArrowLink></div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] sm:col-span-2">
              <div className="relative aspect-[16/7]"><Image alt="Anonymized DFM report for injection mold engineering review" className="object-contain object-center p-3" fill sizes="(min-width: 1024px) 58vw, 100vw" src="/images/Engineering/injection-molding-dfm-report-anonymized.webp" /></div>
              <figcaption className="border-t border-[var(--line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--brand-dark)]">Engineering review before tooling release</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]">
              <div className="relative aspect-[4/3]"><Image alt="Dimensional inspection report from injection mold trial validation" className="object-contain object-center p-3" fill sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw" src="/images/quality/dimensional-inspection-report-anonymized.webp" /></div>
              <figcaption className="border-t border-[var(--line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--brand-dark)]">Dimensional inspection</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]">
              <div className="relative aspect-[4/3]"><Image alt="Injection molding process parameter sheet from mold trial" className="object-contain object-center p-3" fill sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw" src="/images/injection-mold-manufacturing/injection-molding-process-parameters.webp" /></div>
              <figcaption className="border-t border-[var(--line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--brand-dark)]">Recorded molding parameters</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20" id="export-tooling">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] lg:items-center lg:gap-14">
          <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
            <div className="relative aspect-[16/9]"><Image alt="Export injection mold prepared for customer production with validation and packing records" className="object-cover object-center" fill sizes="(min-width: 1024px) 48vw, 100vw" src="/images/company/Precision Mold to Global Delivery.png" /></div>
            <figcaption className="border-t border-[var(--line)] px-5 py-4 text-sm text-[var(--muted)]">Precision mold manufacturing, validation and documented global delivery preparation.</figcaption>
          </figure>
          <div>
            <SectionHeading body="International tooling programs require more than a completed mold. The tool, records and handover plan must support installation and production at the receiving factory." eyebrow="International Customer Support" title="Built for International Tooling Programs" />
            <div className="mt-7 grid gap-x-7 sm:grid-cols-2">
              {exportItems.map(([title, body]) => <article className="border-b border-[var(--line)] py-4" key={title}><h3 className="font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></article>)}
            </div>
            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <ArrowLink href="/injection-molds/export-tooling-transfer">Explore Export Tooling & Mold Transfer</ArrowLink>
              <Link className="focus-ring inline-flex w-fit rounded-sm font-bold text-[var(--brand-dark)] hover:text-[var(--brand)]" href="/injection-molds#tooling-support">Explore Tooling Support →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" id="buyers">
        <div className="container-page">
          <SectionHeading eyebrow="Customer Programs" title="Who We Work With" />
          <div className="mt-9 grid border-y border-[var(--line)] lg:grid-cols-2 lg:divide-x lg:divide-[var(--line)]">
            <article className="py-8 lg:pr-10">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Developing a Product?</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)] sm:text-3xl">Product Companies & OEM Teams</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">Engineering, tooling and molded-part production support from product development through production.</p>
              <div className="mt-6"><ArrowLink href="/manufacturing-capabilities">Explore Manufacturing Capabilities</ArrowLink></div>
            </article>
            <article className="border-t border-[var(--line)] py-8 lg:border-t-0 lg:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Need Tooling Capacity?</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)] sm:text-3xl">Injection Molding Companies</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">Export-ready tooling developed around customer machines, tooling standards and production requirements.</p>
              <div className="mt-6"><ArrowLink href="/injection-molds">Explore Injection Molds</ArrowLink></div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20" id="industries">
        <div className="container-page">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading body="Direct access to application-specific tooling and molding information without repeating the full industry guidance here." eyebrow="Applications" title="Industries We Support" />
            <ArrowLink href="/industries">Explore Industries</ArrowLink>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(([title, href]) => <Link className="focus-ring flex min-h-16 items-center justify-between rounded-sm border border-[var(--line)] bg-white px-4 py-4 font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href={href} key={title}>{title}<span aria-hidden="true">→</span></Link>)}
          </div>
          <div className="mt-8 grid gap-4 border-t border-[var(--line)] pt-8 md:grid-cols-2">
            <Link className="focus-ring group rounded-md bg-[var(--brand-dark)] p-6 text-white transition hover:bg-[#173b5a]" href="/injection-molds">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-red-300">See Our Work</p>
              <h3 className="mt-2 text-2xl font-bold">Explore Injection Mold Projects</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">View real completed mold types and tooling projects built for different part and production requirements.</p>
              <span className="mt-5 inline-flex font-bold text-white">View Tooling Projects <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">→</span></span>
            </Link>
            <Link className="focus-ring group rounded-md border border-[var(--line)] bg-white p-6 transition hover:border-[var(--brand)]" href="/resources">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Engineering Knowledge</p>
              <h3 className="mt-2 text-2xl font-bold text-[var(--brand-dark)]">Technical Resources</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Use practical DFM, material and mold-design guidance when preparing a tooling or molding project.</p>
              <span className="mt-5 inline-flex font-bold text-[var(--brand)]">Explore Technical Resources <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">→</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" id="how-we-work">
        <div className="container-page">
          <SectionHeading body="Our working method is defined by the engineering and validation steps used to move a project forward—not by generic company values." eyebrow="Working Principles" title="How We Work" />
          <div className="mt-9 grid border-y border-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
            {workingPrinciples.map(([number, title, body], index) => (
              <article className={`py-7 md:p-6 ${index < workingPrinciples.length - 1 ? "border-b border-[var(--line)] md:border-b-0 md:border-r" : ""} md:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r`} key={title}>
                <span className="text-sm font-bold tracking-[0.14em] text-[var(--brand)]">{number}</span>
                <h3 className="mt-3 text-xl font-bold leading-snug text-[var(--brand-dark)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-14 sm:py-16 lg:py-20" id="start-a-project">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,58fr)_minmax(300px,42fr)] lg:items-center lg:gap-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Start a Project</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl lg:text-[2.75rem]">Start a Project with Arktech</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--cta-body)] sm:text-lg">Share your CAD data and project requirements to discuss engineering, tooling or injection molding support.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm bg-[var(--brand)] px-6 py-3 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review →</Link>
              <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 py-3 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/contact">Contact Arktech →</Link>
            </div>
          </div>
          <address className="not-italic text-sm leading-6 text-[var(--cta-body)] sm:text-base">
            <div className="border-b border-[var(--line)] pb-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Project Contact</p>
              <a className="focus-ring mt-2 block w-fit rounded-sm font-bold text-[var(--cta-heading)] hover:text-[var(--brand)]" href={`mailto:${site.email}`}>{site.email}</a>
              <a className="focus-ring mt-1 block w-fit rounded-sm font-bold text-[var(--cta-heading)] hover:text-[var(--brand)]" href="tel:+8675523148996">{site.phone}</a>
            </div>
            <div className="grid gap-4 pt-4">
              <p><strong className="text-[var(--cta-heading)]">Shenzhen Head Office</strong><br />{site.company.headOffice}</p>
              <p><strong className="text-[var(--cta-heading)]">Dongguan Factory</strong><br />{site.company.factoryAddress}</p>
            </div>
          </address>
        </div>
      </section>
    </>
  );
}
