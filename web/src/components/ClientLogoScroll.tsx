"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "GO ON TECH", src: "/logos/goontech.jpg" },
  { name: "FreelancerSkills.com", src: "/logos/freelancer-skills.jpg" },
  { name: "Aiksath.com", src: "/logos/aiksath.jpg" },
  { name: "Superior College Talagang", src: "/logos/superiorcollege.jpg" },
  { name: "Azzivone.com", src: "/logos/azzivone.jpg" },
  { name: "Snail.Azzivone.com", src: "/logos/snail-azzivone.png" },
];

// Duplicate for seamless infinite scroll
const allLogos = [...logos, ...logos, ...logos];

export default function ClientLogoScroll() {
  return (
    <section className="relative py-16 overflow-hidden border-y border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-gray/30 to-brand-dark" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <p className="text-center text-sm text-gray-500 uppercase tracking-[4px] mb-10 font-heading">
          Trusted by Growing Brands
        </p>

        {/* Scrolling strip */}
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-brand-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-brand-dark to-transparent z-10" />

          <div className="flex animate-scroll-left w-max">
            {allLogos.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="shrink-0 mx-8 flex items-center justify-center group"
                style={{ animation: `float ${3 + (i % 3)}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
              >
                <div className="glass rounded-2xl px-8 py-5 flex items-center gap-4 group-hover:border-brand-purple/30 transition-all duration-500 hover:scale-105">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center shrink-0">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium whitespace-nowrap">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
