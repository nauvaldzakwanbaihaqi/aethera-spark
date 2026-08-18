import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative z-10 bg-background px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="font-display text-4xl text-foreground sm:text-5xl md:text-6xl"
          style={{ lineHeight: 1 }}
        >
          Ready to automate your UI?
        </h2>
        <Button size="lg" className="mt-12 rounded-full px-14 py-8 text-base transition-transform hover:scale-[1.03]">
          Initialize Project
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
