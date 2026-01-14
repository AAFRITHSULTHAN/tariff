"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Founder, TechLaunch",
    company: "TechLaunch",
    quote: "Qwantome transformed our entire growth trajectory. From $50K to $2M ARR in 18 months.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    metric: "4000% Growth",
  },
  {
    name: "Priya Sinha",
    title: "CMO, BloomWear",
    company: "BloomWear",
    quote: "Their creative campaigns didn't just look good—they converted at rates we never thought possible.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    metric: "320% ROAS",
  },
  {
    name: "Neeraj Sharma",
    title: "Co-founder, FitFuel",
    company: "FitFuel",
    quote: "The video content they created became our highest-performing ads. Complete game-changer.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    metric: "500% CTR Increase",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Founders Love</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Working With Us
            </span>
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 mx-1" />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex items-center justify-center space-x-6">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className="rounded-full border-2 border-purple-400/50"
              />
              <div className="text-left">
                <div className="text-xl font-bold text-white">{testimonials[currentIndex].name}</div>
                <div className="text-gray-400">{testimonials[currentIndex].title}</div>
                <div className="text-purple-400 font-semibold mt-1">{testimonials[currentIndex].metric}</div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-purple-400 scale-125" : "bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-20">
          <p className="text-center text-gray-400 mb-8">Trusted by innovative startups worldwide</p>
          <div className="flex justify-center items-center space-x-12 opacity-50">
            {["TechLaunch", "BloomWear", "FitFuel", "Zensy", "CloudGrid"].map((company) => (
              <div key={company} className="text-xl font-bold text-white">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
