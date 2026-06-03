import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  description?: string;
  date?: string;
  status: "completed" | "active" | "pending";
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const dotStyles = {
  completed: "bg-emerald-500 border-emerald-200 dark:border-emerald-500/30",
  active: "bg-gold-500 border-gold-200 dark:border-gold-500/30 ring-4 ring-gold-100 dark:ring-gold-500/10",
  pending: "bg-navy-200 border-navy-100 dark:bg-navy-700 dark:border-navy-600",
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-0", className)}>
      {items.map((item, i) => (
        <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
          {i < items.length - 1 && (
            <div className="absolute left-[9px] top-5 w-0.5 h-full bg-navy-100 dark:bg-navy-800" />
          )}
          <div className={cn("relative z-10 mt-1 w-[18px] h-[18px] rounded-full border-2 shrink-0", dotStyles[item.status])} />
          <div className="min-w-0 pt-0.5">
            <p className={cn("text-sm font-medium", item.status === "pending" ? "text-navy-400 dark:text-navy-500" : "text-navy-800 dark:text-navy-100")}>
              {item.title}
            </p>
            {item.description && <p className="mt-0.5 text-xs text-navy-400 dark:text-navy-500">{item.description}</p>}
            {item.date && <p className="mt-1 text-xs text-navy-300 dark:text-navy-600">{item.date}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
