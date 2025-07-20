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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center items-start text-left max-w-7xl">


        {/* Premier Mobile Detailing Box */}


        {/* Business Name */}
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-white block">NAS</span>
          <span className="text-yellow-400">AUTO SPA<span className="text-white">.</span></span>
        </h1>

        {/* Description */}
        <p className="text-white/90 text-xl max-w-2xl mb-8 leading-relaxed">
          The best attention to detail. Luxury mobile car detailing service that comes to your driveway, office, or any location.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
          <a 
            href="#services" 
            className="w-full py-4 bg-yellow-400 text-black text-lg font-bold tracking-wider rounded-none hover:bg-yellow-300 transition-all duration-300 text-center"
          >
            EXPLORE SERVICES
          </a>
          <a 
            href="#contact" 
            className="w-full py-4 border-2 border-yellow-400 text-yellow-400 text-lg font-bold tracking-wider rounded-none hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center"
          >
            BOOK NOW
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gold text-sm mb-2">Scroll for services</span>
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 