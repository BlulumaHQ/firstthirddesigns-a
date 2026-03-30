import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InstagramStrip from "@/components/InstagramStrip";
import CtaBanner from "@/components/CtaBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const caseStudies = [
  {
    name: "DripNeedle Med Spa",
    struggle: "Can my website feel like my in-person experience?",
    solution:
      "By building a brand experience, not just a website. We elevated her visual design, restructured her service flow, and spotlighted her expertise to create a digital presence that feels premium, professional, and unmistakably DripNeedle. Now, her site communicates the high-touch, results-driven care she's known for.",
    featured: "https://static.showit.co/1600/FCEBECixG_oi_9Es4VArjA/235620/20.png",
    images: [
      "https://static.showit.co/1200/fG4m4xKxTJAPV1rx4ZMn4Q/235620/mock_ups.png",
      "https://static.showit.co/1200/n6H7Rj05r5Z0700SG0gu0A/235620/21.png",
    ],
  },
  {
    name: "Klover Beauty",
    struggle: "I have the vision — now how do I make it real?",
    solution:
      "Klover had the colors, vibe, and vision — but needed help pulling it all together. We created a beauty brand website design that turned her inspiration into a cohesive, elevated, and functional site. The result? A website that finally brings her fairytale vision to life.",
    featured: "https://static.showit.co/1200/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg",
    images: [
      "https://static.showit.co/800/mu0nYeT5aYHJ_YWfTNiy4w/235620/4.png",
      "https://static.showit.co/800/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png",
    ],
  },
  {
    name: "Cait Designs",
    struggle: "How do I make time for my own website?",
    solution:
      "Like many creatives, Cait was so focused on her clients that her own site sat unfinished. We designed a Showit website that showcases her portfolio, organizes her services, and captures her artistic personality. The result is a polished site that finally feels like the creative home her brand deserves.",
    featured: "https://static.showit.co/1200/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg",
    images: [
      "https://static.showit.co/800/Q3lo-QOdKEvqGw6irMREkA/235620/33.png",
      "https://static.showit.co/800/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png",
    ],
  },
  {
    name: "KC Childcare",
    struggle: "How do I launch my first website?",
    solution:
      "As a new business, KC Childcare needed a first website that struck the balance between professional and playful. We designed a family-friendly site with clear program details, welcoming visuals, and local SEO to help parents find and trust them. The result is an informative site that feels approachable and parent-approved.",
    featured: "https://static.showit.co/1200/X3FXO9qBpvZEabMNuQbLhA/235620/screencapture-firstandthirddesigns-63-showitpreview-home-2025-09-08-15_02_40.png",
    images: [],
  },
  {
    name: "Chestertown Farmers Market",
    struggle: "How do we get more traffic?",
    solution:
      "Their old website wasn't pulling in visitors the way the Saturday market does. We built a refreshed nonprofit website design with vendor highlights, event updates, and a newsletter signup to bring more eyes (and feet) to the market. Now their digital presence matches the energy of downtown on market day.",
    featured: "",
    images: [],
  },
  {
    name: "Wryly Edits",
    struggle: "Why does building my own site feel so overwhelming?",
    solution:
      "Wryly started building her own site but quickly realized it didn't feel cohesive or aligned with her new business journey. We stepped in to create a professional Showit website design with clean navigation, strategic SEO, and a layout that reflects her witty, approachable voice. Now her online presence feels effortless and client-ready.",
    featured: "",
    images: [],
  },
];

const Portfolio = () => {
  return (
    <>
      {/* Hero — Full-width image background matching source */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://static.showit.co/1600/MQIJA2ySuQuyAiry9mNTaw/235620/pexels-merilisdayoff-18204711.jpg"
          alt="Portfolio hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/25" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] text-white"
          >
            From Struggle to Solution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 text-base md:text-lg italic text-white/90 font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            Every brand has a story — this is where frustration turned into
            function, and ideas became reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10"
          >
            <Link
              to="/service"
              className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.18em]"
            >
              Learn About Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Studies — Editorial stacked layout */}
      {caseStudies.map((study, i) => {
        const isEven = i % 2 === 0;
        const hasImages = study.featured || study.images.length > 0;

        return (
          <section
            key={study.name}
            className={`py-24 md:py-32 ${isEven ? "hero-bg" : ""}`}
          >
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
              {/* Two-column layout: image + content */}
              <div
                className={`grid grid-cols-1 ${hasImages ? "lg:grid-cols-2" : ""} gap-12 lg:gap-20 items-start`}
              >
                {/* Image side */}
                <motion.div
                  className={`${!isEven && hasImages ? "lg:order-2" : ""}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={0}
                  variants={fadeUp}
                >
                  {study.featured ? (
                    <div className="space-y-5">
                      {/* Featured large image */}
                      <div className="overflow-hidden rounded-sm">
                        <img
                          src={study.featured}
                          alt={`${study.name} — featured project`}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                      {/* Supporting images grid */}
                      {study.images.length > 0 && (
                        <div
                          className={`grid ${study.images.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-4`}
                        >
                          {study.images.map((img, j) => (
                            <div key={j} className="overflow-hidden rounded-sm">
                              <img
                                src={img}
                                alt={`${study.name} mockup ${j + 1}`}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : !hasImages ? null : (
                    <div className="aspect-[4/3] bg-muted rounded-sm flex items-center justify-center">
                      <span className="font-heading text-2xl text-muted-foreground/40 italic">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Content side */}
                <motion.div
                  className={`${!isEven && hasImages ? "lg:order-1" : ""} ${!hasImages ? "lg:col-span-1 max-w-2xl mx-auto text-center" : ""}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={1}
                  variants={fadeUp}
                >
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-8 leading-tight">
                    {study.name}
                  </h2>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-muted-foreground">
                      Struggle:
                    </h4>
                    <p className="font-heading text-xl md:text-2xl italic leading-relaxed opacity-90">
                      {study.struggle}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-muted-foreground">
                      Solution:
                    </h4>
                    <p className="text-base md:text-[1.05rem] leading-[1.8] text-muted-foreground">
                      {study.solution}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Blog Teaser */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="overflow-hidden rounded-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <img
              src="https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg"
              alt="Blog inspiration"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <p className="text-base md:text-[1.05rem] leading-[1.8] text-muted-foreground mb-8">
              If you've ever felt like you're building your business in the
              in-between moments, Splenda Mama Hustle is the place for you. Our
              blog was made for women juggling life and ambition — dive in, feel
              seen, and get the kind of support you actually need.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.18em]"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />

      {/* Instagram Strip */}
      <InstagramStrip />
    </>
  );
};

export default Portfolio;
