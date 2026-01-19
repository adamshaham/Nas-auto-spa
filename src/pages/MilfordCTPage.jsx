import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const MilfordCTPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>
          Mobile Car Detailing in Milford, CT 
        </title>
        <meta
          name="description"
          content="Mobile Detailing in Milford, CT. We offer interior & exterior details, paint correction, and ceramic coating with a fully mobile setup including our own water and power."
        />
        <link rel="canonical" href="https://www.nasautospa.com/milford-ct" />
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
            NAS AUTO SPA • MILFORD, CT
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Mobile detailing in Milford
            </span>{" "}
            for cars, SUVs, and trucks.
          </h1>

          <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
            From the Post Road to the beach and everywhere in between, we bring
            full interior & exterior details, paint correction, and ceramic
            coating to your driveway, complex, or workplace in Milford, CT.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
              Fully mobile • We bring water & power
            </span>
            <span className="text-xs text-zinc-500">
              Ideal for busy schedules & families.
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
              Milford Mobile Detailing
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Convenience, protection, and real results for Milford vehicles
            </h2>
            <p className="text-sm md:text-base text-zinc-300">
              Our Milford clients choose mobile detailing because it saves time and
              delivers better results than quick drive-through washes. We handle
              everything on-site — safe washes, deep interior cleaning, and optional
              paint correction and ceramic protection.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/80 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Services popular in Milford, CT
              </h3>
              <ul className="text-sm md:text-base text-zinc-300 space-y-2">
                <li>• Full interior & exterior details</li>
                <li>• Interior shampooing & steam cleaning</li>
                <li>• Wheel & tire cleaning for daily drivers & trucks</li>
                <li>• Paint correction to restore depth and shine</li>
                <li>• Ceramic coating for long-term protection</li>
                <li>• Maintenance details for repeat clients</li>
              </ul>
            </section>

            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/60 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Great fit for Milford drivers
              </h3>
              <p className="text-sm md:text-base text-zinc-300">
                Ideal if you:
              </p>
              <ul className="text-sm text-zinc-200 space-y-1">
                <li>• Commute regularly and want a clean, presentable car</li>
                <li>• Have family SUVs, minivans, or trucks that need a reset</li>
                <li>• Care about maintaining your paint & interior</li>
                <li>• Prefer a premium experience over quick washes</li>
              </ul>
            </section>
          </div>

          <section className="mt-4 border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Book mobile detailing in Milford, CT
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Share a few details about your vehicle and where you&apos;re located in
                Milford — we&apos;ll follow up with availability and pricing.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Book in Milford, CT
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

export default MilfordCTPage;
