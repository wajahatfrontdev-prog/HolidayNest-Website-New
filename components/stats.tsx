export default function Stats() {
  const stats = [
    { number: "50K+", label: "Successful Bookings" },
    { number: "150+", label: "Destinations" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <p className="text-4xl font-bold mb-2">{stat.number}</p>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
