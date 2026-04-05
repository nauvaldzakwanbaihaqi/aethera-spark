const stats = [
  { value: "99%", label: "Accuracy" },
  { value: "24h", label: "Turnaround" },
  { value: "500+", label: "Sites Built" },
];

const StatsSection = () => {
  return (
    <section className="relative z-10 bg-background px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-6xl text-foreground sm:text-7xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
