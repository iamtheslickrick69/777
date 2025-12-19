import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
export function HeroSection() {
  return <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#0cc0df]/10 via-[#FFFFFF]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0cc0df" />
                  <stop offset="1" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-gray-300 font-medium">We Build What Others Can't</span>
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
        }} className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Build AI that{' '}
            <span className="bg-gradient-to-r from-[#0cc0df] to-[#FFFFFF] bg-clip-text text-transparent">
              actually works
            </span>
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
        }} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            We design and implement AI solutions that transform how businesses operate.{' '}
            <br className="hidden md:block" />
            From concept to deployment in weeks, not months.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button className="h-12 px-8 rounded-full bg-gradient-to-r from-[#0cc0df] to-[#FFFFFF] text-black font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Start Your Project
              <ChevronRight className="w-4 h-4" />
            </button>
            <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors text-base h-12 px-8 rounded-full border border-white/10 hover:border-white/20">
              View Our Work
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0cc0df] to-[#FFFFFF] bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-400 text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0cc0df] to-[#FFFFFF] bg-clip-text text-transparent mb-2">
                24hr
              </div>
              <div className="text-gray-400 text-sm md:text-base">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0cc0df] to-[#FFFFFF] bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400 text-sm md:text-base">Satisfaction</div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-sm">Scroll to explore</span>
            <ChevronRight className="w-5 h-5 rotate-90 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>;
}