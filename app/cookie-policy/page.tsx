import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information about essential and limited analytics cookies that may be used on the Arktech Mold website.",
  alternates: { canonical: "/cookie-policy" }
};

export default function CookiePolicyPage() {
  return (
    <div className="container-page py-16">
      <h1 className="internal-page-title text-[var(--brand-dark)]">Cookie Policy</h1>
      <div className="mt-6 max-w-3xl space-y-4 leading-7 text-[var(--muted)]">
        <p>This website may use essential cookies required for site operation and limited analytics cookies used to understand page performance and improve navigation.</p>
        <p>You can control or remove cookies through your browser settings. Disabling essential cookies may affect some website functions.</p>
      </div>
    </div>
  );
}
