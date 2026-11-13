import React from 'react';

const scrollToContact = (e) => {
  e.preventDefault();
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const MobileStickyCta = () => (
  <div
    className="fixed bottom-0 inset-x-0 z-[2800] lg:hidden border-t border-[#e1b11b]/25 bg-zinc-950/95 backdrop-blur-md mobile-sticky-cta shadow-[0_-12px_40px_rgba(0,0,0,0.55)]"
    role="region"
    aria-label="Quick contact"
  >
    <div className="flex gap-2.5 px-4 pt-3 pb-3 max-w-lg mx-auto">
      <a
        href="tel:+19293076986"
        className="flex-1 py-3.5 rounded-xl border border-zinc-600 text-white text-sm font-bold tracking-wide text-center hover:border-[#e1b11b]/60 transition-colors"
      >
        Call
      </a>
      <button
        type="button"
        onClick={scrollToContact}
        className="flex-[1.35] py-3.5 rounded-xl bg-[#e1b11b] text-black text-sm font-bold tracking-wide shadow-[0_4px_18px_rgba(225,177,27,0.35)] hover:bg-amber-300 transition-colors"
      >
        Get Free Quote
      </button>
    </div>
  </div>
);

export default MobileStickyCta;
