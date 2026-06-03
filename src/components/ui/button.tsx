"use client";

import { forwardRef, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { playClickSound } from "@/lib/sounds";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  sound?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-500 text-navy-900 hover:bg-gold-400 active:bg-gold-600 shadow-md hover:shadow-gold focus-visible:ring-gold-500 backdrop-blur-sm",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 dark:bg-white dark:text-navy-900 dark:hover:bg-navy-100 backdrop-blur-sm",
  ghost:
    "bg-white/5 text-navy-700 hover:bg-white/10 active:bg-white/15 dark:text-navy-200 dark:hover:bg-white/10 backdrop-blur-sm",
  outline:
    "bg-transparent text-navy-700 border border-navy-200 hover:border-navy-400 hover:bg-navy-50/50 dark:text-navy-200 dark:border-navy-700 dark:hover:bg-white/5 backdrop-blur-sm",
  danger:
    "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus-visible:ring-red-500 backdrop-blur-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5 rounded-lg",
  md: "h-11 px-5 text-sm gap-2 rounded-lg",
  lg: "h-13 px-7 text-base gap-2.5 rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", loading, icon, iconRight, fullWidth, children, disabled, sound = true, onClick, ...props },
    ref
  ) => {
    const rippleRef = useRef<HTMLSpanElement>(null);

    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (sound) playClickSound();

        // Glass ripple effect
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement("span");
        ripple.className = "absolute rounded-full bg-white/20 animate-[ripple_0.6s_ease-out_forwards] pointer-events-none";
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = "0px";
        ripple.style.height = "0px";
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        onClick?.(e);
      },
      [sound, onClick]
    );

    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          "active:scale-[0.97]",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || loading}
        onClick={handleClick}
        {...props}
      >
        <span ref={rippleRef} />
        {loading && (
          <svg className="animate-spin h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {!loading && icon && <span className="shrink-0">{icon}</span>}
        {children && <span>{children}</span>}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
