"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  baseY: number
}

interface Meteor {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const meteorsRef = useRef<Meteor[]>([])
  const animationRef = useRef<number>()
  const lastMeteorTime = useRef<number>(0)
  const scrollY = useRef<number>(0)
  const isMobile = useRef<boolean>(false)
  const devicePixelRatio = useRef<number>(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Detect mobile device and performance capabilities
    const checkDevice = () => {
      isMobile.current =
        window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      devicePixelRatio.current = Math.min(window.devicePixelRatio || 1, isMobile.current ? 2 : 3)
    }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()

      // Set actual size in memory (scaled for performance on mobile)
      canvas.width = rect.width * devicePixelRatio.current
      canvas.height = rect.height * devicePixelRatio.current

      // Scale the canvas back down using CSS
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"

      // Scale the drawing context so everything draws at the correct size
      ctx.scale(devicePixelRatio.current, devicePixelRatio.current)
    }

    const createStars = () => {
      const stars: Star[] = []
      // Adjust star count based on device performance
      const starCount = isMobile.current ? 150 : 300
      const canvasWidth = canvas.width / devicePixelRatio.current
      const canvasHeight = canvas.height / devicePixelRatio.current

      for (let i = 0; i < starCount; i++) {
        const baseY = Math.random() * (canvasHeight + (isMobile.current ? 1000 : 2000))
        stars.push({
          x: Math.random() * canvasWidth,
          y: baseY,
          baseY: baseY,
          size: Math.random() * (isMobile.current ? 2 : 2.5) + (isMobile.current ? 0.5 : 0.8),
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
        })
      }
      starsRef.current = stars
    }

    const handleScroll = () => {
      scrollY.current = window.scrollY
    }

    // Throttle scroll events on mobile for better performance
    const throttledHandleScroll = isMobile.current
      ? (() => {
          let ticking = false
          return () => {
            if (!ticking) {
              requestAnimationFrame(() => {
                handleScroll()
                ticking = false
              })
              ticking = true
            }
          }
        })()
      : handleScroll

    const createMeteor = (currentTime: number) => {
      // Reduce meteor frequency on mobile
      const meteorInterval = isMobile.current ? 15000 : 10000 // 15s on mobile, 10s on desktop

      if (currentTime - lastMeteorTime.current >= meteorInterval) {
        const meteorCount = isMobile.current ? 1 : Math.floor(Math.random() * 2) + 2 // 1 on mobile, 2-3 on desktop
        const canvasWidth = canvas.width / devicePixelRatio.current

        for (let i = 0; i < meteorCount; i++) {
          setTimeout(
            () => {
              meteorsRef.current.push({
                x: Math.random() * canvasWidth,
                y: -50 + scrollY.current * 0.1,
                length: Math.random() * (isMobile.current ? 60 : 80) + (isMobile.current ? 15 : 20),
                speed: Math.random() * (isMobile.current ? 2 : 3) + (isMobile.current ? 1.5 : 2),
                angle: Math.random() * 30 + 15,
                opacity: Math.random() * 0.8 + 0.2,
              })
            },
            i * (Math.random() * (isMobile.current ? 1000 : 2000)),
          )
        }

        lastMeteorTime.current = currentTime
      }
    }

    const drawStars = (time: number) => {
      const canvasHeight = canvas.height / devicePixelRatio.current

      starsRef.current.forEach((star) => {
        // Reduce parallax intensity on mobile for smoother performance
        const parallaxFactor = star.size * (isMobile.current ? 0.05 : 0.1)
        const adjustedY = star.baseY - scrollY.current * parallaxFactor

        // Only draw stars that are visible on screen (with buffer)
        if (adjustedY > -50 && adjustedY < canvasHeight + 50) {
          const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7
          const alpha = star.opacity * twinkle

          // Simplified rendering on mobile
          if (isMobile.current) {
            // Simple circle without gradient for better performance
            const colors = [
              `rgba(139, 92, 246, ${alpha})`, // purple-500
              `rgba(59, 130, 246, ${alpha})`, // blue-500
              `rgba(6, 182, 212, ${alpha})`, // cyan-500
              `rgba(255, 255, 255, ${alpha})`, // white
            ]

            const color = colors[Math.floor(star.x + star.baseY) % colors.length]
            ctx.fillStyle = color
            ctx.beginPath()
            ctx.arc(star.x, adjustedY, star.size, 0, Math.PI * 2)
            ctx.fill()
          } else {
            // Full gradient rendering on desktop
            const gradient = ctx.createRadialGradient(star.x, adjustedY, 0, star.x, adjustedY, star.size * 2)
            const colors = [
              `rgba(139, 92, 246, ${alpha})`,
              `rgba(59, 130, 246, ${alpha})`,
              `rgba(6, 182, 212, ${alpha})`,
              `rgba(255, 255, 255, ${alpha})`,
            ]

            const color = colors[Math.floor(star.x + star.baseY) % colors.length]
            gradient.addColorStop(0, color)
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(star.x, adjustedY, star.size, 0, Math.PI * 2)
            ctx.fill()

            // Add sparkle effect for larger stars (desktop only)
            if (star.size > 1.5 && twinkle > 0.8) {
              ctx.strokeStyle = color
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(star.x - star.size * 2, adjustedY)
              ctx.lineTo(star.x + star.size * 2, adjustedY)
              ctx.moveTo(star.x, adjustedY - star.size * 2)
              ctx.lineTo(star.x, adjustedY + star.size * 2)
              ctx.stroke()
            }
          }
        }
      })
    }

    const drawMeteors = () => {
      const canvasHeight = canvas.height / devicePixelRatio.current

      meteorsRef.current.forEach((meteor, index) => {
        const radians = (meteor.angle * Math.PI) / 180
        const endX = meteor.x + Math.cos(radians) * meteor.length
        const endY = meteor.y + Math.sin(radians) * meteor.length

        // Reduce parallax on mobile
        const parallaxFactor = isMobile.current ? 0.02 : 0.05
        const adjustedY = meteor.y - scrollY.current * parallaxFactor
        const adjustedEndY = endY - scrollY.current * parallaxFactor

        // Only draw meteors that are visible
        if (adjustedY > -100 && adjustedY < canvasHeight + 100) {
          // Create gradient for meteor trail
          const gradient = ctx.createLinearGradient(meteor.x, adjustedY, endX, adjustedEndY)
          gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`)
          gradient.addColorStop(0.3, `rgba(139, 92, 246, ${meteor.opacity * 0.8})`)
          gradient.addColorStop(0.6, `rgba(59, 130, 246, ${meteor.opacity * 0.6})`)
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

          ctx.strokeStyle = gradient
          ctx.lineWidth = isMobile.current ? 1.5 : 2
          ctx.lineCap = "round"
          ctx.beginPath()
          ctx.moveTo(meteor.x, adjustedY)
          ctx.lineTo(endX, adjustedEndY)
          ctx.stroke()

          // Add bright head
          const headGradient = ctx.createRadialGradient(
            meteor.x,
            adjustedY,
            0,
            meteor.x,
            adjustedY,
            isMobile.current ? 3 : 4,
          )
          headGradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`)
          headGradient.addColorStop(0.5, `rgba(6, 182, 212, ${meteor.opacity * 0.8})`)
          headGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

          ctx.fillStyle = headGradient
          ctx.beginPath()
          ctx.arc(meteor.x, adjustedY, isMobile.current ? 2 : 3, 0, Math.PI * 2)
          ctx.fill()
        }

        // Update meteor position
        meteor.x += Math.cos(radians) * meteor.speed
        meteor.y += Math.sin(radians) * meteor.speed

        // Remove meteor if it's off screen
        if (
          meteor.x > canvas.width / devicePixelRatio.current + 100 ||
          meteor.y > canvasHeight + scrollY.current + 100
        ) {
          meteorsRef.current.splice(index, 1)
        }
      })
    }

    const drawNebula = () => {
      // Skip nebula on mobile for better performance
      if (isMobile.current) return

      const canvasWidth = canvas.width / devicePixelRatio.current
      const canvasHeight = canvas.height / devicePixelRatio.current

      const nebulaPoints = [
        { x: canvasWidth * 0.2, y: canvasHeight * 0.3, size: 300, color: "rgba(139, 92, 246, 0.03)", parallax: 0.02 },
        { x: canvasWidth * 0.7, y: canvasHeight * 0.6, size: 250, color: "rgba(59, 130, 246, 0.02)", parallax: 0.03 },
        { x: canvasWidth * 0.5, y: canvasHeight * 0.8, size: 200, color: "rgba(6, 182, 212, 0.02)", parallax: 0.01 },
      ]

      nebulaPoints.forEach((nebula) => {
        const adjustedY = nebula.y - scrollY.current * nebula.parallax

        if (adjustedY > -nebula.size && adjustedY < canvasHeight + nebula.size) {
          const gradient = ctx.createRadialGradient(nebula.x, adjustedY, 0, nebula.x, adjustedY, nebula.size)
          gradient.addColorStop(0, nebula.color)
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(nebula.x, adjustedY, nebula.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })
    }

    const drawConstellations = () => {
      // Skip constellations on mobile for better performance
      if (isMobile.current) return

      const canvasWidth = canvas.width / devicePixelRatio.current
      const canvasHeight = canvas.height / devicePixelRatio.current

      const constellations = [
        {
          points: [
            { x: canvasWidth * 0.15, y: canvasHeight * 0.2 },
            { x: canvasWidth * 0.25, y: canvasHeight * 0.15 },
            { x: canvasWidth * 0.35, y: canvasHeight * 0.25 },
          ],
          parallax: 0.02,
        },
        {
          points: [
            { x: canvasWidth * 0.65, y: canvasHeight * 0.3 },
            { x: canvasWidth * 0.75, y: canvasHeight * 0.25 },
            { x: canvasWidth * 0.85, y: canvasHeight * 0.35 },
            { x: canvasWidth * 0.8, y: canvasHeight * 0.45 },
          ],
          parallax: 0.015,
        },
      ]

      ctx.strokeStyle = "rgba(139, 92, 246, 0.1)"
      ctx.lineWidth = 1

      constellations.forEach((constellation) => {
        const adjustedPoints = constellation.points.map((point) => ({
          x: point.x,
          y: point.y - scrollY.current * constellation.parallax,
        }))

        const minY = Math.min(...adjustedPoints.map((p) => p.y))
        const maxY = Math.max(...adjustedPoints.map((p) => p.y))

        if (maxY > -50 && minY < canvasHeight + 50) {
          ctx.beginPath()
          adjustedPoints.forEach((point, index) => {
            if (index === 0) {
              ctx.moveTo(point.x, point.y)
            } else {
              ctx.lineTo(point.x, point.y)
            }
          })
          ctx.stroke()
        }
      })
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width / devicePixelRatio.current, canvas.height / devicePixelRatio.current)

      // Draw background elements with performance considerations
      drawNebula()
      drawConstellations()
      drawStars(time * 0.001)

      // Create meteors with device-appropriate frequency
      createMeteor(time)
      drawMeteors()

      animationRef.current = requestAnimationFrame(animate)
    }

    checkDevice()
    resizeCanvas()
    createStars()
    animate(0)

    // Add event listeners with appropriate throttling
    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    window.addEventListener("resize", () => {
      checkDevice()
      resizeCanvas()
      createStars()
    })

    // Handle orientation change on mobile
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        checkDevice()
        resizeCanvas()
        createStars()
      }, 100)
    })

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("scroll", throttledHandleScroll)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("orientationchange", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        touchAction: "none", // Prevent touch scrolling issues
      }}
    />
  )
}
