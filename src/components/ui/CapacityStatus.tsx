"use client";

import React from "react";

/* ==========================================================================
   CAPACITY STATUS
   Scarcity trigger for the hero. Reads as a live system status rather than
   marketing copy: a pulsing green dot, the hard cap, and how many slots are
   gone. Numbers live in one place so they are trivial to keep truthful.
   ========================================================================== */

const TOTAL_SLOTS = 11;
const FILLED_SLOTS = 9;

export default function CapacityStatus({ className = "" }: { className?: string }) {
  const remaining = TOTAL_SLOTS - FILLED_SLOTS;

  return (
    <div
      className={`inline-flex flex-col gap-2 ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2.5">
        {/* Pulsing availability dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-70 animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#34D399] shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
        </span>

        <span className="text-xs sm:text-[11px] font-mono tracking-widest uppercase font-bold text-[#34D399]">
          {remaining} {remaining === 1 ? "spot" : "spots"} open
        </span>
      </div>

      <p className="text-[13px] sm:text-xs font-mono leading-relaxed text-[#F8F3EF]/75 max-w-[19rem]">
        We strictly work with {TOTAL_SLOTS} clients at a time.{" "}
        <strong className="text-[#F8F3EF] font-bold">
          Currently {FILLED_SLOTS}/{TOTAL_SLOTS} spots filled.
        </strong>
      </p>

      {/* Capacity meter */}
      <div
        className="h-1 w-full max-w-[19rem] rounded-full bg-[#F8F3EF]/15 overflow-hidden"
        role="progressbar"
        aria-valuenow={FILLED_SLOTS}
        aria-valuemin={0}
        aria-valuemax={TOTAL_SLOTS}
        aria-label={`${FILLED_SLOTS} of ${TOTAL_SLOTS} client slots filled`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#D03412] to-[#34D399]"
          style={{ width: `${(FILLED_SLOTS / TOTAL_SLOTS) * 100}%` }}
        />
      </div>
    </div>
  );
}
