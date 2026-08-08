"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX, Play } from "lucide-react";

/* ==========================================================================
   CINEMATIC VIDEO
   Autoplaying, looping, muted background-style player for the split-screen
   Standard Ad vs AI UGC Ad edit.

   Performance notes:
   - preload="none" and no <source> until the player is near the viewport, so
     the video costs nothing until it is nearly on screen.
   - The poster renders through next/image at the right size, so there is a
     real frame immediately instead of a black box.
   - The aspect ratio is reserved by the wrapper, so nothing shifts when the
     video swaps in — no CLS.
   - Playback pauses when scrolled away; decoding video nobody is watching is
     the usual cause of scroll jank on phones.
   ========================================================================== */

interface CinematicVideoProps {
  src: string;
  /** Optional WebM served first; browsers pick whichever they can play. */
  webmSrc?: string;
  poster: string;
  label?: string;
  className?: string;
  /** Defaults to 16/9. Use e.g. "9/16" for vertical edits. */
  ratio?: string;
}

export default function CinematicVideo({
  src,
  webmSrc,
  poster,
  label,
  className = "",
  ratio = "16/9",
}: CinematicVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false); // near viewport → attach sources
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
        const video = videoRef.current;
        if (!video) return;
        // Only decode while visible.
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "300px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`relative w-full overflow-hidden rounded-sm border border-[#D03412]/30 bg-[#111111] ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* Poster always paints first — no black box, no layout shift. */}
      <Image
        src={poster}
        alt={label ? `${label} preview` : "Video preview"}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover"
      />

      {!failed && active && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="none"
          poster={poster}
          aria-label={label}
          onError={() => setFailed(true)}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Legibility wash + caption */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />

      {label && (
        <span className="pointer-events-none absolute bottom-4 left-4 z-10 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#F8F3EF]/90">
          {label}
        </span>
      )}

      {/* Sound toggle — the video is muted so autoplay is allowed everywhere. */}
      {!failed && active && (
        <button
          type="button"
          onClick={() => {
            const v = videoRef.current;
            if (!v) return;
            v.muted = !v.muted;
            setMuted(v.muted);
            void v.play().catch(() => {});
          }}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="interactive absolute bottom-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#F8F3EF]/30 bg-[#111111]/70 text-[#F8F3EF] backdrop-blur-sm transition-colors hover:bg-[#D03412] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412]"
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}

      {/* Shown only if the file is missing or the codec is unsupported. */}
      {failed && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-[#111111]/60 text-center px-6">
          <Play size={26} className="text-[#D03412]" />
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#F8F3EF]/70">
            Showreel coming soon
          </p>
        </div>
      )}
    </div>
  );
}
