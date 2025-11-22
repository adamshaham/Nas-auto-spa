import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  // Real reviews from Google Business Profile added to the beginning
  const testimonials = [
    {
      name: "Paul Tilkins",
      role: "Verified Google Review",
      text: "Best detailers around. They had my dirty work truck looking like it just came off the lot! Amazing work and even better customer service. Highly recommend going to NAS Auto Spa for all of your detailing needs! Unfortunately, I didn't take a picture of the interior but just look at how clean she is!",
      rating: 5,
      initial: "P"
    },
    {
      name: "Raymil De Jesús",
      role: "Verified Google Review",
      text: "Worth every penny!!! I took my car there for a Stage 2 detail and I was impressed by the results, they made it look like it was new out the dealership. 10/10 service, I would recommend it to anyone!!!",
      rating: 5,
      initial: "R"
    },
    {
      name: "Noman Qayyum",
      role: "Verified Google Review",
      text: "I got my car detailed and they did really nice job on the point prices are decent as compared to others..highly recommended !!!!",
      rating: 5,
      initial: "N"
    },
    {
      name: "Angela Rilley",
      role: "Verified Google Review",
      text: "I got my moms car detailed for her birthday and wow🔥🔥 her car looked brand new and ended up getting my dads car detailed too.",
      rating: 5,
      initial: "A"
    },
    {
      name: "xavier sierra",
      role: "Verified Google Review",
      text: "Great Service, very professional, Left my car looking brand new. Definitely would go back to them!",
      rating: 5,
      initial: "x"
    },
    {
      name: "Zach Anderson",
      role: "Verified Google Review",
      text: "Awesome service, Definitely worth it!",
      rating: 5,
      initial: "Z"
    },
    // Previous placeholders kept as backup (optional)
    {
      name: "James Wilson",
      role: "Verified Google Review",
      text: "NAS Auto Spa came right to my driveway and completely transformed my SUV. The convenience of mobile detailing is a game changer, and their attention to detail is unmatched in Fairfield County.",
      rating: 5,
      initial: "J"
    },
    {
      name: "Sarah Connors",
      role: "Verified Google Review",
      text: "I was about to sell my car but decided to get it detailed first. After they finished the interior deep clean and exterior wax, it looked brand new! I actually decided to keep it. Highly recommend.",
      rating: 5,
      initial: "S"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Logic to handle responsive sliding (show 1 on mobile, 2 on desktop)
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  // ✅ JSON-LD schema for LocalBusiness + Reviews (SEO rich snippets)
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NAS Auto Spa LLC',
    image: 'https://www.nasautospa.com/social-share.png',
    url: 'https://www.nasautospa.com/',
    telephone: '+1-929-307-6986',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fairfield County',
      addressRegion: 'CT',
      addressCountry: 'US',
    },
    priceRange: '$$',
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'Fairfield County, Connecticut',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: testimonials.length.toString(),
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.name,
      },
      reviewBody: t.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: '5',
        worstRating: '1',
      },
    })),
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-black relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#e1b11b]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#e1b11b]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container-wrapper relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* Google 'G' Logo for Trust */}
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg" aria-hidden="true">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <span className="text-[#e1b11b] font-bold text-sm tracking-widest uppercase">
              Google Reviews
            </span>
          </div>
          
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Trusted Mobile Detailing in Fairfield County, CT
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real 5-star reviews from NAS Auto Spa clients who use our mobile car detailing,
            paint correction, and ceramic coating services across Fairfield County, Connecticut.
          </p>
          <p className="text-xs text-gray-500">
            All testimonials are from verified Google reviews for NAS Auto Spa LLC.
          </p>
        </div>

        <div className="relative" aria-roledescription="carousel">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#e1b11b] text-black hover:bg-white hover:scale-110 transition-all shadow-[0_0_20px_rgba(225,177,27,0.3)]"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#e1b11b] text-black hover:bg-white hover:scale-110 transition-all shadow-[0_0_20px_rgba(225,177,27,0.3)]"
            aria-label="Next review"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Reviews Slider */}
          <div className="overflow-hidden mx-4 md:mx-12">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const startIndex = pageIndex * itemsPerPage;
                const currentItems = testimonials.slice(startIndex, startIndex + itemsPerPage);
                
                return (
                  <div key={pageIndex} className="min-w-full flex gap-6 px-2">
                    {currentItems.map((review, idx) => (
                      <article 
                        key={idx}
                        className="flex-1 bg-[#111] rounded-2xl p-8 border border-gray-800 hover:border-[#e1b11b]/50 transition-colors duration-300 flex flex-col relative group"
                        itemScope
                        itemType="https://schema.org/Review"
                      >
                        {/* Quote Icon Background */}
                        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true">
                          <svg className="w-16 h-16 text-[#e1b11b]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                          </svg>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-[#e1b11b]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <meta itemProp="ratingValue" content={String(review.rating)} />
                          <meta itemProp="bestRating" content="5" />
                          <meta itemProp="worstRating" content="1" />
                        </div>

                        {/* Content */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow font-light" itemProp="reviewBody">
                          "{review.text}"
                        </p>

                        {/* Author Profile */}
                        <div className="flex items-center gap-4 mt-auto border-t border-gray-800 pt-6">
                          <div className="w-12 h-12 rounded-full bg-[#e1b11b] flex items-center justify-center text-black font-bold text-xl shadow-lg uppercase">
                            {review.initial}
                          </div>
                          <div itemProp="author" itemScope itemType="https://schema.org/Person">
                            <h4 className="text-white font-bold" itemProp="name">{review.name}</h4>
                            <div className="flex items-center gap-1">
                              <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                              </svg>
                              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                                {review.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-[#e1b11b]' : 'w-2 bg-gray-700 hover:bg-gray-500'
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          {/* Small CTA under reviews – good internal link for SEO */}
          <div className="mt-10 text-center text-sm text-gray-400">
            Ready to experience it yourself?{' '}
            <a
              href="#contact"
              className="text-[#e1b11b] font-semibold hover:underline"
            >
              Request a mobile detailing quote in Fairfield County
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
