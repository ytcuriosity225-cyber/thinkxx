"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function CurrentProjectSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="project" ref={sectionRef} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-pink/8 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-purple/8 rounded-full blur-[120px]" />
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-brand-pink uppercase tracking-[4px] mb-4 font-heading">Current Project</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-warm">Snail Azzivone</span>
          </h2>
          <p className="text-gray-400 text-lg">A luxury skincare brand powered by Psychotech strategy</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden group"
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-pink/10 rounded-full blur-[80px] group-hover:bg-brand-pink/20 transition-all duration-700" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px] group-hover:bg-brand-purple/20 transition-all duration-700" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Brand Icon */}
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-3xl bg-linear-to-br from-brand-pink/20 to-brand-purple/20 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-500">
                <span className="text-5xl">🐌</span>
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Luxury Skincare, Powered by Psychology
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
                Snail Azzivone is where Thinkxx Agency is applying its full Psychotech arsenal — from
                consumer behavior analysis and persuasive messaging to offer psychology and conversion
                engineering. Every element of the brand experience is designed to make customers feel,
                trust, and buy.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                {["Brand Positioning", "Conversion Strategy", "Psychology-Led Copy", "Premium UX"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-xs border border-white/10 text-gray-300 bg-white/5"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://snail.azzivone.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-brand-pink to-brand-purple text-sm font-medium hover:shadow-lg hover:shadow-brand-pink/30 transition-all duration-500 hover:scale-105"
              >
                Visit snail.azzivone.com
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
