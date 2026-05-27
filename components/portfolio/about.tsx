"use client"

import { CheckCircle2, Sparkles, Activity, Code2, TestTube2, GitBranch } from "lucide-react"
import { PlaywrightIcon, SeleniumIcon, JenkinsIcon, CypressIcon, AppiumIcon, PostmanIcon, PythonIcon, TypeScriptIcon, NodeJSIcon } from "./icons/tech-icons"

const highlights = [
  "2+ years of experience in QA Automation",
  "Expert in multiple testing frameworks",
  "CI/CD pipeline integration specialist",
  "Strong focus on code quality and best practices",
  "Cloud & MCP tools proficiency",
]

const techProficiency = [
  { name: "Playwright", level: 95, icon: PlaywrightIcon, color: "#2EAD33" },
  { name: "Selenium", level: 90, icon: SeleniumIcon, color: "#43B02A" },
  { name: "TypeScript", level: 85, icon: TypeScriptIcon, color: "#3178C6" },
  { name: "Python", level: 80, icon: PythonIcon, color: "#3776AB" },
  { name: "Appium", level: 78, icon: AppiumIcon, color: "#EE6D55" },
  { name: "Cypress", level: 82, icon: CypressIcon, color: "#69D3A7" },
  { name: "Postman", level: 88, icon: PostmanIcon, color: "#FF6C37" },
  { name: "Jenkins", level: 85, icon: JenkinsIcon, color: "#D24939" },
  { name: "Node.js", level: 76, icon: NodeJSIcon, color: "#339933" },
]

export function About() {
  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 section-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-pulse-glow" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* My Story */}
          <div className="glass-warm rounded-2xl p-8 relative overflow-hidden card-hover md:col-span-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary font-medium">My Story</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a dedicated QA Automation Engineer with a passion for building 
                reliable, scalable test automation solutions. My expertise spans across 
                web, mobile, and API testing, with a strong foundation in modern 
                automation frameworks and tools.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe that quality is not an act, but a habit. My approach combines 
                thorough testing methodologies with efficient automation practices to 
                deliver software that users can trust.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently expanding my skills in cloud platforms like Microsoft Azure 
                and exploring MCP tools to stay at the forefront of QA innovation.
              </p>

              {/* Tech badge connector row */}
              <div className="mt-8 pt-6 border-t border-primary/10">
                <div className="flex flex-wrap gap-3">
                  {[
                    { Icon: TestTube2, label: "Automation", color: "text-emerald-400" },
                    { Icon: Code2, label: "CI/CD", color: "text-blue-400" },
                    { Icon: GitBranch, label: "Version Control", color: "text-purple-400" },
                    { Icon: Activity, label: "Performance", color: "text-orange-400" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 group hover:bg-primary/20 transition-all cursor-default"
                    >
                      <item.Icon className={`w-3.5 h-3.5 ${item.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Highlights */}
          <div className="glass-warm rounded-2xl p-8 relative overflow-hidden card-hover">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center icon-glow">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </span>
                Quick Highlights
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all hover:translate-x-1 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-foreground/90">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Proficiency Heatmap */}
        <div className="mt-8 glass-warm rounded-2xl p-8 relative overflow-hidden card-hover">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary font-medium">Technical Proficiency</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
            {techProficiency.map((tech, index) => {
              const Icon = tech.icon
              return (
                <div key={index} className="flex flex-col items-center gap-2 group">
                  <div className="relative">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${tech.color}20` }}
                    >
                      <Icon className="w-7 h-7 transition-all duration-300" />
                    </div>
                    {/* Proficiency ring */}
                    <svg className="absolute -inset-1 w-14 h-14 -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-border/30" />
                      <circle
                        cx="18" cy="18" r="15.5"
                        fill="none"
                        stroke={tech.color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={`${(tech.level / 100) * 97.4} 97.4`}
                        className="transition-all duration-1000"
                        style={{ filter: `drop-shadow(0 0 4px ${tech.color}60)` }}
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                    {tech.name}
                  </span>
                  <span 
                    className="text-[10px] font-bold font-mono"
                    style={{ color: tech.color }}
                  >
                    {tech.level}%
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
