"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: 10, suffix: "+", label: "Global Corporate Giants" },
  { value: 1200, suffix: "+", label: "Success Stories" },
  { value: 10, suffix: "+", label: "Years of Continuous Growth" },
  { value: 100, suffix: "+", label: "Global Partnership footprints" },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );
    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-16 relative">
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
            <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Our Impact</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Proven Results That{" "}
            <span className="text-white">
              Speak Volumes
            </span>
          </h2>

          <p
            className={`text-xl text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Numbers don't lie. Here's the measurable impact we've delivered for startups just like yours.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 200 + 600}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {isVisible ? <CountUp end={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
                </div>
                <p className="text-gray-400 font-medium transition-all duration-700 delay-300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function formatNumber(value: number, suffix: string) {
  if (suffix === 'M+') {
    // Show as 0M+ to 50M+
    return value + 'M+';
  }
  return value + suffix;
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    let start: number | null = null;
    const duration = 1500; // 1.5 seconds

    function animate(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      let currentValue;
      if (suffix === 'M+') {
        // Animate smoothly for large numbers, show as integer M+
        currentValue = Math.round(progress * end);
      } else {
        // Animate every integer for smaller numbers
        currentValue = Math.round(progress * end);
      }
      setCount(currentValue);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 300); // 300ms delay

    return () => {
      clearTimeout(timeout);
      start = null;
    };
  }, [end, suffix]);

  return (
    <span style={{ display: 'inline-block' }}>
      {suffix === 'M+' ? `${count}M+` : `${count}${suffix}`}
    </span>
  );
}
