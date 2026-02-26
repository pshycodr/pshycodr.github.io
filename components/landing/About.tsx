"use client";

import Link from "next/link";

import { personal } from "@/contents/personal";

import { Reveal } from "../shared";

export default function About() {
  return (
    <section className="border-b border-(--color-border) py-10">
      <Reveal>
        <p className="mb-6 text-xs tracking-[0.08em] text-(--color-text-muted)">
          002 / about
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="space-y-4">
          <p className="font-serif text-sm leading-relaxed text-(--color-text-secondary)">
            I&apos;m a <em> software developer </em> who cares about
            performance, clean architecture, and understanding how things work
            under the hood. I work across the stack from building SSR-optimized
            frontends in
            <em> Next.js</em> to designing backend services, cloud
            infrastructure, and <em>AI-powered workflows</em>.
          </p>
          <p className="font-serif text-sm leading-relaxed text-(--color-text-secondary)">
            I hold multiple Oracle certifications in AI, cloud, and database
            architecture. When I&apos;m not shipping code, I&apos;m writing
            deep-dives on systems internals, software architecture, and the
            things I learn along the way.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {Object.values(personal.socials).map(
            ({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                className="group flex items-center gap-1.5 text-xs text-(--color-text-muted) transition-colors"
              >
                <Icon
                  size={16}
                  className="transition-colors group-hover:stroke-(--color-primary)"
                />
                <span className="hidden transition-colors group-hover:text-(--color-text-main) sm:inline">
                  {label}
                </span>
              </Link>
            )
          )}
        </div>
      </Reveal>
    </section>
  );
}
