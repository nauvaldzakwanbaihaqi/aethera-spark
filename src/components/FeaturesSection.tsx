import { motion } from "framer-motion";
import { Cpu, Zap, Sparkles, Search, Layers, CheckCircle2 } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="about" className="relative z-10 px-6 py-32 bg-background/50 backdrop-blur-sm border-t border-border/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Engineered for Precision
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Kemampuan inti Aethera Spark yang mengubah alur kerja pengembangan UI dari ide kasar menjadi sistem desain tingkat produksi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main Feature: Neural Design Engine (Col 1-2, Row 1-2) */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group shadow-2xl">
            {/* Top Bar with Icon & Tag */}
            <div className="flex items-center justify-between z-10">
              <div className="h-10 w-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Cpu className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Core Engine
              </span>
            </div>

            {/* Description */}
            <div className="relative z-10 max-w-lg my-4">
              <h3 className="font-display text-3xl md:text-4xl text-foreground font-semibold tracking-tight">
                Neural Design Engine
              </h3>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                Algoritma AI cerdas yang memahami konteks dan gaya untuk menghasilkan struktur UI yang tidak hanya fungsional, tapi juga memiliki nilai estetika tinggi, terbebas dari jebakan layout template generik.
              </p>
            </div>

            {/* Interactive/Vivid Visual Preview: Prompt -> UI Component Transformation */}
            <div className="relative z-10 w-full rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-4 mt-2 overflow-hidden shadow-inner">
              {/* Shimmer line */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full"
                animate={{ translateX: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Prompt Input Header Mockup */}
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground pb-3 border-b border-white/10">
                <span className="text-primary font-bold">prompt:</span>
                <span className="text-zinc-300 truncate">"Create dark futuristic glassmorphism hero card with live stats..."</span>
              </div>

              {/* Generated Component Mockup Output */}
              <div className="pt-3 grid grid-cols-3 gap-3 items-center">
                <div className="col-span-2 flex flex-col gap-2">
                  <div className="h-4 w-3/4 bg-primary/20 rounded-md animate-pulse" />
                  <div className="h-3 w-full bg-white/10 rounded-md" />
                  <div className="flex gap-2 pt-1">
                    <span className="h-5 px-2 bg-primary/30 text-[10px] text-primary-foreground rounded flex items-center gap-1 font-mono">
                      <CheckCircle2 className="h-3 w-3" /> React 18
                    </span>
                    <span className="h-5 px-2 bg-white/10 text-[10px] text-zinc-300 rounded flex items-center gap-1 font-mono">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
                <div className="h-16 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/20 to-transparent p-2 flex flex-col justify-between">
                  <div className="h-2 w-8 bg-primary/40 rounded" />
                  <div className="text-right text-xs font-mono text-primary font-bold">+99.4%</div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Glow */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />
          </div>

          {/* Feature 2: Rapid Export (Col 3, Row 1) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 p-8 flex flex-col justify-between relative group">
            <div className="flex justify-between items-start">
              <div className="h-10 w-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Zap className="h-5 w-5" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50 group-hover:scale-150 transition-transform" />
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground font-semibold">
                Rapid Prompt-to-Code
              </h3>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                Dari sekadar ide teks hingga menjadi kode React & Tailwind produksi yang siap dipakai dalam hitungan detik.
              </p>
            </div>
          </div>

          {/* Feature 3: Kinetic Animations (Col 3, Row 2) */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 p-8 flex flex-col justify-between relative group">
            <div className="flex justify-between items-start">
              <div className="h-10 w-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400/50 group-hover:scale-150 transition-transform" />
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground font-semibold">
                Kinetic Animations
              </h3>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                Micro-interactions modern & Framer Motion yang mulus terintegrasi langsung secara otomatis.
              </p>
            </div>
          </div>

          {/* Feature 4: SEO Autopilot (Col 1, Row 3) */}
          <div className="md:col-span-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 p-8 flex flex-col justify-between relative group">
            <div className="flex justify-between items-start">
              <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Search className="h-5 w-5" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 group-hover:scale-150 transition-transform" />
            </div>
            <div>
              <h3 className="font-display text-xl text-foreground font-semibold">
                SEO Autopilot
              </h3>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                Tag meta dinamis & struktur HTML semantik otomatis untuk visibilitas mesin pencari maksimal.
              </p>
            </div>
          </div>

          {/* Feature 5 [NEW]: Component Injection (Col 2-3, Row 3) */}
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 p-8 flex flex-col justify-between relative group">
            <div className="flex justify-between items-start">
              <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Layers className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono text-cyan-400/80 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                Radix UI + Zod Validated
              </span>
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground font-semibold">
                Component Injection & Validation
              </h3>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xl">
                Primitives Shadcn / Radix UI (modal, dropdown, form) langsung terinjeksi dengan skema validasi Zod client-side yang siap dipakai tanpa konfigurasi manual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
