"use client"

import { useEffect, useRef } from 'react'

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const trailRef = useRef<Array<{ x: number; y: number; alpha: number }>>([])
  const scrollRef = useRef(0)

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

    // Stars data with depth layers for parallax interaction
    const stars: Array<{
      x: number
      y: number
      size: number
      brightness: number
      twinkleSpeed: number
      twinkleOffset: number
      color: string
      layer: number
      scrollFactor: number
    }> = []

    const starColors = [
      'rgba(255, 255, 255,',
      'rgba(200, 220, 255,',
      'rgba(255, 200, 150,',
      'rgba(150, 200, 255,',
      'rgba(255, 180, 200,',
    ]

    for (let i = 0; i < 450; i++) {
      const layer = Math.floor(Math.random() * 3) + 1
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (layer === 1 ? 1.5 : layer === 2 ? 2.5 : 3.5) + 0.4,
        brightness: Math.random() * 0.5 + 0.4,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        layer,
        scrollFactor: 0.02 + layer * 0.016,
      })
    }

    // Shooting stars
    const shootingStars: Array<{
      x: number
      y: number
      length: number
      speed: number
      angle: number
      active: boolean
    }> = []

    const createShootingStar = () => {
      if (Math.random() < 0.003 && shootingStars.filter(s => s.active).length < 2) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 15 + 10,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          active: true,
        })
      }
    }

    // Mouse tracking for cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
      trailRef.current.push({ x: e.clientX, y: e.clientY, alpha: 1 })
      if (trailRef.current.length > 20) {
        trailRef.current.shift()
      }
    }
    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Base black background
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw milky way and background nebula glow
      const scrollOffset = scrollRef.current * 0.06
      const mouseX = (cursorRef.current.x / canvas.width - 0.5) * 40
      const mouseY = (cursorRef.current.y / canvas.height - 0.5) * 22

      const galaxyGradient = ctx.createRadialGradient(
        canvas.width * 0.55 + mouseX * 0.7,
        canvas.height * 0.35 + mouseY * 0.5,
        0,
        canvas.width * 0.55 + mouseX * 0.7,
        canvas.height * 0.35 + mouseY * 0.5,
        canvas.width * 0.75
      )
      galaxyGradient.addColorStop(0, 'rgba(154, 126, 255, 0.14)')
      galaxyGradient.addColorStop(0.22, 'rgba(110, 110, 255, 0.08)')
      galaxyGradient.addColorStop(0.45, 'rgba(40, 40, 85, 0.04)')
      galaxyGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = galaxyGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.save()
      ctx.translate(canvas.width / 2 + mouseX * 0.4, canvas.height / 2 + mouseY * 0.2)
      ctx.rotate(-0.34)
      ctx.scale(1.6, 0.28)
      const bandGradient = ctx.createLinearGradient(-canvas.width * 0.5, 0, canvas.width * 0.5, 0)
      bandGradient.addColorStop(0, 'rgba(160, 120, 255, 0.0)')
      bandGradient.addColorStop(0.25, 'rgba(125, 105, 255, 0.06)')
      bandGradient.addColorStop(0.5, 'rgba(115, 95, 235, 0.14)')
      bandGradient.addColorStop(0.75, 'rgba(125, 105, 255, 0.06)')
      bandGradient.addColorStop(1, 'rgba(160, 120, 255, 0.0)')
      ctx.beginPath()
      ctx.ellipse(0, 0, canvas.width, canvas.height * 0.8, 0, 0, Math.PI * 2)
      ctx.fillStyle = bandGradient
      ctx.globalAlpha = 0.18
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.restore()

      // Draw nebula clouds
      const nebulaGradient1 = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.3, 0,
        canvas.width * 0.7, canvas.height * 0.3, 320
      )
      nebulaGradient1.addColorStop(0, 'rgba(130, 80, 190, 0.12)')
      nebulaGradient1.addColorStop(0.4, 'rgba(90, 55, 145, 0.08)')
      nebulaGradient1.addColorStop(1, 'rgba(45, 25, 85, 0)')
      ctx.fillStyle = nebulaGradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const nebulaGradient2 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.6, 0,
        canvas.width * 0.2, canvas.height * 0.6, 280
      )
      nebulaGradient2.addColorStop(0, 'rgba(80, 120, 180, 0.1)')
      nebulaGradient2.addColorStop(0.45, 'rgba(60, 90, 140, 0.05)')
      nebulaGradient2.addColorStop(1, 'rgba(30, 60, 90, 0)')
      ctx.fillStyle = nebulaGradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars with twinkling and parallax interaction
      const normalizedMouseX = (cursorRef.current.x / canvas.width - 0.5)
      const normalizedMouseY = (cursorRef.current.y / canvas.height - 0.5)

      stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.35 + 0.65
        const alpha = Math.max(0.15, star.brightness * twinkle)
        const offsetX = normalizedMouseX * star.layer * 14
        const offsetY = normalizedMouseY * star.layer * 10
        const starX = star.x + offsetX
        const starY = star.y + offsetY + scrollRef.current * star.scrollFactor

        ctx.beginPath()
        ctx.arc(starX, starY, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `${star.color}${alpha})`
        ctx.fill()

        if (star.size > 1.5) {
          const glowRadius = star.size * 4
          const glowGradient = ctx.createRadialGradient(
            starX, starY, 0,
            starX, starY, glowRadius
          )
          glowGradient.addColorStop(0, `${star.color}${alpha * 0.2})`)
          glowGradient.addColorStop(0.5, `${star.color}${alpha * 0.08})`)
          glowGradient.addColorStop(1, `${star.color}0)`)
          ctx.fillStyle = glowGradient
          ctx.fill()
        }
      })

      // Shooting stars
      createShootingStar()
      shootingStars.forEach((star, index) => {
        if (!star.active) return

        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed

        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        )
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
        gradient.addColorStop(0.3, 'rgba(200, 220, 255, 0.5)')
        gradient.addColorStop(1, 'rgba(150, 180, 255, 0)')

        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        )
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()

        if (star.x > canvas.width + 100 || star.y > canvas.height + 100) {
          shootingStars.splice(index, 1)
        }
      })

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
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep space gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#000000'
        }}
      />

      {/* Canvas for animated elements */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* Static decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner tech patterns */}
        <div className="absolute top-6 left-6 w-[180px] h-[180px] opacity-30">
          <svg viewBox="0 0 180 180" className="w-full h-full">
            <defs>
              <linearGradient id="techGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 112, 219, 0.8)" />
                <stop offset="100%" stopColor="rgba(138, 43, 226, 0.3)" />
              </linearGradient>
            </defs>
            <path d="M0 40 H60 V60 H80 V40 H120" fill="none" stroke="url(#techGrad1)" strokeWidth="1" />
            <path d="M0 80 H40 V100 H60 V80 H100" fill="none" stroke="url(#techGrad1)" strokeWidth="1" />
            <circle cx="60" cy="60" r="4" fill="rgba(147, 112, 219, 0.8)" className="animate-pulse" />
            <circle cx="40" cy="100" r="3" fill="rgba(138, 43, 226, 0.6)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <rect x="10" y="120" width="50" height="30" rx="4" fill="none" stroke="url(#techGrad1)" strokeWidth="1" />
            <rect x="70" y="130" width="40" height="20" rx="4" fill="none" stroke="url(#techGrad1)" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute top-6 right-6 w-[180px] h-[180px] opacity-30">
          <svg viewBox="0 0 180 180" className="w-full h-full">
            <defs>
              <linearGradient id="techGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(100, 149, 237, 0.8)" />
                <stop offset="100%" stopColor="rgba(65, 105, 225, 0.3)" />
              </linearGradient>
            </defs>
            <circle cx="90" cy="90" r="70" fill="none" stroke="url(#techGrad2)" strokeWidth="1" strokeDasharray="4,4" />
            <circle cx="90" cy="90" r="40" fill="none" stroke="url(#techGrad2)" strokeWidth="1" />
            <line x1="90" y1="20" x2="90" y2="160" stroke="url(#techGrad2)" strokeWidth="0.5" />
            <line x1="20" y1="90" x2="160" y2="90" stroke="url(#techGrad2)" strokeWidth="0.5" />
            <circle cx="90" cy="90" r="6" fill="rgba(100, 149, 237, 0.6)" className="animate-pulse" />
          </svg>
        </div>

        <div className="absolute bottom-6 left-6 w-[150px] h-[150px] opacity-25">
          <svg viewBox="0 0 150 150" className="w-full h-full">
            <text x="10" y="30" fill="rgba(147, 112, 219, 0.6)" fontSize="16" fontFamily="monospace">{"<QA/>"}</text>
            <text x="20" y="55" fill="rgba(138, 43, 226, 0.5)" fontSize="14" fontFamily="monospace">{"test()"}</text>
            <text x="10" y="80" fill="rgba(100, 149, 237, 0.5)" fontSize="14" fontFamily="monospace">{"assert"}</text>
            <path d="M10 95 L50 95 L50 120 L90 120" fill="none" stroke="rgba(147, 112, 219, 0.4)" strokeWidth="1" />
            <circle cx="50" cy="95" r="3" fill="rgba(147, 112, 219, 0.6)" />
            <circle cx="90" cy="120" r="3" fill="rgba(138, 43, 226, 0.6)" />
          </svg>
        </div>

        <div className="absolute bottom-6 right-6 w-[150px] h-[150px] opacity-25">
          <svg viewBox="0 0 150 150" className="w-full h-full">
            <path d="M150 30 H100 V50 H70 V30 H30" fill="none" stroke="rgba(100, 149, 237, 0.5)" strokeWidth="1" strokeDasharray="3,3" />
            <path d="M150 70 H80 V90 H50 V70 H0" fill="none" stroke="rgba(65, 105, 225, 0.4)" strokeWidth="1" strokeDasharray="3,3" />
            <rect x="90" y="100" width="45" height="25" rx="4" fill="none" stroke="rgba(147, 112, 219, 0.5)" strokeWidth="1" />
            <rect x="30" y="105" width="40" height="20" rx="4" fill="none" stroke="rgba(100, 149, 237, 0.4)" strokeWidth="1" />
            <circle cx="100" cy="50" r="4" fill="rgba(147, 112, 219, 0.7)" className="animate-pulse" />
            <circle cx="70" cy="90" r="4" fill="rgba(100, 149, 237, 0.7)" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          </svg>
        </div>

        {/* Border frame */}
        <div className="absolute inset-4 border border-purple-500/10 rounded-3xl" />
        <div className="absolute inset-6 border border-blue-500/5 rounded-2xl" />
      </div>
    </div>
  )
}
