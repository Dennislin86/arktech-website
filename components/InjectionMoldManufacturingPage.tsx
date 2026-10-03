import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const capabilities = [
  { title: "Tooling Engineering & Design", body: "Translate approved part data and production requirements into the mold structure, cavity and core layout, cooling, gating, ejection and moving mechanisms before steel cutting.", href: "/services/dfm-engineering", link: "View Engineering Support" },
  { title: "Mold Design & Approval", body: "Review parting strategy, cooling, ejection, sliders, lifters, inserts, hot runner layout and the receiving molding-machine requirements." },
  { title: "Precision Tool Manufacturing", body: "Coordinate steel preparation, CNC machining, EDM, wire cutting, grinding and tooling-component manufacture." },
  { title: "Mold Fitting & Assembly", body: "Fit, align and assemble mold components, then verify movement, shutoffs, cooling connections and key mechanisms before trial." },
  { title: "Mold Trial & Correction", body: "Run structured trials, review samples and dimensions, manage engineering changes and complete correction loops before approval.", href: "/services/mold-trial-sampling-support", link: "View Mold Trial & Validation" },
  { title: "Export Preparation & Documentation", body: "Prepare agreed inspection records, tooling data, spare parts information, packing evidence and project handover documents.", href: "/company/quality-documentation", link: "View Quality & Documentation" }
];

const moldTypes = [
  { title: "Complex Injection Molds", image: "/images/mold-types/complex-injection-molds.png", alt: "Complex injection mold with multiple sliders and tooling mechanisms" },
  { title: "Multi-Cavity Injection Molds", image: "/images/mold-types/multi-cavity-injection-molds.webp", alt: "Multi-cavity injection molds for repeatable production", href: "/tooling-examples/multi-cavity-molds" },
  { title: "Hot Runner Molds", image: "/images/mold-types/hot-runner-molds.webp", alt: "Hot runner injection mold for production tooling", href: "/tooling-examples/hot-runner-molds" },
  { title: "Insert Molding Tools", image: "/images/mold-types/insert-molding-tools.webp", alt: "Insert molding tools for plastic and metal components", href: "/tooling-examples/insert-molds" },
  { title: "Prototype Molds", image: "/images/mold-types/prototype-injection-mold.webp", alt: "Prototype injection mold and molded plastic component for engineering validation", href: "/services/injection-molding-production-options#prototype" },
  { title: "Two-Shot / 2K Molds", image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp", alt: "Two-shot and 2K injection molds for multi-material parts", href: "/tooling-examples/two-shot-2k-molds" },
  { title: "Unscrewing Molds", image: "/images/mold-types/unscrewing-molds.webp", alt: "Unscrewing injection molds for threaded plastic parts", href: "/tooling-examples/unscrewing-molds" },
  { title: "Large Component Molds", image: "/images/mold-types/large-component-molds.JPG", alt: "Large component injection mold for structural plastic parts", href: "/tooling-examples/large-component-molds" }
];

const toolroomCapabilities = ["Steel Preparation", "CNC Rough Machining", "Precision CNC Machining", "EDM", "Wire EDM", "Grinding", "Drilling & Milling", "Mold Fitting", "Polishing", "Mold Assembly", "Trial Preparation"];

const equipment = [
  { title: "CNC Machining Centers", body: "Rough and precision machining for mold plates, cavities, cores and tooling inserts.", image: "/images/factory-workshop/injection-mold-cnc-machining-workshop.webp", alt: "CNC machining centers in the injection mold manufacturing toolroom" },
  { title: "EDM & Wire EDM", body: "EDM forms detailed cavity geometry while wire EDM supports accurate cutting of inserts and tooling components.", image: "/images/factory-workshop/injection-mold-edm-machine.webp", alt: "GF AgieCharmilles EDM machine for injection mold cavity machining" },
  { title: "Precision Grinding Equipment", body: "Grinding supports flatness, fit and controlled tooling-component preparation before assembly.", image: "/images/factory-workshop/injection-mold-precision-grinding-workshop.webp", alt: "Precision grinding equipment for injection mold components" },
  { title: "Mold Fitting & Assembly Stations", body: "Dedicated work areas support fitting, alignment, assembly and movement checks before mold trial.", image: "/images/factory-workshop/injection-mold-fitting-workshop.webp", alt: "Injection mold fitting and assembly in the Arktech toolroom" },
  { title: "Injection Molding Machines for Trial", body: "Trial molding confirms filling, ejection, appearance and sample condition before customer approval.", image: "/images/process/export-delivery-production-support-molding.png", alt: "Injection mold installed for trial and sample validation" },
  { title: "Inspection Equipment", body: "Dimensional inspection equipment supports mold-component checks and molded-sample verification.", image: "/images/process/sample-validation-inspection-cmm.png", alt: "CMM dimensional inspection for injection mold validation" }
];

const processStages = [
  { title: "DFM & Tooling Review", body: "Confirm part data, resin, annual volume, critical requirements and tooling risks." },
  { title: "Mold Design Approval", body: "Review mold structure, parting, cooling, ejection and special mechanisms before release." },
  { title: "Steel & Component Preparation", body: "Prepare approved mold steel and standard components against the released design." },
  { title: "CNC Machining", body: "Machine mold plates, cavity and core geometry, inserts and tooling components." },
  { title: "EDM / Wire EDM", body: "Produce detailed cavity features and precision-cut tooling components where required." },
  { title: "Fitting, Polishing & Assembly", body: "Fit shutoffs, polish specified surfaces and assemble the complete mold." },
  { title: "Mold Trial", body: "Set up the tool, record injection conditions and review molded samples." },
  { title: "Correction & Validation", body: "Manage customer feedback, engineering changes, re-trials and sample validation." },
  { title: "Final Inspection", body: "Verify mold condition, functions, agreed records and spare-parts preparation." },
  { title: "Packing & Export Delivery", body: "Protect the mold, document packing and prepare the approved tooling package for shipment." }
];

const toolingEngineeringTopics = [
  {
    number: "01",
    title: "Cavity, Core & Parting Strategy",
    body: "Define the cavity and core arrangement, parting surfaces, shutoffs and insert boundaries needed for a serviceable production mold.",
    image: "/images/injection-mold-manufacturing/cavity-core-parting.webp",
    alt: "Injection mold cavity core and parting-line design"
  },
  {
    number: "02",
    title: "Cooling, Gate & Runner Planning",
    body: "Plan cooling circuits, gate position, runner layout and hot runner requirements around filling, thermal control and the customer production environment.",
    image: "/images/injection-mold-manufacturing/cooling-gate-runner.webp",
    alt: "Injection mold cooling gate and runner layout"
  },
  {
    number: "03",
    title: "Ejection & Moving Mechanisms",
    body: "Resolve ejector layout, sliders, lifters and unscrewing actions with practical travel, locking, guidance and service access.",
    image: "/images/injection-mold-manufacturing/ejection-slider-lifter.webp",
    alt: "Slider lifter and ejection system for injection mold"
  },
  {
    number: "04",
    title: "Steel, Inserts & Production Standard",
    body: "Confirm steel selection, replaceable inserts, standard components and spare-insert requirements against the approved tooling specification.",
    image: "/images/capabilities/tooling-spare-parts.jpg",
    alt: "Mold steel insert and tooling component design"
  }
];

const toolingDecisions = [
  "Number of Cavities",
  "Hot Runner vs Cold Runner",
  "Slider / Lifter Requirements",
  "Unscrewing Mechanism",
  "Interchangeable Inserts",
  "Steel Specification",
  "Cooling Strategy",
  "Customer Machine Interface",
  "Spare Insert Requirements",
  "Tooling Documentation Requirements"
];
const standards = ["Customer-Specific Mold Standards", "Export Tooling Requirements", "Customer Machine Compatibility", "DME / HASCO-Compatible Components When Specified", "Approved Steel Specifications", "Hot Runner & Electrical Connections", "Cooling Connection Requirements", "Interchangeable Inserts", "Spare Inserts & Wear Parts", "Final 2D / 3D Tooling Data"];
const complexFeatures = ["Hot Runner Systems", "Valve Gate Systems", "Multi-Cavity Layouts", "Sliders", "Lifters", "Unscrewing Mechanisms", "Interchangeable Inserts", "Insert Molding", "Overmolding", "Two-Shot / 2K"];
const trialSteps = ["Trial Preparation", "Injection Parameter Recording", "Sample Review", "Dimensional Check", "Customer Feedback", "Engineering Corrections", "Re-Trial", "Final Approval Coordination"];
const documentationItems = ["DFM Report", "Mold Trial Report", "Dimensional Inspection Report", "Steel / Material Certificates", "Tooling 2D / 3D Data", "Spare Parts List", "Hot Runner Information", "Cooling Information", "Packing Photos", "Export Packing Checklist"];

const toolingGallery = [
  { title: "Complex injection mold", image: "/images/mold-types/complex-injection-molds.png", alt: "Complex export injection mold with multiple tooling mechanisms" },
  { title: "Large component mold", image: "/images/mold-types/large-component-molds.JPG", alt: "Large component export injection mold in the toolroom" },
  { title: "Multi-cavity mold", image: "/images/mold-types/multi-cavity-injection-molds.webp", alt: "Multi-cavity export injection mold for repeatable production" },
  { title: "Hot runner mold", image: "/images/mold-types/hot-runner-molds.webp", alt: "Hot runner injection mold prepared for production tooling" },
  { title: "Mold fitting", image: "/images/factory-workshop/injection-mold-fitting-workshop.webp", alt: "Injection mold fitting and component verification" },
  { title: "Cavity polishing", image: "/images/factory-workshop/injection-mold-cavity-polishing-room.webp", alt: "Injection mold cavity polishing before assembly" },
  { title: "Mold assembly workshop", image: "/images/factory-workshop/injection-mold-assembly-workshop.webp", alt: "Injection mold assembly workshop with tooling stations" },
  { title: "Mold trial", image: "/images/process/export-delivery-production-support-molding.png", alt: "Injection mold trial before customer approval" },
  { title: "Dimensional inspection", image: "/images/process/sample-validation-inspection-cmm.png", alt: "Dimensional inspection for injection mold sample validation" }
];

const audiences = [
  { title: "Product Companies", body: "OEMs, hardware brands and product teams developing plastic products for overseas markets." },
  { title: "Injection Molding Companies", body: "Molders requiring offshore toolmaking capacity, export-ready molds, validation records and spare-parts support." },
  { title: "Engineering & Sourcing Teams", body: "Teams requiring DFM, technical communication, project updates, tool validation and documented delivery." }
];

const relatedCapabilities = [
  { label: "DFM Engineering", href: "/services/dfm-engineering" },
  { label: "Mold Trial & Validation", href: "/services/mold-trial-sampling-support" },
  { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
  { label: "Quality & Documentation", href: "/company/quality-documentation" },
  { label: "Tooling Spare Parts", href: "/services/tooling-spare-parts" },
  { label: "Project Management", href: "/company/project-management" },
  { label: "Mold Design Guidelines", href: "/resources/mold-design-guidelines" },
  { label: "Hot Runner vs Cold Runner", href: "/resources/injection-molds/hot-runner-vs-cold-runner" },
  { label: "Slider vs Lifter", href: "/resources/injection-molds/slider-vs-lifter" }
];

const faqs = [
  { question: "Can Arktech build export injection molds for overseas molding factories?", answer: "Yes. Arktech supports export tooling from DFM and mold design review through tool manufacturing, trials, validation, documentation, spare parts and export preparation." },
  { question: "What injection mold types can Arktech manufacture?", answer: "Supported projects include complex molds, multi-cavity molds, hot runner molds, insert molding tools, overmolding tools, two-shot or 2K molds, unscrewing molds and large component molds." },
  { question: "What mold manufacturing processes are used?", answer: "The process can include steel preparation, CNC machining, EDM, wire EDM, grinding, fitting, polishing, assembly, mold trial, correction and final inspection according to the approved tool design." },
  { question: "Can Arktech support hot runner and multi-cavity molds?", answer: "Yes. Hot runner selection, cavity layout, thermal balance, service access and trial behavior are reviewed against the resin, part geometry and customer production requirements." },
  { question: "Can the mold be designed for our injection molding machine?", answer: "Yes. Mold dimensions, platen and tie-bar limits, locating and connection requirements can be reviewed against customer-provided machine data before mold design approval." },
  { question: "What mold standards can you support?", answer: "Arktech works to customer-specific mold standards and can review DME, HASCO or equivalent component requirements where they are defined in the approved tooling specification." },
  { question: "Do you provide mold trials before shipment?", answer: "Yes. Trial support can include injection parameter records, sample review, dimensional checks, customer feedback, engineering corrections, re-trial and final approval coordination." },
  { question: "What documentation is provided before export?", answer: "The agreed package may include DFM records, mold trial and dimensional reports, certificates, tooling data, spare-parts information, cooling and hot runner records, and packing evidence." },
  { question: "Can you provide spare inserts and wear parts?", answer: "Yes. Replaceable inserts, wear components and other agreed spare parts can be prepared against the approved mold design and project requirements." }
];

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{title}</h2>{body ? <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">{body}</p> : null}</div>;
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="focus-ring inline-flex w-fit rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={href}>{children}<span className="ml-2" aria-hidden="true">→</span></Link>;
}

export function InjectionMoldManufacturingPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-white">
        <div className="container-page py-12 sm:py-16 xl:py-20">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]"><Link className="focus-ring rounded-sm transition hover:text-[var(--brand)]" href="/">Home</Link><span aria-hidden="true">/</span><Link className="focus-ring rounded-sm transition hover:text-[var(--brand)]" href="/services">Capabilities</Link><span aria-hidden="true">/</span><span aria-current="page" className="font-semibold text-[var(--brand-dark)]">Injection Mold Manufacturing</span></nav>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-center lg:gap-12">
            <div><p className="text-base font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Export Injection Mold Manufacturing</p><h1 className="internal-page-title mt-4 text-[var(--brand-dark)]">Export Injection Mold Manufacturing for Product Companies and Injection Molders</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">Arktech manufactures export-ready injection molds in China with DFM engineering, mold design review, precision toolmaking, mold trials, validation, spare parts and documented export delivery for overseas customers.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link></div></div>
            <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm"><Image alt="Large export injection mold manufactured by Arktech" className="h-auto w-full object-contain" height={1485} priority sizes="(min-width: 1024px) 42vw, 100vw" src="/images/process/tooling-manufacturing-plan-mold.png" width={1710} /><figcaption className="border-t border-[var(--line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--brand-dark)]">Finished export injection mold before validation and delivery</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page grid gap-8 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-start lg:gap-14"><SectionHeader eyebrow="Export Tooling Overview" title="Export-Ready Injection Molds for Overseas Production" /><div className="space-y-4 border-l-2 border-[var(--brand)] pl-6 text-base leading-7 text-[var(--muted)]"><p>Arktech supports product companies, injection molding companies and engineering teams that need production injection molds manufactured in China and delivered for overseas production. Projects can include DFM review, mold design approval, tool manufacturing, mold trials, correction, validation, documentation, spare parts and export preparation.</p><p>The objective is not only to produce acceptable trial samples, but to prepare tooling that can be installed, maintained and used reliably in the customer&apos;s production environment after delivery.</p></div></div></section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page"><SectionHeader eyebrow="Core Capabilities" title="Injection Mold Manufacturing Capabilities" body="Six connected capabilities take an export injection mold from engineering review through documented tooling handover." /><div className="mt-9 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">{capabilities.map((capability, index) => <article className="group flex h-full flex-col border border-[var(--line)] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-sm" key={capability.title}><div className="flex items-start justify-between gap-4"><h3 className="text-xl font-bold text-[var(--brand-dark)]">{capability.title}</h3><span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span></div><p className="mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">{capability.body}</p>{capability.href ? <Link className="focus-ring mt-5 inline-flex w-fit rounded-sm text-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={capability.href}>{capability.link}<span className="ml-2" aria-hidden="true">→</span></Link> : null}</article>)}</div></div></section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeader
            eyebrow="Tooling Engineering"
            title="Mold Engineering Before Steel Cutting"
            body="After part moldability is reviewed, Arktech develops the mold concept around part geometry, production requirements, customer machine conditions and tooling standards before steel cutting begins. Engineering review focuses on mold structure, cooling, gating, ejection, moving mechanisms, steel selection and long-term production requirements."
          />

          <figure className="mt-9 overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm lg:grid lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)]">
            <div className="relative aspect-[16/10] min-h-[280px] overflow-hidden lg:aspect-auto lg:min-h-[440px]">
              <Image alt="Injection mold engineering before steel cutting" className="object-contain object-center" fill sizes="(min-width: 1024px) 58vw, 100vw" src="/images/process/dfm-engineering-feedback-old-website.png" />
            </div>
            <figcaption className="flex flex-col justify-center border-t border-[var(--line)] bg-[var(--brand-dark)] p-6 text-white lg:border-l lg:border-t-0 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-red-200">Production Mold Design</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight">Tool structure matched to the receiving production environment</h3>
              <p className="mt-4 leading-7 text-slate-300">Mold design approval connects tool structure, cooling, runner and gate strategy, ejection, moving actions, component standards and customer machine compatibility before manufacturing release.</p>
            </figcaption>
          </figure>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {toolingEngineeringTopics.map((topic) => (
              <article className="overflow-hidden rounded-md border border-[var(--line)] bg-white" key={topic.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image alt={topic.alt} className="object-contain object-center" fill sizes="(min-width: 768px) 50vw, 100vw" src={topic.image} />
                </div>
                <div className="border-t border-[var(--line)] p-5 sm:p-6">
                  <p className="text-sm font-bold text-[var(--brand)]">{topic.number}</p>
                  <h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)]">{topic.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{topic.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-8 border-t border-[var(--line)] pt-8 lg:grid-cols-[minmax(0,60fr)_minmax(0,40fr)]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Key Tooling Decisions</p>
              <h3 className="mt-2 text-2xl font-bold text-[var(--brand-dark)]">Decisions Confirmed Before Mold Build</h3>
              <ul className="mt-5 grid gap-x-6 sm:grid-cols-2">
                {toolingDecisions.map((item) => <li className="border-b border-[var(--line)] py-3 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={item}>{item}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                <TextLink href="/services/dfm-engineering">DFM Engineering</TextLink>
                <TextLink href="/services/mold-trial-sampling-support">Mold Trial &amp; Validation</TextLink>
              </div>
            </div>
            <aside className="border-l-2 border-[var(--brand)] bg-white p-6">
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Need a tooling review before mold design starts?</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Send your CAD files, drawings, machine information and tooling requirements for engineering review.</p>
              <Link className="focus-ring mt-5 inline-flex rounded-sm font-bold text-[var(--brand)] hover:underline" href="/request-a-quote">Upload CAD for Tooling Review →</Link>
            </aside>
          </div>

          <div className="mt-9 border-t border-[var(--line)] pt-8">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Engineering to Toolroom</p>
            <p className="mt-3 max-w-4xl leading-7 text-[var(--muted)]">Once the mold design is approved, the released tooling data moves into steel preparation, CNC machining, EDM and wire EDM, fitting, polishing, assembly and mold trial.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><SectionHeader eyebrow="Mold Types" title="Injection Mold Types We Manufacture" body="Supported tooling types are matched to part geometry, resin, expected production volume and the customer&apos;s molding environment." /><div className="mt-9 grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-4">{moldTypes.map((type) => { const content = <><div className="relative aspect-[16/10] overflow-hidden bg-[#f4f6f8]"><Image alt={type.alt} className="object-contain object-center p-2" fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" src={type.image} /></div><div className="flex flex-1 items-center border-t border-[var(--line)] bg-white p-4"><h3 className="text-base font-bold leading-6 text-[var(--brand-dark)]">{type.title}</h3>{type.href ? <span className="ml-auto pl-3 font-bold text-[var(--brand)]" aria-hidden="true">→</span> : null}</div></>; return type.href ? <Link className="focus-ring group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-sm" href={type.href} key={type.title}>{content}</Link> : <article className="flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={type.title}>{content}</article>; })}</div><div className="mt-7"><TextLink href="/tooling-examples">View Injection Molds Overview</TextLink></div></div></section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page grid gap-10 lg:grid-cols-[minmax(0,54fr)_minmax(0,46fr)] lg:items-center lg:gap-14"><figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm"><Image alt="Injection mold assembly workshop with tooling workstations" className="object-cover object-center" fill sizes="(min-width: 1024px) 54vw, 100vw" src="/images/factory-workshop/injection-mold-assembly-workshop.webp" /></figure><div><SectionHeader eyebrow="Toolroom Capabilities" title="Toolroom Capabilities for Injection Mold Manufacturing" body="The moldmaking workflow connects machining, manual fitting and assembly so the approved design becomes a functioning production tool." /><ol className="mt-7 grid grid-cols-2 gap-x-6 gap-y-0" aria-label="Injection mold toolroom process">{toolroomCapabilities.map((item, index) => <li className="flex items-center gap-3 border-b border-[var(--line)] py-3 text-sm font-semibold text-[var(--brand-dark)]" key={item}><span className="text-xs font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div></div></section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><SectionHeader eyebrow="Manufacturing Equipment" title="Equipment Supporting Mold Manufacturing" body="Verified toolroom and inspection equipment supports mold-component machining, fitting, trial preparation and validation. Equipment is shown by process category without unverified model, quantity or accuracy claims." /><div className="mt-9 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">{equipment.map((item) => <article className="overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={item.title}><div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]"><Image alt={item.alt} className="object-cover object-center" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" src={item.image} /></div><div className="p-5"><h3 className="text-lg font-bold text-[var(--brand-dark)]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p></div></article>)}</div></div></section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page"><SectionHeader eyebrow="Mold Manufacturing Process" title="How an Injection Mold Is Manufactured" body="Ten documented stages connect early engineering decisions with mold build, validation and export delivery." /><ol className="mt-9 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">{processStages.map((stage, index) => <li className="min-h-52 bg-white p-5" key={stage.title}><span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 text-lg font-bold leading-6 text-[var(--brand-dark)]">{stage.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{stage.body}</p></li>)}</ol></div></section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page grid gap-12 xl:grid-cols-2 xl:gap-16"><div><SectionHeader eyebrow="Mold Standards & Build Options" title="Export Tooling Standards and Build Options" body="Each tool is reviewed against the customer&apos;s approved mold specification, receiving machine and maintenance requirements." /><div className="mt-7 grid gap-x-6 sm:grid-cols-2">{standards.map((item) => <div className="border-b border-[var(--line)] py-3 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={item}>{item}</div>)}</div></div><div className="border-l-0 border-[var(--line)] xl:border-l xl:pl-16"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Complex Tooling Features</p><h3 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)]">Mechanisms Matched to Part and Production Requirements</h3><p className="mt-4 leading-7 text-[var(--muted)]">Complex mold features are selected only where the part geometry, resin, production volume and customer equipment justify them.</p><ul className="mt-7 flex flex-wrap gap-2.5">{complexFeatures.map((item) => <li className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--brand-dark)]" key={item}>{item}</li>)}</ul></div></div></section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page grid gap-10 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:items-center lg:gap-14"><div><SectionHeader eyebrow="Mold Trial & Validation" title="Mold Trial, Correction and Approval" body="Trials connect mold performance, process conditions, sample quality and customer feedback before export release." /><div className="mt-7 grid gap-x-6 sm:grid-cols-2">{trialSteps.map((item, index) => <div className="flex items-center gap-3 border-b border-[var(--line)] py-3 text-sm font-semibold text-[var(--brand-dark)]" key={item}><span className="text-xs font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>{item}</div>)}</div><div className="mt-6"><TextLink href="/services/mold-trial-sampling-support">View Mold Trial & Validation</TextLink></div></div><figure className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm"><Image alt="Injection mold trial before customer approval" className="object-cover object-center" fill sizes="(min-width: 1024px) 54vw, 100vw" src="/images/process/export-delivery-production-support-molding.png" /></figure></div></section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page grid gap-10 lg:grid-cols-[minmax(0,56fr)_minmax(0,44fr)] lg:items-center lg:gap-14"><figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm"><Image alt="Export injection mold tooling documentation and validation package" className="object-contain object-center p-3" fill sizes="(min-width: 1024px) 56vw, 100vw" src="/images/documentation/tooling-documentation-package.png" /></figure><div><SectionHeader eyebrow="Quality & Documentation" title="Tooling Inspection and Documentation Before Export" body="Concise tooling records help overseas teams review approval status, prepare for installation and maintain the mold after delivery." /><div className="mt-7 grid gap-x-6 sm:grid-cols-2">{documentationItems.map((item) => <div className="border-b border-[var(--line)] py-3 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={item}>{item}</div>)}</div><div className="mt-6"><TextLink href="/company/quality-documentation">View Quality & Documentation</TextLink></div></div></div></section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><SectionHeader eyebrow="Real Tooling Projects" title="Injection Mold Manufacturing Gallery" body="Real Arktech tooling, toolroom, mold trial and inspection images provide practical evidence of the manufacturing workflow." /><div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{toolingGallery.map((item) => <figure className="group overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={item.title}><div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-soft)]"><Image alt={item.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.02]" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" src={item.image} /></div><figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm font-bold text-[var(--brand-dark)]">{item.title}</figcaption></figure>)}</div></div></section>

      <section className="bg-white py-14 sm:py-16"><div className="container-page"><SectionHeader eyebrow="Who We Support" title="Export Tooling for Product and Molding Companies" /><div className="mt-8 grid gap-5 lg:grid-cols-3">{audiences.map((audience, index) => <article className="border-t-2 border-[var(--brand)] bg-[var(--surface-soft)] p-5" key={audience.title}><span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 text-sm font-bold uppercase tracking-[0.08em] text-[var(--brand-dark)]">{audience.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{audience.body}</p></article>)}</div><div className="mt-12 border-t border-[var(--line)] pt-10"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Related Capabilities</p><h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]">Supporting Engineering, Trial and Production Services</h3><nav aria-label="Related injection mold manufacturing capabilities" className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{relatedCapabilities.map((item) => <Link className="focus-ring flex min-h-16 items-center justify-between rounded-sm border border-[var(--line)] bg-white px-4 py-3 text-sm font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href={item.href} key={item.href}><span>{item.label}</span><span aria-hidden="true">→</span></Link>)}</nav></div></div></section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16"><div className="container-page"><SectionHeader eyebrow="FAQ" title="Export Injection Mold Manufacturing Questions" body="Practical answers for OEM teams, injection molders and sourcing engineers evaluating an export tooling partner." /><div className="mt-7 grid gap-3 lg:grid-cols-2">{faqs.map((faq) => <details className="group rounded-sm border border-[var(--line)] bg-white p-5" key={faq.question}><summary className="cursor-pointer font-bold leading-6 text-[var(--brand-dark)] marker:text-[var(--brand)]">{faq.question}</summary><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{faq.answer}</p></details>)}</div></div></section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20"><div className="container-page grid gap-8 lg:grid-cols-[minmax(0,56fr)_minmax(320px,44fr)] lg:items-center lg:gap-12"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Start Your Export Mold Project</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Start Your Export Injection Mold Project</h2><p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Send us your CAD files, drawings, material requirements, tooling standards and target production requirements. Our engineering team will review DFM, mold structure, manufacturing requirements and quotation details.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:min-w-[440px] lg:justify-self-end"><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link><Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link></div></div></section>
    </>
  );
}
