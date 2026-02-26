"use client";

import Image from "next/image";

import { motion } from "motion/react";

import { personal } from "@/contents/personal";

import { Reveal, StaggerContainer, StaggerItem } from "../shared";

export default function Skills() {
  return (
    <section className="border-b border-(--color-border) py-10">
      <Reveal>
        <p className="mb-6 text-xs tracking-[0.08em] text-(--color-text-muted)">
          003 / stack
        </p>
      </Reveal>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {personal.skills.map((group) => (
          <StaggerItem key={group.category}>
            <p className="mb-3 text-xs font-medium text-(--color-text-main)">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <div key={item.name} className="flex items-center">
                  <motion.span
                    whileHover={{
                      borderColor: "var(--color-primary)",
                      color: "var(--color-text-main)",
                    }}
                    transition={{ duration: 0.15 }}
                    className="border border-(--color-border) px-2 py-1 text-xs text-(--color-text-secondary)"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="display-none mr-1 inline rounded-sm align-middle"
                    />
                    {item.name}
                  </motion.span>
                </div>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
