"use client"

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Network } from 'lucide-react';

export function ConvergenceAnimation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Platform Nodes - Arc at Top */}
      <div className="absolute top-8 left-0 right-0">
        <div className="relative h-32 max-w-md mx-auto">
          {/* Slack - Left */}
          <motion.div
            className="absolute left-0 top-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PlatformNode platform="slack" color="#4A154B" label="S" />
          </motion.div>

          {/* Gmail - Center Top */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PlatformNode platform="gmail" color="#EA4335" label="G" />
          </motion.div>

          {/* GroupMe - Right */}
          <motion.div
            className="absolute right-0 top-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PlatformNode platform="groupme" color="#00AFF0" label="G" />
          </motion.div>
        </div>
      </div>

      {/* Connection paths (visible lines) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <motion.path
          d={getParticlePath('slack')}
          stroke="#4A154B"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.path
          d={getParticlePath('gmail')}
          stroke="#EA4335"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.path
          d={getParticlePath('groupme')}
          stroke="#00AFF0"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </svg>

      {/* Center Convergence Hub */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Single subtle pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#38BDF8]"
          animate={{
            scale: [1, 2],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />

        {/* Center hub with gradient */}
        <div
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center shadow-lg"
          style={{
            boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)',
          }}
        >
          <Network className="w-8 h-8 text-white" />
        </div>

        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-[#38BDF8] opacity-20 blur-xl" />
      </motion.div>

      {/* Flow continues down to digest card */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="bg-[#1E293B] border border-[#38BDF8]/30 rounded-lg px-6 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="text-sm text-[#38BDF8] font-semibold">Unified Digest</span>
          </div>
        </div>
      </motion.div>

      {/* Connection line from hub to digest */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="80%"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.4
          }}
          transition={{ 
            pathLength: { duration: 0.8, delay: 0.9 },
            opacity: { duration: 0.8, delay: 0.9 }
          }}
        />
      </svg>
    </div>
  );
}

function PlatformNode({ platform, color, label }: { platform: string; color: string; label: string }) {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg relative z-10"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 20px ${color}40`,
        }}
      >
        {label}
      </div>
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full blur-md opacity-50"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

// Helper functions for particle paths (curved bezier paths)
function getParticlePath(platform: 'slack' | 'gmail' | 'groupme'): string {
  // SVG path from platform to center (approximate positions)
  const paths = {
    slack: 'M 100 80 Q 150 150, 200 200', // Left to center
    gmail: 'M 200 80 Q 200 150, 200 200', // Top to center (straight with slight curve)
    groupme: 'M 300 80 Q 250 150, 200 200', // Right to center
  };

  return paths[platform];
}