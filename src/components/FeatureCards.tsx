import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot, Database } from 'lucide-react';

const services = [
  {
    title: 'Web Applications',
    description: 'Custom-built, conversion-optimized digital experiences',
    icon: Globe,
  },
  {
    title: 'Mobile Apps',
    description: 'Native & cross-platform apps that users actually download',
    icon: Smartphone,
  },
  {
    title: 'AI Agents',
    description: '24/7 autonomous workers that handle real business tasks',
    icon: Bot,
  },
];

export function FeatureCards() {
  return <section className="max-w-[1400px] mx-auto px-6 py-32 bg-black">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
          What We Build
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          From landing pages to enterprise AI — we build what moves your business forward.
        </p>
      </div>

      {/* Featured Card: Data Systems */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0cc0df]/20 to-[#FFFFFF]/20 rounded-md blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-[#141518] border border-white/10 rounded-md p-8 md:p-12 hover:border-white/20 transition-colors">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#0cc0df] to-[#FFFFFF] p-[2px] flex-shrink-0">
              <div className="w-full h-full bg-[#141518] rounded-md flex items-center justify-center">
                <Database className="w-8 h-8 text-[#0cc0df]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Data Systems</h3>
              <p className="text-lg text-gray-400">Architecture that handles millions of records seamlessly</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0cc0df]/10 to-[#FFFFFF]/10 rounded-md blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#141518] border border-white/10 rounded-md p-8 hover:border-white/20 transition-colors h-full">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-md bg-gradient-to-br from-[#0cc0df] to-[#FFFFFF] p-[2px]">
                  <div className="w-full h-full bg-[#141518] rounded-md flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-[#0cc0df]" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>;
}