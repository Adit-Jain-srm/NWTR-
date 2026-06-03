"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  once?: boolean;
}

export function AnimatedCounter({ target, duration = 2000, prefix = "", suffix = "", decimals = 0, className, once = true }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || (once && hasAnimated.current)) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [isInView, target, duration, once]);

  return (
    <span ref={ref} className={cn("tabular-nums font-display", className)}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}
