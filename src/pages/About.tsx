import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import InstagramStrip from "@/components/InstagramStrip";
import CtaBanner from "@/components/CtaBanner";

const About = () => {
  return (
    <>
      {/* Hero — Full-width background image with text overlay */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <img
          src="https://static.showit.co/1600/Ei1D7MN2x1K-EuFY5W4gTg/235620/pexels-karola-g-7607459.jpg"
          alt="Botanical still life with pampas grass"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
          >
            Where story meets strategy — and your brand finally feels like it has direction.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-sm md:text-base uppercase tracking-[0.2em] text-white/90 font-semibold"
          >
            Web design for passion-driven female entrepreneurs ready to grow with clarity and confidence.
          </motion.p>
        </div>
      </section>

      {/* Trusted by Women — Text + Image */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-2">
              Trusted By Women Who Want Branding
            </h2>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6">
              Rooted in Purpose, Personality, and Potential.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We started this studio because we know what it feels like to build something from scratch — to dream bigger than your circumstances, to navigate the "figure-it-out" era, and finally get the dream life they have always wanted.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe in brands built from real stories, honest conversations, and the kind of intentional design that creates connection, trust, and momentum.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You don't need perfection or a ten-step master plan. You need a space where your voice is heard, your vision actually matters, and your website finally supports the future you've been working toward.
            </p>
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded">
            <img
              src="https://static.showit.co/800/Q3lo-QOdKEvqGw6irMREkA/235620/33.png"
              alt="First & Third Designs founders"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Honest Truths */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-2">Honest Truths</h2>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-8">
              We Full Heartedly Believe
            </h3>
            <ul className="space-y-4">
              {[
                "Women who hustle deserve websites that work for them.",
                "Authenticity always beats aesthetic.",
                "Strategy is the foundation — design is the amplifier.",
                "Your younger self would be proud of the woman you are becoming.",
              ].map((truth, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <p className="text-foreground leading-relaxed">{truth}</p>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
              >
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded">
            <img
              src="https://static.showit.co/400/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg"
              alt="Creative workspace details"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Websites with Purpose — Features */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="Websites with Purpose"
            description="A glimpse into the stories we've brought to life — always intentional, always rooted in the identity and impact of the women behind the brand."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Speed with Intention",
                desc: "Web design doesn't need to take months. Our fast-paced processes (Website in a Day + Website in a Week) gives you clarity, structure, and the freedom to show up now — not someday.",
              },
              {
                title: "Collaboration Over Complication",
                desc: "We listen, ask questions, and design through conversation. The best brands are built from stories, not endless revisions.",
              },
              {
                title: "Semi-Custom Templates with Strategy",
                desc: "You don't need a custom-from-scratch build to stand out. You need thoughtful layouts, clear messaging, and design choices rooted in psychology, not guesswork.",
              },
              {
                title: "Transparent Communication",
                desc: "No disappearing acts. No chaos. You always know what's happening and what comes next.",
              },
              {
                title: "Client Experience First",
                desc: "You're used to taking care of everyone else. When you're here, we take care of you.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded p-8"
              >
                <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/service"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work — Services */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto">
          <SectionHeading title="How We Work" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Create",
                title: "Branding",
                desc: "You're starting from scratch or your current brand hasn't kept up with the business you've built. Time to fix that.",
              },
              {
                label: "Empower",
                title: "Website in a Week",
                desc: "A fully custom, website built and launched in a single day — without the overwhelm.",
              },
              {
                label: "Connect",
                title: "Branding + Website",
                desc: "A start-to-finish brand and website experience designed to support growth and credibility.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="font-heading text-3xl font-semibold mb-2">{item.label}</h3>
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />

      {/* Instagram Strip */}
      <InstagramStrip />
    </>
  );
};

export default About;
