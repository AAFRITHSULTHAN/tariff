"use client"

import { Play } from "lucide-react"
import { useEffect, useState } from "react"
import EnhancedButton from "./enhanced-button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative SVG on the right side for large screens, only within hero section */}
      <div className="hidden lg:block absolute top-0 right-0 h-full z-0 pointer-events-none">
        <img src="/about-us-page-animate.svg" alt="About Us Animation" className="h-full w-auto object-contain opacity-90" />
      </div>

      {/* Reduced background elements since we have space background */}
      <div className="absolute inset-0">
        {/* Subtle overlay gradients */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-12">
        {/* Main Headline */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-extrabold font-sans text-white leading-tight mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          International Trade &<br />Business Consulting
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg md:text-2xl text-gray-400 font-medium max-w-2xl mb-10 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          We support businesses with global trade compliance, regulatory advisory, data intelligence, and cross-border strategy—helping them operate and grow across international markets with clarity and confidence
        </p>

        {/* CTA Button */}
        <div
          className={`flex flex-col sm:flex-row items-start justify-start gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <EnhancedButton variant="primary" size="lg">
            Start Your Growth Journey
          </EnhancedButton>
        </div>
      </div>
    </section>
  )
}
