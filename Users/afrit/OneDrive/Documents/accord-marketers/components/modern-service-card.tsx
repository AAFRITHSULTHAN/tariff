"use client"

import type React from "react"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

interface ModernServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  gradient: string
  features?: string[]
  size?: "normal" | "large"
}

export default function ModernServiceCard({
  icon: Icon,
  title,
  description,
  gradient,
  features = [],
  size = "normal",
}: ModernServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02] ${
        size === "large" ? "md:col-span-2 lg:col-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-all duration-700`}
      />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl">
        <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500" />
        <div
          className={`absolute inset-0 rounded-3xl border-2 ${gradient.replace("from-", "border-").replace(" to-", "").replace(" via-", "")} opacity-0 group-hover:opacity-50 transition-all duration-500 animate-pulse`}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-bounce delay-1000" />
        <div className="absolute top-8 left-8 w-1 h-1 bg-white/30 rounded-full animate-bounce delay-2000" />
        <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce delay-500" />
      </div>

      {/* Content */}
      <div className="relative p-8 lg:p-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div
            className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
          >
            <Icon className="h-8 w-8 text-white" />
            {/* Icon glow */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500`}
            />
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight className="h-6 w-6 text-white/60" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Features (if provided) */}
        {features.length > 0 && (
          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mr-3`} />
                {feature}
              </div>
            ))}
          </div>
        )}

        {/* Action area */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            Learn More
          </div>

          {/* Progress bar */}
          <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
            />
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-all duration-700 rounded-3xl`}
        />
      </div>
    </div>
  )
}
