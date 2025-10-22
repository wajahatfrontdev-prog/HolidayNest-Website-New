import { Globe, FileCheck, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Explore Destinations",
    description: "Discover 150+ amazing destinations with detailed guides and travel tips.",
  },
  {
    icon: FileCheck,
    title: "Visa Services",
    description: "Streamlined visa application process with expert guidance and support.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 customer support team ready to help with any travel questions.",
  },
  {
    icon: Zap,
    title: "Quick Booking",
    description: "Book your entire trip in minutes with our intuitive platform.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose TravelNest?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need for a seamless travel experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
