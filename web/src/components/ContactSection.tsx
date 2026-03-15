"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    revenue: "",
    challenge: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const text = `Hi Thinkxx Agency!%0A%0AName: ${formData.name}%0ACompany: ${formData.company}%0AMonthly Revenue: ${formData.revenue}%0AChallenge: ${formData.challenge}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/923199706010?text=${text}`, "_blank");
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/6 rounded-full blur-[200px]" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-brand-purple uppercase tracking-[4px] mb-4 font-heading">Start Growing</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Let&apos;s Build Your{" "}
            <span className="gradient-text">Growth System</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to turn psychology into revenue?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-heading" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-purple/50 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-heading" htmlFor="contact-company">Company Name</label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-purple/50 focus:outline-none transition-colors duration-300"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-heading" htmlFor="contact-revenue">Monthly Revenue</label>
                <select
                  id="contact-revenue"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-purple/50 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-brand-dark">Select range</option>
                  <option value="Under $5K" className="bg-brand-dark">Under $5K</option>
                  <option value="$5K - $25K" className="bg-brand-dark">$5K - $25K</option>
                  <option value="$25K - $100K" className="bg-brand-dark">$25K - $100K</option>
                  <option value="$100K - $500K" className="bg-brand-dark">$100K - $500K</option>
                  <option value="$500K+" className="bg-brand-dark">$500K+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 font-heading" htmlFor="contact-challenge">Marketing Challenge</label>
                <input
                  id="contact-challenge"
                  type="text"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-purple/50 focus:outline-none transition-colors duration-300"
                  placeholder="Your biggest challenge"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2 font-heading" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-brand-purple/50 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Tell us about your brand and goals"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-8 py-4 rounded-full bg-linear-to-r from-brand-purple to-brand-blue text-base font-medium hover:shadow-2xl hover:shadow-brand-purple/30 transition-all duration-500 hover:scale-[1.02]"
              >
                Send Message
              </button>
              <a
                href="https://wa.me/923199706010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-600/20 border border-green-500/30 text-green-400 font-medium hover:bg-green-600/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              📞 +92 319 970 6010
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
