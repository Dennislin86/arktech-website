"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const videoId = "Fch2Y-y6cYI";
const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
const poster = "/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp";

type YouTubeEvent = { data: number; target: YouTubePlayer };
type YouTubeErrorEvent = { data: number; target: YouTubePlayer };

type YouTubePlayer = {
  destroy: () => void;
  getIframe: () => HTMLIFrameElement;
  isMuted: () => boolean;
  mute: () => void;
  pauseVideo: () => void;
  playVideo: () => void;
};

type YouTubePlayerConstructor = new (
  element: HTMLElement,
  options: {
    videoId: string;
    playerVars: Record<string, number | string>;
    events: {
      onReady: (event: YouTubeEvent) => void;
      onStateChange: (event: YouTubeEvent) => void;
      onError: (event: YouTubeErrorEvent) => void;
      onAutoplayBlocked?: () => void;
    };
  }
) => YouTubePlayer;

declare global {
  interface Window {
    YT?: {
      Player: YouTubePlayerConstructor;
      PlayerState: { ENDED: number; PLAYING: number; PAUSED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youTubeApiPromise: Promise<void> | null = null;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve();
  if (youTubeApiPromise) return youTubeApiPromise;

  youTubeApiPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById("youtube-iframe-api") as HTMLScriptElement | null;
    const previousReady = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      resolve();
    };

    if (existingScript) {
      existingScript.addEventListener("error", () => reject(new Error("YouTube IFrame API failed to load")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "youtube-iframe-api";
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.addEventListener("error", () => reject(new Error("YouTube IFrame API failed to load")), { once: true });
    document.head.appendChild(script);
  });

  return youTubeApiPromise;
}

export function ManufacturingYouTubeVideo() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const playerMountRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const isMountedRef = useRef(true);
  const isVisibleRef = useRef(false);
  const isMobileRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const saveDataRef = useRef(false);
  const manualPlayRequestedRef = useRef(false);
  const userPausedRef = useRef(false);
  const programmaticPauseRef = useRef(false);
  const isPlayingRef = useRef(false);
  const endedRef = useRef(false);
  const [playerRequested, setPlayerRequested] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [embedError, setEmbedError] = useState(false);

  const canAutoplay = useCallback(() => (
    !isMobileRef.current && !reducedMotionRef.current && !saveDataRef.current
  ), []);

  const requestManualPlay = useCallback(() => {
    manualPlayRequestedRef.current = true;
    userPausedRef.current = false;
    setUserPaused(false);
    endedRef.current = false;
    setAutoplayBlocked(false);
    setEmbedError(false);
    setPlayerRequested(true);
    playerRef.current?.playVideo();
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;

    isMobileRef.current = mobileQuery.matches;
    reducedMotionRef.current = motionQuery.matches;
    saveDataRef.current = Boolean(connection?.saveData);

    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
        isVisibleRef.current = isVisible;

        if (isVisible && canAutoplay()) {
          setPlayerRequested(true);
          const player = playerRef.current;
          if (player && !userPausedRef.current && !endedRef.current && player.isMuted()) {
            player.playVideo();
          }
        } else if (!isVisible && playerRef.current && isPlayingRef.current) {
          programmaticPauseRef.current = true;
          playerRef.current.pauseVideo();
        }
      },
      { threshold: [0, 0.5, 1] }
    );

    function onVisibilityChange() {
      const player = playerRef.current;
      if (!player) return;

      if (document.hidden && isPlayingRef.current) {
        programmaticPauseRef.current = true;
        player.pauseVideo();
      } else if (isVisibleRef.current && canAutoplay() && !userPausedRef.current && !endedRef.current && player.isMuted()) {
        player.playVideo();
      }
    }

    observer.observe(target);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      isMountedRef.current = false;
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [canAutoplay]);

  useEffect(() => {
    if (!playerRequested || playerRef.current || !playerMountRef.current) return;

    let cancelled = false;
    loadYouTubeApi()
      .then(() => {
        if (cancelled || !isMountedRef.current || !window.YT?.Player || !playerMountRef.current) return;

        playerRef.current = new window.YT.Player(playerMountRef.current, {
          videoId,
          playerVars: {
            controls: 1,
            enablejsapi: 1,
            fs: 1,
            origin: window.location.origin,
            playsinline: 1,
            rel: 0
          },
          events: {
            onReady: ({ target }) => {
              if (!isMountedRef.current) return;
              const iframe = target.getIframe();
              iframe.title = "Arktech Injection Mold Manufacturing";
              iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture; fullscreen");
              iframe.setAttribute("allowfullscreen", "");
              setPlayerReady(true);

              if (manualPlayRequestedRef.current) {
                target.playVideo();
              } else if (isVisibleRef.current && canAutoplay() && !userPausedRef.current && !endedRef.current) {
                target.mute();
                target.playVideo();
              }
            },
            onStateChange: ({ data }) => {
              if (!window.YT || !isMountedRef.current) return;
              if (data === window.YT.PlayerState.PLAYING) {
                isPlayingRef.current = true;
                setPlaying(true);
                setAutoplayBlocked(false);
                userPausedRef.current = false;
                setUserPaused(false);
                programmaticPauseRef.current = false;
              } else if (data === window.YT.PlayerState.PAUSED) {
                isPlayingRef.current = false;
                setPlaying(false);
                if (programmaticPauseRef.current) {
                  programmaticPauseRef.current = false;
                } else {
                  userPausedRef.current = true;
                  setUserPaused(true);
                }
              } else if (data === window.YT.PlayerState.ENDED) {
                isPlayingRef.current = false;
                setPlaying(false);
                endedRef.current = true;
              }
            },
            onError: () => {
              if (!isMountedRef.current) return;
              setEmbedError(true);
              setPlayerReady(false);
            },
            onAutoplayBlocked: () => {
              if (!isMountedRef.current) return;
              setAutoplayBlocked(true);
              setPlaying(false);
            }
          }
        });
      })
      .catch(() => {
        if (isMountedRef.current) setEmbedError(true);
      });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [canAutoplay, playerRequested]);

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-md border border-white/15 bg-black"
      data-player-requested={playerRequested ? "true" : "false"}
      data-player-state={embedError ? "error" : playing ? "playing" : playerReady && userPaused ? "paused-by-user" : playerReady ? "ready" : playerRequested ? "loading" : "poster"}
      ref={sectionRef}
    >
      <Image
        alt="Injection mold fitting and assembly at Arktech"
        className="object-cover object-center"
        fill
        loading="lazy"
        sizes="(min-width: 1024px) 58vw, 100vw"
        src={poster}
      />

      {playerRequested && !embedError ? <div className="absolute inset-0 [&_iframe]:h-full [&_iframe]:w-full" ref={playerMountRef} /> : null}

      {!playerRequested ? (
        <button
          aria-label="Play Arktech mold manufacturing video"
          className="focus-ring absolute inset-0 flex min-h-11 min-w-11 items-center justify-center bg-[#071b2b]/20 transition hover:bg-[#071b2b]/35"
          onClick={requestManualPlay}
          type="button"
        >
          <span aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-[var(--brand)] text-2xl text-white shadow-lg transition hover:scale-105 motion-reduce:transition-none sm:h-20 sm:w-20 sm:text-3xl">▶</span>
        </button>
      ) : null}

      {playerRequested && !playerReady && !embedError ? (
        <div aria-live="polite" className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#071b2b]/35 text-sm font-semibold text-white">Loading video…</div>
      ) : null}

      {autoplayBlocked && !playing && !embedError ? (
        <button
          aria-label="Play Arktech mold manufacturing video"
          className="focus-ring absolute inset-0 flex min-h-11 items-center justify-center bg-[#071b2b]/35 font-bold text-white"
          onClick={requestManualPlay}
          type="button"
        >
          <span className="rounded-sm bg-[var(--brand)] px-5 py-3">Play video</span>
        </button>
      ) : null}

      {embedError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#071b2b]/80 p-6 text-center text-white">
          <p className="font-semibold">The embedded video is currently unavailable.</p>
          <a className="focus-ring inline-flex min-h-11 items-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white hover:bg-[var(--brand-hover)]" href={watchUrl} rel="noreferrer" target="_blank">Watch on YouTube <span aria-hidden="true" className="ml-2">↗</span></a>
        </div>
      ) : null}
    </div>
  );
}
