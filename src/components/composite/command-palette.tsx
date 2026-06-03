"use client";

import { useEffect } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/lib/stores/ui-store";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { useRouter } from "next/navigation";

export function CommandPalette() {
  const { commandPaletteOpen, openCommandPalette, closeCommandPalette } = useUIStore();
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        commandPaletteOpen ? closeCommandPalette() : openCommandPalette();
      }
      if (e.key === "Escape") closeCommandPalette();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [commandPaletteOpen, openCommandPalette, closeCommandPalette]);

  function navigate(href: string) {
    router.push(href);
    closeCommandPalette();
  }

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-navy-950/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCommandPalette}
          />
          <motion.div
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Command
              className="bg-white dark:bg-navy-900 rounded-xl shadow-2xl border border-navy-100 dark:border-navy-800 overflow-hidden"
              label="Command palette"
            >
              <Command.Input
                className="w-full px-5 py-4 text-sm bg-transparent border-b border-navy-100 dark:border-navy-800 text-navy-900 dark:text-white placeholder-navy-400 focus:outline-none"
                placeholder="Search pages, properties, or type a command..."
                autoFocus
              />
              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="px-4 py-8 text-center text-sm text-navy-400">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="px-2 py-1.5">
                  <GroupLabel>Navigation</GroupLabel>
                  {NAV_LINKS.public.map((link) => (
                    <Command.Item
                      key={link.href}
                      value={link.label}
                      onSelect={() => navigate(link.href)}
                      className={cn(itemStyles)}
                    >
                      <span className="text-base">{link.icon || "→"}</span>
                      <span>{link.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Separator className="h-px bg-navy-100 dark:bg-navy-800 my-1" />

                <Command.Group heading="Quick Actions" className="px-2 py-1.5">
                  <GroupLabel>Quick Actions</GroupLabel>
                  <Command.Item value="Calculate deposit" onSelect={() => navigate("/calculator")} className={cn(itemStyles)}>
                    <span>🧮</span><span>Calculate Deposit</span>
                  </Command.Item>
                  <Command.Item value="Browse properties" onSelect={() => navigate("/properties")} className={cn(itemStyles)}>
                    <span>🏠</span><span>Browse Properties</span>
                  </Command.Item>
                  <Command.Item value="Dashboard" onSelect={() => navigate("/dashboard")} className={cn(itemStyles)}>
                    <span>📊</span><span>Go to Dashboard</span>
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="h-px bg-navy-100 dark:bg-navy-800 my-1" />

                <Command.Group heading="AI Commands" className="px-2 py-1.5">
                  <GroupLabel>AI Commands</GroupLabel>
                  <Command.Item value="Ask AI How NWTR works" className={cn(itemStyles)}>
                    <span>🤖</span><span>Ask: How does NWTR work?</span>
                  </Command.Item>
                  <Command.Item value="Ask AI Is deposit safe" className={cn(itemStyles)}>
                    <span>🤖</span><span>Ask: Is my deposit safe?</span>
                  </Command.Item>
                  <Command.Item value="Search 3BHK Koramangala" className={cn(itemStyles)}>
                    <span>🔍</span><span>Search: 3BHK in Koramangala</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="px-4 py-2.5 border-t border-navy-100 dark:border-navy-800 flex items-center justify-between text-xs text-navy-400">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>Esc Close</span>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-medium text-navy-400 dark:text-navy-500 uppercase tracking-wider px-2 py-1">{children}</p>;
}

const itemStyles = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-navy-700 dark:text-navy-200 cursor-pointer data-[selected=true]:bg-gold-50 data-[selected=true]:text-gold-900 dark:data-[selected=true]:bg-gold-500/10 dark:data-[selected=true]:text-gold-400 transition-colors";
