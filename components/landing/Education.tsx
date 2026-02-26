"use client";

import { personal } from "@/contents/personal";

import { Reveal } from "../shared";

export default function Education() {
  return (
    <section className="border-b border-(--color-border) py-10">
      <Reveal>
        <p className="mb-6 text-xs tracking-[0.08em] text-(--color-text-muted)">
          007 / education
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div>
          <h3 className="text-sm font-medium text-(--color-text-main)">
            {personal.education.degree}
          </h3>
          <p className="mt-1 text-sm text-(--color-text-secondary)">
            {personal.education.field}
          </p>
          <p className="mt-1 text-xs text-(--color-text-muted)">
            {personal.education.institution}
          </p>
          <p className="mt-1 text-xs text-(--color-primary)">
            {personal.education.period}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
