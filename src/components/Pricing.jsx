import React from 'react';
import { motion } from 'framer-motion';

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
        { text: '', included: false },
        { text: '', included: false },
        { text: '', included: false },
      ],
      popular: true,
    },
    {
      title: 'STAGE 2',
      price: '$299',
      priceNote: 'STARTING AT',
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
        { text: '', included: false },
      ],
      popular: true,
    },
    {
      title: 'STAGE 3',
      price: '$399',
      priceNote: 'STARTING AT',
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
      { text: '', included: false },
      { text: '', included: false },
      { text: '', included: false },
      { text: '', included: false },
      { text: '', included: false },
      { text: '', included: false },
      { text: '', included: false },
      { text: '', included: false },
      { text: '', included: false },
    ],
    popular: false,
  };

  // 🔥 When a package is clicked: fire event + scroll to form
  const handlePackageClick = (key) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('nasPackageSelect', { detail: key })
      );

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = '/#contact';
      }
    }
  };

  const renderPackageCard = (pkg) => (
    <div
      className={`relative ${
        pkg.popular
          ? 'bg-gradient-to-br from-zinc-950/90 to-black/95 border-2 border-yellow-400/60'
          : 'bg-gradient-to-br from-black/80 via-zinc-950/80 to-yellow-900/10 border border-yellow-400/20'
      } backdrop-blur-sm p-4 md:p-6 rounded-lg transform hover:scale-[1.02] hover:border-yellow-400/80 transition-all duration-300 flex flex-col h-full w-full`}
    >
      <div className="relative mb-4 md:mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {pkg.title}
        </h3>
        <p className="text-yellow-400 text-xs md:text-sm font-semibold mb-3 md:mb-4">
          {pkg.subtitle}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl md:text-3xl font-bold text-white">
            {pkg.price}
          </span>
          {pkg.priceNote && (
            <span className="text-gray-400 text-xs md:text-sm">
              {pkg.priceNote}
            </span>
          )}
        </div>
      </div>
      <ul className="space-y-2 md:space-y-2.5 mb-4 md:mb-6 flex-grow">
        {pkg.features.map((feature, idx) =>
          feature.text ? (
            <li key={idx} className="flex items-start text-white/90 text-xs">
              <svg
                className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="break-words">{feature.text}</span>
            </li>
          ) : (
            <li key={idx} className="h-4 md:h-5"></li>
          )
        )}
      </ul>

      <button
        type="button"
        onClick={() => handlePackageClick(pkg.title)}
        className={`block w-full py-2 md:py-3 text-center mt-auto ${
          pkg.popular
            ? 'bg-yellow-400 text-black hover:bg-yellow-300'
            : 'bg-black/50 text-yellow-400 border border-yellow-400/30 hover:bg-yellow-400/10'
        } font-semibold rounded-lg transition-all duration-300 text-sm md:text-base`}
      >
        Book Now
      </button>
    </div>
  );

  const renderHorizontalEnhancementsCard = (pkg) => (
    <div className="relative bg-gradient-to-br from-black/80 via-zinc-950/80 to-yellow-900/10 border border-yellow-400/20 backdrop-blur-sm p-4 md:p-6 rounded-lg transform hover:scale-[1.01] hover:border-yellow-400/80 transition-all duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
        <div className="flex-shrink-0 text-left w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-8">
            <div className="flex-shrink-0">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                {pkg.title}
              </h3>
              <p className="text-yellow-400 text-xs md:text-sm font-semibold mb-1">
                {pkg.subtitle}
              </p>

              {/* 🔥 Show price here if it exists (Quick Wash will show $30 on mobile & desktop) */}
              {pkg.price && (
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-lg md:text-2xl font-bold text-white">
                    {pkg.price}
                  </span>
                  {pkg.priceNote && (
                    <span className="text-gray-400 text-xs md:text-sm">
                      {pkg.priceNote}
                    </span>
                  )}
                </div>
              )}
            </div>

            <ul className="flex flex-col md:flex-row gap-3 md:gap-6">
              {pkg.features
                .filter((f) => f.text)
                .map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-white/90 text-xs"
                  >
                    <svg
                      className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="break-words">{feature.text}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={() => handlePackageClick(pkg.title === 'ENHANCEMENTS' ? 'ENHANCEMENTS' : 'QUICK WASH')}
            className="block w-full md:w-auto px-6 md:px-8 py-2 md:py-3 text-center bg-black/50 text-yellow-400 border border-yellow-400/30 hover:bg-yellow-400/10 font-semibold rounded-lg transition-all duration-300 text-sm md:text-base"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="pricing"
      className="relative py-12 md:py-24 bg-black overflow-hidden"
    >
      {/* BACKGROUND BLOBS */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-64 h-64 bg-[#e1b11b]/10 rounded-full blur-3xl opacity-60"
        />
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-left mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-white">OUR</span>
            <span className="text-yellow-400"> PACKAGES</span>
          </h2>
        </div>

        {/* Quick Wash */}
        <div className="w-full mb-4 md:mb-6">
          {renderHorizontalEnhancementsCard(quickWashPackage)}
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          {mainPackages.map((pkg, i) => (
            <div key={i} className="w-full">
              {renderPackageCard(pkg)}
            </div>
          ))}
        </div>

        {/* Enhancements */}
        <div className="w-full">
          {renderHorizontalEnhancementsCard(enhancementsPackage)}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
