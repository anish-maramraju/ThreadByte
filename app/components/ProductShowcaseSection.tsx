import { motion } from 'motion/react';
import { DailyDigestMockup } from '@/app/components/DailyDigestMockup';
import { ActionAIPanelMockup } from '@/app/components/ActionAIPanelMockup';

export function ProductShowcaseSection() {
  return (
    <section className="relative py-20 bg-[#0F172A] overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-[#0EA5E9] opacity-5 blur-[120px] rounded-full"
          animate={{ 
            x: ['-40%', '40%', '-40%'],
            y: ['0%', '30%', '0%']
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '30%', left: '50%' }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Daily Digest Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Your morning digest, unified
              </h2>
              <p className="text-xl text-[#94A3B8] max-w-[600px] mx-auto">
                Everything you need to know, from all your platforms, in one clean interface
              </p>
            </motion.div>
          </div>
          <DailyDigestMockup />
        </motion.div>

        {/* Action AI Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI that drafts, you decide
              </h2>
              <p className="text-xl text-[#94A3B8] max-w-[600px] mx-auto">
                Review AI-drafted responses and actions before anything is sent
              </p>
            </motion.div>
          </div>
          <ActionAIPanelMockup />
        </motion.div>
      </div>
    </section>
  );
}
