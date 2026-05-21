import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gradient" | "gold";
  orientation?: "horizontal" | "vertical";
}

export function Divider({ className, variant = "default", orientation = "horizontal", ...props }: DividerProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        isHorizontal ? "h-px w-full" : "w-px h-full",
        variant === "default" && "bg-navy-100",
        variant === "gradient" && "bg-gradient-to-r from-transparent via-navy-200 to-transparent",
        variant === "gold" && "bg-gradient-to-r from-transparent via-gold-400 to-transparent",
        className
      )}
      role="separator"
      {...props}
    />
  );
}
