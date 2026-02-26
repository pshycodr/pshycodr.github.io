"use client";

import Link from "next/link";

import { motion } from "motion/react";

import { personal } from "@/contents/personal";

import { Reveal, StaggerContainer, StaggerItem } from "../shared";

export default function Projects() {
  return (
    <section className="border-b border-(--color-border) py-10">
      <Reveal>
        <p className="mb-6 text-xs tracking-[0.08em] text-(--color-text-muted)">
          004 / projects
        </p>
      </Reveal>

      <StaggerContainer className="space-y-6" staggerDelay={0.1}>
        {personal.projects.map((project, i) => (
          <StaggerItem key={project.name}>
            <motion.div
              whileHover={{ borderColor: "var(--color-primary)" }}
              transition={{ duration: 0.2 }}
              className="group border border-(--color-border) p-5"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-(--color-text-muted) tabular-nums">
                    {String(i).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-medium text-(--color-text-main)">
                    {project.name}
                  </h3>
                </div>
                <div className="flex gap-3">
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-(--color-text-muted) transition-colors hover:text-(--color-primary)"
                    >
                      live ↗
                    </Link>
                  )}
                  {project.source && (
                    <Link
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-(--color-text-muted) transition-colors hover:text-(--color-primary)"
                    >
                      source ↗
                    </Link>
                  )}
                </div>
              </div>

              <p className="mb-4 max-w-lg font-serif text-sm leading-relaxed text-(--color-text-secondary) italic">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-(--color-text-muted)">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
