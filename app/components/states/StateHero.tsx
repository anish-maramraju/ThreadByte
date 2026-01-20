'use client';

import React from 'react';
import { Window } from '../macos/Window';

const MESSAGE_CARDS = [
  {
    platform: 'Slack',
    color: '#4A154B',
    icon: '💬',
    message: 'Team standup at 10am',
    time: '2m ago',
  },
  {
    platform: 'Gmail',
    color: '#EA4335',
    icon: '✉️',
    message: 'Project proposal deadline extended',
    time: '15m ago',
  },
  {
    platform: 'GroupMe',
    color: '#00AFF0',
    icon: '👥',
    message: 'Study group meeting tonight',
    time: '1h ago',
  },
];

export function StateHero() {
  return (
    <div className="relative w-full h-full">
      {/* CommCove window (top-left, scaled down) */}
      <div className="commcove-window">
        <Window
          title="CommCove"
          position={{ x: '10%', y: '10%' }}
          size={{ width: 420, height: 280 }}
          icon={
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2L4 6V14L10 18L16 14V6L10 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-sky-500/20 to-blue-600/20 p-6">
            <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 10L20 30V70L50 90L80 70V30L50 10Z"
                  stroke="url(#logo-gradient-hero)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 50L20 30M50 50L80 30M50 50V90"
                  stroke="url(#logo-gradient-hero)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="logo-gradient-hero" x1="0" y1="0" x2="100" y2="100">
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">CommCove</h1>
            <p className="text-sm text-white/80 text-center">
              Your unified communication hub
            </p>
          </div>
        </Window>
      </div>

      {/* Message cards (slide up from bottom) */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-6">
        {MESSAGE_CARDS.map((card, index) => (
          <div
            key={card.platform}
            className="message-card w-72 rounded-xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.95)',
            }}
          >
            {/* Card header */}
            <div
              className="h-12 flex items-center gap-3 px-4 border-b border-white/5"
              style={{ backgroundColor: card.color + '20' }}
            >
              <div className="text-2xl">{card.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">{card.platform}</div>
                <div className="text-xs text-white/60">{card.time}</div>
              </div>
            </div>

            {/* Card content */}
            <div className="p-4">
              <p className="text-white/90 text-sm">{card.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="stats-bar absolute bottom-40 left-1/2 -translate-x-1/2 -translate-y-full">
        <div className="flex items-center gap-8 px-6 py-3 rounded-full backdrop-blur-xl border border-white/10 bg-slate-800/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400">8</div>
            <div className="text-xs text-white/60">Platforms</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400">247</div>
            <div className="text-xs text-white/60">Messages</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400">1</div>
            <div className="text-xs text-white/60">Inbox</div>
          </div>
        </div>
      </div>
    </div>
  );
}
