'use client';

import { motion } from 'framer-motion';
import { Github, Music, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const quickStats = [
  { label: 'Projects Built', value: '25+', color: 'text-[rgb(var(--accent))]' },
  { label: 'Coffee Consumed', value: '∞ cups', color: 'text-[rgb(var(--warning))]' },
  { label: 'Lines of Code', value: '50k+', color: 'text-[rgb(var(--primary))]' },
  { label: 'Years Experience', value: '3+', color: 'text-purple-400' },
];

const githubActivity = [
  { action: 'Updated Codr CLI', time: '2h ago', color: 'bg-[rgb(var(--accent))]' },
  { action: 'New commit to Harmonix', time: '1d ago', color: 'bg-[rgb(var(--primary))]' },
  { action: 'Created new repository', time: '3d ago', color: 'bg-purple-400' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function StatsSection() {
  const [coffeeClicks, setCoffeeClicks] = useState(0);

  const handleCoffeeClick = () => {
    setCoffeeClicks(prev => prev + 1);
    if (coffeeClicks === 4) {
      // Easter egg
      document.body.style.filter = 'sepia(30%)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 2000);
      setCoffeeClicks(0);
    }
  };

  return (
    <section className="py-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Quick Stats */}
        <motion.div variants={item} className="card-hover p-6 bg-gradient-to-br from-[rgb(var(--accent))]/10 to-[rgb(var(--primary))]/10">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[rgb(var(--accent))]" />
            <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
              Quick Stats
            </h3>
          </div>
          <div className="space-y-3">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={stat.label === 'Coffee Consumed' ? handleCoffeeClick : undefined}
                className={`flex justify-between items-center group ${
                  stat.label === 'Coffee Consumed' ? 'cursor-pointer' : ''
                }`}
              >
                <span className="text-sm text-[rgb(var(--text-secondary))]">
                  {stat.label}
                </span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`font-semibold ${stat.color}`}
                >
                  {stat.value}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Activity */}
        <motion.div variants={item} className="card-hover p-6 bg-gradient-to-br from-[rgb(var(--accent))]/10 to-transparent">
          <div className="flex items-center space-x-2 mb-4">
            <Github className="w-5 h-5" />
            <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
              GitHub Activity
            </h3>
          </div>
          <div className="space-y-3">
            {githubActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-sm cursor-pointer"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className={`w-2 h-2 rounded-full ${activity.color}`}
                />
                <span className="text-[rgb(var(--text-secondary))] flex-1">
                  {activity.action}
                </span>
                <span className="text-[rgb(var(--text-tertiary))] text-xs">
                  {activity.time}
                </span>
              </motion.div>
            ))}
            <div className="pt-2 text-center">
              <a
                href="https://github.com/pshycodr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[rgb(var(--primary))] hover:text-[rgb(var(--primary))]/80 
                         transition-colors inline-flex items-center space-x-1"
              >
                <span>View Full Profile</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Music Visualizer */}
        <motion.div variants={item} className="card-hover p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Music className="w-5 h-5 text-[rgb(var(--accent))]" />
            <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
              Currently Vibing
            </h3>
          </div>
          <div className="text-center">
            <div className="flex items-end justify-center h-16 gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: ['20%', '100%', '20%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.1,
                  }}
                  className="w-1 bg-gradient-to-t from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-full"
                />
              ))}
            </div>
            <div className="text-sm text-[rgb(var(--text-secondary))] mb-1">
              Lo-fi Hip Hop Beats
            </div>
            <div className="text-xs text-[rgb(var(--text-tertiary))] mb-3">
              Perfect for coding sessions
            </div>
            <a
              href="https://github.com/pshycodr/song-recommender-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]/80 
                       transition-colors inline-flex items-center space-x-1"
            >
              <span>Check out Harmonix</span>
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}