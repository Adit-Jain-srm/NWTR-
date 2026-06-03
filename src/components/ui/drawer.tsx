"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  side?: "right" | "bottom";
  children: React.ReactNode;
  className?: string;
}

export function Drawer({ open, onClose, title, side = "right", children, className }: DrawerProps) {
  const isRight = side === "right";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-navy-950/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild>
              <motion.div
                className={cn(
                  "fixed z-50 bg-white dark:bg-navy-900 shadow-2xl focus:outline-none overflow-y-auto",
                  isRight ? "top-0 right-0 h-full w-full max-w-md" : "bottom-0 left-0 right-0 max-h-[85vh] rounded-t-2xl",
                  className
                )}
                initial={isRight ? { x: "100%" } : { y: "100%" }}
                animate={isRight ? { x: 0 } : { y: 0 }}
                exit={isRight ? { x: "100%" } : { y: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {(title || true) && (
                  <div className="flex items-center justify-between p-5 border-b border-navy-100 dark:border-navy-800">
                    {title && (
                      <DialogPrimitive.Title className="font-display font-bold text-navy-900 dark:text-white">
                        {title}
                      </DialogPrimitive.Title>
                    )}
                    <DialogPrimitive.Close className="p-1.5 rounded-lg text-navy-400 hover:text-navy-600 hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors ml-auto" aria-label="Close">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </DialogPrimitive.Close>
                  </div>
                )}
                <div className="p-5">{children}</div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
