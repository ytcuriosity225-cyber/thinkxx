"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Muhammad Mashal Hadi", role: "Founder & Brand Strategist", photo: "/team/muhammad-mashal-hadi.jpg" },
  { name: "Hussain Malik", role: "Organizer", photo: "/team/hussain-malik.jpg" },
  { name: "Abdullah Saleem", role: "Social Media Manager", photo: "/team/abdullah-saleem.jpeg" },
  { name: "Azhar Mehmood", role: "D2C Operations Handler", photo: "/team/azhar-mehmood.jpg" },
  { name: "Khadija Bibi", role: "UGC Creator & Voiceover Artist", photo: "/team/khadija-bibi.jfif" },
  { name: "Hassan Farooq", role: "WordPress & Web Developer", photo: "/team/hassan-farooq.jfif" },
  { name: "Amber Bibi", role: "React / Next.js Web Developer", photo: "/team/amber-bibi.jfif" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[80px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Team photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center flex-wrap gap-4 mb-12"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-brand-purple/30 group-hover:border-brand-purple transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-purple/30">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                <div className="glass px-3 py-1.5 rounded-lg text-xs text-center">
                  <div className="font-medium">{member.name.split(" ")[0]}</div>
                  <div className="text-gray-400 text-[10px]">{member.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Turning Human
          <br />
          <span className="gradient-text">Psychology</span> Into{" "}
          <span className="gradient-text-warm">Revenue</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Thinkxx Agency builds <strong className="text-white">psychology-driven marketing systems</strong>{" "}
          that transform attention into sales.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            href="#revenue"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-brand-purple to-brand-blue text-lg font-medium hover:shadow-2xl hover:shadow-brand-purple/30 transition-all duration-500 hover:scale-105 group"
          >
            Explore Our Strategy
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 bg-brand-purple rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
