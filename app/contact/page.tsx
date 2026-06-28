import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Arktech Mold",
  description:
    "Contact Arktech Mold for export tooling, plastic injection molding, die casting molds, CNC machined metal parts, component manufacturing, and DFM review."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk with an ISO-certified plastic tooling and molding team."
        body="Send project details, drawings, and commercial requirements. Arktech Mold supports OEMs and injection molders across Europe and North America from Shenzhen, China."
      />
      <section className="py-14">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Email</h2>
            <p className="mt-3 text-[var(--muted)]">{site.email}</p>
          </div>
          <div className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Phone</h2>
            <p className="mt-3 text-[var(--muted)]">{site.phone}</p>
          </div>
          <div className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Certifications</h2>
            <p className="mt-3 text-[var(--muted)]">{site.company.certifications.join(" / ")}</p>
          </div>
          <div className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">Next step</h2>
            <Link className="mt-3 inline-flex font-bold text-[var(--brand-dark)]" href="/request-a-quote">
              Send an RFQ
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article className="rounded-sm border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Shenzhen Office</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">{site.company.headOffice}</p>
          </article>
          <article className="rounded-sm border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Manufacturing Address</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">{site.company.factoryAddress}</p>
          </article>
        </div>
      </section>
    </>
  );
}
