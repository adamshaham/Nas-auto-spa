import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Start fading out after 100px of scroll
      const opacity = Math.max(0, 1 - (scrollPosition - 100) / 200);
      setIsVisible(opacity > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 px-6 py-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-3xl font-bold tracking-wider flex items-center gap-3">
            <img src="/images/nas-logo 1 (1).png" alt="NAS Logo" className="h-10 md:h-16 w-auto" />
          </Link>

          {/* Desktop Menu - Moved to center */}
          <div className="hidden md:flex items-center space-x-12">
            {/* CHANGED: Added font-bold */}
            <Link to="/services" className="text-[#e1b11b] text-lg font-bold hover:text-[#e1b11b]/80 transition-colors duration-300 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-md">Services</Link>
            <Link to="/Blog" className="text-[#e1b11b] text-lg font-bold hover:text-[#e1b11b]/80 transition-colors duration-300 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-md">Blog</Link>

          </div>

          {/* Book Now Button and Slogan - Centered */}
          <div className="hidden md:flex flex-col items-center">
            {/* CHANGED: Added font-bold */}
            <a href="#pricing" className="px-6 py-2 bg-[#e1b11b] text-black hover:bg-[#e1b11b]/90 
                             transition-all duration-300 text-lg font-bold rounded-md">
              Book Now
            </a>
            <p className="text-[#e1b11b] text-sm font-bold italic tracking-wide mt-2">
              Your Cars, Our Passion
            </p>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#e1b11b] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 mx-6">
            <div className="bg-black/95 backdrop-blur-lg rounded-lg py-6 border border-gray-800">
              <div className="flex flex-col items-center space-y-6">
                {/* CHANGED: Added font-bold to mobile links */}
                <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-[#e1b11b] text-lg font-bold hover:text-[#e1b11b]/80 transition-colors duration-300 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-md">Services</Link>
                <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-[#e1b11b] text-lg font-bold hover:text-[#e1b11b]/80 transition-colors duration-300 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-md">Blog</Link>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-[#e1b11b] text-lg font-bold hover:text-[#e1b11b]/80 transition-colors duration-300 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-md">Pricing</a>

                
                <div className="flex flex-col items-center">
                  {/* CHANGED: Added font-bold to mobile button */}
                  <a href="#pricing" className="px-6 py-2 bg-[#e1b11b] text-black hover:bg-[#e1b11b]/90 
                                     transition-all duration-300 text-lg font-bold rounded-md">
                    Book Now
                  </a>
                  <p className="text-[#e1b11b] text-sm font-bold italic tracking-wide mt-2">
                    Your Cars, Our Passion
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;