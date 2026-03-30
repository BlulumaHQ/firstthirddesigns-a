import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const Index = () => {
  return (
    <>
      {/* Hero - Split layout inspired by style reference */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        <div className="hero-bg flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-0 relative overflow-hidden">
          {/* Subtle botanical decoration */}
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-hero-foreground/10 opacity-30" />
          <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full border border-hero-foreground/10 opacity-20" />
          <motion.div
            className="relative z-10 max-w-lg"
            initial="hidden"
            animate="visible"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 block"
            >
              Brand & Web Design
            </motion.span>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]"
            >
              For Women Building The Life They{" "}
              <em className="italic">Promised</em> Themselves
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-6 text-base md:text-lg leading-relaxed opacity-85 max-w-md"
            >
              We help passion-driven female entrepreneurs turn their story, their strategy, and their vision into a brand people connect with.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity"
              >
                Let's Make It Happen
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold border border-hero-foreground/30 text-hero-foreground rounded hover:bg-hero-foreground/10 transition-colors"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="hidden lg:block relative">
          <img
            src="https://static.showit.co/1200/W2_TQkY3XrZi3Drh3tpe2w/235620/corinne-kutz-omftdpbbfxe-unsplash.jpg"
            alt="Creative workspace for brand design"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Create / Empower / Connect */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading eyebrow="What We Do" title="Create. Empower. Connect." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Create",
                desc: "It's time for a new chapter in your business — one that brings more clarity, confidence, and a lot less guessing.",
                img: "https://static.showit.co/400/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png",
              },
              {
                title: "Empower",
                desc: "You're starting from scratch or your current brand hasn't kept up with the business you've built. Time to fix that.",
                img: "https://static.showit.co/400/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png",
              },
              {
                title: "Connect",
                desc: "A start-to-finish brand and website experience designed to support growth and credibility.",
                img: "https://static.showit.co/400/mu0nYeT5aYHJ_YWfTNiy4w/235620/4.png",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="aspect-[4/3] overflow-hidden rounded mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Vibe With */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Our People"
              title="Who We Vibe With"
              description="Coaches, creatives, educators, service providers, unconventional business owners and those who get asked 'so when are you getting a real job' by their mother-in-laws."
              centered={false}
            />
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our approach is simple: meaningful storytelling, thoughtful strategy, and a design experience that feels like catching up with old friends — real conversations, honest feedback, and a space where your vision actually gets to breathe.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded">
            <img
              src="https://static.showit.co/800/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg"
              alt="Women collaborating on brand design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Our Services"
            title="It Takes Two to Make a Thing Go Right"
            description="Websites with purpose. Brands with soul."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded p-8 flex flex-col"
              >
                <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
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

      {/* CTA Section */}
      <section className="hero-bg section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-balance">
            Are you ready for your business to be fully booked, wildly profitable, and everything you always knew it could be?
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            We believe in you, now it's your turn.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity"
          >
            Let's Do The Damn Thing
          </Link>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="section-warm-bg section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded">
            <img
              src="https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg"
              alt="Blog inspiration for female entrepreneurs"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="The Blog"
              title="Smarter Not Harder"
              description="If you've ever felt like you're building your business in the in-between moments, Splenda Mama Hustle is the place for you. Our blog was made for women juggling life and ambition."
              centered={false}
            />
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
