"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);
      setTimeout(() => trail.remove(), 600);
    };

    const animate = () => {
      setCursorPos((prev) => ({
        x: prev.x + (posRef.current.x - prev.x) * 0.18,
        y: prev.y + (posRef.current.y - prev.y) * 0.18,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    const zoomTargets = Array.from(
      document.querySelectorAll(
        "a, button, h1, h2, h3, h4, h5, h6, .card-zoom, .zoom-target"
      )
    );

    const activateZoom = () => setZoom(true);
    const deactivateZoom = () => setZoom(false);
    zoomTargets.forEach((el) => {
      el.addEventListener("mouseenter", activateZoom);
      el.addEventListener("mouseleave", deactivateZoom);
    });

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      zoomTargets.forEach((el) => {
        el.removeEventListener("mouseenter", activateZoom);
        el.removeEventListener("mouseleave", deactivateZoom);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-outline ${zoom ? "zooming" : ""}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />
      <div
        className={`cursor-core ${zoom ? "zooming" : ""}`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
        }}
      />
    </>
  );
}
