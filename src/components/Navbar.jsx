import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false); // Service Areas dropdown

  const serviceDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close Service Areas dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target)
      ) {
        setIsServiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        mx-auto
        ${
          hasScrolled
            ? "shadow-2xl border-b border-zinc-200/20 backdrop-blur-lg bg-black/40"
            : "shadow-lg bg-black/20 backdrop-blur-md"
        }
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
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {/* SERVICES DIRECTLY ON NAVBAR */}
            <Link
              to="/mobile-detailing-fairfield-county-ct"
              className="text-xs md:text-sm font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Detail Packages
            </Link>
            <Link
              to="/paint-correction-fairfield-county-ct"
              className="text-xs md:text-sm font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Paint Correction
            </Link>
            <Link
              to="/ceramic-coating-fairfield-county-ct"
              className="text-xs md:text-sm font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Ceramic Coating
            </Link>
            <Link
              to="/fleet-detailing-fairfield-county-ct"
              className="text-xs md:text-sm font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Fleet Detailing
            </Link>

            <Link
              to="/gallery"
              className="text-xs md:text-sm font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Gallery
            </Link>

            <Link
              to="/about"
              className="text-xs md:text-sm font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              About
            </Link>

            {/* SERVICE AREAS CLICK DROPDOWN */}
            <div className="relative" ref={serviceDropdownRef}>
              <button
                type="button"
                onClick={() => setIsServiceOpen((prev) => !prev)}
                className="flex items-center gap-1 text-xs md:text-sm font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
              >
                <span>Service Areas</span>
                <svg
                  className={`w-3 h-3 mt-[1px] transition-transform duration-150 ${
                    isServiceOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div
                className={`
                  absolute left-0 mt-2 min-w-[220px] rounded-xl border border-zinc-800 
                  bg-zinc-950/95 py-2 shadow-xl z-50
                  ${isServiceOpen ? "block" : "hidden"}
                `}
              >
                <Link
                  to="/fairfield-ct"
                  onClick={() => setIsServiceOpen(false)}
                  className="block px-4 py-2 text-xs md:text-sm text-zinc-200 hover:text-black hover:bg-[#e1b11b] uppercase tracking-wide"
                >
                  Fairfield, CT
                </Link>
                <Link
                  to="/westport-ct"
                  onClick={() => setIsServiceOpen(false)}
                  className="block px-4 py-2 text-xs md:text-sm text-zinc-200 hover:text-black hover:bg-[#e1b11b] uppercase tracking-wide"
                >
                  Westport, CT
                </Link>
                <Link
                  to="/southport-ct"
                  onClick={() => setIsServiceOpen(false)}
                  className="block px-4 py-2 text-xs md:text-sm text-zinc-200 hover:text-black hover:bg-[#e1b11b] uppercase tracking-wide"
                >
                  Southport, CT
                </Link>
                <Link
                  to="/stamford-ct"
                  onClick={() => setIsServiceOpen(false)}
                  className="block px-4 py-2 text-xs md:text-sm text-zinc-200 hover:text-black hover:bg-[#e1b11b] uppercase tracking-wide"
                >
                  Stamford, CT
                </Link>
                <Link
                  to="/greenwich-ct"
                  onClick={() => setIsServiceOpen(false)}
                  className="block px-4 py-2 text-xs md:text-sm text-zinc-200 hover:text-black hover:bg-[#e1b11b] uppercase tracking-wide"
                >
                  Greenwich, CT
                </Link>
                <Link
                  to="/norwalk-ct"
                  onClick={() => setIsServiceOpen(false)}
                  className="block px-4 py-2 text-xs md:text-sm text-zinc-200 hover:text-black hover:bg-[#e1b11b] uppercase tracking-wide"
                >
                  Norwalk, CT
                </Link>
                <Link
                  to="/trumbull-ct"
                  onClick={() => setIsServiceOpen(false)}
                  className="block px-4 py-2 text-xs md:text-sm text-zinc-200 hover:text-black hover:bg-[#e1b11b] uppercase tracking-wide"
                >
                  Trumbull, CT
                </Link>
                <Link
                  to="/stratford-ct"
                  onClick={() => setIsServiceOpen(false)}
                  className="block px-4 py-2 text-xs md:text-sm text-zinc-200 hover:text-black hover:bg-[#e1b11b] uppercase tracking-wide"
                >
                  Stratford, CT
                </Link>
                <Link
                  to="/milford-ct"
                  onClick={() => setIsServiceOpen(false)}
                  className="block px-4 py-2 text-xs md:text-sm text-zinc-200 hover:text-black hover:bg-[#e1b11b] uppercase tracking-wide"
                >
                  Milford, CT
                </Link>
              </div>
            </div>

            <Link
              to="/#contact"
              className="text-xs md:text-sm font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Phone Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:19293076986"
              className="px-3 py-1.5 rounded-md bg-[#dcab18] text-black text-xs md:text-sm font-semibold tracking-wide border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all shadow-md"
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
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Modern Mobile Menu (full-screen overlay) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-black/80 backdrop-blur-xl z-40">
          <div className="max-w-7xl mx-auto px-4 pt-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/95 p-5 space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              {/* Section label */}
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-1">
                Navigate
              </p>

              {/* SERVICES DIRECTLY IN MOBILE MENU */}
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mt-1 mb-1">
                Services
              </p>

              <Link
                to="/mobile-detailing-fairfield-county-ct"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                Detail Packages
              </Link>
              <Link
                to="/paint-correction-fairfield-county-ct"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                Paint Correction
              </Link>
              <Link
                to="/ceramic-coating-fairfield-county-ct"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                Ceramic Coating
              </Link>
              <Link
                to="/fleet-detailing-fairfield-county-ct"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                Fleet Detailing
              </Link>

              <div className="pt-2 border-t border-zinc-800 mt-2" />

              <Link
                to="/gallery"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                Gallery
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase"
              >
                About
              </Link>

              {/* Service areas link in mobile (you can change this to a hub page if you create one) */}
              <Link
                to="/fairfield-ct"
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
