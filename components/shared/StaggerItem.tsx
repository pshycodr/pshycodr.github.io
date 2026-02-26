"use client";

import { type ReactNode } from "react";

import { motion } from "motion/react";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
