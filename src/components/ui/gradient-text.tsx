import { cn } from "@/lib/utils";

type GradientType = "gold" | "navy-to-gold" | "gold-to-white";

interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  gradient?: GradientType;
  as?: React.ElementType;
}

const gradientStyles: Record<GradientType, string> = {
  gold: "bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500",
  "navy-to-gold": "bg-gradient-to-r from-navy-400 via-navy-300 to-gold-500",
  "gold-to-white": "bg-gradient-to-r from-gold-400 via-gold-300 to-white",
};

export function GradientText({
  gradient = "gold",
  as: Component = "span",
  className,
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
