"use client";

import { useEffect, useState } from "react";

const testimonials = [
  { flag: "🇩🇪", country: "Germany", customer: "Injection Molder", problem: "Automotive housing tooling required early risk review.", result: "Fewer mold iterations and faster sample approval.", quote: "The engineering feedback was clear, practical, and delivered before tooling decisions became expensive.", role: "Engineering Manager" },
  { flag: "🇺🇸", country: "United States", customer: "OEM Product Company", problem: "Plastic housings and metal parts needed coordinated delivery.", result: "Simplified sourcing and improved launch readiness.", quote: "Arktech kept tooling, component interfaces, and validation requirements aligned throughout the program.", role: "Strategic Sourcing Manager" },
  { flag: "🇳🇱", country: "Netherlands", customer: "Industrial Equipment Manufacturer", problem: "Export tooling needed complete validation documentation.", result: "A smoother tool transfer into local production.", quote: "The documentation was organized and the tooling arrived prepared for our production setup.", role: "Program Engineer" },
  { flag: "🇬🇧", country: "United Kingdom", customer: "Smart Device Brand", problem: "Cosmetic enclosure defects were delaying pilot production.", result: "Improved surface quality and stable molding parameters.", quote: "Their DFM review identified the cosmetic risks early and gave our design team actionable solutions.", role: "Product Development Lead" },
  { flag: "🇫🇷", country: "France", customer: "Medical Device Company", problem: "A tight-tolerance housing required controlled validation.", result: "Approved samples with consistent critical dimensions.", quote: "Communication was disciplined and every dimensional concern was tracked through sample approval.", role: "Quality Engineer" },
  { flag: "🇨🇦", country: "Canada", customer: "Automation OEM", problem: "Low-volume machined and molded parts came from several suppliers.", result: "Consolidated production under one engineering workflow.", quote: "Having one team coordinate plastic and metal components significantly reduced our internal follow-up.", role: "Supply Chain Manager" },
  { flag: "🇸🇪", country: "Sweden", customer: "Electronics Manufacturer", problem: "The enclosure design needed better assembly repeatability.", result: "Improved fit, fastening, and production consistency.", quote: "Arktech challenged the design constructively and helped us reach a more production-ready solution.", role: "Mechanical Design Manager" },
  { flag: "🇮🇹", country: "Italy", customer: "Home Appliance Brand", problem: "Large cosmetic parts showed warpage during initial trials.", result: "Optimized tooling and a more stable molding window.", quote: "The trial reports were detailed and the corrective actions were handled quickly and transparently.", role: "Tooling Manager" },
  { flag: "🇪🇸", country: "Spain", customer: "Consumer Product OEM", problem: "A compressed schedule required prototype-to-tooling continuity.", result: "Faster transition from design validation to production.", quote: "The same engineering team supported us from prototypes through mold sampling, which saved valuable time.", role: "Project Manager" },
  { flag: "🇩🇰", country: "Denmark", customer: "Industrial Controls Company", problem: "Insert-molded parts required reliable positioning and pull-out strength.", result: "Stable insert placement and repeatable production quality.", quote: "They understood the functional requirements and built validation around the risks that mattered.", role: "Senior Engineer" },
  { flag: "🇧🇪", country: "Belgium", customer: "Injection Molding Company", problem: "Additional tooling capacity was needed without expanding internally.", result: "Export-ready molds integrated into the customer factory.", quote: "The molds were delivered with the documentation and spare-part planning our maintenance team expected.", role: "Operations Director" },
  { flag: "🇨🇭", country: "Switzerland", customer: "Precision Equipment OEM", problem: "CNC parts required consistent finishes and close tolerances.", result: "Repeatable inspection results across production batches.", quote: "Inspection feedback was precise and deviations were addressed before shipment, not after arrival.", role: "Supplier Quality Manager" },
  { flag: "🇦🇺", country: "Australia", customer: "Outdoor Product Brand", problem: "Material and sealing decisions needed validation for harsh use.", result: "Improved durability and production-ready component design.", quote: "The team helped us balance material performance, tooling cost, and assembly requirements effectively.", role: "Engineering Director" },
  { flag: "🇳🇴", country: "Norway", customer: "Energy Technology Company", problem: "Complex enclosures required plastic, metal, and finishing coordination.", result: "Reduced interface issues during final assembly.", quote: "Their cross-process coordination gave us much better control over fit and finish at assembly.", role: "Technical Procurement Manager" },
  { flag: "🇫🇮", country: "Finland", customer: "IoT Product Company", problem: "Pilot volumes needed scalable tooling without overinvestment.", result: "A practical route from pilot builds to mass production.", quote: "Arktech proposed a tooling strategy that matched our real volume ramp instead of overspecifying the project.", role: "Hardware Program Manager" }
];

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const visible = [0, 1, 2].map((offset) => testimonials[(active + offset) % testimonials.length]);

  return (
    <div className="mt-8" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="grid gap-5 lg:grid-cols-3" aria-live="polite">
        {visible.map((item, index) => (
          <article className="flex h-full flex-col rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm" key={`${active}-${index}-${item.country}`}>
            <p className="flex items-center gap-2 text-sm font-bold text-[var(--brand)]">
              <span aria-label={`${item.country} flag`} className="text-2xl" role="img">{item.flag}</span>
              <span>{item.country} | {item.customer}</span>
            </p>
            <dl className="mt-4 grid gap-3 text-sm leading-6">
              <div><dt className="font-bold text-[var(--brand-dark)]">Problem</dt><dd className="text-[var(--muted)]">{item.problem}</dd></div>
              <div><dt className="font-bold text-[var(--brand-dark)]">Result</dt><dd className="text-[var(--muted)]">{item.result}</dd></div>
            </dl>
            <blockquote className="mt-5 flex-1 border-l-4 border-[var(--brand)] pl-4 leading-7 text-[var(--brand-dark)]">“{item.quote}”</blockquote>
            <p className="mt-4 text-sm font-semibold text-[var(--muted)]">— {item.role}, {item.country}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">{active + 1} / {testimonials.length}</p>
        <div className="flex gap-2">
          <button aria-label="Previous customer testimonial" className="size-10 rounded-sm border border-[var(--line)] bg-white font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" onClick={() => setActive((current) => (current - 1 + testimonials.length) % testimonials.length)} type="button">←</button>
          <button aria-label="Next customer testimonial" className="size-10 rounded-sm border border-[var(--line)] bg-white font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" onClick={() => setActive((current) => (current + 1) % testimonials.length)} type="button">→</button>
        </div>
      </div>
    </div>
  );
}
