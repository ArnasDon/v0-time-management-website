import { Lightbulb, Clock, Grid, Zap, CheckSquare } from "lucide-react"

const methods = [
  {
    icon: Clock,
    title: "Pomodoro Technique",
    description:
      "Work in focused 25-minute sprints followed by short breaks. Perfect for beating procrastination and maintaining energy.",
  },
  {
    icon: Grid,
    title: "Time Blocking",
    description:
      "Dedicate specific time blocks for different activities. Create structure and eliminate context switching.",
  },
  {
    icon: Lightbulb,
    title: "Eisenhower Matrix",
    description: "Categorize tasks by urgency and importance. Focus on what truly moves the needle in your life.",
  },
  {
    icon: CheckSquare,
    title: "GTD (Getting Things Done)",
    description: "Capture, clarify, organize, and review all your tasks. Keep your mind clear and your actions clear.",
  },
  {
    icon: Zap,
    title: "Eat That Frog",
    description: "Tackle your most challenging task first. Build momentum and set the tone for your entire day.",
  },
]

export default function MethodsSection() {
  return (
    <section id="methods" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Time Management <span className="text-primary">Methods</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master proven techniques that work. Choose the methods that align with your style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {methods.map((method, index) => {
            const Icon = method.icon
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{method.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
