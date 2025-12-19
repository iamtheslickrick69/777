import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Check, Search, Command } from 'lucide-react';
import { JokeModal } from './JokeModal';

const agents = [
  {
    name: 'Cursor',
    icon: Command,
    selected: true,
    joke: "Why did the cursor go to therapy? It had too many issues to point out!"
  },
  {
    name: 'GitHub Copilot',
    icon: Bot,
    selected: false,
    joke: "Why did GitHub Copilot become a comedian? It always knew how to complete the punchline!"
  },
  {
    name: 'Sentry',
    icon: Bot,
    selected: false,
    joke: "Why is Sentry so good at parties? Because it catches all the exceptions!"
  },
  {
    name: 'Leela',
    icon: Bot,
    selected: false,
    joke: "What did Leela say to the bug? I see right through you!"
  },
  {
    name: 'Codex',
    icon: Bot,
    selected: false,
    joke: "Why did Codex get promoted? It had all the right code-nections!"
  }
];

export function AISection() {
  const [currentJoke, setCurrentJoke] = useState<string | null>(null);

  const handleAgentClick = (joke: string) => {
    setCurrentJoke(joke);
  };

  return (
    <>
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <span className="text-sm font-medium text-blue-400">Artificial Intelligence</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
                AI-assisted product development
              </h2>

              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                Linear for Agents. Choose from a variety of AI agents and start delegating work, from code generation to
                other technical tasks.
              </p>

              <button className="bg-white/10 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-white/20 transition-colors">
                Learn more <span className="text-gray-400 ml-1">→</span>
              </button>
            </motion.div>

            {/* Command Palette Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative max-w-2xl mx-auto"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-50" />

              <div className="relative bg-[#1A1C20] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                {/* Input Area */}
                <div className="p-4 border-b border-white/5 flex items-center gap-3">
                  <div className="w-[2px] h-5 bg-blue-500 animate-pulse" />
                  <span className="text-gray-400 text-lg">/Assign to...</span>
                </div>

                {/* List */}
                <div className="p-2">
                  {agents.map((agent, index) => (
                    <motion.div
                      key={agent.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onClick={() => handleAgentClick(agent.joke)}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        agent.selected ? 'bg-white/10' : 'hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded flex items-center justify-center ${
                            agent.selected ? 'bg-white text-black' : 'bg-white/10 text-gray-400'
                          }`}
                        >
                          <agent.icon className="w-4 h-4" />
                        </div>
                        <span className={`font-medium ${agent.selected ? 'text-white' : 'text-gray-400'}`}>
                          {agent.name}
                        </span>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5">
                          Agent
                        </span>
                      </div>
                      {agent.selected && <Check className="w-4 h-4 text-white" />}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Joke Modal */}
      {currentJoke && <JokeModal joke={currentJoke} onClose={() => setCurrentJoke(null)} />}
    </>
  );
}
