import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Anderson",
      role: "Luxury Car Owner",
      text: "NAS WORKS transformed my Mercedes-Benz. Their attention to detail and professional service is unmatched in the industry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },

    {
      name: "David Thompson",
      role: "Classic Car Collector",
      text: "I trust only NAS WORKS with my vintage collection. Their knowledge and careful handling of classic vehicles is impressive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-semibold text-lg">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Client Experiences
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover why luxury car owners trust NAS WORKS for their premium detailing needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} 
                 className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 
                          shadow-xl hover:shadow-2xl transition-all duration-300 
                          hover:-translate-y-2 relative group">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gold-500/10 rounded-full -translate-x-12 
                            -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Rating and Google Verification */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-blue-500 text-xs font-medium">Verified</span>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-8 relative z-10 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500"
                />
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gold-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}

      </div>
    </section>
  );
};

export default Testimonials; 