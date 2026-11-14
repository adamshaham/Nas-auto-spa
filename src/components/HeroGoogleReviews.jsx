import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  HERO_GOOGLE_REVIEWS,
  reviewInitial,
} from '../data/googleReviews';

const SWIPE_PX = 48;
const COUNT = HERO_GOOGLE_REVIEWS.length;

const Stars = ({ count = 5 }) => (
  <span className="text-[#e1b11b] text-[9px] leading-none" aria-hidden>
    {'★'.repeat(count)}
  </span>
);

const HeroGoogleReviews = ({ reduced }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(null);
  const didSwipe = useRef(false);

  const go = (delta) => {
    setDirection(delta);
    setIndex((i) => Math.max(0, Math.min(COUNT - 1, i + delta)));
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    didSwipe.current = false;
  };

  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;

    const endX = e.changedTouches[0]?.clientX ?? start;
    const dx = endX - start;

    if (Math.abs(dx) < SWIPE_PX) return;

    didSwipe.current = true;
    if (dx < 0 && index < COUNT - 1) go(1);
    else if (dx > 0 && index > 0) go(-1);
  };

  const onClickCapture = (e) => {
    if (didSwipe.current) {
      e.preventDefault();
      e.stopPropagation();
      didSwipe.current = false;
    }
  };

  const review = HERO_GOOGLE_REVIEWS[index];

  return (
    <div className="mt-3 w-full max-lg:block lg:hidden" aria-live="polite">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.62 }}
        className="relative"
      >
        <div
          className="min-h-[5.75rem] touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClickCapture={onClickCapture}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.a
              key={review.name}
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={direction}
              initial={reduced ? false : { opacity: 0, x: direction >= 0 ? 56 : -56 }}
              animate={{ opacity: 1, x: 0 }}
              exit={
                reduced
                  ? undefined
                  : { opacity: 0, x: direction >= 0 ? -56 : 56 }
              }
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="block select-none rounded-xl border border-white/15 bg-black/35 p-3.5 backdrop-blur-md active:border-[#e1b11b]/40"
            >
              <div className="mb-1.5 flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e1b11b]/15 text-xs font-bold text-[#e1b11b]">
                  {reviewInitial(review.name)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-white">{review.name}</p>
                  <Stars count={review.rating} />
                </div>
                <img
                  src="/images/gallery/google-reviews1.png"
                  alt=""
                  className="h-4 w-4 shrink-0 object-contain opacity-80"
                  aria-hidden
                />
              </div>
              <p className="line-clamp-2 text-[11px] leading-[1.45] text-zinc-200/90">
                {review.text}
              </p>
            </motion.a>
          </AnimatePresence>
        </div>

        <p className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500">
          Swipe for more reviews
        </p>

        <div className="mt-2 flex justify-center gap-1.5">
          {HERO_GOOGLE_REVIEWS.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === index ? 'h-1 w-5 bg-[#e1b11b]' : 'h-1.5 w-1.5 bg-white/25'
              }`}
              aria-label={`Show review from ${item.name}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroGoogleReviews;
