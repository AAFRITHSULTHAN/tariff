"use client"

import { ArrowRight, BarChart3, BookOpen, CheckCircle, FileText, Globe, Search, ShieldCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: FileText,
    title: "HTS Codes Classification",
    shortDesc: "HS / HTS classification analysis and optimisation",
    fullDesc:
      "HS / HTS classification analysis and optimisation. Customs duty, VAT, and tariff impact assessment. Technical justification reports for internal and external use.",
    features: [
      "Import–export compliance frameworks",
      "Trade documentation review and customs readiness checks",
      "Advisory on Section 301, Section 232, CBAM",
      "Alternative classification scenario analysis",
      "Technical justification reports",
    ],
    deliverables: ["Classification Report", "Duty Impact Assessment", "Compliance Framework", "Technical Justification"],
    timeline: "2-3 weeks",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: ShieldCheck,
    title: "Export Control Classification Number (ECCN)",
    shortDesc: "Accurate ECCN identification under U.S. EAR regulations",
    fullDesc:
      "We assist businesses in identifying the correct Export Control Classification Number (ECCN) under the U.S. Export Administration Regulations (EAR). Our analysis helps determine licensing requirements and export restrictions.",
    features: [
      "Accurate ECCN identification",
      "Licensing requirement determination",
      "End-use and end-user compliance checks",
      "Export restriction analysis",
      "Defensible classification documentation",
    ],
    deliverables: ["ECCN Classification", "Licensing Determination", "Compliance Roadmap", "Risk Assessment"],
    timeline: "1-2 weeks",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Cross-Border Market Entry & Expansion Advisory",
    shortDesc: "Strategic guidance for scaling cross-border operations",
    fullDesc:
      "We help businesses plan and execute international expansion with a clear understanding of regulatory, customs, and cost implications.",
    features: [
      "Market entry feasibility for EU, UK, US, and global markets",
      "Landed cost modelling and margin analysis",
      "Export compliance and regulatory mapping",
      "Distributor, retailer, and channel readiness support",
      "Strategic guidance for scaling operations",
    ],
    deliverables: ["Market Entry Strategy", "Landed Cost Model", "Regulatory Map", "Channel Readiness Report"],
    timeline: "4-6 weeks",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory & Product Compliance Advisory",
    shortDesc: "Ensure compliance before entering new markets",
    fullDesc:
      "We provide guidance on product-specific regulatory requirements to ensure compliance before entering new markets.",
    features: [
      "Product compliance mapping and regulatory gap analysis",
      "Labelling and conformity requirements (CE, UKCA, GPSR, etc.)",
      "REACH, sustainability, and material compliance considerations",
      "Support for documentation and technical files",
      "Risk assessment and compliance strategy development",
    ],
    deliverables: ["Compliance Map", "Gap Analysis", "Labeling Guide", "Risk Assessment"],
    timeline: "3-5 weeks",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Import & Export Data Intelligence",
    shortDesc: "Data-driven insights for global trade flows",
    fullDesc:
      "We provide import and export data insights to help businesses analyse global trade flows, identify market opportunities, track competitors, and understand supplier and buyer trends.",
    features: [
      "Global trade flow analysis",
      "Market opportunity identification",
      "Competitor tracking and analysis",
      "Supplier and buyer trend analysis",
      "Data-driven trade intelligence",
    ],
    deliverables: ["Trade Intelligence Report", "Competitor Analysis", "Market Opportunity Report", "Supplier Trends"],
    timeline: "Ongoing",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: BookOpen,
    title: "Knowledge, Training & Advisory Support",
    shortDesc: "Structured knowledge support to build internal capability",
    fullDesc: "We also provide structured knowledge support to help teams build internal capability.",
    features: [
      "Trade compliance training for teams",
      "Custom workshops and knowledge sessions",
      "Practical guidance documents and playbooks",
      "Advisory support for internal projects and audits",
      "Capability building workshops",
    ],
    deliverables: ["Training Modules", "Workshop Sessions", "Guidance Playbooks", "Audit Support"],
    timeline: "Flexible",
    gradient: "from-yellow-500 to-orange-500",
  },
]

export default function DetailedServicesSection() {
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center space-x-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
            </div>
            <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Our Services</span>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Comprehensive Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              For Growth
            </span>
          </h2>

          <p
            className={`text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Qwantome Consulting Group provides specialised advisory services that help businesses navigate global trade,
            regulatory complexity, and cross-border expansion with confidence. We combine technical expertise with
            practical execution to deliver clarity, compliance, and cost efficiency.
          </p>
        </div>

        {/* Services Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Service Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon
                const isActive = activeService === index

                return (
                  <div
                    key={index}
                    className={`group cursor-pointer transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                      }`}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                    onClick={() => setActiveService(index)}
                  >
                    <div
                      className={`relative p-6 rounded-2xl border transition-all duration-300 ${isActive
                        ? "bg-white/10 border-white/30 scale-[1.02]"
                        : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                        }`}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.gradient} rounded-l-2xl`}
                        />
                      )}

                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isActive ? "scale-110" : "group-hover:scale-105"
                            }`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-white mb-2 leading-tight">{service.title}</h3>
                          <p className="text-sm text-gray-400 leading-relaxed">{service.shortDesc}</p>
                        </div>
                        <ArrowRight
                          className={`h-5 w-5 text-gray-400 transition-all duration-300 flex-shrink-0 mt-1 ${isActive ? "text-white translate-x-1" : "group-hover:translate-x-1"
                            }`}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-8">
            <div
              className={`transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              {services.map((service, index) => {
                const Icon = service.icon
                const isActive = activeService === index

                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
                      }`}
                  >
                    {isActive && (
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
                        {/* Service Header */}
                        <div className="flex items-start space-x-6 mb-8">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-3xl font-bold text-white mb-3 leading-tight">{service.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">{service.fullDesc}</p>
                          </div>
                        </div>

                        {/* Service Features */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-white mb-6">What's Included:</h4>
                          <div className="grid gap-4">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="text-lg font-bold text-white mb-4">Key Deliverables:</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {service.deliverables.map((deliverable, delIndex) => (
                              <div
                                key={delIndex}
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-300"
                              >
                                {deliverable}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-6 border-t border-white/10">
                          <button
                            className={`bg-gradient-to-r ${service.gradient} hover:scale-105 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg`}
                          >
                            Get Started with {service.title}
                            <ArrowRight className="ml-2 h-4 w-4 inline" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
