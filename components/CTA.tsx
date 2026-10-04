import Link from "next/link";
import { RfqForm } from "@/components/RfqForm";

type CTAProps = { variant?: "default" | "homepage" };

export function CTA({ variant = "default" }: CTAProps) {
  if (variant === "homepage") {
    return (
      <section className="border-t border-[var(--line)] bg-[#F6F8FA] py-16 sm:py-20">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">START YOUR RFQ</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Tell Us About Your Project</h2>
          <RfqForm source="Contact page RFQ" variant="contact" />
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,56fr)_minmax(320px,44fr)] lg:items-center lg:gap-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">ENGINEERING-LED RFQ SUPPORT</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Ready to start your next tooling or manufacturing project?</h2>
          <p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">Upload CAD files, drawings, material targets, expected volumes, surface requirements, and delivery region. Our engineering team will review your project and provide practical DFM feedback and quotation details.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[320px] lg:flex-col lg:justify-self-end">
          <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
          <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">Request Manufacturing Quote</Link>
        </div>
      </div>
    </section>
  );
}
