"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export function SoundToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio("/audio/ambient.mp3");
      audio.loop = true;
      audio.volume = 0.15;
      audioRef.current = audio;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [playing]);

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-navy-900/80 backdrop-blur-sm border border-navy-700 hover:border-gold-500/30 rounded-full px-3 py-2 transition-colors group"
      aria-label={playing ? "Mute sound" : "Enable sound"}
    >
      {/* Sound bars animation */}
      <div className="flex items-end gap-[2px] h-3">
        {[1, 2, 3, 4].map((bar) => (
          <motion.div
            key={bar}
            className="w-[2px] bg-gold-400 rounded-full origin-bottom"
            animate={playing ? {
              scaleY: [0.3, 1, 0.5, 0.8, 0.3],
            } : { scaleY: 0.3 }}
            transition={playing ? {
              duration: 0.8 + bar * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            } : { duration: 0.2 }}
            style={{ height: "12px" }}
          />
        ))}
      </div>

      <span className="text-[9px] uppercase tracking-wider text-navy-400 group-hover:text-white transition-colors">
        {playing ? "On" : "Off"}
      </span>
    </button>
  );
}
