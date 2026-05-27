import { 
  Code2, 
  TestTube2, 
  Smartphone, 
  Gauge, 
  Workflow, 
  GitBranch,
  Cloud,
  Terminal
} from "lucide-react"

const skillCategories = [
  {
    title: "Testing Frameworks",
    icon: TestTube2,
    skills: ["Playwright", "Selenium", "Cypress", "Jest", "Mocha"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Mobile Testing",
    icon: Smartphone,
    skills: ["Appium", "XCUITest", "Espresso", "BrowserStack"],
  },
  {
    title: "Performance Testing",
    icon: Gauge,
    skills: ["JMeter", "K6", "Gatling", "Lighthouse"],
  },
  {
    title: "API Testing",
    icon: Workflow,
    skills: ["Postman", "REST Assured", "Axios", "SuperTest"],
  },
  {
    title: "DevOps & CI/CD",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions", "Docker", "GitLab CI"],
  },
  {
    title: "CLI & MCP Tools",
    icon: Terminal,
    skills: ["MCP", "Bash/Shell", "npm/pnpm", "Git CLI", "Node.js CLI"],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Microsoft Azure", "AWS Basics", "CI/CD Pipelines", "Cloud Testing"],
    isLearning: true,
  },
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
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2.5 py-1 text-xs bg-secondary/80 text-muted-foreground rounded-full hover:bg-primary/20 hover:text-primary transition-colors badge-glow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
