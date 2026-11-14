import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Reach out',
    body: 'Call, text, or use the quote form — we reply the same day.',
  },
  {
    num: '02',
    title: 'Your quote',
    body: 'Clear pricing for your vehicle, package, and location.',
  },
  {
    num: '03',
    title: 'We come to you',
    body: 'Our mobile setup at your home, office, or shop.',
  },
  {
    num: '04',
    title: 'Drive away clean',
    body: 'Walkthrough on finish, then you’re back on the road.',
  },
];

const HomeMobileProcess = () => (
  <section
    className="relative py-14 md:py-20 bg-black overflow-hidden lg:hidden"
    aria-label="How booking works"
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/80 to-black" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold italic tracking-tight text-white">
          How it <span className="text-[#e1b11b]">works</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-md leading-relaxed">
          Book mobile detailing without leaving your driveway.
        </p>
      </div>

      <div className="space-y-3">
        {STEPS.map((step, index) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 flex gap-4"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-[#e1b11b] pt-0.5">
              {step.num}
            </span>
            <div>
              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{step.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeMobileProcess;
