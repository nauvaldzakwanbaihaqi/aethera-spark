const features = [
  {
    title: "Neural Design",
    description: "AI-powered layouts that learn user behavior.",
  },
  {
    title: "Rapid Export",
    description: "From creative prompt to live production code.",
  },
  {
    title: "Smart Scaling",
    description: "Infrastructure that evolves with your traffic.",
  },
  {
    title: "SEO Autopilot",
    description: "Dynamic meta tags and images for peak visibility.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative z-10 bg-background px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div key={i} className="text-center sm:text-left">
              <h3 className="font-display text-2xl text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
