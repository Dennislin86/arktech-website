import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of Arktech Mold website content and project-specific engineering, quotation and manufacturing information.",
  alternates: { canonical: "/terms-of-use" }
};

export default function TermsOfUsePage() {
  return (
    <main className="container-page py-16">
      <h1 className="internal-page-title text-[var(--brand-dark)]">Terms of Use</h1>
      <div className="mt-6 max-w-3xl space-y-4 leading-7 text-[var(--muted)]">
        <p>Website content is provided for general information about Arktech engineering, tooling, and manufacturing services. Project feasibility, pricing, lead time, and production scope require formal engineering review and written quotation.</p>
        <p>Technical content may not be copied or represented as project-specific advice without written approval.</p>
      </div>
    </main>
  );
}
