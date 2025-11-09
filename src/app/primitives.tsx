"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

/** tiny class helper */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** Layout */
export function Container({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: React.PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title?: string;
  className?: string;
}>) {
  return (
    <section id={id} className={cn("py-12 sm:py-16", className)}>
      <Container>
        {eyebrow ? (
          <div className="mb-2 text-xs font-semibold tracking-widest uppercase text-blue-600">
            {eyebrow}
          </div>
        ) : null}
        {title ? (
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
            {title}
          </h2>
        ) : null}
        <div className="mt-5">{children}</div>
      </Container>
    </section>
  );
}

export function Card({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white shadow-sm border border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Chip({ children }: React.PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

/** Scroll-in animation wrapper */
export function InViewFadeUp({
  children,
  delay = 0,
  className,
}: React.PropsWithChildren<{ delay?: number; className?: string }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Parallax container (moves children slightly on scroll) */
export function Parallax({
  children,
  className,
  strength = 40,
}: React.PropsWithChildren<{ className?: string; strength?: number }>) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** 3D tilt on hover (for cards) */
export function TiltCard({
  children,
  className,
  max = 10,
  scale = 1.02,
}: React.PropsWithChildren<{
  className?: string;
  max?: number;
  scale?: number;
}>) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({});

  function onMove(e: React.MouseEvent) {
    const el = ref.current!;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -2 * max; // rotateX
    const ry = (px - 0.5) * 2 * max; // rotateY
    setStyle({
      transform: `rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`,
    });
  }
  function onLeave() {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" });
  }

  return (
    <motion.div
      ref={ref}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.8 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
