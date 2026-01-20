'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function DesktopWallpaper() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Animate gradient position
    gsap.to(canvasRef.current, {
      backgroundPosition: '200% 200%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'none',
    });
  }, []);

  return (
    <div
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 25%, #1e3a5f 50%, #0f172a 75%, #1e293b 100%)',
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 0%',
      }}
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
