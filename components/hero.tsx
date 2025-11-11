import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-secondary/30 text-primary px-4 py-2 rounded-full text-sm font-medium">
              ✨ Introducing Moment
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
              Master Your Time, <span className="text-primary">Boost Your Life</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Take control of your schedule. Minimize distractions. Maximize productivity. Achieve your goals with our
              intelligent time management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base flex items-center justify-center gap-2">
                Start Managing Your Time
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base bg-transparent">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              ✓ No credit card required · ✓ Free forever plan · ✓ 7-day full trial
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src="/time-management-app-interface-calendar-tasks.jpg"
              alt="Time management interface"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary">50K+</div>
            <p className="text-muted-foreground mt-2">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary">4.9★</div>
            <p className="text-muted-foreground mt-2">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary">95%</div>
            <p className="text-muted-foreground mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
