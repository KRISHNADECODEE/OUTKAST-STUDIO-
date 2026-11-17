"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, MessageCircle, ArrowUpRight, ChevronRight, FileText, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import ProjectModal from "@/components/ProjectModal";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { BackgroundPattern, NoiseOverlay, TornEdge } from "@/components/ui/PaperAssets";
import { BUSINESS_CONFIG, getWhatsAppUrl, getEmailHref } from "@/lib/business-config";

/* ─── Types ────────────────────────────────────────────────────────────────── */

export interface LocalService {
  title: string;
  description: string;
  badge?: string;
}

export interface LocalFaq {
  q: string;
  a: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface InternalLink {
  label: string;
  href: string;
}

export interface LocalPageLayoutProps {
  /** Page H1 — shown in the hero */
  headline: string;
  /** Short editorial sub-headline shown below H1 */
  subheadline: string;
  /** One-liner describing the unique local angle */
  localAngle: string;
  /** Breadcrumb trail, e.g. [{ label: "Home", href: "/" }, { label: "Haridwar", href: "/haridwar/" }] */
  breadcrumbs: BreadcrumbItem[];
  /** Services to render in the grid */
  services: LocalService[];
  /** FAQs for the accordion */
  faqs: LocalFaq[];
  /** CTA copy override */
  ctaHeadline?: string;
  ctaBody?: string;
  /** Internal navigation links shown below the hero */
  internalLinks?: InternalLink[];
  /** Custom WhatsApp message override */
  whatsappMessage?: string;
}

/* ─── Sub-Components ───────────────────────────────────────────────────────── */

function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-2 flex items-center gap-1.5 text-xs font-mono text-[#F8F3EF]/60"
    >
      {items.map((item, i) => (
        <React.Fragment key={item.href}>
          {i > 0 && <ChevronRight size={12} className="text-[#D03412]/60" />}
          {i < items.length - 1 ? (
            <Link href={item.href} className="hover:text-[#D03412] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#F8F3EF]/90">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

function FaqAccordion({ faqs }: { faqs: LocalFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#7C1117] overflow-hidden border-t border-b border-[#D03412]/30 paper-grain">
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <Image src="/assets/paper-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <BackgroundPattern variant="grid" opacity={0.06} size={52} />
      <NoiseOverlay variant="grain02" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D03412] font-bold">
            FREQUENTLY ASKED
          </span>
          <h2 className="text-4xl sm:text-5xl font-editorial leading-[0.92] uppercase text-[#F8F3EF] tracking-tight">
            YOUR QUESTIONS,{" "}
            <span className="font-brush text-[#D03412] capitalize block">Answered.</span>
          </h2>
          <p className="text-sm font-mono text-[#F8F3EF]/75 leading-relaxed border-l-2 border-[#D03412] pl-4">
            Transparent answers about working with Outkast Studios — no jargon, no hidden
            conditions.
          </p>
          <div className="p-5 bg-[#8D161D] border border-[#D03412]/30 rounded-sm space-y-3">
            <span className="text-xs font-mono text-[#D03412] font-bold uppercase tracking-wider">
              HAVE ANOTHER QUESTION?
            </span>
            <p className="text-xs font-mono text-[#F8F3EF]/70 leading-relaxed">
              Reach out directly — we respond within 24 hours with clear, honest answers.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#F8F3EF] hover:text-[#D03412] font-bold transition-colors"
            >
              <span>TALK TO US</span>
              <ArrowUpRight size={12} className="text-[#D03412]" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-sm overflow-hidden transition-all duration-300 paper-grain ${
                  isOpen
                    ? "bg-[#7C1117] border-[#D03412] shadow-xl"
                    : "bg-[#7C1117]/80 border-[#D03412]/20 hover:border-[#D03412]/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
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

/* ─── Main Layout ──────────────────────────────────────────────────────────── */

export default function LocalPageLayout({
  headline,
  subheadline,
  localAngle,
  breadcrumbs,
  services,
  faqs,
  ctaHeadline = "Start Your Project",
  ctaBody = "Tell us about your business and what you want to achieve. We'll come back with a clear plan — no fluff.",
  internalLinks = [],
  whatsappMessage,
}: LocalPageLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { url: whatsappUrl, isConfigured: isWAConfigured } = getWhatsAppUrl(whatsappMessage);
  const emailInfo = getEmailHref();
  const projects = BUSINESS_CONFIG.projects;

  return (
    <div className="min-h-screen bg-[#7C1117] text-[#F8F3EF]">
      <Navbar />

      {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
      <Breadcrumb items={breadcrumbs} />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 pb-20 overflow-hidden">
        {/* Paper texture */}
        <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-multiply">
          <Image
            src="/assets/paper-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <BackgroundPattern variant="crosses" opacity={0.05} size={64} />
        <NoiseOverlay variant="grain01" />

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-8">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D03412] font-bold">
              OUTKAST STUDIOS ✦ LOCAL SERVICES
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-editorial leading-[0.9] uppercase text-[#F8F3EF] tracking-tight">
              {headline}
            </h1>
            <p className="text-lg sm:text-xl font-mono text-[#F8F3EF]/80 leading-relaxed max-w-2xl">
              {subheadline}
            </p>
            <p className="text-sm font-mono text-[#F8F3EF]/60 leading-relaxed max-w-2xl border-l-2 border-[#D03412] pl-4">
              {localAngle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-colors shadow-xl shadow-[#D03412]/30 cursor-pointer"
              >
                <span>START YOUR PROJECT</span>
                <ArrowUpRight size={14} />
              </button>
              {isWAConfigured ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>WHATSAPP US</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#D03412]/60 hover:border-[#D03412] text-[#F8F3EF] font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-colors cursor-pointer"
                >
                  <MessageCircle size={14} />
                  <span>SUBMIT PROJECT BRIEF</span>
                </button>
              )}
            </div>

            {/* Internal navigation links */}
            {internalLinks.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {internalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-mono text-[#F8F3EF]/60 hover:text-[#D03412] underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <TornEdge side="bottom" color="#5C0F14" height="h-6" />
      </section>

      {/* ── Services Grid ────────────────────────────────────────────────── */}
      <section
        id="services"
        className="relative py-24 px-6 md:px-12 bg-[#5C0F14] overflow-hidden paper-grain"
      >
        <BackgroundPattern variant="dots" opacity={0.08} size={48} />
        <NoiseOverlay variant="grain01" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D03412] font-bold">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial leading-tight uppercase text-[#F8F3EF]">
              OUR SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <div
                key={i}
                className="bg-[#8D161D] border border-[#D03412]/30 rounded-sm p-6 space-y-3 hover:border-[#D03412]/70 transition-colors paper-grain"
              >
                {svc.badge && (
                  <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold border border-[#D03412]/40 px-2 py-0.5 rounded-sm">
                    {svc.badge}
                  </span>
                )}
                <h3 className="text-xl font-editorial uppercase text-[#F8F3EF] tracking-wide">
                  {svc.title}
                </h3>
                <p className="text-xs font-mono text-[#F8F3EF]/75 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ────────────────────────────────────────────────────── */}
      <section
        id="portfolio"
        className="relative py-24 px-6 md:px-12 bg-[#7C1117] overflow-hidden paper-grain"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply">
          <Image src="/assets/paper-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <BackgroundPattern variant="lines" opacity={0.05} size={56} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D03412] font-bold">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial leading-tight uppercase text-[#F8F3EF]">
              VERIFIED PROJECTS
            </h2>
            <p className="text-sm font-mono text-[#F8F3EF]/70 max-w-2xl leading-relaxed">
              Real work. Real clients. No stock imagery, no made-up case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between bg-[#8D161D] border border-[#D03412]/30 rounded-sm overflow-hidden hover:border-[#D03412]/80 transition-all shadow-lg hover:shadow-[#D03412]/20"
              >
                <div>
                  <Link href={`/work/${project.id}`} className="block relative aspect-[4/3] overflow-hidden bg-[#5C0F14]">
                    <Image
                      src={project.imageSrc}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-mono text-[#D03412] uppercase tracking-widest font-bold">
                      {project.industry}
                    </span>
                    <h3 className="text-base font-editorial uppercase text-[#F8F3EF]">
                      <Link href={`/work/${project.id}`} className="hover:text-[#D03412] transition-colors">
                        {project.name}
                      </Link>
                    </h3>
                    <p className="text-xs font-mono text-[#F8F3EF]/65 leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center justify-between text-[11px] font-mono border-t border-[#D03412]/20 mt-2">
                  <Link
                    href={`/work/${project.id}`}
                    className="inline-flex items-center gap-1 text-[#F8F3EF]/80 hover:text-[#D03412] transition-colors"
                  >
                    <FileText size={12} />
                    <span>CASE STUDY</span>
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#D03412] hover:underline transition-all"
                    >
                      <span>LIVE SITE</span>
                      <ArrowUpRight size={11} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FaqAccordion faqs={faqs} />

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative py-24 px-6 md:px-12 bg-[#8D161D] overflow-hidden paper-grain"
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
          <Image src="/assets/paper-bg.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <BackgroundPattern variant="crosses" opacity={0.06} size={60} />
        <NoiseOverlay variant="grain02" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D03412] font-bold">
              READY TO BUILD?
            </span>
            <h2 className="text-4xl sm:text-6xl font-editorial leading-[0.9] uppercase text-[#F8F3EF] tracking-tight">
              {ctaHeadline}
            </h2>
            <p className="text-base font-mono text-[#F8F3EF]/80 leading-relaxed max-w-xl">
              {ctaBody}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-colors shadow-xl shadow-[#D03412]/30 cursor-pointer"
              >
                <span>START YOUR PROJECT</span>
                <ArrowUpRight size={14} />
              </button>
              {isWAConfigured ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>WHATSAPP DIRECT</span>
                </a>
              ) : (
                <a
                  href={emailInfo.href}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-[#D03412]/60 hover:border-[#D03412] text-[#F8F3EF] font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-colors"
                >
                  <span>{emailInfo.display}</span>
                </a>
              )}
            </div>

            <div className="pt-4 border-t border-[#D03412]/20 flex flex-wrap items-center gap-6 text-xs font-mono text-[#F8F3EF]/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#D03412]" />
                Based in India
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#D03412]" />
                Senior creative review
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#D03412]" />
                24-hour response
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Brief Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating WhatsApp on Location Pages */}
      <FloatingWhatsApp />

      <Footer />
    </div>
  );
}
