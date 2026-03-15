"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const concepts = [
  {
    icon: "🧠",
    title: "Consumer Behavior Analysis",
    desc: "Deep-dive into what makes your customers buy — their fears, desires, and decision triggers.",
    color: "from-purple-500/20 to-purple-900/10",
  },
  {
    icon: "💬",
    title: "Persuasive Messaging Systems",
    desc: "Craft messages that bypass resistance and speak directly to the subconscious mind.",
    color: "from-blue-500/20 to-blue-900/10",
  },
  {
    icon: "🎯",
    title: "Offer Psychology",
    desc: "Design irresistible offers using anchoring, framing, and scarcity psychology.",
    color: "from-cyan-500/20 to-cyan-900/10",
  },
  {
    icon: "🔄",
    title: "Conversion Engineering",
    desc: "Engineer every touchpoint to maximize the probability of conversion.",
    color: "from-pink-500/20 to-pink-900/10",
  },
  {
    icon: "👁️",
    title: "Brand Perception Design",
    desc: "Shape how the market perceives your brand — from commodity to premium authority.",
    color: "from-violet-500/20 to-violet-900/10",
  },
];

const pillars = [
  { label: "Psychology", icon: "🧠", desc: "The science of human decision-making" },
  { label: "Technology", icon: "⚡", desc: "Data-driven tools and automation" },
  { label: "Content Systems", icon: "📱", desc: "Scalable content that converts" },
  { label: "Behavior Analysis", icon: "📊", desc: "Understanding audience patterns" },
];

export default function PsychotechSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="psychotech" ref={sectionRef} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-brand-purple/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-brand-blue/8 rounded-full blur-[120px]" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm text-brand-cyan uppercase tracking-[4px] mb-4 font-heading">Our Philosophy</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            What is <span className="gradient-text">Psychotech</span> Marketing?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Psychotech is the fusion of <strong className="text-white">psychology</strong> and{" "}
            <strong className="text-white">technology</strong> to build marketing systems that understand,
            influence, and convert human behavior at scale.
          </p>
        </motion.div>

        {/* Four Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-500 group"
            >
              <div className="text-4xl mb-3">{pillar.icon}</div>
              <h3 className="font-heading font-semibold text-sm md:text-base mb-1 group-hover:text-brand-purple-light transition-colors">
                {pillar.label}
              </h3>
              <p className="text-xs text-gray-500">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 text-center mb-20 border-brand-purple/20"
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Thinkxx Agency focuses on <strong className="gradient-text">psychological growth systems</strong> as
            the core strategy. All other services — ads, content, design — are{" "}
            <strong className="text-white">supporting tools</strong> that serve this central philosophy.
          </p>
        </motion.div>

        {/* Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative glass rounded-2xl p-8 group hover:scale-[1.03] transition-all duration-500 overflow-hidden ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
