import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { BackgroundPattern, NoiseOverlay } from "@/components/ui/PaperAssets";
import { BUSINESS_CONFIG } from "@/lib/business-config";

const BASE = BUSINESS_CONFIG.canonicalUrl;

export const metadata: Metadata = {
  title: "The Masked Astrologer — Luxury Mystic Brand | Outkast Studios",
  description:
    "Outkast Studios crafted a dark editorial portfolio experience for The Masked Astrologer — an exclusive luxury consultation brand.",
  alternates: { canonical: `${BASE}/work/the-masked-astrologer` },
  openGraph: {
    title: "The Masked Astrologer — Luxury Mystic Brand | Outkast Studios",
    description:
      "Outkast Studios crafted a dark editorial portfolio experience for The Masked Astrologer — an exclusive luxury consultation brand.",
    url: `${BASE}/work/the-masked-astrologer`,
    siteName: "Outkast Studios",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BASE}/work/the-masked-astrologer#article`,
  headline: "The Masked Astrologer — Luxury Mystic Brand | Outkast Studios",
  description:
    "Outkast Studios crafted a dark editorial portfolio experience for The Masked Astrologer — an exclusive luxury consultation brand.",
  author: { "@id": `${BASE}/#organization` },
  publisher: { "@id": `${BASE}/#organization` },
  url: `${BASE}/work/the-masked-astrologer`,
  mainEntityOfPage: `${BASE}/work/the-masked-astrologer`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Work", item: `${BASE}/work` },
    { "@type": "ListItem", position: 3, name: "The Masked Astrologer", item: `${BASE}/work/the-masked-astrologer` },
  ],
};

const otherProjects = BUSINESS_CONFIG.projects.filter((p) => p.id !== "the-masked-astrologer").slice(0, 3);

export default function TheMaskedAstrologerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="bg-[#111111] text-[#F8F3EF] min-h-screen">
        <Navbar />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-2 flex items-center gap-1.5 text-xs font-mono text-[#F8F3EF]/60">
          <Link href="/" className="hover:text-[#D03412] transition-colors">Home</Link>
          <ChevronRight size={12} className="text-[#D03412]/60" />
          <Link href="/work" className="hover:text-[#D03412] transition-colors">Work</Link>
          <ChevronRight size={12} className="text-[#D03412]/60" />
          <span className="text-[#F8F3EF]/90">The Masked Astrologer</span>
        </nav>

        {/* Hero */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 bg-[#111111]">
            <Image
              src="/assets/masked-astrologer.jpg"
              alt="The Masked Astrologer Luxury Portfolio by Outkast Studios"
              fill
              sizes="100vw"
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
          </div>
          <NoiseOverlay variant="grain01" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-32">
            <span className="inline-block text-[9px] font-mono uppercase tracking-widest text-[#D03412] border border-[#D03412]/60 bg-[#111111]/80 px-2 py-1 rounded-sm mb-4">
              VERIFIED CLIENT WORK
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-editorial leading-[0.9] uppercase text-[#F8F3EF] tracking-tight">
              The Masked Astrologer
            </h1>
            <p className="mt-4 text-lg sm:text-2xl font-mono text-[#F8F3EF]/70">
              High-End Mystic &amp; Luxury Experience
            </p>
          </div>
        </section>

        {/* Project Metadata */}
        <section className="relative py-16 px-6 md:px-12 border-b border-[#D03412]/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold">Industry</span>
              <p className="text-base font-editorial uppercase text-[#F8F3EF]">Luxury Portfolio</p>
              <p className="text-xs font-mono text-[#F8F3EF]/50">Private Consultation</p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold">Services Provided</span>
              <ul className="space-y-1">
                {["Mystic Brand Identity", "High-End Portfolio", "Private Session Consultation Flow"].map((s) => (
                  <li key={s} className="text-xs font-mono text-[#F8F3EF]/75 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#D03412] inline-block" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold">Status</span>
              <p className="text-base font-editorial uppercase text-[#F8F3EF]">Live &amp; Active</p>
              <a
                href="https://the-masked-astrologer-premium.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D03412] hover:underline"
              >
                the-masked-astrologer-premium.vercel.app <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="relative py-20 px-6 md:px-12 bg-[#8D161D] overflow-hidden">
          <BackgroundPattern variant="dots" opacity={0.06} size={48} />
          <NoiseOverlay variant="grain02" />
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D03412] font-bold">The Challenge</span>
              <h2 className="text-4xl sm:text-5xl font-editorial leading-[0.92] uppercase text-[#F8F3EF]">
                Mystic Authority.<br />Commoditised Online Perception.
              </h2>
              <p className="text-sm font-mono text-[#F8F3EF]/75 leading-relaxed max-w-xl">
                Astrological consulting often suffers from cheap, overcrowded digital representations.
                The client required a brand positioning that decoupled their insightful personal practice from cliché commercial horoscopes,
                elevating it into a confidential, high-ticket private consultation experience.
              </p>
              <p className="text-sm font-mono text-[#F8F3EF]/60 leading-relaxed max-w-xl border-l-2 border-[#D03412] pl-4">
                The objective was to create an aura of exclusivity and gravitas that speaks directly to high-net-worth individuals,
                executives, and seekers wanting serious strategic astrological guidance.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#D03412]/20">
              <Image
                src="/assets/masked-astrologer.jpg"
                alt="The Masked Astrologer design showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="relative py-20 px-6 md:px-12 overflow-hidden">
          <BackgroundPattern variant="grid" opacity={0.04} size={52} />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D03412] font-bold">Our Approach</span>
                <h2 className="text-4xl sm:text-5xl font-editorial leading-[0.92] uppercase text-[#F8F3EF]">
                  Atmospheric Dark Editorial &amp; Frictionless Intake
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm font-mono text-[#F8F3EF]/75 leading-relaxed">
                  We built a moody, cinema-grade editorial experience steeped in sacred geometry, dark parchment textures,
                  and intentional negative space. The booking funnel was designed as a bespoke consultation intake rather than
                  a transactional checkout.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Bespoke Atmosphere", desc: "Hypnotic visual tension balancing ancient astrological motifs with modern luxury typography." },
                    { title: "Private Intake Gateway", desc: "A discreet, respectful enquiry flow that ensures privacy for discerning clients." },
                    { title: "Positioning Exclusivity", desc: "Framed consultations as strategic advisory sessions rather than generic predictions." },
                    { title: "Immersive Interactions", desc: "Subtle micro-animations and smooth scroll pacing that reinforce depth and mystery." },
                  ].map((item) => (
                    <div key={item.title} className="bg-[#8D161D] border border-[#D03412]/20 rounded-sm p-4 space-y-2">
                      <h3 className="text-sm font-editorial uppercase text-[#F8F3EF]">{item.title}</h3>
                      <p className="text-xs font-mono text-[#F8F3EF]/60 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="relative py-20 px-6 md:px-12 bg-[#8D161D] overflow-hidden">
          <NoiseOverlay variant="grain01" />
          <div className="max-w-7xl mx-auto relative z-10 space-y-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D03412] font-bold">The Work &amp; Outcome</span>
            <h2 className="text-4xl sm:text-5xl font-editorial leading-[0.92] uppercase text-[#F8F3EF] max-w-2xl">
              A Distinctive Premium Digital Presence
            </h2>
            <p className="text-sm font-mono text-[#F8F3EF]/75 leading-relaxed max-w-3xl">
              Created a distinctive premium digital presence that communicates exclusivity and high-end positioning.
              The Masked Astrologer platform commands authority and provides an elevated client consultation journey.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://the-masked-astrologer-premium.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-colors shadow-xl shadow-[#D03412]/30"
              >
                <span>VIEW LIVE SITE</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </section>

        {/* Internal navigation */}
        <section className="py-10 px-6 md:px-12 border-b border-[#D03412]/20">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-4 text-xs font-mono">
            <span className="text-[#F8F3EF]/40 uppercase tracking-wider">Related:</span>
            <Link href="/work" className="text-[#F8F3EF]/60 hover:text-[#D03412] underline underline-offset-4 transition-colors">
              All Client Work
            </Link>
            <Link href="/branding-agency-haridwar" className="text-[#F8F3EF]/60 hover:text-[#D03412] underline underline-offset-4 transition-colors">
              Branding Agency Haridwar
            </Link>
            <Link href="/#contact" className="text-[#F8F3EF]/60 hover:text-[#D03412] underline underline-offset-4 transition-colors">
              Start Your Project
            </Link>
          </div>
        </section>

        {/* More Work */}
        <section className="relative py-20 px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D03412] font-bold">More Work</span>
              <h2 className="text-3xl font-editorial uppercase text-[#F8F3EF]">Other Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.id}`}
                  className="group block bg-[#8D161D] border border-[#D03412]/20 rounded-sm overflow-hidden hover:border-[#D03412]/60 transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.imageSrc}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] font-mono text-[#D03412] uppercase tracking-wider">{project.industry}</span>
                    <h3 className="text-base font-editorial uppercase text-[#F8F3EF]">{project.name}</h3>
                    <p className="text-xs font-mono text-[#F8F3EF]/60 line-clamp-2">{project.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
