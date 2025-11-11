"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export default function FinalCTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background border border-border rounded-2xl p-12 sm:p-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Ready to Transform Your <span className="text-primary">Productivity?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have taken control of their time. Start your free 7-day trial today—no credit
            card required.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-full bg-secondary/30 border border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get Started
              <ArrowRight size={18} />
            </Button>
          </form>

          {submitted && <p className="text-sm text-primary font-medium">✓ Check your email to get started!</p>}

          <p className="text-sm text-muted-foreground">
            ✓ No credit card required · ✓ Access all features free · ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
