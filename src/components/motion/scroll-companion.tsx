"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stages = [
  { label: "The cost", color: "bg-red-400" },
  { label: "The shift", color: "bg-gold-500" },
  { label: "The flow", color: "bg-gold-500" },
  { label: "The proof", color: "bg-emerald-400" },
  { label: "Your numbers", color: "bg-gold-500" },
  { label: "Safety", color: "bg-emerald-400" },
  { label: "Enter", color: "bg-gold-500" },
];

export function ScrollCompanion() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      setVisible(scrolled > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeStage = Math.min(stages.length - 1, Math.floor(progress * stages.length));

  return (
    <motion.div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-1"
      initial={{ opacity: 0, x: -20 }}
      animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Progress line */}
      <div className="relative w-px h-48 bg-navy-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gold-500 rounded-full origin-top"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* Stage dots */}
      <div className="mt-3 flex flex-col items-center gap-2">
        {stages.map((stage, i) => (
          <div
            key={stage.label}
            className="flex items-center gap-2"
          >
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i <= activeStage ? stage.color : "bg-navy-700"
              }`}
            />
            {i === activeStage && (
              <span className="text-[9px] uppercase tracking-wider text-navy-400 whitespace-nowrap">
                {stage.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
