import { cn } from "@/lib/utils";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const variantStyles: Record<AlertVariant, string> = {
  info: "bg-navy-50 border-navy-200 text-navy-800 dark:bg-navy-800/50 dark:border-navy-700 dark:text-navy-200",
  success: "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-300",
  warning: "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-300",
  error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-300",
};

const iconDefaults: Record<AlertVariant, string> = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  error: "❌",
};

export function Alert({ variant = "info", title, icon, dismissible, onDismiss, children, className, ...props }: AlertProps) {
  return (
    <div
      className={cn("flex gap-3 px-4 py-3 rounded-xl border", variantStyles[variant], className)}
      role="alert"
      {...props}
    >
      <span className="shrink-0 text-base mt-0.5">{icon || iconDefaults[variant]}</span>
      <div className="flex-1 min-w-0">
        {title && <p className="text-sm font-semibold">{title}</p>}
        {children && <div className={cn("text-sm", title && "mt-1")}>{children}</div>}
      </div>
      {dismissible && onDismiss && (
        <button onClick={onDismiss} className="shrink-0 p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors" aria-label="Dismiss">
          ×
        </button>
      )}
    </div>
  );
}
