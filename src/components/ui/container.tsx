import { cn } from "@/lib/utils";

type ContainerSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

const sizeStyles: Record<ContainerSize, string> = {
  xs: "max-w-2xl",
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export function Container({ className, size = "lg", children, id }: ContainerProps) {
  return (
    <div id={id} className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeStyles[size], className)}>
      {children}
    </div>
  );
}
