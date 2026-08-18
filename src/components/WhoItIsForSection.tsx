import { Palette, Terminal, Rocket } from "lucide-react";

const personas = [
  {
    role: "Creative Director & Design Leaders",
    icon: <Palette className="h-6 w-6 text-primary" />,
    painPoint: "Pain point: Komunikasi desain ke kode sering meleset dari visi awal dan memakan waktu berhari-hari.",
  },
  {
    role: "Full-Stack Engineers / Hackers",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    painPoint: "Pain point: Menghabiskan terlalu banyak waktu hanya untuk memindahkan desain ke komponen UI fungsional.",
  },
  {
    role: "Startup Founders (Tech & Web3)",
    icon: <Rocket className="h-6 w-6 text-primary" />,
    painPoint: "Pain point: Biaya dan waktu pengembangan frontend terlalu tinggi saat butuh iterasi cepat untuk validasi MVP.",
  },
];

const WhoItIsForSection = () => {
  return (
    <section className="relative z-10 px-6 py-32 bg-background/50 backdrop-blur-sm border-t border-border/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-foreground">Who is this for?</h2>
          <p className="mt-4 text-muted-foreground">Dibangun khusus untuk menyelesaikan masalah Anda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300 p-10 flex flex-col gap-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                {persona.icon}
              </div>
              <h3 className="font-display text-xl text-foreground">{persona.role}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground border-l-2 border-primary/50 pl-4 italic">
                {persona.painPoint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItIsForSection;
