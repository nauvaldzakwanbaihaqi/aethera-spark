import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoBackground from "@/components/VideoBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <VideoBackground />
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;
