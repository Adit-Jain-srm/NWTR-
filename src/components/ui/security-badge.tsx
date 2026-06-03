import { cn } from "@/lib/utils";

type SecurityBadgeVariant = "nbfc" | "rbi" | "escrow" | "rera" | "sebi" | "dpdp";

interface SecurityBadgeProps {
  variant: SecurityBadgeVariant;
  size?: "sm" | "md";
  className?: string;
}

const badgeConfig: Record<SecurityBadgeVariant, { icon: string; label: string }> = {
  nbfc: { icon: "🏦", label: "NBFC Regulated" },
  rbi: { icon: "🇮🇳", label: "RBI Compliant" },
  escrow: { icon: "🔐", label: "Escrow Protected" },
  rera: { icon: "📋", label: "RERA Registered" },
  sebi: { icon: "📊", label: "SEBI Instruments" },
  dpdp: { icon: "🛡️", label: "DPDP Compliant" },
};

export function SecurityBadge({ variant, size = "md", className }: SecurityBadgeProps) {
  const { icon, label } = badgeConfig[variant];
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-800/50",
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm",
        "font-medium text-navy-700 dark:text-navy-200",
        className
      )}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export function ComplianceBanner({ className }: { className?: string }) {
  return (
    <div className={cn("w-full bg-navy-50 dark:bg-navy-800/30 border-y border-navy-100 dark:border-navy-800 py-3 px-4", className)}>
      <div className="flex items-center justify-center gap-6 flex-wrap text-xs text-navy-500 dark:text-navy-400">
        <span>🏦 NBFC Regulated</span>
        <span className="hidden sm:inline">•</span>
        <span>📊 SEBI Compliant Instruments</span>
        <span className="hidden sm:inline">•</span>
        <span>🔐 Escrow Protected</span>
        <span className="hidden sm:inline">•</span>
        <span>📋 RERA Registered</span>
      </div>
    </div>
  );
}

export function PartnerLogos({ className }: { className?: string }) {
  const partners = ["RBI", "SEBI", "NBFC Partner", "RERA", "DPDP Act"];
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-8", className)}>
      {partners.map((name) => (
        <span key={name} className="text-sm font-medium text-navy-300 dark:text-navy-600 hover:text-navy-500 dark:hover:text-navy-400 transition-colors cursor-default">
          {name}
        </span>
      ))}
    </div>
  );
}
