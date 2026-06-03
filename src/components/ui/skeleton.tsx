import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-lg bg-navy-100 dark:bg-navy-800", className)} />;
}

export function StatCardSkeleton() {
  return (
    <div className="bg-white dark:bg-navy-900 rounded-xl border border-navy-100 dark:border-navy-800 p-5">
      <Skeleton className="h-3 w-20 mb-3" />
      <Skeleton className="h-7 w-28 mb-2" />
      <Skeleton className="h-3 w-16" />
    </div>
  );
}

export function TableRowSkeleton({ cols = 4 }: { cols?: number }) {
  return (
    <div className="flex items-center gap-4 px-5 py-3.5 border-b border-navy-50 dark:border-navy-800">
      {Array.from({ length: cols }).map((_, i) => (
        <Skeleton key={i} className={cn("h-4", i === 0 ? "w-24" : i === cols - 1 ? "w-16 ml-auto" : "w-32")} />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-navy-900 rounded-xl border border-navy-100 dark:border-navy-800 overflow-hidden">
      <Skeleton className="h-44 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  );
}
