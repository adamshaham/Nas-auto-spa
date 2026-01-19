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

const CeramicCoatingPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Helmet>
        <title>Ceramic Coating in Fairfield County, CT | NAS Auto Spa</title>
        <meta
          name="description"
          content="Protect your investment with professional ceramic coating in Fairfield County, CT. NAS Auto Spa delivers deep gloss, hydrophobic protection, and easier maintenance washes with proper prep and application."
        />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/gallery/ceramic-coating.jpg"
            alt="Ceramic coating application on a vehicle in Fairfield County CT"
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
            NAS AUTO SPA • CERAMIC COATING
          </motion.p>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Long-term paint protection with{" "}
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              professional ceramic coatings.
            </span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-zinc-200 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            Ceramic coating creates a durable, hydrophobic layer on top of your clear coat,
            making it easier to wash, harder for contaminants to stick, and giving your
            vehicle a deep, wet-gloss finish that lasts years — not weeks.
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
              Get ceramic coating pricing
            </a>
            <a
              href="tel:19293076986"
              className="inline-flex items-center rounded-full border border-zinc-600 px-5 py-2.5 text-sm font-medium tracking-wide text-zinc-100 hover:border-zinc-300 transition"
            >
              Call / Text (929) 307-6986
            </a>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-black pb-24 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 space-y-14 md:space-y-16">
          {/* Why ceramic / benefits */}
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
                Why choose ceramic coating?
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                Traditional waxes and sealants might last weeks or a few months. Our ceramic
                coatings offer long-term protection when properly maintained — resisting UV rays,
                chemical etching, and environmental fallout while boosting gloss and color depth.
              </p>
              <p className="text-sm md:text-base text-zinc-300">
                The end result is a “just detailed” look that sticks around, wash after wash,
                rain after rain.
              </p>
            </div>
            <div className="space-y-3 text-sm text-zinc-200">
              <p>Benefits you’ll notice right away:</p>
              <ul className="space-y-1">
                <li>• Deep, wet-gloss finish that turns heads in the sun</li>
                <li>• Hydrophobic surface that beads and sheets water aggressively</li>
                <li>• Easier, safer washes with less scrubbing and touching</li>
                <li>• Added resistance to staining and light chemical etching</li>
              </ul>
            </div>
          </motion.div>

          {/* Who it's for – cards */}
          <motion.div
            className="grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {[
              {
                label: "New cars",
                text: "Protect your investment from day one instead of waiting until the paint already shows wear.",
              },
              {
                label: "Corrected paint",
                text: "Lock in your fresh paint correction so that clarity and gloss actually lasts.",
              },
              {
                label: "Daily drivers & toys",
                text: "Perfect for both commuters and weekend builds that need shine and easier upkeep.",
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

          {/* Process */}
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
                OUR COATING PROCESS
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Ceramic coating done the right way
              </h2>
              <p className="text-sm md:text-base text-zinc-300 max-w-3xl">
                Coatings aren’t magic in a bottle. The finish comes from the prep behind it.
                Here’s how we approach each vehicle before we ever open a coating bottle.
              </p>
            </div>

            <ol className="space-y-4 text-sm text-zinc-300">
              {[
                {
                  title: "Thorough wash & decontamination",
                  body: "We start with a safe hand wash, followed by iron removal and clay bar (when needed) to strip bonded contaminants from the surface.",
                },
                {
                  title: "Paint inspection & correction (as needed)",
                  body: "Under proper lighting, we inspect the paint and perform at least a light polish or full correction depending on your package.",
                },
                {
                  title: "Panel prep & wipe-down",
                  body: "We wipe the paint with an appropriate panel prep solution so the coating bonds to the clear coat, not leftover oils.",
                },
                {
                  title: "Coating application",
                  body: "We apply the ceramic coating in controlled sections, leveling and buffing as it flashes so the finish is even and glossy.",
                },
                {
                  title: "Cure window & aftercare talk",
                  body: "We walk you through the first 24–48 hours and the first couple weeks of care so you don’t accidentally damage the coating while it cures.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <div className="flex flex-col items-center mt-1">
                    <div className="h-6 w-6 rounded-full bg-[#e1b11b] text-black text-[11px] flex items-center justify-center font-semibold">
                      {i + 1}
                    </div>
                    {i < 4 && (
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

       
          {/* What ceramic does / doesn’t do */}
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
                What ceramic coating does — and doesn’t do
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                Coatings are incredible, but they’re not bulletproof armor. We like to be
                honest about what you can expect so you’re happy long term.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p>Coatings do:</p>
              <ul className="space-y-1 mb-3">
                <li>• Make washing faster, safer, and more satisfying</li>
                <li>• Help resist UV fading, staining, and light etching</li>
                <li>• Keep the car looking “just detailed” much longer</li>
              </ul>
              <p>Coatings don’t:</p>
              <ul className="space-y-1">
                <li>• Stop rock chips or door dings</li>
                <li>• Fix scratches or swirls on their own (that’s correction)</li>
                <li>• Replace proper washing and care altogether</li>
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
                Common questions about ceramic coating
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base">
              <div>
                <p className="font-medium text-zinc-50">
                  How long does a ceramic coating last?
                </p>
                <p className="text-zinc-300">
                  It depends on the product level and how the car is cared for. With proper
                  washing and maintenance, coatings can last years instead of months like
                  traditional waxes. We’ll walk you through realistic expectations for your
                  package.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-50">
                  Do I still need to wash the car?
                </p>
                <p className="text-zinc-300">
                  Yes. Coatings make washing much easier and safer, but they don’t replace
                  regular maintenance. The upside is that dirt and grime don’t bond as hard,
                  so the car cleans up much faster.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-50">
                  Do you recommend paint correction first?
                </p>
                <p className="text-zinc-300">
                  Almost always. Ceramic locks in whatever condition the paint is in. Doing
                  at least a light correction first means we’re locking in a glossy, refined
                  finish instead of sealing in years of swirls.
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
                Ready to get your car coated the right way?
              </h3>
              <p className="text-sm md:text-base text-zinc-300 mt-1">
                Share a few photos and tell us how you use the vehicle. We’ll recommend the
                prep, coating level, and pricing that makes the most sense for you — no fluff,
                just honest guidance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.nasautospa.com/#contact"
                className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
              >
                Request coating info
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

export default CeramicCoatingPage;
