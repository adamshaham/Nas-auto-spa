import React from "react";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "./BeforeAfterSlider";
import LoopVideo from "./LoopVideo";

const ServicesList = () => {
  return (
    <section id="services" className="relative py-14 md:py-24 bg-black overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-0 w-[28rem] h-[28rem] rounded-full bg-[#e1b11b]/10 blur-[90px] animate-blob" />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[22rem] h-[22rem] rounded-full bg-amber-300/10 blur-[80px] animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#e1b11b]/40 bg-[#e1b11b]/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e1b11b] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#e1b11b]">
              What we do
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold italic tracking-tight">
            <span className="text-white">OUR</span>{" "}
            <span className="hero-shine">SERVICES</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Mobile detailing, paint correction, ceramic coating, exotic &amp; luxury
            rentals, and fleet care — brought to your driveway anywhere in Fairfield
            County and the tri-state area.
          </p>
        </div>

        <div className="hero-form-frame rounded-[1.6rem] p-[1px] mb-6 md:mb-8">
          <div className="rounded-[1.55rem] bg-zinc-950/90 backdrop-blur-xl p-3 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#e1b11b] mb-1">
                  Car detailing
                </p>
                <p className="text-sm text-zinc-400 max-w-lg">
                  Neglected cloth seats on the left. Extracted, steamed, and reset
                  on the right. Scroll or drag to reveal the interior detail.
                </p>
              </div>
              <Link
                to="/mobile-detailing-fairfield-county-ct"
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#e1b11b] hover:text-amber-300 whitespace-nowrap"
              >
                Learn more →
              </Link>
            </div>
            <BeforeAfterSlider
              beforeSrc="/images/before-after/interior-before.jpg"
              afterSrc="/images/before-after/interior-after.jpg"
              beforeAlt="Dirty cloth car seats before interior detailing"
              afterAlt="Clean gray cloth car seats after interior detailing"
              beforeLabel="Dirty interior"
              afterLabel="After detail"
              ariaLabel="Before and after car detailing reveal"
              hint="Scroll to wipe the interior, or drag the gold handle yourself."
              objectPosition="center 48%"
            />
          </div>
        </div>

        <div className="hero-form-frame rounded-[1.6rem] p-[1px] mb-6 md:mb-8">
          <div className="rounded-[1.55rem] bg-zinc-950/90 backdrop-blur-xl p-3 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#e1b11b] mb-1">
                  Paint correction
                </p>
                <p className="text-sm text-zinc-400 max-w-lg">
                  Swirl marks and light scratches on the left. Machine-polished gloss
                  on the right. Scroll or drag to reveal the correction.
                </p>
              </div>
              <Link
                to="/paint-correction-fairfield-county-ct"
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#e1b11b] hover:text-amber-300 whitespace-nowrap"
              >
                Learn more →
              </Link>
            </div>
            <BeforeAfterSlider
              beforeSrc="/images/before-after/paint-panel-before.jpg"
              afterSrc="/images/before-after/paint-panel-after.jpg"
              beforeAlt="Car paint with swirl marks and scratches before correction"
              afterAlt="Car paint after professional paint correction"
              beforeLabel="Swirls & scratches"
              afterLabel="Corrected gloss"
              ariaLabel="Before and after paint correction reveal"
              hint="Scroll to wipe the correction, or drag the gold handle yourself."
              objectPosition="center 42%"
            />
          </div>
        </div>

        <div className="hero-form-frame rounded-[1.6rem] p-[1px] mb-6 md:mb-8">
          <div className="rounded-[1.55rem] bg-zinc-950/90 backdrop-blur-xl p-3 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#e1b11b] mb-1">
                  Ceramic coating
                </p>
                <p className="text-sm text-zinc-400 max-w-lg">
                  Water sheets off protected paint instead of clinging. That hydrophobic
                  finish is what a ceramic coating actually looks like.
                </p>
              </div>
              <Link
                to="/ceramic-coating-fairfield-county-ct"
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#e1b11b] hover:text-amber-300 whitespace-nowrap"
              >
                Learn more →
              </Link>
            </div>
            <LoopVideo
              src="/videos/ceramic-coating.mp4"
              poster="/images/before-after/ceramic-coating-poster.jpg"
              title="Ceramic coating hydrophobic water sheeting on dark paint"
              flipHorizontal
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
