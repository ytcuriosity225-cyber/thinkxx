"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiments = [
  {
    icon: "📝",
    title: "Poetry Pages",
    desc: "Studying how emotional language triggers deep engagement and shareability across demographics.",
    insights: ["Emotional resonance", "Shareability triggers", "Audience bonding"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "😂",
    title: "Humor Content Pages",
    desc: "Analyzing how humor disrupts scroll patterns and creates lasting brand recall.",
    insights: ["Pattern interruption", "Virality mechanics", "Recall optimization"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🔥",
    title: "Viral Content Experiments",
    desc: "Reverse-engineering viral mechanics to understand what makes content spread uncontrollably.",
    insights: ["Algorithm psychology", "Share motivation", "Content velocity"],
    color: "from-pink-500 to-orange-500",
  },
];

const learnings = [
  { icon: "👁️", label: "Audience Attention Patterns", desc: "What captures and holds human attention" },
  { icon: "⚡", label: "Engagement Triggers", desc: "Psychological cues that drive interaction" },
  { icon: "🚀", label: "Viral Content Psychology", desc: "Why people share and what makes content spread" },
];

export default function ContentLabSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/6 rounded-full blur-[150px]" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-brand-blue-light uppercase tracking-[4px] mb-4 font-heading">Research & Development</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">Content Laboratory</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We run <strong className="text-white">content experiments</strong> to study audience psychology — testing
            what makes people stop, engage, and share.
          </p>
        </motion.div>

        {/* Experiment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 group hover:scale-[1.03] transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="text-4xl mb-5">{exp.icon}</div>
              <h3 className="font-heading font-semibold text-xl mb-3">{exp.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{exp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {exp.insights.map((insight) => (
                  <span
                    key={insight}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 border border-white/5"
                  >
                    {insight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What We Learn */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-10"
        >
          <h3 className="font-heading font-semibold text-xl mb-8 text-center">
            What These Experiments Reveal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learnings.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="text-2xl shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h4 className="font-heading font-medium text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
