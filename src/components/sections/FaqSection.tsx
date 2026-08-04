"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does a website take?",
      a: "Our typical custom web project turnaround is 2 to 4 weeks, depending on design complexity, custom GSAP animations, and asset readiness.",
    },
    {
      q: "Do you offer monthly content?",
      a: "Yes! Our Creative 30 Days Content Calendar and AI UGC Ads packages provide continuous monthly content creation designed to keep your brand consistently active.",
    },
    {
      q: "Do you run Meta Ads?",
      a: "Absolutely. We manage data-driven ad campaigns on Facebook & Instagram, pairing our high-converting AI UGC creatives with precision targeting to achieve high ROAS.",
    },
    {
      q: "What is AI UGC Ads?",
      a: "AI UGC (User Generated Content) Ads use hyper-realistic AI creators, voice models, and hooks tailored to look 100% organic on TikTok, Reels, and Shorts.",
    },
    {
      q: "Do you work worldwide?",
      a: "Yes! We work with ambitious brands worldwide across 18+ countries including USA, UK, UAE, India, Europe, and Australia.",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#8D161D] overflow-hidden border-t border-b border-[#D03412]/30 paper-grain">
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper texture background"
          fill
          className="object-cover"
        />
      </div>

      <BackgroundPattern variant="grid" opacity={0.06} size={52} />
      <NoiseOverlay variant="grain02" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <SectionCounter index={12} label="FAQ" />

          <h2 className="text-4xl sm:text-6xl font-editorial leading-[0.92] uppercase text-[#F8F3EF] tracking-tight">
            CLEAR ANSWERS FOR BOLD{" "}
            <span className="font-brush text-[#D03412] capitalize block sm:inline">
              Brands.
            </span>
          </h2>

          <p className="text-base text-[#F8F3EF]/80 font-mono leading-relaxed border-l-2 border-[#D03412] pl-4">
            Everything you need to know about partnering with OUTKAST STUDIO.
          </p>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-[#7C1117] border border-[#D03412]/30 rounded-sm overflow-hidden transition-all duration-300 paper-grain"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="interactive w-full p-6 text-left flex items-center justify-between gap-4 text-base sm:text-lg font-editorial tracking-wider text-[#F8F3EF] hover:text-[#D03412] transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className="w-8 h-8 rounded-full border border-[#D03412]/40 flex items-center justify-center text-[#D03412] shrink-0">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm font-mono text-[#F8F3EF]/80 leading-relaxed border-t border-[#D03412]/20 pt-4">
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
