"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Edit3, Send, Trash2 } from 'lucide-react';

export function ActionAIPanelMockup() {
  const [activeTab, setActiveTab] = useState<'responses' | 'reminders' | 'tasks'>('responses');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[900px] mx-auto relative"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0F172A]/80 rounded-2xl blur-2xl" />

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-2xl p-8" style={{
        boxShadow: '0 0 60px rgba(56, 189, 248, 0.2), 0 20px 40px rgba(0, 0, 0, 0.5)',
      }}>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Action AI</h3>
            <p className="text-sm text-[#94A3B8] mb-3">Review and approve AI-drafted actions</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0EA5E9]/20 border border-[#0EA5E9]/30 rounded-full">
              <Shield className="w-3 h-3 text-[#0EA5E9]" />
              <span className="text-[10px] font-semibold text-[#0EA5E9]">Draft First, Execute Never</span>
            </div>
          </div>
          <button className="w-8 h-8 flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Tab
            label="Draft Responses"
            count={2}
            active={activeTab === 'responses'}
            onClick={() => setActiveTab('responses')}
          />
          <Tab
            label="Draft Reminders"
            count={1}
            active={activeTab === 'reminders'}
            onClick={() => setActiveTab('reminders')}
          />
          <Tab
            label="Draft Tasks"
            count={0}
            active={activeTab === 'tasks'}
            onClick={() => setActiveTab('tasks')}
          />
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'responses' && (
            <motion.div
              key="responses"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <DraftCard
                platform="Slack"
                platformColor="#4A154B"
                from="Sarah (Marketing Club)"
                originalMessage="Can you send me the budget spreadsheet by EOD?"
                draftResponse="Hey Sarah! Absolutely, I'll send over the budget spreadsheet by 5pm today. Just finishing up the last few line items. Let me know if you need anything else!"
                delay={0.1}
              />
              <DraftCard
                platform="Gmail"
                platformColor="#EA4335"
                from="Prof. Johnson (CS 101)"
                originalMessage="Please confirm your availability for office hours this Friday"
                draftResponse="Hi Prof. Johnson, Friday works great for me! I'm available anytime after 2pm. Would 3pm work for you?"
                delay={0.2}
              />
            </motion.div>
          )}

          {activeTab === 'reminders' && (
            <motion.div
              key="reminders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ReminderCard
                title="Marketing Club Budget Review"
                datetime="Tomorrow at 5:00 PM"
                source="Extracted from Slack: Marketing Club"
              />
            </motion.div>
          )}

          {activeTab === 'tasks' && (
            <motion.div
              key="tasks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="py-16 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#334155]/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#334155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-base text-[#94A3B8] mb-1">No draft tasks right now</div>
              <div className="text-sm text-[#64748B]">Action AI will suggest tasks from your messages</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Info Banner */}
        <div className="mt-6 p-3 bg-[#1E293B] border-l-2 border-[#F59E0B] rounded-lg flex items-start gap-3">
          <div className="w-5 h-5 flex-shrink-0 rounded-full bg-[#F59E0B]/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Your approval is required before any message is sent or action is taken.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Tab({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
        active
          ? 'bg-[#0EA5E9] text-white'
          : 'bg-[#334155] text-[#94A3B8] hover:bg-[#334155]/70'
      }`}
    >
      {label} ({count})
    </button>
  );
}

function DraftCard({
  platform,
  platformColor,
  from,
  originalMessage,
  draftResponse,
  delay,
}: {
  platform: string;
  platformColor: string;
  from: string;
  originalMessage: string;
  draftResponse: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-[#0F172A] border border-[#334155] rounded-xl p-5"
    >
      {/* Context */}
      <div className="text-[10px] text-[#64748B] uppercase tracking-wide mb-3">In response to:</div>
      
      {/* Original Message */}
      <div className="bg-[#1E293B] border border-[#334155] rounded-lg p-3 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded" style={{ background: platformColor }} />
          <span className="text-xs font-medium text-white">{from}</span>
        </div>
        <p className="text-xs text-[#94A3B8] leading-relaxed">{originalMessage}</p>
      </div>

      {/* AI Draft */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-semibold text-[#38BDF8]">AI-drafted response:</div>
          <button className="flex items-center gap-1 text-[10px] text-[#94A3B8] hover:text-[#38BDF8] transition-colors">
            <Edit3 className="w-3 h-3" />
            <span>Edit</span>
          </button>
        </div>
        <div className="bg-[#1E3A52] border border-[#0EA5E9]/30 rounded-lg p-4">
          <p className="text-sm text-white leading-relaxed">{draftResponse}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button className="px-4 py-2 text-xs font-medium text-[#94A3B8] border border-[#334155] rounded-lg hover:border-[#38BDF8] transition-colors">
          Edit Draft
        </button>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-xs font-medium text-[#EF4444] border border-[#334155] rounded-lg hover:border-[#EF4444] transition-colors flex items-center gap-1"
          >
            <Trash2 className="w-3 h-3" />
            Discard
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0EA5E9] rounded-lg hover:bg-[#38BDF8] transition-colors flex items-center gap-1"
            style={{ boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' }}
          >
            <Send className="w-3 h-3" />
            Approve & Send
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function ReminderCard({
  title,
  datetime,
  source,
}: {
  title: string;
  datetime: string;
  source: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0F172A] border border-[#334155] rounded-xl p-5"
    >
      <div className="text-[10px] text-[#64748B] uppercase tracking-wide mb-3">Suggested reminder:</div>
      
      <div className="bg-[#1E3A52] border border-[#0EA5E9]/30 rounded-lg p-4 mb-4">
        <div className="text-base font-semibold text-white mb-2">{title}</div>
        <div className="text-sm text-[#38BDF8] mb-2">{datetime}</div>
        <div className="text-xs text-[#94A3B8]">{source}</div>
      </div>

      <div className="flex items-center justify-between">
        <button className="px-4 py-2 text-xs font-medium text-[#94A3B8] border border-[#334155] rounded-lg hover:border-[#38BDF8] transition-colors">
          Edit Details
        </button>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-xs font-medium text-[#EF4444] border border-[#334155] rounded-lg hover:border-[#EF4444] transition-colors"
          >
            Discard
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0EA5E9] rounded-lg hover:bg-[#38BDF8] transition-colors"
            style={{ boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' }}
          >
            Add to Calendar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
