'use client';

import React, { useState, useEffect } from 'react';
import { MenuBar } from './MenuBar';
import { Dock } from './Dock';
import { DesktopWallpaper } from './DesktopWallpaper';
import { useDesktopState } from '../hooks/useDesktopState';
import { useGSAPTransitions } from '../hooks/useGSAPTransitions';

// Import state components
import { StateConvergence } from '../states/StateConvergence';
import { StateHero } from '../states/StateHero';
import { StateFeatures } from '../states/StateFeatures';
import { StateBrowser } from '../states/StateBrowser';
import { StateHowItWorks } from '../states/StateHowItWorks';
import { StateDigest } from '../states/StateDigest';
import { StatePrivacy } from '../states/StatePrivacy';
import { StateCTA } from '../states/StateCTA';

export function MacOSDesktop() {
  const { currentState, isTransitioning } = useDesktopState();
  const [previousState, setPreviousState] = useState(currentState);
  const [isMobile, setIsMobile] = useState(false);

  // Track previous state for transitions
  useEffect(() => {
    if (!isTransitioning) {
      setPreviousState(currentState);
    }
  }, [currentState, isTransitioning]);

  // Apply GSAP transitions
  useGSAPTransitions(currentState, previousState);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile fallback - traditional scroll layout
  if (isMobile) {
    return (
      <div className="min-h-screen bg-slate-900 text-white overflow-y-auto">
        <div className="p-6 space-y-12">
          <h1 className="text-3xl font-bold text-center">CommCove</h1>
          <p className="text-center text-slate-300">
            Please view on desktop for the full macOS experience.
          </p>
          {/* Simplified mobile view */}
          <div className="space-y-8">
            <StateHero />
            <StateFeatures />
            <StateHowItWorks />
            <StatePrivacy />
            <StateCTA />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      <DesktopWallpaper />
      <MenuBar />

      {/* Main desktop viewport */}
      <div className="absolute inset-0 pt-7 pb-20">
        {/* Render current state */}
        <div className="relative w-full h-full">
          {currentState === 0 && <StateConvergence />}
          {currentState === 1 && <StateHero />}
          {currentState === 2 && <StateFeatures />}
          {currentState === 3 && <StateBrowser />}
          {currentState === 4 && <StateHowItWorks />}
          {currentState === 5 && <StateDigest />}
          {currentState === 6 && <StatePrivacy />}
          {currentState === 7 && <StateCTA />}
        </div>
      </div>

      <Dock />

      {/* State indicator dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((state) => (
          <div
            key={state}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentState === state
                ? 'bg-sky-400 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            title={`State ${state}`}
          />
        ))}
      </div>
    </div>
  );
}
