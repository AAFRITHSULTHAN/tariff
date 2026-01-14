"use client"

import { BarChart3, Brush, Camera, Search, Target, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Target,
    title: "Strategic Consulting",
    description: "Data-driven strategies that align with your business goals and market opportunities.",
    color: "from-purple-500 to-pink-500",
    position: { x: 0, y: -200 },
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "ROI-focused campaigns across Meta, Google, and LinkedIn that deliver measurable results.",
    color: "from-blue-500 to-cyan-500",
    position: { x: 173, y: -100 },
  },
  {
    icon: Brush,
    title: "Creative Design",
    description: "Stunning visuals that capture attention and drive conversions across all touchpoints.",
    color: "from-green-500 to-teal-500",
    position: { x: 173, y: 100 },
  },
  {
    icon: Camera,
    title: "Video Production",
    description: "High-impact video content for ads, social media, and brand storytelling that resonates.",
    color: "from-orange-500 to-red-500",
    position: { x: 0, y: 200 },
  },
  {
    icon: Search,
    title: "SEO & Content",
    description: "Organic growth through strategic content and search optimization that builds authority.",
    color: "from-indigo-500 to-purple-500",
    position: { x: -173, y: 100 },
  },
  {
    icon: Zap,
    title: "Conversion Optimization",
    description: "Turn more visitors into customers with data-backed improvements and testing.",
    color: "from-yellow-500 to-orange-500",
    position: { x: -173, y: -100 },
  },
]

export default function UniqueServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (centerRef.current) {
        const rect = centerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        setMousePosition({
          x: (e.clientX - centerX) * 0.1,
          y: (e.clientY - centerY) * 0.1,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10"></div>

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p
            className={`text-xl text-gray-400 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Discover our comprehensive suite of services designed to accelerate your digital growth
          </p>
        </div>

        {/* Interactive Services Constellation */}
        <div className="relative flex items-center justify-center min-h-[800px]">
          {/* Central Hub */}
          <div
            ref={centerRef}
            className={`relative z-20 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center shadow-2xl relative group cursor-pointer">
              <div className="text-white font-bold text-lg">Services</div>

              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping animation-delay-1000"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
          </div>

          {/* Orbiting Service Icons */}
          {services.map((service, index) => {
            const Icon = service.icon
            const isActive = activeService === index
            const delay = index * 200

            return (
              <div
                key={index}
                className={`absolute transition-all duration-1000 cursor-pointer group ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{
                  transform: `translate(${service.position.x + mousePosition.x * 0.5}px, ${
                    service.position.y + mousePosition.y * 0.5
                  }px)`,
                  transitionDelay: `${delay}ms`,
                }}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Connection Line */}
                <div
                  className={`absolute top-1/2 left-1/2 origin-center transition-all duration-500 ${
                    isActive ? "opacity-100 scale-100" : "opacity-30 scale-75"
                  }`}
                  style={{
                    width: Math.sqrt(service.position.x ** 2 + service.position.y ** 2),
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${service.color.split(" ")[1]}50, transparent)`,
                    transform: `rotate(${Math.atan2(service.position.y, service.position.x)}rad) translateX(-50%)`,
                    transformOrigin: "0 50%",
                  }}
                />

                {/* Service Icon */}
                <div
                  className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-125 group-hover:shadow-2xl ${
                    isActive ? "scale-125 shadow-2xl" : ""
                  }`}
                >
                  <Icon className="h-8 w-8 text-white" />

                  {/* Icon glow */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.color} blur-lg transition-opacity duration-500 ${
                      isActive ? "opacity-75" : "opacity-0 group-hover:opacity-50"
                    }`}
                  />

                  {/* Floating particles around active service */}
                  {isActive && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-bounce"
                          style={{
                            left: `${20 + Math.cos((i * 60 * Math.PI) / 180) * 40}px`,
                            top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 40}px`,
                            animationDelay: `${i * 100}ms`,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>

                {/* Service Details Popup */}
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                    {/* Animated border */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-20 blur-sm`}
                    />
                  </div>
                </div>
              </div>
            )
          })}

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-1000 ${
                  isVisible ? "opacity-60 animate-float" : "opacity-0"
                }`}
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${20 + i * 8}%`,
                  animationDelay: `${i * 500}ms`,
                  animationDuration: `${3 + (i % 3)}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-400 mb-6">Ready to explore how we can help your business grow?</p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Discover Our Process
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}
