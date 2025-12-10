"use client"

import React from "react"
import { Github, Linkedin, Download, LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface AboutSectionProps {
    opacity: number
    transformY: number
}

const CONTENT = {
    header: "Full Stack Developer",
    name: "Afrith Sulthan .A",
    subHeader: "RMKEC’27 • Computer Science & Business Systems",
    description: "Passionate Full Stack Developer crafting intelligent, user-centric solutions. I bridge complex tech with business needs to build scalable, high-performance applications. Let’s turn your innovative ideas into reality.",
    tagline: "Engineering ideas into scalable experiences.",
}

interface SocialLink {
    icon: LucideIcon
    href: string
}

const SOCIALS: SocialLink[] = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: "easeOut" as const
        }
    }
}

export default function AboutSection() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center z-20 bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden">
            {/* Decorative background element */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
            />

            <div className="max-w-4xl w-full px-8 flex flex-col items-center text-center relative z-10">

                {/* Text Content */}
                <motion.div
                    className="pointer-events-auto w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="p-8 md:p-12 flex flex-col items-center">

                        {/* Header */}
                        <motion.h2
                            className="text-sm md:text-base font-bold tracking-[0.25em] text-primary uppercase mb-4"
                            variants={itemVariants}
                        >
                            {CONTENT.header}
                        </motion.h2>

                        {/* Name */}
                        <motion.h2
                            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary/70 mb-6 tracking-tight drop-shadow-sm"
                            variants={itemVariants}
                        >
                            {CONTENT.name}
                        </motion.h2>

                        {/* Sub-header */}
                        <motion.p
                            className="text-lg md:text-xl font-medium text-muted-foreground mb-10"
                            variants={itemVariants}
                        >
                            {CONTENT.subHeader}
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className="text-lg text-foreground/80 leading-relaxed mb-10 max-w-2xl font-medium"
                            variants={itemVariants}
                        >
                            {CONTENT.description}
                        </motion.p>

                        {/* Micro-tagline */}
                        <motion.p
                            className="text-sm font-semibold text-primary/80 italic mb-10"
                            variants={itemVariants}
                        >
                            {CONTENT.tagline}
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-6"
                            variants={itemVariants}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden shadow-[0_10px_20px_rgba(107,28,28,0.25)] hover:shadow-[0_20px_30px_rgba(107,28,28,0.35)] transition-all duration-300"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                                <span className="relative z-10 flex items-center gap-2.5">
                                    <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                    Download CV
                                </span>
                            </motion.button>

                            {/* Socials */}
                            <div className="flex items-center gap-4">
                                {SOCIALS.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 text-[#6B1C1C] bg-white hover:bg-primary/5 rounded-full transition-colors duration-300 shadow-sm hover:shadow-md border border-black/5 hover:border-primary/10"
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
