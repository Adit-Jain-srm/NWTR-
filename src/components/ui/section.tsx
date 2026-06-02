import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  dark?: boolean;
  spacing?: "sm" | "md" | "lg" | "xl";
}

const spacingStyles = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
  xl: "py-24 sm:py-32 lg:py-40",
};

export function Section({
  className,
  as: Component = "section",
  dark = false,
  spacing = "lg",
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        spacingStyles[spacing],
        dark && "bg-navy-900 text-white dark:bg-navy-950",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
