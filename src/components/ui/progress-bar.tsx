import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ProgressBar({ value, max = 100, label, showValue = false, size = "md", className }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-xs font-medium text-navy-600 dark:text-navy-300">{label}</span>}
          {showValue && <span className="text-xs font-display font-bold text-navy-900 dark:text-white">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className={cn("bg-navy-100 dark:bg-navy-800 rounded-full overflow-hidden", heights[size])}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}
