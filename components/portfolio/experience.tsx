"use client"

import { Building2, Calendar, Briefcase, Code2, TestTube2, GitBranch, Terminal, Star } from "lucide-react"
import { PlaywrightIcon, SeleniumIcon, JenkinsIcon, CypressIcon, DockerIcon, PostmanIcon, PythonIcon, TypeScriptIcon, JiraIcon, GitHubActionsIcon } from "./icons/tech-icons"

const experiences = [
  {
    title: "QA Specialist",
    company: "Instinct Innovations",
    period: "2024 - Present",
    description: [
      "Led the development of end-to-end test automation framework using Playwright and TypeScript",
      "Reduced regression testing time by 70% through parallel test execution strategies",
      "Built comprehensive API testing suite using Postman and REST Assured",
      "Implemented mobile test automation for iOS and Android using Appium",
      "Collaborated with developers to implement shift-left testing practices",
      "Maintained 95%+ code coverage across critical business flows",
      "Mentored junior QA engineers and established testing best practices across teams",
      "Integrated automated tests into CI/CD pipeline with GitHub Actions",
    ],
    tools: [
      { name: "Playwright", Icon: PlaywrightIcon, color: "#2EAD33" },
      { name: "TypeScript", Icon: TypeScriptIcon, color: "#3178C6" },
      { name: "Postman", Icon: PostmanIcon, color: "#FF6C37" },
      { name: "GitHub Actions", Icon: GitHubActionsIcon, color: "#2088FF" },
    ],
  },
  {
    title: "AV Programmer ",
    company: "All-wave AV System Pvt Ltd.",
    period: "2023 - 2024",
    description: [
      " Configured and tested AV control systems, conferencing solutions, and DSP integrations for enterprise environments.",
      " Programmed and configured AV system integrations across Crestron, Extron, Biamp Tesira, and Zoom Rooms,supporting deployment and implementation across client environments.",
      "Implemented mobile test automation for iOS and Android using Appium",
    ],
    tools: [
      { name: "Python", Icon: PythonIcon, color: "#3776AB" },
      { name: "Jenkins", Icon: JenkinsIcon, color: "#D24939" },
      { name: "Docker", Icon: DockerIcon, color: "#2496ED" },
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 section-title">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-pulse-glow" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot with animated ring */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 mt-8 flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                </div>

                <div className="md:w-1/2" />
                
                <div className="md:w-1/2 pl-14 md:pl-0">
                  <div className="glass-warm rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group card-hover relative overflow-hidden">
                    {/* Top tech bar */}
                    <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-primary/10">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                      <div className="flex-1" />
                      <Terminal className="w-3 h-3 text-muted-foreground/40" />
                    </div>

                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>

                    {/* Tech tool chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {exp.tools.map((tool, i) => {
                        const Icon = tool.Icon
                        return (
                          <div 
                            key={i}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono"
                            style={{ 
                              backgroundColor: `${tool.color}20`,
                              color: tool.color,
                              border: `1px solid ${tool.color}30`,
                            }}
                          >
                            {Icon && <Icon className="w-3 h-3" />}
                            {tool.name}
                          </div>
                        )
                      })}
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 shrink-0">
                            <Star className="w-3 h-3" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
