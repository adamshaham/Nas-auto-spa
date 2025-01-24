import React, { useState, useEffect } from 'react';
import porscheImage from '../assets/porsche-gt3rs.jpg'; // Make sure to add the image here

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = porscheImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000
                    ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${porscheImage})`,
          backgroundColor: 'black', // Fallback color
        }}
      />

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center">
        {/* Location Text */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl text-white tracking-[0.3em] font-light">FAIRFIELD COUNTY </h2>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-[80vw] mx-auto leading-tight tracking-[0.1em]">
          <span className="block mb-2">LUXURY DETAILING,</span>
          <span className="block">RIGHT AT YOUR DOORSTEP</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12">
          <button className="px-12 py-4 bg-gradient-to-r from-gold-600 to-gold-500 
                           text-black text-lg font-medium tracking-[0.2em] rounded-lg
                           hover:from-gold-500 hover:to-gold-400 
                           transition-all duration-300 transform hover:scale-105">
            BOOK NOW
          </button>
          <button className="px-12 py-4 border-2 border-gold-500 text-gold-500 
                           text-lg font-medium tracking-[0.2em] rounded-lg
                           hover:bg-gold-500 hover:text-black 
                           transition-all duration-300">
            OUR SERVICES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 