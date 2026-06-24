import React, { useState, useEffect } from 'react';
import porscheImage from '../assets/porsche-gt3rs.jpg';
import JobberFormEmbed from './JobberFormEmbed';

const TRUST_BADGES = [
  { icon: '⭐', text: '5.0 Google Rating' },
  { icon: '📍', text: 'Fairfield County, CT' },
];

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const img = new Image();
    img.src = porscheImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const progress = Math.min(scrollY / 500, 1);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative bg-black overflow-hidden">

      {/* ── Background photo ── */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${porscheImage})`,
          transform: `translateY(${scrollY * 0.1}px) scale(1.06)`,
        }}
      />

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-black/55" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(105deg, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.20) 65%, rgba(0,0,0,0.50) 100%)',
        }}
      />

      {/* ── Gold glow ── */}
      <div className="pointer-events-none absolute -top-24 -left-16 w-96 h-96 rounded-full bg-[#e1b11b]/10 blur-[90px]" />

      {/* ── Content wrapper ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-28 lg:py-0 lg:min-h-screen lg:flex lg:items-center"
        style={{ transform: `translateY(${-progress * 16}px)` }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-10 lg:py-36">

          {/* ══ LEFT — copy ══ */}
          <div
            className="flex flex-col items-start"
            style={{ opacity: 1 - progress * 0.4 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e1b11b]/40 bg-[#e1b11b]/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e1b11b] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#e1b11b]">
                Connecticut's Top Mobile Detailing
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[3rem] sm:text-[3.75rem] md:text-[4.5rem] font-bold leading-[0.92] tracking-tight mb-6">
              <span className="block italic text-white">NAS</span>
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500">
                AUTO SPA
              </span>
            </h1>

            {/* Sub */}
            <p className="text-zinc-300 text-base sm:text-lg max-w-md leading-relaxed mb-8">
              Premium mobile detailing, paint correction, ceramic coating &amp; fleet
              washing across Fairfield County, CT — with our own water &amp; power.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {TRUST_BADGES.map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300"
                >
                  <span>{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 w-full max-w-xs">
              <button
                type="button"
                onClick={scrollTo('services')}
                className="flex-1 py-3.5 rounded-xl bg-[#e1b11b] text-black text-sm font-bold tracking-wider hover:bg-amber-300 transition-all duration-200 shadow-[0_4px_20px_rgba(225,177,27,0.4)]"
              >
                SERVICES
              </button>
              <button
                type="button"
                onClick={isDesktop ? scrollTo('pricing') : scrollTo('contact')}
                className="flex-1 py-3.5 rounded-xl border border-zinc-500 text-white text-sm font-bold tracking-wider hover:border-[#e1b11b] hover:text-[#e1b11b] transition-all duration-200"
              >
                {isDesktop ? 'PACKAGES' : 'GET A QUOTE'}
              </button>
            </div>
          </div>

          {/* ══ RIGHT — quote form (desktop only, fully removed from DOM on mobile) ══ */}
          {isDesktop && (
            <div className="w-full">
              <div className="relative rounded-2xl border border-zinc-700/60 bg-zinc-950/90 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.65)]">
                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#e1b11b] via-amber-300 to-[#e1b11b]" />

                {/* Card header */}
                <div className="px-5 sm:px-6 pt-6 pb-4 border-b border-zinc-800/70">
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#e1b11b] mb-1">
                    Free Quote · Fast Response
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Fill out the form and we&apos;ll get back to you — usually same day.
                  </p>
                </div>

                {/* Jobber form */}
                <JobberFormEmbed
                  id="hero-quote"
                  className="w-full"
                  minHeight={0}
                />

                {/* Card footer */}
                <div className="px-5 sm:px-6 py-4 border-t border-zinc-800/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-[10px] text-zinc-500 leading-relaxed max-w-[260px]">
                    50% deposit secures your booking. Washes pay in full at service.
                  </p>
                  <a
                    href="tel:+19293076986"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e1b11b] hover:underline whitespace-nowrap"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (929) 307-6986
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── Scroll hint (desktop only) ── */}
      <div
        className="hidden lg:flex absolute bottom-8 left-8 items-center gap-3 transition-opacity duration-500"
        style={{ opacity: Math.max(0, 1 - progress * 2.5) }}
      >
        <div className="w-5 h-8 rounded-full border border-zinc-600 flex justify-center items-start pt-1.5">
          <div className="w-0.5 h-2 bg-zinc-500 rounded-full animate-bounce" />
        </div>
        <span className="text-zinc-500 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </div>
  );
};

export default Hero;
