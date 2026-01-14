"use client"

import type React from "react"

import { ArrowRight } from "lucide-react"
import { useRef, useState } from "react"

interface EnhancedButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  icon?: React.ReactNode
}

export default function EnhancedButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  icon,
}: EnhancedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const newRipple = { x, y, id: Date.now() }

      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 600)
    }

    onClick?.()
  }

  const baseClasses = "relative font-bold font-sans transition-all duration-200 group focus:outline-none"

  const variantClasses = {
    primary:
      "bg-white text-black hover:bg-gray-200 active:bg-gray-300 px-8 py-3 text-lg rounded-full border-none shadow-none",
    secondary:
      "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1",
    outline:
      "border-2 border-white/20 text-white hover:bg-white/10 hover:border-purple-400/50 backdrop-blur-sm bg-transparent hover:scale-105 hover:-translate-y-1 hover:shadow-lg",
  }

  const sizeClasses = {
    sm: "px-6 py-2 text-sm rounded-xl",
    md: "px-8 py-3 text-base rounded-2xl",
    lg: "px-12 py-4 text-lg rounded-2xl",
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}

      {/* Content */}
      <span className="relative flex items-center justify-center space-x-2">
        <span>{children}</span>
        {variant !== "primary" && (icon || <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />)}
      </span>
    </button>
  )
}
