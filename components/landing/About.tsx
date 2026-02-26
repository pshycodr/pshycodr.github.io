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
            I&apos;m a <em>software developer</em> focused on performance and
            clean architecture. I build web applications with <em>Next.js</em>,
            design backend services, work with cloud infrastructure, and develop
            <em> AI-powered workflows</em>.
          </p>

          <p className="font-serif text-sm leading-relaxed text-(--color-text-secondary)">
            I hold multiple <em>Oracle certifications</em> in AI, cloud, and
            database architecture. Outside of shipping features, I write
            technical deep-dives on systems internals and software architecture,
            sharing what I learn while building real systems.
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
