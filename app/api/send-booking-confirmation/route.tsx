import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { bookingId, userEmail, destination, checkInDate, checkOutDate, totalPrice } = body

    // Validate required fields
    if (!bookingId || !userEmail || !destination || !checkInDate || !checkOutDate || !totalPrice) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get server client
    const supabase = await createClient()

    // Get user to verify ownership
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user || user.email !== userEmail) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // In a production app, you would send an actual email here using a service like:
    // - SendGrid
    // - Resend
    // - Mailgun
    // - AWS SES
    // For now, we'll log the email that would be sent

    const emailContent = `
      <h2>Booking Confirmation</h2>
      <p>Thank you for booking with Holiday Nest!</p>
      <p><strong>Booking Details:</strong></p>
      <ul>
        <li>Destination: ${destination}</li>
        <li>Check-in: ${new Date(checkInDate).toLocaleDateString()}</li>
        <li>Check-out: ${new Date(checkOutDate).toLocaleDateString()}</li>
        <li>Total Price: $${totalPrice.toFixed(2)}</li>
      </ul>
      <p>Your booking reference: ${bookingId}</p>
      <p>We look forward to your trip!</p>
    `

    console.log(`[Email] Sending confirmation to ${userEmail}:`, emailContent)

    // Update booking status to confirmed
    const { error: updateError } = await supabase
      .from("bookings")
      .update({ status: "confirmed" })
      .eq("id", bookingId)
      .eq("user_id", user.id)

    if (updateError) throw updateError

    return NextResponse.json({
      success: true,
      message: "Booking confirmation sent",
    })
  } catch (error) {
    console.error("Error sending booking confirmation:", error)
    return NextResponse.json({ error: "Failed to send confirmation" }, { status: 500 })
  }
}
