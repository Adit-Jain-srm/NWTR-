"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";

const stats = [
  { value: 30000, suffix: "+ Cr", label: "Addressable Market", prefix: "₹", icon: "market" },
  { value: 7.5, suffix: "%", label: "Average Yield", decimals: 1, icon: "yield" },
  { value: 100, suffix: "%", label: "Deposit Returned", icon: "return" },
  { value: 0, suffix: "", label: "Monthly Rent", prefix: "₹", icon: "zero" },
];

function AnimatedNumber({ value, suffix = "", prefix = "", decimals = 0, inView }: {
  value: number; suffix?: string; prefix?: string; decimals?: number; inView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(value * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span>
      {prefix}{decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue)}{suffix}
    </span>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,169,97,0.06)_0%,_transparent_60%)]" />

      {/* Separator lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <Container className="relative z-10">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glow behind number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gold-500/5 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix || ""}
                    decimals={stat.decimals ?? 0}
                    inView={isInView}
                  />
                </div>
                <div className="mt-3 text-sm text-navy-400 font-medium">{stat.label}</div>
              </div>

              {/* Decorative separator (not on last item) */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-navy-700 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
