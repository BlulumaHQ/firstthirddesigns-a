import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const leftNav = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/service" },
];

const rightNav = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const allNav = [
  { label: "Home", to: "/" },
  ...leftNav,
  ...rightNav,
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-5 md:px-8">
        {/* Left Nav — Desktop */}
        <nav className="hidden lg:flex items-center gap-10 flex-1">
          {leftNav.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Center Logo */}
        <Link
          to="/"
          className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-foreground text-center whitespace-nowrap uppercase"
          style={{ letterSpacing: "0.08em" }}
        >
          First & Third
          <br className="hidden sm:block" />
          <span className="hidden sm:inline text-base md:text-lg">Designs</span>
          <span className="sm:hidden"> Designs</span>
        </Link>

        {/* Right Nav — Desktop */}
        <nav className="hidden lg:flex items-center gap-10 flex-1 justify-end">
          {rightNav.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-5 py-6 gap-4">
            {allNav.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold uppercase tracking-[0.15em] transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
              onClick={() => setMobileOpen(false)}
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
