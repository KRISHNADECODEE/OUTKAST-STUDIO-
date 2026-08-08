"use client";

import React, { useEffect, useRef, useState } from "react";
import { CalendarCheck, ArrowUpRight } from "lucide-react";

/* ==========================================================================
   BOOKING EMBED
   Frictionless scheduler for the contact section.

   The URL comes from NEXT_PUBLIC_BOOKING_URL (a Calendly or Typeform link) so
   no third-party address is hardcoded. Set it in .env.local:

     NEXT_PUBLIC_BOOKING_URL=https://calendly.com/your-handle/strategy-call

   When it is unset the component falls back to the existing project-brief
   modal, so the section always has a working conversion path. The iframe is
   only mounted once it is near the viewport — a scheduler iframe is a heavy
   third-party payload and should never block first paint.
   ========================================================================== */

interface BookingEmbedProps {
  onFallbackClick: () => void;
  className?: string;
}

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

export default function BookingEmbed({ onFallbackClick, className = "" }: BookingEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !BOOKING_URL) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative rounded-sm border border-[#D03412]/40 bg-[#8D161D] overflow-hidden shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-[#D03412]/30 bg-[#7C1117]">
        <CalendarCheck size={16} className="text-[#D03412] shrink-0" />
        <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#F8F3EF]">
          Book a Strategy Call
        </p>
        <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-[#F8F3EF]/50">
          30 min · free
        </span>
      </div>

      {BOOKING_URL ? (
        <div className="relative w-full h-[620px] bg-[#8D161D]">
          {visible && (
            <iframe
              src={BOOKING_URL}
              title="Book a strategy call"
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
          )}
        </div>
      ) : (
        /* No scheduler configured — keep a real conversion path. */
        <div className="p-6 sm:p-8 space-y-5">
          <p className="text-sm font-mono leading-relaxed text-[#F8F3EF]/85">
            Tell us about the brand, the goal and the timeline. We reply within
            24 hours with availability and a straight answer on whether we are
            the right fit.
          </p>

          <ul className="space-y-2">
            {[
              "No pitch deck, no retainer pressure",
              "Straight answer on scope and budget",
              "Direct with the people doing the work",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-2.5 text-xs font-mono text-[#F8F3EF]/70"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#D03412]" />
                {line}
              </li>
            ))}
          </ul>

          <button
            onClick={onFallbackClick}
            className="interactive w-full py-4 bg-[#D03412] hover:bg-[#b02a0e] text-white font-mono text-sm tracking-widest uppercase font-bold rounded-sm shadow-xl transition-all flex items-center justify-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F3EF]"
          >
            <span>BOOK A STRATEGY CALL</span>
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>

          <p className="text-[10px] font-mono text-center text-[#F8F3EF]/55 uppercase tracking-widest">
            Responds within 24 hours · worldwide partnerships
          </p>
        </div>
      )}
    </div>
  );
}
