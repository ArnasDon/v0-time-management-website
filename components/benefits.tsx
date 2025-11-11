import { TrendingUp, Heart, Award } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "40% More Productive",
    stat: "↑40%",
    description: "Users report significant increases in productivity after using our methods for just 4 weeks.",
  },
  {
    icon: Heart,
    title: "Better Work-Life Balance",
    stat: "↑35%",
    description: "Achieve more in less time. Reclaim your evenings and weekends for what matters most.",
  },
  {
    icon: Award,
    title: "Reduced Stress",
    stat: "↓50%",
    description: "Clear structure and control over your schedule significantly reduces anxiety and overwhelm.",
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Real Results, Real Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of people who have transformed their productivity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-10 h-10 text-primary" />
                  <span className="text-3xl font-bold text-primary">{benefit.stat}</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
