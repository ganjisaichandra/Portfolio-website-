import "./globals.css";
import ParallaxBackground from "./ParallaxBackground";
import CustomCursor from "./CustomCursor";
import { LiquidEffectAnimation } from "./LiquidEffectAnimation";
import { SphereEffect } from "./SphereEffect";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Sai Chandra — Portfolio",

  description: "Frontend + Design + Power BI dashboards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background effects disabled for cleaner Tailwind Plus aesthetic */}
        {/* <SphereEffect /> */}
        {/* <LiquidEffectAnimation /> */}
        {/* <ParallaxBackground /> */}
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
