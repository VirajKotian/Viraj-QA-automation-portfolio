"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, Folder, Sparkles, BarChart3, CheckCircle2, XCircle, Clock, Zap, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlaywrightIcon, SeleniumIcon, JenkinsIcon, CypressIcon, DockerIcon, PostmanIcon, PythonIcon, TypeScriptIcon, JiraIcon, NodeJSIcon } from "./icons/tech-icons"

const techIconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  playwright: PlaywrightIcon,
  selenium: SeleniumIcon,
  jenkins: JenkinsIcon,
  cypress: CypressIcon,
  docker: DockerIcon,
  postman: PostmanIcon,
  python: PythonIcon,
  typescript: TypeScriptIcon,
  jira: JiraIcon,
  nodejs: NodeJSIcon,
  "node.js": NodeJSIcon,
}

const getTechIcon = (tech: string) => {
  const key = tech.toLowerCase().replace(/\s+/g, "")
  return techIconMap[key] || null
}

const projects = [
  {
    title: "TinyCommand – AI-Powered Workflow Automation Platform",
    description: [
      "Tested an AI-powered workflow automation platform across workflows, forms, APIs, integrations, and automation-driven business workflows.",
      "Built and maintained Playwright automation suites with JavaScript/TypeScript and RobotJS following the Page Object Model (POM) architecture.",
      "Designed and executed end-to-end test scenarios for workflow triggers, form-based automation logic, API integrations, and multi-module user interactions.",
      "Utilized Playwright tracing and debugging features to troubleshoot flaky tests, improving test reliability from 85% to 99.2%.",
      "Implemented cross-browser testing strategy with Playwright across Chromium, Firefox, and WebKit, including automated screenshot comparisons.",
      "Integrated automated test suites into Jenkins CI/CD pipelines and utilized Cursor AI to optimize automated test case generation.",
    ],
    tech: ["Playwright", "TypeScript", "RobotJS", "POM", "Jenkins", "Cursor AI"],
    github: "#",
    demo: "#",
    featured: true,
    stats: { tests: 450, passed: 446, failed: 2, skipped: 2, coverage: 99.2 },
  },
  {
    title: "PharmacyPro – Enterprise Inventory & Billing Management System",
    description: [
      "Tested inventory and billing workflows from barcode scanning through sales, purchases, sales/purchase returns, sales orders, purchase orders, and stock audit processes. etc ",
      "Validated transaction and GST reporting across CGST, SGST, and IGST modules, including transaction reports, inventory reports, and financial reconciliation.",
      "Performed API testing for backend inventory and billing services, ensuring data accuracy across UI modules and report generation, while logging defects in Jira and coordinating retesting.",
      "Automated Playwright test cases for each module, covering 150+ scenarios across modal workflows and business-critical pharmacy use cases.",
      "Covered full retail pharmacy workflow scenarios including GST billing, inventory updates, return handling, order processing, and audit trail verification.",
      "Ensured end-to-end data consistency across UI, API, and reports with focused tests for transaction, stock, and financial modules.",
    ],
    tech: ["Playwright", "Functional Testing", "Regression Testing", "API Testing", "Jira", "Inventory Workflows"],
    github: "#",
    demo: "#",
    stats: { tests: 320, passed: 315, failed: 3, skipped: 2, coverage: 95.0 },
  },
]

function TestStatsBar({ stats }: { stats: { tests: number; passed: number; failed: number; skipped: number; coverage: number } }) {
  const [animatedPassed, setAnimatedPassed] = useState(0)
  const passRate = Math.round((stats.passed / stats.tests) * 100)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedPassed(stats.passed), 500)
    return () => clearTimeout(timer)
  }, [stats.passed])

  return (
    <div className="mt-4 pt-4 border-t border-primary/10">
      <div className="flex items-center gap-2 mb-3">
        <BarChart3 className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs text-muted-foreground font-mono">Test Execution Summary</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col items-center p-2 rounded-lg bg-secondary/30">
          <div className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            <span className="text-xs font-bold font-mono">{animatedPassed}</span>
          </div>
          <span className="text-[9px] text-muted-foreground mt-0.5">Passed</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-lg bg-secondary/30">
          <div className="flex items-center gap-1 text-red-400">
            <XCircle className="w-3 h-3" />
            <span className="text-xs font-bold font-mono">{stats.failed}</span>
          </div>
          <span className="text-[9px] text-muted-foreground mt-0.5">Failed</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-lg bg-secondary/30">
          <div className="flex items-center gap-1 text-yellow-400">
            <Clock className="w-3 h-3" />
            <span className="text-xs font-bold font-mono">{stats.skipped}</span>
          </div>
          <span className="text-[9px] text-muted-foreground mt-0.5">Skipped</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-lg bg-secondary/30">
          <div className="flex items-center gap-1 text-blue-400">
            <Zap className="w-3 h-3" />
            <span className="text-xs font-bold font-mono">{stats.coverage}%</span>
          </div>
          <span className="text-[9px] text-muted-foreground mt-0.5">Coverage</span>
        </div>
      </div>
      <div className="mt-2 h-1.5 bg-secondary/50 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-1000"
          style={{ 
            width: `${passRate}%`,
            background: `linear-gradient(90deg, #22c55e, #16a34a)`,
            boxShadow: '0 0 8px rgba(34, 197, 94, 0.4)',
          }}
        />
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 section-title">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4 animate-pulse-glow" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of testing frameworks and automation projects I've built 
            to solve real-world quality assurance challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-warm rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden card-hover"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs badge-glow">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors icon-glow">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href={project.github}
                    className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all"
                    aria-label="View source code"
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href={project.demo}
                    className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <div className="text-muted-foreground text-sm mb-4 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  {project.description.map((item, descIndex) => (
                    <li key={descIndex}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Test Stats Dashboard */}
              {project.stats && <TestStatsBar stats={project.stats} />}

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, techIndex) => {
                  const TechIcon = getTechIcon(tech)
                  return (
                    <span 
                      key={techIndex}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono bg-secondary/50 text-primary rounded-full hover:bg-primary/20 transition-all badge-glow"
                    >
                      {TechIcon && <TechIcon className="w-3.5 h-3.5" />}
                      {tech}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild className="border-primary/50 hover:bg-primary/10 animate-border-glow">
            <a href="https://github.com/VirajKotian" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}