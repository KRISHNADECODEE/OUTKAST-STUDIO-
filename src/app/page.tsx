import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ApproachSection from "@/components/sections/ApproachSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WhySection from "@/components/sections/WhySection";
import ResultsSection from "@/components/sections/ResultsSection";
import AiUgcSection from "@/components/sections/AiUgcSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import Footer from "@/components/sections/Footer";
import { SectionSeam } from "@/components/ui/PaperAssets";

/* Section background colours, in page order — the seams tear from one into
   the next, so these have to stay in sync with each section's own bg class. */
const DEEP = "#7C1117";
const SURFACE = "#8D161D";
const INK = "#111111";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#7C1117] text-[#F8F3EF] relative selection:bg-[#D03412] selection:text-white overflow-hidden">
      {/* Fixed Sticky Header */}
      <Navbar />

      {/* 14 Sequential Editorial Sections, separated by torn paper seams */}
      <HeroSection />
      <SectionSeam from={DEEP} to={SURFACE} />

      <PhilosophySection />
      <SectionSeam from={SURFACE} to={DEEP} flip />

      <ApproachSection />
      <SectionSeam from={DEEP} to={SURFACE} />

      <ServicesSection />
      <SectionSeam from={SURFACE} to={DEEP} flip />

      <PortfolioSection />
      <SectionSeam from={DEEP} to={SURFACE} />

      <WhySection />
      <SectionSeam from={SURFACE} to={DEEP} flip />

      <ResultsSection />
      <SectionSeam from={DEEP} to={SURFACE} />

      <AiUgcSection />
      <SectionSeam from={SURFACE} to={DEEP} flip />

      <ProcessSection />
      <SectionSeam from={DEEP} to={SURFACE} />

      <TestimonialsSection />
      <SectionSeam from={SURFACE} to={DEEP} flip />

      <BrandsMarquee />
      <SectionSeam from={DEEP} to={SURFACE} />

      <FaqSection />
      <SectionSeam from={SURFACE} to={DEEP} flip />

      <FinalCtaSection />
      <SectionSeam from={DEEP} to={INK} />

      <Footer />
    </main>
  );
}
