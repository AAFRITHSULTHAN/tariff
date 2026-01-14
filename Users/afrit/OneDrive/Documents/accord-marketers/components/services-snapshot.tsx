import { BarChart3, Lightbulb, Search, Target, Video, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Target,
    title: "Digital Strategy & Consulting",
    description: "We help you create marketing strategies that boost growth from start to finish.",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Boost ROI with targeted campaigns on Meta, Google, and LinkedIn platforms.",
  },
  {
    icon: Zap,
    title: "Funnels & Content Marketing",
    description: "Engage and convert using story-driven content and effective funnels.",
  },
  {
    icon: Search,
    title: "SEO + Local Marketing",
    description: "Outrank competitors and get discovered by the right customers.",
  },
  {
    icon: Lightbulb,
    title: "Graphic & Visual Design",
    description: "Create stunning visuals that attract and convert your audience.",
  },
  {
    icon: Video,
    title: "Video Marketing & Production",
    description: "Craft high-impact videos, from ads to brand stories, that drive results.",
  },
]

export default function ServicesSnapshot() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
