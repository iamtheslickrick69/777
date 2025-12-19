import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'OpenAI' },
  { name: 'Cash App' },
  { name: 'Scale' },
  { name: 'Ramp' },
  { name: 'Vercel' },
  { name: 'Coinbase' },
  { name: 'Boom' },
  { name: 'Cursor' },
];

export function CompaniesSection() {
  return (
    <section className="flex flex-col items-center justify-center py-32 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] text-center text-white">
          Powering the world's best product teams.
        </h2>
        <p className="text-xl text-gray-400 mb-12 text-center">
          From next-gen startups to established enterprises.
        </p>
      </motion.div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 max-w-5xl mx-auto opacity-70 items-center justify-items-center">
        {logos.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="w-32 h-12 flex items-center justify-center grayscale brightness-200 contrast-200"
          >
            <span className="text-xl font-bold font-sans tracking-tight text-white">
              {logo.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
