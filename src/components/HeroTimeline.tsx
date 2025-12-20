import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Hammer, Send, TrendingUp, ArrowUpRight, X } from 'lucide-react';

const AlignIllustration = () => (
  <div className="relative w-full h-[168px] flex items-center justify-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-gradient-to-br from-cyan-500/15 via-cyan-400/8 to-transparent blur-2xl" />
    <div className="relative">
      <Target className="w-[72px] h-[72px] text-cyan-400" strokeWidth={1} />
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
    </div>
  </div>
);

const BuildIllustration = () => (
  <div className="relative w-full h-[168px] flex items-center justify-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-gradient-to-br from-purple-500/15 via-purple-400/8 to-transparent blur-2xl" />
    <div className="relative">
      <Hammer className="w-[72px] h-[72px] text-purple-400" strokeWidth={1} />
      <svg className="absolute inset-0 w-full h-full">
        <circle cx="50%" cy="50%" r="36" stroke="rgba(168,85,247,0.2)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
      </svg>
    </div>
  </div>
);

const DeliverIllustration = () => (
  <div className="relative w-full h-[168px] flex items-center justify-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-gradient-to-br from-emerald-500/15 via-emerald-400/8 to-transparent blur-2xl" />
    <div className="relative">
      <Send className="w-[72px] h-[72px] text-emerald-400" strokeWidth={1} />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-emerald-400" />
      <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-emerald-400/60" />
      <div className="absolute top-3 right-3 w-0.5 h-0.5 rounded-full bg-emerald-400/40" />
    </div>
  </div>
);

const RefineIllustration = () => (
  <div className="relative w-full h-[168px] flex items-center justify-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-gradient-to-br from-amber-500/15 via-amber-400/8 to-transparent blur-2xl" />
    <div className="relative">
      <TrendingUp className="w-[72px] h-[72px] text-amber-400" strokeWidth={1} />
      <svg className="absolute inset-0 w-full h-full">
        <path
          d="M36 9 Q54 18 63 36 T54 63"
          stroke="rgba(251,191,36,0.25)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  </div>
);

const features = [
  {
    id: 1,
    title: 'ALIGN',
    day: 'Day 1',
    shortDescription: 'One strategic call replaces 6 weeks of discovery.',
    longDescription: 'One strategic call replaces 6 weeks of discovery. We map your pain point to the exact solution. No endless stakeholder meetings. No scope creep. Just clarity.',
    accentColor: 'cyan',
    illustration: <AlignIllustration />,
    bulletPoints: [
      '50% paid • Build slot reserved',
      'Strategic alignment call',
      'Pain point → exact solution',
      'No 6-week discovery phase',
    ],
  },
  {
    id: 2,
    title: 'BUILD',
    day: 'Days 2-3',
    shortDescription: 'No revisions. No committees. No delays.',
    longDescription: 'We build what we aligned on. Period. No revision loops. No committee approvals. No change orders. 72 hours from start to finish.',
    accentColor: 'purple',
    illustration: <BuildIllustration />,
    bulletPoints: [
      '72-hour build window',
      'No revision loops',
      'No committee delays',
      'What we agreed, built',
    ],
  },
  {
    id: 3,
    title: 'DELIVER',
    day: 'Day 3',
    shortDescription: 'Your customers are using it immediately.',
    longDescription: 'Product goes live. Customers start using it. Real data starts flowing. You pay the second 50% when you see it work. Not before.',
    accentColor: 'emerald',
    illustration: <DeliverIllustration />,
    bulletPoints: [
      '50% paid • Product is live',
      'Customers start using it',
      'Real data flows immediately',
      'Payment on delivery',
    ],
  },
  {
    id: 4,
    title: 'REFINE',
    day: 'Days 4-33',
    shortDescription: '30 days of optimization included.',
    longDescription: '30 days of optimization based on actual usage. Competitors are still planning. You\'re improving based on real customer data. No additional cost.',
    accentColor: 'amber',
    illustration: <RefineIllustration />,
    bulletPoints: [
      'Included • No additional cost',
      '30 days optimization',
      'Based on real usage data',
      '4 weeks smarter than shelf products',
    ],
  },
];

const getAccentColorClasses = (accentColor: string) => {
  const colors: Record<string, string> = {
    cyan: 'bg-cyan-400',
    purple: 'bg-purple-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
  };
  return colors[accentColor] || 'bg-white';
};

const getAccentBorderGlow = (accentColor: string) => {
  const glows: Record<string, string> = {
    cyan: 'shadow-cyan-500/20',
    purple: 'shadow-purple-500/20',
    emerald: 'shadow-emerald-500/20',
    amber: 'shadow-amber-500/20',
  };
  return glows[accentColor] || '';
};

export function HeroTimeline() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            72-Hour Delivery.
          </h2>
          <p className="text-2xl text-gray-400">30-Day Advantage.</p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div key={feature.id}>
              {selectedFeature !== feature.id && (
                <motion.div
                  layoutId={`feature-${feature.id}`}
                  className={`relative bg-[#1a1a1a]/50 p-5 cursor-pointer group h-full border border-[rgba(255,255,255,0.03)] rounded-[20px] transition-all duration-300 hover:bg-[#1f1f1f]/70 hover:border-white/10 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1 ${getAccentBorderGlow(feature.accentColor)}`}
                  onClick={() => setSelectedFeature(feature.id)}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 20,
                    duration: 1.2,
                  }}
                >
                  <button className="absolute bottom-5 right-5 w-9 h-9 rounded-full border border-[#404040] flex items-center justify-center transition-all duration-200 group-hover:bg-white/10 group-hover:border-white/20">
                    <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-white transition-colors duration-200" />
                  </button>

                  <motion.div layoutId={`illustration-${feature.id}`}>
                    {feature.illustration}
                  </motion.div>

                  <div className="mt-4">
                    <motion.h3
                      layoutId={`title-${feature.id}`}
                      className="text-lg leading-tight h-12 flex items-center text-balance font-medium"
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="text-[#8b8b8b] text-sm mt-1.5 mb-3">
                      {feature.shortDescription}
                    </p>
                    <ul className="space-y-1.5 mt-3">
                      {feature.bulletPoints.slice(0, 3).map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-[#8b8b8b] text-sm"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${getAccentColorClasses(feature.accentColor)}`}
                          />
                          {point}
                        </li>
                      ))}
                      {feature.bulletPoints.length > 3 && (
                        <li className="text-[#666666] text-xs mt-1">
                          +{feature.bulletPoints.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            After 30 days: You own a system that's 4 weeks smarter than anything
            they can buy off the shelf.
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-[#0d0d0d]/95 backdrop-blur-sm z-40"
              onClick={() => setSelectedFeature(null)}
            />

            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedFeature(null)}
            >
              <motion.div
                layoutId={`feature-${selectedFeature}`}
                className="bg-[#1a1a1a] rounded-2xl p-6 md:p-10 max-w-2xl w-full max-h-[85vh] border border-[#2a2a2a] relative overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                  duration: 1.2,
                }}
              >
                {(() => {
                  const feature = features.find((f) => f.id === selectedFeature);
                  if (!feature) return null;

                  return (
                    <>
                      <button
                        onClick={() => setSelectedFeature(null)}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#404040] flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all group/close"
                      >
                        <X className="w-4 h-4 text-[#8b8b8b] group-hover/close:text-white transition-colors" />
                      </button>

                      <motion.div layoutId={`illustration-${feature.id}`}>
                        {feature.illustration}
                      </motion.div>

                      <motion.h3
                        layoutId={`title-${feature.id}`}
                        className="text-3xl font-bold mt-6 mb-2"
                      >
                        {feature.title}
                      </motion.h3>

                      <p className="text-[#666666] text-sm mb-6">
                        {feature.day}
                      </p>

                      <p className="text-[#a8a8a8] leading-relaxed mb-8">
                        {feature.longDescription}
                      </p>

                      <div className="space-y-3">
                        {feature.bulletPoints.map((point, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-[#a8a8a8]"
                          >
                            <span
                              className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${getAccentColorClasses(feature.accentColor)}`}
                            />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
