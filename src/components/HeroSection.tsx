const HeroSection = () => {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
      style={{ paddingTop: "calc(8rem - 75px)" }}
    >
      {/* Headline */}
      <h1
        className="animate-fade-rise max-w-7xl font-display text-5xl font-normal text-foreground sm:text-7xl md:text-8xl"
        style={{ lineHeight: 0.95, letterSpacing: "-2.46px" }}
      >
        Beyond{" "}
        <em className="text-muted-foreground">systems,</em> we craft{" "}
        <em className="text-muted-foreground">the eternal.</em>
      </h1>

      {/* Description */}
      <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Designing interfaces for future-forward minds, AI-first makers, and
        elite souls. Amid the chaos, we build neural havens for rapid work and
        pure flows.
      </p>

      {/* CTA */}
      <button className="animate-fade-rise-delay-2 mt-12 rounded-full bg-primary px-14 py-5 text-base text-primary-foreground transition-transform hover:scale-[1.03]">
        Initialize Project
      </button>
    </section>
  );
};

export default HeroSection;
