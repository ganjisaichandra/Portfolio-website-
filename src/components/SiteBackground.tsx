import { cn } from "@/lib/utils";

interface SiteBackgroundProps {
  className?: string;
  emphasis?: boolean;
}

export function SiteBackground({
  className,
  emphasis = false,
}: SiteBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden transition-colors duration-500",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-white transition-colors duration-500 dark:bg-[#09090b]" />

      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500 dark:opacity-0",
          emphasis ? "opacity-100" : "opacity-90"
        )}
        style={{
          background: `
            radial-gradient(ellipse 85% 55% at 50% -12%, rgba(20, 184, 166, ${emphasis ? 0.18 : 0.1}), transparent 58%),
            radial-gradient(ellipse 65% 50% at 95% 35%, rgba(168, 85, 247, ${emphasis ? 0.12 : 0.07}), transparent 52%),
            radial-gradient(ellipse 60% 45% at 5% 72%, rgba(153, 27, 27, ${emphasis ? 0.1 : 0.06}), transparent 50%),
            radial-gradient(ellipse 55% 40% at 75% 100%, rgba(249, 115, 22, ${emphasis ? 0.12 : 0.07}), transparent 48%),
            radial-gradient(ellipse 45% 35% at 20% 25%, rgba(59, 130, 246, ${emphasis ? 0.08 : 0.05}), transparent 45%),
            linear-gradient(180deg, #ffffff 0%, #fafafa 48%, #ffffff 100%)
          `,
        }}
      />

      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100",
          emphasis ? "dark:opacity-100" : "dark:opacity-95"
        )}
        style={{
          background: `
            radial-gradient(ellipse 85% 55% at 50% -12%, rgba(20, 184, 166, ${emphasis ? 0.22 : 0.14}), transparent 58%),
            radial-gradient(ellipse 65% 50% at 95% 35%, rgba(168, 85, 247, ${emphasis ? 0.16 : 0.1}), transparent 52%),
            radial-gradient(ellipse 60% 45% at 5% 72%, rgba(249, 115, 22, ${emphasis ? 0.12 : 0.08}), transparent 50%),
            radial-gradient(ellipse 55% 40% at 75% 100%, rgba(59, 130, 246, ${emphasis ? 0.1 : 0.06}), transparent 48%),
            linear-gradient(180deg, #09090b 0%, #0c0c0f 48%, #09090b 100%)
          `,
        }}
      />

      <div
        className={cn(
          "absolute left-[8%] top-[14%] h-64 w-64 rounded-full bg-teal-400/20 blur-[100px] transition-opacity duration-500 dark:bg-teal-500/15",
          emphasis && "bg-teal-400/30 dark:bg-teal-400/25"
        )}
      />
      <div
        className={cn(
          "absolute bottom-[12%] right-[8%] h-72 w-72 rounded-full bg-orange-400/15 blur-[110px] transition-opacity duration-500 dark:bg-orange-500/10",
          emphasis && "bg-orange-400/25 dark:bg-orange-400/20"
        )}
      />
      <div
        className={cn(
          "absolute right-[28%] top-[6%] h-40 w-40 rounded-full bg-red-900/10 blur-[80px] transition-opacity duration-500 dark:bg-violet-600/10",
          emphasis && "bg-red-900/15 dark:bg-violet-500/15"
        )}
      />
    </div>
  );
}
