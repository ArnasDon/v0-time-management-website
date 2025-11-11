import { Clock, Target, BarChart3, Zap, Calendar, Brain } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Task Prioritization",
    description:
      "Use the Eisenhower Matrix to focus on what truly matters. Distinguish between urgent and important tasks effortlessly.",
  },
  {
    icon: Clock,
    title: "Time Blocking",
    description:
      "Schedule your day in focused time blocks. Eliminate decision fatigue and build a structured routine that works.",
  },
  {
    icon: Brain,
    title: "Goal Setting & Tracking",
    description:
      "Define meaningful goals and track progress in real-time. Stay motivated with visual milestones and achievements.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Get detailed insights into your productivity patterns. Identify your peak hours and optimize accordingly.",
  },
  {
    icon: Zap,
    title: "Pomodoro Timer",
    description: "Built-in Pomodoro timer helps you work in focused sprints. Customizable intervals for your workflow.",
  },
  {
    icon: Calendar,
    title: "Calendar Sync",
    description: "Seamlessly integrate with Google Calendar and Outlook. Keep all your schedules in perfect harmony.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Powerful Features for
            <span className="text-primary"> Maximum Productivity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take control of your time and achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
