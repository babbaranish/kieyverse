'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-kv-dark grid-pattern">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-kv-yellow/20 blur-[120px] animate-blob" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-kv-purple/20 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-kv-yellow/10 blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-kv-yellow/40 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-kv-yellow" />
              <span className="text-sm font-medium text-kv-yellow tracking-wider uppercase">
                Talent & Digital Growth Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight"
            >
              Empowering{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Businesses</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-kv-yellow/30 -skew-x-3" />
              </span>{' '}
              with Talent &{' '}
              <span className="text-kv-yellow">Digital Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg"
            >
              Connecting the right people with the right opportunities, while
              helping businesses grow their online presence through strategic,
              result-oriented solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="group px-7 py-3.5 bg-kv-yellow text-kv-black font-bold rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Our Services
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border-2 border-white/20 text-white font-bold rounded-full hover:border-kv-yellow hover:text-kv-yellow hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right — Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-[460px] h-[460px]">
              {/* Main circle */}
              <div className="absolute inset-12 rounded-full border-2 border-kv-yellow/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-20 rounded-full border border-kv-purple/20 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Geometric shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute top-8 right-16 w-16 h-16 border-2 border-kv-yellow/40 rotate-45"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-16 left-8 w-12 h-12 bg-kv-purple/20 rounded-full"
              />
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-kv-yellow/10 rounded-2xl backdrop-blur-sm border border-kv-yellow/20"
              />

              {/* Center logo mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-[var(--font-display)] text-5xl font-extrabold">
                    <span className="logo-kiey">K</span>
                    <span className="logo-verse">V</span>
                  </div>
                  <div className="mt-1 w-8 h-0.5 bg-kv-yellow mx-auto" />
                </div>
              </div>

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-kv-yellow rounded-full shadow-lg shadow-kv-yellow/50" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-kv-purple rounded-full shadow-lg shadow-kv-purple/50" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-kv-yellow rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
