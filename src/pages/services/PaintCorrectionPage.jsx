import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PaintCorrectionPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>Paint Correction in Fairfield County, CT | NAS Auto Spa</title>
        <meta
          name="description"
          content="Remove swirl marks, light scratches, and oxidation with professional paint correction from NAS Auto Spa in Fairfield County, CT."
        />
      </Helmet>

      <Navbar />

      <section className="relative pt-32 pb-16 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-32 -left-10 h-72 w-72 bg-[#e1b11b]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 bg-zinc-700/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-6">
          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            NAS AUTO SPA • PAINT CORRECTION
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Restore your paint to a{' '}
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              deep, glossy finish.
            </span>
          </h1>

          <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
            Swirl marks, light scratches, haziness, and wash-induced marring can make even newer
            vehicles look tired. Our paint correction services safely remove defects and revive your
            clear coat for a true showroom look.
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href="https://www.nasautospa.com/#contact"
              className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
            >
              Get a paint correction quote
            </a>
            <a
              href="tel:19293076986"
              className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium tracking-wide text-zinc-200 hover:border-zinc-400 transition"
            >
              Call / Text (929) 307-6986
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                What is paint correction?
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                Paint correction is the process of machine polishing your vehicle’s clear coat to
                remove surface defects and restore clarity and gloss. Using proper tools, pads, and
                compounds, we level the clear coat just enough to safely remove swirls and light
                scratches without compromising the paint.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p>Our correction work helps reduce:</p>
              <ul className="space-y-1">
                <li>• Swirl marks from automatic car washes</li>
                <li>• Light scratches and scuffs</li>
                <li>• Oxidation and faded paint</li>
                <li>• Holograms and buffer trails from poor polishing</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Perfect base for ceramic coating
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                Ceramic coating locks in whatever condition the paint is in. That’s why most of our
                ceramic clients start with at least a one-stage correction — so we’re protecting a
                glossy, refined finish instead of sealing in defects.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p>Great for:</p>
              <ul className="space-y-1">
                <li>• Enthusiasts who want that mirror finish</li>
                <li>• New-to-you used cars that need a reset</li>
                <li>• Vehicles preparing for ceramic coating</li>
                <li>• Special occasions and show events</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Tell us about your vehicle’s condition.
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Send a few photos in good lighting and we’ll recommend the right level of
                correction for your paint and budget.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Request a quote
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

export default PaintCorrectionPage;
