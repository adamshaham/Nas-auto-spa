import React, { useState } from 'react';
import SEO from '../components/SEO';
import {
  breadcrumbSchema,
  rentalServiceSchema,
  rentalFleetItemListSchema,
} from '../seo/schemas';
import { toAbsoluteUrl } from '../seo/site';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarInventory from '../components/CarInventory';
import JobberFormEmbed, {
  JOBBER_RENTALS_CLIENTHUB_ID,
  JOBBER_RENTALS_FORM_URL,
} from '../components/JobberFormEmbed';
import { RENTAL_FLEET, RENTAL_FLEET_META } from '../data/rentalFleet';

const { renterRequirements } = RENTAL_FLEET_META;

const PATH = '/luxury-car-rentals-ct-ny-ma';
const PAGE_TITLE =
  'Luxury & Exotic Car Rentals in CT, NY & MA | NAS Exotics | NAS Auto Spa';
const PAGE_DESCRIPTION =
  'Rent Ferrari, Lamborghini, Rolls-Royce, McLaren, Maybach, and G-Wagon vehicles from NAS Exotics. Luxury and exotic car rentals with optional chauffeur service across Connecticut, New York, and Massachusetts. Request availability today.';

const BRANDS = [
  'Ferrari',
  'McLaren',
  'Rolls-Royce',
  'Lamborghini',
  'Maybach',
  'Mercedes-Benz',
  'Corvette',
  'BMW',
];

const FAQS = [
  {
    q: 'What luxury and exotic cars can I rent from NAS Exotics?',
    a: `Our current fleet includes ${RENTAL_FLEET_META.totalVehicles} vehicles: Ferrari 488 Spyder, McLaren 720S Spider, Rolls-Royce Cullinan (including Black Badge), Lamborghini Urus and Urus Performante, Mercedes-Maybach GLS 600, Mercedes-Benz G63, Chevrolet Corvette C8, and BMW 760i. Color and configuration details are listed below. Availability depends on your dates and pickup location.`,
  },
  {
    q: 'Where do you deliver luxury car rentals in CT, NY, and MA?',
    a: 'NAS Exotics serves Connecticut (including Fairfield County, Stamford, Greenwich, Westport, Norwalk, Hartford, and New Haven), New York (NYC, Westchester, Long Island, and Hudson Valley), and Massachusetts (Boston, Worcester, Springfield, and Cape Cod). Share your pickup address when you request a quote.',
  },
  {
    q: 'Do you offer chauffeur service with exotic rentals?',
    a: 'Yes. Chauffeur service is available on request for weddings, airport transfers, corporate events, and nights out. Tell us if you need a professional driver when you submit the rental form.',
  },
  {
    q: 'How do I book a Lamborghini, Ferrari, or Rolls-Royce rental?',
    a: 'Use the rental request form on this page with your dates, location, preferred vehicle, and chauffeur needs. We confirm availability and send a personalized quote — pricing is not listed on the website. You can also call or text (929) 307-6986.',
  },
  {
    q: 'Can I rent a car for a wedding or photoshoot in Fairfield County?',
    a: 'Yes. NAS Exotics is frequently booked for weddings, engagements, proms, and content shoots across Fairfield County and the tri-state area. Book early for weekends and peak season.',
  },
  {
    q: 'How far in advance should I reserve?',
    a: 'As early as possible for weekends, holidays, and weddings. Same-week requests are sometimes available depending on the fleet. Submit the form and we will confirm what we can deliver for your date.',
  },
  {
    q: 'What are the driver requirements for a NAS Exotics rental?',
    a: `${RENTAL_FLEET_META.renterRequirements} Chauffeur service is available if you prefer not to self-drive.`,
  },
];

const BrandMarquee = () => {
  const loop = [...BRANDS, ...BRANDS, ...BRANDS];
  return (
    <div className="relative border-y border-white/[0.06] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-black to-transparent z-10" />
      <div className="flex w-max animate-marquee">
        {loop.map((brand, i) => (
          <span key={`${brand}-${i}`} className="flex items-center gap-6 px-6 py-4">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.32em] uppercase text-zinc-400 whitespace-nowrap">
              {brand}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#e1b11b]" />
          </span>
        ))}
      </div>
    </div>
  );
};

const CarRentalsPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <SEO
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        path={PATH}
        keywords="luxury car rental CT, exotic car rental Connecticut, Ferrari rental Fairfield County, Lamborghini Urus rental CT, Rolls-Royce Cullinan rental New York, chauffeur service CT MA NY, wedding car rental Greenwich, supercar rental Stamford, McLaren rental New York, Maybach rental Boston, NAS Exotics"
        ogImage={toAbsoluteUrl('/images/rentals/hero-sunset-urus.jpg')}
        ogImageAlt="NAS Exotics Lamborghini Urus fleet on sunset drive — luxury car rentals CT, NY, and MA"
        schemas={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Luxury Car Rentals', path: PATH },
          ]),
          rentalServiceSchema({ path: PATH, description: PAGE_DESCRIPTION }),
          rentalFleetItemListSchema(RENTAL_FLEET, PATH),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          },
        ]}
      />

      <Navbar />

      <header className="relative isolate min-h-[100svh] overflow-hidden bg-black">
        <img
          src="/images/rentals/hero-sunset-urus.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 22% 48%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 42%, transparent 72%)',
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col items-start justify-center px-5 pb-16 pt-28 text-left sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex max-w-xl flex-col items-start"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e1b11b]/50 bg-black/50 px-3 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e1b11b] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e1b11b]" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e1b11b] sm:text-[11px] sm:tracking-[0.22em]">
                Connecticut · New York · Massachusetts
              </span>
            </div>

            <h1 className="mb-4 text-[2.6rem] font-bold italic leading-none tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] sm:text-[4rem] lg:text-[4.75rem]">
              NAS <span className="text-[#e1b11b]">Exotics</span>
            </h1>
            <p className="mb-8 max-w-lg text-sm leading-relaxed text-zinc-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:text-lg">
              Ferrari, Lamborghini, Rolls-Royce, McLaren, Maybach, and G-Wagon.
              {' '}{RENTAL_FLEET_META.totalVehicles} vehicles. Chauffeur on request.
            </p>

            <div className="flex flex-wrap justify-start gap-3">
              <a
                href="#inventory"
                className="rounded-xl bg-[#e1b11b] px-8 py-3.5 text-sm font-bold tracking-wider text-black shadow-[0_8px_28px_rgba(225,177,27,0.35)] transition hover:bg-amber-300"
              >
                VIEW FLEET
              </a>
              <a
                href="#rental-request"
                className="rounded-xl border border-white/60 bg-black/40 px-8 py-3.5 text-sm font-bold tracking-wider text-white backdrop-blur-sm transition hover:border-[#e1b11b] hover:text-[#e1b11b]"
              >
                GET A QUOTE
              </a>
            </div>
          </motion.div>

          <p className="absolute bottom-6 right-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:right-8">
            Lamborghini Urus
          </p>
        </div>
      </header>

      <BrandMarquee />

      <main>
        <section className="relative py-16 md:py-24" aria-labelledby="offerings-heading">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e1b11b] mb-3">
              NAS Exotics
            </p>
            <h2
              id="offerings-heading"
              className="text-3xl md:text-5xl font-bold italic tracking-tight mb-4"
            >
              <span className="text-white">Luxury, exotic &amp;</span>{' '}
              <span className="hero-shine">chauffeur</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl text-sm md:text-base leading-relaxed mb-12">
              Self-drive or sit back. Every NAS Exotics rental is detailed to NAS Auto Spa
              standards before it reaches your driveway, hotel, or venue.
            </p>

            <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
              {[
                {
                  n: '01',
                  title: 'Exotic',
                  text: 'Ferrari 488 Spyder, McLaren 720S, Lamborghini Urus, Corvette C8.',
                },
                {
                  n: '02',
                  title: 'Luxury SUV',
                  text: 'Rolls-Royce Cullinan, Maybach GLS 600, Mercedes-Benz G63.',
                },
                {
                  n: '03',
                  title: 'Chauffeur',
                  text: 'Weddings, airports, and corporate travel in CT, NY, and MA.',
                },
              ].map((item) => (
                <article key={item.n} className="bg-black p-6 md:p-8">
                  <p className="text-[11px] tracking-[0.22em] text-[#e1b11b] mb-6">{item.n}</p>
                  <h3 className="text-2xl font-bold italic text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <CarInventory requestAnchor="#rental-request" />
          </div>
        </section>

        <section className="relative py-16 md:py-24" aria-labelledby="how-heading">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <h2
              id="how-heading"
              className="text-3xl md:text-5xl font-bold italic tracking-tight mb-12"
            >
              <span className="text-white">Four steps.</span>{' '}
              <span className="hero-shine">Then you drive.</span>
            </h2>
            <ol className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {[
                ['01', 'Request', 'Dates, city, car, chauffeur if you need a driver.'],
                ['02', 'Quote', 'We confirm the vehicle and send a private rate.'],
                ['03', 'Delivery', 'Showroom-clean handoff at home, hotel, or venue.'],
                ['04', 'Arrive', 'Self-drive or chauffeur. The car is the arrival.'],
              ].map(([n, title, body]) => (
                <li
                  key={n}
                  className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_10rem_1fr] gap-4 sm:gap-8 py-6 items-baseline"
                >
                  <span className="text-xs tracking-[0.2em] text-[#e1b11b]">{n}</span>
                  <h3 className="text-xl italic font-bold text-white">{title}</h3>
                  <p className="text-sm text-zinc-400 col-span-2 sm:col-span-1">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="rental-request"
          className="relative py-8 md:py-16 scroll-mt-24"
          aria-labelledby="request-heading"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e1b11b] mb-3">
                  Private quote
                </p>
                <h2
                  id="request-heading"
                  className="text-3xl md:text-4xl font-bold italic tracking-tight mb-4"
                >
                  Request availability
                </h2>
                <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-4">
                  Share dates, pickup city, and the car you want. Pricing is never listed
                  here — you get a quote after we confirm the fleet.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6 rounded-xl border border-white/[0.08] bg-zinc-950/60 px-4 py-3">
                  <span className="text-[#e1b11b] font-semibold uppercase tracking-[0.14em] text-[10px] block mb-1.5">
                    Driver requirements
                  </span>
                  {renterRequirements}
                </p>
                <a
                  href="tel:+19293076986"
                  className="text-[#e1b11b] font-semibold hover:underline text-sm"
                >
                  Or call (929) 307-6986
                </a>
              </div>
              <div className="relative overflow-hidden border border-white/[0.08] bg-zinc-950/80">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#e1b11b] via-amber-300 to-[#e1b11b]" />
                <JobberFormEmbed
                  id="nas-rental-request-form"
                  className="w-full p-2 sm:p-3"
                  minHeight={0}
                  clientHubId={JOBBER_RENTALS_CLIENTHUB_ID}
                  formUrl={JOBBER_RENTALS_FORM_URL}
                  title="Request a NAS Exotics rental in CT, NY, or MA"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24" aria-labelledby="areas-heading">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <h2
              id="areas-heading"
              className="text-3xl md:text-5xl font-bold italic tracking-tight mb-10"
            >
              <span className="text-white">CT.</span>{' '}
              <span className="text-white">NY.</span>{' '}
              <span className="hero-shine">MA.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              {[
                {
                  state: 'Connecticut',
                  areas:
                    'Fairfield County, Stamford, Greenwich, Westport, Norwalk, Fairfield, Stratford, Hartford, New Haven.',
                },
                {
                  state: 'New York',
                  areas:
                    'Manhattan, Brooklyn, Westchester, Long Island, Hudson Valley, airport corridors.',
                },
                {
                  state: 'Massachusetts',
                  areas:
                    'Boston, Cape Cod, Worcester, Springfield, and surrounding cities.',
                },
              ].map((region) => (
                <article key={region.state}>
                  <h3 className="text-lg font-bold italic text-white mb-2">{region.state}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{region.areas}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative pb-24" aria-labelledby="faq-heading">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <h2
              id="faq-heading"
              className="text-3xl md:text-5xl font-bold italic tracking-tight mb-8"
            >
              <span className="text-white">Questions.</span>
            </h2>
            <div className="border-t border-white/[0.06]">
              {FAQS.map((item, i) => {
                const open = openFaq === i;
                return (
                  <div key={item.q} className="border-b border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      aria-expanded={open}
                      className="w-full py-5 flex items-start justify-between gap-6 text-left group"
                    >
                      <span className="text-base sm:text-lg font-medium text-white group-hover:text-[#e1b11b] transition-colors">
                        {item.q}
                      </span>
                      <span className="text-[#e1b11b] text-2xl leading-none shrink-0" aria-hidden>
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    {open && (
                      <p className="pb-6 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CarRentalsPage;
