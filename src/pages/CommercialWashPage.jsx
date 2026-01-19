import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUpContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 0.61, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const CommercialWashPage = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden w-full">
      <Helmet>
        <title>Fleet Washing & Commercial Detailing in Fairfield County, CT | NAS Auto Spa</title>
        <meta
          name="description"
          content="Keep your work trucks, vans, and service vehicles clean with mobile fleet washing and commercial detailing in Fairfield County, CT. Reliable schedules and a professional image for your business."
        />
        <link
          rel="canonical"
          href="https://www.nasautospa.com/fleet-detailing-fairfield-county-ct"
        />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section
        ref={headerRef}
        className="relative pt-40 pb-24 overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/gallery/commercial-contracts.jpg"
            alt="Commercial fleet washing and detailing in Fairfield County CT"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/95" />
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-32 -left-10 h-72 w-72 bg-[#e1b11b]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 bg-zinc-700/30 rounded-full blur-3xl" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeUpContainer}
            className="space-y-6"
          >
            <motion.p
              variants={fadeUpItem}
              className="text-[11px] uppercase tracking-[0.35em] text-zinc-400"
            >
              NAS AUTO SPA • COMMERCIAL FLEETS
            </motion.p>

            <motion.h1
              variants={fadeUpItem}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
            >
              Commercial washes for{" "}
              <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                work trucks, vans, and fleets.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              className="text-sm md:text-base text-zinc-200 max-w-2xl"
            >
              Your vehicles represent your brand on every job. We help you keep them clean,
              presentable, and protected with scheduled on-site washing and detailing for fleets
              across Fairfield County, CT.
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              className="flex flex-wrap gap-3 pt-4"
            >
              <a
                href="mailto:contact@nasautospa.com"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#e1b11b] text-black text-xs md:text-sm font-semibold tracking-wide hover:bg-yellow-400 transition"
              >
                Email us: contact@nasautospa.com
              </a>
              <a
                href="tel:+19293076986"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-zinc-700 text-xs md:text-sm text-zinc-200 hover:border-yellow-400 hover:text-yellow-300 transition"
              >
                Call / Text to discuss fleet needs
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative bg-black pb-24 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 space-y-14 md:space-y-18">

          {/* Overview + Ideal for */}
          <motion.div
            className="grid gap-10 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionFade}
          >
            <div className="space-y-5">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Built around how your business operates.
              </h2>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                We partner with landscaping companies, contractors, delivery services, and other
                local businesses to keep their vehicles clean and presentable. Our mobile setup
                means we can service your fleet at your yard, shop, or job site — without pulling
                multiple vehicles off the road at once.
              </p>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                Together, we&apos;ll create a schedule and service level that fits your operation,
                whether you need quick maintenance washes, interior cleanups, or periodic
                full-details for client-facing vehicles.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Ideal for
              </h3>
              <ul className="space-y-2.5 text-sm md:text-base text-zinc-200">
                <li>• Landscaping and lawn care companies</li>
                <li>• Construction and contractor fleets</li>
                <li>• Delivery vans and local service vehicles</li>
                <li>• Real estate and property management vehicles</li>
                <li>• Any business that relies on a clean, professional image</li>
              </ul>
            </div>
          </motion.div>

          {/* Fleet options */}
          <motion.div
            className="rounded-3xl border border-zinc-800/70 bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionFade}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Fleet detailing options
            </h2>
            <div className="grid gap-8 md:grid-cols-3 text-sm md:text-base text-zinc-200">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Maintenance washes
                </h3>
                <p>
                  Regular exterior washes to remove road film, dirt, and debris so your branding and
                  signage stay visible and clean.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Interior refresh
                </h3>
                <p>
                  Vacuuming, wipe-downs, and glass cleaning to keep driver areas fresh and safe,
                  especially for shared vehicles.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Deep cleaning & protection
                </h3>
                <p>
                  Periodic deep details and optional protective coatings for higher-value vehicles
                  that see clients or represent your brand at job sites.
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs md:text-sm text-zinc-500">
              We can invoice per visit, per vehicle, or on a monthly basis depending on your fleet
              size and frequency.
            </p>
          </motion.div>

          {/* How it works – process */}
          <motion.div
            className="border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionFade}
          >
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                HOW FLEET SERVICE WORKS
              </p>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Simple, predictable, and built for busy routes
            </h2>

            <ol className="space-y-4 text-sm md:text-base text-zinc-300">
              {[
                {
                  title: "Quick consultation",
                  body: "You tell us how many vehicles you run, where they park, and how often you’d like them serviced.",
                },
                {
                  title: "Custom service plan",
                  body: "We build a schedule and service mix that fits your routes — anything from weekly washes to monthly deep details.",
                },
                {
                  title: "On-site service",
                  body: "We show up with our own water and power, take care of the vehicles on-site, and get out of your way.",
                },
                {
                  title: "Simple billing",
                  body: "We can bill per visit, per vehicle, or on a recurring monthly basis depending on what works best for your books.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <div className="flex flex-col items-center mt-1">
                    <div className="h-6 w-6 rounded-full bg-[#e1b11b] text-black text-[11px] flex items-center justify-center font-semibold">
                      {i + 1}
                    </div>
                    {i < 3 && (
                      <div className="flex-1 w-px bg-zinc-700/70 mt-1" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-zinc-50">{step.title}</p>
                    <p className="text-zinc-300 mt-1">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Scheduling & billing cards */}
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionFade}
          >
            {[
              {
                title: "Set schedules",
                text: "Weekly, bi-weekly, or monthly routes that keep your fleet looking consistent without you having to think about it.",
              },
              {
                title: "On-call add-ons",
                text: "Need extra service after a muddy week or big storm? We can layer on additional visits as needed.",
              },
              {
                title: "Flexible billing",
                text: "Invoice by unit, by visit, or on a flat monthly retainer — we’ll match what works best for your accounting.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-zinc-800 bg-black/70 p-5 flex flex-col gap-2"
              >
                <p className="text-sm md:text-base font-semibold text-zinc-50">
                  {card.title}
                </p>
                <p className="text-sm md:text-base text-zinc-300">{card.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Types of vehicles */}
          <motion.div
            className="grid gap-8 md:grid-cols-2 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionFade}
          >
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Vehicles we work with
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                From single work trucks to mixed fleets, we can handle a variety of vehicle
                types as long as there’s safe access and a place to park.
              </p>
            </div>
            <div className="space-y-2 text-sm md:text-base text-zinc-200">
              <ul className="space-y-1.5">
                <li>• Pickup trucks and work trucks</li>
                <li>• Enclosed trailers and utility trailers</li>
                <li>• Cargo vans and service vans</li>
                <li>• Small box trucks (local delivery)</li>
                <li>• Company cars and real estate vehicles</li>
              </ul>
              <p className="mt-3 text-xs md:text-sm text-zinc-500">
                Have something larger or more specialized? Reach out with details and we&apos;ll
                let you know what&apos;s realistic.
              </p>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            className="border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionFade}
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                FAQ
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight mt-1">
                Common questions about fleet washing
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base">
              <div>
                <p className="font-medium text-zinc-50">
                  Do you bring your own water and power?
                </p>
                <p className="text-zinc-300">
                  Yes. We&apos;re fully mobile and self-contained. As long as we have safe access
                  to your vehicles, we can handle the rest.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-50">
                  How many vehicles can you do in one visit?
                </p>
                <p className="text-zinc-300">
                  It depends on the service level and condition, but we can plan routes for
                  anything from a few units to larger fleets. We&apos;ll give you realistic
                  numbers once we know your setup.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-50">
                  Can you work early mornings or evenings?
                </p>
                <p className="text-zinc-300">
                  In many cases, yes. We know fleets are busy during the day, so we can explore
                  off-peak windows to minimize disruption to your routes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-zinc-900 pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionFade}
          >
            <div>
              <h2 className="text-lg md:text-xl font-semibold">
                Want a consistent, professional look for your fleet?
              </h2>
              <p className="text-sm md:text-base text-zinc-300 mt-1.5">
                Reach out with how many vehicles you run, where you&apos;re based, and how often
                you&apos;d like service. We&apos;ll build a plan that works for your routes and
                budget.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contact@nasautospa.com"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#e1b11b] text-black text-xs md:text-sm font-semibold tracking-wide hover:bg-yellow-400 transition"
              >
                contact@nasautospa.com
              </a>
              <a
                href="tel:+19293076986"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-zinc-700 text-xs md:text-sm text-zinc-200 hover:border-yellow-400 hover:text-yellow-300 transition"
              >
                Call or Text (929) 307-6986
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialWashPage;
