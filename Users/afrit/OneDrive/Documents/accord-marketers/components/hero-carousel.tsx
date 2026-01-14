"use client"

import { useEffect, useState } from "react"

const carouselItems = [
  "Launch, scale, and dominate your market with smart marketing.",
  "Built for founders: ROI-first campaigns that convert.",
  "From brand awareness to revenue—we manage it all.",
  "Creative meets analytics to power your digital engine.",
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-16 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <p className="text-lg text-blue-200 font-medium">• {item}</p>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex space-x-2 mt-4">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-400" : "bg-blue-400/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
