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

const PaintCorrectionPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>Paint Correction in Fairfield County, CT | NAS Auto Spa</title>
        <meta
          name="description"
          content="NAS Auto Spa provides professional paint correction in Fairfield County, CT. Remove swirl marks, light scratches, and haziness with proper machine polishing — a perfect base on its own or before ceramic coating."
        />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/gallery/paint-correction.jpg"
            alt="Paint correction polishing in Fairfield County CT"
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-6">
          <motion.p
            className="text-[11px] uppercase tracking-[0.35em] text-zinc-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            NAS AUTO SPA • PAINT CORRECTION
          </motion.p>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Restore your paint to a{" "}
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              deep, glossy finish.
            </span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-zinc-200 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            Swirl marks, light scratches, haziness, and wash-induced marring can make even
            newer vehicles look tired. Our paint correction safely removes defects and revives
            your clear coat so the car actually looks as good as it feels to drive.
          </motion.p>

          <motion.div
            className="pt-4 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
          >
            <a
              href="https://www.nasautospa.com/#contact"
              className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
            >
              Get a paint correction quote
            </a>
            <a
              href="tel:19293076986"
              className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium tracking-wide text-zinc-100 hover:border-zinc-400 transition"
            >
              Call / Text (929) 307-6986
            </a>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-black pb-24 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 space-y-14 md:space-y-16">

          {/* What it is / what it fixes */}
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                What is paint correction?
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                Paint correction is the process of machine polishing your vehicle’s clear
                coat to remove surface defects and restore clarity and gloss. Using proper
                pads, compounds, and polishing techniques, we level the clear coat just
                enough to safely remove swirls and light scratches without compromising
                the paint.
              </p>
              <p className="text-sm md:text-base text-zinc-300">
                Done right, it completely changes how the car looks in the sun — straight
                lines, crisp reflections, and true depth in the color.
              </p>
            </div>

            <div className="space-y-3 text-sm text-zinc-200">
              <p>We target the things that kill your gloss:</p>
              <ul className="space-y-1">
                <li>• Swirl marks from automatic or careless hand washes</li>
                <li>• Light scratches and scuffs in the clear coat</li>
                <li>• Oxidation and faded or hazy paint</li>
                <li>• Holograms and buffer trails from poor polishing jobs</li>
              </ul>
            </div>
          </motion.div>

          {/* What we correct – cards */}
          <motion.div
            className="grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {[
              {
                label: "Daily driver rehab",
                text: "Reset years of swirl marks and wash marring so your commuter actually looks cared for.",
              },
              {
                label: "Pre-sale glow-up",
                text: "Boost perceived value with sharper reflections and cleaner, richer paint before you list.",
              },
              {
                label: "Enthusiast level finish",
                text: "Dial in a mirror finish for cars that matter — weekend toys, builds, and show prep.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                className="border border-zinc-800 rounded-2xl bg-zinc-950/70 p-5 flex flex-col gap-2"
                variants={fadeUp}
                custom={i + 0.3}
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#e1b11b]/90">
                  {card.label}
                </p>
                <p className="text-sm text-zinc-300">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Process timeline */}
          <motion.div
            className="border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                Our Approach
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                How we correct your paint, step by step
              </h2>
              <p className="text-sm md:text-base text-zinc-300 max-w-3xl">
                Every vehicle isn’t treated the same. But the framework is: clean, decontaminate,
                inspect, correct, protect.
              </p>
            </div>

            <ol className="space-y-4 text-sm text-zinc-300">
              {[
                {
                  title: "Wash & decontamination",
                  body: "Thorough hand wash followed by iron remover and clay bar (when needed) to strip bonded contaminants from the surface.",
                },
                {
                  title: "Paint inspection under proper lighting",
                  body: "We use focused lighting to map out defects, thickness, sensitive areas, and prior repairs.",
                },
                {
                  title: "Test spot & polish system",
                  body: "We test pad and polish combinations on a small section first to find the safest combo that delivers the best result.",
                },
                {
                  title: "Correction passes",
                  body: "Panel by panel, we machine polish to reduce or remove swirls, light scratches, and haze while monitoring heat and progress.",
                },
                {
                  title: "Finishing & wipe-down",
                  body: "Refinement polishing (as needed), followed by an IPA-style wipe-down so we see true results — not just filler oils.",
                },
                {
                  title: "Protection",
                  body: "We finish with a high-quality sealant or ceramic coating depending on your package.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <div className="flex flex-col items-center mt-1">
                    <div className="h-6 w-6 rounded-full bg-[#e1b11b] text-black text-[11px] flex items-center justify-center font-semibold">
                      {i + 1}
                    </div>
                    {i < 5 && (
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

          {/* Levels of correction */}
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                badge: "LEVEL 1",
                title: "Enhancement polish",
                points: [
                  "Single-step polish focused on gloss and clarity",
                  "Reduces light swirls and haze",
                  "Great for newer or well-kept vehicles",
                ],
              },
              {
                badge: "LEVEL 2",
                title: "Correction & refinement",
                highlight: true,
                points: [
                  "Two-step process: cutting and finishing polish",
                  "Targets heavier swirls and light scratches",
                  "Ideal before ceramic coating",
                ],
              },
              {
                badge: "LEVEL 3",
                title: "Advanced / multi-stage",
                points: [
                  "Multiple polishing stages for maximum correction",
                  "Best for darker colors and enthusiast builds",
                  "Tailored to vehicle, goals, and paint condition",
                ],
              },
            ].map((pkg, i) => (
              <motion.div
                key={pkg.title}
                className={`rounded-2xl border p-5 flex flex-col gap-3 bg-black/70 ${
                  pkg.highlight
                    ? "border-[#e1b11b]/80 shadow-[0_0_30px_rgba(225,177,27,0.25)]"
                    : "border-zinc-800"
                }`}
                variants={fadeUp}
                custom={i * 0.2}
              >
                <p
                  className={`text-[11px] uppercase tracking-[0.3em] ${
                    pkg.highlight ? "text-[#e1b11b]" : "text-zinc-500"
                  }`}
                >
                  {pkg.badge}
                </p>
                <h3 className="text-lg md:text-xl font-semibold">{pkg.title}</h3>
                <p className="text-sm text-[#e1b11b] font-semibold">
                  {pkg.price}
                </p>
                <ul className="text-sm text-zinc-300 space-y-1 mt-1">
                  {pkg.points.map((pt) => (
                    <li key={pt}>• {pt}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Ceramic coating tie-in */}
          <motion.div
            className="grid gap-8 md:grid-cols-2 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                The perfect base for ceramic coating
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                Ceramic coating locks in whatever condition the paint is in. That’s why most of
                our ceramic clients start with at least a one-stage correction — so we’re
                protecting a glossy, refined finish instead of sealing in years of wash damage.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p>Best time to combine paint correction + coating:</p>
              <ul className="space-y-1">
                <li>• Right after buying a new or new-to-you vehicle</li>
                <li>• When you’re tired of seeing swirls in every sun shot</li>
                <li>• Before a big event, show, or season change</li>
                <li>• When you plan to keep the car long-term</li>
              </ul>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            className="border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                FAQ
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight mt-1">
                Common questions about paint correction
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base">
              <div>
                <p className="font-medium text-zinc-50">
                  Will paint correction remove every single scratch?
                </p>
                <p className="text-zinc-300">
                  Not every scratch is safely removable. If a scratch has gone through the
                  clear coat, we can often make it less noticeable, but fully removing it may
                  require repainting. The goal is maximum improvement while keeping your clear
                  coat healthy.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-50">
                  How long does a correction job take?
                </p>
                <p className="text-zinc-300">
                  Most single-stage corrections take about a day. Multi-stage or darker
                  vehicles can take longer depending on size, condition, and the level of
                  finish you’re aiming for.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-50">
                  Will the swirls come back right away?
                </p>
                <p className="text-zinc-300">
                  If you wash the car properly, no. Swirls come from bad wash techniques and
                  dirty media, not from the polishing itself. We’re happy to walk you through
                  safe wash methods so you keep the finish we just created.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="mt-4 border border-zinc-800 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Ready to see what your paint is really capable of?
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Send a few photos in good lighting and tell us how you use the car. We’ll
                recommend the right level of correction and protection based on your goals and
                budget.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Request a quote
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

export default PaintCorrectionPage;
