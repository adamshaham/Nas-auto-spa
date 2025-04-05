import React from 'react';

const ServicesList = () => {
  const services = [
    {
      title: "EXTERIOR DETAILING",
      description: "Complete exterior transformation with premium products and techniques",
      image: "/images/gallery/ext-gal.jpg",
      stage: "stage1"
    },
    {
      title: "INTERIOR DETAILING",
      description: "Thorough interior cleaning and restoration for the ultimate cabin experience",
      image: "/images/gallery/int-gal.jpg",
      stage: "stage2"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium Detailing Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the highest level of automotive care with our comprehensive detailing services
          </p>
        </div>

        {/* Services Display Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                window.location.href = `#contact?package=${service.stage}`;
              }}
              className="flex flex-col bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm 
                         rounded-lg overflow-hidden border border-gray-700/30 shadow-xl hover:shadow-gold-500/10
                         transform transition-all duration-500 hover:scale-[1.02] relative cursor-pointer"
            >
              {/* Service Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Service Content */}
              <div className="p-8">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                  <div className="w-20 h-1.5 bg-gold-500 rounded-md"></div>
                  <p className="text-gray-300 text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList; 