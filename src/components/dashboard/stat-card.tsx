import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: string;
  className?: string;
}

export function StatCard({ title, value, change, trend = "neutral", icon, className }: StatCardProps) {
  return (
    <div className={cn("bg-white rounded-xl border border-navy-100 p-6 hover:shadow-glass transition-shadow", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-navy-400 uppercase tracking-wider">{title}</p>
          <p className="mt-2 text-2xl font-display font-bold text-navy-900">{value}</p>
          {change && (
            <p className={cn("mt-1 text-xs font-medium", trend === "up" ? "text-emerald-500" : trend === "down" ? "text-red-500" : "text-navy-400")}>
              {change}
            </p>
          )}
        </div>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
    </div>
  );
}
