"use client";

import { createElement, useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "section" | "article" | "li";
};

const directionOffset = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

const variants: Variants = {
  hidden: (direction: RevealProps["direction"]) => ({
    opacity: 0,
    ...directionOffset[direction ?? "up"],
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: RevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return createElement(as, { className: cn(className) }, children);
  }

  const Component = motion[as];

  return (
    <Component
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
