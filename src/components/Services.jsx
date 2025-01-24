import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Essential Detail',
      price: 'From $129',
      features: [
        'Exterior Hand Wash',
        'Interior Vacuum & Wipe Down',
        'Wheel & Tire Cleaning',
        'Window Cleaning',
        'Air Freshener',
        'Tire Dressing'
      ],
      popular: false,
    },
    {
      title: 'Signature Detail',
      price: 'From $249',
      features: [
        'Essential Detail Package',
        'Clay Bar Treatment',
        'Paint Decontamination',
        'Interior Deep Clean',
        'Leather Conditioning',
        'Paint Sealant'
      ],
      popular: true,
    },
    {
      title: 'Executive Package',
      price: 'From $499',
      features: [
        'Signature Detail Package',
        'Paint Correction',
        'Ceramic Coating',
        'Engine Bay Detailing',
        'Headlight Restoration',
        'Premium Wax Protection'
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-100 to-white">
      <div className="container-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-500 font-semibold text-lg">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Premium Detailing Packages
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the perfect package to restore and protect your vehicle's beauty
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2
                ${service.popular ? 'shadow-2xl ring-2 ring-gold-500' : 'shadow-xl hover:shadow-2xl'}
                group`}
            >
              {service.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                               bg-gradient-to-r from-gold-600 to-gold-400 
                               text-white px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-4xl font-bold text-gold-500 mb-2">{service.price}</p>
                <p className="text-gray-500">Professional service</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300
                ${service.popular 
                  ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-white hover:from-gold-500 hover:to-gold-300' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                Select Package
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom package? Contact us for personalized service</p>
          <button className="text-gold-500 font-semibold hover:text-gold-600 transition-colors duration-300">
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 