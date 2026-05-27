"use client"

import { useEffect, useRef, useState } from "react"
import { PlaywrightIcon, SeleniumIcon, JenkinsIcon, CypressIcon, AppiumIcon, DockerIcon, PostmanIcon, GitHubActionsIcon, PythonIcon, TypeScriptIcon, JiraIcon, NodeJSIcon } from "./tech-icons"

const floatingIcons = [
  { Icon: PlaywrightIcon, label: "Playwright", color: "#2EAD33" },
  { Icon: SeleniumIcon, label: "Selenium", color: "#43B02A" },
  { Icon: JenkinsIcon, label: "Jenkins", color: "#D24939" },
  { Icon: CypressIcon, label: "Cypress", color: "#69D3A7" },
  { Icon: AppiumIcon, label: "Appium", color: "#EE6D55" },
  { Icon: DockerIcon, label: "Docker", color: "#2496ED" },
  { Icon: PostmanIcon, label: "Postman", color: "#FF6C37" },
  { Icon: GitHubActionsIcon, label: "GitHub Actions", color: "#2088FF" },
  { Icon: PythonIcon, label: "Python", color: "#3776AB" },
  { Icon: TypeScriptIcon, label: "TypeScript", color: "#3178C6" },
  { Icon: JiraIcon, label: "Jira", color: "#2684FF" },
  { Icon: NodeJSIcon, label: "Node.js", color: "#339933" },
]

interface IconPosition {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  delay: number
}

export function FloatingTechIcons() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [positions, setPositions] = useState<IconPosition[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    
    const initialPositions = floatingIcons.map((_, i) => ({
      x: Math.random() * (rect.width || 800),
      y: Math.random() * (rect.height || 600),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.1,
      size: 28 + Math.random() * 16,
      opacity: 0.25 + Math.random() * 0.4,
      delay: Math.random() * 5,
    }))
    setPositions(initialPositions)

    let lastTime = performance.now()
    const animate = (time: number) => {
      const dt = (time - lastTime) * 0.06
      lastTime = time

      setPositions(prev => prev.map((pos, i) => {
        let newX = pos.x + pos.vx * dt
        let newY = pos.y + pos.vy * dt
        
        // Wrap around screen
        if (newX < -60) newX = (rect.width || 800) + 60
        if (newX > (rect.width || 800) + 60) newX = -60
        if (newY < -60) newY = (rect.height || 600) + 60
        if (newY > (rect.height || 600) + 60) newY = -60

        // Gentle floating motion
        const floatX = Math.sin(time * 0.0005 + i * 1.5) * 0.15
        const floatY = Math.cos(time * 0.0007 + i * 2.3) * 0.15

        const newVx = Math.max(-0.5, Math.min(0.5, pos.vx + (Math.random() - 0.5) * 0.002))
        const newVy = Math.max(-0.5, Math.min(0.5, pos.vy + (Math.random() - 0.5) * 0.002))

        return {
          ...pos,
          x: newX + floatX,
          y: newY + floatY,
          vx: newVx,
          vy: newVy,
        }
      }))

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {positions.map((pos, i) => {
        const { Icon, label, color } = floatingIcons[i]
        const isHovered = hoveredIndex === i
        
        return (
          <div
            key={i}
            className="absolute transition-all duration-1000 pointer-events-auto group"
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px)`,
              opacity: isHovered ? 1 : pos.opacity,
              animationDelay: `${pos.delay}s`,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative">
              <Icon 
                className="transition-all duration-300"
                style={{ 
                  width: isHovered ? pos.size * 1.5 : pos.size, 
                  height: isHovered ? pos.size * 1.5 : pos.size,
                  filter: isHovered ? `drop-shadow(0 0 12px ${color}80)` : 'none',
                }} 
              />
              {isHovered && (
                <div 
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                  style={{ 
                    backgroundColor: `${color}30`,
                    color: color,
                    border: `1px solid ${color}50`,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {label}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}