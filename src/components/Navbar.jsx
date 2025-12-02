import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // controls dropdown

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${hasScrolled ? "shadow-xl border-b border-zinc-200/20 backdrop-blur-lg bg-black/20" : "bg-transparent"}
      `}
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
            {/* OUR SERVICES DROPDOWN AREA */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              {/* "Our Services" text is a link to /services */}
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
              >
                Our Services
                <span className="text-xs mt-0.5">▾</span>
              </Link>

              {/* Dropdown stays open as long as mouse is over this whole area */}
              {isServicesOpen && (
                <div className="absolute left-0 mt-3 w-60 rounded-xl bg-black/90 border border-zinc-700 shadow-xl backdrop-blur-xl">
                  <div className="py-2">
                    <Link
                      to="/services/mobile-detailing"
                      className="block px-4 py-2.5 text-sm text-white hover:text-[#e1b11b] hover:bg-white/5 uppercase"
                    >
                      Detail Packages
                    </Link>
                    <Link
                      to="/services/paint-correction"
                      className="block px-4 py-2.5 text-sm text-white hover:text-[#e1b11b] hover:bg-white/5 uppercase"
                    >
                      Paint Correction
                    </Link>
                    <Link
                      to="/services/ceramic-coating"
                      className="block px-4 py-2.5 text-sm text-white hover:text-[#e1b11b] hover:bg-white/5 uppercase"
                    >
                      Ceramic Coating
                    </Link>
                    <Link
                      to="/services/fleet-detailing"
                      className="block px-4 py-2.5 text-sm text-white hover:text-[#e1b11b] hover:bg-white/5 uppercase"
                    >
                      Commercial / Fleet Detailing
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className="text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Gallery
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
              to="/service-areas"
              className="text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Service Areas
            </Link>

            <Link
              to="/#contact"
              className="text-sm md:text-[15px] font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Phone Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:19293076986"
              className="px-3 py-2 rounded-md bg-[#dcab18] text-black text-sm md:text-base font-semibold tracking-wide border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all"
            >
              (929) 307-6986
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
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
      </div>

      {/* Modern Mobile Menu (full-screen overlay) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-black/80 backdrop-blur-xl z-40">
          <div className="max-w-7xl mx-auto px-4 pt-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/95 p-5 space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              {/* Section label */}
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-1">
                Navigate
              </p>

              {/* Mobile OUR SERVICES — text is link, arrow toggles dropdown */}
              <div className="flex items-center justify-between">
                <Link
                  to="/services"
                  onClick={closeMenu}
                  className="text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
                >
                  Our Services
                </Link>

                <button
                  type="button"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="text-xs font-medium text-zinc-400 hover:text-[#e1b11b]"
                >
                  {isServicesOpen ? "▴" : "▾"}
                </button>
              </div>

              {isServicesOpen && (
                <div className="mt-2 ml-2 space-y-2 border-l border-zinc-800 pl-3">
                  <Link
                    to="/services/mobile-detailing"
                    onClick={closeMenu}
                    className="block text-xs font-medium text-zinc-200 hover:text-[#e1b11b] uppercase"
                  >
                    Detail Packages
                  </Link>
                  <Link
                    to="/services/paint-correction"
                    onClick={closeMenu}
                    className="block text-xs font-medium text-zinc-200 hover:text-[#e1b11b] uppercase"
                  >
                    Paint Correction
                  </Link>
                  <Link
                    to="/services/ceramic-coating"
                    onClick={closeMenu}
                    className="block text-xs font-medium text-zinc-200 hover:text-[#e1b11b] uppercase"
                  >
                    Ceramic Coating
                  </Link>
                  <Link
                    to="/services/fleet-detailing"
                    onClick={closeMenu}
                    className="block text-xs font-medium text-zinc-200 hover:text-[#e1b11b] uppercase"
                  >
                    Commercial / Fleet Detailing
                  </Link>
                </div>
              )}

              <Link
                to="/gallery"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                Gallery
              </Link>

              <Link
                to="/blog"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                Blog
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                About
              </Link>

              <Link
                to="/service-areas"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                Service Areas
              </Link>

              <Link
                to="/#contact"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                Contact
              </Link>

              {/* Divider + CTA */}
              <div className="pt-4 border-t border-zinc-800 mt-2">
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-2">
                  Book Now
                </p>
                <a
                  href="tel:19293076986"
                  onClick={closeMenu}
                  className="block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold tracking-wide
                    bg-[#e1b11b]
                    text-black shadow-lg shadow-yellow-500/20
                    hover:brightness-110 transition-all"
                >
                  Call / Text (929) 307-6986
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
