"use client"

import { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Tag, Sparkles } from 'lucide-react';

export function FinalCTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In production, this would submit to your waitlist API
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleGoogleSignIn = () => {
    // In production, this would trigger Google OAuth
    console.log('Google Sign-In would be triggered here');
    // TODO: Implement Google OAuth integration
  };

  return (
    <section
      id="waitlist"
      className="relative py-24 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #1E293B 0%, #0F172A 70%)',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-[#0EA5E9] opacity-10 blur-[150px] rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '20%', left: '20%' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-[#38BDF8] opacity-10 blur-[150px] rounded-full"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.15, 0.1, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '20%', right: '20%' }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[800px] mx-auto"
        >
          <motion.div
            className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-2 border-[#38BDF8] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              boxShadow: '0 0 50px rgba(56, 189, 248, 0.3), 0 20px 60px rgba(0, 0, 0, 0.4)',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/10 via-[#0EA5E9]/10 to-[#38BDF8]/10"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative z-10">
              {/* Eyebrow Text */}
              <motion.span 
                className="inline-block text-sm font-semibold uppercase text-[#38BDF8] tracking-wider mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Join the waitlist
              </motion.span>

              {/* Main Headline */}
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Be among the first 500 students
              </motion.h2>

              {/* Subheadline */}
              <motion.p 
                className="text-lg md:text-xl text-[#94A3B8] mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Get early access when we launch late January 2026
              </motion.p>

              {/* Benefits Row */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  >
                    <Rocket className="w-5 h-5 text-[#38BDF8]" />
                  </motion.div>
                  <span className="text-sm text-[#94A3B8]">Early access</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <Tag className="w-5 h-5 text-[#38BDF8]" />
                  </motion.div>
                  <span className="text-sm text-[#94A3B8]">Free for students</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <Sparkles className="w-5 h-5 text-[#38BDF8]" />
                  </motion.div>
                  <span className="text-sm text-[#94A3B8]">Shape the product</span>
                </motion.div>
              </motion.div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="py-8"
                >
                  <motion.div 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#10B981]/20 text-[#10B981] rounded-xl border-2 border-[#10B981]/30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <motion.svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path d="M5 13l4 4L19 7" />
                    </motion.svg>
                    <span className="font-semibold text-lg">You're on the waitlist! Check your email.</span>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {/* Google Sign-In */}
                  <motion.button
                    onClick={handleGoogleSignIn}
                    className="w-full max-w-[400px] mx-auto h-14 bg-white rounded-xl flex items-center justify-center gap-3 mb-6"
                    style={{
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    }}
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Sign up with Google account"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.351z"
                        fill="#4285F4"
                      />
                      <path
                        d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z"
                        fill="#34A853"
                      />
                      <path
                        d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.341-2.59z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.091 0 2.709 2.24 1.064 5.51l3.341 2.59C5.19 5.736 7.395 3.977 10 3.977z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="text-[#3c4043] font-medium">Sign up with Google</span>
                  </motion.button>

                  {/* Divider */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[#334155]" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-[#1E293B] px-4 text-sm text-[#94A3B8]">or sign up with email</span>
                    </div>
                  </div>

                  {/* Email Form */}
                  <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto" aria-label="Waitlist signup form">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@university.edu"
                      className="flex-1 px-4 py-3.5 bg-[#0F172A] border border-[#334155] rounded-lg text-white placeholder:text-[#94A3B8] focus:outline-none focus:border-[#38BDF8] transition-colors"
                      required
                      aria-label="Email address"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-[#0EA5E9] text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
                      aria-label="Submit email to join waitlist"
                    >
                      Join Waitlist
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Privacy Note */}
              <p className="text-xs text-[#94A3B8] mt-6">
                We'll never share your data or spam you. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}