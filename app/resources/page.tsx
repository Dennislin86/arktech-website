import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Injection Mold Resources | DFM & Mold Design Guides | Arktech Mold",
  description:
    "Injection mold resources for engineering and sourcing teams, including case studies, DFM guidance, mold design guidelines, material selection information, FAQs and articles.",
  keywords: ["injection mold resources", "DFM guide", "mold design guidelines", "injection mold blog"]
};

const resources = [
  { title: "Case Studies", href: "/resources/case-studies" },
  { title: "DFM Guide", href: "/resources/dfm-guide" },
  { title: "Mold Design Guidelines", href: "/resources/mold-design-guidelines" },
  { title: "Material Selection Guide", href: "/resources/material-selection-guide" },
  { title: "FAQ", href: "/resources/faq" },
  { title: "Injection Mold Blog", href: "/blog" }
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Injection Mold Resources"
        body="Explore practical injection mold resources for product engineers, tooling buyers and sourcing teams planning DFM reviews, mold design decisions and plastic injection molding programs."
      />
      <section className="py-14">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)]">Engineering and tooling knowledge</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
            Use these references to prepare project data, understand tooling considerations and make more informed injection mold sourcing decisions.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => (
              <Link
                className="focus-ring group rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-md"
                href={item.href}
                key={item.title}
              >
                <h3 className="text-xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{item.title}</h3>
                <span className="mt-5 inline-flex font-bold text-[var(--brand)]">Open resource →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
