"use client"

import { useState } from 'react';
import { motion } from 'motion/react';
import { Inbox, Bot, Search, Shield, Edit, Check, Sparkles } from 'lucide-react';

export function FeatureSneakPeeks() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-[#0F172A] to-[#1E293B] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-[#38BDF8] opacity-5 blur-[120px] rounded-full"
          animate={{ scale: [1, 1.2, 1], x: ['0%', '10%', '0%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '20%', left: '20%' }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            See it in action
          </h2>
          <p className="text-lg text-[#94A3B8]">
            Focused previews of CommCove's key features
          </p>
        </motion.div>

        {/* Three Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Daily Digest Preview */}
          <DigestSneakPeek />

          {/* Action AI Preview */}
          <ActionAISneakPeek />

          {/* Search Preview */}
          <SearchSneakPeek />
        </div>
      </div>
    </section>
  );
}

function DigestSneakPeek() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-[#1E293B]/80 backdrop-blur-xl border border-[#334155] rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.borderColor = '#38BDF8';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.3)';
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.borderColor = '#334155';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      {/* Header */}
      <div className="p-4 border-b border-[#334155]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center">
            <Inbox className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-bold text-white">Daily Digest Preview</h3>
        </div>
      </div>

      {/* Content - 3 Mini Digest Items */}
      <div className="p-4 space-y-3">
        <DigestItem
          platform="slack"
          platformColor="#4A154B"
          source="Marketing Club"
          message="Meeting moved to Thursday 3pm"
          badge={{ text: 'Action Required', color: '#EF4444' }}
          delay={0.2}
        />
        <DigestItem
          platform="gmail"
          platformColor="#EA4335"
          source="CS 101"
          message="Assignment due Friday midnight"
          badge={{ text: 'Due Tomorrow', color: '#F59E0B' }}
          delay={0.3}
        />
        <DigestItem
          platform="groupme"
          platformColor="#00AFF0"
          source="Roommates"
          message="Utilities payment reminder"
          badge={{ text: 'Info', color: '#38BDF8' }}
          delay={0.4}
        />
      </div>
    </motion.div>
  );
}

function DigestItem({
  platform,
  platformColor,
  source,
  message,
  badge,
  delay,
}: {
  platform: string;
  platformColor: string;
  source: string;
  message: string;
  badge: { text: string; color: string };
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="p-3 bg-[#0F172A]/60 backdrop-blur-sm border border-[#334155]/50 rounded-lg hover:border-[#38BDF8]/30 transition-colors"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-3 h-3 rounded" style={{ backgroundColor: platformColor }} />
        <span className="text-xs font-semibold text-[#38BDF8]">{source}</span>
      </div>
      <p className="text-xs text-[#94A3B8] mb-2">{message}</p>
      <div
        className="inline-block px-2 py-0.5 text-xs rounded border"
        style={{
          backgroundColor: `${badge.color}20`,
          color: badge.color,
          borderColor: `${badge.color}30`,
        }}
      >
        {badge.text}
      </div>
    </motion.div>
  );
}

function ActionAISneakPeek() {
  const [isApproved, setIsApproved] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#1E293B]/80 backdrop-blur-xl border border-[#334155] rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative"
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.borderColor = '#38BDF8';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.3)';
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.borderColor = '#334155';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      {/* "Draft First, Execute Never" Badge */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#0F172A] border border-[#38BDF8]/50 rounded-full z-10">
        <Shield className="w-3 h-3 text-[#38BDF8]" />
        <span className="text-[10px] text-[#38BDF8] font-bold">Draft First, Execute Never</span>
      </div>

      {/* Header */}
      <div className="p-4 border-b border-[#334155]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-bold text-white">Action AI Sneak Peek</h3>
        </div>
      </div>

      {/* Content - ONE Draft Card */}
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          {/* Original Message */}
          <div className="p-3 bg-[#0F172A]/40 border border-[#334155]/50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded bg-[#EA4335]" />
              <span className="text-xs text-[#94A3B8]">Sarah Chen</span>
            </div>
            <p className="text-xs text-[#CBD5E1]">
              "Can you send me the Q1 budget breakdown?"
            </p>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-[#38BDF8]" />
            </motion.div>
          </div>

          {/* AI Draft */}
          <div className="p-3 bg-gradient-to-br from-[#38BDF8]/10 to-[#0EA5E9]/10 border border-[#38BDF8]/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-3 h-3 text-[#38BDF8]" />
              <span className="text-xs text-[#38BDF8] font-semibold">AI Draft</span>
            </div>
            <p className="text-xs text-[#CBD5E1] mb-3">
              "Hi Sarah, I've attached the Q1 budget breakdown. Let me know if you need any clarification!"
            </p>

            {/* Edit/Approve Buttons */}
            {!isApproved ? (
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-1.5 bg-[#334155] text-white text-xs font-semibold rounded hover:bg-[#475569] transition-colors flex items-center justify-center gap-1">
                  <Edit className="w-3 h-3" />
                  Edit
                </button>
                <button
                  onClick={() => setIsApproved(true)}
                  className="flex-1 px-3 py-1.5 bg-[#0EA5E9] text-white text-xs font-semibold rounded hover:bg-[#0284C7] transition-colors flex items-center justify-center gap-1"
                >
                  <Check className="w-3 h-3" />
                  Approve
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-2 bg-[#10B981]/20 border border-[#10B981]/30 rounded text-center"
              >
                <span className="text-xs text-[#10B981] font-semibold">✓ Approved & Sent</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function SearchSneakPeek() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-[#1E293B]/80 backdrop-blur-xl border border-[#334155] rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.borderColor = '#38BDF8';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.3)';
        setIsSearching(true);
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.borderColor = '#334155';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        setIsSearching(false);
      }}
    >
      {/* Header */}
      <div className="p-4 border-b border-[#334155]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-bold text-white">Search Preview</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            value="budget discussion"
            readOnly
            className="w-full px-3 py-2 bg-[#0F172A] border border-[#334155] rounded-lg text-xs text-white focus:outline-none focus:border-[#38BDF8] transition-colors"
            placeholder="Find anything..."
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38BDF8]" />
        </div>

        {/* Search Results */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSearching ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <SearchResult
            platform="Gmail"
            platformColor="#EA4335"
            text="Q1 budget approval discussion with Sarah"
            highlight="budget"
            delay={0.1}
          />
          <SearchResult
            platform="Slack"
            platformColor="#4A154B"
            text="Marketing Club budget meeting notes"
            highlight="budget"
            delay={0.2}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function SearchResult({
  platform,
  platformColor,
  text,
  highlight,
  delay,
}: {
  platform: string;
  platformColor: string;
  text: string;
  highlight: string;
  delay: number;
}) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="p-3 bg-[#0F172A]/60 backdrop-blur-sm border border-[#334155]/50 rounded-lg hover:border-[#38BDF8]/30 hover:bg-[#0F172A]/80 transition-all cursor-pointer"
    >
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-3 h-3 rounded" style={{ backgroundColor: platformColor }} />
        <span className="text-xs font-semibold text-[#38BDF8]">{platform}</span>
      </div>
      <p className="text-xs text-[#CBD5E1]">
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="bg-[#F59E0B]/30 text-[#FCD34D] px-0.5 rounded">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    </motion.div>
  );
}
