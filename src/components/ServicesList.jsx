import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "CAR DETAILING",
    image: "/images/gallery/car-detailing.jpg",
    link: "/mobile-detailing-fairfield-county-ct",
  },
  {
    title: "PAINT CORRECTION",
    image: "/images/gallery/paint-correction.jpg",
    link: "/paint-correction-fairfield-county-ct",
  },
  {
    title: "CERAMIC COATING",
    image: "/images/gallery/ceramic-coating.jpg",
    link: "/ceramic-coating-fairfield-county-ct",
  },
  {
    title: "COMMERCIAL",
    image: "/images/gallery/commercial-contracts.jpg",
    link: "/fleet-detailing-fairfield-county-ct",
    allowWrap: true,
  },
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Alternate directions: even = left, odd = right
  const direction = index % 2 === 0 ? -1 : 1;
  const transform = visible
    ? "translateX(0) scale(1)"
    : `translateX(${direction * 56}px) scale(0.97)`;

  return (
    <Link to={service.link} className="block">
      <div
        ref={ref}
        className="relative group will-change-transform border-b border-zinc-800 last:border-b-0"
        style={{
          transform,
          opacity: visible ? 1 : 0,
          transition:
            "opacity 800ms ease-out, transform 800ms cubic-bezier(0.22, 0.61, 0.36, 1)",
          transitionDelay: `${index * 120}ms`,
        }}
      >
        {/* Image card */}
        <div className="relative h-[260px] md:h-[320px] lg:h-[380px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent pointer-events-none" />

          {/* Text content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex items-end justify-between gap-3">
            <h3
              className={`text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-wide ${
                service.allowWrap ? "" : "whitespace-nowrap"
              }`}
            >
              {service.title}
            </h3>
            <span className="hidden md:inline-flex text-[11px] tracking-[0.22em] uppercase text-zinc-300">
              View Service →
            </span>
          </div>

          {/* Top gradient for stacked feel */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </Link>
  );
};

const ServicesList = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-white">OUR</span>{" "}
            <span className="text-[#e1b11b]">SERVICES</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-400 max-w-xl">
            Mobile detailing, paint correction, ceramic coating, and commercial
            fleet care — all brought directly to your driveway anywhere in
            Fairfield County.
          </p>
        </div>

        {/* Stacked cards */}
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/70">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
