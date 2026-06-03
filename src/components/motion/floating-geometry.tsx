"use client";

import { motion } from "framer-motion";

export function FloatingGeometry() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large rotating diamond */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-32 h-32 border border-gold-500/[0.06] rotate-45"
        animate={{ rotate: [45, 405], y: [0, -20, 0] }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      />

      {/* Small circle */}
      <motion.div
        className="absolute top-[60%] left-[8%] w-4 h-4 rounded-full bg-gold-500/10"
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Medium ring */}
      <motion.div
        className="absolute bottom-[20%] right-[20%] w-20 h-20 rounded-full border border-emerald-500/[0.05]"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Horizontal line */}
      <motion.div
        className="absolute top-[40%] left-[5%] w-24 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent"
        animate={{ x: [0, 50, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cross/plus shape */}
      <motion.div
        className="absolute top-[75%] right-[35%]"
        animate={{ rotate: [0, 90, 180], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-px bg-gold-500/10 absolute top-1/2 left-0" />
        <div className="w-px h-6 bg-gold-500/10 absolute left-1/2 top-0" />
      </motion.div>

      {/* Dot grid (3x3) */}
      <div className="absolute bottom-[30%] left-[15%] grid grid-cols-3 gap-3 opacity-20">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full bg-gold-500"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
