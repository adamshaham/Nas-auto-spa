import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const WestportCTPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>
          Mobile Auto Detailing in Westport, CT
        </title>
        <meta
          name="description"
          content="Luxury mobile car detailing in Westport, CT. We bring our own water and power for interior & exterior details, paint correction, and ceramic coating at your home or driveway."
        />
        <link rel="canonical" href="https://www.nasautospa.com/westport-ct" />
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
            NAS AUTO SPA • WESTPORT, CT
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Premium mobile detailing in Westport
            </span>{" "}
            for daily drivers, family SUVs, and exotics.
          </h1>

          <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
            From Compo Beach to Greens Farms and Downtown Westport, we keep your
            vehicles looking clean, glossy, and protected without you ever leaving
            home. We bring the water, power, and pro-grade products — you just hand
            us the keys.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
              We bring water & power
            </span>
            <span className="text-xs text-zinc-500">
              Designed for busy Westport families & professionals.
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
      <main className="bg-black pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <section className="border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Westport Mobile Detailing
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Keep your Westport vehicles looking garage-kept, all year
            </h2>
            <p className="text-sm md:text-base text-zinc-300">
              Westport roads, beach trips, and everyday errands add up. Sand, salt,
              pollen, and daily use all wear on your paint and interior. Our mobile
              detailing packages are built to reset and protect your vehicles — from
              daily SUVs to weekend toys.
            </p>
            <p className="text-sm md:text-base text-zinc-300">
              We show up on time, respect your property, and focus on the details
              that actually matter: clean wheels, streak-free glass, refreshed
              interiors, and deep gloss on the paint.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/80 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Popular services in Westport, CT
              </h3>
              <ul className="text-sm md:text-base text-zinc-300 space-y-2">
                <li>• Full interior & exterior detail packages</li>
                <li>• Deep interior cleaning & stain removal</li>
                <li>• Hand wash & decontamination for coastal driving</li>
                <li>• Paint correction for dull or swirled paint</li>
                <li>• Ceramic coating for long-term protection</li>
              </ul>
            </section>

            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/60 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Perfect for Westport lifestyles
              </h3>
              <p className="text-sm md:text-base text-zinc-300">
                Ideal for families, commuters, and enthusiasts who want a clean,
                protected vehicle with zero hassle.
              </p>
              <ul className="text-sm text-zinc-200 space-y-1">
                <li>• Family SUVs & crossovers</li>
                <li>• Luxury sedans & performance cars</li>
                <li>• Vehicles parked near the beach</li>
                <li>• Lease vehicles that need to stay sharp</li>
              </ul>
            </section>
          </div>

          <section className="mt-4 border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Ready to book your Westport mobile detail?
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Tell us about your vehicle, where you&apos;re located in Westport, and what
                you&apos;re looking to get done — we&apos;ll handle the rest.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Book in Westport, CT
              </a>
              <a
                href="tel:19293076986"
                className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium tracking-wide text-zinc-200 hover:border-zinc-400 transition"
              >
                Call / Text (929) 307-6986
              </a>
            </div>
          </section>

          {/* ✅ Testimonials */}
          <div className="mt-16 md:mt-20">
            <Testimonials />
          </div>

          {/* ✅ Contact wizard */}
          <div className="mt-12 md:mt-16">
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WestportCTPage;
