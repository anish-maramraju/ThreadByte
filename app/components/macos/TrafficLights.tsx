'use client';

import React from 'react';

interface TrafficLightsProps {
  variant?: 'default' | 'minimal';
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export function TrafficLights({
  variant = 'default',
  onClose,
  onMinimize,
  onMaximize,
}: TrafficLightsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onClose}
        className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF4136] transition-colors group relative"
        aria-label="Close window"
      >
        {variant === 'default' && (
          <span className="absolute inset-0 flex items-center justify-center text-[#8B0000] text-[8px] opacity-0 group-hover:opacity-100">
            ×
          </span>
        )}
      </button>
      <button
        onClick={onMinimize}
        className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFB300] transition-colors group relative"
        aria-label="Minimize window"
      >
        {variant === 'default' && (
          <span className="absolute inset-0 flex items-center justify-center text-[#8B6914] text-[10px] opacity-0 group-hover:opacity-100 pb-1">
            −
          </span>
        )}
      </button>
      <button
        onClick={onMaximize}
        className="w-3 h-3 rounded-full bg-[#28CA42] hover:bg-[#1FB038] transition-colors group relative"
        aria-label="Maximize window"
      >
        {variant === 'default' && (
          <span className="absolute inset-0 flex items-center justify-center text-[#006400] text-[10px] opacity-0 group-hover:opacity-100">
            +
          </span>
        )}
      </button>
    </div>
  );
}
