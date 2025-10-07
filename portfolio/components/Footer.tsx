'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Footer() {
  const [visitorCount, setVisitorCount] = useState<{
    total: number;
    unique: number;
  } | null>(null);
  const [coffeeClicks, setCoffeeClicks] = useState(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const res = await fetch('https://visitor-tracker.aroy262692.workers.dev/visit');
        if (res.ok) {
          const data = await res.json();
          setVisitorCount({
            total: data.totalVisitors,
            unique: data.totalUniqueVisitors,
          });
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);

  const handleCoffeeClick = () => {
    setCoffeeClicks((prev) => prev + 1);
    if (coffeeClicks === 4) {
      // Easter egg
      document.body.style.filter = 'sepia(30%) hue-rotate(15deg)';
      setTimeout(() => {
        document.body.style.filter = '';
      }, 2000);
      setCoffeeClicks(0);
    }
  };

  return (
    <footer className="mt-16 pt-8 border-t border-[rgb(var(--border))]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-[rgb(var(--text-tertiary))]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p>
            © {new Date().getFullYear()} Anish Roy. Built with{' '}
            <motion.span
              onClick={handleCoffeeClick}
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              className="inline-block cursor-pointer"
            >
              ☕
            </motion.span>{' '}
            and lots of curiosity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4"
        >
          {visitorCount && (
            <div className="font-[family-name:var(--font-jetbrains)] text-xs">
              {visitorCount.total} visits • {visitorCount.unique} unique
            </div>
          )}
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full"
            />
            <span className="text-xs">Site is live</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}