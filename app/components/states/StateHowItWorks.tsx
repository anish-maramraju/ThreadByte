'use client';

import React from 'react';

const STEPS = [
  {
    number: 1,
    title: 'Connect Apps',
    description: 'Link your Slack, Gmail, GroupMe, and other communication platforms in minutes',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    color: 'sky',
  },
  {
    number: 2,
    title: 'Personalize',
    description: 'Set your preferences for notifications, digest timing, and AI-powered summaries',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    color: 'purple',
  },
  {
    number: 3,
    title: 'Get Digest',
    description: 'Receive your personalized morning digest with action items and smart drafts',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'green',
  },
];

export function StateHowItWorks() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How it works</h2>
          <p className="text-xl text-white/60">Get started in three simple steps</p>
        </div>

        <div className="flex items-start justify-center gap-12">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="step-card flex-1 max-w-xs">
                <div className="relative">
                  {/* Number badge */}
                  <div
                    className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-${step.color}-500 flex items-center justify-center shadow-lg z-10`}
                    style={{
                      backgroundColor: step.color === 'sky' ? '#0EA5E9' : step.color === 'purple' ? '#A855F7' : '#10B981',
                    }}
                  >
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Card */}
                  <div className="p-8 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                    <div
                      className={`w-16 h-16 rounded-xl bg-${step.color}-500/20 flex items-center justify-center mb-6`}
                      style={{
                        backgroundColor: step.color === 'sky' ? 'rgba(14, 165, 233, 0.2)' : step.color === 'purple' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                      }}
                    >
                      <div
                        style={{
                          color: step.color === 'sky' ? '#38BDF8' : step.color === 'purple' ? '#C084FC' : '#34D399',
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              {index < STEPS.length - 1 && (
                <div className="flex items-center pt-24">
                  <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
