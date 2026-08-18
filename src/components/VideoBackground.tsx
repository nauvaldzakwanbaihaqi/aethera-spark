import { useState } from "react";

const VIDEO_URL = "/videos/hero-bg.mp4";

const VideoBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="absolute inset-x-0 top-0 z-0 overflow-hidden"
      style={{ height: "100vh" }}
    >
      <video
        src={VIDEO_URL}
        muted
        autoPlay
        loop
        playsInline
        onCanPlay={() => setIsLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Base dark overlay to reduce overall video glare */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      
      {/* Center radial vignette for text emphasis */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* Top to bottom gradient for navbar and section transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background pointer-events-none" />
    </div>
  );
};

export default VideoBackground;
