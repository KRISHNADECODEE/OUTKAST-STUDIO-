"use client";

import React from "react";
import Image from "next/image";
import { Search, Video } from "lucide-react";
import { BackgroundPattern, NoiseOverlay, SectionCounter, SectionDivider } from "../ui/PaperAssets";
import { IconTarget, IconCreative, IconRocket, IconGrowth } from "../ui/OutkastIcons";

/* lucide icons take `size`, the custom set takes `className` — normalise both */
const Lucide = (Icon: typeof Search) =>
  function Wrapped({ className }: { className?: string }) {
    return <Icon className={className} />;
  };

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "DISCOVERY",
      desc: "We learn about your brand, goals and target audience.",
      icon: Lucide(Search),
    },
    {
      num: "02",
      title: "STRATEGY",
      desc: "We create a clear roadmap designed to achieve real results.",
      icon: IconTarget,
    },
    {
      num: "03",
      title: "CREATIVE DIRECTION",
      desc: "Concepts, visuals and storyboards that bring your brand to life.",
      icon: IconCreative,
    },
    {
      num: "04",
      title: "PRODUCTION",
      desc: "High quality execution with attention to every little detail.",
      icon: Lucide(Video),
    },
    {
      num: "05",
      title: "LAUNCH",
      desc: "We launch, optimize and make sure you stand out.",
      icon: IconRocket,
    },
    {
      num: "06",
      title: "SCALE",
      desc: "We scale what works and keep driving exponential growth.",
      icon: IconGrowth,
    },
  ];

  return (
    <section id="process" className="relative py-28 px-6 md:px-12 bg-[#7C1117] overflow-hidden paper-grain">
      
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper texture background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Directional pattern + grain */}
      <BackgroundPattern variant="arrows" opacity={0.07} size={48} />
      <NoiseOverlay variant="grain01" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <SectionCounter index={9} label="Our Process" />

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial leading-[0.92] uppercase text-[#F8F3EF] tracking-tight">
            FROM IDEA TO IMPACT. OUR PROVEN{" "}
            <span className="font-brush text-[#D03412] capitalize block sm:inline">
              Process.
            </span>
          </h2>
        </div>

        {/* 6 Step Horizontal / Grid Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-[#D03412]/30 -z-10" />

          {/* Painted arrows sitting on the connector, between each pair of steps */}
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={`arrow-${n}`}
              className="hidden lg:block absolute top-6 -z-10 pointer-events-none"
              style={{ left: `calc(${(n / 6) * 100}% - 1.1rem)` }}
            >
              <SectionDivider variant="arrow" className="w-9 h-6 text-[#D03412]/70" />
            </div>
          ))}

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="interactive bg-[#8D161D]/70 border border-[#D03412]/30 p-6 rounded-sm space-y-4 hover:border-[#D03412] hover:bg-[#8D161D] transition-all group shadow-lg paper-grain"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-editorial text-[#D03412] font-bold">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#7C1117] border border-[#D03412]/40 flex items-center justify-center text-[#D03412] group-hover:bg-[#D03412] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-editorial tracking-wider text-[#F8F3EF] group-hover:text-[#D03412] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-mono text-[#F8F3EF]/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
