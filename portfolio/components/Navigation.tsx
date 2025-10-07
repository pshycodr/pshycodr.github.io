'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
    { label: 'work', href: '#work' },
    { label: 'projects', href: '#projects' },
    { label: 'resume', href: '#resume' },
    { label: 'contact', href: '#contact' },
];

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('work');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map((item) => item.href.replace('#', ''));
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'
                }`}
        >
            <div className="glass-strong px-6 py-3 rounded-full shadow-lg">
                <div className="flex items-center space-x-1">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.label}
                            onClick={() => scrollToSection(item.href)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative px-4 py-2 text-sm font-medium text-[rgb(var(--text-secondary))] 
                       hover:text-[rgb(var(--text-primary))] transition-colors duration-200
                       focus-ring rounded-full group"
                        >
                            {item.label}
                            {activeSection === item.href.replace('#', '') && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute inset-0 bg-[rgb(var(--primary))]/10 rounded-full"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                            <motion.div
                                className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[rgb(var(--primary))]
                          group-hover:w-full group-hover:left-0 transition-all duration-300"
                            />
                        </motion.button>
                    ))}
                    <div className="ml-2 pl-2 border-l border-[rgb(var(--border))]">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </motion.nav>
    )
};