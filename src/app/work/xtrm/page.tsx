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
  title: "XTRM — Hip-Hop Artist Website & Streaming Platform | Outkast Studios",
  description:
    "Outkast Studios built an aggressive editorial web experience for XTRM — rap artist platform integrating streaming, brand identity and streetwear aesthetic.",
  alternates: { canonical: `${BASE}/work/xtrm` },
  openGraph: {
    title: "XTRM — Hip-Hop Artist Website & Streaming Platform | Outkast Studios",
    description:
      "Outkast Studios built an aggressive editorial web experience for XTRM — rap artist platform integrating streaming, brand identity and streetwear aesthetic.",
    url: `${BASE}/work/xtrm`,
    siteName: "Outkast Studios",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${BASE}/work/xtrm#article`,
  headline: "XTRM — Hip-Hop Artist Website & Streaming Platform | Outkast Studios",
  description:
    "Outkast Studios built an aggressive editorial web experience for XTRM — rap artist platform integrating streaming, brand identity and streetwear aesthetic.",
  author: { "@id": `${BASE}/#organization` },
  publisher: { "@id": `${BASE}/#organization` },
  url: `${BASE}/work/xtrm`,
  mainEntityOfPage: `${BASE}/work/xtrm`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Work", item: `${BASE}/work` },
    { "@type": "ListItem", position: 3, name: "XTRM", item: `${BASE}/work/xtrm` },
  ],
};

const otherProjects = BUSINESS_CONFIG.projects.filter((p) => p.id !== "xtrm").slice(0, 3);

export default function XtrmProjectPage() {
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
          <span className="text-[#F8F3EF]/90">XTRM</span>
        </nav>

        {/* Hero */}
        <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 bg-[#111111]">
            <Image
              src="/assets/xtrm.jpg"
              alt="XTRM Rap Artist Platform by Outkast Studios"
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
              XTRM
            </h1>
            <p className="mt-4 text-lg sm:text-2xl font-mono text-[#F8F3EF]/70">
              Rap Artist Platform &amp; Streaming Presence
            </p>
          </div>
        </section>

        {/* Project Metadata */}
        <section className="relative py-16 px-6 md:px-12 border-b border-[#D03412]/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold">Industry</span>
              <p className="text-base font-editorial uppercase text-[#F8F3EF]">Music &amp; Artist Brand</p>
              <p className="text-xs font-mono text-[#F8F3EF]/50">Independent Hip-Hop</p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D03412] font-bold">Services Provided</span>
              <ul className="space-y-1">
                {["Artist Brand Identity", "Interactive Website", "Streaming Conversion Architecture"].map((s) => (
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
                href="https://xtrm-gamma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D03412] hover:underline"
              >
                xtrm-gamma.vercel.app <ExternalLink size={11} />
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
                Strong Sound.<br />Fragmented Digital Identity.
              </h2>
              <p className="text-sm font-mono text-[#F8F3EF]/75 leading-relaxed max-w-xl">
                Hip-hop artist XTRM had raw musical talent and growing buzz across platforms, but lacked a centralised
                destination to convert listeners into dedicated fans. Relying solely on fragmented social links and generic link-in-bio
                pages diluted the artist&apos;s aesthetic and limited direct-to-fan engagement.
              </p>
              <p className="text-sm font-mono text-[#F8F3EF]/60 leading-relaxed max-w-xl border-l-2 border-[#D03412] pl-4">
                To capture serious attention from industry gatekeepers and lifestyle collaborators, the brand required an
                uncompromising, high-fashion web experience that commanded respect.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#D03412]/20">
              <Image
                src="/assets/xtrm.jpg"
                alt="XTRM web design showcase"
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
                  High-Fashion Streetwear Web Architecture
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm font-mono text-[#F8F3EF]/75 leading-relaxed">
                  We engineered an aggressive, dark editorial aesthetic blending brutalist typography with streetwear visual codes.
                  The platform prioritises immediate music discovery, frictionless routing to Spotify, Apple Music, and YouTube,
                  while establishing an iconic persona.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Direct Audio Stream Hub", desc: "One-click routing to major streaming platforms to maximise organic listener counts." },
                    { title: "Streetwear Editorial", desc: "High-contrast visual language reflecting underground hip-hop culture." },
                    { title: "Mobile Performance", desc: "Ultra-fast loading times optimised for social media swipe-ups and mobile fans." },
                    { title: "Merch & Release Architecture", desc: "Structured layouts ready for drop schedules, tour dates, and exclusive merch." },
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
              An Iconic Digital Hub for Independent Hip-Hop
            </h2>
            <p className="text-sm font-mono text-[#F8F3EF]/75 leading-relaxed max-w-3xl">
              Created a fully operational artist platform delivering a complete music discovery and streaming journey.
              The digital experience positions XTRM not just as a musician, but as a cultural entity with a compelling brand presence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://xtrm-gamma.vercel.app/"
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
              Brand Building &amp; Identity
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
