'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Window } from '../macos/Window';

const APP_WINDOWS = [
  {
    id: 'slack',
    title: 'Slack',
    color: '#4A154B',
    icon: '💬',
    notification: '12 new messages',
    position: { x: 100, y: 100 },
  },
  {
    id: 'gmail',
    title: 'Gmail',
    color: '#EA4335',
    icon: '✉️',
    notification: '8 unread emails',
    position: { x: 800, y: 150 },
  },
  {
    id: 'groupme',
    title: 'GroupMe',
    color: '#00AFF0',
    icon: '👥',
    notification: '5 new chats',
    position: { x: 200, y: 500 },
  },
  {
    id: 'canvas',
    title: 'Canvas',
    color: '#E13D3D',
    icon: '📚',
    notification: '3 assignments',
    position: { x: 900, y: 400 },
  },
  {
    id: 'discord',
    title: 'Discord',
    color: '#5865F2',
    icon: '🎮',
    notification: '15 mentions',
    position: { x: 400, y: 200 },
  },
  {
    id: 'calendar',
    title: 'Calendar',
    color: '#4285F4',
    icon: '📅',
    notification: '2 events today',
    position: { x: 600, y: 450 },
  },
  {
    id: 'notion',
    title: 'Notion',
    color: '#000000',
    icon: '📝',
    notification: '4 pages updated',
    position: { x: 300, y: 350 },
  },
  {
    id: 'teams',
    title: 'Teams',
    color: '#6264A7',
    icon: '👔',
    notification: '6 new messages',
    position: { x: 700, y: 250 },
  },
];

export function StateConvergence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline();

    // Initial state: scattered windows
    gsap.set('.app-window', { opacity: 1 });
    gsap.set('.commcove-window', { opacity: 0, scale: 0 });

    // Convergence animation
    tl.to('.app-window', {
      x: '50vw',
      y: '50vh',
      rotation: 720,
      scale: 0,
      opacity: 0,
      duration: 1.2,
      stagger: 0.05,
      ease: 'power2.inOut',
    })
      .to('.commcove-window', {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }, '-=0.4')
      .to('.commcove-window', {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      }, '-=0.2');
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Scattered app windows */}
      {APP_WINDOWS.map((app) => (
        <div
          key={app.id}
          className="app-window absolute"
          style={{
            left: app.position.x,
            top: app.position.y,
          }}
        >
          <div
            className="w-64 h-48 rounded-lg shadow-2xl border border-white/10 overflow-hidden"
            style={{ backgroundColor: app.color }}
          >
            {/* Window title bar */}
            <div className="h-9 bg-black/20 border-b border-white/10 flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-white text-sm font-medium">
                {app.title}
              </div>
            </div>

            {/* Window content */}
            <div className="p-6 flex flex-col items-center justify-center h-[calc(100%-36px)]">
              <div className="text-5xl mb-3">{app.icon}</div>
              <div className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                {app.notification}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* CommCove window (appears after convergence) */}
      <div
        className="commcove-window absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ transformOrigin: 'center' }}
      >
        <Window
          title="CommCove"
          position={{ x: 0, y: 0 }}
          size={{ width: 600, height: 400 }}
          icon={
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2L4 6V14L10 18L16 14V6L10 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10L4 6M10 10L16 6M10 10V18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-sky-500/20 to-blue-600/20 p-8">
            <div className="w-24 h-24 mb-6">
              <svg viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 10L20 30V70L50 90L80 70V30L50 10Z"
                  stroke="url(#logo-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 50L20 30M50 50L80 30M50 50V90"
                  stroke="url(#logo-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100">
                    <stop stopColor="#0EA5E9" />
                    <stop offset="1" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-white mb-3">CommCove</h1>
            <p className="text-lg text-white/80 text-center max-w-md">
              One unified inbox for all your communications
            </p>

            <div className="mt-8 flex gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>8 platforms connected</span>
              </div>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}
