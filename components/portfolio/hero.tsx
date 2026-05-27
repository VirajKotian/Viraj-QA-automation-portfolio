import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Terminal, TestTube2 } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main hero card with glass effect */}
          <div className="glass-warm rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-warm border border-primary/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-foreground/80">Available for opportunities</span>
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <TestTube2 className="w-8 h-8 text-primary animate-float" />
                <Terminal className="w-6 h-6 text-accent animate-float" style={{ animationDelay: '1s' }} />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-text-glow">
                  Viraj Kotian
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary font-medium mb-4">
                QA Automation Engineer
              </p>
              
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                I specialize in building robust test automation frameworks and ensuring 
                software quality through comprehensive testing strategies. Expert in 
                Playwright, Selenium, Cypress, and modern CI/CD pipelines.
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {["Playwright", "Selenium", "Appium", "Cypress", "JavaScipt","Python", "TypeScript"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 badge-glow"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button asChild size="lg" className="glow-btn">
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary/50 hover:bg-primary/10 animate-border-glow">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-warm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all icon-glow"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-warm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all icon-glow"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="w-10 h-10 rounded-full glass-warm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all icon-glow"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <a 
            href="#about" 
            className="text-primary/70 hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}
