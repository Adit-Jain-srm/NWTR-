import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ title, value, change, trend = "neutral", icon, className }: StatCardProps) {
  return (
    <div className={cn("bg-white dark:bg-navy-900 rounded-xl border border-navy-100 dark:border-navy-800 p-5 hover:shadow-md transition-shadow", className)}>
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-xs font-medium text-navy-400 dark:text-navy-500 uppercase tracking-wider truncate">{title}</p>
          <p className="mt-2 text-2xl font-display font-bold text-navy-900 dark:text-white truncate">{value}</p>
          {change && (
            <p className={cn("mt-1 text-xs font-medium", trend === "up" && "text-emerald-500", trend === "down" && "text-red-500", trend === "neutral" && "text-navy-400 dark:text-navy-500")}>
              {trend === "up" && "↑ "}{trend === "down" && "↓ "}{change}
            </p>
          )}
        </div>
        {icon && <span className="text-2xl shrink-0 ml-3">{icon}</span>}
      </div>
    </div>
  );
}
