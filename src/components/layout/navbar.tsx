"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 2200);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 dark:bg-navy-950/80 backdrop-blur-xl backdrop-saturate-150 border-b border-navy-100/50 dark:border-navy-800/50 py-3"
          : "bg-transparent py-5"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={mounted ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container size="xl">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Link href="/" aria-label="NWTR Home">
            <Logo variant={scrolled ? "dark" : "light"} />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.public.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.4 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    scrolled
                      ? "text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                    scrolled ? "bg-gold-500" : "bg-white/50"
                  )} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.6, duration: 0.4 }}
          >
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className={cn(!scrolled && "text-white/80 hover:text-white hover:bg-white/10")}>
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </motion.div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className={cn("block h-0.5 w-6 transition-all duration-300", scrolled ? "bg-navy-900 dark:bg-white" : "bg-white", mobileOpen && "translate-y-2 rotate-45")} />
            <span className={cn("block h-0.5 w-6 transition-all duration-300", scrolled ? "bg-navy-900 dark:bg-white" : "bg-white", mobileOpen && "opacity-0")} />
            <span className={cn("block h-0.5 w-6 transition-all duration-300", scrolled ? "bg-navy-900 dark:bg-white" : "bg-white", mobileOpen && "-translate-y-2 -rotate-45")} />
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <motion.div
        className={cn("lg:hidden overflow-hidden", !mobileOpen && "pointer-events-none")}
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border-t border-navy-100 dark:border-navy-800 mt-3">
          <Container>
            <div className="flex flex-col py-6 gap-1">
              {NAV_LINKS.public.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-navy-700 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white py-2.5 px-3 rounded-lg hover:bg-navy-50 dark:hover:bg-navy-800 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-navy-100 dark:border-navy-800">
                <Link href="/auth/login"><Button variant="outline" fullWidth>Sign In</Button></Link>
                <Link href="/auth/register"><Button variant="primary" fullWidth>Get Started</Button></Link>
              </div>
            </div>
          </Container>
        </div>
      </motion.div>
    </motion.header>
  );
}
