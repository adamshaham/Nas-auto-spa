import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  beforeLabel = 'Before',
  afterLabel = 'After',
  ariaLabel = 'Before and after reveal',
  hint = 'Scroll to wipe the finish, or drag the gold handle yourself.',
  objectPosition = 'center center',
}) => {
  const wrapRef = useRef(null);
  const frameRef = useRef(null);
  const draggingRef = useRef(false);
  const manualRef = useRef(false);
  const touchStart = useRef({ x: 0, y: 0 });
  const reduced = useReducedMotion();
  const [amount, setAmount] = useState(0.18);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start 0.78', 'end 0.48'],
  });
  const scrollAmount = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  useMotionValueEvent(scrollAmount, 'change', (value) => {
    if (draggingRef.current || manualRef.current || reduced) return;
    setAmount(Math.min(0.95, Math.max(0.05, value)));
  });

  const setFromClientX = useCallback((clientX) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = (clientX - rect.left) / rect.width;
    setAmount(Math.min(0.97, Math.max(0.03, next)));
  }, []);

  const takeManual = () => {
    manualRef.current = true;
  };

  useEffect(() => {
    const onMove = (e) => {
      const point = e.touches ? e.touches[0] : e;
      if (e.touches && !draggingRef.current) {
        const dx = Math.abs(point.clientX - touchStart.current.x);
        const dy = Math.abs(point.clientY - touchStart.current.y);
        if (dx < 10 || dx < dy) return;
        draggingRef.current = true;
        takeManual();
      }
      if (!draggingRef.current) return;
      if (e.cancelable) e.preventDefault();
      setFromClientX(point.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    const onPageScroll = () => {
      if (!draggingRef.current) manualRef.current = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);
    window.addEventListener('scroll', onPageScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
      window.removeEventListener('scroll', onPageScroll);
    };
  }, [setFromClientX]);

  const startDrag = (e) => {
    if (e.touches) {
      touchStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      return;
    }
    draggingRef.current = true;
    takeManual();
    setFromClientX(e.clientX);
  };

  const setManualAmount = (value) => {
    takeManual();
    setAmount(value);
  };

  return (
    <div ref={wrapRef} className="relative">
      <div
        ref={frameRef}
        className="relative w-full overflow-hidden rounded-2xl sm:rounded-[1.4rem] bg-black select-none cursor-ew-resize aspect-[16/10] min-h-[250px] sm:min-h-0 md:aspect-video"
        style={{ touchAction: 'pan-y' }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        role="slider"
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(amount * 100)}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          draggable="false"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${(100 - amount * 100).toFixed(2)}% 0 0)` }}
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition }}
            draggable="false"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 z-10 w-px bg-[#e1b11b] shadow-[0_0_18px_rgba(225,177,27,0.85)]"
          style={{ left: `${amount * 100}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#e1b11b] text-black border-2 border-black flex items-center justify-center shadow-[0_0_24px_rgba(225,177,27,0.7)]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M9 7L4 12l5 5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <span className="pointer-events-none absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/70 border border-white/15 text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-zinc-200 backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#e1b11b]/15 border border-[#e1b11b]/50 text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#e1b11b] backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>

      <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setManualAmount(0.92)}
            className={`px-3 py-2 rounded-lg text-[11px] font-semibold tracking-[0.18em] uppercase border transition-colors ${
              amount > 0.8
                ? 'bg-white/10 border-white/20 text-white'
                : 'border-zinc-700 text-zinc-400 hover:border-[#e1b11b]/40 hover:text-[#e1b11b]'
            }`}
          >
            Before
          </button>
          <button
            type="button"
            onClick={() => setManualAmount(0.08)}
            className={`px-3 py-2 rounded-lg text-[11px] font-semibold tracking-[0.18em] uppercase border transition-colors ${
              amount < 0.2
                ? 'bg-[#e1b11b] border-[#e1b11b] text-black'
                : 'border-zinc-700 text-zinc-400 hover:border-[#e1b11b]/40 hover:text-[#e1b11b]'
            }`}
          >
            After
          </button>
        </div>
        <label className="flex-1 flex items-center gap-3">
          <span className="sr-only">{ariaLabel}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={Math.round(amount * 100)}
            onChange={(e) => setManualAmount(Number(e.target.value) / 100)}
            className="ba-slider w-full"
          />
        </label>
      </div>
      <p className="mt-2 text-[10px] text-zinc-500">{hint}</p>
    </div>
  );
};

export default BeforeAfterSlider;
