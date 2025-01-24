import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Anderson",
      role: "Luxury Car Owner",
      text: "NAS Auto Spa transformed my Mercedes-Benz. Their attention to detail and professional service is unmatched in the industry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Sarah Mitchell",
      role: "Car Enthusiast",
      text: "The Executive Package was worth every penny. My car looks better than showroom condition. Their ceramic coating is exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "David Thompson",
      role: "Classic Car Collector",
      text: "I trust only NAS Auto Spa with my vintage collection. Their knowledge and careful handling of classic vehicles is impressive.",
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
            Discover why luxury car owners trust NAS Auto Spa for their premium detailing needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} 
                 className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 
                          shadow-xl hover:shadow-2xl transition-all duration-300 
                          hover:-translate-y-2 relative group">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gold-500/10 rounded-full -translate-x-12 
                            -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
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
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Join our satisfied clients and experience the NAS Auto Spa difference
          </p>
          <button className="bg-gradient-to-r from-gold-600 to-gold-400 
                           text-black font-bold py-4 px-8 rounded-lg 
                           hover:from-gold-500 hover:to-gold-300 
                           transition-all duration-300 transform hover:scale-105">
            Book Your Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 