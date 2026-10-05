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
        <p>This website uses storage required for site operation. On the production Arktech domain, Google Analytics 4 is available to help us understand page visits and inquiry actions, but it remains disabled until you explicitly accept analytics.</p>
        <p>Your analytics choice is stored in your browser. When analytics is accepted, Google Analytics may set first-party cookies such as <code>_ga</code> to distinguish visits. Declining analytics prevents the Google Analytics script from loading.</p>
        <p>Analytics events contain page paths and general interaction categories. Arktech does not send RFQ names, email addresses, telephone numbers, form contents, CAD filenames or uploaded-file URLs to Google Analytics.</p>
        <p>You can revisit Analytics Preferences from the website footer or remove stored choices and analytics cookies through your browser settings.</p>
      </div>
    </div>
  );
}
