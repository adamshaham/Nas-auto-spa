import React from 'react';

const PERKS = [
  { icon: '⚡', label: 'Same-day response' },
  { icon: '💧', label: 'We bring our own water & power' },
  { icon: '📍', label: 'We come to you — anywhere in Fairfield County' },
  { icon: '🛡️', label: '50% deposit secures your booking' },
];

const Contact = () => {
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

      <div className="relative z-10 px-5 max-w-2xl mx-auto text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e1b11b]/10 border border-[#e1b11b]/40 text-xs font-semibold tracking-[0.18em] uppercase text-[#e1b11b] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e1b11b] animate-pulse" />
          Ready to Book?
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold italic tracking-tight mb-4">
          Get Your Free Quote
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-10">
          Our quote form is at the top of the page — fill it out in under a minute
          and we&apos;ll get back to you the same day with availability and pricing.
        </p>

        {/* Perks grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
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

        {/* Primary CTA */}
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

        {/* Or call */}
        <p className="text-zinc-500 text-sm">
          Prefer to talk?{' '}
          <a
            href="tel:+19293076986"
            className="text-[#e1b11b] font-semibold hover:underline"
          >
            Call or text (929) 307-6986
          </a>
        </p>
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
