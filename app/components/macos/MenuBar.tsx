'use client';

import React, { useEffect, useState } from 'react';

export function MenuBar() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, '0');
      setCurrentTime(`${displayHours}:${displayMinutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-7 bg-slate-900/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-4 z-50"
      style={{ backgroundColor: '#1A202C' }}
    >
      {/* Left side - Apple logo and app name */}
      <div className="flex items-center gap-4">
        <button className="text-white/90 hover:text-white transition-colors" aria-label="Apple menu">

        </button>
        <span className="text-sm font-semibold text-white/90">CommCove</span>
      </div>

      {/* Right side - System icons and time */}
      <div className="flex items-center gap-4">
        {/* State indicator (optional) */}
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span>Scroll to explore</span>
        </div>

        {/* Clock */}
        <div className="text-sm text-white/90 font-medium tabular-nums">
          {currentTime}
        </div>
      </div>
    </div>
  );
}
