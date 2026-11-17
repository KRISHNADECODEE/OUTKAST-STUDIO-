"use client";

import React from "react";
import Image from "next/image";
import { UserCheck, Zap, MessageSquare, ShieldCheck, KeyRound, HeartHandshake } from "lucide-react";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";

const STANDARDS = [
  {
    num: "01",
    title: "SENIOR ATTENTION ONLY",
    summary: "No bait-and-switch with junior interns.",
    description:
      "You work directly with the senior creatives and developers who write the code and direct the visuals. Your project receives senior craftsmanship and strategic focus from day one.",
    icon: UserCheck,
  },
  {
    num: "02",
    title: "AGILE CREATIVE SPRINTS",
    summary: "Iterative milestones with visible progress.",
    description:
      "We avoid months of radio silence. Projects are organized into structured 1-to-2 week milestones where you review live interactive staging builds and creative prototypes continuously.",
    icon: Zap,
  },
  {
    num: "03",
    title: "DIRECT COMMUNICATION",
    summary: "Private WhatsApp or Slack channels.",
    description:
      "Fast, asynchronous communication without tedious ticketing systems or account manager delays. Quick answers, rapid feedback loops, and frictionless collaboration.",
    icon: MessageSquare,
  },
  {
    num: "04",
    title: "FIXED SCOPES, ZERO HIDDEN FEES",
    summary: "100% transparent pricing before kickoff.",
    description:
      "Before starting, we agree on clear deliverables, timelines, and fixed scope. No surprise retainer traps, unexpected hourly add-ons, or surprise invoices.",
    icon: ShieldCheck,
  },
  {
    num: "05",
    title: "100% IP & CODE OWNERSHIP",
    summary: "You own every single asset created.",
    description:
      "Upon final project delivery, all production Next.js code, Figma design files, 4K AI video exports, and visual identities belong 100% to you. No proprietary platform lock-in.",
    icon: KeyRound,
  },
  {
    num: "06",
    title: "POST-LAUNCH STABILITY SUPPORT",
    summary: "Thorough handover & stability warranty.",
    description:
      "We don't disappear once the site goes live. We provide comprehensive documentation, Loom training walkthroughs, and a dedicated stability support window.",
    icon: HeartHandshake,
  },
];

export default function HowWeWorkSection() {
  return (
    <section
      id="how-we-work"
      aria-label="How Outkast Studios Works"
      className="relative py-28 px-6 md:px-12 bg-[#8D161D] overflow-hidden border-t border-b border-[#D03412]/30 paper-grain"
    >
      {/* Texture background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <BackgroundPattern variant="dots" opacity={0.07} size={34} />
      <NoiseOverlay variant="scratches" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D03412]/20 pb-8">
          <div className="max-w-2xl space-y-4">
            <SectionCounter index={8} label="Studio Collaboration Model" />

            <h2 className="text-4xl sm:text-6xl font-editorial leading-[0.95] uppercase text-[#F8F3EF]">
              TRANSPARENT PARTNERSHIPS.{" "}
              <span className="font-brush text-[#D03412] capitalize block sm:inline">
                How We Work.
              </span>
            </h2>

            <p className="text-sm sm:text-base font-mono text-[#F8F3EF]/80 leading-relaxed border-l-2 border-[#D03412] pl-4">
              We lead with total honesty. Instead of unverified reviews, we outline our exact operating standards, commitments, and client guarantees.
            </p>
          </div>

          <div className="text-xs font-mono text-[#F8F3EF]/70 bg-[#7C1117] border border-[#D03412]/30 p-3 rounded-sm max-w-sm">
            <span className="text-[#D03412] font-bold block mb-1">AUTHENTICITY COMMITMENT:</span>
            We only publish verified client endorsements with written permission. While collecting formal case studies, our collaboration model sets the standard.
          </div>
        </div>

        {/* 6 Collaboration Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STANDARDS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="interactive bg-[#7C1117]/85 border border-[#D03412]/30 p-8 rounded-sm hover:border-[#D03412] transition-all duration-300 space-y-4 group paper-grain hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-[#8D161D] border border-[#D03412]/40 flex items-center justify-center text-[#D03412] group-hover:bg-[#D03412] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#D03412] font-bold">{item.num}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-editorial tracking-wider text-[#F8F3EF] group-hover:text-[#D03412] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#D03412] font-semibold">
                    {item.summary}
                  </p>
                  <p className="text-xs font-mono text-[#F8F3EF]/75 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D03412]/20 flex items-center justify-between text-[10px] font-mono text-[#F8F3EF]/50 uppercase tracking-widest">
                  <span>OUTKAST GUARANTEE</span>
                  <span className="text-[#D03412] font-bold">100% TRANSPARENT</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="p-6 sm:p-8 bg-[#7C1117]/90 border border-[#D03412]/30 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 paper-grain">
          <div className="space-y-1">
            <h4 className="text-lg font-editorial uppercase text-[#F8F3EF]">
              READY FOR A STUDIO THAT VALUES YOUR TIME?
            </h4>
            <p className="text-xs font-mono text-[#F8F3EF]/70">
              Straightforward proposals, direct access, and senior execution from day one.
            </p>
          </div>

          <a
            href="#contact"
            className="interactive px-6 py-3.5 bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] font-mono text-xs uppercase tracking-wider font-bold rounded-sm whitespace-nowrap transition-colors shadow-lg"
          >
            DISCUSS YOUR PROJECT
          </a>
        </div>
      </div>
    </section>
  );
}
