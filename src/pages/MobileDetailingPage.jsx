import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
};

const MobileDetailingPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>Mobile Car Detailing in Fairfield County, CT | NAS Auto Spa</title>
        <meta
          name="description"
          content="NAS Auto Spa provides luxury mobile car detailing in Fairfield County, CT. We bring our own water and power for premium interior and exterior details at your home or office — with Stage 1, Stage 2, and Stage 3 packages."
        />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/gallery/car-detailing.jpg"
            alt="Mobile car detailing in Fairfield County CT"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/95" />

        {/* Brand glows */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-32 -left-10 h-72 w-72 bg-[#e1b11b]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 bg-zinc-700/30 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-6">
          <motion.p
            className="text-[11px] uppercase tracking-[0.35em] text-zinc-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            NAS AUTO SPA • MOBILE DETAILING
          </motion.p>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Premium mobile car detailing
            </span>{" "}
            that comes to you.
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-zinc-200 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            Whether it’s your daily driver, weekend toy, or family hauler, our mobile detailing
            services are built to clean, protect, and refresh your vehicle — right in your
            driveway or at your office anywhere in Fairfield County.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 pt-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
              We bring water &amp; power
            </span>
            <span className="text-xs text-zinc-500">
              Your car, our passion. Your time, protected.
            </span>
          </motion.div>

          <motion.div
            className="pt-4 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
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
              View services &amp; booking
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-black pb-24 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 space-y-12 md:space-y-16">
          {/* Step-by-step full detail */}
          <motion.section
            className="border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                What’s Included
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Step-by-step: full interior &amp; exterior detail
              </h2>
              <p className="text-sm md:text-base text-zinc-300 max-w-3xl">
                Every full detail is done the same way: carefully, methodically, and with the goal
                of making your car feel as close to “brand new” as possible — without you ever
                leaving your driveway.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Exterior process */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#e1b11b]">
                  Exterior – step by step
                </h3>
                <ol className="space-y-3 text-sm text-zinc-300 list-decimal list-inside">
                  <li>
                    <span className="font-semibold text-white">Arrival &amp; inspection.</span>{" "}
                    Walk-around of the vehicle, note problem areas (bugs, tar, stains, scratches),
                    confirm package and expectations.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Wheel &amp; tire deep clean.</span>{" "}
                    Dedicated wheel brushes and chemicals for faces, barrels, calipers, and tires —
                    removing brake dust and old browning.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Pre-rinse &amp; foam bath.</span>{" "}
                    Thorough rinse followed by a thick foam pre-soak to safely loosen dirt before
                    we touch the paint.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Hand wash (2-bucket method).</span>{" "}
                    We hand wash the entire vehicle top-to-bottom using clean mitts and
                    pH-balanced soap to reduce the risk of swirl marks.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Rinse, blow-dry &amp; towel dry.
                    </span>{" "}
                    Touchless drying where possible with air, then soft microfiber towels on paint,
                    glass, door jambs, and trims.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Detailing &amp; protection.</span>{" "}
                    Exterior glass cleaned, plastics and trims dressed, and a spray sealant or wax
                    applied (depending on package) for added gloss and protection.
                  </li>
                </ol>
              </div>

              {/* Interior process */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#e1b11b]">
                  Interior – step by step
                </h3>
                <ol className="space-y-3 text-sm text-zinc-300 list-decimal list-inside">
                  <li>
                    <span className="font-semibold text-white">
                      Trash &amp; personal items out.
                    </span>{" "}
                    We remove obvious trash and set aside any personal items so nothing gets lost
                    or thrown away.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Full vacuum &amp; air blow-out.
                    </span>{" "}
                    Seats, floors, trunk, under mats, and between seats. We use air tools to blow
                    debris out of tight cracks and crevices.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Interior plastics &amp; panels cleaned.
                    </span>{" "}
                    Dashboard, doors, center console, cupholders, vents, and switchgear are cleaned
                    with safe interior cleaners and soft brushes.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Seats, mats &amp; carpets treated.
                    </span>{" "}
                    Depending on condition, this can include shampooing, spot treatment, and
                    extraction to remove stains and odors.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Leather cleaning &amp; conditioning.
                    </span>{" "}
                    Leather surfaces are gently cleaned and conditioned to restore softness and help
                    prevent cracking (when applicable).
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Glass, finishes &amp; final touches.
                    </span>{" "}
                    Interior glass is polished streak-free, high-touch areas are re-wiped, and we
                    do a final inspection so everything looks and feels right before we pack up.
                  </li>
                </ol>
              </div>
            </div>

            <p className="text-xs md:text-sm text-zinc-400 pt-2">
              Heavily soiled vehicles (pet hair, sand, spills, smoke, biohazards, etc.) may require
              additional time or an upgraded package, but the process always follows this same
              foundation.
            </p>
          </motion.section>

          {/* Stage 1 vs Stage 2 vs Stage 3 */}
          <motion.section
            className="border border-zinc-800 rounded-3xl bg-zinc-950/80 p-6 md:p-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0.2}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                  Package Comparison
                </p>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                  Stage 1 vs Stage 2 vs Stage 3
                </h2>
                <p className="text-sm md:text-base text-zinc-300 max-w-3xl mt-1">
                  All stages include a full interior and exterior detail. As you move up,
                  you&apos;re adding more paint correction and long-term protection on top of that
                  base clean.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Stage 1 */}
              <div className="rounded-2xl border border-zinc-700 bg-black/60 p-5 flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Stage 1
                </p>
                <h3 className="text-lg font-semibold text-white">
                  Exterior + Interior Reset
                </h3>
                <p className="text-sm text-[#e1b11b] font-semibold">
                  $199{" "}
                  <span className="text-xs text-zinc-400 font-normal">starting at</span>
                </p>
                <p className="text-xs text-zinc-400">
                  Full interior + exterior detail — perfect base reset for most vehicles.
                </p>
                <ul className="text-sm text-zinc-300 space-y-2 mt-2">
                  <li>• Hand wash (2 stage)</li>
                  <li>• Wheel and tire cleaning</li>
                  <li>• Window cleaning</li>
                  <li>• Door jambs cleaned</li>
                  <li>• Full exterior wax</li>
                  <li>• Engine bay cleaning</li>
                  <li>• Interior steam cleaning</li>
                  <li>• Shampoo extraction (seats / carpets)</li>
                </ul>
                <p className="text-[11px] text-zinc-500 mt-3">
                  Best for: cars that need a full refresh inside and out, but paint is in decent
                  shape.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="rounded-2xl border border-[#e1b11b]/70 bg-black/80 p-5 flex flex-col gap-3 shadow-[0_0_35px_rgba(225,177,27,0.25)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#e1b11b]">
                  Stage 2
                </p>
                <h3 className="text-lg font-semibold text-white">
                  Detail + Paint Correction
                </h3>
                <p className="text-sm text-[#e1b11b] font-semibold">
                  $299{" "}
                  <span className="text-xs text-zinc-400 font-normal">starting at</span>
                </p>
                <p className="text-xs text-zinc-400">
                  Everything in Stage 1, plus clay bar and a 1-step polish to remove light swirls
                  and boost gloss.
                </p>
                <ul className="text-sm text-zinc-300 space-y-2 mt-2">
                  <li>• Hand wash (2 stage)</li>
                  <li>• Engine bay cleaning</li>
                  <li>• Wheel and tire cleaning</li>
                  <li>• Window cleaning</li>
                  <li>• Door jambs cleaned</li>
                  <li>• Full exterior wax</li>
                  <li>• Interior steam cleaning</li>
                  <li>• Shampoo extraction</li>
                  <li>• Clay bar treatment</li>
                  <li>• 1-step paint correction / polish</li>
                </ul>
                <p className="text-[11px] text-zinc-500 mt-3">
                  Best for: vehicles with light swirls, dull paint, or that need a noticeable gloss
                  upgrade.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="rounded-2xl border border-zinc-700 bg-black/60 p-5 flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Stage 3
                </p>
                <h3 className="text-lg font-semibold text-white">
                  Paint Correction + Ceramic Coating
                </h3>
                <p className="text-sm text-[#e1b11b] font-semibold">
                  $399{" "}
                  <span className="text-xs text-zinc-400 font-normal">starting at</span>
                </p>
                <p className="text-xs text-zinc-400">
                  Full detail, 1-step correction, and ceramic coating protection for long-term shine
                  and easier washes.
                </p>
                <ul className="text-sm text-zinc-300 space-y-2 mt-2">
                  <li>• Hand wash (2 stage)</li>
                  <li>• Engine bay cleaning</li>
                  <li>• Wheel and tire cleaning</li>
                  <li>• Window cleaning</li>
                  <li>• Door jambs cleaned</li>
                  <li>• Full exterior wax</li>
                  <li>• Interior steam cleaning</li>
                  <li>• Shampoo extraction</li>
                  <li>• Clay bar treatment</li>
                  <li>• 1-step paint correction / polish</li>
                  <li>• Ceramic coating application</li>
                </ul>
                <p className="text-[11px] text-zinc-500 mt-3">
                  Best for: long-term protection, maximum gloss, and easier maintenance after the
                  detail.
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-500">
              Prices vary based on size, condition, and location. We&apos;ll confirm final pricing
              after a quick look at the vehicle or photos.
            </p>
          </motion.section>

          {/* Who it's for */}
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0.3}
          >
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Perfect for busy owners in Fairfield County
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                No more waiting rooms, car washes that miss the details, or wasting a day off to
                get your car cleaned. We come to you with everything needed to complete the detail
                on-site — water, power, tools, and products.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p>Ideal for:</p>
              <ul className="space-y-1">
                <li>• Daily drivers that need regular upkeep</li>
                <li>• Lease vehicles you want to keep in top shape</li>
                <li>• Family vehicles, SUVs, and trucks</li>
                <li>• Small business vehicles and light fleets</li>
              </ul>
            </div>
          </motion.div>

          {/* CTA bottom */}
          <motion.div
            className="mt-8 border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0.4}
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Ready to book your mobile detail?
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Share a few details about your vehicle and location, and we’ll confirm your date and
                time.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Book a mobile detail
              </a>
              <a
                href="tel:19293076986"
                className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium tracking-wide text-zinc-200 hover:border-zinc-400 transition"
              >
                Call / Text (929) 307-6986
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileDetailingPage;
