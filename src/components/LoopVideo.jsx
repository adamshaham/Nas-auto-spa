import React, { useEffect, useRef, useState } from 'react';

const LoopVideo = ({
  src,
  poster,
  title = 'Service video',
  leftLabel = 'Before',
  rightLabel = 'After',
  flipHorizontal = false,
}) => {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setReady(true);
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
          window.setTimeout(() => video.play().catch(() => {}), 350);
        });
      }
    };

    tryPlay();
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('loadedmetadata', tryPlay);

    const unlockOnGesture = () => tryPlay();
    window.addEventListener('touchstart', unlockOnGesture, { once: true, passive: true });
    window.addEventListener('click', unlockOnGesture, { once: true });

    const onVisibility = () => {
      if (document.hidden) video.pause();
      else tryPlay();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.15 }
    );
    io.observe(video);

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
  }, [src]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-[1.4rem] bg-black aspect-[16/10] min-h-[250px] sm:min-h-0 md:aspect-video">
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          ready ? 'opacity-100' : 'opacity-0'
        } ${flipHorizontal ? '-scale-x-100' : ''}`}
        autoPlay
        defaultMuted
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
