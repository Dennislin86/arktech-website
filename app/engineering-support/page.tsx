import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Injection Mold Engineering Support | DFM & Mold Design | Arktech Mold",
  description:
    "Injection mold engineering support for global OEM programs, including co-design, DFM engineering, mold design, Moldflow analysis and project management.",
  keywords: ["DFM engineering", "mold design", "Moldflow analysis", "injection mold engineering"]
};

const engineeringCapabilities = [
  { title: "Co-design Support", href: "/engineering-support/co-design" },
  { title: "DFM Analysis", href: "/engineering-support/dfm-analysis" },
  { title: "Mold Design", href: "/engineering-support/mold-design" },
  { title: "Moldflow Analysis", href: "/engineering-support/moldflow-analysis" },
  { title: "Project Management", href: "/engineering-support/project-management" }
];

export default function EngineeringSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Support"
        title="Injection Mold Engineering Support"
        body="Arktech Mold supports injection mold programs with co-design, DFM engineering, mold design, Moldflow analysis and structured project management before and during tooling production."
      />
      <section className="py-14">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)]">Engineering support before and during tooling</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
            Explore the engineering services that help identify molding risks, align tooling decisions and support reliable injection mold manufacturing.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringCapabilities.map((item) => (
              <Link
                className="focus-ring group rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)] hover:shadow-md"
                href={item.href}
                key={item.title}
              >
                <h3 className="text-xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{item.title}</h3>
                <span className="mt-5 inline-flex font-bold text-[var(--brand)]">Explore support →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
