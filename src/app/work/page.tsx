import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import { BackgroundPattern, NoiseOverlay } from "@/components/ui/PaperAssets";
import { BUSINESS_CONFIG } from "@/lib/business-config";

export const metadata: Metadata = {
  title: "Our Work | Outkast Studios — Case Studies & Portfolio",
  description:
    "Explore Outkast Studios' verified client work including websites, brand identities, artist platforms and digital experiences.",
  alternates: {
    canonical: `${BUSINESS_CONFIG.canonicalUrl}/work`,
  },
  openGraph: {
    title: "Our Work | Outkast Studios — Case Studies & Portfolio",
    description:
      "Explore Outkast Studios' verified client work including websites, brand identities, artist platforms and digital experiences.",
    url: `${BUSINESS_CONFIG.canonicalUrl}/work`,
    siteName: "Outkast Studios",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BUSINESS_CONFIG.canonicalUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Work",
      item: `${BUSINESS_CONFIG.canonicalUrl}/work`,
    },
  ],
};

export default function WorkPage() {
  const projects = BUSINESS_CONFIG.projects;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-[#111111] text-[#F8F3EF]">
        <Navbar />

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-2 flex items-center gap-1.5 text-xs font-mono text-[#F8F3EF]/60"
        >
          <Link href="/" className="hover:text-[#D03412] transition-colors">
            Home
          </Link>
          <ChevronRight size={12} className="text-[#D03412]/60" />
          <span className="text-[#F8F3EF]/90">Work</span>
        </nav>

        {/* Hero */}
        <section className="relative px-6 md:px-12 pt-10 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-luminosity">
            <Image
              src="/assets/paper-bg.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <BackgroundPattern variant="grid" opacity={0.04} size={56} />
          <NoiseOverlay variant="grain01" />

          <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D03412] font-bold">
              OUTKAST STUDIOS ✦ PORTFOLIO
            </span>
            <h1 className="mt-4 text-5xl sm:text-7xl lg:text-8xl font-editorial leading-[0.9] uppercase text-[#F8F3EF] tracking-tight">
              Our <span className="text-[#D03412]">Work</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg font-mono text-[#F8F3EF]/70 leading-relaxed max-w-2xl">
              Verified client work. Real briefs, real outcomes. No stock imagery,
              no fabricated metrics.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="relative px-6 md:px-12 pb-32 overflow-hidden">
          <BackgroundPattern variant="dots" opacity={0.04} size={40} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.id}`}
                  className="group block bg-[#8D161D] border border-[#D03412]/20 rounded-sm overflow-hidden hover:border-[#D03412]/70 transition-all duration-300 shadow-xl hover:shadow-[#D03412]/20"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#5C0F14]">
                    <Image
                      src={project.imageSrc}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                    {project.isVerifiedClientWork && (
                      <span className="absolute top-4 left-4 text-[9px] font-mono uppercase tracking-widest text-[#D03412] font-bold border border-[#D03412]/60 bg-[#111111]/80 px-2 py-1 rounded-sm">
                        VERIFIED CLIENT WORK
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-mono text-[#D03412] uppercase tracking-widest font-bold">
                      {project.industry}
                    </span>
                    <h2 className="text-2xl font-editorial uppercase text-[#F8F3EF] tracking-wide">
                      {project.name}
                    </h2>
                    <p className="text-xs font-mono text-[#F8F3EF]/60 leading-relaxed">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.servicesProvided.map((svc) => (
                        <span
                          key={svc}
                          className="text-[9px] font-mono uppercase tracking-wider text-[#F8F3EF]/50 border border-[#F8F3EF]/15 px-2 py-0.5 rounded-sm"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D03412] group-hover:gap-3 transition-all">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-6 md:px-12 bg-[#8D161D] overflow-hidden">
          <BackgroundPattern variant="crosses" opacity={0.06} size={60} />
          <NoiseOverlay variant="grain02" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D03412] font-bold">
                START YOUR PROJECT
              </span>
              <h2 className="text-4xl sm:text-6xl font-editorial leading-[0.9] uppercase text-[#F8F3EF] tracking-tight">
                Want work like this?
              </h2>
              <p className="text-base font-mono text-[#F8F3EF]/75 leading-relaxed max-w-xl">
                Tell us about your business. We&apos;ll come back with a clear plan — no fluff,
                no inflated proposals.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D03412] hover:bg-[#b02a0e] text-[#F8F3EF] font-mono text-xs uppercase tracking-widest font-bold rounded-sm transition-colors shadow-xl shadow-[#D03412]/30"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
