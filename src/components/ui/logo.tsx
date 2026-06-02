import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}

export function Logo({ className, size = "md", variant = "dark" }: LogoProps) {
  const sizes = { sm: "gap-1.5", md: "gap-2", lg: "gap-2.5" };
  const iconSizes = { sm: "w-6 h-6", md: "w-8 h-8", lg: "w-10 h-10" };
  const innerSizes = { sm: "w-3 h-3", md: "w-4 h-4", lg: "w-5 h-5" };
  const textSizes = { sm: "text-lg", md: "text-xl", lg: "text-2xl" };

  return (
    <div className={cn("flex items-center", sizes[size], className)}>
      <div className={cn("rounded-lg bg-gold-500 flex items-center justify-center", iconSizes[size])}>
        <div className={cn("rounded-sm", innerSizes[size], variant === "dark" ? "bg-navy-900" : "bg-white")} />
      </div>
      <span
        className={cn(
          "font-display font-bold tracking-tight",
          textSizes[size],
          variant === "dark" ? "text-navy-900 dark:text-white" : "text-white"
        )}
      >
        NWTR
      </span>
    </div>
  );
}
