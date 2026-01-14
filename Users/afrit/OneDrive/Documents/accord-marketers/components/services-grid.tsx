import { BarChart3, Brush, Camera, Search, Target, Zap } from "lucide-react"
import ModernServiceCard from "./modern-service-card"

const services = [
  {
    icon: Target,
    title: "Strategic Consulting",
    description: "Data-driven strategies that align with your business goals and market opportunities.",
    gradient: "from-purple-500 to-pink-500",
    size: "large" as const,
    features: ["Market Analysis", "Competitor Research", "Growth Roadmap", "KPI Framework"],
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "ROI-focused campaigns across Meta, Google, and LinkedIn that deliver measurable results.",
    gradient: "from-blue-500 to-cyan-500",
    size: "normal" as const,
    features: ["Paid Advertising", "Campaign Optimization", "A/B Testing"],
  },
  {
    icon: Brush,
    title: "Creative Design",
    description: "Stunning visuals that capture attention and drive conversions across all touchpoints.",
    gradient: "from-green-500 to-teal-500",
    size: "normal" as const,
    features: ["Brand Identity", "Ad Creatives", "UI/UX Design"],
  },
  {
    icon: Camera,
    title: "Video Production",
    description: "High-impact video content for ads, social media, and brand storytelling that resonates.",
    gradient: "from-orange-500 to-red-500",
    size: "large" as const,
    features: ["Video Ads", "Social Content", "Brand Stories", "Animation"],
  },
  {
    icon: Search,
    title: "SEO & Content",
    description: "Organic growth through strategic content and search optimization that builds authority.",
    gradient: "from-indigo-500 to-purple-500",
    size: "normal" as const,
    features: ["Technical SEO", "Content Strategy", "Link Building"],
  },
  {
    icon: Zap,
    title: "Conversion Optimization",
    description: "Turn more visitors into customers with data-backed improvements and testing.",
    gradient: "from-yellow-500 to-orange-500",
    size: "normal" as const,
    features: ["CRO Audits", "Landing Pages", "User Testing"],
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Services That</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scale Startups
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end solutions that drive measurable growth for ambitious
            startups.
          </p>
        </div>

        {/* Modern Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <ModernServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
              features={service.features}
              size={service.size}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
