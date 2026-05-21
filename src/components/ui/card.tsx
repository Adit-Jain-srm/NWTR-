import { cn } from "@/lib/utils";

type CardVariant = "glass" | "solid" | "elevated";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  glass: "glass rounded-xl",
  solid: "bg-white border border-navy-100 rounded-xl",
  elevated: "bg-white rounded-xl shadow-glass",
};

export function Card({ className, variant = "solid", hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        variantStyles[variant],
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 pt-6 pb-2", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 pb-6", className)} {...props}>
      {children}
    </div>
  );
}
