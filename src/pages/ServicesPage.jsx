import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });

  const services = [
    {
      title: 'DETAILING / WASHES',
      description:
        "Our detailing services are meticulously designed to enhance the appearance and condition of your vehicle. From exterior waxing to interior vacuuming, we ensure your car looks immaculate inside and out. Our expert team uses premium products and techniques to restore your vehicle's original shine and protect it from environmental damage.",
      stage: 'stage1',
      features: ['Premium Products', 'Expert Techniques', 'Full Protection'],
    },
    {
      title: 'CERAMIC COATINGS',
      description:
        "Experience the ultimate protection with our ceramic coatings that shield your car's paint from environmental damage. Our coatings provide a durable and glossy finish, keeping your vehicle looking pristine for years to come. We use industry-leading products to deliver long-lasting protection against UV rays, chemicals, and everyday wear.",
      stage: 'stage2',
      features: ['Ceramic Protection', 'Long-Lasting', 'UV Resistant'],
    },
    {
      title: 'PAINT CORRECTIONS',
      description:
        "Restore your vehicle's paint to its original showroom condition with our professional paint correction services. Our expert technicians use advanced techniques and premium products to remove swirl marks, scratches, oxidation, and other imperfections. We meticulously polish and refine your paint surface to achieve a flawless, mirror-like finish that enhances your vehicle's appearance and value.",
      stage: 'paintcorrection',
      features: ['Swirl Removal', 'Scratch Repair', 'Oxidation Treatment', 'Mirror Finish'],
    },
    {
      title: 'COMMERCIAL FLEETS',
      description:
        'Partner with NAS Auto Spa for comprehensive fleet maintenance and commercial vehicle detailing services. We offer flexible contract options tailored to your business needs, ensuring your commercial vehicles maintain a professional appearance. Our team provides reliable, scheduled service to keep your fleet looking its best while you focus on your business operations.',
      stage: 'commercial',
      features: ['Fleet Maintenance', 'Scheduled Service', 'Flexible Contracts', 'Professional Appearance'],
    },
  ];

  // Subtle parallax for hero
  const headerY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);

  // Generic animation variants
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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.35 });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 40, scale: 0.97 }
        }
        transition={{
          duration: 0.75,
          delay: index * 0.15,
          ease: [0.22, 0.61, 0.36, 1],
        }}
        whileHover={{ y: -8 }}
        className="relative mb-16 md:mb-20"
      >
        {/* Soft background accent behind card */}
        <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-yellow-400/5 via-transparent to-yellow-400/0 blur-2xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center rounded-3xl border border-zinc-800/70 bg-zinc-950/70 backdrop-blur-xl p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.65)]">
          {/* Left: Title + tags */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.18em] text-[#ffff]"
            >
              {service.title}
            </motion.h2>

            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUpContainer}
              className="flex flex-wrap gap-2.5"
            >
              {service.features.map((feature, i) => (
                <motion.span
                  key={feature}
                  variants={fadeUpItem}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="px-3 py-1.5 rounded-full border border-yellow-400/40 bg-yellow-400/5 text-[11px] md:text-xs uppercase tracking-[0.18em] text-yellow-300"
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: description + CTA */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="text-sm md:text-base text-zinc-200 leading-relaxed"
            >
              {service.description}
            </motion.p>


          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden w-full">
      <Navbar />

      {/* HERO */}
      <motion.section
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative pt-40 pb-16 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden"
      >
        {/* Subtle gradient blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-32 -left-10 h-72 w-72 bg-[#e1b11b]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-80 w-80 bg-zinc-700/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={fadeUpContainer}
            className="space-y-5"
          >
            <motion.p
              variants={fadeUpItem}
              className="text-[11px] uppercase tracking-[0.35em] text-zinc-500"
            >
              NAS AUTO SPA • SERVICES
            </motion.p>

            <motion.h1
              variants={fadeUpItem}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#e1b11b] via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Crafted care
              </span>{' '}
              for every vehicle.
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              className="text-sm md:text-base text-zinc-300 max-w-2xl"
            >
              From entry-level washes to full paint correction and ceramic coating, our packages are
              built to protect, enhance, and maintain your car — wherever you drive in Fairfield County.
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <span className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.2em] text-zinc-300">
                Mobile • Professional • Insured
              </span>
              <span className="text-xs text-zinc-500">
                Your cars, our passion. Your time, protected.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICES LIST */}
      <section className="relative bg-black pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16 md:space-y-20">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Floating soft glows */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute top-1/4 right-6 w-64 h-64 bg-[#e1b11b]/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="pointer-events-none absolute bottom-1/4 left-0 w-72 h-72 bg-yellow-400/7 rounded-full blur-3xl"
        />
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
