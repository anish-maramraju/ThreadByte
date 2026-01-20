'use client';

import React from 'react';
import { Window } from '../macos/Window';

const DIGEST_ITEMS = [
  {
    platform: 'Slack',
    icon: '💬',
    color: '#4A154B',
    title: 'Team Sprint Planning',
    summary: 'Your team discussed the upcoming sprint priorities. Key decisions: focus on user onboarding flow and performance optimization.',
    actions: ['Review sprint backlog', 'Prepare for standup'],
    priority: 'High',
    participants: ['Sarah', 'Mike', 'Alex'],
  },
  {
    platform: 'Gmail',
    icon: '✉️',
    color: '#EA4335',
    title: 'Project Proposal Feedback',
    summary: 'Dr. Johnson provided detailed feedback on your research proposal. Main points: strengthen methodology section and add more recent citations.',
    actions: ['Revise methodology', 'Find 5 recent papers', 'Schedule follow-up'],
    priority: 'Medium',
    participants: ['Dr. Johnson'],
  },
  {
    platform: 'GroupMe',
    icon: '👥',
    color: '#00AFF0',
    title: 'Study Session Tonight',
    summary: 'Study group confirmed meeting at 7pm in library. Topics: Chapter 5-7 review and practice problems.',
    actions: ['Bring textbook', 'Review chapter 5-7'],
    priority: 'Low',
    participants: ['Emma', 'Josh', 'Maria', 'You'],
  },
];

export function StateDigest() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Header */}
      <div className="digest-header absolute top-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-3">
          Here's what your morning digest looks like
        </h2>
        <p className="text-xl text-white/60">
          AI-powered summaries with actionable insights
        </p>
      </div>

      {/* Digest window */}
      <div className="digest-window">
        <Window
          title="Morning Digest - Today"
          position={{ x: '50%', y: '50%' }}
          size={{ width: 1000, height: 700 }}
          className="-translate-x-1/2 -translate-y-1/2"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
            </svg>
          }
        >
          <div className="h-full overflow-y-auto bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-8">
            {/* Date header */}
            <div className="mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  </h3>
                  <p className="text-white/60 mt-1">You have 3 conversations to catch up on</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm">
                    1 High Priority
                  </span>
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm">
                    1 Medium
                  </span>
                </div>
              </div>
            </div>

            {/* Digest items */}
            <div className="space-y-6">
              {DIGEST_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
                >
                  {/* Item header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                        style={{ backgroundColor: item.color + '40' }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-medium ${
                              item.priority === 'High'
                                ? 'bg-red-500/20 text-red-300'
                                : item.priority === 'Medium'
                                ? 'bg-yellow-500/20 text-yellow-300'
                                : 'bg-blue-500/20 text-blue-300'
                            }`}
                          >
                            {item.priority}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-white/60">{item.platform}</span>
                          <span className="text-white/40">•</span>
                          <span className="text-sm text-white/60">
                            {item.participants.length} participant{item.participants.length > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-4 pl-15">
                    <p className="text-white/80 leading-relaxed">{item.summary}</p>
                  </div>

                  {/* Action items */}
                  <div className="pl-15">
                    <div className="text-sm font-medium text-white/60 mb-2">Suggested Actions:</div>
                    <div className="space-y-2">
                      {item.actions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5"
                          />
                          <span className="text-sm text-white/70">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="mt-4 pl-15 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {item.participants.slice(0, 3).map((participant, pIndex) => (
                        <div
                          key={pIndex}
                          className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-xs font-semibold border-2 border-slate-800"
                          title={participant}
                        >
                          {participant[0]}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-white/50">
                      {item.participants.slice(0, 3).join(', ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-white/60 text-sm">
                Generated with AI • Updated 5 minutes ago
              </p>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}
