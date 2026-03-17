import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials"; // 🔁 adjust path/name if needed
import Contact from "../components/Contact"; // 🔁 adjust path/name if needed
import { Helmet } from "react-helmet-async";

const towns = [
  "Fairfield",
  "Westport",
  "Norwalk",
  "Stamford",
  "Bridgeport",
  "Trumbull",
  "Stratford",
  "Shelton",
  "Monroe",
  "Milford",
  "Darien",
  "Greenwich",
  "New Canaan",
  "Wilton",
  "Weston",
  "Easton",
  "Ridgefield",
];

const ServiceAreas = () => {
  return (
    <>
      <Helmet>
        <title>
          Service Areas – Fairfield County CT Mobile Detailing | NAS Auto Spa
        </title>
        <meta
          name="description"
          content="NAS Auto Spa serves all of Fairfield County, CT with premium mobile detailing, paint correction, ceramic coating & fleet washing. We come to Stamford, Greenwich, Westport, Norwalk, Fairfield, Trumbull, Stratford, Milford, Bridgeport, Darien, New Canaan, Shelton, Monroe & more."
        />
        <meta
          name="keywords"
          content="mobile detailing Fairfield County CT, car detailing near me Connecticut, auto detailing service areas CT, mobile detailer Stamford Greenwich Westport Norwalk, car detailing Fairfield Trumbull Stratford Milford CT, ceramic coating service area Connecticut, paint correction service area Fairfield County"
        />
        <link
          rel="canonical"
          href="https://www.nasautospa.com/service-areas-fairfield-county-ct"
        />
      </Helmet>

      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <section className="relative bg-black text-white py-20">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#e1b11b]/10 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-900/20 blur-[120px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-4">
              {/* Header */}
              <div className="max-w-3xl mb-10">
                <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#e1b11b]/10 border border-[#e1b11b]/60 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#e1b11b] mb-4">
                  Service Areas
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                  Mobile Auto Detailing in{" "}
                  <span className="text-[#e1b11b]">Fairfield County, CT</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-300">
                  NAS Auto Spa provides premium{" "}
                  <strong>
                    mobile car detailing, paint correction, and ceramic coating
                  </strong>{" "}
                  throughout Fairfield County. We come to your home or
                  workplace with our own water and power, so you can get a
                  showroom finish without leaving your driveway.
                </p>
              </div>

              {/* Map + copy */}
              <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
                {/* Custom map look */}
                <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-black">
                  <div className="relative w-full pt-[65%]">
                    <iframe
                      title="NAS Auto Spa Service Area - Fairfield County"
                      // Embed centered on Fairfield County, CT
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d618869.0310325541!2d-73.91410222262742!3d41.16790637459205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80f0b4a7b5b19%3A0xe9e2aa0e32766952!2sFairfield%20County%2C%20CT!5e0!3m2!1sen!2sus!4v1733090000000!5m2!1sen!2sus"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    {/* Dark vignette to “black out” outside area */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)]" />
                  </div>

                  <div className="p-4 border-t border-zinc-800 bg-zinc-950/90 backdrop-blur">
                    <p className="text-xs text-gray-300">
                      Our primary service area covers{" "}
                      <span className="text-[#e1b11b] font-semibold">
                        all of Fairfield County, Connecticut
                      </span>
                      . If you&apos;re just outside this region, feel free to
                      reach out—we may still be able to accommodate you.
                    </p>
                  </div>
                </div>

                {/* SEO copy + towns list */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                    Where We Come to You
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 mb-5">
                    We specialize in{" "}
                    <strong>on-site mobile detailing</strong> across Fairfield
                    County, CT. Whether you&apos;re at home, work, or managing a
                    fleet, we bring{" "}
                    <strong>professional-grade equipment, water, and power</strong>{" "}
                    directly to you.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                    {towns.map((town) => (
                      <div
                        key={town}
                        className="flex items-center gap-2 text-gray-200"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#e1b11b]" />
                        <span>{town}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 mt-5">
                    Don&apos;t see your town listed? We often travel to nearby
                    areas on a case-by-case basis.{" "}
                    <a
                      href="/#contact"
                      className="text-[#e1b11b] underline underline-offset-2"
                    >
                      Contact us
                    </a>{" "}
                    and we&apos;ll let you know if we can service your area.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-400">
                    <span className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/60">
                      Mobile auto detailing Fairfield County CT
                    </span>
                    <span className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/60">
                      Ceramic coating Fairfield County
                    </span>
                    <span className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/60">
                      Fleet &amp; commercial detailing in CT
                    </span>
                  </div>
                </div>
              </div>

              {/* Extra SEO content */}
              <div className="max-w-4xl border border-zinc-800 rounded-3xl p-6 bg-zinc-950/80 mb-16">
                <h3 className="text-xl font-semibold mb-3">
                  Why We Focus on Fairfield County
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Fairfield County is home to a wide range of vehicles—from
                  daily commuters and family SUVs to exotics, weekend cars, and
                  commercial fleets. NAS Auto Spa was built specifically for
                  drivers in this region who want{" "}
                  <strong>
                    high-end results, on-site convenience, and trustworthy
                    service
                  </strong>{" "}
                  without the hassle of dropping off their vehicle at a shop.
                </p>
                <p className="text-sm text-gray-300">
                  By focusing our detailing routes within Fairfield County,
                  we&apos;re able to maintain{" "}
                  <strong>
                    fast response times, consistent quality, and competitive
                    pricing
                  </strong>{" "}
                  while still offering premium services like paint correction,
                  ceramic coatings, and full interior restorations.
                </p>
              </div>

              {/* 🔻 Add Testimonials + Contact under “Why We Focus...” */}
              <div className="space-y-16">
                <section>
                  <Testimonials />
                </section>

                <section id="contact">
                  <Contact />
                </section>
              </div>
            </div>

            {/* Structured data for SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "Mobile Auto Detailing in Fairfield County, CT",
                  "description": "Premium mobile car detailing, paint correction, ceramic coating, and fleet washing throughout Fairfield County, Connecticut.",
                  "url": "https://www.nasautospa.com/service-areas-fairfield-county-ct",
                  "provider": {
                    "@type": "AutoDetailing",
                    "@id": "https://www.nasautospa.com/#business",
                    "name": "NAS Auto Spa LLC",
                    "telephone": "+1-929-307-6986",
                  },
                  "areaServed": [
                    { "@type": "County", "name": "Fairfield County, Connecticut" },
                    { "@type": "City", "name": "Fairfield, CT" },
                    { "@type": "City", "name": "Westport, CT" },
                    { "@type": "City", "name": "Norwalk, CT" },
                    { "@type": "City", "name": "Stamford, CT" },
                    { "@type": "City", "name": "Bridgeport, CT" },
                    { "@type": "City", "name": "Trumbull, CT" },
                    { "@type": "City", "name": "Stratford, CT" },
                    { "@type": "City", "name": "Shelton, CT" },
                    { "@type": "City", "name": "Monroe, CT" },
                    { "@type": "City", "name": "Milford, CT" },
                    { "@type": "City", "name": "Darien, CT" },
                    { "@type": "City", "name": "Greenwich, CT" },
                    { "@type": "City", "name": "New Canaan, CT" },
                    { "@type": "City", "name": "Wilton, CT" },
                    { "@type": "City", "name": "Weston, CT" },
                    { "@type": "City", "name": "Easton, CT" },
                    { "@type": "City", "name": "Ridgefield, CT" },
                    { "@type": "City", "name": "Southport, CT" },
                  ],
                }),
              }}
            />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServiceAreas;
