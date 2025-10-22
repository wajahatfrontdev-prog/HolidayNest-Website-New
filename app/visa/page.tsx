"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function VisaPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passport: "",
    destination: "",
    travelDate: "",
    duration: "",
    purpose: "",
    nationality: "",
    visaType: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const visaTypes = [
    { value: "tourist", label: "Tourist Visa" },
    { value: "business", label: "Business Visa" },
    { value: "student", label: "Student Visa" },
    { value: "work", label: "Work Visa" },
    { value: "transit", label: "Transit Visa" },
  ]

  const destinations = [
    "Bali, Indonesia",
    "Paris, France",
    "Tokyo, Japan",
    "New York, USA",
    "Dubai, UAE",
    "Barcelona, Spain",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Visa Application Services</h1>
            <p className="text-xl text-muted-foreground">
              Simplify your visa process with our expert guidance and support
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Info Cards */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground text-sm">
                Our visa experts guide you through every step of the application process.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast Processing</h3>
              <p className="text-muted-foreground text-sm">
                Get your visa processed quickly with our streamlined application system.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">
                Our support team is available round the clock to assist you.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-card rounded-xl border border-border p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Apply for Your Visa</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-semibold text-green-900">Application Submitted!</h3>
                  <p className="text-green-800 text-sm">
                    We've received your visa application. Our team will review it and contact you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
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
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nationality *</label>
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                      placeholder="United States"
                    />
                  </div>
                </div>
              </div>

              {/* Passport Information */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Passport Information</h3>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Passport Number *</label>
                  <input
                    type="text"
                    name="passport"
                    value={formData.passport}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                    placeholder="A12345678"
                  />
                </div>
              </div>

              {/* Travel Details */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Travel Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Destination *</label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                    >
                      <option value="">Select a destination</option>
                      {destinations.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Visa Type *</label>
                    <select
                      name="visaType"
                      value={formData.visaType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                    >
                      <option value="">Select visa type</option>
                      {visaTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Travel Date *</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Duration (days) *</label>
                    <input
                      type="number"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                      placeholder="30"
                    />
                  </div>
                </div>
              </div>

              {/* Purpose */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Purpose of Visit</h3>
                <textarea
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                  rows={4}
                  placeholder="Describe the purpose of your visit..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button type="submit" className="bg-primary hover:bg-primary/90 flex-1">
                  Submit Application
                </Button>
                <Button type="reset" variant="outline" className="flex-1 bg-transparent">
                  Clear Form
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                * Required fields. We'll review your application and contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
