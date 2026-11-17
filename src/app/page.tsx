import Navbar from "@/components/Navbar";
import ScrollRail from "@/components/ScrollRail";
import HeroSection from "@/components/sections/HeroSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AiUgcSection from "@/components/sections/AiUgcSection";
import BrandBuildingSection from "@/components/sections/BrandBuildingSection";
import WhySection from "@/components/sections/WhySection";
import ProcessSection from "@/components/sections/ProcessSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { SectionSeam } from "@/components/ui/PaperAssets";

/* Section background colours, in page order — the seams tear from one into
   the next, staying strictly synchronized with each section's own background. */
const DEEP = "#7C1117";
const SURFACE = "#8D161D";
const DARK = "#5C0F14";
const INK = "#111111";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#7C1117] text-[#F8F3EF] relative selection:bg-[#D03412] selection:text-white overflow-hidden">
      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Live section rail — the ring tracks the section you're reading */}
      <ScrollRail />

      {/* SECTION 1: HERO */}
      <HeroSection />
      <SectionSeam from={DEEP} to={DARK} />

      {/* SECTION 2: WHAT WE DO (5 Core Disciplines) */}
      <WhatWeDoSection />
      <SectionSeam from={DARK} to={DEEP} flip />

      {/* SECTION 3: OUR WORK (Verified Portfolio Projects) */}
      <PortfolioSection />
      <SectionSeam from={DEEP} to={SURFACE} />

      {/* SECTION 4: AI ADVERTISING SHOWCASE (Flagship AI Video Showcase) */}
      <AiUgcSection />
      <SectionSeam from={SURFACE} to={DEEP} flip />

      {/* SECTION 5: BRAND BUILDING (External Creative Growth Partner) */}
      <BrandBuildingSection />
      <SectionSeam from={DEEP} to={SURFACE} />

      {/* SECTION 6: WHY OUTKAST (Six Core Principles) */}
      <WhySection />
      <SectionSeam from={SURFACE} to={DEEP} flip />

      {/* SECTION 7: OUR PROCESS (Interactive 6-Phase Timeline) */}
      <ProcessSection />
      <SectionSeam from={DEEP} to={SURFACE} />

      {/* SECTION 8: HOW WE WORK (Studio Operating Standards) */}
      <HowWeWorkSection />
      <SectionSeam from={SURFACE} to={DEEP} flip />

      {/* SECTION 9: FAQ (9 Transparent Answers) */}
      <FaqSection />
      <SectionSeam from={DEEP} to={SURFACE} />

      {/* SECTION 10: CONTACT & LEAD GENERATION (Working Brief Form & WhatsApp) */}
      <FinalCtaSection />
      <SectionSeam from={SURFACE} to={INK} />

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP CONVERSION SYSTEM */}
      <FloatingWhatsApp />
    </main>
  );
}
