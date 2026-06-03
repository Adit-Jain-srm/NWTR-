"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ContrastSplit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  return (
    <section
      id="contrast"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,97,0.02)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="text-center text-xs uppercase tracking-[0.3em] text-navy-500 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          The comparison
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left: Traditional Rent (the pain) */}
          <motion.div
            className="relative p-8 sm:p-12 border-b md:border-b-0 md:border-r border-navy-800"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-8 sm:top-12 right-8 sm:right-12 w-2 h-2 rounded-full bg-red-500/60" />
            <h3 className="text-xs uppercase tracking-[0.2em] text-red-400/80 font-medium">
              Traditional Rent
            </h3>

            <div className="mt-8 space-y-6">
              <div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-white">
                  ₹1,50,000<span className="text-lg text-navy-400">/mo</span>
                </div>
                <p className="text-sm text-navy-400 mt-1">Monthly rent payment</p>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-white">₹0</div>
                <p className="text-sm text-navy-400 mt-1">Returned at end of lease</p>
              </div>

              <div className="pt-4 border-t border-navy-800">
                <div className="text-sm text-navy-400">Net position after 12 months</div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-red-400 mt-1">
                  −₹18,00,000
                </div>
                <p className="text-xs text-red-400/60 mt-2">Money gone. Permanently.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: The NWTR Way (the revelation) */}
          <motion.div
            className="relative p-8 sm:p-12"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-8 sm:top-12 right-8 sm:right-12 w-2 h-2 rounded-full bg-gold-500" />
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold-400/80 font-medium">
              The NWTR Way
            </h3>

            <div className="mt-8 space-y-6">
              <div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-white">
                  ₹0<span className="text-lg text-navy-400">/mo</span>
                </div>
                <p className="text-sm text-navy-400 mt-1">Monthly rent payment</p>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-white">₹15,00,000</div>
                <p className="text-sm text-navy-400 mt-1">Full deposit returned</p>
              </div>

              <div className="pt-4 border-t border-gold-500/20">
                <div className="text-sm text-navy-400">Net position after 12 months</div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-gold-400 mt-1">
                  +₹1,23,000
                </div>
                <p className="text-xs text-gold-400/60 mt-2">Money returned. Plus earnings.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom summary line */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-sm text-navy-300">
            Same home. Same lifestyle. <span className="text-gold-400 font-medium">₹19,23,000 difference.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
