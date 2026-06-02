"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

interface Tab {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export function Tabs({ tabs, value, onChange, className, children }: TabsProps) {
  return (
    <TabsPrimitive.Root value={value} onValueChange={onChange} className={className}>
      <TabsPrimitive.List className="flex border-b border-navy-100 dark:border-navy-800 gap-1">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-t",
              value === tab.value
                ? "border-gold-500 text-navy-900 dark:text-white"
                : "border-transparent text-navy-500 hover:text-navy-700 dark:text-navy-400 dark:hover:text-navy-200"
            )}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {children}
    </TabsPrimitive.Root>
  );
}

export function TabContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  return (
    <TabsPrimitive.Content value={value} className={cn("pt-6 focus-visible:outline-none", className)}>
      {children}
    </TabsPrimitive.Content>
  );
}
