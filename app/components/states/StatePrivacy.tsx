'use client';

import React from 'react';

const PRIVACY_PILLARS = [
  {
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'End-to-End Encryption',
    description: 'Your messages and data are encrypted at rest and in transit. We never have access to your raw communications.',
    features: ['256-bit AES encryption', 'Zero-knowledge architecture', 'Secure key management'],
    color: 'sky',
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Your Data, Your Control',
    description: 'You own your data. Delete it anytime, export it whenever you want, and control exactly what we process.',
    features: ['One-click data export', 'Permanent deletion', 'Granular permissions'],
    color: 'purple',
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Privacy-First AI',
    description: 'Our AI processes your data locally when possible and never uses your personal information for model training.',
    features: ['No training on your data', 'Anonymized processing', 'GDPR & CCPA compliant'],
    color: 'green',
  },
];

export function StatePrivacy() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-8">
        {/* Headline */}
        <div className="privacy-headline text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your privacy is non-negotiable
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We built CommCove with security and privacy at the core, not as an afterthought
          </p>
        </div>

        {/* Privacy cards */}
        <div className="grid grid-cols-3 gap-8">
          {PRIVACY_PILLARS.map((pillar, index) => (
            <div key={index} className="privacy-card">
              <div className="h-full p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:scale-105">
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: pillar.color === 'sky' ? 'rgba(14, 165, 233, 0.2)' : pillar.color === 'purple' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                  }}
                >
                  <div
                    style={{
                      color: pillar.color === 'sky' ? '#38BDF8' : pillar.color === 'purple' ? '#C084FC' : '#34D399',
                    }}
                  >
                    {pillar.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4">{pillar.title}</h3>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">{pillar.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{
                          color: pillar.color === 'sky' ? '#38BDF8' : pillar.color === 'purple' ? '#C084FC' : '#34D399',
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex items-center justify-center gap-12">
          <div className="flex items-center gap-3 text-white/50">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            <span className="text-sm font-medium">SOC 2 Type II</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex items-center gap-3 text-white/50">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            <span className="text-sm font-medium">GDPR Compliant</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex items-center gap-3 text-white/50">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            <span className="text-sm font-medium">CCPA Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}
