import React from 'react';

const ServicesList = () => {
  const services = [
    {
      title: "CAR DETAILING",
      image: "/images/gallery/car-detailing.jpg"
    },
    {
      title: "PAINT CORRECTION",
      image: "/images/gallery/paint-correction.jpg"
    },
    {
      title: "CERAMIC COATING",
      image: "/images/gallery/ceramic-coating.jpg"
    },
    {
      title: "COMMERCIAL",
      image: "/images/gallery/commercial-contracts.jpg",
      allowWrap: true
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-left mb-16">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            <span className="text-white">OUR</span>
            <span className="text-yellow-400"> SERVICES</span>
          </h2>
        </div>

        {/* Services Display Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                window.location.href = `#contact`;
              }}
              className="relative rounded-lg overflow-hidden cursor-pointer group transform transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Service Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-wide ${service.allowWrap ? '' : 'whitespace-nowrap'}`}>
                    {service.title}
                  </h3>
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