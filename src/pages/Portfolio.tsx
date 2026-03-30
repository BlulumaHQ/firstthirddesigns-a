import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import InstagramStrip from "@/components/InstagramStrip";
import CtaBanner from "@/components/CtaBanner";

const caseStudies = [
  {
    name: "DripNeedle Med Spa",
    struggle: "Can my website feel like my in-person experience?",
    solution: "By building a brand experience, not just a website. We elevated her visual design, restructured her service flow, and spotlighted her expertise to create a digital presence that feels premium, professional, and unmistakably DripNeedle. Now, her site communicates the high-touch, results-driven care she's known for.",
    images: [
      "https://static.showit.co/800/FCEBECixG_oi_9Es4VArjA/235620/20.png",
      "https://static.showit.co/800/fG4m4xKxTJAPV1rx4ZMn4Q/235620/mock_ups.png",
      "https://static.showit.co/800/n6H7Rj05r5Z0700SG0gu0A/235620/21.png",
    ],
  },
  {
    name: "Klover Beauty",
    struggle: "I have the vision — now how do I make it real?",
    solution: "Klover had the colors, vibe, and vision — but needed help pulling it all together. We created a beauty brand website design that turned her inspiration into a cohesive, elevated, and functional site. The result? A website that finally brings her fairytale vision to life.",
    images: [],
  },
  {
    name: "Cait Designs",
    struggle: "How do I make time for my own website?",
    solution: "Like many creatives, Cait was so focused on her clients that her own site sat unfinished. We designed a Showit website that showcases her portfolio, organizes her services, and captures her artistic personality. The result is a polished site that finally feels like the creative home her brand deserves.",
    images: [],
  },
  {
    name: "KC Childcare",
    struggle: "How do I launch my first website?",
    solution: "As a new business, KC Childcare needed a first website that struck the balance between professional and playful. We designed a family-friendly site with clear program details, welcoming visuals, and local SEO to help parents find and trust them. The result is an informative site that feels approachable and parent-approved.",
    images: [],
  },
  {
    name: "Chestertown Farmers Market",
    struggle: "How do we get more traffic?",
    solution: "Their old website wasn't pulling in visitors the way the Saturday market does. We built a refreshed nonprofit website design with vendor highlights, event updates, and a newsletter signup to bring more eyes (and feet) to the market. Now their digital presence matches the energy of downtown on market day.",
    images: [],
  },
  {
    name: "Wryly Edits",
    struggle: "Why does building my own site feel so overwhelming?",
    solution: "Wryly started building her own site but quickly realized it didn't feel cohesive or aligned with her new business journey. We stepped in to create a professional Showit website design with clean navigation, strategic SEO, and a layout that reflects her witty, approachable voice. Now her online presence feels effortless and client-ready.",
    images: [],
  },
];

const Portfolio = () => {
  return (
    <>
      {/* Hero — Full-width image background */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <img
          src="https://static.showit.co/200/MQIJA2ySuQuyAiry9mNTaw/235620/pexels-merilisdayoff-18204711.jpg"
          alt="Portfolio hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white"
          >
            From Struggle to Solution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-base md:text-lg italic text-white/90 font-semibold max-w-2xl mx-auto"
          >
            Every brand has a story — this is where frustration turned into function, and ideas became reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Link
              to="/service"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
            >
              Learn About Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, i) => (
        <section
          key={study.name}
          className={`section-padding ${i % 2 === 0 ? "hero-bg" : ""}`}
        >
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images / Visual side */}
            <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
              {study.images.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {study.images.map((img, j) => (
                    <div key={j} className="overflow-hidden rounded">
                      <img
                        src={img}
                        alt={`${study.name} project mockup ${j + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aspect-[4/3] overflow-hidden rounded bg-muted flex items-center justify-center">
                  <span className="font-heading text-2xl text-muted-foreground/50 italic">Project Preview</span>
                </div>
              )}
            </div>

            {/* Content side */}
            <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">{study.name}</h2>
              <div className="mb-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-2">Struggle:</h4>
                <p className="font-heading text-xl md:text-2xl italic leading-relaxed opacity-90">
                  {study.struggle}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-2">Solution:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Blog Teaser */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded">
            <img
              src="https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg"
              alt="Blog inspiration"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
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

      {/* CTA */}
      <CtaBanner />

      {/* Instagram Strip */}
      <InstagramStrip />
    </>
  );
};

export default Portfolio;
