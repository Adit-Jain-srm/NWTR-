"use client";

import { cn } from "@/lib/utils";

interface SliderProps {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  formatValue?: (value: number) => string;
  className?: string;
}

export function Slider({ label, value, onChange, min, max, step = 1, formatValue, className }: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-medium text-navy-700 dark:text-navy-200">{label}</label>
          <span className="text-sm font-display font-bold text-navy-900 dark:text-white">
            {formatValue ? formatValue(value) : value}
          </span>
        </div>
      )}
      <div className="relative">
        <div className="h-2 bg-navy-100 dark:bg-navy-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full transition-all duration-150"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-label={label}
        />
      </div>
    </div>
  );
}
