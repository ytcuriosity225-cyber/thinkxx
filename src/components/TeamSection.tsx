"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Muhammad Mashal Hadi",
    role: "Founder & Brand Strategist",
    detail: "Psychotech Entrepreneur & D2C Owner",
    photo: "/team/muhammad-mashal-hadi.jpg",
  },
  {
    name: "Hussain Malik",
    role: "Organizer",
    detail: "Operations & Coordination",
    photo: "/team/hussain-malik.jpg",
  },
  {
    name: "Abdullah Saleem",
    role: "Social Media Manager",
    detail: "Content & Engagement Strategy",
    photo: "/team/abdullah-saleem.jpeg",
  },
  {
    name: "Azhar Mehmood",
    role: "D2C Operations Handler",
    detail: "Co-Founder, Luxury Skincare Brand",
    photo: "/team/azhar-mehmood.jpg",
  },
  {
    name: "Khadija Bibi",
    role: "UGC Creator & Voiceover Artist",
    detail: "User-Generated Content Specialist",
    photo: "/team/khadija-bibi.jpg",
  },
  {
    name: "Hassan Farooq",
    role: "WordPress & Web Developer",
    detail: "CMS & Web Solutions",
    photo: "/team/hassan-farooq.jpg",
  },
  {
    name: "Amber Bibi",
    role: "React / Next.js Web Developer",
    detail: "Frontend Engineering",
    photo: "/team/amber-bibi.jpg",
  },
];

const additionalRoles = [
  "Video Editors",
  "Content Creators",
  "Graphic Designers",
  "Developers",
  "Copywriters",
  "SEO Specialists",
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="team" ref={sectionRef} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-purple/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-[120px]" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-brand-purple uppercase tracking-[4px] mb-4 font-heading">The Brain Trust</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Active Team Members</span>
          </h2>
          <p className="text-gray-400 text-lg">The minds behind your growth systems</p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`glass rounded-2xl p-6 text-center group hover:border-brand-purple/30 transition-all duration-500 hover:scale-[1.05] ${
                i === 0 ? "sm:col-span-1 lg:col-span-1 ring-1 ring-brand-purple/20" : ""
              }`}
            >
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-brand-purple/50 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-brand-purple/20">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-1 group-hover:text-brand-purple-light transition-colors">
                {member.name}
              </h3>
              <p className="text-xs text-brand-purple-light/80 mb-1">{member.role}</p>
              <p className="text-[10px] text-gray-500">{member.detail}</p>
              {i === 0 && (
                <div className="mt-3">
                  <span className="px-2 py-0.5 rounded-full text-[9px] bg-brand-purple/20 text-brand-purple-light border border-brand-purple/20">
                    Founder
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Specialists */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-10 text-center"
        >
          <h3 className="font-heading font-semibold text-xl mb-4">
            Plus a Network of Specialists
          </h3>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            Depending on project requirements, we activate additional specialists from our extended
            network to deliver exactly what your brand needs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalRoles.map((role) => (
              <span
                key={role}
                className="px-5 py-2 rounded-full text-sm border border-white/10 text-gray-300 bg-white/5 hover:border-brand-purple/30 transition-colors duration-300"
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
