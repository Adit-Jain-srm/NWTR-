import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: React.ElementType;
}

const levelStyles: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight",
  2: "text-3xl sm:text-4xl font-display font-bold tracking-tight",
  3: "text-2xl sm:text-3xl font-display font-bold",
  4: "text-xl sm:text-2xl font-display font-bold",
  5: "text-lg font-semibold",
  6: "text-base font-semibold",
};

export function Heading({ level = 2, as, className, children, ...props }: HeadingProps) {
  const Component = as || (`h${level}` as React.ElementType);
  return (
    <Component
      className={cn(levelStyles[level], "text-navy-900 dark:text-white", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
