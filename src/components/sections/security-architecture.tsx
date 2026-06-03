"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function SecurityArchitecture() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      {/* Subtle emerald glow for trust */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/[0.02] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-navy-300 mb-3">
            <span className="text-navy-400 mr-2">{"//05"}</span> Security architecture
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Even if NWTR disappears, your money is yours.
          </h2>
          <p className="mt-4 text-navy-200 text-base leading-relaxed max-w-xl">
            Your deposit never touches NWTR&apos;s operating accounts.
            It sits in a ring-fenced escrow that only you can ultimately claim.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="border border-gold-500/30 rounded-lg overflow-hidden relative">
            {/* Top section: Your money */}
            <div className="p-6 sm:p-8 bg-navy-900/40">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(201,169,97,0.4)]" />
                <span className="text-sm uppercase tracking-[0.15em] text-gold-400 font-semibold">
                  Your money — Ring-fenced escrow
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-navy-600/50 bg-navy-800/30 rounded-lg p-5">
                  <div className="text-[10px] uppercase tracking-wider text-gold-400/70 font-medium mb-2">Account Layer</div>
                  <div className="text-base text-white font-semibold">Scheduled Bank</div>
                  <div className="text-sm text-navy-200 mt-1.5">Segregated escrow account</div>
                  <div className="text-xs text-emerald-400/80 mt-3 flex items-center gap-1.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                    RBI-regulated deposit insurance
                  </div>
                </div>

                <div className="border border-navy-600/50 bg-navy-800/30 rounded-lg p-5">
                  <div className="text-[10px] uppercase tracking-wider text-gold-400/70 font-medium mb-2">Investment Layer</div>
                  <div className="text-base text-white font-semibold">SEBI-registered Instruments</div>
                  <div className="text-sm text-navy-200 mt-1.5">FDs · G-Secs · T-Bills · AAA bonds</div>
                  <div className="text-xs text-emerald-400/80 mt-3 flex items-center gap-1.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                    Sovereign + bank-guaranteed
                  </div>
                </div>
              </div>

              {/* Key guarantee */}
              <div className="mt-6 flex items-start gap-3 py-4 border-t border-navy-700/50">
                <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Legal ownership remains with you throughout the term.
                  <span className="text-gold-300"> NWTR cannot access, redirect, or pledge your deposit for any purpose.</span>
                </p>
              </div>
            </div>

            {/* Separator — visual wall */}
            <div className="relative border-t-2 border-dashed border-red-500/20 bg-gradient-to-r from-transparent via-red-500/5 to-transparent">
              <div className="absolute left-6 sm:left-8 -top-3 bg-navy-950 px-3 py-0.5 rounded-full border border-navy-700">
                <span className="text-[10px] uppercase tracking-wider text-red-400/80 font-medium">
                  Legal separation
                </span>
              </div>
            </div>

            {/* Bottom section: NWTR operations */}
            <div className="p-6 sm:p-8 bg-navy-900/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-navy-400" />
                <span className="text-sm uppercase tracking-[0.15em] text-navy-300 font-medium">
                  NWTR operations — Completely separate
                </span>
              </div>
              <p className="text-sm text-navy-300 leading-relaxed">
                Platform fees, salaries, and operational costs are funded from NWTR&apos;s own capital
                and the yield spread — <span className="text-white font-medium">never from tenant deposits.</span>
              </p>
            </div>
          </div>

          {/* Regulatory badges — visible, with proper contrast */}
          <div className="mt-10 flex flex-wrap items-center gap-3 justify-center">
            {[
              { label: "RBI Compliant", color: "border-emerald-500/30 text-emerald-300" },
              { label: "SEBI Registered", color: "border-emerald-500/30 text-emerald-300" },
              { label: "RERA Covered", color: "border-gold-500/30 text-gold-300" },
              { label: "DPDP Act 2023", color: "border-blue-500/30 text-blue-300" },
            ].map((badge) => (
              <span
                key={badge.label}
                className={`text-[10px] uppercase tracking-wider font-medium border rounded-full px-4 py-2 ${badge.color} bg-white/[0.02]`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
