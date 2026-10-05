"use client";

import { useState } from "react";

type TemporaryEmailRfqProps = {
  email: string;
};

export function TemporaryEmailRfq({ email }: TemporaryEmailRfqProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent("Injection Mold / Molding RFQ")}`;

  async function copyEmailAddress() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <section className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8" aria-labelledby="email-rfq-heading">
      <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Email Inquiry</p>
      <h2 className="mt-2 text-2xl font-bold text-[var(--brand-dark)] sm:text-3xl" id="email-rfq-heading">Email Your Project Requirements</h2>
      <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
        Please email your CAD files, drawings, material requirements, quantities and project timeline to our team for review.
      </p>

      <div className="mt-7 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">Business inquiry email</p>
        <a className="focus-ring mt-2 block w-fit break-all rounded-sm text-lg font-bold text-[var(--brand-dark)] hover:text-[var(--brand)] sm:text-xl" href={mailtoHref}>
          {email}
        </a>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 py-3 text-center font-bold text-white transition hover:bg-[var(--brand-hover)]" href={mailtoHref}>
            Email Your RFQ
          </a>
          <button className="focus-ring min-h-12 rounded-sm border border-[var(--brand-dark)] bg-white px-5 py-3 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--surface-soft)]" onClick={copyEmailAddress} type="button">
            Copy Email Address
          </button>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--muted)]">Attach your files in your email application before sending.</p>
        <p aria-live="polite" className="mt-2 min-h-5 text-sm font-semibold text-[var(--brand-dark)]" role="status">
          {copyStatus === "copied" ? "Email address copied." : copyStatus === "error" ? `Copy failed. Please use ${email}.` : ""}
        </p>
      </div>
    </section>
  );
}
