"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, HelpCircle, ArrowUpRight } from "lucide-react";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";
import { FAQS } from "@/lib/site-data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="relative py-28 px-6 md:px-12 bg-[#7C1117] overflow-hidden border-t border-b border-[#D03412]/30 paper-grain"
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper texture background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <BackgroundPattern variant="grid" opacity={0.06} size={52} />
      <NoiseOverlay variant="grain02" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6 sticky top-28">
          <SectionCounter index={9} label="Frequently Asked Questions" />

          <h2 className="text-4xl sm:text-6xl font-editorial leading-[0.92] uppercase text-[#F8F3EF] tracking-tight">
            TRANSPARENT ANSWERS FOR AMBITIOUS{" "}
            <span className="font-brush text-[#D03412] capitalize block sm:inline">
              Brands.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#F8F3EF]/80 font-mono leading-relaxed border-l-2 border-[#D03412] pl-4">
            Everything you need to know about working with Outkast Studios. No jargon, no hidden fees, and no ambiguous scopes.
          </p>

          <div className="p-6 bg-[#7C1117]/80 border border-[#D03412]/30 rounded-sm space-y-3 paper-grain">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D03412] font-bold uppercase tracking-wider">
              <HelpCircle size={16} />
              <span>HAVE A SPECIFIC QUESTION?</span>
            </div>
            <p className="text-xs font-mono text-[#F8F3EF]/70 leading-relaxed">
              If your question isn&apos;t covered here, reach out directly. We reply with clear answers within 24 hours.
            </p>
            <a
              href="#contact"
              className="interactive inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#F8F3EF] hover:text-[#D03412] font-bold pt-1 transition-colors"
            >
              <span>TALK TO US</span>
              <ArrowUpRight size={13} className="text-[#D03412]" />
            </a>
          </div>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.id || i}
                className={`border rounded-sm overflow-hidden transition-all duration-300 paper-grain ${
                  isOpen
                    ? "bg-[#7C1117] border-[#D03412] shadow-xl"
                    : "bg-[#7C1117]/80 border-[#D03412]/20 hover:border-[#D03412]/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="interactive w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#D03412] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base sm:text-lg font-editorial tracking-wide text-[#F8F3EF] leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#D03412] border-[#D03412] text-white"
                        : "border-[#D03412]/40 text-[#D03412] hover:bg-[#D03412]/20"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm font-mono text-[#F8F3EF]/85 leading-relaxed border-t border-[#D03412]/20 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
