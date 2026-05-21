import { cn } from "@/lib/utils";

type GradientType = "gold" | "navy-to-gold";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  gradient?: GradientType;
  as?: React.ElementType;
}

const gradientStyles: Record<GradientType, string> = {
  gold: "bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500",
  "navy-to-gold": "bg-gradient-to-r from-navy-500 via-navy-400 to-gold-500",
};

export function GradientText({
  className,
  gradient = "gold",
  as: Component = "span",
  children,
  ...props
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "bg-clip-text text-transparent",
        gradientStyles[gradient],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
