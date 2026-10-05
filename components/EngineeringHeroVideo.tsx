"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const videoSrc = "/videos/engineering/arktech-mold-design-engineering-loop.mp4";
const posterSrc = "/images/Engineering/arktech-mold-design-engineering-poster.webp";

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

export function EngineeringHeroVideo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const visibleRef = useRef(true);
  const userPausedRef = useRef(false);
  const [canUseVideo, setCanUseVideo] = useState(false);
  const [sourceAttached, setSourceAttached] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const syncPlayback = useCallback(async () => {
    const video = videoRef.current;
    if (!video || !sourceAttached || failed) return;

    if (!visibleRef.current || document.hidden || userPausedRef.current) {
      video.pause();
      return;
    }

    try {
      video.muted = true;
      await video.play();
    } catch {
      setIsPlaying(false);
    }
  }, [failed, sourceAttached]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const saveData = Boolean((navigator as NavigatorWithConnection).connection?.saveData);
    if (reducedMotion || mobile || saveData) return;

    const eligibilityTimer = window.setTimeout(() => setCanUseVideo(true), 0);
    const sourceTimer = window.setTimeout(() => setSourceAttached(true), 450);
    return () => {
      window.clearTimeout(eligibilityTimer);
      window.clearTimeout(sourceTimer);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !canUseVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.3;
        void syncPlayback();
      },
      { threshold: [0, 0.3, 0.6] }
    );
    observer.observe(container);

    const onVisibilityChange = () => { void syncPlayback(); };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [canUseVideo, syncPlayback]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPausedRef.current = false;
      void syncPlayback();
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  }

  return (
    <div className="absolute inset-0" ref={containerRef}>
      <Image
        alt=""
        aria-hidden="true"
        className="object-cover object-[58%_center] md:object-center"
        fill
        priority
        sizes="100vw"
        src={posterSrc}
      />
      {canUseVideo && !failed ? (
        <video
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
          loop
          muted
          onCanPlay={() => { setVideoReady(true); void syncPlayback(); }}
          onError={() => { setFailed(true); setVideoReady(false); }}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          playsInline
          preload="none"
          ref={videoRef}
          src={sourceAttached ? videoSrc : undefined}
        />
      ) : null}
      {canUseVideo && !failed ? (
        <button
          aria-label={isPlaying ? "Pause engineering background video" : "Play engineering background video"}
          className="focus-ring absolute bottom-4 right-4 z-20 inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/50 bg-[#08233a]/75 px-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-[#08233a]"
          onClick={togglePlayback}
          type="button"
        >
          <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
          <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>
      ) : null}
    </div>
  );
}
