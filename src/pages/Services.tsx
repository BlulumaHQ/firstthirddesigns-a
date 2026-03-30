import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "Branding",
    desc: "You're starting from scratch or your current brand hasn't kept up with the business you've built. Time to fix that.",
    link: "/service",
  },
  {
    title: "Website in a Week",
    desc: "A fully custom, website built and launched in a single day—without the overwhelm.",
    link: "/website-in-a-week",
  },
  {
    title: "Branding + Website",
    desc: "A start-to-finish brand and website experience designed to support growth and credibility.",
    link: "/service",
  },
  {
    title: "Brand & Web Design",
    desc: "A complete brand and web design package for businesses ready to elevate every touchpoint of their online presence.",
    link: "/service",
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg section-padding">
        <div className="container mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 block"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Websites with Purpose
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-85 max-w-2xl mx-auto leading-relaxed"
          >
            It takes two to make a thing go right. We bring the strategy and design — you bring the passion.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded p-10 flex flex-col"
              >
                <h3 className="font-heading text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{service.desc}</p>
                <Link
                  to={service.link}
                  className="text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-warm-bg section-padding">
        <div className="container mx-auto text-center">
          <SectionHeading
            title="Are you ready for your business to be fully booked, wildly profitable, and everything you always knew it could be?"
          />
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity"
          >
            Let's Do The Damn Thing
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
