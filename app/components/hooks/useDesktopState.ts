'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export type DesktopState = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface UseDesktopStateReturn {
  currentState: DesktopState;
  goToState: (state: DesktopState) => void;
  nextState: () => void;
  prevState: () => void;
  isTransitioning: boolean;
}

const TOTAL_STATES = 8;
const SCROLL_DEBOUNCE_MS = 300;
const SCROLL_THRESHOLD = 50; // pixels needed to trigger state change
const TOUCH_THRESHOLD = 50; // pixels needed for swipe

export function useDesktopState(): UseDesktopStateReturn {
  const [currentState, setCurrentState] = useState<DesktopState>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const accumulatedScrollRef = useRef(0);
  const touchStartRef = useRef<number | null>(null);

  const goToState = useCallback((state: DesktopState) => {
    if (state >= 0 && state < TOTAL_STATES && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentState(state);

      // Reset transition lock after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200); // Match GSAP transition duration
    }
  }, [isTransitioning]);

  const nextState = useCallback(() => {
    if (currentState < TOTAL_STATES - 1) {
      goToState((currentState + 1) as DesktopState);
    }
  }, [currentState, goToState]);

  const prevState = useCallback(() => {
    if (currentState > 0) {
      goToState((currentState - 1) as DesktopState);
    }
  }, [currentState, goToState]);

  // Debounced scroll handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Skip if transitioning or convergence animation is playing (state 0)
      if (isTransitioning || (currentState === 0 && e.deltaY < 0)) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      accumulatedScrollRef.current += e.deltaY;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Check if accumulated scroll exceeds threshold
      if (Math.abs(accumulatedScrollRef.current) >= SCROLL_THRESHOLD) {
        if (accumulatedScrollRef.current > 0) {
          nextState();
        } else {
          prevState();
        }
        accumulatedScrollRef.current = 0;
        return;
      }

      // Set debounce timeout
      scrollTimeoutRef.current = setTimeout(() => {
        accumulatedScrollRef.current = 0;
      }, SCROLL_DEBOUNCE_MS);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [currentState, isTransitioning, nextState, prevState]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        nextState();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        prevState();
      } else if (e.key >= '0' && e.key <= '7') {
        e.preventDefault();
        goToState(parseInt(e.key) as DesktopState);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning, nextState, prevState, goToState]);

  // Touch swipe support
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartRef.current === null || isTransitioning) return;

      const touchEnd = e.changedTouches[0].clientY;
      const diff = touchStartRef.current - touchEnd;

      if (Math.abs(diff) >= TOUCH_THRESHOLD) {
        if (diff > 0) {
          nextState();
        } else {
          prevState();
        }
      }

      touchStartRef.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isTransitioning, nextState, prevState]);

  return {
    currentState,
    goToState,
    nextState,
    prevState,
    isTransitioning,
  };
}
