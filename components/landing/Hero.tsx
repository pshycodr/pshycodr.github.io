"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

import { personal } from "@/contents/personal";

import { Reveal } from "../shared";

export default function Hero() {
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
              Software Developer building scalable web systems and{" "}
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
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-60 w-60 shrink-0 self-center overflow-hidden rounded-xl border border-(--color-border) sm:self-auto"
          >
            <Image
              src={personal.avatar}
              alt={personal.name}
              width={120}
              height={120}
              className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              priority
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
