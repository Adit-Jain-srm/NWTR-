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
  },
  {
    number: "2.3",
    suffix: " Cr",
    prefix: "₹",
    caption: "Total deposits under management",
    detail: "Secured in ring-fenced escrow accounts with scheduled banks",
    live: false,
  },
  {
    number: "100",
    suffix: "%",
    caption: "Deposits returned to date",
    detail: "Zero defaults. Zero delays. Full principal every time.",
    live: false,
  },
];

export function ProofNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 bg-navy-950"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-800 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          className="text-center text-xs uppercase tracking-[0.3em] text-navy-500 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          The proof
        </motion.p>

        <div className="space-y-24 sm:space-y-32">
          {proofs.map((proof, i) => (
            <motion.div
              key={proof.caption}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* The number */}
              <div className="relative inline-block">
                <span
                  className="font-display font-bold text-white tabular-nums"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                >
                  {proof.prefix || ""}{proof.number}{proof.suffix}
                </span>
                {proof.live && (
                  <span className="absolute -top-2 -right-8 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] uppercase tracking-wider text-emerald-400/70">live</span>
                  </span>
                )}
              </div>

              {/* Caption */}
              <p className="mt-4 text-base sm:text-lg font-serif text-navy-200 italic">
                {proof.caption}
              </p>
              <p className="mt-2 text-sm text-navy-400">
                {proof.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
