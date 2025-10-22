"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const DESTINATIONS = [
  "Bali, Indonesia",
  "Paris, France",
  "Tokyo, Japan",
  "New York, USA",
  "Dubai, UAE",
  "Barcelona, Spain",
  "London, UK",
  "Sydney, Australia",
]

export default function BookNowPage() {
  const [formData, setFormData] = useState({
    destination: "",
    checkInDate: "",
    checkOutDate: "",
    travelersCount: 1,
    totalPrice: 0,
  })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/auth/login")
        return
      }

      setUser(user)
    }

    checkUser()
  }, [supabase, router])

  const calculatePrice = (checkIn: string, checkOut: string, travelers: number) => {
    if (!checkIn || !checkOut) return 0

    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))

    if (nights <= 0) return 0

    const pricePerNight = 150
    return nights * pricePerNight * travelers
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    const newFormData = {
      ...formData,
      [name]: name === "travelersCount" ? Number.parseInt(value) : value,
    }

    if (name === "checkInDate" || name === "checkOutDate" || name === "travelersCount") {
      const checkIn = name === "checkInDate" ? value : formData.checkInDate
      const checkOut = name === "checkOutDate" ? value : formData.checkOutDate
      const travelers = name === "travelersCount" ? Number.parseInt(value) : formData.travelersCount

      newFormData.totalPrice = calculatePrice(checkIn, checkOut, travelers)
    }

    setFormData(newFormData)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      if (!formData.destination || !formData.checkInDate || !formData.checkOutDate) {
        throw new Error("Please fill in all required fields")
      }

      const checkIn = new Date(formData.checkInDate)
      const checkOut = new Date(formData.checkOutDate)

      if (checkOut <= checkIn) {
        throw new Error("Check-out date must be after check-in date")
      }

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination: formData.destination,
          checkInDate: formData.checkInDate,
          checkOutDate: formData.checkOutDate,
          travelersCount: formData.travelersCount,
          totalPrice: formData.totalPrice,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to create booking")
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/bookings")
      }, 2000)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Your Trip</h1>
          <p className="text-gray-600">Create a new booking with Holiday Nest</p>
        </div>

        <Card className="border-0 shadow-lg animate-scale-in">
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
            <CardDescription>Fill in your travel information</CardDescription>
          </CardHeader>
          <CardContent>
            {success ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Created!</h3>
                <p className="text-gray-600">Confirmation email sent. Redirecting to your bookings...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="destination">Destination</Label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Select a destination</option>
                      {DESTINATIONS.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="checkInDate">Check-in Date</Label>
                      <Input
                        id="checkInDate"
                        name="checkInDate"
                        type="date"
                        value={formData.checkInDate}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="checkOutDate">Check-out Date</Label>
                      <Input
                        id="checkOutDate"
                        name="checkOutDate"
                        type="date"
                        value={formData.checkOutDate}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="travelersCount">Number of Travelers</Label>
                    <Input
                      id="travelersCount"
                      name="travelersCount"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.travelersCount}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300"
                    />
                  </div>

                  {formData.totalPrice > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 animate-fade-in">
                      <p className="text-sm text-gray-600 mb-1">Estimated Total Price</p>
                      <p className="text-3xl font-bold text-blue-600">${formData.totalPrice.toFixed(2)}</p>
                      <p className="text-xs text-gray-500 mt-2">Price is calculated at $150 per night per traveler</p>
                    </div>
                  )}

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md animate-fade-in">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                    {isLoading ? "Creating booking..." : "Complete Booking"}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
