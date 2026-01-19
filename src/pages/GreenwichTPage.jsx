import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const GreenwichTPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>
          Mobile Car Detailing in Greenwich, CT
        </title>
        <meta
          name="description"
          content="Mobile Detailing in Greenwich, CT. We specialize in luxury vehicles, exotics, and daily drivers, offering full details, paint correction, and ceramic coating at your home or building."
        />
        <link rel="canonical" href="https://www.nasautospa.com/greenwich-ct" />
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
            NAS AUTO SPA • GREENWICH, CT
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Discreet mobile detailing for Greenwich
            </span>{" "}
            luxury vehicles and daily drivers.
          </h1>

          <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
            Old Greenwich, Riverside, Cos Cob, backcountry — wherever you are in
            Greenwich, we bring professional detailing to your driveway, private
            garage, or building with care, respect, and attention to detail.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
              High-end vehicles welcome
            </span>
            <span className="text-xs text-zinc-500">
              Trusted on exotics, luxury SUVs, and daily commuters.
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
              Greenwich Mobile Detailing
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              A higher standard of mobile detailing for Greenwich, CT
            </h2>
            <p className="text-sm md:text-base text-zinc-300">
              Greenwich roads and weather will take a toll on any vehicle — especially
              darker paints and high-end finishes. We focus on safe wash methods, careful
              interior work, and optional paint correction / ceramic coating for long-term
              protection and gloss.
            </p>
            <p className="text-sm md:text-base text-zinc-300">
              Our approach is quiet, professional, and respectful of your time and
              property. We work around your schedule and location, whether that&apos;s a
              gated driveway, apartment garage, or private building.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/80 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Services popular in Greenwich
              </h3>
              <ul className="text-sm md:text-base text-zinc-300 space-y-2">
                <li>• Full interior & exterior luxury details</li>
                <li>• Multi-step paint decontamination & safe wash</li>
                <li>• 1-step paint correction for swirl reduction</li>
                <li>• Ceramic coating for long-term protection</li>
                <li>• Maintenance wash programs for garages & fleets</li>
              </ul>
            </section>

            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/60 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Trusted on high-value vehicles
              </h3>
              <p className="text-sm md:text-base text-zinc-300">
                We regularly work on vehicles that require extra care and attention:
              </p>
              <ul className="text-sm text-zinc-200 space-y-1">
                <li>• Exotics and performance cars</li>
                <li>• Luxury SUVs and sedans</li>
                <li>• Daily drivers that need to stay presentable</li>
                <li>• Second / weekend vehicles in private garages</li>
              </ul>
            </section>
          </div>

          <section className="mt-4 border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Book mobile detailing in Greenwich, CT
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Share a few details about your vehicle and location in Greenwich, and
                we&apos;ll confirm a time that works for you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Book in Greenwich, CT
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

export default GreenwichTPage;
