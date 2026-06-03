"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const proofs = [
  {
    number: "7.52",
    suffix: "%",
    caption: "Weighted average yield on deposits",
    detail: "Across FDs, G-Secs, and T-Bills via our NBFC partner",
    live: true,
    accent: "emerald",
  },
  {
    number: "2.3",
    suffix: " Cr",
    prefix: "₹",
    caption: "Total deposits under management",
    detail: "Secured in ring-fenced escrow accounts with scheduled banks",
    live: false,
    accent: "white",
  },
  {
    number: "100",
    suffix: "%",
    caption: "Deposits returned to date",
    detail: "Zero defaults. Zero delays. Full principal every time.",
    live: false,
    accent: "gold",
  },
];

export function ProofNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-navy-900 overflow-hidden"
    >
      {/* Color shift — slightly warmer background to break monotony */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.03)_0%,_transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-navy-500 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          The proof
        </motion.p>

        {/* Asymmetric layout — staggered cards, not centered */}
        <div className="space-y-16 sm:space-y-20">
          {proofs.map((proof, i) => (
            <motion.div
              key={proof.caption}
              className={`flex flex-col sm:flex-row items-start gap-6 sm:gap-12 ${
                i % 2 === 1 ? "sm:flex-row-reverse sm:text-right" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Number */}
              <div className="shrink-0">
                <div className="relative inline-block">
                  <span
                    className={`font-display font-bold tabular-nums leading-none ${
                      proof.accent === "emerald" ? "text-emerald-400" :
                      proof.accent === "gold" ? "text-gold-400" : "text-white"
                    }`}
                    style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
                  >
                    {proof.prefix || ""}{proof.number}{proof.suffix}
                  </span>
                  {proof.live && (
                    <span className="absolute -top-1 -right-6 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[8px] uppercase tracking-wider text-emerald-400/70">live</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Context */}
              <div className={`max-w-sm ${i % 2 === 1 ? "sm:ml-auto" : ""}`}>
                <p className="text-lg font-serif text-navy-100 italic leading-relaxed">
                  {proof.caption}
                </p>
                <p className="mt-2 text-sm text-navy-400 leading-relaxed">
                  {proof.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
