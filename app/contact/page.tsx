"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground mb-2">Call us during business hours</p>
              <p className="font-semibold text-primary">+1 (555) 123-4567</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-2">We'll get back to you within 24 hours</p>
              <p className="font-semibold text-primary">support@travelnest.com</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Office</h3>
              <p className="text-muted-foreground mb-2">Visit us at our headquarters</p>
              <p className="font-semibold text-primary">123 Travel Street, New York, NY 10001</p>
            </div>
          </div>

          {/* Contact Form and Hours */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <div className="md:col-span-2 bg-card rounded-xl border border-border p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-green-900">Message Sent!</h3>
                    <p className="text-green-800 text-sm">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="visa">Visa Assistance</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                    rows={6}
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-xl border border-border p-8 h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Business Hours</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Monday - Friday</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM EST</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Saturday</p>
                  <p className="text-muted-foreground">10:00 AM - 4:00 PM EST</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Sunday</p>
                  <p className="text-muted-foreground">Closed</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    For urgent matters, our 24/7 support team is available via email.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Emergency Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
