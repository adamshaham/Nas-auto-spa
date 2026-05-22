import React, { useEffect, useRef } from 'react';

const JOBBER_CLIENTHUB_ID = '306a6900-fe95-4c4f-91f5-5aaae2d0586f-4624455';
const JOBBER_FORM_URL =
  'https://clienthub.getjobber.com/client_hubs/306a6900-fe95-4c4f-91f5-5aaae2d0586f/public/work_request/embedded_work_request_form?form_id=4624455';
const JOBBER_CSS =
  'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
const JOBBER_JS =
  'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';

const Contact = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Inject Jobber CSS once
    if (!document.querySelector('link[data-jobber]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = JOBBER_CSS;
      link.media = 'screen';
      link.setAttribute('data-jobber', 'css');
      document.head.appendChild(link);
    }

    // Remove any leftover script from a previous mount
    document.querySelectorAll('script[data-jobber]').forEach((n) => n.remove());

    // Inject the embed script
    const script = document.createElement('script');
    script.src = JOBBER_JS;
    script.async = true;
    script.setAttribute('clienthub_id', JOBBER_CLIENTHUB_ID);
    script.setAttribute('form_url', JOBBER_FORM_URL);
    script.setAttribute('data-jobber', 'script');
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="contact"
      className="relative py-20 bg-black text-white overflow-x-hidden"
    >
      <div className="relative z-10 px-4 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#facc16]/10 border border-[#facc16]/50 text-xs font-semibold tracking-wide text-[#facc16] mb-3">
            🚗 NAS AUTO SPA • FAIRFIELD COUNTY, CT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Request a Free Quote
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Fill out the form below and we&apos;ll get back to you with a personalized quote and
            availability. Your request goes directly into our scheduling system.
          </p>
        </div>

        {/* Jobber embed container */}
        <div
          className="bg-black border border-gray-800 rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6"
          style={{ minHeight: 420, scrollMarginTop: '80px' }}
        >
          <div id={JOBBER_CLIENTHUB_ID} />
        </div>

        <p className="text-[11px] text-gray-500 text-center mt-4">
          Prefer to talk instead? Call or text{' '}
          <a
            href="tel:+19293076986"
            className="text-[#facc16] underline underline-offset-2"
          >
            (929) 307-6986
          </a>
          .
        </p>
      </div>

      {/* SEO schema */}
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
