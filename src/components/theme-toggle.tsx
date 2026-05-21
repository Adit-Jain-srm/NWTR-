"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")}
      className="p-2 rounded-lg hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors"
      aria-label="Toggle theme"
      title={`Theme: ${theme}`}
    >
      {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "💻"}
    </button>
  );
}
