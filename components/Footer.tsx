'use client';

import { Mail, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-kv-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Image src="/logo.png" alt="KIEY VERSE" width={130} height={52} className="h-12 w-auto" />

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:kieyverse@gmail.com"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:bg-kv-yellow hover:text-kv-black hover:border-kv-yellow transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/kiey-verse/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:bg-kv-yellow hover:text-kv-black hover:border-kv-yellow transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/kieyverse.hq/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:bg-kv-yellow hover:text-kv-black hover:border-kv-yellow transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} KIEY VERSE. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Empowering Businesses with Manpower & Digital Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
