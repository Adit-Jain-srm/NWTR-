import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-navy-100 dark:bg-navy-800",
        className
      )}
    />
  );
}

export function StatCardSkeleton() {
  return (
    <div className="bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 p-6">
      <Skeleton className="h-3 w-20 mb-3" />
      <Skeleton className="h-7 w-28 mb-2" />
      <Skeleton className="h-3 w-16" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 overflow-hidden">
      <div className="p-4 border-b border-navy-100 dark:border-navy-700">
        <Skeleton className="h-4 w-32" />
      </div>
      {[...Array(rows)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-navy-50 dark:border-navy-700 last:border-0">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16 ml-auto" />
        </div>
      ))}
    </div>
  );
}
