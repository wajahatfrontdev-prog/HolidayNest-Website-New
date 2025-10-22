import Navigation from "@/components/navigation"
import { Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "/bali-beach-tropical-paradise.jpg",
    rating: 4.8,
    reviews: 2340,
    price: "$899",
    description: "Experience tropical paradise with stunning beaches and ancient temples.",
    travelers: "15K+",
  },
  {
    id: 2,
    name: "Paris, France",
    image: "/paris-eiffel-tower-romantic.jpg",
    rating: 4.9,
    reviews: 3120,
    price: "$1,299",
    description: "The City of Light awaits with iconic landmarks and world-class cuisine.",
    travelers: "22K+",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: "/tokyo-neon-city-modern.jpg",
    rating: 4.7,
    reviews: 2890,
    price: "$1,099",
    description: "Discover the perfect blend of ancient tradition and cutting-edge modernity.",
    travelers: "18K+",
  },
  {
    id: 4,
    name: "New York, USA",
    image: "/new-york-skyline-manhattan.jpg",
    rating: 4.6,
    reviews: 3450,
    price: "$799",
    description: "The city that never sleeps offers endless entertainment and culture.",
    travelers: "25K+",
  },
  {
    id: 5,
    name: "Dubai, UAE",
    image: "/dubai-burj-khalifa-luxury.jpg",
    rating: 4.8,
    reviews: 2670,
    price: "$1,199",
    description: "Experience luxury and innovation in the heart of the desert.",
    travelers: "19K+",
  },
  {
    id: 6,
    name: "Barcelona, Spain",
    image: "/barcelona-sagrada-familia-architecture.jpg",
    rating: 4.7,
    reviews: 2540,
    price: "$949",
    description: "Explore Gaudí's masterpieces and vibrant Mediterranean culture.",
    travelers: "16K+",
  },
]

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Explore Our Destinations</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from 150+ amazing destinations around the world
            </p>
          </div>

          {/* Filter Section */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Button variant="outline" className="rounded-full bg-transparent">
              All Destinations
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Beach
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              City
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Mountain
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Adventure
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold text-sm">{destination.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{destination.name}</h3>
                    <p className="text-muted-foreground text-sm">{destination.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{destination.travelers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} />
                      <span>{destination.reviews} reviews</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-primary">{destination.price}</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">Explore</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Ready to Book Your Adventure?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Start planning your dream trip today with our expert travel consultants
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            Book Now
          </Button>
        </div>
      </section>
    </main>
  )
}
