import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const services = [
    {
      title: "DETAILING/WASHES",
      description: "Our detailing services are meticulously designed to enhance the appearance and condition of your vehicle. From exterior waxing to interior vacuuming, we ensure your car looks immaculate inside and out. Our expert team uses premium products and techniques to restore your vehicle's original shine and protect it from environmental damage.",
      stage: "stage1",
      features: ["Premium Products", "Expert Techniques", "Full Protection"]
    },
    {
      title: "CERAMIC COATINGS",
      description: "Experience the ultimate protection with our ceramic coatings that shield your car's paint from environmental damage. Our coatings provide a durable and glossy finish, keeping your vehicle looking pristine for years to come. We use industry-leading products to deliver long-lasting protection against UV rays, chemicals, and everyday wear.",
      stage: "stage2",
      features: ["Ceramic Protection", "Long-Lasting", "UV Resistant"]
    },
    {
      title: "PAINT CORRECTIONS",
      description: "Restore your vehicle's paint to its original showroom condition with our professional paint correction services. Our expert technicians use advanced techniques and premium products to remove swirl marks, scratches, oxidation, and other imperfections. We meticulously polish and refine your paint surface to achieve a flawless, mirror-like finish that enhances your vehicle's appearance and value.",
      stage: "paintcorrection",
      features: ["Swirl Removal", "Scratch Repair", "Oxidation Treatment", "Mirror Finish"]
    },
    {
      title: "COMMERCIAL FLEETS",
      description: "Partner with NAS AUTO SPA for comprehensive fleet maintenance and commercial vehicle detailing services. We offer flexible contract options tailored to your business needs, ensuring your commercial vehicles maintain a professional appearance. Our team provides reliable, scheduled service to keep your fleet looking its best while you focus on your business operations.",
      stage: "commercial",
      features: ["Fleet Maintenance", "Scheduled Service", "Flexible Contracts", "Professional Appearance"]
    }
  ];

  // Parallax transforms
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const cardScrollY = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    
    const cardY = useTransform(cardScrollY.scrollYProgress, [0, 1], [0, -50]);
    const cardOpacity = useTransform(cardScrollY.scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{ y: cardY, opacity: cardOpacity }}
        className="relative mb-16 md:mb-24"
      >
        {/* Decorative Diagonal Line with Animation */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -left-8 top-0 w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transform rotate-[-45deg] origin-left"
          style={{ top: '20px' }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Animated Title */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 tracking-tight"
            >
              {service.title.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h2>
            
            {/* Animated Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"
            />

            {/* Feature Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6"
            >
              {service.features.map((feature, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 200 }}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs md:text-sm font-medium backdrop-blur-sm"
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 md:space-y-6 relative"
          >
            {/* Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative p-6 md:p-8 bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-xl border border-yellow-400/20 rounded-lg shadow-2xl"
            >
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-base md:text-lg text-gray-300 leading-relaxed relative z-10"
                style={{ fontFamily: 'sans-serif' }}
              >
                {service.description.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + i * 0.02, duration: 0.3 }}
                    className="inline-block mr-1"
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            {/* Animated Button */}
            <motion.a
              href={`/#contact?package=${service.stage}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  window.location.hash = `contact?package=${service.stage}`;
                }, 100);
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(225, 177, 27, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-yellow-400 text-yellow-400 px-6 md:px-10 py-2.5 md:py-4 text-base md:text-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 relative overflow-hidden group"
              style={{ fontFamily: 'sans-serif' }}
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                className="absolute inset-0 bg-yellow-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
        />
      </motion.div>
    );
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden w-full">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <motion.section
        ref={headerRef}
        style={{ y: headerY, opacity: headerOpacity }}
        // CHANGED: Increased pt-24 to pt-48 to add space from Navbar. 
        // Kept pb-4 low to keep spacing to the first card tight.
        className="relative pt-48 pb-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`
                }}
                initial={{
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-6"
          >
            <motion.h1
              variants={textRevealVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            >
              {['S', 'E', 'R', 'V', 'I', 'C', 'E', 'S'].map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 font-light tracking-wide"
              style={{ fontFamily: 'sans-serif' }}
            >
              What We Offer
            </motion.p>

            {/* Animated Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={headerInView ? { width: '200px' } : { width: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent mt-4"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="pt-0 pb-16 md:pb-24 bg-black relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-16 md:space-y-24"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 left-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"
        />
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;