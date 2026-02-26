"use client";

import { personal } from "@/contents/personal";

import { Reveal, StaggerContainer, StaggerItem } from "../shared";

export default function Certifications() {
  return (
    <section className="border-b border-(--color-border) py-10">
      <Reveal>
        <p className="mb-6 text-xs tracking-[0.08em] text-(--color-text-muted)">
          006 / certifications
        </p>
      </Reveal>

      <StaggerContainer className="space-y-3">
        {personal.certifications.map((cert, i) => (
          <StaggerItem
            key={i}
            className="flex items-center gap-4 border-t border-(--color-border) py-3 first:border-t-0 first:pt-0"
          >
            <span className="text-xs text-(--color-text-muted) tabular-nums">
              {String(i).padStart(2, "0")}
            </span>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-(--color-text-main) hover:text-(--color-primary) hover:underline"
            >
              {cert.name}
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
