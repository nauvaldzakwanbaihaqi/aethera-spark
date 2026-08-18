import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", active: true },
  { label: "Studio", active: false },
  { label: "About", active: false },
  { label: "Journal", active: false },
  { label: "Reach Us", active: false },
];

const Navbar = () => {
  return (
    <nav className="relative z-10 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        {/* Logo */}
        <a href="/" className="font-display text-3xl tracking-tight text-foreground">
          Aethera<sup className="text-sm">®</sup>
        </a>

        {/* Menu Items */}
        <ul className="hidden items-center gap-8 font-body text-sm md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`transition-colors ${
                  item.active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button className="rounded-full px-6 text-sm transition-transform hover:scale-[1.03]">
          Begin Journey
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
