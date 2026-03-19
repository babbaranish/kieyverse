'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, ArrowLeftRight, Check } from 'lucide-react';

const serviceTypes = [
  {
    id: 'paid',
    icon: CreditCard,
    label: 'Direct Paid Services',
    tagline: 'Full-Scale Solutions',
    description: 'Our paid services cover manpower supply, digital marketing, branding, SEO/SEM, web development, content, campaigns, and consultations – delivering tailored, priority support for every client.',
    features: [
      'Manpower Supply & Staffing',
      'Full-stack Digital Marketing',
      'Brand Strategy & Development',
      'SEO / SEM Campaigns',
      'Web Development',
      'Content Creation & Copywriting',
      'Ad Campaign Management',
      'Business Consultation',
    ],
  },
  {
    id: 'barter',
    icon: ArrowLeftRight,
    label: 'Barter Services',
    tagline: 'Mutual Growth',
    description: 'This model allows service exchange instead of payments, offering limited manpower and digital marketing support for mutual growth – ideal for early-stage startups and collaborative ventures.',
    features: [
      'Service Exchange Model',
      'Limited Manpower Support',
      'Digital Marketing Basics',
      'Mutual Growth Partnership',
    ],
  },
];

export default function ServiceTypes() {
  const [active, setActive] = useState('paid');
  const current = serviceTypes.find((s) => s.id === active)!;

  return (
    <section className="relative py-24 lg:py-32 bg-kv-dark overflow-hidden grain">
      <div className="absolute top-0 right-0 w-96 h-96 bg-kv-yellow/5 rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-kv-yellow tracking-wider uppercase">
            How We Work
          </span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Our Types of{' '}
            <span className="text-kv-yellow">Services</span>
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex flex-col sm:flex-row bg-white/5 rounded-2xl sm:rounded-full p-1.5 border border-white/10 w-full sm:w-auto">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActive(type.id)}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl sm:rounded-full text-sm font-bold transition-all duration-300 ${
                  active === type.id
                    ? 'bg-kv-yellow text-kv-black shadow-lg shadow-kv-yellow/20'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <type.icon className="w-4 h-4" />
                {type.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
          >
            {/* Description */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-kv-yellow rounded-xl flex items-center justify-center">
                  <current.icon className="w-5 h-5 text-kv-black" />
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-white">
                    {current.label}
                  </h3>
                  <p className="text-xs text-kv-yellow font-medium">{current.tagline}</p>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="font-[var(--font-display)] font-bold text-white mb-6">
                What&apos;s Included
              </h4>
              <ul className="space-y-3">
                {current.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-kv-yellow/10 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-kv-yellow" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
