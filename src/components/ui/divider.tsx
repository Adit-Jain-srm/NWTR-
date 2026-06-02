import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gradient" | "gold" | "subtle";
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  className,
  variant = "default",
  orientation = "horizontal",
  ...props
}: DividerProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        isHorizontal ? "h-px w-full" : "w-px h-full min-h-[1rem]",
        variant === "default" && "bg-navy-100 dark:bg-navy-800",
        variant === "subtle" && "bg-navy-50 dark:bg-navy-800/50",
        variant === "gradient" && "bg-gradient-to-r from-transparent via-navy-200 to-transparent dark:via-navy-700",
        variant === "gold" && "bg-gradient-to-r from-transparent via-gold-400 to-transparent",
        className
      )}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
}
