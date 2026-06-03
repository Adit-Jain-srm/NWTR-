"use client";

import { cn } from "@/lib/utils";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  borderRadius?: number;
  gradient?: string;
  animated?: boolean;
  animationDuration?: number;
}

export function GradientBorder({
  children,
  className,
  borderWidth = 1,
  borderRadius = 16,
  gradient = "linear-gradient(135deg, rgba(201,169,97,0.6), rgba(201,169,97,0.1), rgba(201,169,97,0.6))",
  animated = true,
  animationDuration = 3,
}: GradientBorderProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{ borderRadius }}
    >
      {/* Gradient border layer */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          padding: borderWidth,
          background: animated
            ? undefined
            : gradient,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      >
        {animated && (
          <div
            className="absolute inset-[-200%] rounded-[inherit]"
            style={{
              background: `conic-gradient(from 0deg, rgba(201,169,97,0.8), rgba(201,169,97,0.1), rgba(201,169,97,0.8), rgba(201,169,97,0.1), rgba(201,169,97,0.8))`,
              animation: `spin ${animationDuration}s linear infinite`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative rounded-[inherit] overflow-hidden">
        {children}
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
