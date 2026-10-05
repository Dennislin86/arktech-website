"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const posterSrc = "/images/quality/mold-insert-cmm-inspection-poster.webp";
const videoSrc = "/videos/quality/mold-insert-cmm-inspection.mp4";

export function QualityInspectionVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [requested, setRequested] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [playbackMessage, setPlaybackMessage] = useState("");

  useEffect(() => {
    if (!requested || loadFailed) return;

    const video = videoRef.current;
    if (!video) return;

    const playback = video.play();
    if (playback) {
      void playback.catch(() => {
        setPlaybackMessage("Playback did not start automatically. Use the video controls to play.");
      });
    }
  }, [loadFailed, requested]);

  return (
    <figure className="mt-8 grid max-w-4xl gap-6 overflow-hidden rounded-md border border-[var(--line)] bg-white p-5 sm:p-6 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:items-center">
      <div className="relative mx-auto aspect-[720/1264] w-full max-w-[18rem] overflow-hidden rounded-sm bg-[var(--brand-dark)]">
        {requested && !loadFailed ? (
          <video
            aria-label="Mold insert CMM inspection video"
            autoPlay
            className="h-full w-full object-contain"
            controls
            onError={() => {
              setLoadFailed(true);
              setPlaybackMessage("The inspection video could not be loaded. The poster remains available.");
            }}
            playsInline
            poster={posterSrc}
            preload="metadata"
            ref={videoRef}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <button
            aria-label="Play mold insert CMM inspection video"
            className="focus-ring group relative h-full w-full overflow-hidden rounded-sm"
            onClick={() => {
              setLoadFailed(false);
              setPlaybackMessage("");
              setRequested(true);
            }}
            type="button"
          >
            <Image
              alt="CMM probe checking a machined mold component"
              className="object-contain"
              fill
              sizes="(min-width: 768px) 288px, 78vw"
              src={posterSrc}
            />
            <span aria-hidden="true" className="absolute inset-0 bg-[var(--brand-dark)]/15 transition group-hover:bg-[var(--brand-dark)]/5 motion-reduce:transition-none" />
            <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[var(--brand)] shadow-md transition group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-[var(--brand)]" />
            </span>
          </button>
        )}
      </div>
      <figcaption>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Inspection Video</p>
        <h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)] sm:text-2xl">Mold Insert CMM Inspection</h3>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">A view of mold-insert dimensional inspection using CMM equipment.</p>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">The video shows the component and probe movement only; no measurement result or tolerance is asserted.</p>
        {playbackMessage ? <p aria-live="polite" className="mt-3 text-sm font-semibold leading-6 text-[var(--brand-dark)]">{playbackMessage}</p> : null}
      </figcaption>
    </figure>
  );
}
