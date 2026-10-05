import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { QualityRecordPreview } from "@/components/QualityRecordPreview";

const canonicalUrl = "https://www.arktechmold.com/company/project-management";

export const metadata: Metadata = {
  title: { absolute: "Injection Mold Project Management & Coordination | Arktech" },
  description:
    "See how Arktech coordinates injection mold projects through design approvals, progress updates, change tracking, trial follow-up and export handover.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Injection Mold Project Management & Coordination | Arktech",
    description:
      "See how Arktech coordinates injection mold projects through design approvals, progress updates, change tracking, trial follow-up and export handover.",
    type: "website",
    url: canonicalUrl
  }
};

const coordinationTopics = [
  {
    title: "Requirements & Responsibilities",
    body: "Confirm the project scope, required information and communication responsibilities according to the project arrangement."
  },
  {
    title: "Engineering Confirmation",
    body: "Coordinate DFM findings, design questions and customer feedback before the relevant tooling decisions are released."
  },
  {
    title: "Customer Approval Points",
    body: "Confirm mold drawings, agreed changes, sample feedback and handover requirements at the applicable project milestones."
  },
  {
    title: "Project Updates",
    body: "Share current progress, open actions and upcoming decisions at the agreed reporting frequency."
  }
];

const milestones = [
  {
    number: "01",
    title: "Requirements & Engineering Review",
    body: "Confirm part data, tooling requirements and engineering questions."
  },
  {
    number: "02",
    title: "Mold Design Approval",
    body: "Coordinate drawing review and the required customer confirmation before manufacturing release."
  },
  {
    number: "03",
    title: "Manufacturing Progress",
    body: "Track the agreed build milestones, component status and manufacturing activities."
  },
  {
    number: "04",
    title: "Mold Trial & Corrections",
    body: "Coordinate trial timing, findings, customer feedback and corrective actions when required."
  },
  {
    number: "05",
    title: "Approval & Open-Item Review",
    body: "Review sample confirmation and outstanding actions before the next agreed project step."
  },
  {
    number: "06",
    title: "Documentation & Handover",
    body: "Coordinate the agreed tooling records, spare components, packing and delivery information."
  }
];

const progressGroups = [
  { title: "Schedule & Milestones", body: "Current timing and upcoming project decisions." },
  { title: "Build Progress", body: "Relevant manufacturing status and progress photos." },
  { title: "Open Actions", body: "Outstanding questions, required responses and follow-up status." },
  { title: "Next Step", body: "Upcoming approval, trial or handover activity." }
];

const changeItems = [
  { title: "Revision Status", body: "Identify the applicable DFM, drawing and design revision." },
  { title: "Open Issues", body: "Record unresolved technical questions and required decisions." },
  { title: "Action Follow-Up", body: "Track responsibility, target timing and completion status." },
  {
    title: "Schedule Impact",
    body: "Communicate identified timing impacts and revised plans when changes or project risks require review."
  }
];

const faqs = [
  {
    question: "How are injection mold project milestones communicated?",
    answer:
      "Project updates communicate the current status, open actions and upcoming decisions at the reporting frequency agreed for the project."
  },
  {
    question: "When is customer approval required?",
    answer:
      "Approval may be required for applicable engineering findings, mold drawings, agreed changes and samples. The exact confirmation points depend on the project scope."
  },
  {
    question: "How are design changes and mold modifications tracked?",
    answer:
      "The relevant revision, required action and customer confirmation are recorded so the team can work from the applicable approved information."
  },
  {
    question: "How are mold trial findings followed up?",
    answer:
      "Trial findings, open actions, required corrections and customer feedback are followed through the agreed approval process."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arktechmold.com/" },
    { "@type": "ListItem", position: 2, name: "Company", item: "https://www.arktechmold.com/company" },
    { "@type": "ListItem", position: 3, name: "Project Management", item: canonicalUrl }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer }
  }))
};

function SectionHeading({ eyebrow, title, body, id }: { eyebrow: string; title: string; body: string; id?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl" id={id}>{title}</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{body}</p>
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="focus-ring inline-flex min-h-11 items-center rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)] hover:underline" href={href}>
      {children}<span aria-hidden="true" className="ml-2">→</span>
    </Link>
  );
}

export default function ProjectManagementPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replaceAll("<", "\\u003c") }} type="application/ld+json" />
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replaceAll("<", "\\u003c") }} type="application/ld+json" />

      <section className="border-b border-[var(--line)] bg-[var(--surface-soft)]">
        <div className="container-page py-5">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
            <Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/company">Company</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="font-semibold text-[var(--brand-dark)]">Project Management</span>
          </nav>
        </div>
        <div className="container-page grid gap-9 pb-12 sm:pb-14 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center lg:gap-12 lg:pb-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">PROJECT MANAGEMENT</p>
            <h1 className="mt-4 max-w-[720px] text-4xl font-bold leading-[1.05] tracking-tight text-[var(--brand-dark)] sm:text-5xl lg:text-[3.25rem]">Export Mold Project Management</h1>
            <p className="mt-5 max-w-[44rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">Follow your injection mold project through clear milestones, design approvals, progress updates and open-action tracking. Arktech coordinates engineering feedback, trial approval and tooling handover with your team.</p>
            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link className="focus-ring inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Discuss Your Tooling Project</Link>
              <Link className="focus-ring inline-flex min-h-11 shrink-0 items-center rounded-sm font-bold text-[var(--brand)] hover:underline" href="#project-milestones">View Project Milestones<span aria-hidden="true" className="ml-2">↓</span></Link>
            </div>
          </div>
          <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
            <div className="relative aspect-[16/11]">
              <Image alt="Open injection mold showing two matched tooling halves" className="object-cover object-center" fill priority sizes="(min-width: 1024px) 52vw, 100vw" src="/images/process/tooling-manufacturing-plan-mold.png" />
            </div>
            <figcaption className="border-t border-[var(--line)] px-5 py-3 text-sm leading-6 text-[var(--muted)]">Injection mold tooling prepared for project manufacturing and review.</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="container-page grid gap-9 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:items-start lg:gap-12">
          <div>
            <SectionHeading eyebrow="PROJECT COORDINATION" title="Project Coordination & Customer Confirmation" body="Project requirements, technical questions, approvals and open actions are coordinated with your team so the current status and next decisions remain clear." />
            <div className="mt-5"><TextLink href="/injection-molding-engineering">Explore Injection Molding Engineering</TextLink></div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {coordinationTopics.map((topic) => (
              <article className="bg-white p-5 sm:p-6" key={topic.title}>
                <h3 className="text-lg font-bold text-[var(--brand-dark)]">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)] sm:text-base">{topic.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="project-milestones-heading" className="scroll-mt-24 bg-[var(--surface-soft)] py-12 sm:py-14" id="project-milestones">
        <div className="container-page">
          <SectionHeading eyebrow="PROJECT MILESTONES" id="project-milestones-heading" title="Project Milestones from Requirements to Handover" body="The following is a typical tooling workflow. Approval steps and reporting arrangements depend on project requirements." />
          <ol className="mt-8 max-w-5xl border-y border-[var(--line)]">
            {milestones.map((stage) => (
              <li className="grid gap-2 border-b border-[var(--line)] py-5 last:border-b-0 sm:grid-cols-[64px_minmax(210px,0.72fr)_minmax(0,1.28fr)] sm:items-start sm:gap-5" key={stage.number}>
                <span className="text-xl font-bold text-[var(--brand)]">{stage.number}</span>
                <h3 className="text-lg font-bold leading-7 text-[var(--brand-dark)]">{stage.title}</h3>
                <p className="text-sm leading-6 text-[var(--muted)] sm:text-base">{stage.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex max-w-5xl flex-col gap-4 border-l-2 border-[var(--brand)] pl-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-[var(--muted)]">Progress reporting, revision control and action tracking run across the relevant project stages.</p>
            <TextLink href="/injection-mold-manufacturing">Explore Injection Mold Manufacturing</TextLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="container-page grid gap-9 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:items-center lg:gap-12">
          <QualityRecordPreview alt="Tooling progress report with a project schedule and manufacturing photos" caption="Example project schedule and tooling progress update." height={700} sizes="(min-width: 1024px) 52vw, 100vw" src="/images/project-management/weekly-tooling-progress-report.webp" width={780} />
          <div>
            <SectionHeading eyebrow="PROGRESS VISIBILITY" title="Tooling Progress Updates for Overseas Customers" body="Progress updates help your team review current tooling status, open questions and the next milestone without being onsite." />
            <dl className="mt-7 grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {progressGroups.map((item) => (
                <div className="bg-[var(--surface-soft)] p-4 sm:p-5" key={item.title}>
                  <dt className="font-bold text-[var(--brand-dark)]">{item.title}</dt>
                  <dd className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">Update content and frequency are agreed around the project. The visible example retains its factual “Weekly Report” title without defining a universal reporting schedule.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-12 sm:py-14">
        <div className="container-page">
          <SectionHeading eyebrow="CHANGES & OPEN ACTIONS" title="Engineering Changes & Open-Action Tracking" body="Design revisions, trial findings and customer requests can affect tooling work. The project team tracks the relevant information and confirms required actions with the customer." />
          <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] md:grid-cols-4">
            {changeItems.map((item) => (
              <article className="bg-white p-5" key={item.title}>
                <h3 className="font-bold text-[var(--brand-dark)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 max-w-4xl border-l-2 border-[var(--brand)] pl-5 text-sm leading-6 text-[var(--muted)]">Where a customer-requested modification may affect the agreed scope, identified timing and cost implications can be reviewed before the change proceeds.</p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14">
        <div className="container-page">
          <SectionHeading eyebrow="APPROVAL & HANDOVER" title="Trial Approval & Tooling Handover Coordination" body="Trial follow-up and handover requirements are coordinated around the applicable customer decisions and the agreed tooling scope." />
          <div className="mt-8 grid overflow-hidden rounded-md border border-[var(--line)] lg:grid-cols-2">
            <article className="p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">PART A</p>
              <h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)]">Trial & Customer Feedback</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">Coordinate trial timing, sample submission, customer comments and correction follow-up through the agreed approval process.</p>
              <div className="mt-5"><TextLink href="/injection-molds/mold-trial-validation">Explore Mold Trial & Validation</TextLink></div>
            </article>
            <article className="border-t border-[var(--line)] p-5 sm:p-7 lg:border-l lg:border-t-0">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">PART B</p>
              <h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)]">Documentation & Delivery</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">Coordinate the agreed tooling documents, spare-part information, packing preparation and delivery requirements before handover.</p>
              <div className="mt-5 flex flex-col items-start gap-1">
                <TextLink href="/injection-molds/tooling-documentation">Explore Tooling Documentation</TextLink>
                <TextLink href="/injection-molds/export-tooling-transfer">Explore Export Tooling & Mold Transfer</TextLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-12 sm:py-14">
        <div className="container-page">
          <SectionHeading eyebrow="PROJECT MANAGEMENT FAQ" title="Tooling Project Coordination Questions" body="Project controls are adapted to the agreed tooling scope, approval points and communication arrangement." />
          <div className="mt-8 max-w-4xl divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((item) => (
              <details className="group" key={item.question}>
                <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 rounded-sm py-4 font-bold text-[var(--brand-dark)] marker:hidden">
                  <span>{item.question}</span><span aria-hidden="true" className="text-xl text-[var(--brand)] transition group-open:rotate-45 motion-reduce:transition-none">+</span>
                </summary>
                <p className="max-w-3xl pb-5 pr-10 text-sm leading-7 text-[var(--muted)] sm:text-base">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-14">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">DISCUSS YOUR TOOLING PROJECT</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Plan Your Next Injection Mold Project</h2>
            <p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Share your CAD files, material, tooling requirements, target milestones and delivery location so we can review the project scope and quotation requirements.</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <Link className="focus-ring inline-flex min-h-14 w-full items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)] sm:w-auto" href="/request-a-quote">Request Tooling Quote</Link>
            <Link className="focus-ring inline-flex min-h-11 items-center rounded-sm font-bold text-[var(--brand)] hover:underline" href="/request-a-quote">Upload CAD for DFM Review<span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
