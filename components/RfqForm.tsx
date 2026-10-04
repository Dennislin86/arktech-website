"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type RfqFormProps = {
  variant: "full" | "contact" | "compact";
  source: string;
};

type SubmissionState = {
  kind: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialState: SubmissionState = { kind: "idle", message: "" };

const materials = ["ABS", "PC", "PP", "Nylon", "Aluminum", "Steel"];
const volumes = ["Under 1,000 / year", "1,000–10,000 / year", "10,000–100,000 / year", "100,000+ / year"];
const processes = ["Injection Molding", "CNC", "Die Casting", "Tooling Only"];
const markets = ["Europe", "North America", "Other"];
const stages = ["Prototype", "Pilot", "Mass Production"];

const inputClass =
  "min-h-12 w-full rounded-sm border border-[var(--line)] bg-white px-3 font-normal text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-red-100";

function Honeypot() {
  return (
    <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
      Website
      <input autoComplete="off" name="website" tabIndex={-1} type="text" />
    </label>
  );
}

function SubmissionMessage({ state }: { state: SubmissionState }) {
  if (state.kind === "idle" || state.kind === "submitting") return null;

  return (
    <p
      className={`mt-4 rounded-sm border px-4 py-3 text-sm font-semibold leading-6 ${
        state.kind === "success"
          ? "border-emerald-300 bg-emerald-50 text-emerald-900"
          : "border-red-300 bg-red-50 text-red-900"
      }`}
      role={state.kind === "error" ? "alert" : "status"}
    >
      {state.message}
    </p>
  );
}

function FilePicker({ compact = false }: { compact?: boolean }) {
  const [fileNames, setFileNames] = useState<string[]>([]);

  function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    setFileNames(Array.from(event.target.files ?? []).map((file) => file.name));
  }

  return (
    <label
      className={`relative flex cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed border-[var(--brand)] bg-[var(--accent-soft)] px-5 text-center transition hover:border-[var(--brand-hover)] hover:bg-red-50 ${
        compact ? "min-h-64" : "min-h-52"
      }`}
    >
      <span className={compact ? "text-xl font-bold text-[var(--brand-dark)]" : "text-lg font-bold text-[var(--brand-dark)]"}>
        {compact ? "Drag & Drop CAD Files" : "Drag and drop CAD or RFQ files here"}
      </span>
      <span className="mt-2 text-sm font-semibold leading-6 text-[var(--muted)]">
        {compact ? <>STEP / STP / IGES<br />PDF / DWG / ZIP</> : "or click to browse — multiple files supported"}
      </span>
      <span className="mt-4 rounded-sm bg-[var(--brand-dark)] px-4 py-2 text-sm font-bold text-white">Choose Files</span>
      <input
        accept=".step,.stp,.iges,.igs,.stl,.x_t,.x_b,.pdf,.dwg,.dxf,.zip,.rar,.7z"
        aria-label="Upload CAD and RFQ files"
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        multiple
        name="cad-files"
        onChange={handleFiles}
        type="file"
      />
      <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
        {fileNames.length > 0 ? `${fileNames.length} file${fileNames.length === 1 ? "" : "s"} selected · 4 MB total maximum` : "STEP, STP, IGES, STL, X_T, PDF, DWG, ZIP · 4 MB TOTAL MAX"}
      </span>
      {fileNames.length > 0 ? <span className="mt-2 max-w-full truncate text-xs text-[var(--muted)]">{fileNames.join(", ")}</span> : null}
    </label>
  );
}

export function RfqForm({ variant, source }: RfqFormProps) {
  const [state, setState] = useState<SubmissionState>(initialState);
  const [resetToken, setResetToken] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState({ kind: "submitting", message: "Submitting your RFQ securely…" });

    try {
      const formData = new FormData(form);
      formData.set("source", source);
      const response = await fetch("/api/rfq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      const payload = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.message || "Your RFQ could not be submitted. Please try again or email engineering@arktechmold.com.");
      }

      form.reset();
      setResetToken((current) => current + 1);
      setState({
        kind: "success",
        message: payload?.message || "Thank you. Your RFQ has been delivered to the Arktech engineering team."
      });
    } catch (error) {
      setState({
        kind: "error",
        message: error instanceof Error ? error.message : "Your RFQ could not be submitted. Please email engineering@arktechmold.com."
      });
    }
  }

  const submitting = state.kind === "submitting";

  if (variant === "compact") {
    return (
      <form action="/api/rfq" className="relative rounded-sm bg-white p-6 text-[var(--foreground)] shadow-xl" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        <Honeypot />
        <input name="source" type="hidden" value={source} />
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">Name<input required name="name" className={inputClass} /></label>
          <label className="grid gap-2 text-sm font-bold">Work Email<input required name="email" type="email" className={inputClass} /></label>
          <label className="grid gap-2 text-sm font-bold">Company<input name="company" className={inputClass} /></label>
          <label className="grid gap-2 text-sm font-bold">Annual Volume<input name="annual-volume" className={inputClass} /></label>
        </div>
        <label className="mt-4 grid gap-2 text-sm font-bold">Project summary<textarea required name="project-summary" className={`${inputClass} min-h-28 py-3`} /></label>
        <button className="mt-5 min-h-12 rounded-sm bg-[var(--brand)] px-5 font-bold text-white hover:brightness-90 disabled:cursor-wait disabled:opacity-70" disabled={submitting} type="submit">
          {submitting ? "Submitting…" : "Request RFQ"}
        </button>
        <SubmissionMessage state={state} />
      </form>
    );
  }

  if (variant === "contact") {
    return (
      <form action="/api/rfq" className="relative mt-8 grid overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm lg:grid-cols-2" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        <Honeypot />
        <input name="source" type="hidden" value={source} />
        <div className="border-b border-[var(--line)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <FilePicker compact key={`compact-files-${resetToken}`} />
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--brand-dark)]"><span aria-hidden="true" className="font-bold text-[var(--brand)]">✓</span>NDA available</p>
          <p className="mt-2 text-xs leading-5 text-[var(--muted)]">Files are reviewed only for DFM engineering and tooling quotation.</p>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
          <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)]">Name *<input className={inputClass} name="name" required type="text" /></label>
          <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)]">Company *<input className={inputClass} name="company" required type="text" /></label>
          <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)] sm:col-span-2">Business Email *<input className={inputClass} name="email" required type="email" /></label>
          <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)]">Country<input className={inputClass} name="country" type="text" /></label>
          <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)]">Project Type<select className={inputClass} defaultValue="" name="project-type"><option value="">Select project type</option><option>Export Injection Mold</option><option>Plastic Injection Molding</option><option>Mold Trial &amp; Validation</option><option>Tooling Spare Parts</option></select></label>
          <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)] sm:col-span-2">Annual Volume<select className={inputClass} defaultValue="" name="annual-volume"><option value="">Select annual volume</option>{volumes.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)] sm:col-span-2">Message<textarea className={`${inputClass} min-h-28 py-3`} name="message" /></label>
          <button className="min-h-12 rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)] disabled:cursor-wait disabled:opacity-70 sm:col-span-2" disabled={submitting} type="submit">{submitting ? "Submitting…" : "Submit RFQ"}</button>
          <div className="sm:col-span-2"><SubmissionMessage state={state} /></div>
        </div>
      </form>
    );
  }

  return (
    <form action="/api/rfq" className="relative rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm sm:p-8" encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
      <Honeypot />
      <input name="source" type="hidden" value={source} />
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Secure Project Upload</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Start Your DFM Review</h2>
        <p className="mt-3 leading-7 text-[var(--muted)]">Add your CAD files and the project information our engineers need to provide useful feedback and an accurate quotation.</p>
      </div>
      <div className="mt-7"><FilePicker key={`files-${resetToken}`} /></div>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        {[['Full name', 'name', 'text'], ['Company', 'company', 'text'], ['Work email', 'email', 'email'], ['Phone / WhatsApp', 'phone', 'tel']].map(([label, name, type]) => (
          <label className="grid gap-2 text-sm font-bold" key={name}>{label}<input className={inputClass} name={name} required={name === "name" || name === "email"} type={type} /></label>
        ))}
        <label className="grid gap-2 text-sm font-bold">Material selection<select className={inputClass} defaultValue="" name="material" required><option disabled value="">Select material</option>{materials.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-bold">Annual volume<select className={inputClass} defaultValue="" name="annual-volume" required><option disabled value="">Select annual volume</option>{volumes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-bold">Manufacturing process<select className={inputClass} defaultValue="" name="manufacturing-process" required><option disabled value="">Select process</option>{processes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-bold">Target market<select className={inputClass} defaultValue="" name="target-market" required><option disabled value="">Select target market</option>{markets.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-bold">Project stage<select className={inputClass} defaultValue="" name="project-stage" required><option disabled value="">Select project stage</option>{stages.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="grid gap-2 text-sm font-bold">Target lead time<input className={inputClass} name="target-lead-time" placeholder="Required sample or delivery date" type="text" /></label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold">Project notes<textarea className={`${inputClass} min-h-36 py-3`} name="notes" placeholder="Include tolerances, surface finish, tooling requirements, current sourcing issues, or other project details." /></label>
      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[var(--muted)]"><input className="mt-1 size-4 accent-[var(--brand)]" name="nda" type="checkbox" />Request an NDA before detailed engineering review.</label>
      <button className="mt-6 min-h-13 w-full rounded-sm bg-[var(--brand)] px-6 py-3 font-bold text-white shadow-sm transition hover:brightness-90 disabled:cursor-wait disabled:opacity-70 sm:w-auto" disabled={submitting} type="submit">{submitting ? "Submitting…" : "Start DFM Review"}</button>
      <SubmissionMessage state={state} />
      <p className="mt-4 text-sm text-[var(--muted)]">Your files are used only for engineering review and quotation.</p>
    </form>
  );
}
