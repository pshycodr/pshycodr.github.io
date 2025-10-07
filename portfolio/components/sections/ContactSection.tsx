'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Twitter, Download, Calendar } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'royanish090@gmail.com',
    href: 'mailto:royanish090@gmail.com',
    color: 'text-[rgb(var(--primary))]',
  },
  {
    icon: Phone,
    label: '+91 9641815558',
    href: 'tel:+919641815558',
    color: 'text-[rgb(var(--accent))]',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/pshycodr',
    color: 'text-gray-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anish-roy-9076692a6/',
    color: 'text-[rgb(var(--primary))]',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/anishroy_dev',
    color: 'text-[rgb(var(--info))]',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ContactSection() {
  const handleDownloadResume = () => {
    // Add your resume download logic here
    console.log('Download resume');
  };

  return (
    <section id="contact" className="py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Main Contact Card */}
        <motion.div variants={item} className="lg:col-span-2 card-hover p-8">
          <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Let&apos;s work together
          </h3>
          <p className="text-[rgb(var(--text-secondary))] mb-6 leading-relaxed">
            I&apos;m always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to chat about tech,
            feel free to reach out.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="mailto:royanish090@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </motion.a>
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost inline-flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </motion.button>
            <motion.a
              href="https://calendly.com/anishroy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn inline-flex items-center space-x-2 
                       bg-[rgb(var(--accent))] text-white hover:bg-[rgb(var(--accent))]/90"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Call</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Connect Card */}
        <motion.div variants={item} className="card-hover p-8">
          <h3 className="text-xl font-semibold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Connect
          </h3>
          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-[rgb(var(--text-secondary))] 
                           hover:text-[rgb(var(--text-primary))] transition-colors group"
                >
                  <Icon className={`w-4 h-4 ${method.color} transition-colors`} />
                  <span className="text-sm">{method.label}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}