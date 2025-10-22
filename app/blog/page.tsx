import Navigation from "@/components/navigation"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Bali You Must Visit",
    excerpt:
      "Discover the lesser-known attractions in Bali that will make your trip truly unforgettable. From secret beaches to local temples.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Destinations",
    image: "/blog-bali-gems.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Complete Visa Guide for European Travel",
    excerpt:
      "Everything you need to know about Schengen visas, requirements, and tips for a smooth application process.",
    author: "Michael Chen",
    date: "March 12, 2024",
    category: "Visa Tips",
    image: "/blog-visa-guide.jpg",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Budget Travel Tips: How to Save 50% on Your Next Trip",
    excerpt:
      "Learn insider secrets to travel on a budget without compromising on experience. From flights to accommodations.",
    author: "Emma Rodriguez",
    date: "March 10, 2024",
    category: "Travel Tips",
    image: "/blog-budget-travel.jpg",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Best Time to Visit Tokyo: A Seasonal Guide",
    excerpt:
      "Plan your Tokyo adventure with our comprehensive guide to seasons, weather, and what to expect each time of year.",
    author: "James Wilson",
    date: "March 8, 2024",
    category: "Destinations",
    image: "/blog-tokyo-seasons.jpg",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Travel Photography Tips from Professional Photographers",
    excerpt:
      "Capture stunning travel photos with these expert tips and tricks. Learn composition, lighting, and editing techniques.",
    author: "Lisa Anderson",
    date: "March 5, 2024",
    category: "Photography",
    image: "/blog-photography-tips.jpg",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Cultural Etiquette: What You Need to Know Before Traveling",
    excerpt:
      "Respect local customs and traditions. A guide to cultural etiquette in popular travel destinations around the world.",
    author: "David Park",
    date: "March 1, 2024",
    category: "Travel Tips",
    image: "/blog-cultural-etiquette.jpg",
    readTime: "6 min read",
  },
]

const categories = ["All", "Destinations", "Visa Tips", "Travel Tips", "Photography"]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Travel Blog</h1>
            <p className="text-xl text-muted-foreground">Tips, guides, and stories from travelers around the world</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-primary hover:bg-primary/90" : "bg-transparent"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                  </div>

                  {/* Meta */}
                  <div className="space-y-3 pt-4 border-t border-border mt-auto">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 gap-1">
                        Read More
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-blue-100">
            Get travel tips, destination guides, and exclusive offers delivered to your inbox
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-blue-50">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
