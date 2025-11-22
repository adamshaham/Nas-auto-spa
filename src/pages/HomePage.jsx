import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesList from '../components/ServicesList';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
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

  // Use smaller animation distances to prevent overflow
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      
      <div className="overflow-x-hidden w-full">
        <motion.div
          ref={servicesRef}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
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
          animate={pricingInView ? "visible" : "hidden"}
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
          animate={contactInView ? "visible" : "hidden"}
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
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={slideInFromRight}
          className="w-full"
        >
          <Testimonials />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;

