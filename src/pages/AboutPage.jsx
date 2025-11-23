import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | NAS Auto Spa</title>
        <meta
          name="description"
          content="Learn more about NAS Auto Spa – Fairfield County’s top mobile detailing service for premium detailing, paint correction, ceramic coating, and commercial fleets."
        />
      </Helmet>

      {/* NAVBAR */}
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-28 pb-20">
        {/* HEADER SECTION */}
        <section className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-6 md:gap-8">
            <p className="text-xs md:text-sm tracking-[0.25em] text-zinc-500 uppercase">
              About NAS Auto Spa
            </p>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Fairfield County’s Premier{" "}
              <span className="text-[#e1b11b]">Mobile Detailing Experience</span>
            </h1>

            <p className="text-base md:text-lg text-zinc-300 max-w-3xl leading-relaxed">
              NAS Auto Spa was built around a simple idea: bring luxury-level auto care
              directly to you. From daily drivers to weekend builds, we treat every
              vehicle like it's our own — with precision, pride, and an obsession for
              the details most people miss.
            </p>
          </div>
        </section>

        {/* STORY + HIGHLIGHTS */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-12 md:mt-16">
          <div className="grid md:grid-cols-[2fr,1.3fr] gap-10 md:gap-14 items-start">
            <div className="space-y-5 text-zinc-300 text-sm md:text-base leading-relaxed">
              <p>
                What started as friends helping people keep their cars clean quickly
                turned into a full mobile operation serving Fairfield County and
                surrounding areas. We saw how hard it was for busy owners to find
                time to drop their car off, wait around, and hope the results matched
                the price.
              </p>
              <p>
                So we flipped the script. We come to you — home, office, or wherever
                your vehicle is parked — fully equipped with our own water and power.
                Every wash, detail, paint correction, and ceramic coating is done
                with professional tools and premium products designed to protect and
                enhance your vehicle.
              </p>
              <p>
                Whether it’s a quick maintenance wash, a full interior reset, or
                restoring neglected paint, our goal is always the same: deliver
                results that make you say, "Wow."
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-5">
                <h3 className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-3">
                  Why Drivers Choose NAS
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-zinc-200">
                  <li>• Fully mobile – we bring water & electricity</li>
                  <li>• Premium chemicals and top-tier equipment</li>
                  <li>• Interior & exterior packages for every level</li>
                  <li>• Professional paint correction & ceramic coating</li>
                  <li>• Commercial fleet care for work vehicles</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-1">
                    Area Served
                  </p>
                  <p className="text-lg font-semibold">Fairfield County, CT</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-1">
                    Service Type
                  </p>
                  <p className="text-lg font-semibold">Fully Mobile</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CARDS SECTION */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Our Approach to <span className="text-[#e1b11b]">Detailing & Protection</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Obsession With Detail</h3>
              <p className="text-sm text-zinc-300">
                From vents and plastics to paintwork and trim, we focus on the areas
                most people overlook. Every surface matters.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Protection First</h3>
              <p className="text-sm text-zinc-300">
                Our goal is long-term beauty — with proper wash methods, paint
                correction, and ceramic coatings built for durability.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Built for Busy Schedules</h3>
              <p className="text-sm text-zinc-300">
                No waiting rooms, no drop-offs. We come to you — wherever you are —
                with a fully mobile setup.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mt-16 md:mt-20">
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900/60 via-zinc-900/40 to-zinc-900/20 px-6 md:px-10 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Your Cars, Our Passion.
              </h3>
              <p className="text-sm md:text-base text-zinc-300 max-w-xl">
                Ready to experience premium mobile detailing? Contact us today and
                let’s take care of your vehicle.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <a
                href="tel:19293076986"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#e1b11b] text-black text-sm md:text-base font-semibold tracking-wide hover:bg-yellow-400 transition-colors"
              >
                Call (929) 307-6986
              </a>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                Fairfield County • Mobile Detailing
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default AboutPage;
