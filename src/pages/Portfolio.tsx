import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "@/data/portfolioProjects";
import InstagramStrip from "@/components/InstagramStrip";
import CtaBanner from "@/components/CtaBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Portfolio = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://static.showit.co/1600/MQIJA2ySuQuyAiry9mNTaw/235620/pexels-merilisdayoff-18204711.jpg"
        alt="Portfolio hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white"
        >
          Our Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-base md:text-lg text-white/90 italic font-medium max-w-xl mx-auto"
        >
          Every project starts with a struggle and ends with a solution.
        </motion.p>
      </div>
    </section>

    {/* Project Grid */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              variants={fadeUp}
            >
              <Link
                to={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-sm aspect-[4/3]">
                  <img
                    src={project.cover}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-5 font-heading text-xl md:text-2xl font-semibold group-hover:opacity-70 transition-opacity">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground italic">
                  {project.tagline}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CtaBanner />
    <InstagramStrip />
  </>
);

export default Portfolio;
