'use client';

import React from 'react';
import { Window } from '../macos/Window';

export function StateFeatures() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="features-window">
        <Window
          title="Features"
          position={{ x: '50%', y: '50%' }}
          size={{ width: 1000, height: 700 }}
          className="-translate-x-1/2 -translate-y-1/2"
        >
          <div className="h-full overflow-y-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-12">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Built for your workflow
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              CommCove brings together everything you need to stay on top of your communications
            </p>

            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Feature 1: Morning Digest */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Morning Digest</h3>
                <p className="text-white/70 text-sm mb-4">
                  Wake up to a personalized summary of everything that happened across all your platforms
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">•</span>
                    <span>Prioritized action items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">•</span>
                    <span>AI-generated summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">•</span>
                    <span>Smart categorization</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2: Cross-Platform Intelligence */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cross-Platform Intelligence</h3>
                <p className="text-white/70 text-sm mb-4">
                  Connect conversations across Slack, Gmail, GroupMe, Discord, and more
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Thread continuity tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Unified search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Context-aware insights</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3: Action Drafts */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Action Drafts</h3>
                <p className="text-white/70 text-sm mb-4">
                  Get starter templates for emails, replies, and documents based on your messages
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span>Smart reply suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span>Document templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span>
                    <span>To-do extraction</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4: Time Savings */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Save Hours Daily</h3>
                <p className="text-white/70 text-sm mb-4">
                  Stop switching between apps and spend more time on what matters
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    <span>Reduce context switching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    <span>Batch similar tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">•</span>
                    <span>Focus on priorities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}
