import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";

const tiers = [
  {
    name: "Hacker",
    price: "$29",
    description: "Perfect for indie makers and developers.",
    features: ["100 Generations/mo", "Export to React/Vite", "Community Support", "Basic SEO"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For professional creators and small teams.",
    features: ["Unlimited Generations", "Custom Brand DNA", "Priority Export (Next.js)", "Advanced SEO Autopilot", "Priority Support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated infrastructure and support.",
    features: ["Custom Integrations", "SLA Guarantee", "Dedicated Account Manager", "White-label Options"],
    highlighted: false,
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Pricing" description="Aethera Spark Pricing Tiers" />
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Pricing for the future
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Choose the right plan to power your neural design capabilities. Scale as you grow.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`rounded-3xl p-8 ring-1 ${tier.highlighted ? 'ring-primary bg-card/80 shadow-lg shadow-primary/10' : 'ring-border bg-card'}`}
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">{tier.name}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                {tier.name !== "Enterprise" && <span className="text-sm font-semibold text-muted-foreground">/month</span>}
              </div>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-5 w-5 flex-none text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="mt-8 w-full rounded-full" 
                variant={tier.highlighted ? "default" : "outline"}
              >
                {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
