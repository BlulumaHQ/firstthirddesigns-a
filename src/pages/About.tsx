import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
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
            Meet Your Designers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Two Sisters Designing for Women Who Are Done Dimming Their Light
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-85 max-w-2xl mx-auto leading-relaxed"
          >
            We help passion-driven female entrepreneurs turn their story, their strategy, and their vision into a brand people connect with.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] overflow-hidden rounded">
            <img
              src="https://static.showit.co/800/Q3lo-QOdKEvqGw6irMREkA/235620/33.png"
              alt="First & Third Designs founders"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Faking It Till We Make It, Together"
              centered={false}
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our approach is simple: meaningful storytelling, thoughtful strategy, and a design experience that feels like catching up with old friends — real conversations, honest feedback, and a space where your vision actually gets to breathe.
              </p>
              <p>
                No perfection pressure. No jargon. Just work rooted in authenticity, community, and the life you're building on your own terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Talk */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto">
          <SectionHeading
            eyebrow="Real Talk"
            title="Do It for Her"
            description="It's time for a new chapter in your business — one that brings more clarity, confidence, and a lot less guessing, overthinking, and trying to piece things together on your own."
          />
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity"
            >
              We Dare You to Invest in Yourself
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading eyebrow="What Drives Us" title="You Got This" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Authenticity", desc: "We design with honesty, never hiding behind trends or templates." },
              { title: "Community", desc: "Your brand is built in collaboration — with us, and with the community you serve." },
              { title: "Empowerment", desc: "Every design choice is meant to give you confidence to show up fully in your business." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded p-8 text-center"
              >
                <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
