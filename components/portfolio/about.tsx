import { CheckCircle2, Sparkles } from "lucide-react"

const highlights = [
  "2+ years of experience in QA Automation",
  "Expert in multiple testing frameworks",
  "CI/CD pipeline integration specialist",
  "Strong focus on code quality and best practices",
  "Cloud & MCP tools proficiency",
]

export function About() {
  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 section-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full animate-pulse-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="glass-warm rounded-2xl p-8 relative overflow-hidden card-hover">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary font-medium">My Story</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                I&apos;m a dedicated QA Automation Engineer with a passion for building 
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
            </div>
          </div>

          <div className="glass-warm rounded-2xl p-8 relative overflow-hidden card-hover">
            {/* Decorative element */}
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
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
