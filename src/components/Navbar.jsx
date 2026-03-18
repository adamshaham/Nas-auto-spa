import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const serviceDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinkClass =
    "text-[11px] xl:text-xs font-medium text-white hover:text-[#e1b11b] uppercase tracking-wide whitespace-nowrap";
  const divider = (
    <span className="text-zinc-600 text-[10px] select-none">|</span>
  );

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
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center mr-4">
            <img
              src="/images/navbarlogo.png"
              alt="NAS Auto Spa Logo"
              className="h-7 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav - only shows at lg (1024px+) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            <Link to="/mobile-detailing-fairfield-county-ct" className={navLinkClass}>
              Detail Packages
            </Link>
            {divider}
            <Link to="/paint-correction-fairfield-county-ct" className={navLinkClass}>
              Paint Correction
            </Link>
            {divider}
            <Link to="/ceramic-coating-fairfield-county-ct" className={navLinkClass}>
              Ceramic Coating
            </Link>
            {divider}
            <Link to="/fleet-detailing-fairfield-county-ct" className={navLinkClass}>
              Fleet Detailing
            </Link>
            {divider}
            <Link to="/gallery" className={navLinkClass}>
              Gallery
            </Link>
            {divider}
            <Link to="/about" className={navLinkClass}>
              About
            </Link>
            {divider}

            {/* SERVICE AREAS DROPDOWN */}
            <div className="relative" ref={serviceDropdownRef}>
              <button
                type="button"
                onClick={() => setIsServiceOpen((prev) => !prev)}
                className={`flex items-center gap-1 ${navLinkClass}`}
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

              <div
                className={`
                  absolute left-0 mt-2 min-w-[220px] rounded-xl border border-zinc-800 
                  bg-zinc-950/95 py-2 shadow-xl z-50
                  ${isServiceOpen ? "block" : "hidden"}
                `}
              >
                {[
                  { to: "/fairfield-ct", label: "Fairfield, CT" },
                  { to: "/westport-ct", label: "Westport, CT" },
                  { to: "/southport-ct", label: "Southport, CT" },
                  { to: "/stamford-ct", label: "Stamford, CT" },
                  { to: "/greenwich-ct", label: "Greenwich, CT" },
                  { to: "/norwalk-ct", label: "Norwalk, CT" },
                  { to: "/trumbull-ct", label: "Trumbull, CT" },
                  { to: "/stratford-ct", label: "Stratford, CT" },
                  { to: "/milford-ct", label: "Milford, CT" },
                ].map((town) => (
                  <Link
                    key={town.to}
                    to={town.to}
                    onClick={() => setIsServiceOpen(false)}
                    className="block px-4 py-2 text-xs text-zinc-200 hover:text-black hover:bg-[#e1b11b] uppercase tracking-wide"
                  >
                    {town.label}
                  </Link>
                ))}
              </div>
            </div>

            {divider}
            <Link to="/#contact" className={navLinkClass}>
              Contact
            </Link>
          </div>

          {/* Desktop Phone Button */}
          <div className="hidden lg:flex items-center flex-shrink-0 ml-4">
            <a
              href="tel:19293076986"
              className="px-4 py-1.5 rounded-md bg-[#dcab18] text-black text-[11px] xl:text-xs font-semibold tracking-wide border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all shadow-md whitespace-nowrap"
            >
              (929) 307-6986
            </a>
          </div>

          {/* Mobile Menu Button - shows below lg */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:19293076986"
              className="px-3 py-1.5 rounded-md bg-[#dcab18] text-black text-xs font-semibold tracking-wide border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all shadow-md whitespace-nowrap"
            >
              (929) 307-6986
            </a>
            <button
              className="text-white focus:outline-none"
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-black/80 backdrop-blur-xl z-40">
          <div className="max-w-7xl mx-auto px-4 pt-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/95 p-5 space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-1">
                Services
              </p>

              <Link to="/mobile-detailing-fairfield-county-ct" onClick={closeMenu} className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase">
                Detail Packages
              </Link>
              <Link to="/paint-correction-fairfield-county-ct" onClick={closeMenu} className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase">
                Paint Correction
              </Link>
              <Link to="/ceramic-coating-fairfield-county-ct" onClick={closeMenu} className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase">
                Ceramic Coating
              </Link>
              <Link to="/fleet-detailing-fairfield-county-ct" onClick={closeMenu} className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase">
                Fleet Detailing
              </Link>

              <div className="pt-2 border-t border-zinc-800 mt-2" />

              <Link to="/gallery" onClick={closeMenu} className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase">
                Gallery
              </Link>
              <Link to="/about" onClick={closeMenu} className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase">
                About
              </Link>
              <Link to="/fairfield-ct" onClick={closeMenu} className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase">
                Service Areas
              </Link>
              <Link to="/#contact" onClick={closeMenu} className="block text-sm font-medium text-white hover:text-[#e1b11b] uppercase">
                Contact
              </Link>

              <div className="pt-4 border-t border-zinc-800 mt-2">
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-2">
                  Book Now
                </p>
                <a
                  href="tel:19293076986"
                  onClick={closeMenu}
                  className="block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold tracking-wide bg-[#e1b11b] text-black shadow-lg shadow-yellow-500/20 hover:brightness-110 transition-all"
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
