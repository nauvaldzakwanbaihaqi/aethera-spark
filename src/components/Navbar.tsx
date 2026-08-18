import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          <li>
            <Link to="/" className="transition-colors text-foreground">Home</Link>
          </li>
          <li>
            <Link to="/studio" className="transition-colors text-muted-foreground hover:text-foreground">Studio</Link>
          </li>
          <li>
            <a href="/#about" className="transition-colors text-muted-foreground hover:text-foreground">About</a>
          </li>
          <li>
            <a href="/#journal" className="transition-colors text-muted-foreground hover:text-foreground">Journal</a>
          </li>
          <li>
            <a href="/#contact" className="transition-colors text-muted-foreground hover:text-foreground">Reach Us</a>
          </li>
        </ul>

        {/* CTA */}
        <Button asChild className="rounded-full px-6 text-sm transition-transform hover:scale-[1.03]">
          <Link to="/register">Begin Journey</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
