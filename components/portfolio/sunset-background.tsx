"use client"

export function SunsetBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - warm light sunset sky */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              oklch(0.85 0.08 250) 0%,
              oklch(0.82 0.12 280) 15%,
              oklch(0.78 0.15 320) 30%,
              oklch(0.80 0.18 30) 50%,
              oklch(0.85 0.20 50) 70%,
              oklch(0.88 0.18 60) 85%,
              oklch(0.75 0.15 55) 100%
            )
          `
        }}
      />
      
      {/* Warm light overlay for golden hour feel */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 120% 80% at 80% 90%,
              oklch(0.92 0.15 65 / 0.6) 0%,
              oklch(0.88 0.18 55 / 0.4) 30%,
              oklch(0.85 0.12 45 / 0.2) 50%,
              transparent 70%
            )
          `
        }}
      />
      
      {/* Sun glow - bright and warm */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full animate-pulse-glow"
        style={{
          bottom: '10%',
          right: '15%',
          background: `
            radial-gradient(
              circle,
              oklch(0.98 0.12 70 / 0.9) 0%,
              oklch(0.95 0.15 60 / 0.6) 20%,
              oklch(0.90 0.18 55 / 0.4) 40%,
              oklch(0.85 0.15 50 / 0.2) 60%,
              transparent 80%
            )
          `,
          filter: 'blur(30px)'
        }}
      />
      
      {/* Secondary warm glow */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          bottom: '20%',
          left: '20%',
          background: `
            radial-gradient(
              circle,
              oklch(0.90 0.12 55 / 0.3) 0%,
              oklch(0.85 0.10 60 / 0.15) 50%,
              transparent 70%
            )
          `,
          filter: 'blur(50px)'
        }}
      />
      
      {/* Soft clouds/haze effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 40% at 30% 20%, oklch(0.95 0.02 60 / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 80% 30% at 70% 30%, oklch(0.92 0.04 55 / 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 60% 25% at 50% 15%, oklch(0.96 0.02 70 / 0.25) 0%, transparent 40%)
          `
        }}
      />
      
      {/* City silhouette - darker for contrast against warm sky */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%]">
        <svg 
          viewBox="0 0 1920 400" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMax slice"
          fill="oklch(0.20 0.03 260)"
        >
          {/* Far buildings */}
          <rect x="0" y="200" width="60" height="200" />
          <rect x="70" y="150" width="45" height="250" />
          <rect x="125" y="180" width="80" height="220" />
          <rect x="220" y="100" width="50" height="300" />
          <rect x="285" y="160" width="70" height="240" />
          <rect x="370" y="80" width="90" height="320" />
          <rect x="480" y="140" width="55" height="260" />
          <rect x="550" y="60" width="100" height="340" />
          <rect x="670" y="120" width="65" height="280" />
          <rect x="755" y="50" width="120" height="350" />
          <rect x="895" y="90" width="75" height="310" />
          <rect x="990" y="40" width="130" height="360" />
          <rect x="1140" y="110" width="60" height="290" />
          <rect x="1220" y="70" width="100" height="330" />
          <rect x="1340" y="130" width="80" height="270" />
          <rect x="1440" y="55" width="110" height="345" />
          <rect x="1570" y="100" width="70" height="300" />
          <rect x="1660" y="150" width="90" height="250" />
          <rect x="1770" y="80" width="60" height="320" />
          <rect x="1850" y="170" width="70" height="230" />
          
          {/* Building windows - warm glow */}
          {[...Array(50)].map((_, i) => (
            <rect 
              key={i}
              x={80 + (i % 12) * 150 + Math.random() * 40}
              y={100 + Math.floor(i / 12) * 50 + Math.random() * 20}
              width="5"
              height="8"
              fill="oklch(0.95 0.12 60 / 0.6)"
              className="animate-glow"
              style={{ animationDelay: `${i * 0.08}s` }}
            />
          ))}
        </svg>
      </div>
      
      {/* Office glass window frame */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glass window border - rounded corners feel */}
        <div className="absolute inset-4 border border-white/10 rounded-3xl" />
        <div className="absolute inset-6 border border-white/5 rounded-2xl" />
        
        {/* Top left corner - technical grid pattern */}
        <div className="absolute top-8 left-8 w-[200px] h-[200px] opacity-30">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="oklch(0.25 0.05 260)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#grid)" opacity="0.5" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="0.5" />
            <line x1="0" y1="100" x2="200" y2="100" stroke="oklch(0.30 0.05 260)" strokeWidth="0.5" />
            <line x1="100" y1="0" x2="100" y2="200" stroke="oklch(0.30 0.05 260)" strokeWidth="0.5" />
          </svg>
        </div>
        
        {/* Top right corner - circuit pattern */}
        <div className="absolute top-8 right-8 w-[180px] h-[180px] opacity-25">
          <svg viewBox="0 0 180 180" className="w-full h-full">
            <path d="M0 40 H70 V70 H110 V40 H180" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="1" />
            <path d="M0 80 H40 V110 H80 V80 H140 V110 H180" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="1" />
            <path d="M40 0 V40 M110 0 V70 M140 0 V40" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="1" />
            <circle cx="70" cy="70" r="4" fill="oklch(0.45 0.15 55)" />
            <circle cx="110" cy="70" r="4" fill="oklch(0.45 0.15 55)" />
            <circle cx="40" cy="110" r="4" fill="oklch(0.45 0.15 55)" />
            <circle cx="140" cy="110" r="4" fill="oklch(0.45 0.15 55)" />
            <rect x="60" y="130" width="30" height="25" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="1" rx="2" />
            <rect x="100" y="130" width="45" height="30" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="1" rx="2" />
          </svg>
        </div>
        
        {/* Bottom left corner - code brackets */}
        <div className="absolute bottom-24 left-8 w-[150px] h-[150px] opacity-20">
          <svg viewBox="0 0 150 150" className="w-full h-full">
            <text x="15" y="35" fill="oklch(0.30 0.05 260)" fontSize="20" fontFamily="monospace">{"{ }"}</text>
            <text x="25" y="65" fill="oklch(0.30 0.05 260)" fontSize="16" fontFamily="monospace">{"</ >"}</text>
            <text x="15" y="95" fill="oklch(0.30 0.05 260)" fontSize="18" fontFamily="monospace">{"[ ]"}</text>
            <path d="M10 110 L50 110 L50 140 L90 140" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="1" />
            <circle cx="50" cy="110" r="3" fill="oklch(0.45 0.15 55)" />
            <circle cx="50" cy="140" r="3" fill="oklch(0.45 0.15 55)" />
          </svg>
        </div>
        
        {/* Bottom right corner - data flow pattern */}
        <div className="absolute bottom-24 right-8 w-[150px] h-[150px] opacity-25">
          <svg viewBox="0 0 150 150" className="w-full h-full">
            <path d="M150 30 H100 V55 H70 V30 H30" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="1" strokeDasharray="4,4" />
            <path d="M150 70 H90 V95 H60 V70 H0" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="1" strokeDasharray="4,4" />
            <rect x="95" y="105" width="40" height="25" rx="4" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="1" />
            <rect x="40" y="110" width="35" height="18" rx="4" fill="none" stroke="oklch(0.30 0.05 260)" strokeWidth="1" />
            <circle cx="100" cy="55" r="5" fill="oklch(0.65 0.18 55)" className="animate-pulse" />
            <circle cx="70" cy="95" r="5" fill="oklch(0.65 0.18 55)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          </svg>
        </div>
        
        {/* Glass reflection overlay - subtle light streaks */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                135deg,
                oklch(1 0 0 / 0.08) 0%,
                transparent 25%,
                transparent 50%,
                oklch(1 0 0 / 0.04) 75%,
                oklch(1 0 0 / 0.06) 100%
              )
            `
          }}
        />
        
        {/* Light reflection streaks */}
        <div 
          className="absolute top-0 left-1/4 w-px h-1/3 opacity-20"
          style={{ background: 'linear-gradient(to bottom, transparent, oklch(1 0 0 / 0.5), transparent)' }}
        />
        <div 
          className="absolute top-1/4 right-1/3 w-px h-1/4 opacity-15"
          style={{ background: 'linear-gradient(to bottom, transparent, oklch(1 0 0 / 0.4), transparent)' }}
        />
        
        {/* Window frame edges - subtle */}
        <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-4 bottom-4 left-4 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        <div className="absolute top-4 bottom-4 right-4 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
      </div>
      
      {/* Floating dust particles in warm light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 70}%`,
              animationDelay: `${i * 0.25}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              background: `oklch(0.95 0.08 60 / ${0.3 + Math.random() * 0.3})`
            }}
          />
        ))}
      </div>
    </div>
  )
}
