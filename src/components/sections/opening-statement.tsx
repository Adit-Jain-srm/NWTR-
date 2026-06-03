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
  const [complete, setComplete] = useState(false);
  const hasStarted = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  const target = 5400000; // ₹54,00,000 — 3 years of ₹1.5L/mo rent

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const duration = 3500;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quartic — fast start, slow finish for drama
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(target * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
        setComplete(true);
      }
    }

    // Delay start slightly after preloader
    const timer = setTimeout(() => requestAnimationFrame(animate), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-navy-950 overflow-hidden px-6"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/[0.03] blur-[150px]" />

      <div className="relative z-10 text-center max-w-4xl">
        {/* The number — the entire spectacle */}
        <div
          className="font-display font-bold text-gold-400 tabular-nums leading-none"
          style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
        >
          {formatIndianCurrency(count)}
        </div>

        {/* The confrontation line */}
        <motion.div
          className="mt-8 relative"
          initial={{ opacity: 0 }}
          animate={complete ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg sm:text-xl text-navy-200 font-light leading-relaxed max-w-xl mx-auto">
            This is what you&apos;ll burn on rent in the next 3 years.
            <br />
            <span className="text-white font-medium">We&apos;ll show you how to keep it.</span>
          </p>

          {/* Gold underline draw */}
          <motion.div
            className="mt-6 mx-auto h-px bg-gold-500"
            initial={{ width: 0 }}
            animate={complete ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Scroll prompt */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={complete ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.a
            href="#contrast"
            className="inline-flex flex-col items-center gap-2 text-navy-400 hover:text-gold-400 transition-colors"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-[0.25em]">See how</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
