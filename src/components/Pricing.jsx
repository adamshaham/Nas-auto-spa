import React from 'react';
import { motion } from 'framer-motion';
import { DEPOSIT_POLICY } from '../data/pricing';

const packages = [
  {
    label: 'PACKAGE 01',
    title: 'FULL DETAIL',
    subtitle:
      'A complete reset, inside and out — the fastest way to fall back in love with your car.',
    image: '/images/gallery/car-detailing.jpg',
    imageAlt: 'Mobile full interior and exterior detail in Fairfield County CT',
    sections: [
      {
        title: 'Exterior',
        items: [
          'High pH soap pre-rinse',
          'Full contact wash',
          'Wheel cleaning',
          'Tire cleaning',
          'Window cleaning',
          'Door jams',
          'Trunk jams',
          'Tire shine',
        ],
      },
      {
        title: 'Interior',
        items: [
          'Interior steam cleaning (if necessary)',
          'Carpet extraction (if necessary)',
          'Odor removal (if necessary)',
          'Dash & upholstery wipe-down',
          'Thorough vacuum',
          'Seat cleaning',
          'Window cleaning',
          'Trunk cleaning',
        ],
      },
    ],
    popular: false,
    bookKey: 'FULL DETAIL',
  },
  {
    label: 'PACKAGE 02 · PAINT CORRECTION',
    title: 'PAINT CORRECTION',
    subtitle:
      'Full detail plus correction that removes swirls and brings the clear coat back to life.',
    image: '/images/gallery/paint-correction.jpg',
    imageAlt: 'Paint correction on gloss black paint in Connecticut',
    bullets: [
      'Full interior & exterior detail',
      'Clay bar & surface decontamination',
      '1-step paint correction (removes swirls)',
      'Deep gloss and clarity restored',
    ],
    popular: false,
    bookKey: 'PAINT CORRECTION',
  },
  {
    label: 'PACKAGE 03 · CERAMIC COATING',
    title: 'CERAMIC COATING',
    subtitle:
      'Maximum protection — choose 3-year, 6-year, or 10-year System X ceramic based on how long you\'re keeping the car.',
    image: '/images/gallery/ceramic-coating-package.jpg',
    imageAlt: 'Technician applying System X MAX ceramic coating with a microfiber applicator',
    bullets: [
      'Full interior & exterior detail',
      '1-step paint correction (removes swirls)',
      '3-year, 6-year, or 10-year System X ceramic (your choice)',
      'Long-lasting gloss & easier washing',
    ],
    popular: true,
    bookKey: 'CERAMIC COATING',
  },
];

const maintenanceWash = {
  label: 'Monthly · Maintenance',
  title: 'MAINTENANCE WASH',
  subtitle: '4× per month — full interior & exterior refresh. Keep coated or corrected paint looking its best.',
  image: '/images/gallery/ext-gal.jpg',
  imageAlt: 'Exterior maintenance wash on a vehicle in Fairfield County CT',
  bullets: [
    '4 washes per month',
    'Full exterior hand wash',
    'Full interior refresh',
    'Wheel & tire cleaning',
    'Window cleaning',
    'Vacuum & wipe-down',
  ],
  bookKey: 'MAINTENANCE WASH',
};

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-[#e1b11b] shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const Pricing = () => {
  const scrollToBookingForm = (key) => {
    if (typeof window === 'undefined') return;

    window.dispatchEvent(new CustomEvent('nasPackageSelect', { detail: key }));

    const isDesktop = window.innerWidth >= 1024;
    const targetId = isDesktop ? 'hero-quote' : 'contact';
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.location.href = isDesktop ? '/#hero-quote' : '/#contact';
  };

  return (
    <section id="pricing" className="relative py-16 md:py-28 bg-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-64 h-64 bg-[#e1b11b]/10 rounded-full blur-3xl opacity-60"
        />
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e1b11b] mb-4">
            Mobile · Fairfield County · We bring water &amp; power
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
            <span className="text-white">Fairfield County roads are brutal.</span>{' '}
            <span className="hero-shine italic">Your paint doesn&apos;t have to be.</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            Every package is a complete, start-to-finish job — detailed, corrected, and protected
            at your home or office. Pick the level that fits how long you&apos;re keeping the car.
          </p>
        </div>

        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-zinc-500 whitespace-nowrap">
            Our packages
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.bookKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col h-full min-h-0 overflow-hidden rounded-2xl bg-zinc-950/90 ${
                pkg.popular
                  ? 'border-2 border-[#e1b11b] shadow-[0_0_40px_rgba(225,177,27,0.12)]'
                  : 'border border-white/10'
              }`}
            >
              <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-zinc-900">
                <img
                  src={pkg.image}
                  alt={pkg.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {pkg.popular && (
                  <span className="absolute top-3 left-3 rounded-full bg-[#e1b11b] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6 min-h-[28rem]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e1b11b] mb-2 shrink-0">
                  {pkg.label}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2 shrink-0">
                  {pkg.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5 min-h-[3.25rem] shrink-0">
                  {pkg.subtitle}
                </p>

                <div className="mb-6 flex flex-1 flex-col min-h-[14.5rem]">
                  {pkg.sections ? (
                    <div className="grid grid-cols-2 gap-4 flex-1 items-start">
                      {pkg.sections.map((section) => (
                        <div key={section.title} className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 mb-2">
                            {section.title}
                          </p>
                          <ul className="space-y-1.5">
                            {section.items.map((line) => (
                              <li
                                key={line}
                                className="flex gap-1.5 text-[11px] sm:text-xs text-zinc-300 leading-snug"
                              >
                                <CheckIcon />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2.5 flex-1">
                      {pkg.bullets.map((line) => (
                        <li
                          key={line}
                          className="flex gap-2.5 text-sm text-zinc-300 leading-snug"
                        >
                          <CheckIcon />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => scrollToBookingForm(pkg.bookKey)}
                  className={`mt-auto w-full shrink-0 rounded-xl py-3 text-sm font-bold tracking-wide transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-[#e1b11b] text-black hover:bg-amber-300 shadow-[0_4px_20px_rgba(225,177,27,0.35)]'
                      : 'border border-[#e1b11b]/40 text-[#e1b11b] bg-transparent hover:bg-[#e1b11b]/10'
                  }`}
                >
                  Get Quote
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-8 lg:mt-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            <div className="relative h-48 sm:h-56 lg:h-auto lg:w-[min(42%,22rem)] shrink-0 bg-zinc-900">
              <img
                src={maintenanceWash.image}
                alt={maintenanceWash.imageAlt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-black/40 lg:bg-gradient-to-t lg:from-black/50 lg:to-transparent" />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5 md:p-6 lg:p-8 lg:grid lg:grid-cols-[1fr_auto] lg:gap-8 lg:items-center">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e1b11b] mb-2">
                  {maintenanceWash.label}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">
                  {maintenanceWash.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4 lg:mb-5 max-w-xl">
                  {maintenanceWash.subtitle}
                </p>
                <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2">
                  {maintenanceWash.bullets.map((line) => (
                    <li
                      key={line}
                      className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300"
                    >
                      <CheckIcon />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => scrollToBookingForm(maintenanceWash.bookKey)}
                className="shrink-0 w-full lg:w-auto rounded-xl border border-[#e1b11b]/40 px-8 py-3 text-sm font-bold tracking-wide text-[#e1b11b] transition-all duration-200 hover:bg-[#e1b11b]/10 lg:self-center"
              >
                Get Quote
              </button>
            </div>
          </div>
        </motion.div>

        <p className="mt-8 md:mt-10 text-sm text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
          Ceramic packages are installed with{' '}
          <strong className="font-medium text-zinc-200">System X</strong> — we&apos;re a certified
          installer. Choose <strong className="font-medium text-zinc-200">3-year</strong>,{' '}
          <strong className="font-medium text-zinc-200">6-year</strong>, or{' '}
          <strong className="font-medium text-zinc-200">10-year</strong> protection when you book.
          Not sure which package fits? Tell us about your car and we&apos;ll point you to the right one.
        </p>
        <p className="mt-4 text-xs text-zinc-500 text-center max-w-2xl mx-auto leading-relaxed">
          {DEPOSIT_POLICY}
        </p>
      </div>
    </section>
  );
};

export default Pricing;