import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  {
    name: 'Golf & Recreation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2v14" strokeLinecap="round" />
        <path d="M12 2l6 4-6 4" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="12" cy="20" rx="4" ry="2" />
      </svg>
    ),
  },
  {
    name: 'Payments & Fintech',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 6v12" strokeLinecap="round" />
        <path d="M6 12h12" strokeLinecap="round" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Automotive',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2" strokeLinecap="round" />
        <path d="M12 19v2" strokeLinecap="round" />
        <path d="M3 12h2" strokeLinecap="round" />
        <path d="M19 12h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2 20h20" strokeLinecap="round" />
        <path d="M5 20v-8l7-6 7 6v8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20v-5h6v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Service Businesses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Retail & E-commerce',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
        <path d="M3 9l2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.79 1.1L21 9" />
        <path d="M12 3v6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function CompaniesSection() {
  return (
    <section className="py-32 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 text-white">
            Trusted Across Industries
          </h2>
          <p className="text-xl text-gray-400">
            From golf to fintech, we build AI that works.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-4 text-white/70 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                {industry.icon}
              </div>
              <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
