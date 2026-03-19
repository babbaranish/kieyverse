'use client';

import { motion } from 'framer-motion';
import { Users, Megaphone, Briefcase, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Skilled Talent Supply',
    description: 'Pre-vetted talent across IT, Non-IT, and creative roles to help companies scale smoothly.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Complete digital marketing: SMM, paid ads, SEO, content writing, copywriting, and brand growth strategies.',
  },
  {
    icon: Briefcase,
    title: 'Business Consultation',
    description: 'Strategy, recruitment, branding, and digital transformation support.',
  },
  {
    icon: GraduationCap,
    title: 'Digital Learning',
    description: 'Practical digital courses that enhance skills and industry-ready knowledge.',
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-kv-light overflow-hidden">
      {/* Yellow accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kv-yellow via-kv-purple to-kv-yellow" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-kv-purple tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-kv-black">
            Our Core{' '}
            <span className="relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-kv-yellow" />
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-kv-black rounded-2xl p-8 overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-kv-yellow/5 to-transparent" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-kv-yellow/30 rounded-2xl transition-colors duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-kv-yellow/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-kv-yellow/20 transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-kv-yellow" />
                </div>
                <h3 className="font-[var(--font-display)] text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-kv-yellow/5 rounded-tl-3xl group-hover:bg-kv-yellow/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
