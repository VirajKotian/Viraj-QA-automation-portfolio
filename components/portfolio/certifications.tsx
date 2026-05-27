import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Playwright JS/TS Automation Testing from Scratch & Framework",
    date: "04/29/2026",
    details: "25 total hours · 147 lectures · Udemy Certificate",
    url: "https://www.udemy.com/certificate/UC-c038c53d-ed92-43ab-9c49-9691261bf5b9/",
  },
  {
    title: "Selenium Webdriver with PYTHON from Scratch + Frameworks",
    date: "08/14/2024",
    details: "18 total hours · 117 lectures · Udemy Certificate",
    url: "https://www.udemy.com/certificate/UC-cf6845c3-da4a-4b50-b2c6-4fb8d1fd01ef/",
  },
  {
    title: "Learn JMETER from Scratch on Live Apps - Performance Testing",
    date: "08/25/2024",
    details: "8.5 total hours · 48 lectures · Udemy Certificate",
    url: "https://www.udemy.com/certificate/UC-84b491f5-37b9-4a62-a436-e3b26010848b/",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 section-title">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4 animate-pulse-glow" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified Udemy certificates for automation and performance testing courses. Click the links below to view each certificate on Udemy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-warm rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center icon-glow">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {cert.details}
              </p>

              <Button variant="outline" asChild className="w-full justify-center border-primary/50 hover:bg-primary/10">
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
