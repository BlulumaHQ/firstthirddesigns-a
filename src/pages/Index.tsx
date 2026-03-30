import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import InstagramStrip from "@/components/InstagramStrip";
import CtaBanner from "@/components/CtaBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const Index = () => {
  return (
    <>
      {/* Hero — Full-width image with overlaid card (matching source) */}
      <section className="relative min-h-[85vh] flex items-center">
        <img
          src="https://static.showit.co/1200/W2_TQkY3XrZi3Drh3tpe2w/235620/corinne-kutz-omftdpbbfxe-unsplash.jpg"
          alt="Creative workspace for brand design"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="relative z-10 w-full flex justify-end px-6 md:px-12 lg:px-20">
          <motion.div
            className="bg-background/95 backdrop-blur-sm p-10 md:p-14 lg:p-16 max-w-xl rounded shadow-lg"
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
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-foreground"
            >
              For Women Building The Life They{" "}
              <em className="italic">Promised</em> Themselves
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-5 text-base leading-relaxed text-muted-foreground tracking-wide"
            >
              We help passion-driven female entrepreneurs turn their story, their strategy, and their vision into a brand people connect with.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
              >
                Let's Make It Happen
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Do it for Her — Script section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl italic text-secondary/80 mb-6">
            Do it for Her
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base md:text-lg tracking-wide">
            It's time for a new chapter in your business — one that brings more clarity, confidence, and a lot less guessing, overthinking, and trying to piece things together on your own.
          </p>
        </div>
      </section>

      {/* Create / Empower / Connect — Cards with images */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                label: "Create",
                title: "Branding",
                desc: "You're starting from scratch or your current brand hasn't kept up with the business you've built. Time to fix that.",
                img: "https://static.showit.co/400/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png",
              },
              {
                label: "Empower",
                title: "Website in a Week",
                desc: "A fully custom, website built and launched in a single day — without the overwhelm.",
                img: "https://static.showit.co/400/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png",
              },
              {
                label: "Connect",
                title: "Branding + Website",
                desc: "A start-to-finish brand and website experience designed to support growth and credibility.",
                img: "https://static.showit.co/400/mu0nYeT5aYHJ_YWfTNiy4w/235620/4.png",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="aspect-[4/3] overflow-hidden rounded mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-2">{item.label}</h3>
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Vibe With */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-muted-foreground text-sm tracking-wide block mb-2">
              Coaches, creatives, educators, service providers, unconventional business owners and those who get asked "<em>so when are you getting a real job</em>" by their mother-in-laws.
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 leading-tight">
              Who We Vibe With
            </h2>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
            >
              Meet Your Designers
            </Link>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              Our approach is simple: meaningful storytelling, thoughtful strategy, and a design experience that feels like catching up with old friends — real conversations, honest feedback, and a space where your vision actually gets to breathe.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              No perfection pressure. No jargon. Just work rooted in authenticity, community, and the life you're building on your own terms.
            </p>
            <p className="mt-4 text-sm font-semibold text-secondary">
              Two sisters designing for women who are done dimming their light
            </p>
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

      {/* It Takes Two — Services Preview with portfolio image */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded">
            <img
              src="https://static.showit.co/400/X3FXO9qBpvZEabMNuQbLhA/235620/screencapture-firstandthirddesigns-63-showitpreview-home-2025-09-08-15_02_40.png"
              alt="Website portfolio preview"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="It takes two to make a thing go right"
              title="Websites with Purpose"
              description="A glimpse into the stories we've brought to life — always intentional, always rooted in the identity and impact of the women behind the brand."
              centered={false}
            />
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold border border-foreground/30 text-foreground rounded hover:bg-foreground/5 transition-colors uppercase tracking-[0.15em]"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="section-warm-bg section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Our Client's Are Spilling the Tea</h2>
          <p className="font-heading text-xl md:text-2xl italic text-secondary mb-8">Cue the happy Tears..</p>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBanner />

      {/* Blog Teaser */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded">
            <img
              src="https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg"
              alt="Blog inspiration for female entrepreneurs"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-heading text-lg italic text-secondary block mb-1">Faking it till we make it, Together</span>
            <span className="font-heading text-lg italic text-secondary block mb-1">Real talk</span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground block mb-1">Smarter Not Harder</span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground block mb-1">You Got This</span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground block mb-1">Hustle Hotline</span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground block mb-4">Features</span>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you've ever felt like you're building your business in the in-between moments, Splenda Mama Hustle is the place for you. Our blog was made for women juggling life and ambition — dive in, feel seen, and get the kind of support you actually need.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Strip */}
      <InstagramStrip />
    </>
  );
};

export default Index;
