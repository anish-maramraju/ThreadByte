'use client';

import React from 'react';
import { DockIcon } from './DockIcon';

export function Dock() {
  const apps = [
    {
      id: 'commcove',
      label: 'CommCove',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="url(#gradient)" />
          <path
            d="M20 10L12 15V25L20 30L28 25V15L20 10Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 20L12 15M20 20L28 15M20 20V30"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
              <stop stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
      ),
      active: true,
    },
    {
      id: 'finder',
      label: 'Finder',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#4A9EFF" />
          <path
            d="M12 20C12 17.7909 13.7909 16 16 16H18C18.5523 16 19 16.4477 19 17V23C19 23.5523 18.5523 24 18 24H16C13.7909 24 12 22.2091 12 20Z"
            fill="white"
          />
          <path
            d="M21 17C21 16.4477 21.4477 16 22 16H24C26.2091 16 28 17.7909 28 20C28 22.2091 26.2091 24 24 24H22C21.4477 24 21 23.5523 21 23V17Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 'safari',
      label: 'Safari',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#007AFF" />
          <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" />
          <path d="M20 12V20L24 24" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'mail',
      label: 'Mail',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#5AC8FA" />
          <rect x="10" y="12" width="20" height="16" rx="2" stroke="white" strokeWidth="2" />
          <path d="M10 14L20 20L30 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'calendar',
      label: 'Calendar',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#FC3D39" />
          <rect x="10" y="10" width="20" height="20" rx="2" fill="white" />
          <rect x="10" y="10" width="20" height="6" rx="2" fill="#FC3D39" />
          <text x="20" y="24" textAnchor="middle" fill="#FC3D39" fontSize="10" fontWeight="bold">
            {new Date().getDate()}
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className="flex items-end gap-2 px-4 py-3 rounded-2xl backdrop-blur-xl border border-white/20"
        style={{ backgroundColor: 'rgba(30, 41, 59, 0.7)' }}
      >
        {apps.map((app) => (
          <DockIcon
            key={app.id}
            icon={app.icon}
            label={app.label}
            active={app.active}
          />
        ))}
      </div>
    </div>
  );
}
