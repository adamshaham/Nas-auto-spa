import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Anderson",
      role: "Luxury Car Owner",
      text: "My Mercedes-Benz has never looked better. The attention to detail was incredible and the car feels brand new.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "David Thompson",
      role: "Classic Car Collector",
      text: "They handled my vintage collection with such care. I was impressed by their knowledge and professionalism.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Sophia Martinez",
      role: "SUV Enthusiast",
      text: "Incredible service! My Range Rover looks amazing. The team was punctual, friendly, and made sure I was happy with everything.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Emily Chen",
      role: "Busy Professional",
      text: "I love the convenience of their mobile detailing. They worked around my schedule and left my car spotless inside and out! Highly recommend NAS Auto Spa.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Carlos Rivera",
      role: "Sports Car Owner",
      text: "The paint correction and ceramic coating exceeded my expectations. My Porsche shines like never before.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
  ];

  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-semibold text-lg tracking-widest">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Client Experiences
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover why luxury car owners trust NAS Auto Spa for their premium detailing needs
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 px-4 relative w-full max-w-lg mx-auto">
          {/* Left Arrow */}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="p-2 rounded-full bg-gold-500/20 hover:bg-gold-500/40 text-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500 z-20"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="flex-1 flex justify-center items-center">
            <div
              key={current}
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 shadow-2xl border border-gold-500/40 relative group flex flex-col items-center text-center transition-all duration-500 animate-fade-in"
              style={{ minWidth: '320px', maxWidth: '420px' }}
            >
              {/* Decorative Gold Accent */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full blur-sm opacity-70"></div>
              {/* Rating and Google Verification */}
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="flex">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#ddc062"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#ddc062"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#ddc062"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ddc062"/>
                  </svg>
                  <span className="text-blue-500 text-xs font-medium">Verified</span>
                </div>
              </div>
              {/* Testimonial Text */}
              <p className="text-gray-100 mb-8 relative z-10 text-xl leading-relaxed font-light italic">
                "{testimonials[current].text}"
              </p>
              {/* Author Info */}
              <div className="flex flex-col items-center">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-gold-500 shadow-lg mb-2"
                />
                <h4 className="text-white font-semibold text-lg">{testimonials[current].name}</h4>
                <p className="text-gold-400 text-sm font-medium">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="p-2 rounded-full bg-gold-500/20 hover:bg-gold-500/40 text-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500 z-20"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-gold-500' : 'bg-gray-700'} focus:outline-none`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 