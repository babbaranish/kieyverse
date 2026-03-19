'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-kv-light overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-kv-yellow/5 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-kv-purple/5 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-kv-purple tracking-wider uppercase">
            Reach Out
          </span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-kv-black">
            Let&apos;s Connect{' '}
            <span className="text-kv-yellow">With Us!</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="text-kv-black/70 text-lg leading-relaxed mb-10">
              We look forward to fostering a powerful and mutually enriching partnership.
              Get in touch with us today.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:anishbabbar1@gmail.com"
                className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-kv-black/5 hover:border-kv-yellow/40 hover:shadow-lg hover:shadow-kv-yellow/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-kv-yellow/10 rounded-xl flex items-center justify-center group-hover:bg-kv-yellow transition-colors duration-300">
                  <Mail className="w-5 h-5 text-kv-yellow group-hover:text-kv-black transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-kv-black/40 font-medium uppercase tracking-wider">Email</p>
                  <p className="font-[var(--font-display)] font-bold text-kv-black">anishbabbar1@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/kiey-verse/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-kv-black/5 hover:border-kv-yellow/40 hover:shadow-lg hover:shadow-kv-yellow/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs text-kv-black/40 font-medium uppercase tracking-wider">LinkedIn</p>
                  <p className="font-[var(--font-display)] font-bold text-kv-black">KIEY VERSE HQ</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-kv-black/5 p-8 shadow-xl shadow-black/[0.03]"
            >
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''} />
              <input type="hidden" name="subject" value="New Contact Form Submission — KIEY VERSE" />
              <input type="hidden" name="from_name" value="KIEY VERSE Website" />
              {/* Honeypot spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-kv-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-kv-light border border-kv-black/10 rounded-xl text-kv-black placeholder:text-kv-black/30 focus:outline-none focus:border-kv-yellow focus:ring-2 focus:ring-kv-yellow/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-kv-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-kv-light border border-kv-black/10 rounded-xl text-kv-black placeholder:text-kv-black/30 focus:outline-none focus:border-kv-yellow focus:ring-2 focus:ring-kv-yellow/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-kv-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-kv-light border border-kv-black/10 rounded-xl text-kv-black placeholder:text-kv-black/30 focus:outline-none focus:border-kv-yellow focus:ring-2 focus:ring-kv-yellow/20 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 bg-kv-yellow text-kv-black font-bold rounded-xl hover:bg-yellow-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-kv-black/30 border-t-kv-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle className="w-4 h-4" />
                      Failed — Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
