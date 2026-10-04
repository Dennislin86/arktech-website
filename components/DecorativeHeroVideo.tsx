"use client";

import { useEffect, useRef } from "react";

type DecorativeHeroVideoProps = {
  className?: string;
  loopEnd?: number;
  loopStart?: number;
  poster: string;
  src: string;
};

export function DecorativeHeroVideo({ className, loopEnd, loopStart = 0, poster, src }: DecorativeHeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);

    const resetLoop = () => {
      if (video.currentTime < loopStart || (loopEnd !== undefined && video.currentTime >= loopEnd)) {
        video.currentTime = loopStart;
      }
    };

    const syncPlayback = () => {
      const shouldPlay = desktop.matches && !reducedMotion.matches && !saveData;

      if (shouldPlay) {
        if (video.getAttribute("src") !== src) {
          video.src = src;
          video.load();
        }
        resetLoop();
        void video.play().catch(() => undefined);
        return;
      }

      video.pause();
      video.removeAttribute("src");
      video.load();
    };

    syncPlayback();
    desktop.addEventListener("change", syncPlayback);
    reducedMotion.addEventListener("change", syncPlayback);
    video.addEventListener("loadedmetadata", resetLoop);
    video.addEventListener("timeupdate", resetLoop);

    return () => {
      desktop.removeEventListener("change", syncPlayback);
      reducedMotion.removeEventListener("change", syncPlayback);
      video.removeEventListener("loadedmetadata", resetLoop);
      video.removeEventListener("timeupdate", resetLoop);
      video.pause();
    };
  }, [loopEnd, loopStart, src]);

  return (
    <video
      aria-hidden="true"
      autoPlay
      className={className}
      loop
      muted
      playsInline
      poster={poster}
      preload="metadata"
      ref={videoRef}
      tabIndex={-1}
    />
  );
}
