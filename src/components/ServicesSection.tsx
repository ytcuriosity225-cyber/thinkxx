"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🎯",
    title: "Brand Strategy",
    desc: "Position your brand as the dominant force in your market using psychological frameworks.",
  },
  {
    icon: "🧠",
    title: "Sales Psychology Consulting",
    desc: "Unlock hidden revenue by understanding and leveraging the psychology of buying decisions.",
  },
  {
    icon: "📈",
    title: "Meta Ads Growth Systems",
    desc: "Psychology-optimized ad campaigns that turn ad spend into predictable revenue.",
  },
  {
    icon: "🔄",
    title: "Conversion Optimization",
    desc: "Eliminate friction and engineer every step of your funnel for maximum conversions.",
  },
  {
    icon: "💎",
    title: "Offer Strategy",
    desc: "Create offers so compelling they feel irrational to refuse — using anchoring and framing.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "Build a social presence that attracts, engages, and converts your ideal customers.",
  },
  {
    icon: "🎨",
    title: "Social Media Creatives & Content",
    desc: "Visual content designed to stop the scroll and trigger engagement and desire.",
  },
  {
    icon: "📞",
    title: "Sales Calls & Customer Service",
    desc: "Train your team with psychology-backed scripts that close more deals with confidence.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="services" ref={sectionRef} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-purple/8 rounded-full blur-[150px]" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="text-sm text-brand-purple uppercase tracking-[4px] mb-4 font-heading">What We Deliver</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Services — <span className="gradient-text">By-Products</span> of Strategy
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-16">
            Our services aren&apos;t standalone products. They&apos;re{" "}
            <strong className="text-white">by-products of the core Psychotech strategy</strong> — each one
            designed to serve the central goal of revenue growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 group hover:border-brand-purple/30 transition-all duration-500 hover:scale-[1.03] cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-brand-purple/20 to-brand-blue/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="font-heading font-semibold text-base mb-3 group-hover:text-brand-purple-light transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.desc}
              </p>
              {/* Hover line */}
              <div className="mt-5 h-0.5 w-0 bg-linear-to-r from-brand-purple to-brand-blue group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
