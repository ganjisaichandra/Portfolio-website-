"use client";

import SplashCursor from "@/components/SplashCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SplashCursor COLOR="#F97316" RAINBOW_MODE={false} />
      {children}
      <Analytics />
    </ThemeProvider>
  );
}
