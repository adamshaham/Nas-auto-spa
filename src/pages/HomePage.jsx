import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../seo/schemas';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import GoogleRatingBadge from "../components/GoogleReviewsWidget";
import Hero from '../components/Hero';
import HomeStats from '../components/HomeStats';
import ServicesList from '../components/ServicesList';
import CarRentals from '../components/CarRentals';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import HomeMobileProcess from '../components/HomeMobileProcess';
import MobileStickyCta from '../components/MobileStickyCta';

const HomePage = () => {
  const servicesRef = useRef(null);
  const rentalsRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialsRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const rentalsInView = useInView(rentalsRef, { once: true, amount: 0.2 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 });

  const slideInFromLeft = {
    hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'tween',
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'tween',
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white overflow-x-hidden w-full pb-[4.75rem] lg:pb-0">
      <SEO
        title="NAS Auto Spa LLC | Mobile Detailing, Paint Correction, Ceramic Coating & Fleet Detailing in Fairfield County CT"
        description="NAS Auto Spa is Fairfield County's top-rated mobile auto detailing company based in Stratford, CT. Premium detail packages, paint correction, ceramic coating & fleet washing. We come to you with our own water & power. Serving Stamford, Greenwich, Westport, Norwalk, Fairfield, Trumbull & more."
        path="/"
        keywords="car detailing near me, mobile detailing near me, auto detailing near me, car wash near me, mobile car wash near me, ceramic coating near me, paint correction near me, fleet washing near me, mobile detailer near me, best car detailing Fairfield County CT, mobile detailing Stamford CT, car detailing Greenwich CT, NAS Auto Spa"
        schemas={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Service Areas', path: '/service-areas-fairfield-county-ct' },
            { name: 'About', path: '/about' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Blog', path: '/blog' },
          ]),
        ]}
      />
      <Navbar />
      <GoogleRatingBadge />
      <Hero />
      <HomeStats />
      <HomeMobileProcess />

      <div className="overflow-x-hidden w-full">
        <div ref={servicesRef} className="w-full">
          <ServicesList />
        </div>
      </div>

      <div className="overflow-x-hidden w-full">
        <motion.div
          ref={pricingRef}
          initial="hidden"
          animate={pricingInView ? 'visible' : 'hidden'}
          variants={slideInFromRight}
          className="w-full"
        >
          <Pricing />
        </motion.div>
      </div>

      <div className="overflow-x-hidden w-full">
        <motion.div
          ref={rentalsRef}
          initial="hidden"
          animate={rentalsInView ? 'visible' : 'hidden'}
          variants={slideInFromLeft}
          className="w-full"
        >
          <CarRentals />
        </motion.div>
      </div>

      <div className="overflow-x-hidden w-full">
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          variants={slideInFromLeft}
          className="w-full"
        >
          <Contact />
        </motion.div>
      </div>

      <div className="overflow-x-hidden w-full">
        <motion.div
          ref={testimonialsRef}
          initial="hidden"
          animate={testimonialsInView ? 'visible' : 'hidden'}
          variants={slideInFromRight}
          className="w-full"
        >
          <Testimonials />
        </motion.div>
      </div>

      <div className="overflow-x-hidden w-full">
        <motion.div
          ref={faqRef}
          initial="hidden"
          animate={faqInView ? 'visible' : 'hidden'}
          variants={slideInFromLeft}
          className="w-full"
        >
          <FAQ />
        </motion.div>
      </div>

      <Footer />
      <MobileStickyCta />
    </div>
  );
};

export default HomePage;
