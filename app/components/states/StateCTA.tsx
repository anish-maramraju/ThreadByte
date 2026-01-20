'use client';

import React, { useState } from 'react';
import { Window } from '../macos/Window';

const BENEFITS = [
  {
    icon: '🎯',
    text: 'Early access to beta features',
  },
  {
    icon: '🎓',
    text: 'Free for students and educators',
  },
  {
    icon: '💡',
    text: 'Shape the product with your feedback',
  },
];

export function StateCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Integrate with actual waitlist API
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="cta-window">
        <Window
          title="Join CommCove"
          position={{ x: '50%', y: '50%' }}
          size={{ width: 700, height: 600 }}
          className="-translate-x-1/2 -translate-y-1/2"
          icon={
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2L4 6V14L10 18L16 14V6L10 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-500/10 to-blue-600/10 p-12">
            {!submitted ? (
              <>
                <div className="w-20 h-20 mb-6">
                  <svg viewBox="0 0 100 100" fill="none">
                    <path
                      d="M50 10L20 30V70L50 90L80 70V30L50 10Z"
                      stroke="url(#cta-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M50 50L20 30M50 50L80 30M50 50V90"
                      stroke="url(#cta-gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="cta-gradient" x1="0" y1="0" x2="100" y2="100">
                        <stop stopColor="#0EA5E9" />
                        <stop offset="1" stopColor="#38BDF8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <h2 className="text-3xl font-bold text-white mb-3 text-center">
                  Join the Waitlist
                </h2>
                <p className="text-lg text-white/70 mb-8 text-center max-w-md">
                  Be among the first to experience the future of unified communications
                </p>

                {/* Benefits */}
                <div className="cta-benefits space-y-4 mb-8 w-full max-w-md">
                  {BENEFITS.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-white/10"
                    >
                      <span className="text-2xl">{benefit.icon}</span>
                      <span className="text-white/90">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Sign-up form */}
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
                  {/* Email input */}
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-6 py-4 rounded-lg bg-slate-800/50 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:from-sky-600 hover:to-blue-700 transition-all transform hover:scale-105 active:scale-95"
                  >
                    Join Waitlist
                  </button>
                </form>

                {/* Google OAuth option */}
                <div className="mt-6 w-full max-w-md">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-slate-800/50 text-white/60">or continue with</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-4 w-full px-6 py-4 rounded-lg bg-white text-gray-700 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Sign up with Google
                  </button>
                </div>

                {/* Privacy note */}
                <p className="mt-6 text-xs text-white/50 text-center max-w-md">
                  By joining, you agree to our Terms of Service and Privacy Policy.
                  We'll never spam you or share your email.
                </p>
              </>
            ) : (
              // Success state
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="text-3xl font-bold text-white mb-3">You're on the list!</h2>
                <p className="text-lg text-white/70 mb-8">
                  We'll send you an email at <span className="text-sky-400">{email}</span> when we launch.
                </p>

                <div className="space-y-4 max-w-md mx-auto">
                  <div className="p-4 rounded-lg bg-slate-800/50 border border-white/10">
                    <p className="text-white/80 text-sm">
                      Check your inbox for a confirmation email and add us to your contacts so you don't miss our launch announcement.
                    </p>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sky-400 hover:text-sky-300 text-sm transition-colors"
                  >
                    Update email address
                  </button>
                </div>
              </div>
            )}
          </div>
        </Window>
      </div>
    </div>
  );
}
