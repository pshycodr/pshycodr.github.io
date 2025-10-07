'use client';

import { motion } from 'framer-motion';
import { Terminal, Music, Utensils, Github, ExternalLink, Settings } from 'lucide-react';

const projects = [
  {
    id: 'codr',
    title: 'Codr CLI',
    description: 'AI developer assistant with multi-agent orchestration',
    icon: Terminal,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    links: [
      { label: 'GitHub', url: 'https://github.com/pshycodr/codr', icon: Github },
      { label: 'NPM', url: 'https://www.npmjs.com/package/codrup', icon: ExternalLink },
    ],
    command: './codr --generate project',
  },
  {
    id: 'harmonix',
    title: 'Harmonix',
    description: 'Conversational AI music platform with Spotify integration',
    icon: Music,
    gradient: 'from-green-500/20 to-emerald-500/20',
    links: [
      { label: 'GitHub', url: 'https://github.com/pshycodr/song-recommender-chatbot', icon: Github },
    ],
    command: '♪ AI Music Discovery',
  },
  {
    id: 'lobango',
    title: 'Lobango',
    description: 'Comprehensive food ordering and table booking system with real-time admin dashboard, dynamic menu management, and payment integration.',
    icon: Utensils,
    gradient: 'from-orange-500/20 to-red-500/20',
    links: [
      { label: 'Live Demo', url: 'https://lobango.vercel.app', icon: ExternalLink },
      { label: 'Admin Panel', url: 'https://adminlobango.vercel.app/', icon: Settings },
    ],
    command: 'Restaurant Management',
    large: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)]"
      >
        Recent projects
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => {
          const Icon = project.icon;
          const isLarge = project.large;

          return (
            <motion.div
              key={project.id}
              variants={item}
              className={`card-hover overflow-hidden group ${isLarge ? 'lg:col-span-2' : ''}`}
            >
              <div className={`grid ${isLarge ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                {/* Project Visual */}
                <motion.div
                  className={`relative h-48 ${isLarge ? 'lg:h-auto' : ''} 
                           bg-gradient-to-br ${project.gradient} flex items-center justify-center
                           overflow-hidden`}
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="w-16 h-16 mx-auto mb-4 text-[rgb(var(--primary))]" />
                    </motion.div>
                    <div className="font-[family-name:var(--font-jetbrains)] text-sm text-[rgb(var(--text-secondary))]">
                      {project.command}
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[rgb(var(--text-secondary))] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => {
                      const LinkIcon = link.icon;
                      return (
                        <motion.a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 text-xs text-[rgb(var(--primary))] 
                                   hover:text-[rgb(var(--primary))]/80 transition-colors
                                   px-3 py-1.5 glass rounded-lg"
                        >
                          <LinkIcon className="w-3 h-3" />
                          <span>{link.label}</span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}