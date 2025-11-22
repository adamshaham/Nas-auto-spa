import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300
        ${hasScrolled ? 'backdrop-blur-xl bg-black/75 shadow-[0_10px_40px_rgba(0,0,0,0.7)] border-b border-white/5' : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/images/navbarlogo.png"
              alt="NAS Auto Spa Logo"
              className="h-7 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link
              to="/services"
              className="text-sm md:text-base font-medium text-zinc-200 hover:text-[#e1b11b] transition-colors tracking-wide"
            >
              Services
            </Link>

            <Link
              to="/blog"
              className="text-sm md:text-base font-medium text-zinc-200 hover:text-[#e1b11b] transition-colors tracking-wide"
            >
              Blog
            </Link>

            <a
              href="#pricing"
              className="text-sm md:text-base font-medium text-zinc-200 hover:text-[#e1b11b] transition-colors tracking-wide"
            >
              Pricing
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-col items-end gap-1">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#e1b11b] text-black text-sm md:text-base font-semibold tracking-wide hover:bg-yellow-400 transition-colors duration-200"
            >
              Book Now
            </a>
            <p className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-[0.2em]">
              Your cars, our passion
            </p>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="mt-3 rounded-2xl bg-black/95 border border-zinc-800 backdrop-blur-xl px-5 py-5 space-y-4">
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-zinc-200 hover:text-[#e1b11b] transition-colors"
              >
                Services
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-zinc-200 hover:text-[#e1b11b] transition-colors"
              >
                Blog
              </Link>
              <a
                href="#pricing"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-zinc-200 hover:text-[#e1b11b] transition-colors"
              >
                Pricing
              </a>

              <div className="pt-3 border-t border-zinc-800 mt-2">
                <a
                  href="#pricing"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[#e1b11b] text-black text-sm font-semibold tracking-wide hover:bg-yellow-400 transition-colors"
                >
                  Book Now
                </a>
                <p className="mt-2 text-[10px] text-center text-zinc-500 uppercase tracking-[0.2em]">
                  Your cars, our passion
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
