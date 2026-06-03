"use client";

import { useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SplitTextRevealProps {
  children: string;
  className?: string;
  splitType?: "chars" | "words" | "lines";
  staggerAmount?: number;
  duration?: number;
  delay?: number;
  trigger?: "mount" | "inView";
  threshold?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  once?: boolean;
}

export function SplitTextReveal({
  children,
  className,
  splitType = "chars",
  staggerAmount = 0.03,
  duration = 0.8,
  delay = 0,
  trigger = "inView",
  threshold = 0.2,
  tag: Tag = "h1",
  once = true,
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(async () => {
    if (hasAnimated.current && once) return;
    hasAnimated.current = true;

    const gsapModule = await import("gsap");
    const gsap = gsapModule.default;

    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".split-unit");
    gsap.fromTo(
      elements,
      {
        y: "110%",
        opacity: 0,
        rotateX: -80,
      },
      {
        y: "0%",
        opacity: 1,
        rotateX: 0,
        duration,
        stagger: staggerAmount,
        delay,
        ease: "power4.out",
      }
    );
  }, [duration, staggerAmount, delay, once]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (trigger === "mount") {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          if (once) observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [trigger, threshold, animate, once]);

  const splitContent = () => {
    if (splitType === "words") {
      return children.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <span className="split-unit inline-block will-change-transform opacity-0">
            {word}
          </span>
        </span>
      ));
    }

    if (splitType === "chars") {
      return children.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            className="split-unit inline-block will-change-transform opacity-0"
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ));
    }

    // Lines mode - just wrap the whole text
    return (
      <span className="inline-block overflow-hidden">
        <span className="split-unit inline-block will-change-transform opacity-0">
          {children}
        </span>
      </span>
    );
  };

  return (
    <Tag
      ref={containerRef as unknown as React.Ref<never>}
      className={cn("overflow-hidden [perspective:1000px]", className)}
    >
      {splitContent()}
    </Tag>
  );
}
