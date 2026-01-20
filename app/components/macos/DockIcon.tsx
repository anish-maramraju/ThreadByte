'use client';

import React, { ReactNode, useState } from 'react';

interface DockIconProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export function DockIcon({ icon, label, onClick, active = false }: DockIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col items-center justify-center transition-all duration-200 ease-out"
        style={{
          transform: isHovered ? 'translateY(-8px) scale(1.2)' : 'translateY(0) scale(1)',
        }}
        aria-label={label}
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
          {icon}
        </div>

        {/* Active indicator */}
        {active && (
          <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-white/80" />
        )}
      </button>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800/95 backdrop-blur-sm rounded-md text-white text-xs whitespace-nowrap pointer-events-none">
          {label}
        </div>
      )}
    </div>
  );
}
