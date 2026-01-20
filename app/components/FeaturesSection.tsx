import { useState } from 'react';
import { motion } from 'motion/react';
import { Inbox, Network } from 'lucide-react';
import { ConvergenceAnimation } from './ConvergenceAnimation';

export function FeaturesSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-[#1E293B] to-[#0F172A] overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-[#0EA5E9] opacity-10 blur-[150px] rounded-full"
          animate={{ 
            x: ['-30%', '30%', '-30%'],
            y: ['-20%', '20%', '-20%'],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-[#38BDF8] opacity-10 blur-[150px] rounded-full"
          animate={{ 
            x: ['30%', '-30%', '30%'],
            y: ['20%', '-20%', '20%'],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Built for your workflow
          </motion.h2>
          <motion.p 
            className="text-lg text-[#94A3B8]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Everything you need to stay on top of your commitments
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Daily Digest - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 bg-[#1E293B] border border-[#334155] rounded-xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group"
            style={{
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#38BDF8';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.2), 0 12px 24px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#334155';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center">
                <Inbox className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Your Morning Digest</h3>
                <p className="text-[#94A3B8] text-sm">
                  Personalized summaries from all your platforms
                </p>
              </div>
            </div>
            <DigestPreview />
          </motion.div>

          {/* Cross-Platform Convergence - Futuristic Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 hover:border-[#38BDF8]/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Cross-Platform Intelligence</h3>
            </div>
            <p className="text-[#94A3B8] text-sm mb-4 relative z-10">
              All platforms converge into one intelligent feed
            </p>
            <div className="h-64 -mx-6 -mb-6">
              <ConvergenceAnimation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DigestPreview() {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="p-4 bg-[#0F172A] border border-[#334155] rounded-lg"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-[#4A154B] rounded" />
          <span className="text-[#38BDF8] text-sm font-semibold">Marketing Club</span>
        </div>
        <p className="text-[#94A3B8] text-xs mb-2">Meeting moved to Thursday 3pm...</p>
        <div className="inline-block px-2 py-0.5 bg-[#EF4444]/20 text-[#EF4444] text-xs rounded border border-[#EF4444]/30">
          Action Required
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="p-4 bg-[#0F172A] border border-[#334155] rounded-lg"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-[#EA4335] rounded" />
          <span className="text-[#38BDF8] text-sm font-semibold">CS 101</span>
        </div>
        <p className="text-[#94A3B8] text-xs mb-2">Assignment due Friday midnight...</p>
        <div className="inline-block px-2 py-0.5 bg-[#F59E0B]/20 text-[#F59E0B] text-xs rounded border border-[#F59E0B]/30">
          Due Tomorrow
        </div>
      </motion.div>
    </div>
  );
}