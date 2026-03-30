import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

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
            Service
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
            A fully custom website built and launched in a single day — without the overwhelm.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="What's Included"
            title="Everything You Need, In One Day"
            description="No dragging it out. No back-and-forth for months. Just a beautiful, functional website ready to go."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Custom design tailored to your brand",
              "Mobile responsive across all devices",
              "SEO-ready structure and setup",
              "Contact form integration",
              "Up to 5 pages fully designed",
              "Launch-day support and handoff",
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <p className="text-foreground">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-warm-bg section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Stop waiting. Start launching.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Your business deserves a website that works as hard as you do.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </>
  );
};

export default WebsiteInADay;
