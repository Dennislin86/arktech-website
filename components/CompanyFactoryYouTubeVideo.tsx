"use client";

import Image from "next/image";
import { useState } from "react";

const videoId = "cd6X6xG0cgA";

export function CompanyFactoryYouTubeVideo() {
  const [requested, setRequested] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black" data-company-factory-video={videoId}>
      {!requested ? (
        <>
          <Image
            alt="Mold fitting and assembly inside the Arktech toolroom"
            className="object-cover object-center"
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 58vw, 100vw"
            src="/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp"
          />
          <button
            aria-label="Play Arktech factory and toolroom video"
            className="focus-ring group absolute inset-0 flex min-h-11 min-w-11 items-center justify-center bg-[#071b2b]/20 transition hover:bg-[#071b2b]/35"
            onClick={() => setRequested(true)}
            type="button"
          >
            <span aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-[var(--brand)] text-2xl text-white shadow-lg transition group-hover:scale-105 motion-reduce:transition-none sm:h-20 sm:w-20 sm:text-3xl">▶</span>
          </button>
        </>
      ) : (
        <iframe
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
          referrerPolicy="strict-origin-when-cross-origin"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`}
          title="Arktech Factory & Toolroom"
        />
      )}
    </div>
  );
}
