import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-40 text-center"
    >
      {/* Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl"
        style={{ lineHeight: 1.1 }}
      >
        Neural design,
        <br />
        not generic templates.
      </motion.h1>

      {/* Subheadline */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
      >
        Aethera Spark is an intelligent design engine that transforms natural
        language into production-ready React components and design systems.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button size="lg" asChild className="mt-12 rounded-full px-14 py-8 text-base transition-transform hover:scale-[1.03]">
          <Link to="/studio">Initialize Project</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
