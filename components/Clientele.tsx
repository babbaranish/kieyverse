'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const clients = [
  { abbr: 'PP', name: 'PrelimsPass' },
  { abbr: 'DD', name: 'Drill Daily' },
  { abbr: '22', name: '2212' },
  { abbr: 'IR', name: 'IRA Creations' },
  { abbr: 'SK', name: 'Subbaiah Kavidhaigal' },
];

export default function Clientele() {
  return (
    <section id="clients" className="relative py-24 lg:py-32 bg-kv-dark overflow-hidden grain">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-kv-purple/5 rounded-full translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="text-sm font-bold text-kv-yellow tracking-wider uppercase">
            Trusted By
          </span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Clients And{' '}
            <span className="text-kv-yellow">Partners</span>
          </h2>
          <p className="mt-3 text-white/40 text-sm">
            People who personify our qualities that made us a success story.
          </p>
        </motion.div>

        {/* Logo cloud style grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mt-12">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:border-kv-yellow/30 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="w-10 h-10 bg-kv-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-kv-yellow/20 transition-colors duration-300">
                <span className="font-[var(--font-display)] font-extrabold text-kv-yellow text-sm">
                  {client.abbr}
                </span>
              </div>
              <span className="font-[var(--font-display)] font-bold text-white text-sm group-hover:text-kv-yellow transition-colors duration-300">
                {client.name}
              </span>
            </motion.div>
          ))}
          {/* NDA Clients card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: clients.length * 0.08 }}
            className="flex items-center gap-3 bg-kv-yellow/10 border border-kv-yellow/20 rounded-xl px-6 py-4"
          >
            <Lock className="w-5 h-5 text-kv-yellow" />
            <span className="font-[var(--font-display)] font-bold text-kv-yellow text-sm">
              NDA Clients
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
