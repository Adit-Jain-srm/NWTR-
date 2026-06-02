import { cn } from "@/lib/utils";

type SpacerSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface SpacerProps {
  size?: SpacerSize;
  className?: string;
}

const sizeStyles: Record<SpacerSize, string> = {
  xs: "h-2",
  sm: "h-4",
  md: "h-8",
  lg: "h-12 sm:h-16",
  xl: "h-16 sm:h-24",
  "2xl": "h-24 sm:h-32",
  "3xl": "h-32 sm:h-40",
};

export function Spacer({ size = "md", className }: SpacerProps) {
  return <div className={cn(sizeStyles[size], className)} aria-hidden="true" />;
}
