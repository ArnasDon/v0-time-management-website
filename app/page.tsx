import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Benefits from "@/components/benefits"
import MethodsSection from "@/components/methods-section"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <MethodsSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}
