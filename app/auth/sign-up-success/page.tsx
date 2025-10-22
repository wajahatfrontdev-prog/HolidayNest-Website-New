import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6 text-center">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-blue-600">Holiday Nest</h1>
            <p className="text-gray-600 mt-2">Your Travel Companion</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 border-0">
            <div className="mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Created!</h2>
            <p className="text-gray-600 mb-6">
              Please check your email to confirm your account. Once confirmed, you can start booking your dream trips.
            </p>
            <Link href="/">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Return to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
