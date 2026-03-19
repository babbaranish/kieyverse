'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const founders = [
  { name: 'Vijayalakshmi', title: 'Co-Founder' },
  { name: 'Easwary', title: 'Co-Founder' },
];

export default function Founders() {
  return (
    <section className="relative py-24 lg:py-32 bg-kv-dark overflow-hidden grain">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-kv-purple/5 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-kv-yellow/5 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-kv-yellow tracking-wider uppercase">
            Leadership
          </span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            About the{' '}
            <span className="text-kv-yellow">Founders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-kv-yellow/30 transition-all duration-500"
            >
              {/* Avatar placeholder */}
              <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-kv-purple to-kv-purple/50 ring-4 ring-kv-purple/30 group-hover:ring-kv-yellow/40 transition-all duration-500 flex items-center justify-center mb-6">
                <User className="w-12 h-12 text-white/70" />
              </div>
              <h3 className="font-[var(--font-display)] text-2xl font-bold text-white">
                {founder.name}
              </h3>
              <div className="mt-2 inline-block px-4 py-1 bg-kv-yellow text-kv-black text-xs font-bold rounded-full uppercase tracking-wider">
                {founder.title}
              </div>
              {/* Accent corner */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-kv-yellow/30 rounded-full group-hover:bg-kv-yellow transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10">
            <div className="absolute -top-3 left-8 w-6 h-6 bg-kv-yellow rotate-45" />
            <p className="text-white/70 leading-relaxed text-lg">
              KIEY VERSE was founded by two passionate women entrepreneurs from different states of India.
              As former colleagues with a shared vision, they aspired to build something meaningful and impactful.
              Their aligned mindset and dedication to excellence led to the creation of KIEY VERSE — a company
              driven by ambition, integrity, and the desire to support businesses across industries.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed text-lg">
              Together, they bring diverse experiences, strong leadership, and a deep understanding of what
              today&apos;s businesses truly need — with close to{' '}
              <span className="text-kv-yellow font-semibold">10 years of combined experience</span> in
              Social Media Marketing, SEO, HR, and Legal expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
