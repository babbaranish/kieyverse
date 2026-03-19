'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 10, suffix: '+', label: 'Years Combined Experience' },
  { value: 8, suffix: '+', label: 'Active Clients' },
  { value: 4, suffix: '', label: 'Core Service Areas' },
];

export default function Vision() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-kv-black overflow-hidden">
      {/* Full-width yellow accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-kv-yellow/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-kv-yellow/20" />

      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Large decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[var(--font-display)] text-[12rem] font-extrabold text-white/[0.02] whitespace-nowrap select-none pointer-events-none">
        VISION
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-1 bg-kv-yellow mx-auto mb-8" />
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
            Our vision is to grow beyond the industries we currently serve and extend our services{' '}
            <span className="text-kv-yellow">globally.</span>
          </h2>
          <p className="mt-8 text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in long-term business relationships built on mutual trust, transparency,
            and value-driven execution.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-kv-yellow">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-white/40 text-sm sm:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
