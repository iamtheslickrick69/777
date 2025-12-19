import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, X, Target, Zap, Rocket, Wrench, FolderOpen, FileText, Bot, CreditCard, Globe, Smartphone, Link } from 'lucide-react';

type ItemKey = 'strategy' | 'rapid' | 'launch' | 'solutions' | 'atlas' | null;

const subMenuItems = [
  { icon: FileText, label: 'SEO & Content', description: 'Search-optimized content strategy' },
  { icon: Bot, label: 'Custom AI Bots', description: 'Trained on your data' },
  { icon: CreditCard, label: 'Payment Systems', description: 'Stripe, subscriptions, invoicing' },
  { icon: Globe, label: 'Web Applications', description: 'Next.js, React, full-stack' },
  { icon: Smartphone, label: 'Mobile Apps', description: 'iOS & Android native' },
  { icon: Link, label: 'API Integrations', description: 'Connect any service' },
];

const serviceItems = [
  {
    key: 'strategy' as ItemKey,
    icon: Target,
    emoji: '🎯',
    title: 'Strategy & Discovery',
    tag: 'Service',
    shortDesc: 'Identify highest-impact AI opportunities',
    description: 'We analyze your business to find the highest-impact AI opportunities. No guesswork—just data-driven strategy.',
    capabilities: ['Business audit', 'Opportunity mapping', 'ROI projection', 'Implementation roadmap'],
    expandable: false,
  },
  {
    key: 'rapid' as ItemKey,
    icon: Zap,
    emoji: '⚡',
    title: 'Rapid Implementation',
    tag: 'Service',
    shortDesc: '48-72 hour deployment guarantee',
    description: 'From concept to production in 48-72 hours. We move fast because your competition does too.',
    capabilities: ['48-72hr deployment', 'Production-ready code', 'Full documentation', 'Handoff training'],
    expandable: false,
  },
  {
    key: 'launch' as ItemKey,
    icon: Rocket,
    emoji: '🚀',
    title: 'Launch & Scale',
    tag: 'Service',
    shortDesc: 'Production-ready with monitoring',
    description: 'Launch with confidence. We handle deployment, monitoring, and scaling so you can focus on growth.',
    capabilities: ['Cloud deployment', '24/7 monitoring', 'Auto-scaling', 'Performance optimization'],
    expandable: false,
  },
  {
    key: 'solutions' as ItemKey,
    icon: Wrench,
    emoji: '🛠️',
    title: 'Solutions',
    tag: 'Explore',
    shortDesc: 'View all capabilities →',
    description: '',
    capabilities: [],
    expandable: true,
  },
  {
    key: 'atlas' as ItemKey,
    icon: FolderOpen,
    emoji: '🗂️',
    title: 'Atlas',
    tag: 'Portfolio',
    shortDesc: 'View all projects →',
    description: '',
    capabilities: [],
    expandable: false,
    link: '/portfolio',
  },
];

export function AISection() {
  const [selectedItem, setSelectedItem] = useState<ItemKey>(null);
  const [expandedSolutions, setExpandedSolutions] = useState(false);

  const currentItem = serviceItems.find(item => item.key === selectedItem && !item.expandable && !item.link);

  const handleItemClick = (item: typeof serviceItems[0]) => {
    if (item.link) {
      window.location.href = item.link;
      return;
    }

    if (item.expandable) {
      setExpandedSolutions(!expandedSolutions);
      setSelectedItem(item.key);
      return;
    }

    setSelectedItem(selectedItem === item.key ? null : item.key);
    setExpandedSolutions(false);
  };

  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Side-by-side layout on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">🔥</span>
                <span className="text-sm font-medium text-gray-300">How We Help</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
                Built for Speed, Designed for Impact
              </h2>

              <p className="text-xl text-gray-400 max-w-xl mb-8">
                Choose your path. We handle the rest.
              </p>

              <button className="bg-white/10 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-white/20 transition-colors">
                Get started <span className="text-gray-400 ml-1">→</span>
              </button>
            </motion.div>

            {/* Command Palette - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#10A37F]/20 to-purple-500/20 rounded-xl blur-xl opacity-50" />

              <div className="relative bg-[#1A1C20] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                {/* Input Area */}
                <div className="p-4 border-b border-white/5 flex items-center gap-3">
                  <div className="w-[2px] h-5 bg-[#10A37F] animate-pulse" />
                  <span className="text-gray-400 text-lg">/What can we help with...</span>
                </div>

                {/* Items List */}
                <div className="p-2">
                  {serviceItems.map((item, index) => {
                    const isSelected = selectedItem === item.key;
                    const isExpanded = item.key === 'solutions' && expandedSolutions;

                    return (
                      <div key={item.key}>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.05 }}
                          onClick={() => handleItemClick(item)}
                          className={`group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#10A37F]/10 border-l-2 border-[#10A37F]'
                              : 'hover:bg-white/5 border-l-2 border-transparent hover:border-[#10A37F]/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.emoji}</span>
                            <span className={`font-medium transition-colors ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                              {item.title}
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded border ${
                              item.tag === 'Explore'
                                ? 'bg-[#10A37F]/10 text-[#10A37F] border-[#10A37F]/20'
                                : item.tag === 'Portfolio'
                                ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                : 'bg-white/5 text-gray-500 border-white/5'
                            }`}>
                              {item.tag}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {isSelected && !item.expandable && !item.link && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              >
                                <Check className="w-4 h-4 text-[#10A37F]" />
                              </motion.div>
                            )}
                            {item.expandable && (
                              <motion.div
                                animate={{ rotate: isExpanded ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight className="w-4 h-4 text-gray-500" />
                              </motion.div>
                            )}
                            {item.link && (
                              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-amber-400 transition-colors" />
                            )}
                          </div>
                        </motion.div>

                        {/* Expandable Sub-menu for Solutions */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pl-10 pr-2 py-2 space-y-1">
                                {subMenuItems.map((subItem, subIndex) => (
                                  <motion.div
                                    key={subItem.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.05 }}
                                    className="group flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#10A37F]/10 border-l-2 border-transparent hover:border-[#10A37F]/50"
                                  >
                                    <div className="flex items-center gap-3">
                                      <subItem.icon className="w-4 h-4 text-gray-500 group-hover:text-[#10A37F] transition-colors" />
                                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                        {subItem.label}
                                      </span>
                                    </div>
                                    <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
                                      {subItem.description}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Service Info Popup - appears when a service is selected */}
                <AnimatePresence>
                  {currentItem && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <div className="p-4 bg-white/5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{currentItem.emoji}</span>
                            <span className="font-semibold text-white">{currentItem.title}</span>
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
                            className="text-gray-500 hover:text-white transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">{currentItem.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {currentItem.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="text-xs px-2 py-1 rounded-full bg-[#10A37F]/10 text-[#10A37F] border border-[#10A37F]/20"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
