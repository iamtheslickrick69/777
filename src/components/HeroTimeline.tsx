import { motion } from 'framer-motion';
import { MessageSquare, Wrench, Rocket, RefreshCw } from 'lucide-react';

const processSteps = [
  {
    day: 'DAY 1',
    title: 'Discovery',
    description: 'One focused call to understand your vision and requirements',
    icon: MessageSquare,
    color: '#0EA5E9', // cyan
  },
  {
    day: 'DAY 2',
    title: 'Build',
    description: 'We design, code, and iterate with real-time updates',
    icon: Wrench,
    color: '#A855F7', // purple
  },
  {
    day: 'DAY 3',
    title: 'Launch',
    description: 'Your product goes live with full handoff and documentation',
    icon: Rocket,
    color: '#10B981', // green
  },
  {
    day: 'WEEK 1',
    title: 'Refine',
    description: 'Fine-tune based on feedback and real-world usage',
    icon: RefreshCw,
    color: '#F59E0B', // amber
    isWide: true,
  },
];

export function HeroTimeline() {
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
          <p className="text-2xl text-gray-400">
            Then We Perfect It.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Card Roadmap */}
        <div className="hidden md:block max-w-7xl mx-auto">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-[72px] left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 via-green-500/30 to-amber-500/30" />

            {/* Cards */}
            <div className="grid grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.day}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative ${step.isWide ? 'col-span-1' : ''}`}
                  >
                    {/* Card */}
                    <div
                      className="bg-[#0d0d0d] border-2 rounded-2xl p-6 hover:bg-[#1a1a1a] transition-all duration-300"
                      style={{
                        borderColor: step.color,
                        boxShadow: `0 0 40px ${step.color}20`,
                      }}
                    >
                      {/* Day Badge */}
                      <div
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg mb-4 font-bold text-sm tracking-wide"
                        style={{
                          backgroundColor: `${step.color}22`,
                          color: step.color,
                        }}
                      >
                        {step.day}
                      </div>

                      {/* Icon */}
                      <Icon
                        className="w-12 h-12 mb-4"
                        style={{ color: step.color }}
                        strokeWidth={1.5}
                      />

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow Connector */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-[72px] -right-3 z-10">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: step.color }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            className="text-black"
                          >
                            <path
                              d="M4 2L8 6L4 10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden space-y-6 max-w-md mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="bg-[#0d0d0d] border-2 rounded-2xl p-6"
                  style={{
                    borderColor: step.color,
                    boxShadow: `0 0 30px ${step.color}20`,
                  }}
                >
                  {/* Day Badge */}
                  <div
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg mb-4 font-bold text-sm tracking-wide"
                    style={{
                      backgroundColor: `${step.color}22`,
                      color: step.color,
                    }}
                  >
                    {step.day}
                  </div>

                  {/* Icon */}
                  <Icon
                    className="w-10 h-10 mb-4"
                    style={{ color: step.color }}
                    strokeWidth={1.5}
                  />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ color: step.color }}
                    >
                      <path
                        d="M12 5L12 19M12 19L7 14M12 19L17 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
