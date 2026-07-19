import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <main className="container-page py-16">
      <h1 className="text-4xl font-bold text-[var(--brand-dark)]">Privacy Policy</h1>
      <div className="mt-6 max-w-3xl space-y-4 leading-7 text-[var(--muted)]">
        <p>Arktech uses contact details, RFQ information, drawings, and uploaded project files only to respond to inquiries, evaluate manufacturability, prepare quotations, and support approved manufacturing programs.</p>
        <p>Project files are handled as confidential engineering information. NDA-based review is available upon request. We do not sell customer contact or project information.</p>
        <p>For privacy or file-handling questions, contact <a className="text-[var(--brand)] hover:underline" href="mailto:Engineering@arktechmold.com">Engineering@arktechmold.com</a>.</p>
      </div>
    </main>
  );
}
