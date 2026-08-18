import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="relative z-10 px-6 py-32 md:py-40 bg-background overflow-hidden border-t border-border/40">
      {/* Background Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="rounded-3xl border border-primary/20 bg-card/60 backdrop-blur-2xl p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/5">
          {/* Subtle Accent Glow Inside Card */}
          <div className="absolute -right-20 -top-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-8"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Next-Gen Intelligent UI Engine</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground"
            style={{ lineHeight: 1.05 }}
          >
            Ready to automate <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              your UI workflow?
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Ubah ide natural language menjadi kode React & Tailwind berkualitas tinggi tanpa hambatan. Mulai bangun sekarang dalam hitungan menit.
          </motion.p>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="rounded-full px-10 py-7 text-base group transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25">
              <Link to="/studio" className="flex items-center gap-3">
                <span>Initialize Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
