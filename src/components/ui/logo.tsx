import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}

export function Logo({ className, size = "md", variant = "dark" }: LogoProps) {
  const svgSizes = { sm: "w-6 h-6", md: "w-8 h-8", lg: "w-10 h-10" };
  const textSizes = { sm: "text-lg", md: "text-xl", lg: "text-2xl" };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* NWR Monogram — from the preloader */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className={cn(svgSizes[size], variant === "dark" ? "text-navy-900 dark:text-gold-400" : "text-gold-400")}
      >
        <path
          d="M8 48V16L24 48V16"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 16L36 48L44 16"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 16H60V30H48V48"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={cn(
          "font-display font-bold tracking-tight",
          textSizes[size],
          variant === "dark" ? "text-navy-900 dark:text-white" : "text-white"
        )}
      >
        NWTR
      </span>
    </div>
  );
}
