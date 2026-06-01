"use client"

import { useEffect, useRef } from 'react'

export function MoonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const trailRef = useRef<Array<{ x: number; y: number; alpha: number }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Background stars
    const stars: Array<{
      x: number
      y: number
      size: number
      brightness: number
      twinkleSpeed: number
      twinkleOffset: number
    }> = []

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.7,
        size: Math.random() * 1.2 + 0.3,
        brightness: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
      })
    }

    // Mouse tracking for cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
      trailRef.current.push({ x: e.clientX, y: e.clientY, alpha: 1 })
      if (trailRef.current.length > 20) {
        trailRef.current.shift()
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    let animationId: number
    let time = 0

    const animate = () => {
      time += 1

      // Clear canvas with dark space background
      ctx.fillStyle = 'rgba(5, 10, 25, 0.9)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Deep space gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, 'rgba(10, 15, 35, 0.3)')
      bgGradient.addColorStop(0.5, 'rgba(15, 20, 40, 0.2)')
      bgGradient.addColorStop(1, 'rgba(20, 30, 50, 0.3)')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7
        const opacity = star.brightness * twinkle

        ctx.fillStyle = `rgba(220, 230, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Moon position and size
      const moonX = canvas.width * 0.92
      const moonY = canvas.height * 0.2
      const moonRadius = 60

      // Moon glow effect (technical blue-white light)
      const glowGradient = ctx.createRadialGradient(
        moonX,
        moonY,
        moonRadius * 0.8,
        moonX,
        moonY,
        moonRadius * 2.5
      )
      glowGradient.addColorStop(0, 'rgba(200, 220, 255, 0.15)')
      glowGradient.addColorStop(0.3, 'rgba(150, 190, 255, 0.08)')
      glowGradient.addColorStop(1, 'rgba(100, 150, 255, 0)')

      ctx.fillStyle = glowGradient
      ctx.fillRect(
        moonX - moonRadius * 2.5,
        moonY - moonRadius * 2.5,
        moonRadius * 5,
        moonRadius * 5
      )

      // Moon main body with gradient
      const moonGradient = ctx.createRadialGradient(
        moonX - moonRadius * 0.3,
        moonY - moonRadius * 0.3,
        0,
        moonX,
        moonY,
        moonRadius
      )
      moonGradient.addColorStop(0, 'rgba(245, 248, 255, 0.95)')
      moonGradient.addColorStop(0.6, 'rgba(200, 220, 240, 0.9)')
      moonGradient.addColorStop(1, 'rgba(150, 180, 220, 0.85)')

      ctx.fillStyle = moonGradient
      ctx.beginPath()
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2)
      ctx.fill()

      // Moon shadow (technical dark edge)
      const shadowGradient = ctx.createRadialGradient(
        moonX + moonRadius * 0.4,
        moonY + moonRadius * 0.4,
        0,
        moonX,
        moonY,
        moonRadius * 1.2
      )
      shadowGradient.addColorStop(0, 'rgba(30, 40, 80, 0)')
      shadowGradient.addColorStop(0.7, 'rgba(30, 40, 80, 0.1)')
      shadowGradient.addColorStop(1, 'rgba(20, 30, 60, 0.25)')

      ctx.fillStyle = shadowGradient
      ctx.beginPath()
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2)
      ctx.fill()

      // Moon craters - subtle texture
      const craters = [
        { x: moonX - 20, y: moonY - 15, r: 6, opacity: 0.2 },
        { x: moonX + 18, y: moonY + 20, r: 4, opacity: 0.18 },
        { x: moonX - 15, y: moonY + 10, r: 5, opacity: 0.19 },
      ]

      craters.forEach((crater) => {
        // Subtle crater shadows
        const craterGradient = ctx.createRadialGradient(
          crater.x - crater.r * 0.3,
          crater.y - crater.r * 0.3,
          0,
          crater.x,
          crater.y,
          crater.r * 1.5
        )
        craterGradient.addColorStop(0, `rgba(80, 100, 150, ${crater.opacity})`)
        craterGradient.addColorStop(0.6, `rgba(100, 120, 160, ${crater.opacity * 0.4})`)
        craterGradient.addColorStop(1, `rgba(120, 140, 180, 0)`)

        ctx.fillStyle = craterGradient
        ctx.beginPath()
        ctx.arc(crater.x, crater.y, crater.r, 0, Math.PI * 2)
        ctx.fill()
      })

      // Technical light rays (subtle)
      for (let i = 0; i < 3; i++) {
        const angle = (time * 0.0001 + i * (Math.PI * 2) / 3) % (Math.PI * 2)
        const rayLength = moonRadius * 3
        const endX = moonX + Math.cos(angle) * rayLength
        const endY = moonY + Math.sin(angle) * rayLength

        const rayGradient = ctx.createLinearGradient(moonX, moonY, endX, endY)
        rayGradient.addColorStop(0, 'rgba(200, 220, 255, 0.15)')
        rayGradient.addColorStop(1, 'rgba(200, 220, 255, 0)')

        ctx.strokeStyle = rayGradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(moonX, moonY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
      }

      // Rim lighting - professional technical look
      ctx.strokeStyle = 'rgba(200, 220, 255, 0.4)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2)
      ctx.stroke()

      // Cursor trail effect
      trailRef.current.forEach((point, i) => {
        point.alpha -= 0.05
        if (point.alpha > 0) {
          const size = (i / trailRef.current.length) * 8 + 2
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, size * 2
          )
          gradient.addColorStop(0, `rgba(147, 112, 219, ${point.alpha * 0.6})`)
          gradient.addColorStop(0.5, `rgba(138, 43, 226, ${point.alpha * 0.3})`)
          gradient.addColorStop(1, `rgba(75, 0, 130, 0)`)
          
          ctx.beginPath()
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }
      })

      // Remove faded trail points
      trailRef.current = trailRef.current.filter(p => p.alpha > 0)

      // Cursor glow
      const cursorGradient = ctx.createRadialGradient(
        cursorRef.current.x, cursorRef.current.y, 0,
        cursorRef.current.x, cursorRef.current.y, 100
      )
      cursorGradient.addColorStop(0, 'rgba(147, 112, 219, 0.15)')
      cursorGradient.addColorStop(0.5, 'rgba(138, 43, 226, 0.05)')
      cursorGradient.addColorStop(1, 'rgba(75, 0, 130, 0)')
      ctx.fillStyle = cursorGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
