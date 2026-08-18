import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Gratis",
    features: ["Generasi terbatas", "Export dengan watermark", "Akses komunitas"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$39/mo",
    features: ["Unlimited generation", "Full Brand DNA", "No watermark", "SEO Autopilot"],
    highlighted: true,
  },
  {
    name: "Studio",
    price: "Custom",
    features: ["White-label export", "Team seats", "Dukungan prioritas", "Web3 integration"],
    highlighted: false,
  }
];

const PricingPreviewSection = () => {
  return (
    <section id="pricing" className="relative z-10 px-6 py-32 md:py-44 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Power your workflow with the intelligence of Aethera Spark.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`rounded-3xl p-8 border backdrop-blur-xl flex flex-col transition-all duration-300 hover:-translate-y-1 ${tier.highlighted ? 'border-primary/50 bg-primary/5 shadow-2xl shadow-primary/20' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-5 w-5 flex-none text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button size="lg" asChild className="rounded-full px-12 py-6 text-base">
            <Link to="/pricing">Lihat semua paket</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;
