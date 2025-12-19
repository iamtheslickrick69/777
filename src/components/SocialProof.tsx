import React from 'react';
import { motion } from 'framer-motion';
const companies = [{
  name: 'OpenAI',
  font: 'font-sans'
}, {
  name: 'Cash App',
  font: 'font-serif'
}, {
  name: 'scale',
  font: 'font-mono'
}, {
  name: 'ramp',
  font: 'font-sans'
}, {
  name: 'Vercel',
  font: 'font-sans font-bold'
}, {
  name: 'coinbase',
  font: 'font-sans'
}, {
  name: 'BOOM',
  font: 'font-mono font-bold'
}, {
  name: 'CURSOR',
  font: 'font-sans font-bold'
}];
export function SocialProof() {
  return <section className="py-24 border-t border-white/5 bg-black">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
            Powering the world's best product teams.
          </h2>
          <p className="text-gray-500 text-lg">
            From next-gen startups to established enterprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 max-w-5xl mx-auto items-center opacity-60">
          {companies.map((company, index) => <motion.div key={company.name} initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }} className="flex justify-center items-center">
              <span className={`text-xl md:text-2xl text-white ${company.font}`}>
                {company.name === 'ramp' ? <span className="flex items-center gap-1">
                    ramp{' '}
                    <span className="w-3 h-3 bg-white rounded-full ml-1" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
              }}></span>
                  </span> : company.name === 'Vercel' ? <span className="flex items-center gap-2">
                    <span className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-white"></span>
                    Vercel
                  </span> : company.name}
              </span>
            </motion.div>)}
        </div>
      </div>
    </section>;
}