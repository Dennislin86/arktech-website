import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--brand-dark)] text-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#cbd5cf]">
            Plastic tooling and molding partner supporting OEM product companies, engineers, sourcing teams, and injection molders across Europe and North America.
          </p>
          <p className="mt-3 text-sm leading-6 text-[#dce7e1]">{site.company.legalName}</p>
          <p className="text-sm leading-6 text-[#dce7e1]">{site.company.certifications.join(" / ")}</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#f4c7ca]">Company</p>
          <div className="mt-3 grid gap-2 text-sm text-[#dce7e1]">
            {site.nav.slice(0, 5).map((item) => (
              <Link key={item.href} className="hover:text-white" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#f4c7ca]">RFQ Support</p>
          <p className="mt-3 text-sm leading-6 text-[#dce7e1]">{site.email}</p>
          <p className="text-sm leading-6 text-[#dce7e1]">{site.phone}</p>
          <p className="text-sm leading-6 text-[#dce7e1]">DFM feedback, tooling quote, molding and machining review, sampling plan, and export packaging options.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="container-page text-sm text-[#b8c4bd]">© 2026 {site.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
