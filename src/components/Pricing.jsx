import React from 'react';

const Pricing = () => {
  const packages = [
    {
      title: 'Stage 1',
      price: '$30',
      features: [
        { text: 'One Step Hand Wash', included: true },
        { text: 'Wheel and Tire Cleaning', included: true },
        { text: 'Window Cleaning', included: true },
        { text: 'Door Jams', included: true },
      ],
      popular: false,
    },
    {
      title: 'Stage 2',
      price: '$50',
      features: [
        { text: 'Hand Wash (2 stage)', included: true },
        { text: 'Wheel and Tire Cleaning', included: true },
        { text: 'Window Cleaning', included: true },
        { text: 'Door Jams', included: true },
        { text: 'Interior Refresh', included: true },
      ],
      popular: false,
    },
    {
      title: 'Stage 3',
      price: ' $150',
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
        { text: 'Full Interior Refresh', included: true },
      ],
      popular: true,
    },
  ];

  // Collect all unique features from all packages
  const allFeatureNames = Array.from(new Set(packages.flatMap(pkg => pkg.features.map(f => f.text))));

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

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className={`relative ${pkg.popular ? 'bg-black/80 border border-[#e1b11b]' : 'bg-black/50 border border-gray-800'} backdrop-blur-sm p-8 rounded-lg transform hover:scale-105 transition-all duration-300`}>
              {pkg.popular && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e1b11b]/20 to-transparent rounded-lg blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e1b11b]/10 to-transparent rounded-lg"></div>
                </>
              )}
              <div className="relative text-center mb-8">
                {pkg.popular && (
                  <div className="inline-block bg-[#e1b11b] text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{pkg.title}</h3>
                <p className="text-white/80">{i === 0 ? 'Exterior' : i === 1 ? 'Exterior + Interior' : 'Exterior + Interior'}</p>
              </div>
              <div className="relative text-center mb-8">
                <span className="text-4xl font-bold text-white">{pkg.price}{i === 2 ? <span className="text-base font-normal ml-1">starting at</span> : null}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {allFeatureNames.map((featureName, idx) => {
                  const included = pkg.features.some(f => f.text === featureName);
                  return (
                    <li key={idx} className={`flex items-center ${included ? 'text-white/80' : 'text-gray-500 line-through'}`}>
                      <svg className={`w-5 h-5 mr-2 ${included ? 'text-[#e1b11b]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {featureName}
                    </li>
                  );
                })}
              </ul>
              <a href="#contact" className={`block w-full py-3 text-center bg-[#e1b11b] text-black font-semibold rounded-lg hover:bg-[#e1b11b]/90 transition-all duration-300${pkg.popular ? ' relative' : ''}`}>
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 