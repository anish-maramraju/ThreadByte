"use client"

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-[#0F172A]/80' : 'bg-transparent'
      }`}
      style={{
        borderBottom: isScrolled ? '1px solid #334155' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/commcove-logo.png"
            alt="CommCove Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-white">CommCove</span>
        </div>

        {/* Desktop CTA */}
        <button
          onClick={scrollToWaitlist}
          className="hidden md:block px-6 py-3 bg-[#0EA5E9] text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
          style={{
            boxShadow: '0 0 24px rgba(14, 165, 233, 0.4)',
          }}
        >
          Join Waitlist
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0F172A] border-b border-[#334155] backdrop-blur-xl">
          <div className="px-6 py-4">
            <button
              onClick={scrollToWaitlist}
              className="w-full px-6 py-3 bg-[#0EA5E9] text-white font-semibold rounded-lg"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}