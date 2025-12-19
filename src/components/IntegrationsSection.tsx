import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Figma, Slack, Terminal, Layers } from 'lucide-react';
const integrations = [{
  title: 'Powerful git workflows',
  desc: 'Automate pull requests and commit workflows',
  icon: <Github className="text-white" size={24} />,
  image: "/Screenshot_2025-12-18_at_6.07.29_PM.png",
  large: false
}, {
  title: 'Linear Mobile',
  desc: 'Move product work forward from anywhere',
  icon: <div className="w-6 h-6 rounded bg-purple-500" />,
  image: "/Screenshot_2025-12-18_at_6.07.56_PM.png",
  large: true
}, {
  title: 'Linear Asks',
  desc: 'Turn workplace requests into actionable issues',
  icon: <div className="w-6 h-6 rounded-full border-2 border-white" />,
  image: "/Screenshot_2025-12-18_at_6.08.04_PM.png",
  large: false
}, {
  title: 'Linear integrations',
  desc: '100+ ways to enhance your Linear experience',
  icon: <Layers className="text-white" size={24} />,
  image: null,
  large: false
}, {
  title: 'Figma integration',
  desc: 'Bridge the gap between engineering and design',
  icon: <Figma className="text-white" size={24} />,
  image: null,
  large: false
}];
export function IntegrationsSection() {
  return <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">
              Workflows and integrations
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-end">
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
          }} className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Collaborate across
              <br />
              tools and teams
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
          }} className="text-lg text-gray-400 max-w-md">
              Expand the capabilities of the Linear system with a wide variety
              of integrations that keep everyone in your organization aligned
              and focused.
            </motion.p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrations.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className={`group relative bg-[#121212] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors ${item.large ? 'md:col-span-2' : ''}`}>
              <div className="aspect-[4/3] w-full bg-[#1a1a1a] relative overflow-hidden">
                {item.image ? <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" /> : <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      {item.icon}
                    </div>
                  </div>}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    {item.title}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <ChevronRight size={16} className="text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>)}
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            <ChevronRight size={16} className="rotate-180" />
          </button>
          <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>;
}