import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../seo/schemas';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import GoogleRatingBadge from "../components/GoogleReviewsWidget";
import Hero from '../components/Hero';
import ServicesList from '../components/ServicesList';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialsRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 });

  // Smoother, softer slide animations
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], // smooth ease-out curve
      },
    },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white overflow-x-hidden w-full">
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

      <div className="overflow-x-hidden w-full">
        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? 'visible' : 'hidden'}
          variants={slideInFromLeft}
          className="w-full"
        >
          <ServicesList />
        </motion.div>
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
    </div>
  );
};

export default HomePage;
