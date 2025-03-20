"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  vx: number
  vy: number
  brightness: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create stars with random velocities
    const stars: Star[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.3, // Random velocity X
      vy: (Math.random() - 0.5) * 0.3, // Random velocity Y
      brightness: Math.random() * 0.5 + 0.5,
    }))

    // Animation
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update stars
      stars.forEach((star) => {
        // Update position
        star.x += star.vx
        star.y += star.vy

        // Bounce off edges with slight randomization
        if (star.x < 0 || star.x > canvas.width) {
          star.vx *= -1
          star.vx += (Math.random() - 0.5) * 0.1 // Add slight randomness to velocity
        }
        if (star.y < 0 || star.y > canvas.height) {
          star.vy *= -1
          star.vy += (Math.random() - 0.5) * 0.1 // Add slight randomness to velocity
        }

        // Randomly adjust velocity slightly
        if (Math.random() < 0.01) {
          star.vx += (Math.random() - 0.5) * 0.1
          star.vy += (Math.random() - 0.5) * 0.1

          // Limit maximum velocity
          const maxVel = 0.5
          star.vx = Math.max(Math.min(star.vx, maxVel), -maxVel)
          star.vy = Math.max(Math.min(star.vy, maxVel), -maxVel)
        }

        // Update brightness with slight fluctuation
        star.brightness += (Math.random() - 0.5) * 0.1
        star.brightness = Math.max(Math.min(star.brightness, 1), 0.3)

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(93, 193, 185, ${star.brightness})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 w-screen h-screen"
      style={{
        background: "black",
        overflow: "hidden",
      }}
    />
  )
}
