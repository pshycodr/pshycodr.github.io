'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', tooltip: 'ES6+, Async/Await' },
  { name: 'TypeScript', tooltip: 'Strongly typed JS' },
  { name: 'React.js', tooltip: 'Hooks, Context API' },
  { name: 'Next.js', tooltip: 'SSR, SSG' },
  { name: 'Node.js', tooltip: 'Express, APIs' },
  { name: 'Python', tooltip: 'Django, Flask' },
  { name: 'Django', tooltip: 'REST APIs' },
  { name: 'MongoDB', tooltip: 'NoSQL database' },
  { name: 'AWS', tooltip: 'Cloud services' },
  { name: 'Docker', tooltip: 'Containerization' },
  { name: 'Cloudflare', tooltip: 'Edge computing' },
  { name: 'Supabase', tooltip: 'Real-time apps' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export function SkillsSection() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-hover p-8"
      >
        <h3 className="text-xl font-semibold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Tech Stack
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div
                className="px-4 py-2 rounded-full text-sm cursor-pointer
                         bg-[rgb(var(--primary))]/10 border border-[rgb(var(--primary))]/20
                         hover:bg-[rgb(var(--primary))]/20 hover:border-[rgb(var(--primary))]/40
                         transition-all duration-200"
              >
                {skill.name}
              </div>
              {/* Tooltip */}
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                         opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                         bg-[rgb(var(--card))] text-xs px-3 py-1.5 rounded-lg whitespace-nowrap
                         shadow-lg border border-[rgb(var(--border))] z-10"
              >
                {skill.tooltip}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                  <div className="border-4 border-transparent border-t-[rgb(var(--card))]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}