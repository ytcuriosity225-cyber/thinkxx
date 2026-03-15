"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-brand-purple to-brand-blue flex items-center justify-center font-heading font-bold text-sm">
              TX
            </div>
            <span className="font-heading font-semibold text-sm">
              Thinkxx Agency<span className="text-brand-purple">.</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-gray-500 text-center">
            Psychotech Marketing — Where Psychology Meets Revenue
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Thinkxx Agency. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
