import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "premium" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-navy-100 text-navy-700 dark:bg-navy-800 dark:text-navy-200",
  success: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  warning: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  danger: "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400",
  premium: "bg-gold-50 text-gold-800 border border-gold-200 dark:bg-gold-500/10 dark:text-gold-400 dark:border-gold-500/20",
  outline: "bg-transparent border border-navy-200 text-navy-600 dark:border-navy-600 dark:text-navy-300",
};

export function Badge({ className, variant = "default", icon, dot, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "success" && "bg-emerald-500",
            variant === "warning" && "bg-amber-500",
            variant === "danger" && "bg-red-500",
            variant === "premium" && "bg-gold-500",
            (variant === "default" || variant === "outline") && "bg-navy-400"
          )}
        />
      )}
      {icon && <span className="shrink-0 text-[0.7rem]">{icon}</span>}
      {children}
    </span>
  );
}
