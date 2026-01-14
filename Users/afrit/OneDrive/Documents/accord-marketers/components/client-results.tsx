import { Star } from "lucide-react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { value: "+320%", label: "ROAS for a D2C brand in 90 days" },
  { value: "5X", label: "increase in qualified leads for a SaaS startup" },
  { value: "#1", label: "Ranked on Google for key terms in 60 days" },
]

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Founder, TechLaunch",
    quote: "Qwantome is more than an agency; they're a partner. Our revenue has tripled.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Priya Sinha",
    title: "CMO, BloomWear",
    quote: "We found a team that understands both performance and creativity.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Neeraj Sharma",
    title: "Co-founder, FitFuel",
    quote: "Their video ads transformed our conversions. A game-changer.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Meera Patel",
    title: "CEO, Zensy",
    quote: "They helped us rebrand with visuals that reflect who we are.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Vikram Rao",
    title: "Director, CloudGrid",
    quote: "One of the smartest partners we have ever worked with.",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function ClientResults() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results. Real Founders. Real Growth.
          </h2>
          <p className="text-xl text-gray-600">See how we've helped startups achieve remarkable growth</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
