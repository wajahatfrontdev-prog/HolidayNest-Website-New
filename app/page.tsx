import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Stats from "@/components/stats"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex-1">
        <Hero />
        <Features />
        <Stats />
      </div>
      <Footer />
    </main>
  )
}
