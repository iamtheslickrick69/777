import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Zap, AlertTriangle } from 'lucide-react';

type TabType = 'ai' | 'old';

const content = {
  ai: {
    badge: 'GUARANTEED AI IMPLEMENTATION OR YOUR MONEY BACK',
    badgeIcon: Zap,
    headline: {
      line1: "WE DON'T TELL YOU WE'RE DIFFERENT,",
      line2: 'WE SHOW YOU IN 48 HOURS',
      highlight: '48 HOURS',
    },
    subtitle:
      "We deploy production AI in 48-72 hours—guaranteed to work or you don't pay. No discovery phases. No roadmaps. No revisions. Just results.",
    stats: [
      { value: '48-72hr', label: 'Deployment Time' },
      { value: '$0 Risk', label: 'Money-Back Guarantee' },
      { value: '50+', label: 'Successful Deploys' },
    ],
  },
  old: {
    badge: 'THIS IS HOW EVERYONE ELSE STILL WORKS',
    badgeIcon: AlertTriangle,
    headline: {
      line1: 'TRADITIONAL DEVELOPMENT:',
      line2: 'SLOW. EXPENSIVE. HOPE IT WORKS.',
      highlight: '',
    },
    subtitle:
      "Most agencies still operate like it's 2015. Months of discovery calls. Endless revisions. Vague timelines. Paying $50K+ to 'figure it out as they go.'",
    stats: [
      { value: '3-6 Months', label: 'Timeline Maybe' },
      { value: '$50K+', label: 'Just to Start' },
      { value: '?', label: 'Will It Even Work?' },
    ],
  },
};

export function HeroMain() {
  const [activeTab, setActiveTab] = useState<TabType>('ai');
  const currentContent = content[activeTab];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 text-center z-10 max-w-5xl">
        {/* Big Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-12"
        >
          <img src="/biglogo.png" alt="Haestus Logo" className="h-16 md:h-20 w-auto" />
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setActiveTab('old')}
            className={`px-6 py-3 rounded-full border text-sm uppercase tracking-wider font-light transition-all duration-300 ${
              activeTab === 'old'
                ? 'border-white/40 bg-white/10 text-white'
                : 'border-white/10 bg-transparent text-gray-500 hover:text-gray-300 hover:border-white/20'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-current" />
              THE OLD WAY
            </span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-3 rounded-full border text-sm uppercase tracking-wider font-light transition-all duration-300 ${
              activeTab === 'ai'
                ? 'border-white/40 bg-white/10 text-white'
                : 'border-white/10 bg-transparent text-gray-500 hover:text-gray-300 hover:border-white/20'
            }`}
          >
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              WITH AI
            </span>
          </button>
        </motion.div>

        {/* Badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`badge-${activeTab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <currentContent.badgeIcon className="w-5 h-5 text-white" />
            <span className="text-gray-300 font-medium text-sm uppercase tracking-wider">
              {currentContent.badge}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`headline-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 leading-[1.1] uppercase ${
              activeTab === 'old' ? 'text-gray-400' : 'text-white'
            }`}
          >
            {currentContent.headline.line1}
            <br />
            <span className="text-white">{currentContent.headline.line2}</span>
          </motion.h1>
        </AnimatePresence>

        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`subtitle-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {currentContent.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            Start Your Project
            <ChevronRight className="w-4 h-4" />
          </button>
          <a
            href="#"
            className="group flex items-center text-gray-400 hover:text-white transition-colors text-base h-12 px-8 rounded-full border border-white/10 hover:border-white/20"
          >
            View Our Work
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </motion.div>

        {/* Stats Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`stats-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20"
          >
            {currentContent.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronRight className="w-5 h-5 rotate-90 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
