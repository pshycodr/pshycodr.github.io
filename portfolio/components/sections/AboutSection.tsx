'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const techStack = [
  { name: 'JavaScript', icon: '🟨', tooltip: '5 years experience' },
  { name: 'React', icon: '⚛️', tooltip: 'React & Next.js expert' },
  { name: 'Node.js', icon: '🟢', tooltip: 'Backend & API development' },
  { name: 'Python', icon: '🐍', tooltip: 'AI & Machine Learning' },
];

const phrases = [
  'AI-powered developer tools...',
  'Real-time collaborative apps...',
  'Cloud-native solutions...',
  'Open source magic ✨',
  'Multi-agent systems...',
  'Next-gen web experiences...',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AboutSection() {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const phrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < phrase.length) {
        setCurrentPhrase(phrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentPhrase(phrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === phrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="py-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* About Card */}
        <motion.div variants={item} className="card-hover p-8">
          <p className="text-[rgb(var(--text-secondary))] leading-relaxed mb-6 text-balance">
            I&apos;m a passionate{' '}
            <strong className="text-[rgb(var(--text-primary))] font-semibold">
              Software Developer
            </strong>{' '}
            specializing in full-stack development and AI integration. I craft
            scalable applications with great attention to detail, focusing on
            modern tech stacks and innovative solutions.
          </p>

          <div className="grid grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                viewport={{ once: true }}
                className="group text-center cursor-pointer"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 mx-auto bg-[rgb(var(--surface-2))] rounded-xl 
                             flex items-center justify-center mb-2 
                             group-hover:bg-[rgb(var(--surface-3))] transition-colors"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                  </motion.div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 
                                group-hover:opacity-100 transition-opacity pointer-events-none
                                bg-[rgb(var(--card))] text-xs px-2 py-1 rounded whitespace-nowrap
                                shadow-lg border border-[rgb(var(--border))]">
                    {tech.tooltip}
                  </div>
                </div>
                <span className="text-xs text-[rgb(var(--text-tertiary))]">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus Card */}
        <motion.div variants={item} className="card-hover p-8">
          <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Currently Building
          </h3>
          
          <div className="font-[family-name:var(--font-jetbrains)] text-sm text-[rgb(var(--primary))] mb-6 min-h-[24px]">
            <span>{currentPhrase}</span>
            <span className="typing-cursor" />
          </div>

          <div className="space-y-2">
            {[
              '• Multi-agent AI systems',
              '• Real-time collaborative apps',
              '• Cloud-native solutions',
              '• Open source magic ✨',
            ].map((focus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5, color: 'rgb(var(--primary))' }}
                viewport={{ once: true }}
                className="text-sm text-[rgb(var(--text-secondary))] cursor-pointer 
                         transition-all duration-200"
              >
                {focus}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}