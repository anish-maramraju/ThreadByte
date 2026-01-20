import { Twitter, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative py-16 bg-[#0F172A] border-t border-[#334155] overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-[#38BDF8] opacity-5 blur-[100px] rounded-full"
          animate={{ x: ['-50%', '50%', '-50%'], y: ['0%', '30%', '0%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ bottom: '0%', left: '30%' }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.img
                src="/commcove-logo.png"
                alt="CommCove Logo"
                className="w-10 h-10 rounded-full object-cover"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-xl font-bold text-white">CommCove</span>
            </div>
            <p className="text-sm text-[#94A3B8] italic mb-4">From messages to momentum</p>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-[250px]">
              Your unified communication assistant for college and work life.
            </p>
          </motion.div>

          {/* Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase text-[#38BDF8] tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="#how-it-works"
                  className="text-sm text-[#94A3B8] hover:text-white transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  How It Works
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#features"
                  className="text-sm text-[#94A3B8] hover:text-white transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  Features
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-sm text-[#94A3B8] hover:text-white transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-sm text-[#94A3B8] hover:text-white transition-colors inline-block"
                  whileHover={{ x: 5 }}
                >
                  Terms of Service
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase text-[#38BDF8] tracking-wider mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
                aria-label="Twitter"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
            <motion.a
              href="mailto:hello@commcove.com"
              className="text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors inline-block"
              whileHover={{ x: 5 }}
            >
              hello@commcove.com
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-[#334155] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-[#94A3B8]">© {new Date().getFullYear()} CommCove. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}