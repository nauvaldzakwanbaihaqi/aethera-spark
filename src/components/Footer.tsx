import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/40 bg-black/80 backdrop-blur-md text-muted-foreground text-sm py-16 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & System Status */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
            Aethera<sup className="text-xs">®</sup>
          </Link>
          <div className="hidden md:block h-4 w-px bg-border/60" />
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>

        {/* Secondary Nav Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-xs font-medium">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/studio" className="hover:text-foreground transition-colors">Studio</Link>
          <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <a href="/#about" className="hover:text-foreground transition-colors">About</a>
          <a href="/#journal" className="hover:text-foreground transition-colors">Journal</a>
          <a href="/#contact" className="hover:text-foreground transition-colors">Reach Us</a>
        </nav>

        {/* Copyright */}
        <div className="text-xs text-muted-foreground/80 font-mono text-center md:text-right">
          © {new Date().getFullYear()} Aethera Spark Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
