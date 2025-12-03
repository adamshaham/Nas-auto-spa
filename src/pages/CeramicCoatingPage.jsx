import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CeramicCoatingPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>Ceramic Coating in Fairfield County, CT | NAS Auto Spa</title>
        <meta
          name="description"
          content="Protect your vehicle with long-lasting ceramic coating from NAS Auto Spa in Fairfield County, CT. Deep gloss, easier washes, and real protection."
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
            NAS AUTO SPA • CERAMIC COATING
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Long-term paint protection with{' '}
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              professional ceramic coatings.
            </span>
          </h1>

          <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
            Ceramic coating creates a durable, hydrophobic layer on top of your clear coat, making
            it easier to wash, harder for contaminants to stick, and giving your vehicle a deep,
            glossy finish that lasts.
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href="https://www.nasautospa.com/#contact"
              className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
            >
              Get ceramic coating pricing
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
                Why choose ceramic coating?
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                Traditional waxes and sealants might last weeks or a few months. Our ceramic
                coatings offer years of protection when properly maintained — resisting UV rays,
                chemical etching, and environmental fallout while boosting gloss and color depth.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p>Benefits you’ll notice immediately:</p>
              <ul className="space-y-1">
                <li>• Insane gloss and color depth</li>
                <li>• Hydrophobic, beads water aggressively</li>
                <li>• Easier washes, less scrubbing</li>
                <li>• Added protection against staining and etching</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                The prep makes the difference
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                Before we apply any coating, your vehicle is thoroughly washed, decontaminated, and
                usually polished to remove or reduce defects. This ensures the coating bonds
                properly and that we&apos;re locking in a clean, glossy base.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p>Ideal candidates for ceramic coating:</p>
              <ul className="space-y-1">
                <li>• New vehicles you want to protect from day one</li>
                <li>• Corrected vehicles that just had paint correction</li>
                <li>• Enthusiast builds and weekend cars</li>
                <li>• Daily drivers you want easier to maintain</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Let’s protect your vehicle the right way.
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Tell us about your car, how you use it, and how long you plan to keep it — we’ll
                recommend the coating and prep that makes the most sense for you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Request coating info
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

export default CeramicCoatingPage;
