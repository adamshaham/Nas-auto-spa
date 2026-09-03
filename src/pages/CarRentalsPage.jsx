import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { breadcrumbSchema, servicePageSchema } from '../seo/schemas';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarInventory from '../components/CarInventory';

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

const CarRentalsPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <SEO
        title="Luxury & Exotic Car Rentals | Chauffeur Service CT, MA & NY | NAS Auto Spa"
        description="Rent luxury and exotic vehicles with optional chauffeur service across Connecticut, Massachusetts, and New York. NAS Auto Spa offers premium cars for weddings, events, corporate travel, and special occasions."
        path="/luxury-car-rentals-ct-ny-ma"
        keywords="luxury car rental CT, exotic car rental Connecticut, chauffeur service CT MA NY, wedding car rental Fairfield County, exotic car rental near me, luxury SUV rental Connecticut, chauffeur driven car rental New York, supercar rental CT"
        schemas={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Luxury Car Rentals', path: '/luxury-car-rentals-ct-ny-ma' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What areas do you serve for car rentals?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide luxury, exotic, and chauffeur services across Connecticut, Massachusetts, and New York. Availability depends on the vehicle and date — contact us with your pickup location and we will confirm options.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer chauffeur service with rentals?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. You can rent a vehicle for self-drive or add professional chauffeur service for weddings, airport transfers, corporate events, and nights out.',
                },
              },
              {
                '@type': 'Question',
                name: 'How far in advance should I book?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We recommend booking as early as possible for weekends, weddings, and peak seasons. Last-minute requests may be available depending on fleet availability.',
                },
              },
            ],
          },
          servicePageSchema({
            name: 'Luxury & Exotic Car Rentals — CT, MA & NY',
            description:
              'Premium luxury and exotic car rentals with optional chauffeur service across Connecticut, Massachusetts, and New York.',
            path: '/luxury-car-rentals-ct-ny-ma',
          }),
        ]}
      />

      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/gallery/range-rover.jpg"
            alt="Luxury car rental service in Connecticut, Massachusetts, and New York"
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
            NAS AUTO SPA • LUXURY CAR RENTALS
          </motion.p>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Luxury, exotic &{' '}
            <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              chauffeur services.
            </span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-zinc-200 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            Make every arrival unforgettable. NAS Auto Spa offers premium vehicle rentals
            and professional chauffeur service throughout{' '}
            <strong className="text-white font-medium">Connecticut</strong>,{' '}
            <strong className="text-white font-medium">Massachusetts</strong>, and{' '}
            <strong className="text-white font-medium">New York</strong>.
          </motion.p>

          <motion.div
            className="pt-4 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
          >
            <Link
              to="/luxury-car-rentals-ct-ny-ma#inventory"
              className="inline-flex items-center rounded-full bg-[#e1b11b] px-5 py-2.5 text-sm font-medium tracking-wide text-black hover:bg-amber-300 transition"
            >
              View car inventory
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center rounded-full border border-zinc-600 px-5 py-2.5 text-sm font-medium tracking-wide text-zinc-100 hover:border-zinc-300 transition"
            >
              Request rental availability
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

      <section className="bg-black pb-24 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 space-y-14 md:space-y-16">
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
                More than detailing — a complete premium experience
              </h2>
              <p className="text-sm md:text-base text-zinc-300">
                You already trust us with your vehicle&apos;s appearance. Our rental and
                chauffeur services extend that same standard of care to how you arrive —
                polished, professional, and unforgettable.
              </p>
              <p className="text-sm md:text-base text-zinc-300">
                From luxury SUVs and executive sedans to exotic supercars, we coordinate
                the right vehicle for your occasion, timeline, and location across the
                tri-state area.
              </p>
            </div>
            <div className="space-y-3 text-sm text-zinc-200">
              <p>Perfect for:</p>
              <ul className="space-y-2">
                <li>• Weddings, proms, and anniversaries</li>
                <li>• Corporate events and client entertainment</li>
                <li>• Airport transfers and city-to-city travel</li>
                <li>• Nights out, photoshoots, and special celebrations</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {[
              {
                label: 'Luxury Rentals',
                text: 'Premium sedans and SUVs for clients who want comfort, class, and a refined presence.',
              },
              {
                label: 'Exotic Rentals',
                text: 'High-performance and exotic vehicles that make a statement at any event or occasion.',
              },
              {
                label: 'Chauffeur Service',
                text: 'Sit back and enjoy the ride. Professional drivers for stress-free travel anywhere in CT, MA, or NY.',
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

          <CarInventory />

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
                SERVICE AREAS
              </p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                Available across CT, MA & NY
              </h2>
              <p className="text-sm md:text-base text-zinc-300 max-w-3xl">
                We serve clients throughout the tri-state region. Share your pickup
                location, date, and occasion — we&apos;ll confirm vehicle options and
                chauffeur availability for your area.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {[
                {
                  state: 'Connecticut',
                  areas: 'Fairfield County, Hartford, New Haven, shoreline & beyond',
                },
                {
                  state: 'Massachusetts',
                  areas: 'Boston, Cape Cod, Springfield, Worcester & surrounding areas',
                },
                {
                  state: 'New York',
                  areas: 'NYC, Westchester, Long Island, Hudson Valley & tri-state corridors',
                },
              ].map((region) => (
                <div
                  key={region.state}
                  className="border border-zinc-800 rounded-2xl bg-black/40 p-4"
                >
                  <p className="font-medium text-zinc-50 mb-1">{region.state}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">{region.areas}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="border border-zinc-800 rounded-3xl bg-zinc-950/70 p-6 md:p-8 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">FAQ</p>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight mt-1">
                Common questions about rentals
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base">
              <div>
                <p className="font-medium text-zinc-50">What types of vehicles are available?</p>
                <p className="text-zinc-300 mt-1">
                  Fleet availability varies by date and location. We offer luxury sedans
                  and SUVs, exotic and high-performance vehicles, and chauffeur-driven
                  options. Contact us with your event details for current availability.
                </p>
              </div>
              <div>
                <p className="font-medium text-zinc-50">Can I book with a chauffeur?</p>
                <p className="text-zinc-300 mt-1">
                  Yes. Chauffeur service is available for weddings, corporate travel,
                  airport pickups, and private events. Let us know if you need a driver
                  when you request a quote.
                </p>
              </div>
              <div>
                <p className="font-medium text-zinc-50">How do I reserve a vehicle?</p>
                <p className="text-zinc-300 mt-1">
                  Fill out our contact form or call/text us with your date, pickup
                  location, vehicle preference, and whether you need chauffeur service.
                  We&apos;ll follow up with availability and pricing.
                </p>
              </div>
            </div>
          </motion.div>

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
                Ready to arrive in style?
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Book your luxury or exotic rental today.
              </h3>
              <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
                Tell us your date, location, and occasion. We&apos;ll match you with the
                right vehicle and chauffeur option across Connecticut, Massachusetts, or
                New York.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#e1b11b] px-8 py-3.5 text-sm font-semibold tracking-wide text-black hover:bg-amber-300 transition shadow-lg shadow-yellow-500/20"
              >
                Request a rental quote
              </Link>
              <a
                href="tel:19293076986"
                className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-8 py-3.5 text-sm font-semibold tracking-wide text-zinc-100 hover:border-zinc-300 transition"
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

export default CarRentalsPage;
