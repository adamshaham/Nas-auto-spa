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
        ${hasScrolled ? 'shadow-xl border-b border-zinc-200/40 backdrop-blur-lg' : ''}
      `}
      style={{ background: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/navbarlogo.png"
              alt="NAS Auto Spa Logo"
              className="h-7 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              to="/mobile-detailing"
              className="text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Detail Packages
            </Link>

            <Link
              to="/paint-correction"
              className="text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Paint Correction
            </Link>

            <Link
              to="/ceramic-coating"
              className="text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Ceramic Coating
            </Link>

            <Link
              to="/fleet-detailing"
              className="text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Commercial
            </Link>

            <Link
              to="/blog"
              className="text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Blog
            </Link>

            <Link
              to="/about"
              className="text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              About
            </Link>

            <Link
               to="/gallery"
              className="text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
              >
              Portfolio
            </Link>
          </div>

          {/* Desktop Phone */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:19293076986"
              className="text-sm md:text-base font-semibold text-[#e1b11b] hover:text-yellow-400 tracking-wide"
            >
              (929) 307-6986
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
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
            <div className="mt-3 rounded-xl bg-white/80 backdrop-blur-xl border border-zinc-200 px-5 py-4 space-y-3">
              <Link
                to="/mobile-detailing"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-black hover:text-[#e1b11b] uppercase"
              >
                Detail Packages
              </Link>

              <Link
                to="/paint-correction"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-black hover:text-[#e1b11b] uppercase"
              >
                Paint Correction
              </Link>

              <Link
                to="/ceramic-coating"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-black hover:text-[#e1b11b] uppercase"
              >
                Ceramic Coating
              </Link>

              <Link
                to="/commercial-wash"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-black hover:text-[#e1b11b] uppercase"
              >
                Commercial
              </Link>

              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-black hover:text-[#e1b11b] uppercase"
              >
                Blog
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-black hover:text-[#e1b11b] uppercase"
              >
                About
              </Link>

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-black hover:text-[#e1b11b] uppercase"
              >
                Contact
              </a>

              <div className="pt-3 border-t border-zinc-300 mt-2">
                <a
                  href="tel:19293076986"
                  className="px-5 py-2 rounded-md bg-[#1a1a1a] text-white text-sm md:text-base font-semibold tracking-wide border border-zinc-700 hover:bg-zinc-800 transition-all"
                >
                  Call (929) 307-6986
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
