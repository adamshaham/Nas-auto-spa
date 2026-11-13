import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const LoopVideo = ({
  src,
  poster,
  title = 'Service video',
  leftLabel = 'After',
  rightLabel = 'Before',
}) => {
  const videoRef = useRef(null);
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setReady(true);
    video.addEventListener('playing', markReady);
    video.addEventListener('loadeddata', markReady);

    const tryPlay = () => {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
      }
    };

    if (reduced) {
      video.pause();
      setReady(true);
    } else {
      tryPlay();
      video.addEventListener('canplay', tryPlay);
    }

    const onVisibility = () => {
      if (reduced) return;
      if (document.hidden) video.pause();
      else tryPlay();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduced) return;
        if (entry.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.2 }
    );
    io.observe(video);

    return () => {
      video.removeEventListener('playing', markReady);
      video.removeEventListener('loadeddata', markReady);
      video.removeEventListener('canplay', tryPlay);
      document.removeEventListener('visibilitychange', onVisibility);
      io.disconnect();
    };
  }, [reduced, src]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-[1.4rem] bg-black aspect-[16/10] min-h-[250px] sm:min-h-0 md:aspect-video">
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        disablePictureInPicture
        controls={false}
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
      </video>
      <span className="pointer-events-none absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#e1b11b] text-black text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
        {leftLabel}
      </span>
      <span className="pointer-events-none absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white text-black text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
        {rightLabel}
      </span>
    </div>
  );
};

export default LoopVideo;
