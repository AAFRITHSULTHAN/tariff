"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const brands = [
  {
    name: "AC Insights",
    logo: "/ac-insights-logo.png",
    width: 200,
    height: 80,
  },
  {
    name: "Growth Process",
    logo: "/growth-icon.png",
    width: 100,
    height: 100,
  },
  {
    name: "PJK",
    logo: "/pjk-logo.png",
    width: 160,
    height: 80,
  },
  {
    name: "Alexandra Advisory",
    logo: "/alexandra-logo.png",
    width: 220,
    height: 80,
  },
  {
    name: "Pan Tiles",
    logo: "/pantiles-logo.png",
    width: 180,
    height: 80,
  },
  {
    name: "Mowerr",
    logo: "/mowerr-logo.png",
    width: 180,
    height: 80,
  },
]

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Working With the</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Best Clients and Partners
            </span>
          </h2>
          <p
            className={`text-xl text-gray-400 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            We are proud to collaborate with industry leaders and visionary companies.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`w-full h-40 flex items-center justify-center transition-all duration-500 hover:scale-105 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain max-h-24 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
