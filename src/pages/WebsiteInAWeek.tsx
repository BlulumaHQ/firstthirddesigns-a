import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const WebsiteInAWeek = () => {
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
            Website in a Week
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-85 max-w-2xl mx-auto leading-relaxed"
          >
            A fully custom, website built and launched in a single day — without the overwhelm.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="The Process"
            title="How It Works"
            description="We streamline the entire process so you can go from concept to launch without the months-long timeline."
          />
          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery Call", desc: "We learn about your business, vision, and goals to create a clear direction." },
              { step: "02", title: "Content & Strategy", desc: "We guide you through everything you need to prepare — copy, images, and brand direction." },
              { step: "03", title: "Design & Build", desc: "We design and develop your entire website in a focused, intensive build sprint." },
              { step: "04", title: "Launch Day", desc: "Your polished, professional website goes live — ready to convert and impress." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <span className="font-heading text-3xl font-bold text-secondary shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-bg section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Ready to launch your dream website?
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

export default WebsiteInAWeek;
