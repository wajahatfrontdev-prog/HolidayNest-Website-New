"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Star, ChevronDown } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/avatar-sarah.jpg",
    rating: 5,
    text: "TravelNest made my dream vacation to Bali absolutely perfect! The visa process was seamless and the customer support was incredible.",
    destination: "Bali, Indonesia",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "San Francisco, USA",
    image: "/avatar-michael.jpg",
    rating: 5,
    text: "I've used many travel booking sites, but TravelNest stands out. The attention to detail and personalized recommendations were exceptional.",
    destination: "Tokyo, Japan",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    image: "/avatar-emma.jpg",
    rating: 5,
    text: "The visa application service saved me so much time and stress. Highly recommend TravelNest to anyone planning international travel!",
    destination: "Dubai, UAE",
  },
  {
    id: 4,
    name: "James Wilson",
    location: "London, UK",
    image: "/avatar-james.jpg",
    rating: 5,
    text: "Best travel booking experience I've had. Everything was organized perfectly, from flights to accommodations to visa support.",
    destination: "Paris, France",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    location: "Toronto, Canada",
    image: "/avatar-lisa.jpg",
    rating: 5,
    text: "TravelNest's 24/7 support team was always there when I needed them. They made my family trip to Barcelona unforgettable!",
    destination: "Barcelona, Spain",
  },
  {
    id: 6,
    name: "David Park",
    location: "Sydney, Australia",
    image: "/avatar-david.jpg",
    rating: 5,
    text: "From booking to arrival, everything was smooth. The platform is intuitive and the prices are competitive. Will definitely book again!",
    destination: "New York, USA",
  },
]

const faqs = [
  {
    id: 1,
    question: "How long does the visa application process take?",
    answer:
      "The visa application process typically takes 5-15 business days depending on the destination country. Our team will provide you with a specific timeline based on your chosen destination and visa type.",
  },
  {
    id: 2,
    question: "What documents do I need for a visa application?",
    answer:
      "Required documents vary by destination, but generally include a valid passport, completed application form, proof of accommodation, travel itinerary, and financial documents. We'll provide a complete checklist specific to your destination.",
  },
  {
    id: 3,
    question: "Can I modify my booking after confirmation?",
    answer:
      "Yes, you can modify your booking up to 30 days before your travel date. Modifications may incur additional charges depending on the changes requested. Contact our support team for assistance.",
  },
  {
    id: 4,
    question: "Do you offer travel insurance?",
    answer:
      "Yes, we offer comprehensive travel insurance packages that cover medical emergencies, trip cancellations, and lost luggage. You can add insurance during the booking process.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and digital payment methods like PayPal and Apple Pay. All transactions are secure and encrypted.",
  },
  {
    id: 6,
    question: "Is there a refund policy?",
    answer:
      "Yes, we offer a 7-day money-back guarantee for most bookings. Refunds are processed within 5-10 business days. Some packages may have different refund policies, which will be clearly stated during booking.",
  },
]

export default function TestimonialsPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">What Our Travelers Say</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of happy travelers who've experienced unforgettable journeys with TravelNest
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.destination}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Find answers to common questions about our services</p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <button
                  onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-primary flex-shrink-0 transition-transform ${
                      openFaqId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaqId === faq.id && (
                  <div className="px-6 py-4 bg-muted/30 border-t border-border">
                    <p className="text-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-blue-100 mb-6">Our support team is available 24/7 to help you with any inquiries</p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
