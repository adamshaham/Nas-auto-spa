import React from 'react';

const ServicesList = () => {
  const services = [
    {
      title: "EXTERIOR DETAILING",
      description: "Complete exterior transformation with premium products and techniques",
      features: [
        "Paint Correction & Polish",
        "Ceramic Coating",
        "Paint Protection Film",
        "Wheel & Tire Detail",
        "Glass Treatment",
        "Chrome & Trim Restoration"
      ]
    },
    {
      title: "INTERIOR DETAILING",
      description: "Thorough interior cleaning and restoration for the ultimate cabin experience",
      features: [
        "Deep Leather Cleaning",
        "Carpet Extraction",
        "Odor Elimination",
        "Surface Protection",
        "Stain Removal",
        "Air Vent Cleaning"
      ]
    },
    {
      title: "PAINT PROTECTION",
      description: "Long-lasting protection solutions to preserve your vehicle's finish",
      features: [
        "Ceramic Coating",
        "Paint Protection Film",
        "Premium Wax",
        "Paint Sealant",
        "UV Protection",
        "Self-Healing Film"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
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
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col space-y-6 transform transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <div className="w-16 h-1 bg-gold-500 rounded-full"></div>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="flex-grow bg-black/20 rounded-xl p-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 text-sm group-hover:text-gold-400 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-400 
                                text-black font-semibold rounded-lg 
                                hover:from-gold-500 hover:to-gold-300 
                                transition-all duration-300 transform hover:scale-105
                                shadow-lg shadow-gold-500/20">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList; 