'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const clients = [
  'TITO',
  'TITO E-Learn',
  'Prelims Pass',
  '2212 Users',
  'Saturday Workshops',
  'Subbaiah Kavidhaigal',
  'Love.Us.Again.',
  'Bookthrift',
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
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-kv-yellow tracking-wider uppercase">
            Trusted By
          </span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our{' '}
            <span className="text-kv-yellow">Clientele</span>
          </h2>
          <p className="mt-3 text-white/40 text-sm">
            (Some clients under Non-Disclosure Agreement)
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-kv-yellow/30 hover:bg-white/[0.08] transition-all duration-300"
            >
              <p className="font-[var(--font-display)] font-bold text-white text-sm leading-tight group-hover:text-kv-yellow transition-colors duration-300">
                {client}
              </p>
            </motion.div>
          ))}
          {/* NDA Clients card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: clients.length * 0.08 }}
            className="bg-kv-yellow/10 border border-kv-yellow/20 rounded-xl p-6 text-center flex flex-col items-center justify-center gap-2"
          >
            <Lock className="w-5 h-5 text-kv-yellow" />
            <p className="font-[var(--font-display)] font-bold text-kv-yellow text-sm">
              NDA Clients
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
