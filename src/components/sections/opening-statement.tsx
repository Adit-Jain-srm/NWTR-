"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
      {/* Background: Deep navy with warm red-gold gradient bleed — creates urgency */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(220,38,38,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(201,169,97,0.08)_0%,_transparent_50%)]" />

      {/* Pulsing warn-glow behind the number — subconscious alarm */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-red-500/[0.04] blur-[120px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content — LEFT aligned for asymmetry */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Pre-label — creates context before the number hits */}
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-red-400/70 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="text-navy-600 mr-2">{"//00"}</span>
            If you&apos;re renting in Bangalore
          </motion.p>

          {/* THE NUMBER */}
          <div className="relative">
            <motion.div
              className="font-display font-bold tabular-nums leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-red-400/90">{formatIndianCurrency(count)}</span>
            </motion.div>

            {/* Strike-through that appears on reveal — "we kill this number" */}
            <motion.div
              className="absolute top-1/2 left-0 h-[3px] bg-gold-500 origin-left"
              initial={{ scaleX: 0 }}
              animate={phase !== "counting" ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: "60%" }}
            />
          </div>

          {/* The confrontation copy */}
          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={phase !== "counting" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed">
              Gone in 3 years of rent.
            </p>
            <p className="text-xl sm:text-2xl text-gold-400 font-medium mt-1">
              Unless you keep it.
            </p>
          </motion.div>

          {/* Two clear paths — immediately actionable */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={phase === "complete" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 font-semibold px-6 py-3 rounded-lg hover:bg-gold-400 transition-colors text-sm"
            >
              Calculate your savings
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
            >
              See how it works
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right side: floating data card — uses the dead space */}
      <motion.div
        className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 40 }}
        animate={phase === "complete" ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="w-64 border border-navy-800 bg-navy-900/50 backdrop-blur-sm p-6">
          <div className="text-[9px] uppercase tracking-[0.2em] text-navy-500 mb-4">Live snapshot</div>
          <div className="space-y-4">
            <div>
              <div className="text-xs text-navy-400">Current yield</div>
              <div className="text-lg font-display font-bold text-emerald-400">7.52%</div>
            </div>
            <div className="h-px bg-navy-800" />
            <div>
              <div className="text-xs text-navy-400">Deposits secured</div>
              <div className="text-lg font-display font-bold text-white">₹2.3 Cr</div>
            </div>
            <div className="h-px bg-navy-800" />
            <div>
              <div className="text-xs text-navy-400">Return rate</div>
              <div className="text-lg font-display font-bold text-gold-400">100%</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll companion indicator */}
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
