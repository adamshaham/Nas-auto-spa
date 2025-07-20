import React, { useState, useRef, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  const galleryImages = [
    {
      url: '/images/gallery/IMG_4271.png',
      title: 'BMW M4 ',
    },
    {
      url: '/images/gallery/IMG_4637.png',
      title: 'Porsche 911 Turbo',
    },
    {
      url: '/images/gallery/IMG_7717.png',
      title: 'BMW M6 Competition',
    },
    {
      url: '/images/gallery/lamborghini-urus.jpg',
      title: 'Lamborghini Urus',
    },
    {
      url: '/images/gallery/bmw-m2.jpg',
      title: 'BMW M2 Competition',
      
    },
    {
      url: '/images/gallery/range-rover.jpg',
      title: 'Range Rover',
    }
  ];

  const updateScrollProgress = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = (container.scrollLeft / scrollWidth) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollProgress);
      // Initial progress
      updateScrollProgress();
      
      return () => container.removeEventListener('scroll', updateScrollProgress);
    }
  }, []);

  const scrollGallery = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.85; // 85% of container width
      const newScrollPosition = container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
        </div>

        {/* Gallery Carousel */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scrollGallery('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-3 sm:p-4 rounded-full
                     backdrop-blur-sm transition-all duration-300 transform hover:scale-110 opacity-90"
          >
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => scrollGallery('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-3 sm:p-4 rounded-full
                     backdrop-blur-sm transition-all duration-300 transform hover:scale-110 opacity-90"
          >
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Gallery Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-6 scrollbar-hide px-1 md:px-0"
          >
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="flex-none w-[90vw] sm:w-[70vw] max-w-[400px] md:max-w-[700px] mx-auto snap-center"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl group border border-gold-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover bg-black transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6 z-20 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/60 backdrop-blur-sm p-2 sm:p-4 rounded-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-base sm:text-xl font-bold mb-1 sm:mb-2">{image.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute left-0 bottom-0 w-full h-1 bg-gray-800/50 backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full transform transition-transform duration-300 scale-95 animate-fade-in">
              <img 
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
              <button 
                className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery; 