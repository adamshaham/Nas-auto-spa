import React from 'react';

const SERVICES = [
  'Certified System X',
  'Ceramic Coating',
  'Paint Correction',
  'Mobile Detailing',
  'Fleet Washing',
  'Interior Restoration',
  'We Bring Water & Power',
];

const CITIES = [
  'Stamford',
  'Greenwich',
  'Westport',
  'Norwalk',
  'Fairfield',
  'Southport',
  'Stratford',
  'Milford',
  'Trumbull',
];

const Row = ({ items, reverse }) => {
  const loop = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-0 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-5 px-5 py-2"
          >
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-zinc-200 whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#e1b11b] shadow-[0_0_10px_rgba(225,177,27,0.9)]" />
          </span>
        ))}
      </div>
    </div>
  );
};

const HomeTicker = () => (
  <div className="relative bg-black border-y border-[#e1b11b]/25 overflow-hidden">
    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-black to-transparent z-10" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#e1b11b]/5 via-transparent to-[#e1b11b]/5 pointer-events-none" />
    <Row items={SERVICES} />
    <div className="h-px bg-gradient-to-r from-transparent via-[#e1b11b]/30 to-transparent" />
    <Row items={CITIES} reverse />
  </div>
);

export default HomeTicker;
