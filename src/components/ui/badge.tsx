import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "success" | "warning" | "premium";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-navy-100 text-navy-700",
  success: "bg-emerald-50 text-emerald-500",
  warning: "bg-amber-50 text-amber-500",
  premium: "bg-gold-50 text-gold-800 border border-gold-200",
};

export function Badge({ className, variant = "default", icon, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}
