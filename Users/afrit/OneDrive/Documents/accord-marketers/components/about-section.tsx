"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"



export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate stats

          // Play video when section becomes visible
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Handle autoplay restrictions
            })
          }
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
    <section id="about" ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div
              className={`flex items-center space-x-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              </div>
              <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About Company</span>
            </div>

            {/* Main Heading */}
            <h2
              className={`text-4xl md:text-6xl font-bold text-white leading-tight transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              A Team For your Vision
            </h2>

            {/* Description */}
            <div
              className={`space-y-4 text-lg text-gray-400 leading-relaxed max-w-lg transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <p>
                We believe in trust and long term relationships and engage with customers like partners and not as vendors. We succeed only if our customers and their businesses succeed.
              </p>
              <p>
                To make your dream come true, you should have the best in class team with exceptional skills to accomplish it. We have an awesome set of small teams with exceptionally skilled people
              </p>
              <p>
                Every day, we go above and beyond to meet the needs of our customers. By anticipating challenges and applying our visionary mindset, we advance global trade and bring communities together.
              </p>
            </div>


          </div>

          {/* Right Content - Video */}
          <div className="relative flex items-center justify-center">
            {/* Main Video */}
            <div
              className={`relative z-10 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
            >
              <div className="w-96 h-96 flex items-center justify-center rounded-3xl overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-3xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/gig.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Glow effect behind the video */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
            </div>

            {/* Decorative Elements */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-gray-700/30 rounded-full transition-all duration-1500 delay-200 ${isVisible ? "opacity-30 scale-100" : "opacity-0 scale-75"
                }`}
            ></div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-1000 ${isVisible ? "opacity-60 animate-float" : "opacity-0"
                    }`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + i * 12}%`,
                    animationDelay: `${i * 500}ms`,
                    animationDuration: `${3 + (i % 3)}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
