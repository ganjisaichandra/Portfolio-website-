"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!circleRef.current) return;
      circleRef.current.style.left = `${e.clientX}px`;
      circleRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="spotlight-layer">
      <div ref={circleRef} className="spotlight-circle" />
    </div>
  );
}
