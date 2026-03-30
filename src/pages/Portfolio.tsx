import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const portfolioItems = [
  {
    title: "Brand Identity & Web Design",
    category: "Branding + Website",
    img: "https://static.showit.co/400/X3FXO9qBpvZEabMNuQbLhA/235620/screencapture-firstandthirddesigns-63-showitpreview-home-2025-09-08-15_02_40.png",
  },
  {
    title: "Floral Studio Rebrand",
    category: "Branding",
    img: "https://static.showit.co/400/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png",
  },
  {
    title: "Event Space Website",
    category: "Website Design",
    img: "https://static.showit.co/400/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png",
  },
  {
    title: "Creative Business Branding",
    category: "Brand & Web Design",
    img: "https://static.showit.co/400/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg",
  },
];

const Portfolio = () => {
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
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Cue the Happy Tears
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-85 max-w-2xl mx-auto leading-relaxed"
          >
            A glimpse into the stories we've brought to life — always intentional, always rooted in the identity and impact of the women behind the brand.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{item.category}</span>
                <h3 className="font-heading text-xl font-semibold mt-1">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-bg section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Ready to see your brand here?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity"
          >
            Let's Make It Happen
          </Link>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
