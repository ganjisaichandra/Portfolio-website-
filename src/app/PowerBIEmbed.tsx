"use client";

import * as React from "react";

/**
 * PowerBIEmbed
 * - Paste your Publish-to-web or Secure-embed URL into the `src` prop.
 * - No extra bottom space; container is only as tall as iframe.
 */
export default function PowerBIEmbed({
  title,
  src,
  height = 640,
  className,
  chromeless = true,
}: {
  title: string;
  src: string; // put your link here
  height?: number; // adjust if you want taller
  className?: string;
  chromeless?: boolean;
}) {
  const [loaded, setLoaded] = React.useState(false);

  const computedSrc = React.useMemo(() => {
    try {
      const u = new URL(src);
      if (chromeless && !u.searchParams.has("chromeless")) {
        u.searchParams.set("chromeless", "true");
      }
      return u.toString();
    } catch {
      return src;
    }
  }, [src, chromeless]);

  return (
    <div className={className}>
      {!src ? (
        <div className="grid place-items-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-sm text-gray-500">
          Power BI placeholder — paste your <b>Publish to web</b> or{" "}
          <b>Secure embed</b> URL in the
          <code className="mx-1">src</code> prop.
        </div>
      ) : (
        <div className="relative">
          {!loaded && (
            <div className="absolute inset-0 animate-pulse rounded-xl bg-gray-100" />
          )}
          <iframe
            title={title}
            src={computedSrc}
            allowFullScreen
            onLoad={() => setLoaded(true)}
            className="w-full rounded-xl border border-gray-200 shadow-sm"
            style={{ height }}
          />
        </div>
      )}
    </div>
  );
}
