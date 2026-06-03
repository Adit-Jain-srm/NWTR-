import { cn } from "@/lib/utils";

interface SectionProps {
  dark?: boolean;
  spacing?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

const spacingStyles = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
  xl: "py-24 sm:py-32 lg:py-40",
};

export function Section({ className, dark = false, spacing = "lg", children, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(spacingStyles[spacing], dark && "bg-navy-900 text-white dark:bg-navy-950", className)}
    >
      {children}
    </section>
  );
}
