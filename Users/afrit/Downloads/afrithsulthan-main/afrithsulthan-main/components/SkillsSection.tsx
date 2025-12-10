"use client"

import React from "react"
import { Code2, Layers, Database, Wrench } from "lucide-react"
import { motion } from "framer-motion"

interface SkillsSectionProps {
    opacity: number
    transformY: number
}

const SKILLS = [
    {
        category: "Languages",
        icon: Code2,
        items: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"]
    },
    {
        category: "Frameworks",
        icon: Layers,
        items: ["React", "Next.js", "Node.js", "Express", "TailwindCSS"]
    },
    {
        category: "Databases",
        icon: Database,
        items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"]
    },
    {
        category: "Tools",
        icon: Wrench,
        items: ["Git", "Docker", "VS Code", "Figma", "Vercel"]
    }
]

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
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

export default function SkillsSection() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center z-20 bg-gradient-to-b from-white via-gray-50 to-white py-24">
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Section Header */}
                <motion.div
                    className="mb-20 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-6xl font-black tracking-tight text-primary mb-6"
                        variants={headerVariants}
                    >
                        Skills & Technologies
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
                        variants={headerVariants}
                    >
                        A curated stack of modern tools and technologies I use to build scalable applications.
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {SKILLS.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className={`group bg-white rounded-[2rem] p-8 border border-border/40 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary/20 hover:-translate-y-2 transition-all duration-500`}
                        >
                            {/* Icon Header */}
                            <div className="flex items-center gap-5 mb-8">
                                <div className={`w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 ease-out`}>
                                    <skill.icon className={`w-7 h-7 text-primary group-hover:text-white transition-colors duration-500`} />
                                </div>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{skill.category}</h3>
                            </div>

                            {/* Skills List */}
                            <ul className="space-y-4">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                        <span className={`w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-300`} />
                                        <span className="font-medium text-[15px]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
