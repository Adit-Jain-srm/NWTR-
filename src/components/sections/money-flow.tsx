"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export function MoneyFlow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let rafId: number;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const totalScroll = section.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const nodes = [
    { id: "deposit", label: "Your Deposit", value: "₹15,00,000", x: 400, y: 60, threshold: 0 },
    { id: "escrow", label: "NBFC Escrow", value: "Ring-fenced", x: 400, y: 180, threshold: 0.12 },
    { id: "fd", label: "Fixed Deposits", value: "40% → 7.2% yield", x: 200, y: 320, threshold: 0.28 },
    { id: "gsec", label: "G-Secs / T-Bills", value: "35% → 8.1% yield", x: 400, y: 320, threshold: 0.35 },
    { id: "liquid", label: "Liquid Funds", value: "25% → 6.5% yield", x: 600, y: 320, threshold: 0.42 },
    { id: "yield", label: "Total Yield Generated", value: "₹1,23,000", x: 400, y: 460, threshold: 0.55 },
    { id: "owner", label: "Owner Payouts", value: "₹45,000/mo × 12", x: 250, y: 580, threshold: 0.68 },
    { id: "spread", label: "NWTR Spread", value: "Platform fee", x: 550, y: 580, threshold: 0.72 },
    { id: "return", label: "Deposit Returned", value: "₹15,00,000 → You", x: 400, y: 720, threshold: 0.85 },
  ];

  const paths = [
    { from: "deposit", to: "escrow", d: "M400,80 L400,160" },
    { from: "escrow", to: "fd", d: "M400,200 C400,260 200,260 200,300" },
    { from: "escrow", to: "gsec", d: "M400,200 L400,300" },
    { from: "escrow", to: "liquid", d: "M400,200 C400,260 600,260 600,300" },
    { from: "fd", to: "yield", d: "M200,340 C200,400 400,400 400,440" },
    { from: "gsec", to: "yield", d: "M400,340 L400,440" },
    { from: "liquid", to: "yield", d: "M600,340 C600,400 400,400 400,440" },
    { from: "yield", to: "owner", d: "M400,480 C400,530 250,530 250,560" },
    { from: "yield", to: "spread", d: "M400,480 C400,530 550,530 550,560" },
    { from: "escrow", to: "return", d: "M380,200 C300,200 300,700 400,700" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#070E18]"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,97,0.04)_0%,_transparent_50%)]" />
        {/* Subtle grid for depth */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(201,169,97,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6">
          {/* Section label */}
          <motion.p
            className="text-center text-xs uppercase tracking-[0.3em] text-navy-500 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Where your money goes
          </motion.p>

          {/* SVG Flow Diagram */}
          <div className="relative w-full aspect-[800/780] max-h-[70vh]">
            <svg
              ref={svgRef}
              viewBox="0 0 800 780"
              className="w-full h-full"
              fill="none"
            >
              {/* Paths */}
              {paths.map((path, i) => {
                const fromNode = nodes.find((n) => n.id === path.from);
                const threshold = fromNode ? fromNode.threshold : 0;
                const isActive = scrollProgress > threshold + 0.08;

                return (
                  <path
                    key={i}
                    d={path.d}
                    stroke={isActive ? "#C9A961" : "rgba(255,255,255,0.06)"}
                    strokeWidth={isActive ? 2 : 1}
                    strokeLinecap="round"
                    style={{
                      transition: "stroke 0.6s ease, stroke-width 0.4s ease",
                      strokeDasharray: isActive ? "none" : "4 4",
                    }}
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((node) => {
                const isActive = scrollProgress > node.threshold;
                return (
                  <g key={node.id}>
                    {/* Node circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isActive ? 6 : 4}
                      fill={isActive ? "#C9A961" : "rgba(255,255,255,0.1)"}
                      style={{ transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
                    />
                    {/* Glow when active */}
                    {isActive && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={12}
                        fill="none"
                        stroke="#C9A961"
                        strokeWidth={0.5}
                        opacity={0.3}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Node labels (positioned absolutely over the SVG) */}
            {nodes.map((node) => {
              const isActive = scrollProgress > node.threshold;
              const xPercent = (node.x / 800) * 100;
              const yPercent = (node.y / 780) * 100;

              return (
                <div
                  key={node.id}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${xPercent}%`,
                    top: `${yPercent}%`,
                    transform: "translate(-50%, 16px)",
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  <div className="text-center whitespace-nowrap">
                    <div className="text-xs font-medium text-white">{node.label}</div>
                    <div className="text-[10px] text-gold-400 mt-0.5">{node.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress indicator */}
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-px bg-navy-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold-500 rounded-full transition-all duration-150"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
