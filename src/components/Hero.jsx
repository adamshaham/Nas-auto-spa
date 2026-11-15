import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import porscheImage from '../assets/porsche-gt3rs.jpg';
import JobberFormEmbed from './JobberFormEmbed';
import HeroGoogleReviews from './HeroGoogleReviews';

const HERO_SERVICE_PILLS = [
  { label: 'Mobile Detailing', to: '/mobile-detailing-fairfield-county-ct' },
  { label: 'Paint Correction', to: '/paint-correction-fairfield-county-ct' },
  { label: 'Ceramic Coating', to: '/ceramic-coating-fairfield-county-ct' },
];

const STATS = [
  { value: '5.0', label: 'Google rating' },
  { value: '100%', label: 'Mobile — water & power' },
  { value: 'CT', label: 'Fairfield County' },
];

const MagneticButton = ({ children, className, onClick, reduced }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.22}px, ${y * 0.28}px)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <button
      type="button"
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <span className="hero-btn-shine" />
      </span>
    </button>
  );
};

const SparkleField = ({ enabled, mouseRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let raf = 0;
    let running = true;

    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.7 + 0.35,
      s: Math.random() * 0.22 + 0.04,
      a: Math.random() * 0.45 + 0.12,
      tw: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      const nextW = Math.round(w * dpr);
      const nextH = Math.round(h * dpr);
      if (canvas.width === nextW && canvas.height === nextH) return;
      canvas.width = nextW;
      canvas.height = nextH;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(resize);
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const tick = () => {
      if (!running) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        p.y -= p.s / 140;
        p.tw += 0.02;
        if (p.y < -0.04) {
          p.y = 1.04;
          p.x = Math.random();
        }
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        if (dist < 0.18) {
          p.x -= (dx / dist) * 0.0018;
          p.y -= (dy / dist) * 0.0018;
        }
        const pulse = 0.55 + Math.sin(p.tw) * 0.45;
        ctx.beginPath();
        ctx.fillStyle = `rgba(225,177,27,${p.a * pulse})`;
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [enabled, mouseRef]);

  if (!enabled) return null;
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[2]"
      aria-hidden="true"
    />
  );
};

const SplitWord = ({ text, className, delay = 0, reduced }) => {
  const chars = Array.from(text);
  return (
              <span className={`inline-flex overflow-hidden whitespace-nowrap pb-[0.08em] pr-[0.06em] ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          className="inline-block"
          initial={reduced ? false : { y: '115%' }}
          animate={{ y: '0%' }}
          transition={{
            delay: delay + i * 0.045,
            duration: 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

const HERO_VIDEO = '/videos/hero-porsche.mp4';

const Hero = () => {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const photoRef = useRef(null);
  const videoRef = useRef(null);
  const mouseRef = useRef({ x: 0.62, y: 0.42 });
  const scrollRef = useRef(0);
  const applyPhotoRef = useRef(() => {});
  const reduceMotion = useReducedMotion();

  applyPhotoRef.current = () => {
    const el = photoRef.current;
    if (!el) return;
    const { x, y } = mouseRef.current;
    const fine = window.matchMedia('(pointer: fine)').matches && !reduceMotion;
    const px = fine ? (x - 0.5) * 28 : 0;
    const py = scrollRef.current * 0.1 + (fine ? (y - 0.5) * 16 : 0);
    el.style.transform = `translate3d(${px}px, ${py}px, 0) scale(1.08)`;
  };
  const [mediaReady, setMediaReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  const [canSparkle, setCanSparkle] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video) return;

    const markReady = () => setMediaReady(true);
    video.addEventListener('playing', markReady);
    video.addEventListener('loadeddata', markReady);

    const tryPlay = () => {
      video.defaultMuted = true;
      video.muted = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', 'true');
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          window.setTimeout(() => {
            video.play().catch(() => {});
          }, 350);
        });
      }
    };

    tryPlay();
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('loadedmetadata', tryPlay);

    const unlockOnGesture = () => {
      tryPlay();
    };
    window.addEventListener('touchstart', unlockOnGesture, { once: true, passive: true });
    window.addEventListener('click', unlockOnGesture, { once: true });

    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        tryPlay();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const ioTarget = section || video;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else if (!entry.isIntersecting && entry.boundingClientRect.top < -80) {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(ioTarget);

    return () => {
      video.removeEventListener('playing', markReady);
      video.removeEventListener('loadeddata', markReady);
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('loadedmetadata', tryPlay);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('touchstart', unlockOnGesture);
      window.removeEventListener('click', unlockOnGesture);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      scrollRef.current = y;
      setScrollY(y);
      applyPhotoRef.current();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    setCanSparkle(!reduceMotion && fine && window.innerWidth >= 1024);
  }, [reduceMotion]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const onMove = (e) => {
      const rect = root.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current = { x, y };
      root.style.setProperty('--mx', `${x * 100}%`);
      root.style.setProperty('--my', `${y * 100}%`);
      applyPhotoRef.current();
      if (glowRef.current) {
        glowRef.current.style.opacity = '1';
        glowRef.current.style.transform = `translate3d(${e.clientX - rect.left}px, ${e.clientY - rect.top}px, 0) translate(-50%, -50%)`;
      }
    };

    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    root.addEventListener('mousemove', onMove);
    root.addEventListener('mouseleave', onLeave);
    return () => {
      root.removeEventListener('mousemove', onMove);
      root.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const progress = Math.min(scrollY / 500, 1);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-0 overflow-hidden bg-black hero-interactive lg:min-h-screen"
      style={{ '--mx': '62%', '--my': '42%', '--mxn': 0.62, '--myn': 0.42 }}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 z-[4] hidden lg:block w-[28rem] h-[28rem] rounded-full opacity-0 transition-opacity duration-300 mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle, rgba(225,177,27,0.22) 0%, rgba(225,177,27,0.06) 38%, transparent 70%)',
          transform: 'translate3d(-50%, -50%, 0)',
        }}
        aria-hidden="true"
      />

      <div
        ref={photoRef}
        className={`absolute inset-0 will-change-transform transition-opacity duration-1000 hero-photo ${
          mediaReady ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translate3d(0, 0, 0) scale(1.08)' }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          defaultMuted
          muted
          loop
          playsInline
          preload="auto"
          poster={porscheImage}
          disablePictureInPicture
          controls={false}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black/50 lg:bg-black/50 max-lg:bg-black/62" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.58) 38%, rgba(0,0,0,0.18) 64%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-[1] lg:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.78) 100%)',
        }}
        aria-hidden
      />
      <div className="hero-spotlight pointer-events-none absolute inset-0 z-[1]" />
      <div className="hero-grid pointer-events-none absolute inset-0 z-[1] opacity-40" />

      <SparkleField enabled={canSparkle} mouseRef={mouseRef} />

      <div className="pointer-events-none absolute -top-24 -left-16 w-[28rem] h-[28rem] rounded-full bg-[#e1b11b]/15 blur-[90px] animate-blob" />
      <div
        className="pointer-events-none absolute -bottom-24 right-0 w-[22rem] h-[22rem] rounded-full bg-amber-300/10 blur-[80px] animate-blob"
        style={{ animationDelay: '2.5s' }}
      />
      <div className="hero-grain pointer-events-none absolute inset-0 z-[3] opacity-[0.18]" />

      <div
        className="relative z-10 mx-auto flex max-w-7xl flex-col justify-start px-5 pb-8 pt-[5.75rem] sm:px-8 sm:pb-10 sm:pt-[6rem] lg:min-h-screen lg:items-center lg:justify-center lg:py-20"
        style={{ transform: `translateY(${-progress * 16}px)` }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-10 lg:py-20">
          <div
            className="flex flex-col items-start"
            style={{ opacity: 1 - progress * 0.4 }}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e1b11b]/40 bg-[#e1b11b]/10 px-3 py-1.5 backdrop-blur-sm lg:mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#e1b11b] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1b11b]" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#e1b11b]">
                Connecticut&apos;s Top Mobile Detailing
              </span>
            </motion.div>

            <h1 className="text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] font-bold leading-[0.92] tracking-tight mb-3 sm:mb-4 drop-shadow-[0_2px_20px_rgba(0,0,0,0.55)]">
              <span className="block italic text-white">
                <SplitWord text="NAS" reduced={reduceMotion} />
              </span>
              <span className="block italic hero-shine">
                <SplitWord text="AUTO SPA" delay={0.18} reduced={reduceMotion} />
              </span>
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
              className="mb-3 text-[1.35rem] font-bold leading-tight sm:text-[1.5rem] lg:hidden"
            >
              <span className="text-white">Your Cars, </span>
              <span className="text-[#e1b11b]">Our Passion.</span>
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5 }}
              className="mb-3 flex flex-wrap gap-2 lg:hidden"
            >
              {HERO_SERVICE_PILLS.map((pill) => (
                <Link
                  key={pill.label}
                  to={pill.to}
                  className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-zinc-100 backdrop-blur-sm transition hover:border-[#e1b11b]/50 hover:bg-[#e1b11b]/10 hover:text-white"
                >
                  {pill.label}
                </Link>
              ))}
            </motion.div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 hidden max-w-md text-lg leading-relaxed text-zinc-300 lg:block"
            >
              Premium mobile detailing, paint correction, ceramic coating &amp; fleet
              washing across Fairfield County, CT — with our own water &amp; power.
            </motion.p>

            {!isDesktop && <HeroGoogleReviews reduced={reduceMotion} />}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.82 }}
              className="mb-2 mt-4 hidden w-full max-w-none grid-cols-2 gap-3 sm:max-w-md lg:mb-6 lg:mt-0 lg:grid"
            >
              <MagneticButton
                reduced={reduceMotion}
                onClick={scrollTo('services')}
                className="relative flex-1 py-3.5 rounded-xl bg-[#e1b11b] text-black text-sm font-bold tracking-wider hover:bg-amber-300 transition-colors duration-200 shadow-[0_4px_20px_rgba(225,177,27,0.4)] overflow-hidden will-change-transform"
              >
                SERVICES
              </MagneticButton>
              <MagneticButton
                reduced={reduceMotion}
                onClick={isDesktop ? scrollTo('pricing') : scrollTo('contact')}
                className="relative flex-1 py-3.5 rounded-xl border border-zinc-500 text-white text-sm font-bold tracking-wider hover:border-[#e1b11b] hover:text-[#e1b11b] transition-colors duration-200 overflow-hidden will-change-transform"
              >
                {isDesktop ? 'PACKAGES' : 'GET A QUOTE'}
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="hidden lg:flex flex-wrap gap-6 sm:gap-8"
            >
              {STATS.map((s) => (
                <div key={s.label} className="min-w-[5.5rem]">
                  <div className="text-2xl sm:text-3xl font-bold italic text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {isDesktop && (
            <motion.div
              className="w-full"
              initial={reduceMotion ? false : { opacity: 0, x: 28, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-form-frame relative rounded-2xl p-[1px]">
                <div className="relative overflow-visible rounded-2xl bg-zinc-950/90 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.65)]">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#e1b11b] via-amber-300 to-[#e1b11b]" />
                    <div className="hero-form-sheen absolute inset-0" />
                  </div>

                  <div className="px-5 sm:px-6 pt-6 pb-4 border-b border-zinc-800/70">
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#e1b11b] mb-1">
                      Free Quote · Fast Response
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Fill out the form and we&apos;ll get back to you — usually same day.
                    </p>
                  </div>

                  <JobberFormEmbed
                    id="hero-quote"
                    className="relative z-[1] w-full px-3 sm:px-4"
                    mode="embed"
                    minHeight={500}
                  />

                  <div className="px-5 sm:px-6 py-4 border-t border-zinc-800/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-[10px] text-zinc-500 leading-relaxed max-w-[260px]">
                      Deposit required for paint correction &amp; ceramic coating. Full details paid at service.
                    </p>
                    <a
                      href="tel:+19293076986"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e1b11b] hover:underline whitespace-nowrap"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (929) 307-6986
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div
        className="hidden lg:flex absolute bottom-8 left-8 items-center gap-3 transition-opacity duration-500 z-10"
        style={{ opacity: Math.max(0, 1 - progress * 2.5) }}
      >
        <div className="w-5 h-8 rounded-full border border-zinc-500 flex justify-center items-start pt-1.5">
          <div className="w-0.5 h-2 bg-[#e1b11b] rounded-full animate-bounce" />
        </div>
        <span className="text-zinc-400 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </div>
  );
};

export default Hero;
