import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CommercialWashPage = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });

  const fadeUpContainer = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden w-full">
      <Helmet>
        <title>Commercial Maintainence | NAS Auto Spa Fairfield County</title>
        <meta
          name="description"
          content="Keep your work trucks, vans, and service vehicles clean with mobile fleet detailing in Fairfield County, CT. Reliable schedules and professional image for your business."
        />
        <link rel="canonical" href="https://www.nasautospa.com/services/fleet-detailing" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section
        ref={headerRef}
        className="relative pt-40 pb-20 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-32 -left-10 h-72 w-72 bg-[#e1b11b]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 bg-zinc-700/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={fadeUpContainer}
            className="space-y-6"
          >
            <motion.p
              variants={fadeUpItem}
              className="text-[11px] uppercase tracking-[0.35em] text-zinc-500"
            >
              NAS AUTO SPA • COMMERCIAL FLEETS
            </motion.p>

            <motion.h1
              variants={fadeUpItem}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
            >
              Commercial washes for{' '}
              <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                work trucks, vans, and fleets.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              className="text-sm md:text-base text-zinc-300 max-w-2xl"
            >
              Your vehicles represent your brand on every job. We help you keep them clean, presentable,
              and protected with scheduled on-site washing and detailing for fleets across Fairfield
              County, CT.
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              className="flex flex-wrap gap-3 pt-4"
            >
              <a
                href="mailto:contact@nasautospa.com"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#e1b11b] text-black text-xs md:text-sm font-semibold tracking-wide hover:bg-yellow-400 transition"
              >
                Email us: contact@nasautospa.com
              </a>
              <a
                href="tel:+19293076986"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-zinc-700 text-xs md:text-sm text-zinc-200 hover:border-yellow-400 hover:text-yellow-300 transition"
              >
                Call / Text to discuss fleet needs
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative bg-black pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 space-y-14 md:space-y-20">
          {/* Overview */}
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Built around how your business operates.
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                We partner with landscaping companies, contractors, delivery services, and other
                local businesses to keep their vehicles clean and presentable. Our mobile setup
                means we can service your fleet at your yard, shop, or job site—without pulling
                multiple vehicles off the road at once.
              </p>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                Together, we&apos;ll create a schedule and service level that fits your operation,
                whether you need quick maintenance washes, interior cleanups, or periodic
                full-details for client-facing vehicles.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Ideal for
              </h3>
              <ul className="space-y-2.5 text-sm md:text-base text-zinc-200">
                <li>• Landscaping and lawn care companies</li>
                <li>• Construction and contractor fleets</li>
                <li>• Delivery vans and local service vehicles</li>
                <li>• Real estate and property management vehicles</li>
                <li>• Any business that relies on a clean, professional image</li>
              </ul>
            </div>
          </div>

          {/* What we offer */}
          <div className="rounded-3xl border border-zinc-800/70 bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Fleet detailing options
            </h2>
            <div className="grid gap-8 md:grid-cols-3 text-sm md:text-base text-zinc-200">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Maintenance washes
                </h3>
                <p>
                  Regular exterior washes to remove road film, dirt, and debris so your branding and
                  signage stay visible and clean.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Interior refresh
                </h3>
                <p>
                  Vacuuming, wipe-downs, and glass cleaning to keep driver areas fresh and safe,
                  especially for shared vehicles.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Deep cleaning & protection
                </h3>
                <p>
                  Periodic deep details and optional protective coatings for higher-value vehicles
                  that see clients or represent your brand at job sites.
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs md:text-sm text-zinc-500">
              We can invoice per visit, per vehicle, or on a monthly basis depending on your fleet
              size and frequency.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-zinc-900 pt-8">
            <div>
              <h2 className="text-lg md:text-xl font-semibold">
                Want a consistent, professional look for your fleet?
              </h2>
              <p className="text-sm md:text-base text-zinc-300 mt-1.5">
                Reach out with how many vehicles you run, where you&apos;re based, and how often
                you&apos;d like service. We&apos;ll build a plan that works for your routes and
                budget.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contact@nasautospa.com"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#e1b11b] text-black text-xs md:text-sm font-semibold tracking-wide hover:bg-yellow-400 transition"
              >
                contact@nasautospa.com
              </a>
              <a
                href="tel:+19293076986"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-zinc-700 text-xs md:text-sm text-zinc-200 hover:border-yellow-400 hover:text-yellow-300 transition"
              >
                Call or Text (929) 307-6986
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialWashPage;
