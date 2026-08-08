"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ==========================================================================
   INLINE LOOP VIDEO
   Chrome-free autoplaying loop that fills whatever box it is dropped into —
   used inside the UGC phone mockups, where the frame, notch and metric bar
   are supplied by the parent.

   The poster paints immediately through next/image; the <video> is only
   mounted once the card is near the viewport, and playback pauses whenever it
   scrolls away so a phone is never decoding video nobody is looking at.
   ========================================================================== */

interface InlineLoopVideoProps {
  src: string;
  poster: string;
  alt: string;
  sizes?: string;
  className?: string;
}

export default function InlineLoopVideo({
  src,
  poster,
  alt,
  sizes = "(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw",
  className = "",
}: InlineLoopVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMounted(true);
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) void v.play().catch(() => {});
        else v.pause();
      },
      { rootMargin: "250px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={`absolute inset-0 ${className}`}>
      <Image src={poster} alt={alt} fill sizes={sizes} className="object-cover" />

      {mounted && !failed && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={poster}
          aria-label={alt}
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
