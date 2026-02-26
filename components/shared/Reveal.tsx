"use client";

import { type ReactNode } from "react";

import { motion } from "motion/react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
