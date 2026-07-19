import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Injection Mold Manufacturing | Export Tooling | Arktech Mold",
  description:
    "Explore export injection mold manufacturing capabilities from Arktech Mold, including complex, multi-cavity, insert, unscrewing, two-shot and prototype injection molds.",
  keywords: ["injection mold manufacturer", "injection mold manufacturing", "export tooling"]
};

const moldTypes = [
  { title: "Complex Injection Molds", href: "/injection-molds/complex-injection-molds" },
  { title: "Multi-Cavity Injection Molds", href: "/injection-molds/multi-cavity-molds" },
  { title: "Insert Molding", href: "/injection-molds/insert-molding" },
  { title: "Unscrewing Molds", href: "/injection-molds/unscrewing-molds" },
  { title: "Two-Shot / 2K Molds", href: "/injection-molds/2k-molds" },
  { title: "Prototype Injection Molds", href: "/injection-molds/prototype-molds" }
];

export default function InjectionMoldsPage() {
  return (
    <>
      <PageHero
        eyebrow="Injection Molds"
        title="Injection Mold Manufacturing"
        body="Arktech Mold provides export injection mold manufacturing solutions including complex tooling, multi-cavity molds, insert molding, unscrewing molds and two-shot injection molds for global OEM customers."
      />
      <section className="py-14">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)]">Core injection mold capabilities</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
            Review our export tooling capabilities and select the injection mold category that best matches your product and production requirements.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moldTypes.map((item) => (
              <Link
                className="focus-ring group rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-md"
                href={item.href}
                key={item.title}
              >
                <h3 className="text-xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{item.title}</h3>
                <span className="mt-5 inline-flex font-bold text-[var(--brand)]">Explore capability →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
