"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ContrastSplit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="contrast"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* LEFT: Traditional Rent — dark red-tinted background */}
        <motion.div
          className="relative p-8 sm:p-12 lg:p-16 flex items-center bg-navy-950"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Red ambient bleed */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.04)_0%,_transparent_70%)]" />
          <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/10 to-transparent hidden md:block" />

          <motion.div
            className="relative z-10 w-full"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-red-400/70 font-medium">Traditional Rent</span>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-none">
                  ₹1.5L<span className="text-xl text-red-400/50">/mo</span>
                </div>
                <p className="text-sm text-navy-400 mt-2">Every month. Gone.</p>
              </div>

              <div className="space-y-3 text-sm text-navy-300">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-px bg-red-500/30" />
                  <span>12 months of pure expense</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-px bg-red-500/30" />
                  <span>₹0 returned at end</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-px bg-red-500/30" />
                  <span>No asset. No equity. Nothing.</span>
                </div>
              </div>

              <div className="pt-6 border-t border-red-500/10">
                <div className="text-xs text-navy-500 uppercase tracking-wider">Net position — 3 years</div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-red-400 mt-2">−₹54,00,000</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: NWTR Way — warm gold-tinted, slightly lighter background */}
        <motion.div
          className="relative p-8 sm:p-12 lg:p-16 flex items-center bg-[#0C1825]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Gold ambient bleed */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,97,0.05)_0%,_transparent_70%)]" />

          <motion.div
            className="relative z-10 w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-gold-500" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400/80 font-medium">The NWTR Way</span>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-none">
                  ₹0<span className="text-xl text-gold-400/50">/mo</span>
                </div>
                <p className="text-sm text-gold-400/60 mt-2">Zero rent. Same home.</p>
              </div>

              <div className="space-y-3 text-sm text-navy-200">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-px bg-gold-500/40" />
                  <span>12 months of premium living</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-px bg-gold-500/40" />
                  <span>₹15,00,000 deposit returned in full</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-px bg-gold-500/40" />
                  <span>Your capital stays yours. Always.</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gold-500/15">
                <div className="text-xs text-navy-400 uppercase tracking-wider">Net position — 3 years</div>
                <div className="text-3xl sm:text-4xl font-display font-bold text-gold-400 mt-2">+₹3,69,000</div>
                <p className="text-xs text-emerald-400/70 mt-1">Deposit returned + yield earned</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom impact line — full width */}
      <motion.div
        className="bg-navy-900 py-5 text-center border-t border-navy-800"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-sm text-navy-300 px-6">
          Same property. Same neighbourhood.{" "}
          <span className="text-gold-400 font-semibold">₹57,69,000 difference over 3 years.</span>
        </p>
      </motion.div>
    </section>
  );
}
