'use client';

import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';

const founders = [
  { name: 'Vijayalakshmi', title: 'Cofounder & CEO', image: '/vijay.png' },
  { name: 'Easwary', title: 'Cofounder & COO', image: '/easwar.png' },
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

        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card container */}
              <div className="relative rounded-3xl shadow-2xl shadow-black/30 group-hover:shadow-kv-yellow/10 transition-shadow duration-500">
                {/* Warm pastel photo background */}
                <div className="relative h-96 overflow-hidden rounded-3xl bg-kv-dark">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover object-[center_20%]"
                    priority
                  />
                </div>

              </div>

              {/* Floating glass card overlapping photo */}
              <div className="relative -mt-12 mx-4 mb-2 bg-white/[0.06] backdrop-blur-2xl border border-white/15 rounded-2xl p-5 text-center shadow-xl shadow-black/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-kv-yellow/60 to-transparent" />

                <h3 className="relative font-[var(--font-display)] text-xl font-bold text-white">
                  {founder.name}
                </h3>
                <p className="relative mt-1 text-white/50 text-sm font-medium">
                  {founder.title}
                </p>
                <a
                  href="https://www.linkedin.com/company/kiey-verse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex mt-3 w-9 h-9 bg-blue-600 rounded-xl items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-600/30"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-b from-kv-yellow/0 to-kv-yellow/0 group-hover:from-kv-yellow/5 group-hover:to-transparent rounded-3xl transition-all duration-500 -z-10 blur-xl" />
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
              Their aligned mindset and dedication to excellence led to the creation of KIEY VERSE – a company
              driven by ambition, integrity, and the desire to support businesses across industries.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed text-lg">
              Together, they bring diverse experiences, strong leadership, and a deep understanding of what
              today&apos;s businesses truly need – with close to{' '}
              <span className="text-kv-yellow font-semibold">10 years of combined experience</span> in
              Social Media Marketing, SEO, HR, and Legal expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
