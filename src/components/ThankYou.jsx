import React, { useEffect } from 'react';

const ThankYou = () => {
  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/95 z-50">
      <div className="text-center space-y-6 p-8 max-w-lg mx-auto">
        {/* Animated Checkmark */}
        <div className="mx-auto w-24 h-24 rounded-full border-4 border-gold-500 flex items-center justify-center animate-scale-up">
          <svg 
            className="w-16 h-16 text-gold-500 animate-check" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="3" 
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Thank You Message */}
        <h2 className="text-4xl font-bold text-white animate-fade-in">
          Thank You!
        </h2>
        <p className="text-xl text-gray-300 animate-fade-in-delay">
          Someone will reach out within 2-5 hours.
        </p>
      </div>
    </div>
  );
};

export default ThankYou; 