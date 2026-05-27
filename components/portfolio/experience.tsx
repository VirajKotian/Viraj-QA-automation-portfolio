import { Building2, Calendar, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "QA Specialist",
    company: "Instinct Innovations",
    period: "2022 - Present",
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
  },
  {
    title: "AV Programmer ",
    company: "All-wave AV System Pvt Ltd.",
    period: "2020 - 2022",
    description: [
      " Configured and tested AV control systems, conferencing solutions, and DSP integrations for enterprise environments.",
      " Programmed and configured AV system integrations across Crestron, Extron, Biamp Tesira, and Zoom Rooms,supporting deployment and implementation across client environments.",
      "Implemented mobile test automation for iOS and Android using Appium",

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
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 mt-8 ring-4 ring-background animate-pulse" />

                <div className="md:w-1/2" />
                
                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div className="glass-warm rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group card-hover">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 shrink-0">
                            <Briefcase className="w-3 h-3" />
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
