"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const points = [
  { x: 0, y: 85 },
  { x: 12, y: 80 },
  { x: 24, y: 75 },
  { x: 36, y: 65 },
  { x: 48, y: 55 },
  { x: 60, y: 40 },
  { x: 72, y: 28 },
  { x: 84, y: 15 },
  { x: 96, y: 5 },
  { x: 100, y: 2 },
];

const pathD = `M ${points.map((p) => `${p.x} ${p.y}`).join(" L ")}`;
const areaD = `${pathD} L 100 100 L 0 100 Z`;

const strategies = [
  { icon: "🧠", title: "Understanding Customer Behavior", desc: "Deep psychological profiling of your ideal customers" },
  { icon: "💎", title: "Designing Persuasive Offers", desc: "Offers engineered to trigger buying psychology" },
  { icon: "👁️", title: "Optimizing Brand Perception", desc: "Positioning your brand as the premium choice" },
  { icon: "⚙️", title: "Building Growth Systems", desc: "Scalable systems that compound revenue over time" },
];

export default function RevenueGrowthSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="revenue" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px]" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-brand-purple uppercase tracking-[4px] mb-4 font-heading">Revenue Strategy</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            Revenue Growth Is Not Luck.
            <br />
            <span className="gradient-text">It&apos;s Psychology.</span>
          </h2>
        </motion.div>

        {/* Animated Graph */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-400 text-sm">Revenue Growth</p>
              <p className="text-2xl font-heading font-bold gradient-text">+340%</p>
            </div>
            <div className="flex gap-2">
              {["6M", "1Y", "2Y"].map((label) => (
                <span
                  key={label}
                  className="px-3 py-1 rounded-full text-xs border border-white/10 text-gray-400 hover:border-brand-purple/40 cursor-pointer transition-colors"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <svg viewBox="0 0 100 100" className="w-full h-64 md:h-80" preserveAspectRatio="none">
            {/* Grid lines */}
            {[20, 40, 60, 80].map((y) => (
              <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />
            ))}
            {/* Gradient fill */}
            <defs>
              <linearGradient id="graphGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            {inView && (
              <>
                <motion.path
                  d={areaD}
                  fill="url(#graphGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
                {/* Glow dot at end */}
                <motion.circle
                  cx="100"
                  cy="2"
                  r="1.5"
                  fill="#8b5cf6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                />
                <motion.circle
                  cx="100"
                  cy="2"
                  r="3"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="0.3"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.5, 0], scale: [0.5, 2, 3] }}
                  transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
                />
              </>
            )}
          </svg>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Before Thinkxx</span>
            <span>After Psychology Systems</span>
          </div>
        </motion.div>

        {/* Strategy points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 hover:border-brand-purple/30 transition-all duration-500 group hover:scale-[1.02]"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-brand-purple-light transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
