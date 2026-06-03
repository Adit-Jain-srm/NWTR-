import { cn } from "@/lib/utils";

interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField?: string;
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
  className?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  keyField = "id",
  onRowClick,
  emptyMessage = "No data available",
  className,
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className={cn("bg-white dark:bg-navy-900 rounded-xl border border-navy-100 dark:border-navy-800 p-12 text-center", className)}>
        <p className="text-sm text-navy-400 dark:text-navy-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={cn("bg-white dark:bg-navy-900 rounded-xl border border-navy-100 dark:border-navy-800 overflow-hidden", className)}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-navy-100 dark:border-navy-800 bg-surface-50 dark:bg-navy-900/50">
              {columns.map((col) => (
                <th key={col.key} className={cn("text-xs font-medium text-navy-400 dark:text-navy-500 uppercase tracking-wider text-left px-5 py-3", col.className)}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={String(row[keyField] ?? i)}
                onClick={() => onRowClick?.(row)}
                className={cn(
                  "border-b border-navy-50 dark:border-navy-800 last:border-0 transition-colors",
                  onRowClick && "cursor-pointer hover:bg-navy-50/50 dark:hover:bg-navy-800/50"
                )}
              >
                {columns.map((col) => (
                  <td key={col.key} className={cn("px-5 py-3.5 text-sm text-navy-700 dark:text-navy-200", col.className)}>
                    {col.render ? col.render(row) : String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
