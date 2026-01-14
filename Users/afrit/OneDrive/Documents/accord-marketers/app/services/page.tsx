import React, { useEffect, useRef } from "react";
import EnhancedButton from "@/components/enhanced-button";
import { Calendar, MessageCircle } from "lucide-react";
import Footer from "@/components/footer";
import DetailedServicesSection from "@/components/detailed-services-section";

const services = [
  {
    key: "service3",
    title: "Funnel Design & Content Marketing",
    whatWeDo: "Nurture leads with content that educates and converts.",
    outcomes: [
      "Custom funnel design for lead flow.",
      "SEO content and automated email sequences.",
      "Conversion-focused storytelling and copywriting.",
    ],
    video: "/WhatsApp Video 2025-07-03 at 12.44.47_7f66a787.mp4",
  },
  {
    key: "service2",
    title: "Paid Media & Performance Marketing",
    whatWeDo: "Launch high-performance ad campaigns across Google, Meta, and LinkedIn.",
    outcomes: [
      "Data-driven targeting and audience segmentation.",
      "Conversion-optimized creatives and landing pages.",
      "Real-time performance tracking and ROI scaling.",
    ],
    video: "/Paid Media & Performance Marketing.mp4",
  },
  {
    key: "service1",
    title: "Digital Strategy & Consulting",
    whatWeDo: "Build goal-driven strategies that align marketing with growth.",
    outcomes: [
      "Tailored marketing roadmap.",
      "Competitive analysis and customer persona mapping.",
      "Channel prioritization and budget planning.",
    ],
    video: "/Digital Strategy & Consulting.mp4",
  },
  {
    key: "service4",
    title: "SEO & Local Marketing",
    whatWeDo: "Improve organic visibility and dominate local search.",
    outcomes: [
      "On-page and technical SEO optimization.",
      "Google Business Profile optimization.",
      "Location-based keyword ranking and citation building.",
    ],
    video: "/SEO & Local Marketing.mp4",
  },
  {
    key: "service5",
    title: "Graphic & Visual Design",
    whatWeDo: "Deliver brand-aligned visuals that drive action.",
    outcomes: [
      "Logos, brand kits, and marketing materials.",
      "Ad creatives and UI design assets.",
      "Cohesive visual identity across platforms.",
    ],
    video: "/Graphic & Visual Design.mp4",
  },
  {
    key: "service6",
    title: "Video Marketing & Production",
    whatWeDo: "Produce compelling videos for social media, ads, and storytelling.",
    outcomes: [
      "Scriptwriting, shooting, and editing.",
      "Explainer, testimonial, and ad videos.",
      "Platform-optimized formats (Reels, Shorts, etc.).",
    ],
    video: "/Video Marketing & Production.mp4",
  },
  {
    key: "service7",
    title: "Business Consultation & Advisory",
    whatWeDo: "Guide startups with actionable growth advice.",
    outcomes: [
      "Go-to-market strategy and brand positioning.",
      "Campaign audits and performance diagnostics.",
      "Leadership mentoring and marketing team setup.",
    ],
    video: "/Business Consultation & Advisory.mp4",
  },
];

// Define the type for a service
interface Service {
  key: string;
  title: string;
  whatWeDo: string;
  outcomes: string[];
  video: string;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <div className="w-full flex justify-center my-12">
      <div className={`flex flex-col md:flex-row items-center md:items-stretch max-w-5xl w-full bg-black/80 rounded-3xl shadow-2xl overflow-hidden border border-white/10 ${isLeft ? '' : 'md:flex-row-reverse'}`}>        
        {/* Left: Old card style with text */}
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start p-8">
          <h3 className="text-3xl font-bold mb-2 text-white w-full text-center md:text-left">
            {service.title}
          </h3>
          <p className="text-lg font-medium mb-3 text-gray-200 w-full text-center md:text-left">
            <span className="font-semibold text-white">What We Do:</span> {service.whatWeDo}
          </p>
          <div className="mb-4 w-full text-center md:text-left">
            <span className="font-semibold text-white">Key Outcomes:</span>
            <ul className="list-disc list-inside ml-4 mt-1 text-gray-300">
              {service.outcomes.map((outcome: string, i: number) => (
                <li key={i}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right: Video with vignette effect, matching card shape and size */}
        <div className="h-fit w-full max-w-md border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] p-[1.5em] flex items-center justify-center relative backdrop-blur-[12px] shadow-xl">
          <video
            src={service.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain rounded-[1.5em] relative z-10 mix-blend-screen"
            style={{ boxShadow: '0 0 60px 0 rgba(75,30,133,0.15)' }}
          />
          {/* Vignette overlay */}
          <div className="absolute inset-0 pointer-events-none z-20 rounded-[1.5em]" style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)'}} />
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden px-2 md:px-8 py-16 flex flex-col items-center">
      <DetailedServicesSection />
      <Footer />
    </div>
  );
}