import React, { useEffect, useRef, useState } from 'react';

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

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '#contact';
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className="relative rounded-lg overflow-hidden cursor-pointer group will-change-transform"
      style={{
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 700ms ease-out, transform 700ms ease-out',
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="relative h-80 overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3
            className={`text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-wide ${
              service.allowWrap ? '' : 'whitespace-nowrap'
            }`}
          >
            {service.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const ServicesList = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            <span className="text-white">OUR</span>
            <span className="text-yellow-400"> SERVICES</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/services"
            className="px-10 py-4 text-lg font-bold tracking-wider border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            LEARN MORE
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesList;
