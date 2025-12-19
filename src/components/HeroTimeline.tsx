import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Circle } from 'lucide-react';
export function HeroTimeline() {
  return <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">
              Project and long-term planning
            </span>
            <ChevronRight size={12} className="text-gray-500" />
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Set the product direction
          </motion.h1>

          {/* Subheading */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Align your team around a unified product timeline. Plan, manage, and
            track all product initiatives with Linear's visual planning tools.
          </motion.p>
        </div>

        {/* 3D Visualization Container */}
        <div className="relative h-[600px] w-full perspective-[2000px] group">
          <motion.div initial={{
          opacity: 0,
          rotateX: 20,
          scale: 0.9
        }} animate={{
          opacity: 1,
          rotateX: 25,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.3
        }} className="relative w-full h-full transform-style-3d transition-transform duration-700 ease-out group-hover:rotate-x-[20deg]" style={{
          transform: 'rotateX(25deg) rotateY(0deg) rotateZ(-5deg)'
        }}>
            {/* Timeline Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10 pointer-events-none">
              {[...Array(12)].map((_, i) => <div key={i} className="h-full border-r border-white/20" />)}
            </div>

            {/* Date Markers */}
            <div className="absolute top-0 left-1/4 text-gray-500 text-sm font-mono transform -translate-x-1/2">
              AUG 3
            </div>
            <div className="absolute top-0 left-1/2 text-gray-500 text-sm font-mono transform -translate-x-1/2 bg-white/10 px-2 py-1 rounded">
              AUG 22
            </div>
            <div className="absolute top-0 left-3/4 text-gray-500 text-sm font-mono transform -translate-x-1/2">
              SEP
            </div>

            {/* Card 1: Realtime Inference */}
            <motion.div className="absolute top-20 left-[15%] w-[400px] bg-[#1a1a1a] border border-white/10 rounded-lg p-4 shadow-2xl" initial={{
            z: 0
          }} whileHover={{
            z: 20,
            scale: 1.05
          }} style={{
            transform: 'translateZ(0px)'
          }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-purple-500 rotate-45" />
                </div>
                <span className="text-gray-300 font-medium">
                  Realtime inference
                </span>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-purple-500" />
              </div>
            </motion.div>

            {/* Card 2: Beta Launch */}
            <motion.div className="absolute top-40 left-[35%] w-[500px] bg-[#1a1a1a] border border-white/10 rounded-lg p-4 shadow-2xl" initial={{
            z: 20
          }} whileHover={{
            z: 40,
            scale: 1.05
          }} style={{
            transform: 'translateZ(20px)'
          }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-green-500 rounded-full" />
                </div>
                <span className="text-gray-300 font-medium">Beta Launch</span>
                <span className="ml-auto text-xs text-gray-500">Q3 2024</span>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-green-500" />
              </div>
            </motion.div>

            {/* Card 3: RLHF Fine tuning */}
            <motion.div className="absolute top-64 left-[45%] w-[450px] bg-[#1a1a1a] border border-white/10 rounded-lg p-4 shadow-2xl" initial={{
            z: 40
          }} whileHover={{
            z: 60,
            scale: 1.05
          }} style={{
            transform: 'translateZ(40px)'
          }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-sm" />
                </div>
                <span className="text-gray-300 font-medium">
                  RLHF fine tuning
                </span>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-blue-500" />
              </div>
            </motion.div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <line x1="25%" y1="15%" x2="25%" y2="80%" stroke="white" strokeDasharray="4 4" />
              <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="white" strokeDasharray="4 4" />
            </svg>
          </motion.div>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">
              Manage projects end-to-end
            </h3>
            <p className="text-gray-400 mb-6">
              Consolidate specs, milestones, tasks, and other documentation in
              one centralized location.
            </p>

            {/* Mini UI Mockup */}
            <div className="bg-[#0d0d0d] rounded-lg p-4 border border-white/10">
              <div className="text-sm text-white font-medium mb-3">
                Project Overview
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Properties</span>
                  <span className="text-yellow-500 flex items-center gap-1">
                    ● In Progress
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Resources</span>
                  <span className="text-purple-400 flex items-center gap-1">
                    ❖ Exploration
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Milestones</span>
                  <span className="text-blue-400 flex items-center gap-1">
                    ♦ Design Review
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">
              Project updates
            </h3>
            <p className="text-gray-400 mb-6">
              Communicate progress and project health with built-in project
              updates.
            </p>

            {/* Mini UI Mockup */}
            <div className="bg-[#0d0d0d] rounded-lg p-4 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
              <div className="pl-3">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span className="text-green-500 text-xs font-medium">
                    On track
                  </span>
                </div>
                <div className="text-white text-sm font-medium">
                  We are ready to launch next Thursday
                </div>
                <div className="text-gray-500 text-xs mt-1">Sep 8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}