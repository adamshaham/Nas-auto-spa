import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 px-4 text-center md:text-left">
          {/* BRAND + ABOUT */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              NAS <span className="text-gold-500">AUTO SPA</span>
            </h3>

            <p className="text-gray-400 max-w-xs mx-auto md:mx-0 leading-relaxed text-sm">
              Fairfield County’s premier mobile auto detailing service —
              specializing in ceramic coatings, paint correction, fleet detailing,
              and premium interior/exterior packages. Your cars, our passion.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/nasautospa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 ..." />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@nas.auto.spa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                <span className="sr-only">TikTok</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 ..." />
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS – CORE PAGES */}
          <div>


            <div className="text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
                CORE PAGES
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-gold-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-gold-500">
                    About
                  </a>
                </li>

                <li>
                  <a href="/gallery" className="text-gray-400 hover:text-gold-500">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-gold-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="text-gray-400 hover:text-gold-500">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="text-gray-400 hover:text-gold-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* SERVICES – SEPARATE SECTION */}
          <div>


            <div className="text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
                DETAILING & PROTECTION
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/mobile-detailing-fairfield-county-ct"
                    className="text-gray-400 hover:text-gold-500"
                  >
                    Mobile Car Detailing
                  </a>
                </li>
                <li>
                  <a
                    href="/paint-correction-fairfield-county-ct"
                    className="text-gray-400 hover:text-gold-500"
                  >
                    Paint Correction
                  </a>
                </li>
                <li>
                  <a
                    href="/ceramic-coating-fairfield-county-ct"
                    className="text-gray-400 hover:text-gold-500"
                  >
                    Ceramic Coating
                  </a>
                </li>
                <li>
                  <a
                    href="/fleet-detailing-fairfield-county-ct"
                    className="text-gray-400 hover:text-gold-500"
                  >
                    Fleet & Commercial Detailing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CONTACT + NAP FOR SEO */}
          <div>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-5 h-5 mr-3 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0..." />
                </svg>
                (929) 307-6986
              </li>

              <li className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-5 h-5 mr-3 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89..." />
                </svg>
                contact@nasautospa.com
              </li>

              <li className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-5 h-5 mr-3 text-gold-500"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 8v4..." />
                </svg>
                Mon–Sun: 8 AM – 8 PM
              </li>

              <li className="text-xs text-zinc-500 mt-3 leading-relaxed text-center md:text-left">
                Serving Fairfield County, CT and surrounding areas with fully mobile
                detailing, ceramic coatings, and fleet services.
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center px-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} NAS Auto Spa LLC. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* LOCAL BUSINESS SCHEMA FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoDetailing",
            "name": "NAS Auto Spa LLC",
            "image": "https://www.nasautospa.com/logo.png",
            "url": "https://www.nasautospa.com",
            "telephone": "+19293076986",
            "email": "contact@nasautospa.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fairfield County",
              "addressRegion": "CT",
              "addressCountry": "US",
            },
            "areaServed": "Fairfield County, Connecticut",
            "openingHours": "Mo-Su 08:00-20:00",
            "sameAs": [
              "https://www.instagram.com/nasautospa/",
              "https://www.tiktok.com/@nas.auto.spa",
            ],
          }),
        }}
      />
    </footer>
  );
};

export default Footer;
