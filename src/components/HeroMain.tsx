import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Globe, Database, Smartphone, Bot, X } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const oldWay = [
  '6-month discovery phases',
  'Endless stakeholder meetings',
  'Scope creep & change orders',
  'Billed by the hour',
];

const newWay = [
  'V1 delivered in 72 hours',
  'One kickoff call, then we ship',
  'Fixed scope, no surprises',
  'Pay for outcomes, not time',
];

const services = [
  {
    id: 'web',
    label: 'Web Apps',
    icon: Globe,
    color: '#0cc0df',
    headline: 'Sites That Actually Convert',
    features: ['Custom design & dev', 'CMS integration', 'Analytics & tracking', 'Admin dashboard'],
    proof: '40+ sites launched — average 3.2x increase in conversions',
  },
  {
    id: 'data',
    label: 'Data',
    icon: Database,
    color: '#a855f7',
    headline: 'Your Data, Working For You',
    features: ['Real-time dashboards', 'Automated reports', 'REST & GraphQL APIs', 'Admin portals'],
    proof: 'Currently powering 2M+ daily transactions across client systems',
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: Smartphone,
    color: '#10b981',
    headline: 'Apps People Actually Use',
    features: ['iOS + Android apps', 'Push notifications', 'Offline mode', 'Analytics built-in'],
    proof: '50K+ combined downloads across client apps',
  },
  {
    id: 'ai',
    label: 'AI Agents',
    icon: Bot,
    color: '#f59e0b',
    headline: 'Employees That Never Sleep',
    features: ['Custom-trained agent', 'Conversation flows', 'CRM integrations', 'Analytics dashboard'],
    proof: 'Agents handling 10K+ conversations/month for clients',
  },
];

export function HeroMain() {
  const [activeTab, setActiveTab] = useState<'old' | 'new'>('new');
  const [showMoreServices, setShowMoreServices] = useState(false);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 z-10">
        {/* Logo + Badge - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-28 -mt-16"
        >
          <motion.img
            src="/biglogo.png"
            alt="Haestus"
            className="h-20 md:h-24 w-auto"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="w-px h-12 bg-white/30"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#0cc0df]/30 bg-[#0cc0df]/5"
          >
            <span className="text-lg md:text-xl font-medium text-[#0cc0df]">#1 AI Implementation</span>
          </motion.div>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto w-full">
          {/* LEFT SIDE - Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:pr-10 lg:border-r lg:border-white/20 flex flex-col items-center text-center"
          >
            <div>
              {/* Headline */}
              <h1 className="text-4xl md:text-[2.8rem] lg:text-[3.4rem] font-medium tracking-tight text-white mb-4 whitespace-nowrap">
                The Age of Execution.
              </h1>
              <p className="text-xl text-gray-500 italic mb-12">
                show, don't tell
              </p>

              {/* Old vs New Toggle */}
              <div className="mb-8 flex flex-col items-center">
                <div className="inline-flex items-center p-1.5 rounded-xl bg-white/5 border border-white/10 mb-8">
                  <button
                    onClick={() => setActiveTab('old')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === 'old'
                        ? 'bg-white text-black'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    The Old Way
                  </button>
                  <button
                    onClick={() => setActiveTab('new')}
                    className={`flex items-center justify-center px-6 py-2.5 rounded-lg transition-all duration-300 ${
                      activeTab === 'new'
                        ? 'bg-white'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <img
                      src="/biglogo.png"
                      alt="Haestus"
                      className={`h-5 w-auto transition-all duration-300 ${
                        activeTab === 'new' ? 'invert' : 'opacity-50 hover:opacity-80'
                      }`}
                    />
                  </button>
                </div>

              {/* Toggle Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4 text-left"
                >
                  {(activeTab === 'old' ? oldWay : newWay).map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: activeTab === 'old' ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-3 text-lg ${
                        activeTab === 'old' ? 'text-gray-500' : 'text-gray-300'
                      }`}
                    >
                      {activeTab === 'old' ? (
                        <span className="w-2 h-2 rounded-full bg-red-500/50" />
                      ) : (
                        <Check className="w-5 h-5 text-emerald-500" />
                      )}
                      <span className={activeTab === 'new' ? 'text-white' : ''}>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Services + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:pl-10"
          >
            {/* Two Hero Service Cards */}
            <div className="grid grid-cols-2 gap-4 mb-4 max-w-2xl mx-auto">
              {/* Web Apps Card */}
              <div className="bg-[#1a1a1a]/50 border border-[rgba(255,255,255,0.03)] rounded-[20px] p-6 hover:bg-[#1f1f1f]/70 hover:border-white/10 transition-all">
                <Globe className="w-7 h-7 mb-3" style={{ color: services[0].color }} />
                <h3 className="text-base font-semibold text-white mb-3">{services[0].label}</h3>
                <div className="space-y-2 mb-4">
                  {services[0].features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#8b8b8b] text-xs">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: services[0].color }} />
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="text-[#666666] text-xs italic leading-relaxed">{services[0].proof}</p>
              </div>

              {/* AI Agents Card */}
              <div className="bg-[#1a1a1a]/50 border border-[rgba(255,255,255,0.03)] rounded-[20px] p-6 hover:bg-[#1f1f1f]/70 hover:border-white/10 transition-all">
                <Bot className="w-7 h-7 mb-3" style={{ color: services[3].color }} />
                <h3 className="text-base font-semibold text-white mb-3">{services[3].label}</h3>
                <div className="space-y-2 mb-4">
                  {services[3].features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#8b8b8b] text-xs">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: services[3].color }} />
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="text-[#666666] text-xs italic leading-relaxed">{services[3].proof}</p>
              </div>
            </div>

            {/* Data & Mobile Button */}
            <div className="flex justify-center mb-5">
              <button
                onClick={() => setShowMoreServices(true)}
                className="px-6 py-2.5 rounded-lg border border-[#555555] text-[#a8a8a8] text-sm font-medium hover:bg-white/10 hover:border-white/30 hover:text-white transition-all"
              >
                Data & Mobile →
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 max-w-2xl mx-auto">
              <button
                onClick={scrollToWork}
                className="flex-1 px-6 py-3 rounded-lg border border-[#404040] text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                See Our Work
              </button>
              <button
                onClick={scrollToContact}
                className="flex-1 px-6 py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Connect
              </button>
            </div>

            {/* Data & Mobile Modal */}
            <AnimatePresence>
              {showMoreServices && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-[#0d0d0d]/95 backdrop-blur-sm z-40"
                    onClick={() => setShowMoreServices(false)}
                  />

                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowMoreServices(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#1a1a1a] rounded-2xl p-6 max-w-2xl w-full border border-[#2a2a2a] relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Close button */}
                      <button
                        onClick={() => setShowMoreServices(false)}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#404040] flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        <X className="w-3.5 h-3.5 text-[#8b8b8b] hover:text-white" />
                      </button>

                      <h2 className="text-xl font-semibold text-white mb-6">More Services</h2>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Data Card */}
                        <div className="bg-[#0d0d0d]/50 border border-white/5 rounded-lg p-4">
                          <Database className="w-8 h-8 mb-3" style={{ color: services[1].color }} />
                          <h3 className="text-base font-semibold text-white mb-2">{services[1].headline}</h3>
                          <div className="space-y-1.5 mb-3">
                            {services[1].features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-[#8b8b8b] text-xs">
                                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: services[1].color }} />
                                {feature}
                              </div>
                            ))}
                          </div>
                          <p className="text-[#666666] text-[10px] italic">{services[1].proof}</p>
                        </div>

                        {/* Mobile Card */}
                        <div className="bg-[#0d0d0d]/50 border border-white/5 rounded-lg p-4">
                          <Smartphone className="w-8 h-8 mb-3" style={{ color: services[2].color }} />
                          <h3 className="text-base font-semibold text-white mb-2">{services[2].headline}</h3>
                          <div className="space-y-1.5 mb-3">
                            {services[2].features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-[#8b8b8b] text-xs">
                                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: services[2].color }} />
                                {feature}
                              </div>
                            ))}
                          </div>
                          <p className="text-[#666666] text-[10px] italic">{services[2].proof}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Before/After Comparison Trigger */}
        <div className="mt-12 flex justify-center">
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
}

