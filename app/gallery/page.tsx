"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/gallery-bali-sunset.jpg",
    alt: "Bali sunset",
    category: "Beach",
    destination: "Bali, Indonesia",
  },
  {
    id: 2,
    src: "/gallery-paris-night.jpg",
    alt: "Paris at night",
    category: "City",
    destination: "Paris, France",
  },
  {
    id: 3,
    src: "/gallery-tokyo-street.jpg",
    alt: "Tokyo street",
    category: "City",
    destination: "Tokyo, Japan",
  },
  {
    id: 4,
    src: "/gallery-dubai-desert.jpg",
    alt: "Dubai desert",
    category: "Adventure",
    destination: "Dubai, UAE",
  },
  {
    id: 5,
    src: "/gallery-barcelona-beach.jpg",
    alt: "Barcelona beach",
    category: "Beach",
    destination: "Barcelona, Spain",
  },
  {
    id: 6,
    src: "/gallery-newyork-skyline.jpg",
    alt: "New York skyline",
    category: "City",
    destination: "New York, USA",
  },
  {
    id: 7,
    src: "/gallery-bali-temple.jpg",
    alt: "Bali temple",
    category: "Culture",
    destination: "Bali, Indonesia",
  },
  {
    id: 8,
    src: "/gallery-paris-cafe.jpg",
    alt: "Paris cafe",
    category: "Culture",
    destination: "Paris, France",
  },
  {
    id: 9,
    src: "/gallery-tokyo-temple.jpg",
    alt: "Tokyo temple",
    category: "Culture",
    destination: "Tokyo, Japan",
  },
]

const categories = ["All", "Beach", "City", "Culture", "Adventure"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Travel Gallery</h1>
            <p className="text-xl text-muted-foreground">Explore stunning photos from our travelers around the world</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-muted h-64"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-semibold">{image.destination}</p>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <p className="text-xl font-semibold">{selectedImage.destination}</p>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
