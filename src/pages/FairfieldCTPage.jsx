import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const FairfieldCTPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>
          Mobile Car Detailing in Fairfield, CT
        </title>
        <meta
          name="description"
          content="Mobile Car Detailing in Fairfield, CT. We come to you with our own water and power for interior & exterior detailing, paint correction, and ceramic coating anywhere in Fairfield."
        />
        <link rel="canonical" href="https://www.nasautospa.com/fairfield-ct" />
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
            NAS AUTO SPA • FAIRFIELD, CT
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Mobile car detailing in Fairfield, CT
            </span>{" "}
            that comes straight to your driveway.
          </h1>

          <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
            From downtown Fairfield and Black Rock Turnpike to the beach and
            Fairfield University area, we bring full interior & exterior detailing,
            paint correction, and ceramic coating directly to your home, apartment
            complex, or office.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
              We bring water & power
            </span>
            <span className="text-xs text-zinc-500">
              Perfect for Fairfield students, families & commuters.
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
              Fairfield Mobile Detailing
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Mobile detailing built around Fairfield life
            </h2>
            <p className="text-sm md:text-base text-zinc-300">
              Fairfield drivers juggle school, work, beach days, and daily errands.
              That means your car sees everything from coffee spills and crumbs to
              pollen, road salt, and sand. Our mobile detailing setup is built to
              reset your vehicle and keep it protected — without you sitting in a
              waiting room.
            </p>
            <p className="text-sm md:text-base text-zinc-300">
              We serve homes, student housing, apartment lots, and office locations
              throughout Fairfield, bringing pro-level tools and products directly
              to your parking spot.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/80 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Popular services in Fairfield, CT
              </h3>
              <ul className="text-sm md:text-base text-zinc-300 space-y-2">
                <li>• Quick maintenance washes & full detail packages</li>
                <li>• Deep interior cleaning, shampooing & extraction</li>
                <li>• Wheel & tire cleaning for daily drivers & SUVs</li>
                <li>• Paint correction to reduce swirls and boost gloss</li>
                <li>• Ceramic coating for long-term protection & easy washing</li>
              </ul>
            </section>

            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/60 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Great fit for Fairfield students, families & pros
              </h3>
              <p className="text-sm md:text-base text-zinc-300">
                Ideal if you:
              </p>
              <ul className="text-sm text-zinc-200 space-y-1">
                <li>• Attend or work at Fairfield University or nearby campuses</li>
                <li>• Commute daily and want your car to stay presentable</li>
                <li>• Have family SUVs, minivans, or trucks that need a reset</li>
                <li>• Care about your car&apos;s appearance and resale value</li>
              </ul>
            </section>
          </div>

          <section className="mt-4 border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Book mobile detailing in Fairfield, CT
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Share a few details about your vehicle and where you&apos;re located in
                Fairfield — we&apos;ll confirm the date, time, and pricing before we roll
                out.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Book in Fairfield, CT
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

export default FairfieldCTPage;
