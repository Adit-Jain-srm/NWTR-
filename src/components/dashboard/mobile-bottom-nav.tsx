"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const mobileLinks = [
  { href: "/dashboard/tenant", icon: "📊", label: "Home" },
  { href: "/dashboard/tenant/properties", icon: "🏠", label: "Browse" },
  { href: "/dashboard/tenant/deposit", icon: "💰", label: "Deposit" },
  { href: "/dashboard/tenant/support", icon: "💬", label: "Support" },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-navy-900 border-t border-navy-100 dark:border-navy-700 px-2 py-2 safe-area-pb">
      <div className="flex items-center justify-around">
        {mobileLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors",
                isActive ? "text-gold-600" : "text-navy-400 dark:text-navy-500"
              )}
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
