'use client';

import React from 'react';

export function StateBrowser() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Headline */}
      <div className="browser-headline absolute top-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-3">
          One app to replace them all
        </h2>
        <p className="text-xl text-white/60">
          Access CommCove from anywhere, anytime
        </p>
      </div>

      {/* Browser window */}
      <div className="browser-window">
        <div
          className="w-[1100px] h-[700px] rounded-xl shadow-2xl border border-white/10 overflow-hidden"
          style={{ backgroundColor: 'rgba(30, 41, 59, 0.95)' }}
        >
          {/* Safari-style chrome */}
          <div className="h-12 bg-slate-800/90 border-b border-white/5 flex items-center px-4 gap-3">
            {/* Traffic lights */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-2 ml-4">
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* URL bar */}
            <div className="flex-1 mx-4">
              <div className="h-8 bg-slate-700/50 rounded-md flex items-center px-4 gap-2">
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm text-white/80">app.commcove.com</span>
              </div>
            </div>
          </div>

          {/* Nested CommCove app window */}
          <div className="h-[calc(100%-48px)] p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30">
            <div className="h-full bg-slate-800/50 rounded-lg border border-white/10 overflow-hidden">
              {/* App header */}
              <div className="h-16 bg-slate-900/50 border-b border-white/5 flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 100 100" fill="none">
                      <path
                        d="M50 10L20 30V70L50 90L80 70V30L50 10Z"
                        stroke="url(#browser-gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient id="browser-gradient" x1="0" y1="0" x2="100" y2="100">
                          <stop stopColor="#0EA5E9" />
                          <stop offset="1" stopColor="#38BDF8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">CommCove</h3>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span>All systems operational</span>
                  </div>
                </div>
              </div>

              {/* App content - inbox preview */}
              <div className="h-[calc(100%-64px)] flex">
                {/* Sidebar */}
                <div className="w-64 bg-slate-900/30 border-r border-white/5 p-4">
                  <div className="space-y-2">
                    <div className="px-3 py-2 rounded-md bg-sky-500/20 text-sky-300 text-sm font-medium">
                      📥 Inbox (24)
                    </div>
                    <div className="px-3 py-2 rounded-md hover:bg-white/5 text-white/60 text-sm">
                      ⭐ Starred
                    </div>
                    <div className="px-3 py-2 rounded-md hover:bg-white/5 text-white/60 text-sm">
                      📝 Drafts
                    </div>
                    <div className="px-3 py-2 rounded-md hover:bg-white/5 text-white/60 text-sm">
                      ✅ Completed
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="text-xs text-white/40 mb-2 px-3">PLATFORMS</div>
                    <div className="space-y-1">
                      <div className="px-3 py-1.5 rounded-md hover:bg-white/5 text-white/60 text-sm flex items-center gap-2">
                        <span>💬</span> Slack
                      </div>
                      <div className="px-3 py-1.5 rounded-md hover:bg-white/5 text-white/60 text-sm flex items-center gap-2">
                        <span>✉️</span> Gmail
                      </div>
                      <div className="px-3 py-1.5 rounded-md hover:bg-white/5 text-white/60 text-sm flex items-center gap-2">
                        <span>👥</span> GroupMe
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 p-6">
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg bg-slate-800/50 border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                            {String.fromCharCode(65 + i - 1)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-white">
                                Message Title {i}
                              </span>
                              <span className="text-xs text-white/40">{i}h ago</span>
                            </div>
                            <p className="text-sm text-white/60 line-clamp-2">
                              Preview of the message content goes here...
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
