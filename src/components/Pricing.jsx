import React from 'react';

const Pricing = () => {
  const packages = [
    {
      title: 'Stage 1',
      price: '$30',
      features: [
        { text: 'Hand Wash (1 stage)', included: true },
        { text: 'Wheel & Tire Cleaning', included: true },
        { text: 'Window Cleaning', included: true },
        { text: 'Door Jams', included: true },
        { text: 'Wax', included: false },
        { text: 'Engine Bay Cleaning', included: false },
        { text: 'Vacuum', included: false },
        { text: 'Seat Cleaning', included: false },
        { text: 'Shampoo + Extraction', included: false },
        { text: 'Dashboard Cleaning', included: false },
        { text: 'Full Interior Refresh', included: false }
      ],
      popular: false,
    },
    {
      title: 'Stage 2',
      price: 'From $50',
      features: [
        { text: 'Hand Wash (2 stage)', included: true },
        { text: 'Wheel & Tire Cleaning', included: true },
        { text: 'Window Cleaning', included: true },
        { text: 'Door Jams', included: true },
        { text: 'Interior Refresh', included: true },
        { text: 'Wax', included: false },
        { text: 'Engine Bay Cleaning', included: false },
        { text: 'Seat Cleaning', included: false },
        { text: 'Shampoo + Extraction', included: false },
        { text: 'Dashboard Cleaning', included: false }
      ],
      popular: false,
    },
    {
      title: 'Stage 3',
      price: 'Starting at $150',
      features: [
        { text: 'Hand Wash (2 stage)', included: true },
        { text: 'Wax', included: true },
        { text: 'Wheel and Tire Shine', included: true },
        { text: 'Window Cleaning', included: true },
        { text: 'Door Jams', included: true },
        { text: 'Engine Bay Cleaning', included: true },
        { text: 'Vacuum', included: true },
        { text: 'Seat Cleaning', included: true },
        { text: 'Shampoo + Extraction', included: true },
        { text: 'Dashboard Cleaning', included: true },
        { text: 'Full Interior Refresh', included: true }
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-black to-gold-600/20">
      <div className="container-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            OUR PACKAGES
          </h2>
          <p className="text-gold-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Choose the perfect package to protect your vehicle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-8 transition-all duration-300 hover:-translate-y-2
                ${pkg.popular ? 'shadow-2xl ring-2 ring-gold-500' : 'shadow-xl hover:shadow-2xl'}
                group`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                               bg-gradient-to-r from-gold-600 to-gold-400 
                               text-white px-6 py-1 rounded-md text-sm font-semibold">
                  Most Popular
                </span>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {pkg.title === 'Stage 1' ? 'Exterior' :
                    pkg.title === 'Stage 2' ? 'Exterior & Interior' :
                    'Complete Protection'}
                </p>
                <p className="text-4xl font-bold text-gold-500 mb-2">{pkg.price}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    {feature.included ? (
                      <svg className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300
                ${pkg.popular
                  ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-white hover:from-gold-500 hover:to-gold-300'
                  : 'bg-gray-900 text-white hover:bg-gray-800'}`}
              >
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 