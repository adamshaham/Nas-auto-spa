import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const STATS = [
  {
    value: 2000,
    suffix: '+',
    label: 'Vehicles cleaned',
    detail: 'Details, coatings, and fleet washes',
  },
  {
    value: 3,
    suffix: '',
    label: 'Years in business',
    detail: 'Mobile across Fairfield County',
  },
  {
    value: 5,
    decimals: 1,
    suffix: '',
    label: 'Google rating',
    detail: 'From verified local reviews',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Towns served',
    detail: 'Stamford to Milford and beyond',
  },
];

const formatValue = (n, decimals) => {
  const rounded = decimals ? n.toFixed(decimals) : Math.round(n).toString();
  if (decimals) return rounded;
  return Number(rounded).toLocaleString('en-US');
};

const CountUp = ({ value, decimals = 0, suffix = '', active, duration = 2400, delay = 0 }) => {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!active) {
      setDisplay(reduced ? value : 0);
      return;
    }
    if (reduced) {
      setDisplay(value);
      return;
    }

    setDisplay(0);
    let raf;
    let startAt;
    const timeout = window.setTimeout(() => {
      startAt = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - startAt) / duration);
        const eased = 1 - Math.pow(1 - t, 1.5);
        setDisplay(value * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [active, value, duration, delay, reduced]);

  return (
    <span className="tabular-nums">{formatValue(display, decimals)}{suffix}</span>
  );
};

const HomeStats = () => {
  const statsGridRef = useRef(null);
  const statsInView = useInView(statsGridRef, {
    once: true,
    amount: 0.55,
    margin: '0px 0px -12% 0px',
  });

  return (
    <section
      className="relative py-14 md:py-24 bg-black overflow-hidden"
      aria-label="NAS Auto Spa by the numbers"
    >
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[28rem] h-[28rem] rounded-full bg-[#e1b11b]/10 blur-[90px] animate-blob" />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[22rem] h-[22rem] rounded-full bg-amber-300/10 blur-[80px] animate-blob"
        style={{ animationDelay: '2s' }}
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e1b11b]/40 bg-[#e1b11b]/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e1b11b] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#e1b11b]">
              By the numbers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold italic tracking-tight">
            <span className="text-white">TRUSTED</span>{' '}
            <span className="hero-shine">LOCALLY</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Mobile detailing, paint correction, System X ceramic coating, and fleet washing — we
            come to your driveway across Fairfield County with our own water and power.
          </p>
        </div>

        <div
          ref={statsGridRef}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="hero-form-frame rounded-2xl p-[1px]"
            >
              <div className="h-full rounded-[0.95rem] bg-zinc-950/90 backdrop-blur-xl px-4 py-6 sm:px-6 sm:py-8 text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold italic tracking-tight text-[#e1b11b]">
                  <CountUp
                    value={stat.value}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                    active={statsInView}
                    delay={index * 70}
                  />
                </p>
                <p className="mt-3 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-[11px] sm:text-xs text-zinc-500 leading-snug">
                  {stat.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
