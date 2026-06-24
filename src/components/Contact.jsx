import React, { useState, useEffect } from 'react';
import JobberFormEmbed from './JobberFormEmbed';
import { DEPOSIT_POLICY } from '../data/pricing';

const PERKS = [
  { icon: '⚡', label: 'Same-day response' },
  { icon: '💧', label: 'We bring our own water & power' },
  { icon: '📍', label: 'We come to you — anywhere in Fairfield County' },
  { icon: '🛡️', label: '50% deposit secures your booking' },
];

const Contact = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollToHero = (e) => {
    e.preventDefault();
    document.getElementById('hero-quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-black text-white overflow-x-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] rounded-full bg-[#e1b11b]/6 blur-[120px]" />
      </div>

      <div className="relative z-10 px-5 max-w-2xl mx-auto">

        {/* Section header — same for both layouts */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e1b11b]/10 border border-[#e1b11b]/40 text-xs font-semibold tracking-[0.18em] uppercase text-[#e1b11b] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e1b11b] animate-pulse" />
            {isMobile ? 'Request a Free Quote' : 'Ready to Book?'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold italic tracking-tight mb-3">
            {isMobile ? 'Get Your Free Quote' : 'Get Your Free Quote'}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            {isMobile
              ? "Fill out the form below and we'll get back to you the same day with availability and pricing."
              : "Our quote form is at the top of the page — fill it out in under a minute and we'll get back to you the same day."}
          </p>
        </div>

        {/* ── MOBILE: show the real Jobber form ── */}
        {isMobile && (
          <>
            <div className="relative rounded-2xl border border-zinc-700/60 bg-zinc-950/90 shadow-[0_20px_70px_rgba(0,0,0,0.65)] mb-4">
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#e1b11b] via-amber-300 to-[#e1b11b]" />
              <JobberFormEmbed
                id="hero-quote"
                className="w-full"
                minHeight={0}
              />
              <div className="px-5 py-4 border-t border-zinc-800/70">
                <p className="text-[10px] text-zinc-500 leading-relaxed text-center">
                  {DEPOSIT_POLICY}
                </p>
              </div>
            </div>
            <p className="text-zinc-500 text-sm text-center">
              Prefer to talk?{' '}
              <a href="tel:+19293076986" className="text-[#e1b11b] font-semibold hover:underline">
                Call or text (929) 307-6986
              </a>
            </p>
          </>
        )}

        {/* ── DESKTOP: CTA that scrolls up to hero form ── */}
        {!isMobile && (
          <>
            {/* Perks grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {PERKS.map((p) => (
                <div
                  key={p.label}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800"
                >
                  <span className="text-xl leading-none mt-0.5">{p.icon}</span>
                  <span className="text-sm text-zinc-300">{p.label}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={scrollToHero}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#e1b11b] text-black text-sm font-bold tracking-wider hover:bg-amber-300 transition-all duration-200 shadow-[0_4px_28px_rgba(225,177,27,0.4)] mb-4"
              >
                REQUEST A FREE QUOTE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
              <p className="text-zinc-500 text-sm">
                Prefer to talk?{' '}
                <a href="tel:+19293076986" className="text-[#e1b11b] font-semibold hover:underline">
                  Call or text (929) 307-6986
                </a>
              </p>
            </div>
          </>
        )}

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact NAS Auto Spa',
            url: 'https://www.nasautospa.com/#contact',
            about: { '@type': 'AutoDetailing', name: 'NAS Auto Spa LLC' },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+19293076986',
              contactType: 'customer service',
              areaServed: 'Fairfield County CT',
              availableLanguage: ['English'],
            },
          }),
        }}
      />
    </section>
  );
};

export default Contact;
