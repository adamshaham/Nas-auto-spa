import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-8">
      <div className="container mx-auto">
        {/* Added rounded black background container */}
        <div className="bg-black/90 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-800">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-3xl font-bold text-white tracking-wider">
              NAS AUTO SPA
            </a>

            {/* Slogan - Added in the middle */}
            <p className="hidden md:block text-gold-500 text-lg italic font-light tracking-wide">
              Your Cars, Our Passion
            </p>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <a href="#about" className="text-white text-lg hover:text-gold-400 transition-colors duration-300">About</a>
              <a href="#services" className="text-white text-lg hover:text-gold-400 transition-colors duration-300">Services</a>
              <a href="#pricing" className="text-white text-lg hover:text-gold-400 transition-colors duration-300">Pricing</a>
              <a href="#contact" className="text-white text-lg hover:text-gold-400 transition-colors duration-300">Contact</a>
              <button className="px-6 py-2 border-2 border-gold-500 text-gold-500 hover:bg-gold-500 
                               hover:text-black transition-all duration-300 text-lg rounded-full">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 mx-6">
            <div className="bg-black/95 backdrop-blur-lg rounded-2xl py-6 border border-gray-800">
              {/* Mobile Slogan */}
              <p className="text-gold-500 text-lg italic font-light tracking-wide text-center mb-6">
                Your Cars, Our Passion
              </p>
              <div className="flex flex-col items-center space-y-6">
                <a href="#about" className="text-white text-lg hover:text-gold-400 transition-colors duration-300">About</a>
                <a href="#services" className="text-white text-lg hover:text-gold-400 transition-colors duration-300">Services</a>
                <a href="#pricing" className="text-white text-lg hover:text-gold-400 transition-colors duration-300">Pricing</a>
                <a href="#contact" className="text-white text-lg hover:text-gold-400 transition-colors duration-300">Contact</a>
                <button className="px-6 py-2 border-2 border-gold-500 text-gold-500 hover:bg-gold-500 
                                 hover:text-black transition-all duration-300 text-lg rounded-full">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 