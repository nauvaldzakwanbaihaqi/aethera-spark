import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section id="about" className="relative z-10 px-6 py-32 bg-background/50 backdrop-blur-sm border-t border-border/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Main Feature: Neural Design Engine */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 p-10 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl text-foreground">
                Neural Design Engine
              </h3>
              <p className="mt-4 text-base text-muted-foreground max-w-md">
                Algoritma AI cerdas yang memahami konteks dan gaya untuk menghasilkan struktur UI yang tidak hanya fungsional, tapi juga memiliki nilai estetika tinggi, terbebas dari jebakan layout template generik.
              </p>
            </div>
            
            {/* Simple abstract preview visual */}
            <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none translate-x-10 translate-y-10">
              <div className="w-full h-full border-t border-l border-primary/30 rounded-tl-3xl bg-gradient-to-br from-primary/10 to-transparent p-6 flex flex-col gap-4">
                <motion.div 
                  className="w-1/2 h-8 rounded-lg bg-primary/20"
                  animate={{ width: ["50%", "70%", "50%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="w-full h-24 rounded-lg bg-primary/10"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </div>
          </div>

          {/* Feature 2: Rapid Export */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 p-8 flex flex-col justify-end">
            <h3 className="font-display text-xl text-foreground">
              Rapid Prompt-to-Code Export
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Dari sekadar ide teks hingga menjadi kode React produksi yang siap digunakan hanya dalam hitungan detik.
            </p>
          </div>

          {/* Feature 3: Kinetic Animations */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 p-8 flex flex-col justify-end">
            <h3 className="font-display text-xl text-foreground">
              Kinetic Animations
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Transisi dan micro-interactions modern yang mulus terintegrasi langsung ke dalam setiap komponen secara otomatis.
            </p>
          </div>

          {/* Feature 4: SEO Autopilot */}
          <div className="md:col-span-3 lg:col-span-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 p-8 flex flex-col justify-end">
            <h3 className="font-display text-xl text-foreground">
              SEO Autopilot
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tag meta dinamis, penanganan aset, dan struktur HTML semantik untuk memastikan indeksibilitas mesin pencari yang maksimal tanpa konfigurasi manual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
