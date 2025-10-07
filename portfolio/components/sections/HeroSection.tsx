'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const [currentTime, setCurrentTime] = useState('');
  const [waveCount, setWaveCount] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(
        now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
      );
      const timeString = istTime.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(timeString + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleWave = () => {
    setWaveCount(prev => prev + 1);
    if (waveCount === 4) {
      // Easter egg on 5th wave
      const emoji = document.querySelector('.wave-emoji');
      if (emoji) {
        (emoji as HTMLElement).style.transform = 'scale(2) rotate(360deg)';
        setTimeout(() => {
          (emoji as HTMLElement).style.transform = '';
        }, 500);
      }
      setWaveCount(0);
    }
  };

  return (
    <section id="work" className="pt-32 pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Main Profile Card */}
        <motion.div variants={item} className="lg:col-span-2 card-hover p-6">
          {/* Location Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-32 rounded-xl mb-6 overflow-hidden bg-[rgb(var(--surface-2))]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-[rgb(var(--primary))]" />
            </div>
            <div className="absolute bottom-2 left-2 px-3 py-1 glass-strong rounded-lg text-xs">
              📍 Barsul, West Bengal, India
            </div>
          </motion.div>

          {/* Profile Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[rgb(var(--primary))] cursor-pointer"
              >
                <Image
                  src="https://avatars.githubusercontent.com/u/115141578?v=4"
                  alt="Anish Roy"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)]">
                    Hey, I&apos;m Anish Roy
                  </h1>
                  <motion.span
                    className="text-2xl cursor-pointer wave-emoji"
                    onClick={handleWave}
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    👋
                  </motion.span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent))]" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-[rgb(var(--accent))] animate-ping" />
                  </div>
                  <span className="text-sm text-[rgb(var(--accent))]">
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            <div className="glass px-4 py-2 rounded-xl">
              <div className="flex items-center space-x-2 text-xs font-[family-name:var(--font-jetbrains)] text-[rgb(var(--text-secondary))]">
                <Clock className="w-3 h-3" />
                <span>{currentTime || 'Loading...'}</span>
              </div>
              <div className="text-xs text-[rgb(var(--text-tertiary))] text-center mt-1">
                Barsul, India
              </div>
            </div>
          </div>
        </motion.div>

        {/* Weather Widget */}
        <motion.div
          variants={item}
          className="card-hover p-6 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="text-6xl mb-3"
            >
              🌤️
            </motion.div>
            <div className="text-2xl font-bold mb-1">28°C</div>
            <div className="text-sm text-[rgb(var(--text-secondary))]">
              Partly Cloudy
            </div>
            <div className="text-xs text-[rgb(var(--text-tertiary))] mt-1">
              West Bengal
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}