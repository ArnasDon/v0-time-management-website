const steps = [
  {
    number: "01",
    title: "Set Your Goals",
    description: "Define what you want to achieve. Break down big goals into smaller, manageable tasks.",
  },
  {
    number: "02",
    title: "Organize Your Tasks",
    description: "Categorize tasks using prioritization methods. Assign time blocks to each activity.",
  },
  {
    number: "03",
    title: "Execute with Focus",
    description: "Follow your schedule with built-in timers and distraction blockers. Stay in the zone.",
  },
  {
    number: "04",
    title: "Review & Optimize",
    description: "Analyze your productivity metrics. Refine your approach and improve continuously.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get Started in <span className="text-primary">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intuitive platform makes time management effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-1/2 w-12 h-1 bg-gradient-to-r from-primary to-primary/50 -translate-x-1/2 translate-x-16" />
              )}

              <div className="bg-background border border-border rounded-xl p-8 h-full hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
