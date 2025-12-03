import React, { useState, useEffect } from 'react';
import porscheImage from '../assets/porsche-gt3rs.jpg'; // Make sure to add the image here

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Preload background image for smooth fade-in
  useEffect(() => {
    const img = new Image();
    img.src = porscheImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  // Track scroll position for parallax + motion
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Normalize scroll progress for animation (0 → 1)
  const progress = Math.min(scrollY / 400, 1);

  // Smooth scroll to sections
  const handleSmoothScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Layer with parallax */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 will-change-transform
                    ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${porscheImage})`,
          backgroundColor: 'black', // Fallback color
          transform: `translateY(${scrollY * 0.15}px) scale(1.05)`, // subtle parallax
        }}
      />

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* Cinematic Left Shadow Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 15%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.1) 45%, transparent 60%)',
        }}
      />

      {/* Main Content */}
      <div
        className="relative container mx-auto px-4 h-screen flex flex-col justify-center items-start text-left max-w-7xl transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translateY(${-progress * 40}px)`,
          opacity: 1 - progress * 0.4,
        }}
      >
        {/* Business Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="text-white block">NAS</span>
          <span className="text-yellow-400">
            AUTO SPA<span className="text-white">.</span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/90 text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed">
          Leading Mobile Car Detailing in Fairfield County.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
          <button
            onClick={handleSmoothScroll('services')}
            className="w-full py-4 bg-yellow-400 text-black text-lg font-bold tracking-wider rounded-lg hover:bg-yellow-300 transition-all duration-300 text-center"
          >
            EXPLORE SERVICES
          </button>
          <button
            onClick={handleSmoothScroll('pricing')}
            className="w-full py-4 border-2 border-yellow-400 text-yellow-400 text-lg font-bold tracking-wider rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center"
          >
            PRICING
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ease-out"
        style={{ opacity: 1 - progress * 1.5 }}
      >
        <span className="text-yellow-400 text-sm mb-2">Scroll for services</span>
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
