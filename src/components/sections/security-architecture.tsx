"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function SecurityArchitecture() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-800 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-navy-500 mb-3"><span className="text-navy-600 mr-2">{"//05"}</span> Security architecture</p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Even if NWTR disappears, your money is yours.
          </h2>
          <p className="mt-4 text-navy-300 text-base leading-relaxed max-w-xl">
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
          <div className="border border-gold-500/20 relative">
            {/* Top section: Your money */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-gold-500" />
                <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
                  Your money — Ring-fenced escrow
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-navy-700 p-5">
                  <div className="text-[10px] uppercase tracking-wider text-navy-500 mb-2">Account Layer</div>
                  <div className="text-sm text-white font-medium">Scheduled Bank</div>
                  <div className="text-xs text-navy-400 mt-1">Segregated escrow account</div>
                  <div className="text-xs text-navy-500 mt-3">RBI-regulated deposit insurance</div>
                </div>

                <div className="border border-navy-700 p-5">
                  <div className="text-[10px] uppercase tracking-wider text-navy-500 mb-2">Investment Layer</div>
                  <div className="text-sm text-white font-medium">SEBI-registered Instruments</div>
                  <div className="text-xs text-navy-400 mt-1">FDs · G-Secs · T-Bills · AAA bonds</div>
                  <div className="text-xs text-navy-500 mt-3">Sovereign + bank-guaranteed</div>
                </div>
              </div>

              {/* Key guarantee */}
              <div className="mt-6 flex items-start gap-3 py-3 border-t border-navy-800">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" className="mt-0.5 shrink-0">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p className="text-xs text-navy-300 leading-relaxed">
                  Legal ownership remains with you throughout the term.
                  NWTR cannot access, redirect, or pledge your deposit for any purpose.
                </p>
              </div>
            </div>

            {/* Separator — the wall between your money and NWTR */}
            <div className="border-t border-navy-700 relative">
              <div className="absolute left-6 sm:left-8 -top-2.5 bg-navy-950 px-2">
                <span className="text-[9px] uppercase tracking-wider text-navy-500">
                  Legal separation
                </span>
              </div>
            </div>

            {/* Bottom section: NWTR operations */}
            <div className="p-6 sm:p-8 bg-navy-900/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-navy-500" />
                <span className="text-xs uppercase tracking-[0.2em] text-navy-400 font-medium">
                  NWTR operations — Completely separate
                </span>
              </div>
              <p className="text-xs text-navy-500 leading-relaxed">
                Platform fees, salaries, and operational costs are funded from NWTR&apos;s own capital
                and the yield spread — never from tenant deposits.
              </p>
            </div>
          </div>

          {/* Regulatory badges */}
          <div className="mt-8 flex flex-wrap items-center gap-4 justify-center">
            {["RBI Compliant", "SEBI Registered", "RERA Covered", "DPDP Act 2023"].map((badge) => (
              <span key={badge} className="text-[10px] uppercase tracking-wider text-navy-500 border border-navy-800 px-3 py-1.5">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
