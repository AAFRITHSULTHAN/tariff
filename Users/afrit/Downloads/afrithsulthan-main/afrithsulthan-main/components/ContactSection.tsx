"use client"

import React from "react"
import { Mail, MapPin, Clock, Send } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
}

const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
}

export default function ContactSection() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center z-50 bg-slate-950 text-white py-24 overflow-hidden">

            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                className="w-full max-w-6xl mx-auto px-6 pointer-events-auto relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={containerVariants}
            >

                <div className="text-center mb-16">
                    <motion.h2
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight"
                        variants={itemVariants}
                    >
                        Ready to create <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x">
                            something amazing?
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        I'm currently available for freelance projects and open to full-time opportunities.
                        Let's turn your vision into reality.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Info Cards */}
                    <div className="lg:col-span-1 space-y-5">
                        {/* Email Card */}
                        <motion.div
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
                            variants={cardVariants}
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                                <Mail className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 tracking-widest mb-1 uppercase">Email</p>
                                <a href="mailto:afrithsulthan007@gmail.com" className="text-lg font-semibold text-slate-200 break-all hover:text-white transition-colors">
                                    afrithsulthan007@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        {/* Location Card */}
                        <motion.div
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
                            variants={cardVariants}
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                                <MapPin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 tracking-widest mb-1 uppercase">Location</p>
                                <p className="text-lg font-semibold text-slate-200">Chennai, India</p>
                            </div>
                        </motion.div>

                        {/* Response Time Card */}
                        <motion.div
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/10"
                            variants={cardVariants}
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                                <Clock className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 tracking-widest mb-1 uppercase">Response Time</p>
                                <p className="text-lg font-semibold text-slate-200">Within 24 hours</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Form */}
                    <motion.div
                        className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
                        variants={formVariants}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-white relative z-10">
                            Get in Touch
                        </h3>

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/20 focus:bg-black/40 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-600 text-slate-200 font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/20 focus:bg-black/40 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-600 text-slate-200 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/20 focus:bg-black/40 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-600 text-slate-200 font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Company/College</label>
                                    <input
                                        type="text"
                                        placeholder="Company or College Name"
                                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/20 focus:bg-black/40 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-600 text-slate-200 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Your Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/20 focus:bg-black/40 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-600 resize-none text-slate-200 font-medium"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="group w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-24 text-center">
                    <p className="text-sm text-slate-500 font-medium">
                        © {new Date().getFullYear()} Afrith Sulthan. All rights reserved.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

