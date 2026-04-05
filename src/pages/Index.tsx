import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoBackground from "@/components/VideoBackground";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <VideoBackground />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Index;
