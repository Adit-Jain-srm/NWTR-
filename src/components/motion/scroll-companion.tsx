"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playClickSound } from "@/lib/sounds";

const stages = [
  { label: "The cost", id: "opening", color: "bg-red-400", hoverColor: "hover:bg-red-400" },
  { label: "The shift", id: "contrast", color: "bg-gold-500", hoverColor: "hover:bg-gold-500" },
  { label: "The flow", id: "how", color: "bg-gold-500", hoverColor: "hover:bg-gold-500" },
  { label: "The proof", id: "proof", color: "bg-emerald-400", hoverColor: "hover:bg-emerald-400" },
  { label: "Your numbers", id: "calculator", color: "bg-gold-500", hoverColor: "hover:bg-gold-500" },
  { label: "Properties", id: "properties", color: "bg-blue-400", hoverColor: "hover:bg-blue-400" },
  { label: "Safety", id: "security", color: "bg-emerald-400", hoverColor: "hover:bg-emerald-400" },
  { label: "Enter", id: "close", color: "bg-gold-500", hoverColor: "hover:bg-gold-500" },
];

export function ScrollCompanion() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      setVisible(scrolled > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateTo = useCallback((id: string, index: number) => {
    playClickSound();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const targetScroll = (index / (stages.length - 1)) * total;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  }, []);

  const activeStage = Math.min(stages.length - 1, Math.floor(progress * stages.length));

  return (
    <motion.nav
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-start"
      initial={{ opacity: 0, x: -20 }}
      animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Page navigation"
    >
      <div className="relative flex flex-col items-center">
        {/* Vertical track */}
        <div className="absolute left-[5px] top-0 bottom-0 w-px bg-navy-800" />
        {/* Active fill */}
        <div
          className="absolute left-[5px] top-0 w-px bg-gold-500 transition-all duration-300 ease-out origin-top"
          style={{ height: `${progress * 100}%` }}
        />

        {/* Interactive dots */}
        <div className="relative flex flex-col gap-6">
          {stages.map((stage, i) => {
            const isActive = i <= activeStage;
            const isCurrent = i === activeStage;
            const isHovered = hoveredStage === i;

            return (
              <button
                key={stage.id}
                onClick={() => navigateTo(stage.id, i)}
                onMouseEnter={() => setHoveredStage(i)}
                onMouseLeave={() => setHoveredStage(null)}
                className="relative flex items-center gap-3 group cursor-pointer"
                aria-label={`Navigate to ${stage.label}`}
              >
                {/* Dot */}
                <motion.div
                  className={`relative z-10 rounded-full transition-all duration-300 ${
                    isActive ? stage.color : "bg-navy-700"
                  } ${!isActive ? stage.hoverColor : ""}`}
                  animate={{
                    width: isCurrent || isHovered ? 10 : 6,
                    height: isCurrent || isHovered ? 10 : 6,
                  }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Pulse ring on current */}
                {isCurrent && (
                  <motion.div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-full ${stage.color} opacity-30`}
                    animate={{ width: [10, 18, 10], height: [10, 18, 10], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                {/* Label — shows on hover or current */}
                <AnimatePresence>
                  {(isCurrent || isHovered) && (
                    <motion.span
                      className="text-[10px] uppercase tracking-wider whitespace-nowrap"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.15 }}
                      style={{ color: isHovered && !isCurrent ? "rgba(255,255,255,0.6)" : undefined }}
                    >
                      <span className={isCurrent ? "text-white font-medium" : "text-navy-400"}>
                        {stage.label}
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
