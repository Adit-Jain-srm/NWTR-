import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  level?: HeadingLevel;
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight",
  2: "text-3xl sm:text-4xl font-display font-bold tracking-tight",
  3: "text-2xl sm:text-3xl font-display font-bold",
  4: "text-xl sm:text-2xl font-display font-bold",
  5: "text-lg font-semibold",
  6: "text-base font-semibold",
};

export function Heading({ level = 2, className, children, id }: HeadingProps) {
  const baseClass = cn(levelStyles[level], "text-navy-900 dark:text-white", className);

  switch (level) {
    case 1: return <h1 id={id} className={baseClass}>{children}</h1>;
    case 2: return <h2 id={id} className={baseClass}>{children}</h2>;
    case 3: return <h3 id={id} className={baseClass}>{children}</h3>;
    case 4: return <h4 id={id} className={baseClass}>{children}</h4>;
    case 5: return <h5 id={id} className={baseClass}>{children}</h5>;
    case 6: return <h6 id={id} className={baseClass}>{children}</h6>;
  }
}
