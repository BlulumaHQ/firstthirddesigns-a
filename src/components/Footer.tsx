import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto section-padding">
        {/* Desktop 5-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl font-semibold mb-4">First & Third Designs</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Two sisters designing for women who are done dimming their light.
            </p>
          </div>

          {/* Column 2: Empty spacer */}
          <div className="hidden md:block" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Navigate</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">About</Link>
              <Link to="/service" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Services</Link>
              <Link to="/portfolio" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Portfolio</Link>
            </nav>
          </div>

          {/* Column 4: Secondary links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Explore</h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/blog" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Blog</Link>
              <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
              <Link to="/website-in-a-week" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Website in a Week</Link>
              <Link to="/website-in-a-day" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Website in a Day</Link>
            </nav>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Connect</h4>
            <p className="text-sm opacity-70 leading-relaxed">
              Follow @firstandthirddesigns
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 text-sm font-semibold opacity-90 hover:opacity-100 transition-opacity underline underline-offset-4"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-center gap-1 text-center">
          <span className="text-xs opacity-50">
            © {year} First & Third Designs. All rights reserved. |{" "}
            Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 underline">
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 underline">
              SwiftLift
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
