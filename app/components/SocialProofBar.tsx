import { motion } from 'motion/react';
import { GraduationCap, Users, Tag } from 'lucide-react';

export function SocialProofBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-12"
      style={{
        background: 'rgba(30, 41, 59, 0.5)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <GraduationCap className="w-5 h-5 text-[#38BDF8]" />
            </motion.div>
            <span className="text-sm text-[#94A3B8]">Built by students, for students</span>
          </motion.div>
          <div className="hidden md:block w-px h-6 bg-[#334155]" />
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Users className="w-5 h-5 text-[#38BDF8]" />
            </motion.div>
            <span className="text-sm text-[#94A3B8]">500+ on waitlist</span>
          </motion.div>
          <div className="hidden md:block w-px h-6 bg-[#334155]" />
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Tag className="w-5 h-5 text-[#38BDF8]" />
            </motion.div>
            <span className="text-sm text-[#94A3B8]">Free for students</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}