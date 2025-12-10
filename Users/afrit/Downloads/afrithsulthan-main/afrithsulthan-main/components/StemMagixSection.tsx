"use client"

import React from "react"
import { Github, Play } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface StemMagixSectionProps {
    opacity: number
    transformY: number
}

const PROJECT = {
    title: "StemMagix",
    description: "I recently collaborated with StemMagix to build a high-impact landing page designed for conversion and clarity.",
    longDescription: (
        <>
            <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                Highlights:
            </p>
            <ul className="space-y-2 mb-8">
                {[
                    "Clean and modern UI",
                    "Bold typography for strong brand recall",
                    "Smooth animations",
                    "Responsive + SEO-friendly structure"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                        <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </>
    ),
    demoUrl: "https://stemmagix-zeta.vercel.app/",
    codeUrl: "#",
    techStack: ["Next.js", "React", "Tailwind CSS"],
}

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

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const
        }
    }
}

export default function StemMagixSection() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center z-20 bg-white py-24 overflow-hidden">
            {/* Ambient Background Gradient - Blue/Green theme for healthcare vibe */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-green-100/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full pointer-events-auto relative z-10 flex flex-col">

                <div className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Left Content - Text & Details */}
                        <motion.div
                            className="flex flex-col justify-center space-y-10 order-2 lg:order-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                            variants={containerVariants}
                        >

                            {/* Header */}
                            <div className="space-y-6">
                                <motion.h1
                                    className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
                                    variants={itemVariants}
                                >
                                    <span className="text-blue-600">
                                        {PROJECT.title}
                                    </span>
                                </motion.h1>

                                {/* Tech Stack - Styled Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {PROJECT.techStack.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            variants={itemVariants}
                                            className="px-4 py-1.5 bg-white border border-blue-100 rounded-full text-sm font-semibold text-blue-600 shadow-sm hover:border-blue-300 transition-all cursor-default"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-8">
                                <motion.p
                                    className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight tracking-tight"
                                    variants={itemVariants}
                                >
                                    {PROJECT.description}
                                </motion.p>
                                <motion.div
                                    className="text-lg text-gray-600 leading-relaxed max-w-xl"
                                    variants={itemVariants}
                                >
                                    {PROJECT.longDescription}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Right Content - Hero Image & Actions */}
                        <motion.div
                            className="relative order-1 lg:order-2 lg:-mt-12 flex flex-col gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                            variants={imageVariants}
                        >
                            {/* Main Image Container */}
                            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-blue-100 group bg-white hover:shadow-blue-200/50 transition-shadow duration-500">
                                <Image
                                    src="/images/stemmagix.png"
                                    alt="StemMagix Dashboard"
                                    fill
                                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                                    priority
                                />

                                {/* Cinematic Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Hover Actions Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/30 backdrop-blur-[2px]">
                                    <a
                                        href={PROJECT.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl hover:bg-blue-700"
                                    >
                                        <Play className="w-4 h-4 fill-white" />
                                        <span className="text-sm tracking-wider">LIVE DEMO</span>
                                    </a>
                                    <a
                                        href={PROJECT.codeUrl}
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg border border-blue-100 hover:shadow-xl"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span className="text-sm tracking-wider">VIEW REPO</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}
