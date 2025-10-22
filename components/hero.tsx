import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/placeholder.svg?height=600&width=1200&query=tropical-beach-destination)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Explore the World, Simplified
              </h1>
              <p className="text-xl text-muted-foreground">
                Book your dream vacation and handle visa applications with ease. We make travel planning effortless.
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPin size={16} />
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar size={16} />
                    Travel Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2">
                Search Destinations
                <ArrowRight size={18} />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Travelers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Destinations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="/travel-adventure-vacation.jpg"
              alt="Travel adventure"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
