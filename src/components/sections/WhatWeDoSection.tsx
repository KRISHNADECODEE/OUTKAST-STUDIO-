"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Cpu, Monitor, Megaphone, Calendar, Landmark, Check } from "lucide-react";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";
import { CircularStamp } from "../ui/BrandAssets";

const SERVICES = [
  {
    num: "01",
    id: "brand-building",
    title: "BRAND BUILDING",
    category: "IDENTITY & POSITIONING",
    summary: "Brand identity, positioning, visual direction and storytelling.",
    description:
      "We build distinct brand identities that cut through generic industry noise. From core market positioning and naming to typography systems and editorial storytelling, we give your brand a voice people remember.",
    deliverables: [
      "Strategic Market Positioning",
      "Visual Identity & Logo Systems",
      "Editorial Brand Guidelines & Voice",
      "Typography, Color & Iconography",
    ],
    icon: Landmark,
    accent: "border-[#D03412]/40",
    isFlagship: false,
  },
  {
    num: "02",
    id: "ai-advertising",
    title: "AI ADVERTISING",
    category: "FLAGSHIP SERVICE",
    summary: "AI UGC advertisements, product films, promotional videos and creative campaigns.",
    description:
      "Hyper-realistic virtual creators, 3D cinematic product films, and scroll-stopping video hooks engineered specifically for Instagram Reels, TikTok, and YouTube Shorts. Zero studio logistics or production delays.",
    deliverables: [
      "AI UGC Video Hooks & Commercials",
      "3D Cinematic Product Films",
      "Viral Scripting & Creative Direction",
      "Multi-Variant Ad Creative Sprints",
    ],
    icon: Cpu,
    accent: "border-[#D03412] ring-1 ring-[#D03412]/50",
    isFlagship: true,
  },
  {
    num: "03",
    id: "website-development",
    title: "WEBSITE DEVELOPMENT",
    category: "DIGITAL EXPERIENCES",
    summary: "Portfolio websites, business websites and conversion-focused landing pages.",
    description:
      "Custom full-stack web applications built from scratch with Next.js and Tailwind CSS. We don't use cookie-cutter templates—every interface is engineered for speed, editorial elegance, and frictionless conversion.",
    deliverables: [
      "Custom Portfolio & Agency Websites",
      "High-Converting Sales Landing Pages",
      "Smooth Choreographed Micro-Interactions",
      "Sub-Second Performance & Responsive Code",
    ],
    icon: Monitor,
    accent: "border-[#D03412]/40",
    isFlagship: false,
  },
  {
    num: "04",
    id: "social-media-management",
    title: "SOCIAL MEDIA MANAGEMENT",
    category: "CREATIVE PRODUCTION",
    summary: "Content calendars, Reels, creative production, account management and strategy.",
    description:
      "Complete social channel ownership that turns casual viewers into brand believers. We produce structured 30-day content roadmaps, high-retention short-form video, editorial carousels, and engaging copy.",
    deliverables: [
      "30-Day Structured Content Roadmaps",
      "Reels, Shorts & Carousel Production",
      "High-Converting Copy & Hook Formulas",
      "Feed Curation & Brand Consistency",
    ],
    icon: Calendar,
    accent: "border-[#D03412]/40",
    isFlagship: false,
  },
  {
    num: "05",
    id: "meta-ads",
    title: "META ADS",
    category: "PERFORMANCE MARKETING",
    summary: "Facebook and Instagram advertising, campaign management and performance optimization.",
    description:
      "Data-driven advertising campaigns combining our high-converting creative assets with precision audience targeting. We test creative hooks rigorously, scale winning ad sets, and optimize for real commercial returns.",
    deliverables: [
      "Full-Funnel Campaign Architecture",
      "Creative Split-Testing & Iteration",
      "Pixel Tracking & Conversion Optimization",
      "Audience Segmentation & Retargeting",
    ],
    icon: Megaphone,
    accent: "border-[#D03412]/40",
    isFlagship: false,
  },
];

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices =
    activeTab === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeTab);

  return (
    <section
      id="what-we-do"
      className="relative min-h-screen py-28 px-6 sm:px-10 lg:px-16 bg-[#5C0F14] overflow-hidden paper-grain border-b border-[#D03412]/30"
    >
      {/* Wrinkled paper ground */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/dark_red_wrinkled_paper_1785853551188.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <BackgroundPattern variant="crosses" opacity={0.05} size={56} />
      <NoiseOverlay variant="grain02" opacity={0.2} />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#D03412]/20 pb-10">
          <div className="space-y-4 max-w-2xl">
            <SectionCounter index={2} label="What We Do" />

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-extrabold uppercase text-[#F8F3EF] leading-[0.9] tracking-tight">
              SERVICES DESIGNED TO{" "}
              <span className="font-brush text-[#D03412] capitalize block sm:inline">
                Build &amp; Scale.
              </span>
            </h2>

            <p className="text-sm sm:text-base font-mono text-[#F8F3EF]/80 leading-relaxed border-l-2 border-[#D03412] pl-4">
              We combine strategic brand building, bespoke web engineering, AI-powered video advertising, and performance marketing to move businesses forward.
            </p>
          </div>

          {/* Service quick navigation filter */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <button
              onClick={() => setActiveTab("all")}
              className={`interactive px-3 py-1.5 rounded-sm uppercase tracking-wider transition-colors ${
                activeTab === "all"
                  ? "bg-[#D03412] text-white font-bold"
                  : "bg-[#7C1117] text-[#F8F3EF]/70 hover:text-white border border-[#D03412]/30"
              }`}
            >
              All Services
            </button>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`interactive px-3 py-1.5 rounded-sm uppercase tracking-wider transition-colors ${
                  activeTab === s.id
                    ? "bg-[#D03412] text-white font-bold"
                    : "bg-[#7C1117] text-[#F8F3EF]/70 hover:text-white border border-[#D03412]/30"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Distinct Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className={`interactive relative bg-[#7C1117]/85 border p-8 rounded-sm flex flex-col justify-between space-y-6 group paper-grain transition-all duration-300 hover:-translate-y-1 shadow-2xl ${service.accent}`}
              >
                {/* Header row: Icon & Number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-[#5C0F14] border border-[#D03412]/40 flex items-center justify-center text-[#D03412] group-hover:bg-[#D03412] group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-[#D03412] font-bold block">
                      {service.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#F8F3EF]/50">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-editorial text-[#F8F3EF] tracking-tight group-hover:text-[#D03412] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-[#D03412] font-semibold tracking-wide">
                    {service.summary}
                  </p>
                  <p className="text-xs font-mono text-[#F8F3EF]/75 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Bullet List */}
                <div className="pt-4 border-t border-[#D03412]/20 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold block mb-1">
                    What We Deliver:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[11px] font-mono text-[#F8F3EF]/80"
                    >
                      <Check size={12} className="text-[#D03412] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Flagship Tag or Action */}
                <div className="pt-2 flex items-center justify-between">
                  {service.isFlagship ? (
                    <span className="text-[9px] font-mono tracking-widest text-[#D03412] font-bold uppercase bg-[#D03412]/15 px-2.5 py-1 rounded-sm border border-[#D03412]/40">
                      ★ STUDIO FLAGSHIP
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono tracking-widest text-[#F8F3EF]/50 uppercase">
                      OUTKAST DISCIPLINE
                    </span>
                  )}

                  <a
                    href="#contact"
                    className="interactive inline-flex items-center gap-1 text-xs font-mono tracking-widest text-[#F8F3EF] hover:text-[#D03412] transition-colors uppercase font-bold"
                  >
                    <span>ENQUIRE</span>
                    <ArrowUpRight size={13} className="text-[#D03412]" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Studio Standard Commitment Strip */}
        <div className="pt-8 border-t border-[#D03412]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#F8F3EF]/80">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D03412]" />
            <p>
              Focused on <strong className="text-[#F8F3EF]">creative quality</strong> and{" "}
              <strong className="text-[#D03412]">measurable business improvement</strong>.
            </p>
          </div>
          <div className="flex items-center gap-6 text-[#F8F3EF]/60">
            <span>NO COOKIE-CUTTER TEMPLATES</span>
            <span>•</span>
            <span>DIRECT SENIOR ATTENTION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
