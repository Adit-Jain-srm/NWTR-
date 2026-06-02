"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import type { Role } from "@prisma/client";

interface MobileNavProps {
  role: Role;
}

export function MobileNav({ role }: MobileNavProps) {
  const pathname = usePathname();
  const roleKey = role.toLowerCase() as keyof typeof NAV_LINKS;
  const links = (NAV_LINKS[roleKey] || NAV_LINKS.tenant).slice(0, 5);

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-navy-900 border-t border-navy-100 dark:border-navy-800 px-2 py-2 safe-area-pb">
      <div className="flex items-center justify-around">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors min-w-[3.5rem]",
                isActive ? "text-gold-600" : "text-navy-400 dark:text-navy-500"
              )}
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-[10px] font-medium truncate">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
