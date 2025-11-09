import "./globals.css";
import ParallaxBackground from "./ParallaxBackground";
import CustomCursor from "./CustomCursor";

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
        <ParallaxBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
