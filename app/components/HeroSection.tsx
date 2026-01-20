"use client"

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Network, Sparkles, Tag, ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A] pt-16">
      {/* Animated Gradient Blobs - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-[#0EA5E9] opacity-20 blur-[120px]"
          animate={{
            x: ['-10%', '15%', '-10%'],
            y: ['-10%', '8%', '-10%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '20%' }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full bg-[#38BDF8] opacity-20 blur-[120px]"
          animate={{
            x: ['10%', '-15%', '10%'],
            y: ['5%', '-8%', '5%'],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '40%', right: '15%' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-[#7DD3FC] opacity-15 blur-[100px]"
          animate={{
            x: ['-5%', '18%', '-5%'],
            y: ['10%', '-12%', '10%'],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '10%', left: '30%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-20 text-center">
        {/* Launch Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
          style={{
            background: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)',
          }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-[#38BDF8]"
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-[#38BDF8]">Launching Late January 2026</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="mb-6">
            <motion.div
              className="text-[4.5rem] md:text-[5rem] lg:text-[6rem] font-bold leading-[1.1] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              From Messages To Momentum
            </motion.div>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-2xl text-[#94A3B8] mb-10 max-w-[600px] mx-auto"
        >
          Stop Scrambling In Your Workspace
        </motion.p>

        {/* Value Props Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] border border-[#334155] rounded-full"
            whileHover={{ scale: 1.05, borderColor: '#38BDF8' }}
            transition={{ duration: 0.2 }}
          >
            <Network className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-sm text-[#94A3B8]">Cross-Platform Intelligence</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] border border-[#334155] rounded-full"
            whileHover={{ scale: 1.05, borderColor: '#38BDF8' }}
            transition={{ duration: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-sm text-[#94A3B8]">AI-Powered Actions</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] border border-[#334155] rounded-full"
            whileHover={{ scale: 1.05, borderColor: '#38BDF8' }}
            transition={{ duration: 0.2 }}
          >
            <Tag className="w-4 h-4 text-[#38BDF8]" />
            <span className="text-sm text-[#94A3B8]">Privacy-First</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.button
            onClick={scrollToWaitlist}
            className="px-8 py-4 bg-[#0EA5E9] text-white text-xl font-semibold rounded-lg"
            style={{
              boxShadow: '0 0 30px rgba(14, 165, 233, 0.5)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(14, 165, 233, 0.7)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            aria-label="Join the waitlist for early access"
          >
            Join the Waitlist
          </motion.button>
          <motion.button
            onClick={scrollToHowItWorks}
            className="px-8 py-4 bg-transparent border-2 border-[#334155] text-white text-xl font-semibold rounded-lg"
            whileHover={{
              borderColor: '#38BDF8',
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            aria-label="Learn how CommCove works"
          >
            See How It Works
          </motion.button>
        </motion.div>

        {/* Animated Visual Element */}
        <MessageConvergenceAnimation />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ArrowDown className="w-6 h-6 text-[#38BDF8] opacity-60" />
      </motion.div>
    </section>
  );
}

function MessageConvergenceAnimation() {
  const [animationState, setAnimationState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative h-[300px] flex items-center justify-center"
    >
      {/* Platform Cards */}
      <motion.div
        className="absolute w-[200px] p-4 rounded-xl backdrop-blur-lg"
        style={{
          background: 'rgba(30, 41, 59, 0.8)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
        }}
        animate={{
          x: animationState === 0 ? -300 : animationState >= 2 ? 0 : -150,
          y: animationState >= 3 ? 0 : 0,
          opacity: animationState >= 3 ? 0 : 1,
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-[#4A154B] rounded flex items-center justify-center text-white text-xs font-bold">
            S
          </div>
          <span className="text-[#38BDF8] text-sm font-semibold">Slack</span>
        </div>
        <p className="text-[#94A3B8] text-xs">Team meeting update</p>
      </motion.div>

      <motion.div
        className="absolute w-[200px] p-4 rounded-xl backdrop-blur-lg"
        style={{
          background: 'rgba(30, 41, 59, 0.8)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
        }}
        animate={{
          x: animationState === 0 ? 0 : animationState >= 2 ? 0 : 0,
          y: animationState >= 3 ? 0 : 0,
          opacity: animationState >= 3 ? 0 : 1,
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-[#EA4335] rounded flex items-center justify-center text-white text-xs font-bold">
            G
          </div>
          <span className="text-[#38BDF8] text-sm font-semibold">Gmail</span>
        </div>
        <p className="text-[#94A3B8] text-xs">Action required: Budget approval</p>
      </motion.div>

      <motion.div
        className="absolute w-[200px] p-4 rounded-xl backdrop-blur-lg"
        style={{
          background: 'rgba(30, 41, 59, 0.8)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
        }}
        animate={{
          x: animationState === 0 ? 300 : animationState >= 2 ? 0 : 150,
          y: animationState >= 3 ? 0 : 0,
          opacity: animationState >= 3 ? 0 : 1,
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-[#00AFF0] rounded flex items-center justify-center text-white text-xs font-bold">
            G
          </div>
          <span className="text-[#38BDF8] text-sm font-semibold">GroupMe</span>
        </div>
        <p className="text-[#94A3B8] text-xs">Event reminder: Tomorrow 6pm</p>
      </motion.div>

      {/* Unified Digest Card */}
      <motion.div
        className="absolute w-[600px] max-w-[90vw] p-6 rounded-xl backdrop-blur-lg"
        style={{
          background: 'rgba(30, 41, 59, 0.9)',
          border: '1px solid #334155',
          boxShadow: '0 0 30px rgba(56, 189, 248, 0.2)',
        }}
        animate={{
          opacity: animationState >= 3 ? 1 : 0,
          scale: animationState >= 3 ? 1 : 0.8,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="space-y-3">
          <DigestItem platform="Slack" color="#4A154B" message="Team meeting update" badge="FYI" badgeColor="gray" />
          <DigestItem
            platform="Gmail"
            color="#EA4335"
            message="Action required: Budget approval"
            badge="Action Required"
            badgeColor="red"
          />
          <DigestItem
            platform="GroupMe"
            color="#00AFF0"
            message="Event reminder: Tomorrow 6pm"
            badge="Due Tomorrow"
            badgeColor="yellow"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function DigestItem({
  platform,
  color,
  message,
  badge,
  badgeColor,
}: {
  platform: string;
  color: string;
  message: string;
  badge: string;
  badgeColor: string;
}) {
  const badgeColors = {
    red: 'bg-[#EF4444]/20 text-[#EF4444] border-[#EF4444]/30',
    yellow: 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30',
    gray: 'bg-[#64748B]/20 text-[#94A3B8] border-[#64748B]/30',
  };

  return (
    <div className="flex items-center justify-between p-3 bg-[#0F172A] border border-[#334155] rounded-lg">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded" style={{ background: color }} />
        <div>
          <div className="text-[#38BDF8] text-sm font-semibold">{platform}</div>
          <div className="text-[#94A3B8] text-xs">{message}</div>
        </div>
      </div>
      <div className={`px-2 py-1 rounded text-xs border ${badgeColors[badgeColor as keyof typeof badgeColors]}`}>
        {badge}
      </div>
    </div>
  );
}