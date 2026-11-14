import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  RENTAL_FLEET,
  RENTAL_FLEET_META,
  formatRentalSpec,
  rentalImageAlt,
} from '../data/rentalFleet';

const FleetCard = ({ car, index, requestAnchor }) => {
  const spec = formatRentalSpec(car);
  return (
    <motion.li
      id={car.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group scroll-mt-28"
    >
      <article>
        <a href={requestAnchor} className="block">
          <div className="relative overflow-hidden bg-[#0a0a0a] aspect-[16/10] border border-white/[0.06] group-hover:border-[#e1b11b]/35 transition-colors duration-300">
            {car.image ? (
              <img
                src={car.image}
                alt={rentalImageAlt(car)}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain object-center p-3 sm:p-4 transition-transform duration-700 group-hover:scale-[1.04]"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold italic text-zinc-800">{car.make.charAt(0)}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none" />
            <span className="absolute top-3 left-3 text-[10px] tracking-[0.22em] uppercase text-[#e1b11b]">
              {car.category}
            </span>
            <span className="absolute bottom-3 right-3 text-[10px] tracking-[0.2em] uppercase text-white/0 group-hover:text-white/80 transition-colors duration-300">
              Request →
            </span>
          </div>
        </a>
        <div className="pt-4 pb-2">
          <h3 className="text-xl font-bold italic tracking-tight text-white">
            {car.make}{' '}
            <span className="not-italic font-medium text-zinc-300">{car.model}</span>
          </h3>
          <p className="mt-1 text-sm text-zinc-500">{spec}</p>
        </div>
      </article>
    </motion.li>
  );
};

const CarInventory = ({
  showHeader = true,
  className = '',
  requestAnchor = '#rental-request',
}) => {
  const [makeFilter, setMakeFilter] = useState('All');

  const makes = useMemo(() => {
    const unique = [...new Set(RENTAL_FLEET.map((c) => c.make))];
    return ['All', ...unique.sort()];
  }, []);

  const filtered =
    makeFilter === 'All'
      ? RENTAL_FLEET
      : RENTAL_FLEET.filter((c) => c.make === makeFilter);

  return (
    <section
      id="inventory"
      className={`relative ${className}`}
      aria-labelledby="inventory-heading"
    >
      {showHeader && (
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e1b11b] mb-3">
              NAS Exotics · {RENTAL_FLEET_META.totalVehicles} vehicles
            </p>
            <h2
              id="inventory-heading"
              className="text-4xl md:text-5xl font-bold italic tracking-tight"
            >
              <span className="text-white">The</span>{' '}
              <span className="hero-shine">fleet</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed">
              Ferrari, McLaren, Rolls-Royce, Lamborghini, Maybach, G-Wagon, Corvette, BMW.
              Colors and specs listed. Chauffeur {RENTAL_FLEET_META.chauffeur.toLowerCase()}.
              Pricing is quoted privately.
            </p>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed border-l-2 border-[#e1b11b]/50 pl-3">
              {RENTAL_FLEET_META.renterRequirements}
            </p>
          </div>
        </div>
      )}

      <div
        className="flex gap-1 overflow-x-auto scrollbar-hide pb-4 mb-8 border-b border-white/[0.06]"
        role="tablist"
        aria-label="Filter rental fleet by make"
      >
        {makes.map((make) => (
          <button
            key={make}
            type="button"
            role="tab"
            aria-selected={makeFilter === make}
            onClick={() => setMakeFilter(make)}
            className={`shrink-0 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
              makeFilter === make
                ? 'text-[#e1b11b] border-b-2 border-[#e1b11b]'
                : 'text-zinc-500 hover:text-white border-b-2 border-transparent'
            }`}
          >
            {make}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {filtered.map((car, index) => (
          <FleetCard
            key={car.id}
            car={car}
            index={index}
            requestAnchor={requestAnchor}
          />
        ))}
      </ul>
    </section>
  );
};

export default CarInventory;
