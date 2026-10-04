"use client";

import Image from "next/image";
import { useState } from "react";

const videoId = "cd6X6xG0cgA";
const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`;

export function ToolroomFactoryVideo() {
  const [playerRequested, setPlayerRequested] = useState(false);

  return (
    <div data-player-state={playerRequested ? "embed" : "poster"} data-toolroom-factory-video>
      <div className="relative aspect-video w-full overflow-hidden rounded-md border border-[var(--line)] bg-black">
        {playerRequested ? (
          <iframe
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            referrerPolicy="strict-origin-when-cross-origin"
            src={embedUrl}
            title="Arktech Group Factory and Injection Mold Toolroom"
          />
        ) : (
          <button
            aria-label="Play Arktech factory video"
            className="focus-ring group absolute inset-0 block h-full w-full overflow-hidden text-left"
            onClick={() => setPlayerRequested(true)}
            type="button"
          >
            <Image
              alt=""
              className="object-cover object-center"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 60vw, 100vw"
              src="/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071b2b]/70 via-[#071b2b]/10 to-transparent" />
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-[var(--brand)] text-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none sm:h-[72px] sm:w-[72px] sm:text-3xl">▶</span>
            </span>
            <span className="absolute bottom-4 left-4 rounded-sm bg-[#071b2b]/85 px-3 py-2 text-sm font-bold text-white sm:bottom-5 sm:left-5 sm:text-base">
              Watch Factory Video · 1:10
            </span>
          </button>
        )}
      </div>

      <a
        className="focus-ring mt-3 inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-hover)]"
        href={watchUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        Watch on YouTube <span className="ml-2" aria-hidden="true">→</span>
        <span className="sr-only"> (opens in a new window)</span>
      </a>
    </div>
  );
}
