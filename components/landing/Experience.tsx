"use client";

import { personal } from "@/contents/personal";

import { Reveal, StaggerContainer, StaggerItem } from "../shared";

export default function Experience() {
  return (
    <section className="border-b border-(--color-border) py-10">
      <Reveal>
        <p className="mb-6 text-xs tracking-[0.08em] text-(--color-text-muted)">
          005 / experience
        </p>
      </Reveal>

      <StaggerContainer className="space-y-6" staggerDelay={0.1}>
        {personal.experience.map((exp, i) => (
          <StaggerItem
            key={i}
            className="grid grid-cols-[2rem_1fr] gap-x-4 border-t border-(--color-border) pt-4 first:border-t-0 first:pt-0"
          >
            <span className="pt-px text-xs text-(--color-text-muted) tabular-nums">
              {String(i).padStart(2, "0")}
            </span>
            <div>
              <div className="mb-1 flex flex-wrap items-baseline gap-2">
                <h3 className="text-sm font-medium text-(--color-text-main)">
                  {exp.role}
                </h3>
                <span className="text-xs text-(--color-text-muted)">
                  @ {exp.company}
                </span>
              </div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <p className="text-xs text-(--color-primary)">{exp.period}</p>
                {exp.location && (
                  <>
                    <span className="text-xs text-(--color-text-muted)">·</span>
                    <span className="text-xs text-(--color-text-muted)">
                      {exp.location}
                    </span>
                  </>
                )}
              </div>
              <p className="max-w-lg font-serif text-sm leading-relaxed text-(--color-text-secondary) italic">
                {exp.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
