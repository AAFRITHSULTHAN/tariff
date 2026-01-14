"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Wrench, ArrowRight, Zap, Shield, BarChart3 } from "lucide-react"

export default function ToolsPage() {
    return (
        <main className="bg-black min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">


                    <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up animation-delay-100">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Powerful Tools for
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Global Trade Intelligence
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
                        We are building a suite of advanced tools to help you navigate HTS classification,
                        compliance checks, and market data analysis with ease.
                    </p>
                </div>
            </section>

            {/* Feature Preview Grid */}
            <section className="py-20 bg-black/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Wrench,
                                title: "HTS Classifier",
                                desc: "AI-powered HS code classification for your products.",
                                color: "text-blue-400"
                            },
                            {
                                icon: Shield,
                                title: "Compliance Checker",
                                desc: "Instant regulatory validation for cross-border shipments.",
                                color: "text-purple-400"
                            },
                            {
                                icon: BarChart3,
                                title: "Market Insights",
                                desc: "Real-time data on global trade flows and trends.",
                                color: "text-green-400"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
                                <div className={`p-3 bg-white/5 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
