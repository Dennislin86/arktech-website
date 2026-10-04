import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

// Vercel Functions reject request payloads above 4.5 MB before this handler runs.
// Keep multipart uploads below that platform ceiling until direct-to-storage uploads are configured.
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
const MAX_REQUEST_BYTES = Math.floor(4.4 * 1024 * 1024);
const MAX_FILES = 6;
const allowedExtensions = new Set(["step", "stp", "iges", "igs", "stl", "x_t", "x_b", "pdf", "dwg", "dxf", "zip", "rar", "7z"]);

const fieldLabels: Array<[string, string]> = [
  ["source", "Form source"],
  ["name", "Name"],
  ["company", "Company"],
  ["email", "Email"],
  ["phone", "Phone / WhatsApp"],
  ["country", "Country"],
  ["project-type", "Project type"],
  ["manufacturing-process", "Manufacturing process"],
  ["material", "Material"],
  ["annual-volume", "Annual volume"],
  ["target-market", "Target market"],
  ["project-stage", "Project stage"],
  ["target-lead-time", "Target lead time"],
  ["nda", "NDA requested"],
  ["notes", "Project notes"],
  ["message", "Message"],
  ["project-summary", "Project summary"]
];

function value(formData: FormData, key: string, maxLength = 4000) {
  const raw = formData.get(key);
  return typeof raw === "string" ? raw.trim().slice(0, maxLength) : "";
}

function extension(fileName: string) {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

function safeSubjectPart(input: string) {
  return input.replace(/[\r\n]+/g, " ").trim().slice(0, 80);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ message: "The submitted request exceeds the 4 MB upload limit." }, { status: 413 });
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json({ message: "Cross-site RFQ submissions are not accepted." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ message: "The request origin is invalid." }, { status: 403 });
    }
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ message: "The submitted form data could not be read." }, { status: 400 });
  }

  if (value(formData, "website", 200)) {
    return NextResponse.json({ message: "Thank you. Your request has been received." });
  }

  const name = value(formData, "name", 120);
  const email = value(formData, "email", 254);
  const company = value(formData, "company", 160);

  if (!name || !email) {
    return NextResponse.json({ message: "Name and work email are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Enter a valid work email address." }, { status: 400 });
  }

  const files = formData.getAll("cad-files").filter((item): item is File => item instanceof File && item.size > 0);
  if (files.length > MAX_FILES) {
    return NextResponse.json({ message: `Upload no more than ${MAX_FILES} files at a time.` }, { status: 400 });
  }

  let totalBytes = 0;
  for (const file of files) {
    totalBytes += file.size;
    if (!allowedExtensions.has(extension(file.name))) {
      return NextResponse.json({ message: `The file type for “${file.name}” is not supported.` }, { status: 400 });
    }
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json({ message: `“${file.name}” exceeds the 4 MB upload limit.` }, { status: 413 });
    }
  }
  if (totalBytes > MAX_TOTAL_BYTES) {
    return NextResponse.json({ message: "The combined upload exceeds the 4 MB limit." }, { status: 413 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RFQ_FROM_EMAIL;
  const recipients = (process.env.RFQ_TO_EMAIL || site.email).split(",").map((item) => item.trim()).filter(Boolean);

  if (!apiKey || !from || recipients.length === 0) {
    console.error("RFQ delivery is not configured. RESEND_API_KEY and RFQ_FROM_EMAIL are required.");
    return NextResponse.json(
      { message: `Online RFQ delivery is temporarily unavailable. Please email ${site.email}.` },
      { status: 503 }
    );
  }

  const details = fieldLabels
    .map(([key, label]) => {
      const entry = key === "nda" ? (formData.get(key) ? "Yes" : "No") : value(formData, key);
      return entry ? `${label}: ${entry}` : "";
    })
    .filter(Boolean);
  const fileSummary = files.length ? files.map((file) => `${file.name} (${Math.ceil(file.size / 1024)} KB)`).join(", ") : "No files attached";
  const text = [
    "New RFQ submitted through ArktechMold.com",
    "",
    ...details,
    `Files: ${fileSummary}`,
    "",
    "Reply directly to the customer using the email address above."
  ].join("\n");

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name.replace(/[\\/]/g, "-"),
      content: Buffer.from(await file.arrayBuffer()).toString("base64")
    }))
  );

  try {
    const providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: recipients,
        reply_to: email,
        subject: `New Arktech RFQ — ${safeSubjectPart(company || name)}`,
        text,
        attachments
      }),
      signal: AbortSignal.timeout(20000)
    });

    if (!providerResponse.ok) {
      const providerError = await providerResponse.text();
      console.error(`RFQ delivery failed (${providerResponse.status}): ${providerError.slice(0, 500)}`);
      return NextResponse.json({ message: `Your RFQ could not be delivered. Please email ${site.email}.` }, { status: 502 });
    }
  } catch (error) {
    console.error("RFQ delivery request failed:", error);
    return NextResponse.json({ message: `Your RFQ could not be delivered. Please email ${site.email}.` }, { status: 502 });
  }

  return NextResponse.json({ message: "Thank you. Your RFQ has been delivered to the Arktech engineering team." });
}
