import { ExternalLink, Github, Folder, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  },
]

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
            A selection of testing frameworks and automation projects I&apos;ve built 
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

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs font-mono bg-secondary/50 text-primary rounded-full hover:bg-primary/20 transition-colors badge-glow"
                  >
                    {tech}
                  </span>
                ))}
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
