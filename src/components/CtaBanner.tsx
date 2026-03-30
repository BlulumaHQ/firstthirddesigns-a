import { Link } from "react-router-dom";

const CtaBanner = () => (
  <section className="hero-bg section-padding">
    <div className="container mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-balance leading-tight">
        Are you ready for your business to be{" "}
        <em className="italic">fully booked, wildly profitable</em>, and{" "}
        <em className="italic">everything</em> you always knew it could be?
      </h2>
      <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
        We believe in you, now it's your turn.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
      >
        Let's Do The Damn Thing
      </Link>
    </div>
  </section>
);

export default CtaBanner;
