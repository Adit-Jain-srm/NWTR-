import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, icon, iconRight, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-navy-700 dark:text-navy-200 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400">{icon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors",
              "dark:bg-navy-800 dark:text-navy-100 dark:placeholder-navy-500",
              "focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500",
              error
                ? "border-red-300 focus:border-red-500 focus:ring-red-500/40"
                : "border-navy-200 dark:border-navy-700",
              icon && "pl-10",
              iconRight && "pr-10",
              className
            )}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {iconRight && <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-400">{iconRight}</span>}
        </div>
        {error && <p id={`${inputId}-error`} className="mt-1.5 text-xs text-red-500">{error}</p>}
        {!error && helperText && <p id={`${inputId}-helper`} className="mt-1.5 text-xs text-navy-400">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
