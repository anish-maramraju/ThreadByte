'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { DesktopState } from './useDesktopState';

interface TransitionConfig {
  duration?: number;
  ease?: string;
  delay?: number;
}

export function useGSAPTransitions(currentState: DesktopState, previousState: DesktopState) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create new timeline for state transition
    const tl = gsap.timeline();
    timelineRef.current = tl;

    // State transition logic
    switch (currentState) {
      case 0:
        // Convergence animation (handled in StateConvergence component)
        break;

      case 1:
        // State 0 -> 1: Hero expansion
        if (previousState === 0) {
          tl.to('.commcove-window', {
            scale: 0.7,
            x: -400,
            y: -200,
            duration: 1,
            ease: 'power3.inOut',
          })
            .from('.message-card', {
              y: 200,
              opacity: 0,
              stagger: 0.1,
              duration: 0.8,
              ease: 'back.out(1.7)',
            }, '-=0.5')
            .from('.stats-bar', {
              y: 50,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out',
            }, '-=0.4');
        } else if (previousState === 2) {
          // Reverse from state 2
          tl.to('.features-window', {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.in',
          })
            .to('.message-card', {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 0.6,
              ease: 'power2.out',
            }, '-=0.4');
        }
        break;

      case 2:
        // State 1 -> 2: Features window
        if (previousState === 1) {
          tl.to('.message-card', {
            x: -200,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: 'power2.in',
          })
            .from('.features-window', {
              scale: 0,
              opacity: 0,
              duration: 1,
              ease: 'back.out(1.7)',
            }, '-=0.3');
        } else if (previousState === 3) {
          // Reverse from state 3
          tl.to('.browser-window', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.in',
          })
            .to('.features-window', {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: 'back.out(1.7)',
            }, '-=0.4');
        }
        break;

      case 3:
        // State 2 -> 3: Browser preview
        if (previousState === 2) {
          tl.to('.features-window', {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.in',
          })
            .from('.browser-window', {
              y: -100,
              opacity: 0,
              duration: 1,
              ease: 'back.out(1.7)',
            }, '-=0.4')
            .from('.browser-headline', {
              y: -30,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out',
            }, '-=0.5');
        } else if (previousState === 4) {
          // Reverse from state 4
          tl.to('.step-card', {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: 'power2.in',
          })
            .to('.browser-window', {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
            }, '-=0.4');
        }
        break;

      case 4:
        // State 3 -> 4: How It Works
        if (previousState === 3) {
          tl.to('.browser-window', {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.in',
          })
            .to('.browser-headline', {
              opacity: 0,
              duration: 0.4,
            }, '-=0.8')
            .from('.step-card', {
              y: 100,
              opacity: 0,
              stagger: 0.1,
              duration: 0.8,
              ease: 'back.out(1.7)',
            }, '-=0.4');
        } else if (previousState === 5) {
          // Reverse from state 5
          tl.to('.digest-window', {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.in',
          })
            .to('.step-card', {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 0.6,
              ease: 'power2.out',
            }, '-=0.4');
        }
        break;

      case 5:
        // State 4 -> 5: Digest preview
        if (previousState === 4) {
          tl.to('.step-card', {
            x: -200,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: 'power2.in',
          })
            .from('.digest-window', {
              scale: 0,
              opacity: 0,
              duration: 1,
              ease: 'back.out(1.7)',
            }, '-=0.3')
            .from('.digest-header', {
              y: -30,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out',
            }, '-=0.5');
        } else if (previousState === 6) {
          // Reverse from state 6
          tl.to('.privacy-card', {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: 'power2.in',
          })
            .to('.digest-window', {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: 'back.out(1.7)',
            }, '-=0.4');
        }
        break;

      case 6:
        // State 5 -> 6: Privacy section
        if (previousState === 5) {
          tl.to('.digest-window', {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.in',
          })
            .to('.digest-header', {
              opacity: 0,
              duration: 0.4,
            }, '-=0.8')
            .from('.privacy-card', {
              y: 100,
              opacity: 0,
              scale: 0.9,
              stagger: 0.1,
              duration: 0.8,
              ease: 'back.out(1.7)',
            }, '-=0.4')
            .from('.privacy-headline', {
              y: -30,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out',
            }, '-=0.6');
        } else if (previousState === 7) {
          // Reverse from state 7
          tl.to('.cta-window', {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.in',
          })
            .to('.privacy-card', {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 0.6,
              ease: 'power2.out',
            }, '-=0.4');
        }
        break;

      case 7:
        // State 6 -> 7: Final CTA
        if (previousState === 6) {
          tl.to('.privacy-card', {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: 'power2.in',
          })
            .to('.privacy-headline', {
              opacity: 0,
              duration: 0.4,
            }, '-=0.6')
            .from('.cta-window', {
              y: -100,
              opacity: 0,
              duration: 1,
              ease: 'back.out(1.7)',
            }, '-=0.3')
            .from('.cta-benefits', {
              y: 50,
              opacity: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: 'power2.out',
            }, '-=0.5');
        }
        break;
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [currentState, previousState]);

  return timelineRef;
}
