import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  dark?: boolean;
}

export function Section({ className, as: Component = "section", dark, children, ...props }: SectionProps) {
  return (
    <Component
      className={cn(
        "py-16 sm:py-24 lg:py-32",
        dark && "bg-navy-900 text-white",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
