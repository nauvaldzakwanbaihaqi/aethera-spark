const steps = [
  {
    number: "01",
    title: "Human Logic Meets AI Precision",
    description:
      "We analyze your brand DNA to craft unique components that convert.",
  },
  {
    number: "02",
    title: "Zero Friction Deployment",
    description:
      "Review your neural wireframes in real-time and deploy to our high-speed edge network.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative z-10 bg-background px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-border pt-8">
              <span className="text-sm text-muted-foreground">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
