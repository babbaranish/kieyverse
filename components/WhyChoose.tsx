'use client';

import { motion } from 'framer-motion';
import { Zap, DollarSign, TrendingUp, Layers } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Faster Hiring Process',
    description: 'Quick turnaround on recruitment with pre-vetted, ready-to-work candidates.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Cost-effective solutions tailored for startups and growing businesses.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Lead Generation',
    description: 'Data-driven strategies that consistently deliver qualified leads and results.',
  },
  {
    icon: Layers,
    title: 'End-to-End Support',
    description: 'Complete business growth support from hiring to marketing to consultation.',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 lg:py-32 bg-kv-dark overflow-hidden grain">
      <div className="absolute top-0 left-0 right-0 h-px bg-kv-yellow/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-kv-yellow tracking-wider uppercase">
            Our Edge
          </span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Why Choose{' '}
            <span className="text-kv-yellow">KIEYVERSE</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group text-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-kv-yellow/30 transition-all duration-500"
            >
              <div className="mx-auto w-14 h-14 bg-kv-yellow/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-kv-yellow group-hover:scale-110 transition-all duration-500">
                <reason.icon className="w-7 h-7 text-kv-yellow group-hover:text-kv-black transition-colors duration-500" />
              </div>
              <h3 className="font-[var(--font-display)] text-lg font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
