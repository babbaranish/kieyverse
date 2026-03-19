'use client';

import { motion } from 'framer-motion';
import { Rocket, Factory, Car, BookOpen, ShoppingBag, Building2 } from 'lucide-react';

const industries = [
  { icon: Rocket, label: 'Startups (IT & Non-IT)' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: Car, label: 'Automobile' },
  { icon: BookOpen, label: 'EdTech' },
  { icon: ShoppingBag, label: 'Retail' },
  { icon: Building2, label: 'Real Estate' },
];

// Duplicate for seamless marquee
const marqueeItems = [...industries, ...industries, ...industries, ...industries];

export default function ClientIndustries() {
  return (
    <section className="relative py-24 lg:py-32 bg-kv-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-kv-purple tracking-wider uppercase">
            Our Reach
          </span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-kv-black">
            Industries We{' '}
            <span className="relative inline-block">
              Serve
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-kv-yellow" />
            </span>
          </h2>
          <p className="mt-4 text-kv-black/60 max-w-lg mx-auto">
            Despite being a young company, KIEYVERSE has rapidly grown and collaborates with clients across
            multiple regions in India.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-kv-light to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-kv-light to-transparent z-10" />

        <div className="flex animate-marquee">
          {marqueeItems.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4"
            >
              <div className="flex items-center gap-4 px-8 py-5 bg-white rounded-2xl border border-kv-black/5 shadow-sm hover:shadow-md hover:border-kv-yellow/30 transition-all duration-300 min-w-[240px]">
                <div className="w-12 h-12 bg-kv-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-kv-yellow" />
                </div>
                <span className="font-[var(--font-display)] font-bold text-kv-black whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
