"use client"

import { Calendar, MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import EnhancedButton from "./enhanced-button"

export default function CTASection() {
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
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2
          className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Scale Your Startup?
          </span>
        </h2>

        <p
          className={`text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Join 200+ founders who've transformed their businesses with our proven growth strategies. Let's build your
          success story together.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <EnhancedButton variant="primary" size="lg" icon={<Calendar className="h-5 w-5" />}>
            Book Free Strategy Call
          </EnhancedButton>
          <EnhancedButton variant="outline" size="lg" icon={<MessageCircle className="h-5 w-5" />}>
            Get Custom Proposal
          </EnhancedButton>
        </div>

        {/* Enhanced Trust Indicators */}
        <div
          className={`grid grid-cols-3 gap-8 text-center transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "15 min", label: "Strategy Call", color: "from-purple-400 to-pink-400" },
            { value: "No Commitment", label: "Free Consultation", color: "from-blue-400 to-cyan-400" },
            { value: "24h", label: "Response Time", color: "from-green-400 to-teal-400" },
          ].map((item, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div
                className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2 group-hover:animate-pulse`}
              >
                {item.value}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
