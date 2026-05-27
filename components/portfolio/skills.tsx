"use client"

import { 
  Code2, 
  TestTube2, 
  Smartphone, 
  Gauge, 
  Workflow, 
  GitBranch,
  Cloud,
  Terminal,
  Cpu
} from "lucide-react"
import { 
  PlaywrightIcon, SeleniumIcon, JenkinsIcon, CypressIcon, 
  AppiumIcon, DockerIcon, PostmanIcon, GitHubActionsIcon,
  PythonIcon, TypeScriptIcon, JiraIcon, NodeJSIcon 
} from "./icons/tech-icons"

const skillCategories = [
  {
    title: "Testing Frameworks",
    icon: TestTube2,
    skills: [
      { name: "Playwright", Icon: PlaywrightIcon },
      { name: "Selenium", Icon: SeleniumIcon },
      { name: "Cypress", Icon: CypressIcon },
      { name: "Jest", Icon: null },
      { name: "Mocha", Icon: null },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", Icon: null },
      { name: "TypeScript", Icon: TypeScriptIcon },
      { name: "Python", Icon: PythonIcon },
      { name: "SQL", Icon: null },
    ],
  },
  {
    title: "Mobile Testing",
    icon: Smartphone,
    skills: [
      { name: "Appium", Icon: AppiumIcon },
      { name: "XCUITest", Icon: null },
      { name: "Espresso", Icon: null },
      { name: "BrowserStack", Icon: null },
    ],
  },
  {
    title: "Performance Testing",
    icon: Gauge,
    skills: [
      { name: "JMeter", Icon: null },
      { name: "K6", Icon: null },
      { name: "Gatling", Icon: null },
      { name: "Lighthouse", Icon: null },
    ],
  },
  {
    title: "API Testing",
    icon: Workflow,
    skills: [
      { name: "Postman", Icon: PostmanIcon },
      { name: "REST Assured", Icon: null },
      { name: "Axios", Icon: null },
      { name: "SuperTest", Icon: null },
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: GitBranch,
    skills: [
      { name: "Jenkins", Icon: JenkinsIcon },
      { name: "GitHub Actions", Icon: GitHubActionsIcon },
      { name: "Docker", Icon: DockerIcon },
      { name: "GitLab CI", Icon: null },
    ],
  },
  {
    title: "CLI & MCP Tools",
    icon: Terminal,
    skills: [
      { name: "MCP", Icon: null },
      { name: "Bash/Shell", Icon: null },
      { name: "npm/pnpm", Icon: null },
      { name: "Git CLI", Icon: null },
      { name: "Node.js CLI", Icon: null },
    ],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      { name: "Microsoft Azure", Icon: null },
      { name: "AWS Basics", Icon: null },
      { name: "CI/CD Pipelines", Icon: null },
      { name: "Cloud Testing", Icon: null },
    ],
    isLearning: true,
  },
]

const interactiveSkillsMeter = [
  { name: "Automation", level: 92, color: "#2EAD33" },
  { name: "Frameworks", level: 88, color: "#3178C6" },
  { name: "CI/CD", level: 85, color: "#D24939" },
  { name: "API", level: 90, color: "#FF6C37" },
  { name: "Mobile", level: 75, color: "#EE6D55" },
  { name: "Performance", level: 78, color: "#69D3A7" },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 section-title">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4 animate-pulse-glow" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience in 
            quality assurance and test automation.
          </p>
        </div>

        {/* Interactive Skills Meter Bar */}
        <div className="glass-warm rounded-xl p-6 mb-8 card-hover">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Core Competency Meter</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {interactiveSkillsMeter.map((skill, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-mono text-muted-foreground">{skill.name}</span>
                  <span className="text-xs font-mono font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary/50 rounded-full overflow-hidden relative">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 group-hover:brightness-125"
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`,
                      boxShadow: `0 0 8px ${skill.color}60`,
                    }}
                  />
                  {/* Animated pulse on bar */}
                  <div 
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${skill.color}30 50%, transparent 100%)`,
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s ease-in-out infinite',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div 
                key={index}
                className="glass-warm rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors icon-glow">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{category.title}</h3>
                    {category.isLearning && (
                      <span className="text-xs text-accent">Learning</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.Icon
                    return (
                      <span 
                        key={skillIndex}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-secondary/80 text-muted-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-all badge-glow group/skill"
                      >
                        {SkillIcon && <SkillIcon className="w-3.5 h-3.5" />}
                        {skill.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
