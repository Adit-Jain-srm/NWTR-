"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass dark:glass-dark shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <Container size="xl">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Link href="/" aria-label="NWTR Home">
            <Logo variant={scrolled ? "dark" : "light"} />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.public.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled
                    ? "text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className={cn(!scrolled && "text-white hover:bg-white/10")}>
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

      {mobileOpen && (
        <div className="lg:hidden glass dark:glass-dark border-t border-navy-100 dark:border-navy-800 mt-3">
          <Container>
            <div className="flex flex-col py-6 gap-1">
              {NAV_LINKS.public.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-navy-700 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white py-2.5 px-3 rounded-lg hover:bg-navy-50 dark:hover:bg-navy-800"
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
      )}
    </header>
  );
}
