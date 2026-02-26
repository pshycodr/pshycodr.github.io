"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

import { personal } from "@/contents/personal";

import { Reveal } from "../shared";

const TRANSITION_DURATION = 1;

export default function Hero() {
  const [peek, setPeek] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const handleHoverStart = () => {
    setHovered(true);

    hoverTimer.current = setTimeout(() => {
      setPeek(true);
    }, TRANSITION_DURATION * 1000);
  };

  const handleHoverEnd = () => {
    setHovered(false);

    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setPeek(false);
  };

  return (
    <section className="border-b border-(--color-border) pb-10">
      <Reveal>
        <p className="mb-6 text-xs tracking-[0.08em] text-(--color-text-muted)">
          001 / intro
        </p>
      </Reveal>

      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
        <Reveal delay={0.1}>
          <div className="max-w-xl">
            <h1 className="flex w-full items-baseline gap-2">
              <span className="mb-3 text-3xl font-semibold tracking-[-0.02em] text-(--color-text-main) md:text-5xl">
                {personal.name}
              </span>

              <span className="text-sm text-(--color-text-muted)">aka</span>

              <span className="mb-1 text-sm text-(--color-primary)">
                @{personal.handle}
              </span>
            </h1>

            <p className="mb-6 text-sm text-(--color-text-secondary)">
              {personal.title} · {personal.location}
            </p>

            <p className="max-w-md font-serif text-lg leading-relaxed text-(--color-text-secondary) italic">
              Software Developer building scalable web systems and <br />
              <u>AI-powered applications</u> using Next.js, TypeScript, cloud
              platforms, and modern backend architecture.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={personal.resume}
                target="_blank"
                className="btn-primary px-4 py-2 text-xs font-medium transition-opacity hover:opacity-75"
              >
                résumé ↗
              </Link>

              <Link
                href="https://devdump.tech"
                className="border border-(--color-border) px-4 py-2 text-xs text-(--color-text-secondary) transition-colors hover:border-(--color-primary) hover:text-(--color-text-main)"
              >
                my writings →
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.div
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative h-60 w-60 shrink-0 self-center sm:self-auto"
          >
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 240 240"
              style={{ zIndex: 10 }}
            >
              <motion.circle
                cx="120"
                cy="120"
                r="119"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
                strokeDasharray="748"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 748 }}
                animate={{ strokeDashoffset: hovered ? 0 : 748 }}
                transition={{
                  duration: TRANSITION_DURATION,
                  ease: "easeInOut",
                }}
              />
            </svg>

            <div className="h-full w-full overflow-hidden rounded-full border border-(--color-border)">
              <Image
                src={peek ? "/peek.png" : personal.avatar}
                alt={personal.name}
                width={300}
                height={300}
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                priority
              />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
