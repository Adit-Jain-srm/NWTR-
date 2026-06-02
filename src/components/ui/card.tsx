import { cn } from "@/lib/utils";

type CardVariant = "solid" | "glass" | "elevated" | "interactive";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantStyles: Record<CardVariant, string> = {
  solid: "bg-white border border-navy-100 dark:bg-navy-900 dark:border-navy-800",
  glass: "glass dark:glass-dark",
  elevated: "bg-white shadow-lg dark:bg-navy-900 dark:shadow-navy-950/50",
  interactive:
    "bg-white border border-navy-100 dark:bg-navy-900 dark:border-navy-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold-200 dark:hover:border-gold-500/30 cursor-pointer",
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({ className, variant = "solid", padding = "md", children, ...props }: CardProps) {
  return (
    <div className={cn("rounded-xl", variantStyles[variant], paddingStyles[padding], className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pt-4 mt-4 border-t border-navy-50 dark:border-navy-800", className)} {...props}>
      {children}
    </div>
  );
}
