import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import StatsSectionWrapper from "@/components/stats-section-wrapper";
import WhyChooseSection from "@/components/why-choose-section";
import ProcessSection from "@/components/process-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative bg-black">
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <StatsSectionWrapper />
        <WhyChooseSection />
        <ProcessSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
