'use client';

import { motion } from 'framer-motion';
import { Target, Zap } from 'lucide-react';
import Image from 'next/image';

export default function CompanyOverview() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-kv-light overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute top-0 left-0 w-1 h-40 bg-kv-yellow" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-kv-yellow/5 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Stacked cards visual */}
              <div className="absolute inset-8 bg-kv-dark rounded-3xl rotate-3 shadow-2xl" />
              <div className="absolute inset-8 bg-kv-black rounded-3xl -rotate-2 shadow-2xl">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <Image src="/logo.png" alt="KIEY VERSE" width={200} height={80} className="h-24 w-auto" />
                  <div className="mt-6 w-16 h-1 bg-kv-yellow" />
                  <p className="mt-4 text-white/40 text-sm text-center">Manpower & Digital Growth</p>
                </div>
              </div>
              {/* Yellow accent block */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-kv-yellow rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-12 h-12 border-2 border-kv-purple rounded-xl" />
            </div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-kv-purple tracking-wider uppercase">
              Who We Are
            </span>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-kv-black leading-tight">
              Company{' '}
              <span className="relative inline-block">
                Overview
                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-kv-yellow" />
              </span>
            </h2>
            <p className="mt-6 text-lg text-kv-black/70 leading-relaxed">
              <strong className="text-kv-black">KIEYVERSE</strong> is a dynamic and fast-growing company
              offering <span className="text-kv-purple font-semibold">Skilled Manpower Resourcing</span> and{' '}
              <span className="text-kv-purple font-semibold">Digital Marketing Services</span> to businesses
              across India. Though only a few months old, we are built on a strong foundation of passion,
              expertise, and commitment to delivering impactful results.
            </p>
            <p className="mt-4 text-lg text-kv-black/70 leading-relaxed">
              We specialize in connecting the right people with the right opportunities, while also helping
              businesses grow their online presence through strategic, result-oriented digital marketing services.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-kv-yellow rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-kv-black" />
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] font-bold text-kv-black">Our Mission</h3>
                  <p className="mt-1 text-sm text-kv-black/60">
                    Empower companies with the right talent and digital solutions to thrive.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-kv-purple/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-kv-purple" />
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] font-bold text-kv-black">Our Drive</h3>
                  <p className="mt-1 text-sm text-kv-black/60">
                    Passion, expertise, and commitment to impactful results.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
