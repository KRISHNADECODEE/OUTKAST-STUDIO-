"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Compass, Target, Sparkles, Video, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import { BackgroundPattern, NoiseOverlay, SectionCounter, SectionDivider } from "../ui/PaperAssets";

const PROCESS_STEPS = [
  {
    num: "01",
    id: "discovery",
    title: "DISCOVERY",
    subtitle: "Brand, Audience & Commercial Goals",
    desc: "We begin by unpacking your business model, customer pain points, existing assets, and specific revenue or growth targets.",
    outputs: ["Discovery Workshop & Intake", "Commercial Growth Goals", "Project Scope & Milestones"],
    icon: Search,
  },
  {
    num: "02",
    id: "research",
    title: "RESEARCH",
    subtitle: "Competitors, White-Space & Hooks",
    desc: "We analyze competitor positioning, audience behavior, and visual trends to find the unique white-space your brand can own.",
    outputs: ["Competitor Gap Analysis", "Audience Persona Insights", "Creative Reference Architecture"],
    icon: Compass,
  },
  {
    num: "03",
    id: "strategy",
    title: "STRATEGY",
    subtitle: "Positioning & Technical Roadmap",
    desc: "We formulate the master strategic plan: brand messaging framework, conversion architecture, and creative roadmap.",
    outputs: ["Brand Positioning Blueprint", "Information Architecture", "Conversion Funnel Strategy"],
    icon: Target,
  },
  {
    num: "04",
    id: "creative-direction",
    title: "CREATIVE DIRECTION",
    subtitle: "Visual Identity & Storyboards",
    desc: "Concepts become reality. We build design systems, editorial layouts, video hooks, script outlines, and visual prototypes.",
    outputs: ["Interactive Design Prototypes", "Editorial Typography & Assets", "AI Video Scripts & Storyboards"],
    icon: Sparkles,
  },
  {
    num: "05",
    id: "production",
    title: "PRODUCTION",
    subtitle: "Custom Code & 4K AI Video",
    desc: "Execution at senior quality. We build clean Next.js websites, generate photorealistic AI video creatives, and refine micro-interactions.",
    outputs: ["Production-Ready Web Code", "High-Converting AI UGC Creatives", "Multi-Device Responsive Polish"],
    icon: Video,
  },
  {
    num: "06",
    id: "launch-optimization",
    title: "LAUNCH & OPTIMIZATION",
    subtitle: "Live Deployment & Iteration",
    desc: "We thoroughly QA, optimize Core Web Vitals, launch to production, track analytics, and iterate on winning creative variations.",
    outputs: ["Production Live Deployment", "Speed & Accessibility Audits", "Creative Performance Refinements"],
    icon: Rocket,
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const current = PROCESS_STEPS[activeStep];

  return (
    <section
      id="process"
      className="relative py-28 px-6 md:px-12 bg-[#7C1117] overflow-hidden paper-grain"
    >
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D03412]/20 pb-8">
          <div className="max-w-2xl space-y-4">
            <SectionCounter index={7} label="Our Process" />

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial leading-[0.92] uppercase text-[#F8F3EF] tracking-tight">
              FROM STRATEGY TO LAUNCH. OUR RIGOROUS{" "}
              <span className="font-brush text-[#D03412] capitalize block sm:inline">
                Process.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#F8F3EF]/80 font-mono leading-relaxed border-l-2 border-[#D03412] pl-4">
              A transparent, 6-phase journey from initial discovery to live commercial execution. Click any step to inspect the deliverables.
            </p>
          </div>

          <div className="text-xs font-mono text-[#F8F3EF]/60 bg-[#8D161D] border border-[#D03412]/30 px-3 py-2 rounded-sm">
            <span className="text-[#D03412] font-bold">CURRENT PHASE:</span> {current.num} / 06 — {current.title}
          </div>
        </div>

        {/* 6 Step Horizontal / Grid Process Timeline */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(i)}
                className={`interactive text-left p-5 rounded-sm border transition-all duration-300 flex flex-col justify-between gap-4 paper-grain relative ${
                  isActive
                    ? "bg-[#8D161D] border-[#D03412] ring-1 ring-[#D03412]/60 shadow-2xl -translate-y-1"
                    : "bg-[#7C1117]/80 border-[#D03412]/20 hover:border-[#D03412]/60 hover:bg-[#8D161D]/40"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-2xl font-editorial font-bold ${
                      isActive ? "text-[#D03412]" : "text-[#F8F3EF]/60"
                    }`}
                  >
                    {step.num}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-[#D03412] text-white"
                        : "bg-[#5C0F14] text-[#D03412] border border-[#D03412]/30"
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-editorial tracking-wider text-[#F8F3EF] uppercase leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[10px] font-mono text-[#F8F3EF]/60 line-clamp-1 mt-1">
                    {step.subtitle}
                  </p>
                </div>

                {isActive && (
                  <div className="w-full h-1 bg-[#D03412] rounded-full mt-auto" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Interactive Showcase Card */}
        <div className="bg-[#8D161D] border border-[#D03412]/40 rounded-sm p-6 sm:p-10 shadow-2xl space-y-6 paper-grain relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D03412]/20 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-editorial text-[#D03412] font-bold">
                {current.num}
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold block">
                  PHASE DEEP DIVE
                </span>
                <h4 className="text-2xl sm:text-3xl font-editorial uppercase text-[#F8F3EF]">
                  {current.title}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
                className="interactive px-3 py-1.5 rounded-sm border border-[#D03412]/30 text-xs font-mono text-[#F8F3EF] hover:bg-[#D03412] transition-colors"
              >
                ← PREV
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
                className="interactive px-3 py-1.5 rounded-sm bg-[#D03412] text-xs font-mono text-[#F8F3EF] hover:bg-[#b02a0e] font-bold transition-colors"
              >
                NEXT PHASE →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm sm:text-base font-mono text-[#F8F3EF]/90 leading-relaxed border-l-2 border-[#D03412] pl-4">
                {current.desc}
              </p>
              <p className="text-xs font-mono text-[#F8F3EF]/70 leading-relaxed">
                Every phase is executed in structured sprints with clear client checkpoints, ensuring you have complete visibility over work before it goes into production.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#7C1117]/80 border border-[#D03412]/30 p-5 rounded-sm space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold block">
                DELIVERABLES PRODUCED IN THIS PHASE:
              </span>
              <ul className="space-y-2">
                {current.outputs.map((out, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-mono text-[#F8F3EF]/85">
                    <CheckCircle2 size={14} className="text-[#D03412] shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
