import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Database, Check, Lock, Server } from 'lucide-react';
const features = [{
  id: 'sync',
  title: 'Linear Sync Engine',
  desc: 'Built with a high-performance architecture and an obsessive focus on speed.',
  icon: <Zap size={20} />
}, {
  id: 'security',
  title: 'Enterprise-ready security',
  desc: 'Best-in-class security practices keep your work safe and secure at every layer.',
  icon: <Shield size={20} />
}, {
  id: 'scale',
  title: 'Engineered for scale',
  desc: 'Built for teams of all sizes. From early-stage startups to global enterprises.',
  icon: <Server size={20} />
}];

// Generate particle animations once at module load
const particleAnimations = Array.from({ length: 5 }, () => ({
  x: Math.random() * 100 - 50,
  y: Math.random() * 100 - 50
}));

export function TechnicalSection() {
  const [activeFeature, setActiveFeature] = useState('sync');
  return <section className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column: Content */}
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                Under the hood
              </span>
            </motion.div>

            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Built on strong
              <br />
              foundations
            </motion.h2>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="text-lg text-gray-400 mb-12">
              Linear is so simple to use, it's easy to overlook the wealth of
              complex technologies packed under the hood that keep Linear
              robust, safe, and blazing fast.
            </motion.p>

            <div className="space-y-8">
              {features.map(feature => <div key={feature.id} className={`group cursor-pointer transition-all duration-300 ${activeFeature === feature.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`} onClick={() => setActiveFeature(feature.id)}>
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 ${activeFeature === feature.id ? 'text-blue-400' : 'text-gray-500'}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                        {feature.title}
                        {activeFeature === feature.id && <motion.span layoutId="arrow" className="text-blue-400">
                            →
                          </motion.span>}
                      </h3>
                      <p className="text-gray-400 max-w-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Compliance Badges */}
            <div className="mt-16 pt-8 border-t border-white/10 flex gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400 font-mono">
                  SOC2
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  SOC 2 <Check size={10} className="text-blue-500" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400 font-mono">
                  GDPR
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  GDPR <Check size={10} className="text-blue-500" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400 font-mono">
                  HIPAA
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  HIPAA <Check size={10} className="text-blue-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visualization */}
          <div className="relative h-[600px] border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

            {/* Animated Content based on active feature */}
            <div className="absolute inset-0 flex items-center justify-center">
              {activeFeature === 'sync' && <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0
            }} className="relative w-64 h-64">
                  <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-ping" />
                  <div className="absolute inset-4 border border-blue-500/50 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Database size={48} className="text-blue-400" />
                  </div>
                  {/* Floating particles */}
                  {particleAnimations.map((particle, i) => <motion.div key={i} className="absolute w-2 h-2 bg-blue-400 rounded-full" animate={{
                x: [0, particle.x],
                y: [0, particle.y],
                opacity: [1, 0]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }} />)}
                </motion.div>}

              {activeFeature === 'security' && <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} className="relative">
                  <Lock size={64} className="text-green-400 mb-4 mx-auto" />
                  <div className="text-center font-mono text-green-400 text-sm">
                    ENCRYPTED_DATA_PACKET
                  </div>
                </motion.div>}

              {activeFeature === 'scale' && <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => <motion.div key={i} initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} transition={{
                delay: i * 0.05
              }} className="w-12 h-12 bg-white/5 border border-white/10 rounded" />)}
                </motion.div>}
            </div>

            {/* Technical Labels */}
            <div className="absolute bottom-4 left-4 text-[10px] text-gray-600 font-mono">
              LATENCY: 12ms
              <br />
              STATUS: ONLINE
            </div>
          </div>
        </div>
      </div>
    </section>;
}