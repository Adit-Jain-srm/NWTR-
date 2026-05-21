"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollPinSectionProps {
  children: (progress: number) => React.ReactNode;
  className?: string;
  height?: string;
}

export function ScrollPinSection({
  children,
  className,
  height = "500vh",
}: ScrollPinSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;

    function onScroll() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const totalScroll = container.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const p = Math.max(0, Math.min(1, scrolled / totalScroll));
        setProgress(p);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", className)} style={{ height }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {children(progress)}
      </div>
    </div>
  );
}
