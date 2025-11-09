"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // --- Create trail particle ---
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;

      document.body.appendChild(trail);

      // Remove particle after animation ends
      setTimeout(() => {
        trail.remove();
      }, 600);
    };

    window.addEventListener("mousemove", move);

    // Smooth follow logic
    const follow = setInterval(() => {
      setCursorPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }));
    }, 16);

    // Zoom targets
    const zoomTargets = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, .card-zoom, .zoom-target"
    );

    zoomTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => setZoom(true));
      el.addEventListener("mouseleave", () => setZoom(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(follow);
    };
  }, [pos]);

  return (
    <div
      className={`custom-cursor ${zoom ? "zooming" : ""}`}
      style={{
        left: cursorPos.x,
        top: cursorPos.y,
      }}
    />
  );
}
