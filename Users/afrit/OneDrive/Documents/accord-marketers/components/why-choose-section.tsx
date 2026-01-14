"use client"

import { BarChart3, GraduationCap, MessageCircle, Network, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const benefits = [
  {
    icon: GraduationCap,
    title: "Our Approach",
    description: "To us, it's not just work - we take pride in the solutions we deliver. We encourage each other to achieve excellence in all endeavors and aren't satisfied until projects meet our own personal high standards.​​",
    position: "top-left",
  },
  {
    icon: MessageCircle,
    title: "Knowledge. Passion. Fused Together.",
    description:
      "We take our work very seriously, but we don't take ourselves too seriously. We love doing what we do, and you'll enjoy working with us. Our teams are small and agile, when you work with us you'll feel like part of the family.",
    position: "top-right",
  },
  {
    icon: Network,
    title: "Honesty and Integrity",
    description: "We're open and honest about what we do. We'd rather a difference to you than make a quick quid for ourselves.",
    position: "bottom-left",
  },
  {
    icon: BarChart3,
    title: "100% Satisfaction Guarantee",
    description: "We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.",
    position: "bottom-right",
  },
]

const testimonials = [
  {
    name: "Ronan Quin",
    title: "Alenandra Advisory",
    quote: "Qwantome’s HTS classification work went far beyond just assigning a code. They explained the logic, risks, and alternative classifications clearly, which helped us defend our position internally and with customs. This directly reduced our duty exposure.",
    image: "/placeholder.svg?height=60&width=60",
    metric: "Reduced Duty Exposure",
  },
  {
    name: "Alison Cummins",
    title: "AC Insights",
    quote: "The cross-border trade strategy report from Qwantome completely changed how we approached our US and EU expansion. Instead of reacting to tariffs, we planned for them — pricing, sourcing, and compliance all aligned.”",
    image: "/placeholder.svg?height=60&width=60",
    metric: "Expansion Success",
  },
  {
    name: "Don Francis",
    title: "Decklar",
    quote: "Product labelling was a major risk area for us. Qwantome identified gaps we hadn’t even considered and guided us through compliant labelling for multiple markets without overengineering the solution.",
    image: "/placeholder.svg?height=60&width=60",
    metric: "Risk Mitigated",
  },
]

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("why-choose-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="why-choose-section" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center space-x-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
            </div>
            <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Why Choose Us</span>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Our Clients Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Qwantome
            </span>
          </h2>

          <p
            className={`text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            We combine strategic thinking with creative execution to deliver measurable results that drive sustainable
            growth for ambitious startups and established businesses.
          </p>
        </div>

        {/* Benefits Layout */}
        <div className="relative flex items-center justify-center min-h-[800px]">
          {/* Benefit Points - Positioned to appear above testimonial */}
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const positions: Record<string, string> = {
              "top-left": "absolute top-0 left-0 lg:top-0 lg:left-0 z-20",
              "top-right": "absolute top-0 right-0 lg:top-0 lg:right-0 z-20",
              "bottom-left": "absolute bottom-0 left-0 lg:bottom-0 lg:left-0 z-20",
              "bottom-right": "absolute bottom-0 right-0 lg:bottom-0 lg:right-0 z-20",
            }

            return (
              <div
                key={index}
                className={`${positions[benefit.position]} w-80 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 200 + 700}ms` }}
              >
                <div className="text-center lg:text-left">
                  {/* Icon */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-xs mx-auto lg:mx-0">{benefit.description}</p>
                </div>
              </div>
            )
          })}

          {/* Central Testimonial Area - Lower z-index */}
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
          >
            {/* Main Testimonial Card */}
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl blur-2xl"></div>

              {/* Floating Geometric Shapes */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-12 opacity-80"></div>
              <div className="absolute -top-4 -right-12 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-70"></div>
              <div className="absolute -bottom-6 -left-10 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl rotate-45 opacity-60"></div>
              <div className="absolute -bottom-8 -right-6 w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl -rotate-12 opacity-75"></div>

              {/* Animated Particles */}
              <div className="absolute top-1/4 -left-6 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="absolute top-3/4 -right-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-1/4 -left-4 w-1 h-1 bg-orange-400 rounded-full animate-bounce delay-1000"></div>

              {/* Main Card */}
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl p-10 lg:p-12 max-w-lg shadow-2xl">
                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-orange-400/50 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400/50 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-400/50 rounded-br-lg"></div>

                <div className="text-center">
                  {/* Stars with Animation */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 fill-yellow-400 text-yellow-400 mx-1 transition-all duration-300 hover:scale-125`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Quote with Enhanced Typography */}
                  <blockquote className="text-white text-xl lg:text-2xl font-medium mb-8 leading-relaxed relative">
                    <span className="text-6xl text-orange-400/30 absolute -top-4 -left-2 font-serif">"</span>
                    {testimonials[currentTestimonial].quote}
                    <span className="text-6xl text-orange-400/30 absolute -bottom-8 -right-2 font-serif">"</span>
                  </blockquote>

                  {/* Author Section with Enhanced Design */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className="text-center">
                      <div className="text-white font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-300 text-sm mb-1">{testimonials[currentTestimonial].title}</div>
                      <div className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-bold text-sm">
                        {testimonials[currentTestimonial].metric}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-3xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-400 to-red-400 transition-all duration-5000 ease-linear"
                    style={{
                      width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`,
                      animation: "progress 5s linear infinite",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Dots */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`relative transition-all duration-300 ${index === currentTestimonial
                    ? "w-8 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full"
                    }`}
                >
                  {index === currentTestimonial && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-sm opacity-75"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Decorative connecting lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-5">
            {/* Animated connecting lines */}
            <div className="absolute top-16 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
            </div>
            <div className="absolute bottom-16 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
            </div>
            <div className="absolute left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse delay-500"></div>
            </div>
            <div className="absolute right-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-pink-400/30 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse delay-1500"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  )
}
