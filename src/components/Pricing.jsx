import React from 'react';

const Pricing = () => {
  const quickWashPackage = {
    title: 'QUICK WASH',
    price: '$30',
    subtitle: 'EXTERIOR + INTERIOR',
    features: [
      { text: 'QUICK INTERIOR + EXTERIOR REFRESH', included: true },
    ],
    popular: false,
  };

  const mainPackages = [
    {
      title: 'STAGE 1',
      price: '$199',
      priceNote: 'STARTING AT',
      subtitle: 'EXTERIOR + INTERIOR',
      features: [
        { text: 'HAND WASH (2 STAGE)', included: true },
        { text: 'WHEEL AND TIRE CLEANING', included: true },
        { text: 'WINDOW CLEANING', included: true },
        { text: 'DOOR JAMS', included: true },
        { text: 'FULL EXTERIOR WAX', included: true },
        { text: 'ENGINE BAY CLEANING', included: true },
        { text: 'INTERIOR STEAM CLEANING', included: true },
        { text: 'SHAMPOO EXTRACTION', included: true },
        { text: '', included: false }, // Spacer
        { text: '', included: false }, // Spacer
        { text: '', included: false }, // Spacer
      ],
      popular: true,
    },
    {
      title: 'STAGE 2',
      price: '$299',
      subtitle: 'EXTERIOR + INTERIOR',
      features: [
        { text: 'HAND WASH (2 STAGE)', included: true },
        { text: 'ENGINE BAY CLEANING', included: true },
        { text: 'WHEEL AND TIRE CLEANING', included: true },
        { text: 'WINDOW CLEANING', included: true },
        { text: 'DOOR JAMS', included: true },
        { text: 'FULL EXTERIOR WAX', included: true },
        { text: 'INTERIOR STEAM CLEANING', included: true },
        { text: 'SHAMPOO EXTRACTION', included: true },
        { text: '1 STEP PAINT CORRECTION', included: true },
        { text: 'CLAY BAR', included: true },
        { text: '', included: false }, // Spacer
      ],
      popular: true,
    },
    {
      title: 'STAGE 3',
      price: '$399',
      subtitle: 'PAINT CORRECTION + CERAMIC COATING',
      features: [
        { text: 'HAND WASH (2 STAGE)', included: true },
        { text: 'ENGINE BAY CLEANING', included: true },
        { text: 'WHEEL AND TIRE CLEANING', included: true },
        { text: 'WINDOW CLEANING', included: true },
        { text: 'DOOR JAMS', included: true },
        { text: 'FULL EXTERIOR WAX', included: true },
        { text: 'INTERIOR STEAM CLEANING', included: true },
        { text: 'SHAMPOO EXTRACTION', included: true },
        { text: '1 STEP PAINT CORRECTION', included: true },
        { text: 'CLAY BAR', included: true },
        { text: 'CERAMIC COATING', included: true },
      ],
      popular: true,
    },
  ];

  const enhancementsPackage = {
    title: 'ENHANCEMENTS',
    subtitle: 'ADDITIONAL SERVICES',
    features: [
      { text: 'PAINT CORRECTION', included: true },
      { text: 'CERAMIC COATING', included: true },
      { text: 'ENGINE BAY CLEANING', included: true },
      { text: 'HEADLIGHT RESTORATION', included: true },
      { text: '', included: false }, // Spacer
      { text: '', included: false }, // Spacer
      { text: '', included: false }, // Spacer
      { text: '', included: false }, // Spacer
      { text: '', included: false }, // Spacer
      { text: '', included: false }, // Spacer
      { text: '', included: false }, // Spacer
      { text: '', included: false }, // Spacer
      { text: '', included: false }, // Spacer
    ],
    popular: false,
  };

  const renderPackageCard = (pkg) => (
    <div className={`relative ${pkg.popular ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-yellow-400/50' : 'bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50'} backdrop-blur-sm p-4 md:p-6 rounded-lg transform hover:scale-[1.02] hover:border-yellow-400/80 transition-all duration-300 flex flex-col h-full w-full`}>

      <div className="relative mb-4 md:mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{pkg.title}</h3>
        <p className="text-yellow-400 text-xs md:text-sm font-semibold mb-3 md:mb-4">{pkg.subtitle}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl md:text-3xl font-bold text-white">{pkg.price}</span>
          {pkg.priceNote && (
            <span className="text-gray-400 text-xs md:text-sm">{pkg.priceNote}</span>
          )}
        </div>
      </div>
      <ul className="space-y-2 md:space-y-2.5 mb-4 md:mb-6 flex-grow">
        {pkg.features.map((feature, idx) => (
          feature.text ? (
            <li key={idx} className="flex items-start text-white/90 text-xs">
              <svg className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="break-words">{feature.text}</span>
            </li>
          ) : (
            <li key={idx} className="h-4 md:h-5"></li>
          )
        ))}
      </ul>
      <a href="#contact" className={`block w-full py-2 md:py-3 text-center mt-auto ${pkg.popular ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-gray-800 text-yellow-400 border border-yellow-400/30 hover:bg-yellow-400/10'} font-semibold rounded-lg transition-all duration-300 text-sm md:text-base`}>
        Book Now
      </a>
    </div>
  );

  const renderHorizontalEnhancementsCard = (pkg) => (
    <div className={`relative bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 backdrop-blur-sm p-4 md:p-6 rounded-lg transform hover:scale-[1.01] hover:border-yellow-400/80 transition-all duration-300 overflow-hidden`}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
        {/* Left side: Title, Subtitle, Price, and Features aligned horizontally */}
        <div className="flex-shrink-0 text-left w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-8">
            <div className="flex-shrink-0">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{pkg.title}</h3>
              <p className="text-yellow-400 text-xs md:text-sm font-semibold mb-2">{pkg.subtitle}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-bold text-white">{pkg.price}</span>
              </div>
            </div>
            {/* Features aligned with title on same horizontal line */}
            <ul className="flex flex-col md:flex-row gap-3 md:gap-6">
              {pkg.features.filter(f => f.text).map((feature, idx) => (
                <li key={idx} className="flex items-center text-white/90 text-xs">
                  <svg className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="break-words">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right side: Button */}
        <div className="flex-shrink-0 w-full md:w-auto">
          <a href="#contact" className="block w-full md:w-auto px-6 md:px-8 py-2 md:py-3 text-center bg-gray-800 text-yellow-400 border border-yellow-400/30 hover:bg-yellow-400/10 font-semibold rounded-lg transition-all duration-300 text-sm md:text-base">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="pricing" className="py-12 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-left mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-white">OUR</span>
            <span className="text-yellow-400"> PACKAGES</span>
          </h2>
        </div>

        {/* Quick Wash Row: Spans horizontally */}
        <div className="w-full mb-4 md:mb-6">
          {renderHorizontalEnhancementsCard(quickWashPackage)}
        </div>

        {/* Main Packages Row: Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          {mainPackages.map((pkg, i) => (
            <div key={i} className="w-full">
              {renderPackageCard(pkg)}
            </div>
          ))}
        </div>

        {/* Enhancements Row: Spans horizontally */}
        <div className="w-full">
          {renderHorizontalEnhancementsCard(enhancementsPackage)}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 