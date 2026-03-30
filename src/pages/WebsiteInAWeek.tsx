import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import InstagramStrip from "@/components/InstagramStrip";
import CtaBanner from "@/components/CtaBanner";

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
            Empower
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Branding + Website in a Week
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-85 max-w-2xl mx-auto leading-relaxed"
          >
            This is a full brand and website refresh completed in one focused, strategic week.
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
              This offer is for businesses that have grown past their current branding and need both their brand and website to catch up. Whether you've been piecing things together or your visuals no longer match the level you're at, this is about realignment — not starting over, but evolving forward.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">What You Get:</h3>
            <ul className="space-y-4">
              {[
                "8-Page Custom Showit Website",
                "SEO Research & Strategy",
                "3 Business Calls Throughout the Week",
                "Mobile Optimization",
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

      <CtaBanner />
      <InstagramStrip />
    </>
  );
};

export default WebsiteInAWeek;
