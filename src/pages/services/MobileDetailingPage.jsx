import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MobileDetailingPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>Mobile Car Detailing in Fairfield County, CT | NAS Auto Spa</title>
        <meta
          name="description"
          content="NAS Auto Spa provides luxury mobile detailing in Fairfield County, CT. We bring our own water and power for premium interior and exterior details at your home or office."
        />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-32 -left-10 h-72 w-72 bg-[#e1b11b]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 bg-zinc-700/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            NAS AUTO SPA • MOBILE DETAILING
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Premium mobile car detailing
            </span>{' '}
            that comes to you.
          </h1>

          <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
            Whether it’s your daily driver, weekend toy, or family hauler, our mobile detailing
            services are built to clean, protect, and refresh your vehicle — right in your driveway
            or at your office anywhere in Fairfield County.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
              We bring water & power
            </span>
            <span className="text-xs text-zinc-500">
              Your car, our passion. Your time, protected.
            </span>
          </div>

          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href="tel:19293076986"
              className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
            >
              Call / Text (929) 307-6986
            </a>
            <a
              href="https://www.nasautospa.com/#contact"
              className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium tracking-wide text-zinc-200 hover:border-zinc-400 transition"
            >
              View services & booking
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-black pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          {/* What’s included */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                What’s included in our mobile detailing
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                Every vehicle gets the same level of care and attention to detail. We use
                high-quality, pH-safe products, proper wash techniques, and professional tools to
                safely clean and protect every surface.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-200">
              <ul className="space-y-2">
                <li>• Pre-rinse & foam bath</li>
                <li>• Two-bucket hand wash</li>
                <li>• Wheel, tire & barrel cleaning</li>
                <li>• Door jamb cleaning</li>
              </ul>
              <ul className="space-y-2">
                <li>• Interior vacuum & wipe-down</li>
                <li>• Interior glass cleaned</li>
                <li>• Tire shine & light exterior protection</li>
                <li>• Final inspection walkaround</li>
              </ul>
            </div>
          </div>

          {/* Who it's for */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Perfect for busy owners in Fairfield County
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                No more waiting rooms, car washes that miss the details, or wasting a day off to
                get your car cleaned. We come to you with everything needed to complete the detail
                on-site — water, power, tools, and products.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p>Ideal for:</p>
              <ul className="space-y-1">
                <li>• Daily drivers that need regular upkeep</li>
                <li>• Lease vehicles you want to keep in top shape</li>
                <li>• Family vehicles, SUVs, and trucks</li>
                <li>• Small business vehicles and light fleets</li>
              </ul>
            </div>
          </div>

          {/* CTA bottom */}
          <div className="mt-8 border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Ready to book your mobile detail?
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Share a few details about your vehicle and location, and we’ll confirm your date and
                time.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Book a mobile detail
              </a>
              <a
                href="tel:19293076986"
                className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium tracking-wide text-zinc-200 hover:border-zinc-400 transition"
              >
                Call / Text (929) 307-6986
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileDetailingPage;
