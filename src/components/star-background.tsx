"use client"

import { useEffect, useRef } from "react"

export const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const stars: Array<{
      x: number
      y: number
      speed: number
      color: string
      size: number
    }> = []

    const createStars = () => {
      const numberOfStars = 50
      for (let i = 0; i < numberOfStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 1 + 0.5,
          color: Math.random() > 0.8 ? "#ff4800" : "#ffffff",
          size: Math.random() * 1.5 + 0.5, // Varying sizes for the dots
        })
      }
    }
    createStars()

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)" // Slightly higher fade rate for cleaner look
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Draw just the dot
        ctx.beginPath()
        ctx.fillStyle = star.color
        ctx.globalAlpha = 0.6
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 h-full w-full" />
}

