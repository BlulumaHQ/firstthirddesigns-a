import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import InstagramStrip from "@/components/InstagramStrip";
import CtaBanner from "@/components/CtaBanner";

const WebsiteInADay = () => {
  return (
    <>
      <section className="hero-bg section-padding">
        <div className="container mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 block"
          >
            Connect
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Website in a Day
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-85 max-w-2xl mx-auto leading-relaxed"
          >
            A focused, stress-free design experience for the entrepreneur who's ready to launch without waiting months.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading
              eyebrow="Perfect For"
              title="Who This Is For"
              centered={false}
            />
            <p className="text-muted-foreground leading-relaxed">
              Businesses that already have their branding in place and want a strategic, done-for-you website built in one stress-free day — no endless emails, no dragged-out timelines.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">What You Get:</h3>
            <ul className="space-y-4">
              {[
                "7-10 page Showit website",
                "2 Business Calls — AM for the vibe check, PM to make the moves and launch",
                "Client Portal for Easy Uploads",
                "Copy Guide",
                "Basic SEO Setup",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-warm-bg section-padding">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="font-heading text-2xl md:text-3xl italic text-secondary mb-4">
            A streamlined process, smart strategy, and a finished website — all in one high-energy day.
          </h3>
          <p className="text-muted-foreground text-lg mb-8">
            Your business deserves a website that works as hard as you do.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      <CtaBanner />
      <InstagramStrip />
    </>
  );
};

export default WebsiteInADay;
