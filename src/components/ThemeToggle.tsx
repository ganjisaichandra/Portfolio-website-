"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      disabled={!mounted}
      className={cn(
        "group relative flex h-9 w-[4.5rem] items-center rounded-full p-1",
        "bg-gradient-to-b from-white to-gray-50 shadow-sm ring-1 ring-gray-200/80",
        "transition-all duration-500 hover:shadow-md hover:ring-teal-500/30",
        "disabled:cursor-default disabled:opacity-90",
        "dark:from-zinc-800 dark:to-zinc-900 dark:ring-zinc-600/60 dark:hover:ring-teal-400/40",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
    >
      <span
        className={cn(
          "absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          "bg-gradient-to-r from-teal-500/10 via-transparent to-orange-500/10",
          "dark:from-teal-400/15 dark:to-orange-400/10"
        )}
        aria-hidden
      />
      <Sun
        className={cn(
          "relative z-10 ml-0.5 h-4 w-4 transition-all duration-500",
          isDark ? "scale-75 text-zinc-500" : "scale-100 text-amber-500"
        )}
        aria-hidden
      />
      <Moon
        className={cn(
          "relative z-10 ml-auto mr-0.5 h-4 w-4 transition-all duration-500",
          isDark ? "scale-100 text-teal-300" : "scale-75 text-zinc-400"
        )}
        aria-hidden
      />
      <span
        className={cn(
          "absolute top-1 h-7 w-7 rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "bg-white ring-1 ring-gray-200/80 dark:bg-zinc-700 dark:ring-zinc-500/50",
          isDark ? "left-[calc(100%-2rem)]" : "left-1"
        )}
        aria-hidden
      />
    </button>
  );
}
