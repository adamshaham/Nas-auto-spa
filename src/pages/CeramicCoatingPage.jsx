import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { breadcrumbSchema, servicePageSchema } from "../seo/schemas";
import { DEPOSIT_POLICY } from "../data/pricing";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoopVideo from "../components/LoopVideo";

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
      <SEO
        title="System X 6-Year Ceramic Coating in Fairfield County, CT | NAS Auto Spa"
        description="NAS Auto Spa applies System X ceramic coating — a professional 6-year paint protection that bonds to your clear coat. Mobile service across Fairfield County, CT. Learn how it works, what you get, and book your coating."
        path="/ceramic-coating-fairfield-county-ct"
        keywords="System X ceramic coating, 6 year ceramic coating CT, ceramic coating near me, ceramic coating Fairfield County CT, paint protection Stamford CT, ceramic coating Greenwich CT, hydrophobic coating Westport CT, professional ceramic coating Connecticut"
        schemas={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Ceramic Coating', path: '/ceramic-coating-fairfield-county-ct' },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What ceramic coating does NAS Auto Spa use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use System X ceramic coating — a professional-grade product that forms a semi-permanent bond with your vehicle's clear coat and is rated for up to 6 years of protection when properly maintained."
                }
              },
              {
                "@type": "Question",
                "name": "How long does System X ceramic coating last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "System X Pro+ is designed to provide up to 6 years of protection on automotive paint. Longevity depends on how the vehicle is washed, stored, and maintained — we'll walk you through exactly how to care for your coating after install."
                }
              },
              {
                "@type": "Question",
                "name": "Do I still need to wash the car after ceramic coating?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Ceramic coating makes washing much easier and safer, but it doesn't replace regular maintenance. The upside is that dirt and grime don't bond as hard, so the car cleans up much faster."
                }
              },
              {
                "@type": "Question",
                "name": "Do you recommend paint correction before ceramic coating?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Almost always. Ceramic locks in whatever condition the paint is in. Doing at least a light correction first means we're locking in a glossy, refined finish instead of sealing in years of swirls."
                }
              }
            ]
          },
          servicePageSchema({
            name: 'System X 6-Year Ceramic Coating in Fairfield County, CT',
            description: 'Professional System X ceramic coating application with full paint prep and correction. Up to 6 years of hydrophobic paint protection for vehicles in Fairfield County, Connecticut.',
            path: '/ceramic-coating-fairfield-county-ct',
          }),
        ]}
      />

      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gallery/ceramic-coating.jpg"
            alt="System X ceramic coating application on a vehicle in Fairfield County CT"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/95" />

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
            NAS AUTO SPA • SYSTEM X CERAMIC COATING
          </motion.p>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            6-year paint protection that{" "}
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              bonds directly to your car.
            </span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-zinc-200 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            We apply <strong className="text-white font-medium">System X ceramic coating</strong> — a
            professional-grade layer that fuses to your clear coat and delivers up to{" "}
            <strong className="text-white font-medium">6 years</strong> of hydrophobic protection,
            deep gloss, and easier maintenance washes.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 pt-1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            {["System X Pro+", "6-Year Protection", "9H Hardness", "Mobile Service"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.18em] text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="pt-4 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
          >
            <Link
              to="/#contact"
              className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
            >
              Book your ceramic coating
            </Link>
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
          {/* What is ceramic coating */}
          <motion.div
            className="border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                THE BASICS
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                What is ceramic coating — and why does it matter?
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-zinc-300">
              <p>
                Your car&apos;s paint isn&apos;t just color — it&apos;s covered by a clear coat that
                takes the hit from UV rays, bird droppings, road salt, and everyday grime. Over
                time, that clear coat breaks down. Swirls, fading, and staining follow.
              </p>
              <p>
                Ceramic coating is a liquid polymer that cures into a hard, glass-like shell on
                top of that clear coat. Unlike wax that sits on the surface and washes away in
                weeks, a quality ceramic coating chemically bonds to your paint and stays there
                for years — not days.
              </p>
            </div>
          </motion.div>

          {/* System X product section */}
          <motion.div
            className="grid gap-8 md:grid-cols-2 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#e1b11b]/90">
                WHAT WE USE
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                System X ceramic coating
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                At NAS Auto Spa, we don&apos;t use off-the-shelf consumer sprays. We install{" "}
                <strong className="text-white font-medium">System X</strong> — a professional
                ceramic coating trusted by installers worldwide for its bonding strength, gloss,
                and long-term durability.
              </p>
              <p className="text-sm md:text-base text-zinc-300">
                System X Pro+ is rated at 9H hardness, is ultra-hydrophobic, and is designed to
                deliver up to <strong className="text-white font-medium">6 years of protection</strong>{" "}
                on your vehicle when applied correctly and maintained properly. It&apos;s the same
                caliber of product used on luxury and exotic vehicles — brought to your driveway.
              </p>
            </div>
            <div className="border border-zinc-800 rounded-2xl bg-zinc-950/70 p-6 space-y-4">
              <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">
                System X Pro+ at a glance
              </p>
              <ul className="space-y-3 text-sm text-zinc-200">
                <li className="flex gap-3">
                  <span className="text-[#e1b11b] font-bold">✓</span>
                  <span><strong className="text-white">6-year protection</strong> — built for long-term daily drivers, not short-term shine</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e1b11b] font-bold">✓</span>
                  <span><strong className="text-white">Molecular bond</strong> — fuses to your clear coat instead of sitting on top like wax</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e1b11b] font-bold">✓</span>
                  <span><strong className="text-white">9H hardness</strong> — adds a durable sacrificial layer against light marring</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e1b11b] font-bold">✓</span>
                  <span><strong className="text-white">Hydrophobic finish</strong> — water, dirt, and grime bead off and wash away easier</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#e1b11b] font-bold">✓</span>
                  <span><strong className="text-white">UV & chemical resistance</strong> — helps fight fading, staining, and environmental fallout</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* How it goes on your car */}
          <motion.div
            className="border border-zinc-800 rounded-3xl bg-gradient-to-br from-zinc-950/90 to-black/95 p-6 md:p-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                HOW IT WORKS ON YOUR CAR
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Think of it as an upgraded clear coat
              </h2>
              <p className="text-sm md:text-base text-zinc-300 max-w-3xl">
                When System X is applied, it doesn&apos;t just make your car shiny for a weekend.
                It becomes part of your paint&apos;s surface — a semi-permanent layer that changes
                how your vehicle looks, feels, and cleans for years.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Bonds to clear coat",
                  text: "System X cures and cross-links with your factory clear coat at a molecular level — creating a shell that won't wash off like wax or sealant.",
                },
                {
                  step: "02",
                  title: "Repels contamination",
                  text: "The hydrophobic surface means water sheets off instead of sitting, carrying dirt and grime with it. Less sticking = less scrubbing.",
                },
                {
                  step: "03",
                  title: "Locks in the finish",
                  text: "Once your paint is corrected and coated, that gloss and clarity are preserved. You're protecting the finish you paid to achieve.",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="border border-zinc-800 rounded-2xl bg-black/40 p-5 space-y-2"
                >
                  <p className="text-[#e1b11b] text-xs font-semibold tracking-widest">{item.step}</p>
                  <p className="font-medium text-zinc-50">{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="border border-zinc-800 rounded-3xl bg-zinc-950/70 p-4 sm:p-6 md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="mb-5">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#e1b11b] mb-2">
                Hydrophobic finish
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Water that sheets instead of sticking
              </h2>
              <p className="mt-2 text-sm md:text-base text-zinc-300 max-w-2xl">
                Ceramic coating creates a slick, hydrophobic layer on the paint —
                so water beads, sheets, and carries dirt with it instead of sitting
                on the clear coat.
              </p>
            </div>
            <LoopVideo
              src="/videos/ceramic-coating.mp4"
              poster="/images/before-after/ceramic-coating-poster.jpg"
              title="Ceramic coating hydrophobic water sheeting on dark paint"
              flipHorizontal
            />
          </motion.div>

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
                Why upgrade from wax or sealant?
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                Waxes and spray sealants might look great for a few weeks — then they fade, and
                you're back to square one. System X ceramic coating is built for owners who want
                real protection without reapplying every season.
              </p>
              <p className="text-sm md:text-base text-zinc-300">
                With up to 6 years of protection, your car keeps that deep, wet-gloss look wash
                after wash, rain after rain. Less time maintaining. More time enjoying the drive.
              </p>
            </div>
            <div className="space-y-3 text-sm text-zinc-200">
              <p>What you&apos;ll notice after your coating cures:</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-[#e1b11b]">•</span> Mirror-like gloss that makes color pop in direct sun</li>
                <li className="flex gap-2"><span className="text-[#e1b11b]">•</span> Water beading and sheeting — rain almost washes the car for you</li>
                <li className="flex gap-2"><span className="text-[#e1b11b]">•</span> Faster, safer washes with less friction on the paint</li>
                <li className="flex gap-2"><span className="text-[#e1b11b]">•</span> Better resistance to UV fading, bird droppings, and road grime</li>
                <li className="flex gap-2"><span className="text-[#e1b11b]">•</span> A finish that holds up for years — not weeks</li>
              </ul>
            </div>
          </motion.div>

          {/* Who it's for */}
          <motion.div
            className="grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {[
              {
                label: "New cars",
                text: "Protect your investment from day one. Coating a fresh clear coat means you're starting with maximum gloss and long-term defense.",
              },
              {
                label: "Corrected paint",
                text: "Already invested in paint correction? System X locks in that clarity so swirls and haze don't come back overnight.",
              },
              {
                label: "Daily drivers",
                text: "Commuters, family SUVs, weekend cars — if you want your vehicle to look sharp with less effort for years, this is it.",
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
                OUR PROCESS
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                How we install System X on your vehicle
              </h2>
              <p className="text-sm md:text-base text-zinc-300 max-w-3xl">
                A coating is only as good as the prep behind it. We don&apos;t rush this — every
                step exists so the System X bond is clean, even, and built to last.
              </p>
            </div>

            <ol className="space-y-4 text-sm text-zinc-300">
              {[
                {
                  title: "Thorough wash & decontamination",
                  body: "Safe hand wash, iron removal, and clay bar treatment (when needed) to strip bonded contaminants from every panel.",
                },
                {
                  title: "Paint inspection & correction",
                  body: "Under proper lighting, we inspect your clear coat and perform paint correction so we're coating gloss — not swirls.",
                },
                {
                  title: "Panel prep & IPA wipe-down",
                  body: "We strip oils and residues with a panel prep solution so System X bonds directly to the clear coat.",
                },
                {
                  title: "System X application",
                  body: "We apply the coating in controlled sections, leveling and buffing as it flashes for an even, high-gloss finish across the entire vehicle.",
                },
                {
                  title: "Cure window & aftercare guidance",
                  body: "We walk you through the first 24–48 hours and ongoing care so your 6-year coating cures properly and performs at its best.",
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

          {/* Wax vs ceramic comparison */}
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
                Ceramic coating vs. wax — honest comparison
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                We&apos;re not against wax — it has its place. But if you want protection that
                actually stays on your car, there&apos;s a clear winner.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 text-sm">
              <div className="grid grid-cols-3 bg-zinc-900/80 text-[11px] uppercase tracking-wider text-zinc-400">
                <div className="p-3 border-r border-zinc-800" />
                <div className="p-3 border-r border-zinc-800 text-center">Wax</div>
                <div className="p-3 text-center text-[#e1b11b]">System X</div>
              </div>
              {[
                ["Protection life", "Weeks–months", "Up to 6 years"],
                ["Bonds to clear coat", "No", "Yes"],
                ["Hydrophobic", "Moderate", "Extreme"],
                ["UV resistance", "Low", "High"],
                ["Wash frequency needed", "Reapply often", "Maintain, not redo"],
              ].map(([label, wax, ceramic]) => (
                <div key={label} className="grid grid-cols-3 border-t border-zinc-800 text-zinc-300">
                  <div className="p-3 border-r border-zinc-800 text-zinc-400">{label}</div>
                  <div className="p-3 border-r border-zinc-800 text-center">{wax}</div>
                  <div className="p-3 text-center text-zinc-100">{ceramic}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What ceramic does / doesn't do */}
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
                What to expect — and what not to expect
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                We&apos;d rather set realistic expectations upfront than oversell you. System X
                is one of the best investments you can make in your paint — but it&apos;s not
                invisible armor.
              </p>
            </div>
            <div className="space-y-2 text-sm text-zinc-200">
              <p className="text-[#e1b11b] font-medium">System X will:</p>
              <ul className="space-y-1 mb-4">
                <li>• Make washing faster, safer, and more satisfying</li>
                <li>• Help resist UV fading, staining, and light etching</li>
                <li>• Keep your car looking freshly detailed for years</li>
                <li>• Protect the finish you corrected — not hide bad paint</li>
              </ul>
              <p className="text-zinc-400 font-medium">System X won&apos;t:</p>
              <ul className="space-y-1">
                <li>• Stop rock chips or door dings</li>
                <li>• Fix scratches or swirls on its own (that&apos;s paint correction)</li>
                <li>• Replace washing — it just makes washing way easier</li>
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
                Common questions about System X ceramic coating
              </h2>
            </div>

            <div className="space-y-5 text-sm md:text-base">
              <div>
                <p className="font-medium text-zinc-50">
                  What ceramic coating brand do you use?
                </p>
                <p className="text-zinc-300 mt-1">
                  We install <strong className="text-white">System X ceramic coating</strong> — specifically
                  the Pro+ line, which is engineered for up to 6 years of automotive paint protection.
                  It&apos;s a professional product, not a consumer spray you&apos;d pick up at an auto parts store.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-50">
                  How long does the coating actually last?
                </p>
                <p className="text-zinc-300 mt-1">
                  System X Pro+ is rated for up to <strong className="text-white">6 years</strong> on
                  automotive applications. How long yours lasts depends on how you wash, where you park,
                  and how well you follow the aftercare we give you at pickup. We&apos;ll set honest
                  expectations for your specific vehicle.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-50">
                  Do I still need to wash the car?
                </p>
                <p className="text-zinc-300 mt-1">
                  Yes — but it gets much easier. Coatings don&apos;t replace maintenance; they make
                  maintenance faster and safer. Dirt doesn&apos;t bond as aggressively, so your car
                  cleans up in a fraction of the time.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-50">
                  Do you recommend paint correction first?
                </p>
                <p className="text-zinc-300 mt-1">
                  Almost always. Ceramic locks in whatever condition your paint is in when we apply it.
                  If we coat over swirls and haze, those defects are sealed in for years. Correction
                  first means we&apos;re protecting a finish you&apos;ll actually want to keep.
                </p>
              </div>

              <div>
                <p className="font-medium text-zinc-50">
                  Is ceramic coating included in your detail packages?
                </p>
                <p className="text-zinc-300 mt-1">
                  Yes — our <strong className="text-white">Stage 3 detail</strong> includes full prep,
                  paint correction, and a 6-year System X ceramic coating. You can also add ceramic
                  coating as a standalone enhancement.{" "}
                  <Link to="/#pricing" className="text-[#e1b11b] hover:underline">
                    View our packages
                  </Link>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Closing CTA */}
          <motion.div
            className="border-2 border-[#e1b11b]/40 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 md:p-10 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="space-y-3 text-center md:text-left">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#e1b11b]">
                Ready to protect your paint?
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Give your car 6 years of System X protection.
              </h3>
              <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
                Send us a few photos of your vehicle and tell us how you use it. We&apos;ll recommend
                the right prep, confirm whether paint correction is needed, and quote your System X
                ceramic coating — straight talk, no pressure. {DEPOSIT_POLICY}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#e1b11b] px-8 py-3.5 text-sm font-semibold tracking-wide text-black hover:bg-amber-300 transition shadow-lg shadow-yellow-500/20"
              >
                Book my ceramic coating
              </Link>
              <a
                href="tel:19293076986"
                className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-8 py-3.5 text-sm font-semibold tracking-wide text-zinc-100 hover:border-zinc-300 transition"
              >
                Call / Text (929) 307-6986
              </a>
              <Link
                to="/#pricing"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-8 py-3.5 text-sm font-medium tracking-wide text-zinc-300 hover:border-zinc-500 hover:text-white transition"
              >
                See Stage 3 package
              </Link>
            </div>

            <p className="text-xs text-zinc-500 text-center md:text-left">
              Mobile service across Fairfield County, CT — we bring our own water &amp; power.
            </p>
          </motion.div>

          {/* Service areas */}
          <section className="border border-zinc-800 rounded-3xl bg-zinc-950/60 p-6 md:p-8">
            <h2 className="text-lg md:text-xl font-semibold mb-1">
              System X ceramic coating near you
            </h2>
            <p className="text-sm text-zinc-400 mb-4">
              We apply professional ceramic coatings across all of Fairfield County, CT.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
              {[
                { name: "Stamford", href: "/stamford-ct" },
                { name: "Greenwich", href: "/greenwich-ct" },
                { name: "Westport", href: "/westport-ct" },
                { name: "Norwalk", href: "/norwalk-ct" },
                { name: "Fairfield", href: "/fairfield-ct" },
                { name: "Trumbull", href: "/trumbull-ct" },
                { name: "Stratford", href: "/stratford-ct" },
                { name: "Milford", href: "/milford-ct" },
                { name: "Southport", href: "/southport-ct" },
              ].map((town) => (
                <Link
                  key={town.name}
                  to={town.href}
                  className="flex items-center gap-2 text-zinc-300 hover:text-[#e1b11b] transition-colors"
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#e1b11b]" />
                  {town.name}, CT
                </Link>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-4">
              <Link to="/service-areas-fairfield-county-ct" className="text-[#e1b11b] hover:underline">
                View all service areas
              </Link>{" "}
              — including Bridgeport, Darien, Shelton, Monroe, New Canaan, Wilton, Weston, Easton &amp; Ridgefield.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CeramicCoatingPage;
