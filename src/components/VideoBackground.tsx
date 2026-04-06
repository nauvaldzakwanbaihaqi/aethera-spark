import { useEffect, useRef } from "react";

const VIDEO_URL = "/videos/hero-bg.mp4";

const FADE_DURATION = 0.5;

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const tick = () => {
      if (!video.duration || video.paused) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const { currentTime, duration } = video;

      if (currentTime < FADE_DURATION) {
        video.style.opacity = String(Math.min(currentTime / FADE_DURATION, 1));
      } else if (currentTime > duration - FADE_DURATION) {
        video.style.opacity = String(
          Math.max((duration - currentTime) / FADE_DURATION, 0)
        );
      } else {
        video.style.opacity = "1";
      }

      rafId = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener("ended", handleEnded);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div
      className="absolute inset-x-0 top-0 z-0"
      style={{ height: "100vh" }}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        autoPlay
        playsInline
        className="h-full w-full object-cover"
        style={{ opacity: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
    </div>
  );
};

export default VideoBackground;
