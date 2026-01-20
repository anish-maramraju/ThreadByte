'use client';

import React, { ReactNode } from 'react';
import { TrafficLights } from './TrafficLights';

export interface WindowProps {
  id?: string;
  title: string;
  icon?: ReactNode;
  position: { x: number | string; y: number | string };
  size: { width: number | string; height: number | string };
  variant?: 'default' | 'browser' | 'minimal';
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  zIndex?: number;
}

export function Window({
  id,
  title,
  icon,
  position,
  size,
  variant = 'default',
  children,
  className = '',
  onClose,
  onMinimize,
  onMaximize,
  zIndex = 10,
}: WindowProps) {
  const getPositionStyles = () => {
    return {
      left: typeof position.x === 'number' ? `${position.x}px` : position.x,
      top: typeof position.y === 'number' ? `${position.y}px` : position.y,
    };
  };

  const getSizeStyles = () => {
    return {
      width: typeof size.width === 'number' ? `${size.width}px` : size.width,
      height: typeof size.height === 'number' ? `${size.height}px` : size.height,
    };
  };

  return (
    <div
      id={id}
      className={`absolute rounded-lg overflow-hidden shadow-2xl backdrop-blur-xl border border-white/10 ${className}`}
      style={{
        ...getPositionStyles(),
        ...getSizeStyles(),
        zIndex,
        backgroundColor: 'rgba(30, 41, 59, 0.95)',
      }}
    >
      {/* Title Bar */}
      <div className="h-9 bg-slate-800/90 border-b border-white/5 flex items-center justify-between px-4">
        <TrafficLights
          variant={variant}
          onClose={onClose}
          onMinimize={onMinimize}
          onMaximize={onMaximize}
        />

        {/* Title and Icon */}
        <div className="flex items-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {icon && <div className="w-4 h-4">{icon}</div>}
          <span className="text-sm text-white/80 font-medium">{title}</span>
        </div>
      </div>

      {/* Window Content */}
      <div className="h-[calc(100%-36px)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
