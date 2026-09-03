import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RENTAL_INVENTORY } from '../data/rentalInventory';

const InventoryCard = ({ car, index }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
      className="border border-zinc-800 rounded-3xl bg-zinc-950/70 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-4 md:p-5 space-y-3">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-black">
            <img
              src={car.images[activeImage].src}
              alt={car.images[activeImage].alt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full bg-black/70 border border-zinc-700 text-[10px] uppercase tracking-[0.2em] text-[#e1b11b]">
                {car.category}
              </span>
            </div>
          </div>

          <div
            className={`grid gap-2 ${
              car.images.length > 4 ? 'grid-cols-3 sm:grid-cols-5' : 'grid-cols-4'
            }`}
          >
            {car.images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition ${
                  activeImage === i
                    ? 'border-[#e1b11b] ring-1 ring-[#e1b11b]/50'
                    : 'border-zinc-800 hover:border-zinc-600'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800">
          <div className="space-y-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500 mb-1">
                {car.color}
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                {car.name}
              </h3>
            </div>

            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
              {car.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {car.highlights.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-zinc-700 text-[11px] uppercase tracking-[0.14em] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-6 mt-2">
            <Link
              to="/#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#e1b11b] text-black text-sm font-semibold tracking-wide hover:bg-yellow-300 transition"
            >
              Check availability
            </Link>
            <a
              href="tel:19293076986"
              className="inline-flex items-center px-5 py-2.5 rounded-lg border border-zinc-700 text-sm font-medium text-zinc-200 hover:border-zinc-500 transition"
            >
              Call / Text
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const CarInventory = ({ showHeader = true, className = '' }) => {
  return (
    <section id="inventory" className={`relative ${className}`}>
      {showHeader && (
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            OUR FLEET
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold italic tracking-tight">
            <span className="text-white">CAR</span>{' '}
            <span className="text-[#e1b11b]">INVENTORY</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            Don&apos;t see the car you want? Let us know — we can most likely source it
            for you.
          </p>
        </div>
      )}

      <div className="space-y-8 md:space-y-10">
        {RENTAL_INVENTORY.map((car, index) => (
          <InventoryCard key={car.id} car={car} index={index} />
        ))}
      </div>

      <div className="mt-10 md:mt-12 text-center">
        <p className="text-sm text-zinc-400 mb-4">
          Looking for something specific? Tell us the make, model, or occasion.
        </p>
        <Link
          to="/#contact"
          className="inline-flex items-center px-6 py-3 rounded-lg border border-yellow-400/30 text-yellow-400 text-sm font-semibold tracking-wide hover:bg-yellow-400/10 transition"
        >
          Request a vehicle we don&apos;t have listed
        </Link>
      </div>
    </section>
  );
};

export default CarInventory;
