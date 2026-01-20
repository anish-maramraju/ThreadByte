"use client"

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface BrowserTab {
  id: string;
  title: string;
  color: string;
  type: 'spam' | 'todo' | 'email' | 'job' | 'social' | 'meeting' | 'other';
  position: { x: number; y: number };
}

export function AppVortexSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isInView && !animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [isInView, animationTriggered]);

  const browserTabs: BrowserTab[] = [
    // Spam emails
    {
      id: 'spam1',
      title: '🚨 URGENT: Account Suspended - Act Now!!!',
      color: '#EF4444',
      type: 'spam',
      position: { x: 80, y: 120 },
    },
    {
      id: 'spam2',
      title: 'You Won $1,000,000! Click Here!!!',
      color: '#F59E0B',
      type: 'spam',
      position: { x: 150, y: 200 },
    },
    {
      id: 'spam3',
      title: 'Cheap Meds - 90% Off - Limited Time',
      color: '#EF4444',
      type: 'spam',
      position: { x: 220, y: 150 },
    },
    // Email overload
    {
      id: 'email1',
      title: 'Inbox (247) - Gmail',
      color: '#EA4335',
      type: 'email',
      position: { x: 320, y: 110 },
    },
    {
      id: 'email2',
      title: 'Inbox (89) - Work Email',
      color: '#0078D4',
      type: 'email',
      position: { x: 400, y: 180 },
    },
    {
      id: 'email3',
      title: 'Unread Messages (143) - Outlook',
      color: '#0078D4',
      type: 'email',
      position: { x: 480, y: 130 },
    },
    // Todo lists chaos
    {
      id: 'todo1',
      title: 'Tasks: Fix bug, Review PR, Update docs, Call mom...',
      color: '#10B981',
      type: 'todo',
      position: { x: 100, y: 320 },
    },
    {
      id: 'todo2',
      title: 'Todo: Finish assignment, Study for exam, Laundry...',
      color: '#06B6D4',
      type: 'todo',
      position: { x: 180, y: 390 },
    },
    {
      id: 'todo3',
      title: 'Reminders: Dentist, Groceries, Pay rent, Call back...',
      color: '#14B8A6',
      type: 'todo',
      position: { x: 260, y: 350 },
    },
    // Job applications
    {
      id: 'job1',
      title: 'Application Status - Google Careers',
      color: '#4285F4',
      type: 'job',
      position: { x: 560, y: 160 },
    },
    {
      id: 'job2',
      title: 'LinkedIn - 47 New Job Matches',
      color: '#0A66C2',
      type: 'job',
      position: { x: 640, y: 230 },
    },
    {
      id: 'job3',
      title: 'Indeed - Application Submitted',
      color: '#2164F3',
      type: 'job',
      position: { x: 720, y: 190 },
    },
    // Social/Meeting chaos
    {
      id: 'social1',
      title: 'Slack - 23 channels, 156 unread',
      color: '#4A154B',
      type: 'social',
      position: { x: 360, y: 420 },
    },
    {
      id: 'social2',
      title: 'Discord - 12 servers, 89 pings',
      color: '#5865F2',
      type: 'social',
      position: { x: 440, y: 470 },
    },
    {
      id: 'meeting1',
      title: 'Meeting Notes 3/15, 3/16, 3/17, 3/18, 3/19...',
      color: '#6366F1',
      type: 'meeting',
      position: { x: 520, y: 430 },
    },
    // More chaos
    {
      id: 'other1',
      title: 'Canvas - 8 Assignments Due This Week',
      color: '#DC2626',
      type: 'other',
      position: { x: 600, y: 360 },
    },
    {
      id: 'other2',
      title: 'GroupMe - 5 groups, 234 messages',
      color: '#00AFF0',
      type: 'other',
      position: { x: 680, y: 320 },
    },
    {
      id: 'other3',
      title: 'WhatsApp Web - 43 chats',
      color: '#25D366',
      type: 'other',
      position: { x: 760, y: 390 },
    },
    {
      id: 'other4',
      title: 'Teams - 9 meetings today',
      color: '#6264A7',
      type: 'other',
      position: { x: 120, y: 490 },
    },
    {
      id: 'other5',
      title: 'Notion - Project Dashboard (Last updated 2 weeks ago)',
      color: '#000000',
      type: 'other',
      position: { x: 620, y: 520 },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0F172A] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            One app to replace them all
          </h2>
          <p className="text-xl text-[#94A3B8]">
            Stop juggling tabs. Start using CommCove.
          </p>
        </motion.div>

        {/* Browser Window Animation Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
          style={{ maxWidth: '1200px', height: '750px' }}
        >
          {/* Browser Frame */}
          <div className="relative w-full h-full">
            {/* Screen */}
            <div
              className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl overflow-visible shadow-2xl"
              style={{
                width: '100%',
                height: '90%',
                border: '12px solid #1a1a1a',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* macOS Menu Bar */}
              <div className="absolute top-0 left-0 right-0 h-7 bg-[#1a1a1a]/90 backdrop-blur-md flex items-center justify-between px-4 border-b border-white/10 z-[100]">
                <div className="flex items-center gap-3 text-[10px] text-white/60">
                  <span className="text-white/80 font-semibold">Browser</span>
                  <span>File</span>
                  <span>Edit</span>
                  <span>View</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-[10px] text-white/60">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>

              {/* Desktop Area */}
              <div className="relative w-full h-full pt-[28px] overflow-visible">
                {/* Floating Browser Tabs */}
                {browserTabs.map((tab, index) => (
                  <FloatingTab
                    key={tab.id}
                    tab={tab}
                    isAnimating={animationTriggered}
                    delay={index * 0.04}
                  />
                ))}

                {/* CommCove Tab - Center */}
                <CommCoveTab isAnimating={animationTriggered} />
              </div>
            </div>

            {/* MacBook Base */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-xl"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
              }}
            />
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#64748B] mt-12 text-lg"
        >
          All your communication chaos, unified in one intelligent interface
        </motion.p>
      </div>
    </section>
  );
}

function FloatingTab({
  tab,
  isAnimating,
  delay,
}: {
  tab: BrowserTab;
  isAnimating: boolean;
  delay: number;
}) {
  // Calculate center of the container (600px wide viewport, 337.5px tall content area after menu bar)
  const centerX = 600; // Half of 1200px
  const centerY = 337.5; // Half of (90% of 750px) minus menu bar

  return (
    <motion.div
      className="absolute"
      style={{
        left: tab.position.x,
        top: tab.position.y,
        zIndex: 10,
      }}
      initial={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: Math.random() * 8 - 4,
        opacity: 1,
      }}
      animate={
        isAnimating
          ? {
              x: centerX - tab.position.x - 120, // Offset for tab width
              y: centerY - tab.position.y - 16, // Offset for tab height
              scale: 0,
              rotate: 720,
              opacity: 0,
            }
          : {}
      }
      transition={{
        duration: 1.2,
        delay: delay + 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Mac Browser Tab */}
      <div
        className="relative px-4 py-1.5 rounded-t-lg backdrop-blur-md border border-b-0 border-white/10 shadow-lg"
        style={{
          backgroundColor: 'rgba(30, 41, 59, 0.8)',
          minWidth: '240px',
          maxWidth: '240px',
        }}
      >
        <div className="flex items-center gap-2">
          {/* Traffic Lights */}
          <div className="flex gap-1.5 mr-1">
            <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <div className="w-2 h-2 rounded-full bg-[#28C840]" />
          </div>

          {/* Favicon */}
          <div
            className="w-3 h-3 rounded-sm flex-shrink-0"
            style={{ backgroundColor: tab.color }}
          />

          {/* Title */}
          <span className="text-[11px] text-white/90 truncate flex-1">
            {tab.title}
          </span>

          {/* Close Button */}
          <button className="w-3 h-3 flex items-center justify-center text-white/40 hover:text-white/80 text-[10px] flex-shrink-0">
            ×
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function CommCoveTab({ isAnimating }: { isAnimating: boolean }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        zIndex: 50,
      }}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={
        isAnimating
          ? {
              scale: [0.6, 1.1, 1],
              opacity: [0, 1, 1],
            }
          : { scale: 0.6, opacity: 0 }
      }
      transition={{
        duration: 1.5,
        delay: 1.8,
        times: [0, 0.6, 1],
        ease: 'easeOut',
      }}
    >
      {/* Glowing CommCove Tab */}
      <motion.div
        className="relative"
        animate={
          isAnimating
            ? {
                boxShadow: [
                  '0 0 20px rgba(56, 189, 248, 0.3)',
                  '0 0 80px rgba(56, 189, 248, 0.9)',
                  '0 0 40px rgba(56, 189, 248, 0.6)',
                ],
              }
            : {}
        }
        transition={{
          duration: 2,
          delay: 2.5,
          times: [0, 0.5, 1],
          ease: 'easeInOut',
        }}
      >
        {/* Tab Header */}
        <div
          className="px-6 py-2 rounded-t-xl backdrop-blur-md border-2 border-b-0"
          style={{
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            borderColor: '#38BDF8',
            minWidth: '300px',
          }}
        >
          <div className="flex items-center gap-3">
            {/* Traffic Lights */}
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>

            {/* CommCove Logo Icon */}
            <div className="w-4 h-4 rounded bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center text-white font-bold text-[10px] shadow-lg">
              C
            </div>
            <span className="text-white font-semibold text-sm">CommCove</span>
          </div>
        </div>

        {/* Tab Content - Branding */}
        <motion.div
          className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-b-xl p-12 border-2 border-t-0 border-[#38BDF8]"
          style={{
            minWidth: '500px',
            minHeight: '350px',
          }}
          initial={{ opacity: 0 }}
          animate={
            isAnimating
              ? {
                  opacity: [0, 1],
                }
              : {}
          }
          transition={{
            duration: 1,
            delay: 3,
          }}
        >
          {/* Large Logo */}
          <div className="flex flex-col items-center justify-center h-full">
            <motion.div
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center text-white font-bold text-5xl shadow-2xl mb-6"
              animate={
                isAnimating
                  ? {
                      boxShadow: [
                        '0 10px 40px rgba(56, 189, 248, 0.4)',
                        '0 20px 60px rgba(56, 189, 248, 0.8)',
                        '0 15px 50px rgba(56, 189, 248, 0.5)',
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                delay: 3.2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              C
            </motion.div>

            {/* Branding Text */}
            <motion.h3
              className="text-4xl font-bold text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isAnimating
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 3.3,
              }}
            >
              CommCove
            </motion.h3>

            <motion.p
              className="text-xl text-[#38BDF8] font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isAnimating
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 3.5,
              }}
            >
              One place. All your communication.
            </motion.p>

            <motion.p
              className="text-sm text-[#94A3B8] text-center max-w-md"
              initial={{ opacity: 0 }}
              animate={
                isAnimating
                  ? {
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 3.7,
              }}
            >
              Your AI-powered assistant that brings order to communication chaos
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
