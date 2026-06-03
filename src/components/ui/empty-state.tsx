import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: { label: string; onClick: () => void };
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-16 px-6 text-center", className)}>
      {icon && <div className="text-5xl mb-4 opacity-60">{icon}</div>}
      <h3 className="text-lg font-display font-bold text-navy-800 dark:text-navy-200">{title}</h3>
      {description && <p className="mt-2 text-sm text-navy-500 dark:text-navy-400 max-w-sm">{description}</p>}
      {action && (
        <Button variant="primary" size="sm" className="mt-6" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
