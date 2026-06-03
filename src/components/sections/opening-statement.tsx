"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedMeshGradient } from "@/components/motion/animated-mesh-gradient";
import { FloatingGeometry } from "@/components/motion/floating-geometry";

function formatIndianCurrency(value: number): string {
  const rounded = Math.round(value);
  const str = rounded.toString();
  if (str.length <= 3) return "₹" + str;
  const last3 = str.slice(-3);
  const rest = str.slice(0, -3);
  const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return "₹" + formatted + "," + last3;
}

export function OpeningStatement() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"counting" | "reveal" | "complete">("counting");
  const hasStarted = useRef(false);
  const target = 5400000;

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const startDelay = setTimeout(() => {
      const duration = 2800;
      const startTime = performance.now();

      function animate(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 5);
        setCount(target * eased);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
          setPhase("reveal");
          setTimeout(() => setPhase("complete"), 600);
        }
      }
      requestAnimationFrame(animate);
    }, 600);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Living background — animated mesh gradient (Hashgraph-style) */}
      <div className="absolute inset-0 bg-navy-950" />
      <AnimatedMeshGradient />

      {/* Floating geometric shapes (Reventador-style) */}
      <FloatingGeometry />

      {/* Dot grid pattern — adds texture to the background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(201,169,97,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content — LEFT aligned (Hashgraph-style asymmetry) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-24">
          {/* Main content — takes 7 cols */}
          <div className="lg:col-span-7">
            {/* Section number */}
            <motion.p
              className="text-[10px] uppercase tracking-[0.3em] text-navy-600 mb-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {"//00"} — The cost of renting
            </motion.p>

            {/* THE NUMBER — red, massive, confrontational */}
            <div className="relative">
              <motion.div
                className="font-display font-bold tabular-nums leading-[0.85]"
                style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-red-400/90">{formatIndianCurrency(count)}</span>
              </motion.div>

              {/* Gold strike-through on reveal */}
              <motion.div
                className="absolute top-1/2 left-0 h-[3px] bg-gold-500 origin-left"
                initial={{ scaleX: 0 }}
                animate={phase !== "counting" ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: "70%" }}
              />
            </div>

            {/* Copy */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={phase !== "counting" ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light leading-snug">
                Gone in 3 years of rent.
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gold-400 font-medium mt-2">
                Unless you keep it.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={phase === "complete" ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#calculator"
                className="group inline-flex items-center gap-2 bg-gold-500 text-navy-950 font-semibold px-6 py-3.5 rounded-lg hover:bg-gold-400 transition-all text-sm shadow-[0_0_30px_rgba(201,169,97,0.2)] hover:shadow-[0_0_40px_rgba(201,169,97,0.35)]"
              >
                Calculate your savings
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors border border-navy-700 hover:border-navy-500 px-5 py-3 rounded-lg"
              >
                How it works
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right side — live data panel + visual element (5 cols) */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={phase === "complete" ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Glow behind panel */}
              <div className="absolute -inset-8 bg-gold-500/[0.03] blur-[60px] rounded-full" />

              {/* Dashboard preview mockup — shows real product (Reventador-style) */}
              <div className="relative border border-navy-700/50 bg-navy-900/60 backdrop-blur-sm rounded-lg overflow-hidden">
                {/* Fake window chrome */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-navy-800/50">
                  <div className="w-2 h-2 rounded-full bg-red-500/40" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/40" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                  <span className="ml-3 text-[9px] text-navy-500">nwtr.in/dashboard</span>
                </div>

                {/* Dashboard content preview */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] text-navy-500 uppercase tracking-wider">Deposit Status</div>
                      <div className="text-sm font-display font-bold text-white mt-0.5">Active — 287 days left</div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <div className="h-px bg-navy-800" />

                  {/* Mini stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-navy-800/40 rounded p-3">
                      <div className="text-[9px] text-navy-500">Your Deposit</div>
                      <div className="text-sm font-display font-bold text-gold-400 mt-1">₹84,00,000</div>
                    </div>
                    <div className="bg-navy-800/40 rounded p-3">
                      <div className="text-[9px] text-navy-500">Monthly Rent</div>
                      <div className="text-sm font-display font-bold text-emerald-400 mt-1">₹0</div>
                    </div>
                    <div className="bg-navy-800/40 rounded p-3">
                      <div className="text-[9px] text-navy-500">Total Saved</div>
                      <div className="text-sm font-display font-bold text-white mt-1">₹4,50,000</div>
                    </div>
                    <div className="bg-navy-800/40 rounded p-3">
                      <div className="text-[9px] text-navy-500">Current Yield</div>
                      <div className="text-sm font-display font-bold text-emerald-400 mt-1">7.52%</div>
                    </div>
                  </div>

                  {/* Mini progress bar */}
                  <div>
                    <div className="flex justify-between text-[9px] text-navy-500 mb-1">
                      <span>Tenure Progress</span>
                      <span>78/365 days</span>
                    </div>
                    <div className="h-1.5 bg-navy-800 rounded-full overflow-hidden">
                      <div className="h-full w-[21%] bg-gradient-to-r from-gold-600 to-gold-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tag */}
              <motion.div
                className="absolute -bottom-3 -left-3 bg-navy-800 border border-navy-700 rounded px-2.5 py-1.5 text-[9px] text-navy-300"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Live preview
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator — left aligned (Hashgraph-style) */}
      <motion.div
        className="absolute bottom-8 left-6 sm:left-8 lg:left-12"
        initial={{ opacity: 0 }}
        animate={phase === "complete" ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex items-center gap-3 text-navy-500"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-gold-500/50 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
