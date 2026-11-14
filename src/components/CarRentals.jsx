import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RENTAL_FLEET } from '../data/rentalFleet';

const offerings = [
  {
    label: 'Luxury Rentals',
    text: 'Premium sedans and SUVs for weddings, events, and executive travel.',
  },
  {
    label: 'Exotic Rentals',
    text: 'Head-turning supercars and high-performance vehicles for special occasions.',
  },
  {
    label: 'Chauffeur Service',
    text: 'Professional drivers for airport runs, nights out, and corporate travel.',
  },
];

const CarRentals = () => {
  return (
    <section id="car-rentals" className="relative py-20 md:py-28 bg-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#e1b11b]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-zinc-800/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
              NAS AUTO SPA • CAR RENTALS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic tracking-tight">
              <span className="text-white">LUXURY &</span>{' '}
              <span className="text-[#e1b11b]">EXOTIC RENTALS</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-300 max-w-xl leading-relaxed">
              Arrive in style with our luxury, exotic, and chauffeur services — available
              across Connecticut, Massachusetts, and New York. Whether it&apos;s a wedding,
              corporate event, or a night out, we deliver a premium experience from pickup
              to drop-off.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Connecticut', 'Massachusetts', 'New York'].map((state) => (
                <span
                  key={state}
                  className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.16em] text-zinc-300"
                >
                  {state}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/luxury-car-rentals-ct-ny-ma#inventory"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#e1b11b] text-black text-sm font-semibold tracking-wide hover:bg-yellow-300 transition"
              >
                View inventory
              </Link>
              <Link
                to="/luxury-car-rentals-ct-ny-ma"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-yellow-400/30 text-yellow-400 text-sm font-semibold tracking-wide hover:bg-yellow-400/10 transition"
              >
                Explore rentals
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 text-sm font-semibold tracking-wide hover:border-zinc-500 hover:text-white transition"
              >
                Request a quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative"
          >
            <div className="fleet-photo-frame rounded-3xl border border-zinc-800 lg:aspect-[4/3]">
              <img
                src={
                  RENTAL_FLEET.find((c) => c.image)?.image ||
                  '/images/gallery/lamborghini-urus.jpg'
                }
                alt="Luxury and exotic car rental by NAS Auto Spa"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {offerings.map((item) => (
                <div
                  key={item.label}
                  className="border border-zinc-800 rounded-2xl bg-zinc-950/80 p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#e1b11b] mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarRentals;
