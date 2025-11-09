"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const layer1 = useRef<HTMLDivElement | null>(null);
  const layer2 = useRef<HTMLDivElement | null>(null);
  const layer3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 100;
      const y = (e.clientY - window.innerHeight / 2) / 100;

      if (layer1.current)
        layer1.current.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
      if (layer2.current)
        layer2.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      if (layer3.current)
        layer3.current.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="parallax-bg">
      <div ref={layer1} className="parallax-layer layer-1"></div>
      <div ref={layer2} className="parallax-layer layer-2"></div>
      <div ref={layer3} className="parallax-layer layer-3"></div>
    </div>
  );
}
