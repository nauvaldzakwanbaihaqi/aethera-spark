import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import VideoBackground from "@/components/VideoBackground";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import WhoItIsForSection from "@/components/WhoItIsForSection";
import PricingPreviewSection from "@/components/PricingPreviewSection";
import CTASection from "@/components/CTASection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SEO title="Home" />
      <VideoBackground />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <StatsSection />
      <WhoItIsForSection />
      <PricingPreviewSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;
