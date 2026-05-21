import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "light" | "dark";
}

export function Logo({ className, size = "default", variant = "dark" }: LogoProps) {
  const sizeStyles = { sm: "gap-1.5", default: "gap-2", lg: "gap-2.5" };
  const iconSize = { sm: "w-6 h-6", default: "w-8 h-8", lg: "w-10 h-10" };
  const textSize = { sm: "text-lg", default: "text-xl", lg: "text-2xl" };
  const innerSize = { sm: "w-3 h-3", default: "w-4 h-4", lg: "w-5 h-5" };

  return (
    <div className={cn("flex items-center", sizeStyles[size], className)}>
      <div className={cn("rounded-lg bg-gold-500 flex items-center justify-center", iconSize[size])}>
        <div className={cn("rounded-sm", innerSize[size], variant === "dark" ? "bg-navy-900" : "bg-white")} />
      </div>
      <span className={cn("font-display font-bold tracking-tight", textSize[size], variant === "dark" ? "text-navy-900 dark:text-white" : "text-white")}>
        NWTR
      </span>
    </div>
  );
}
