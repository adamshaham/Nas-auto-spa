import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const StamfordCTPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>
          Mobile Auto Detailing in Stamford, CT
        </title>
        <meta
          name="description"
          content="Mobile detailing in Stamford, CT. We bring our own water and power for luxury interior and exterior details, paint correction, and ceramic coating at your home or building."
        />
        <link rel="canonical" href="https://www.nasautospa.com/stamford-ct" />
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
            NAS AUTO SPA • STAMFORD, CT
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Mobile car detailing in Stamford
            </span>{" "}
            that comes straight to your driveway.
          </h1>

          <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
            From Downtown Stamford and Harbor Point to North Stamford and Springdale,
            we bring full interior & exterior details, paint correction, and ceramic
            coating directly to you — with our own water and power on board.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
              Fully mobile • Water & power on board
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
      <main className="bg-black pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          {/* About Stamford service */}
          <section className="border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Stamford Mobile Detailing
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Built for busy Stamford drivers, commuters, and enthusiasts
            </h2>
            <p className="text-sm md:text-base text-zinc-300">
              Whether you&apos;re parking in a high-rise garage downtown, living near
              Harbor Point, or commuting daily on I-95, your car picks up dirt,
              brake dust, and road grime fast. Our mobile detailing service is
              designed to handle it all on-site — without you ever sitting in a
              waiting room or losing half your day to a shop visit.
            </p>
            <p className="text-sm md:text-base text-zinc-300">
              We specialize in working around tight parking, apartment complexes,
              office lots, and residential driveways. You book the time, we bring
              the setup and get to work.
            </p>
          </section>

          {/* Services + Who it's for */}
          <div className="grid gap-8 md:grid-cols-2">
            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/80 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Popular services in Stamford, CT
              </h3>
              <ul className="text-sm md:text-base text-zinc-300 space-y-2">
                <li>• Full interior & exterior detail packages</li>
                <li>• Deep interior cleaning and stain removal</li>
                <li>• Wheel & tire cleaning for heavy brake dust</li>
                <li>• 1-step paint correction to reduce swirls</li>
                <li>• Ceramic coating for long-term gloss & protection</li>
                <li>• Maintenance washes for repeat Stamford clients</li>
              </ul>
              <p className="text-xs text-zinc-500 pt-1">
                Heavily soiled vehicles or extreme conditions may require an upgraded
                package or extra time — we&apos;ll let you know up front.
              </p>
            </section>

            <section className="border border-zinc-800 rounded-3xl bg-zinc-950/60 p-6 md:p-7 space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">
                Perfect for life in Stamford
              </h3>
              <p className="text-sm md:text-base text-zinc-300">
                Our Stamford clients range from busy professionals and families
                to enthusiasts with weekend toys and exotics.
              </p>
              <ul className="text-sm text-zinc-200 space-y-1">
                <li>• Daily drivers that need regular upkeep</li>
                <li>• Lease vehicles you want to keep in top shape</li>
                <li>• Luxury SUVs and sedans parked in garages</li>
                <li>• Performance and enthusiast cars</li>
                <li>• Small business / office vehicles in Stamford</li>
              </ul>
            </section>
          </div>

          {/* CTA */}
          <section className="mt-4 border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Ready to book your Stamford mobile detail?
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Share a few details about your vehicle and location, and we&apos;ll confirm your
                date, time, and pricing before we roll out.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Book in Stamford, CT
              </a>
              <a
                href="tel:19293076986"
                className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium tracking-wide text-zinc-200 hover:border-zinc-400 transition"
              >
                Call / Text (929) 307-6986
              </a>
            </div>
          </section>

          {/* ✅ Testimonials under page content */}
          <div className="mt-16 md:mt-20">
            <Testimonials />
          </div>

          {/* ✅ Contact wizard under testimonials */}
          <div className="mt-12 md:mt-16">
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StamfordCTPage;
