"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">⏱</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">Moment</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("methods")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Methods
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Benefits
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-2 py-2 text-foreground hover:text-primary"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left px-2 py-2 text-foreground hover:text-primary"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("methods")}
              className="block w-full text-left px-2 py-2 text-foreground hover:text-primary"
            >
              Methods
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block w-full text-left px-2 py-2 text-foreground hover:text-primary"
            >
              Benefits
            </button>
            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              Start Free Trial
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
