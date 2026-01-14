import { Award, BarChart3, Lightbulb, TrendingUp, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Lightbulb,
    title: "Strategy-First Approach",
    description:
      "Our campaigns start with research, competitor analysis, and audience mapping. Each step supports your goals.",
  },
  {
    icon: Award,
    title: "Creative That Converts",
    description: "Every asset we create sparks interest and drives clicks—from visuals to storytelling.",
  },
  {
    icon: BarChart3,
    title: "ROI Obsessed",
    description: "We track and optimize every key metric that matters to your bottom line.",
  },
  {
    icon: TrendingUp,
    title: "Proof in Performance",
    description: "With 5X lead boosts, 300%+ ROAS, and 100K+ video views, our results speak volumes.",
  },
  {
    icon: Users,
    title: "Client Trust",
    description: "Over 90% of our clients renew with us. We deliver growth with transparency and accountability.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <img src="/accord logo.png" alt="Qwantome Logo" className="w-14 h-14 object-contain mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Qwantome?</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine strategic thinking with creative execution to deliver measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
