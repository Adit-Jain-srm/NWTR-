import { cn } from "@/lib/utils";

type TextSize = "xs" | "sm" | "base" | "lg" | "xl";
type TextWeight = "normal" | "medium" | "semibold" | "bold";

interface TextProps {
  size?: TextSize;
  weight?: TextWeight;
  muted?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const sizeStyles: Record<TextSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const weightStyles: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export function Text({ size = "base", weight = "normal", muted = false, className, children }: TextProps) {
  return (
    <p
      className={cn(
        sizeStyles[size],
        weightStyles[weight],
        muted ? "text-navy-500 dark:text-navy-400" : "text-navy-700 dark:text-navy-200",
        "leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}
