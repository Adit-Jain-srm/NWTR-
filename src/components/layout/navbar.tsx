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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy-950/90 backdrop-blur-xl border-b border-navy-800/50 py-3"
          : "bg-transparent py-5"
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Container size="xl">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Link href="/" aria-label="NWTR Home">
            <Logo variant="light" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.public.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Calculator quick-access */}
            <Link
              href="/#calculator"
              className="text-sm font-medium text-gold-400/80 hover:text-gold-400 transition-colors"
            >
              Calculate
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/5">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={cn("block h-0.5 w-6 bg-white transition-all", mobileOpen && "translate-y-2 rotate-45")} />
            <span className={cn("block h-0.5 w-6 bg-white transition-all", mobileOpen && "opacity-0")} />
            <span className={cn("block h-0.5 w-6 bg-white transition-all", mobileOpen && "-translate-y-2 -rotate-45")} />
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-950/95 backdrop-blur-xl border-t border-navy-800 mt-3">
          <Container>
            <div className="flex flex-col py-6 gap-1">
              {NAV_LINKS.public.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-navy-200 py-2.5 px-3 rounded-lg hover:bg-navy-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#calculator"
                className="text-base font-medium text-gold-400 py-2.5 px-3 rounded-lg hover:bg-navy-800"
                onClick={() => setMobileOpen(false)}
              >
                Calculate Savings
              </Link>
              <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-navy-800">
                <Link href="/auth/login"><Button variant="outline" fullWidth>Sign In</Button></Link>
                <Link href="/auth/register"><Button variant="primary" fullWidth>Get Started</Button></Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </motion.header>
  );
}
