import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const TrumbullCTPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>
          Mobile Auto Detailing in Trumbull, CT
        </title>
        <meta
          name="description"
          content="Mobile Detailing in Trumbull, CT. We offer interior & exterior details, paint correction, and ceramic coating with a fully mobile setup including our own water and power."
        />
        <link rel="canonical" href="https://www.nasautospa.com/trumbull-ct" />
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
            NAS AUTO SPA • TRUMBULL, CT
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Mobile detailing in Trumbull
            </span>{" "}
            for cars, SUVs, and trucks.
          </h1>

          <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
            From residential neighborhoods to busy commuter routes, we bring full
            interior & exterior detailing, paint correction, and ceramic coating
            directly to you in Trumbull, CT.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
              We bring water & power
            </span>
            <span className="text-xs text-zinc-500">
              Designed for families, commuters & enthusiasts in Trumbull.
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
              Trumbull Mobile Detailing
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Convenience and quality detailing for Trumbull vehicles
            </h2>
            <p className="text-sm md:text-base text-zinc-300">
              Trumbull drivers juggle commutes, family schedules, and busy lives.
              Our mobile detailing service is built to keep your vehicles clean,
              refreshed, and protected without wasting your time at a shop.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/80 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Services popular in Trumbull, CT
              </h3>
              <ul className="text-sm md:text-base text-zinc-300 space-y-2">
                <li>• Full interior & exterior detail packages</li>
                <li>• Interior shampooing & deep cleaning</li>
                <li>• Wheel & tire cleaning for SUVs & trucks</li>
                <li>• Paint correction to restore shine</li>
                <li>• Ceramic coating for easier washes & protection</li>
              </ul>
            </section>

            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/60 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Great fit for Trumbull drivers
              </h3>
              <p className="text-sm md:text-base text-zinc-300">
                Ideal if you:
              </p>
              <ul className="text-sm text-zinc-200 space-y-1">
                <li>• Have family vehicles that need regular cleaning</li>
                <li>• Commute daily and want your car to stay presentable</li>
                <li>• Care about maintaining your paint & interior condition</li>
                <li>• Want a premium experience without leaving home</li>
              </ul>
            </section>
          </div>

          <section className="mt-4 border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Book mobile detailing in Trumbull, CT
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Tell us what you drive and where you&apos;re located in Trumbull —
                we&apos;ll follow up with available dates and pricing.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Book in Trumbull, CT
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

export default TrumbullCTPage;
