import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import projects from "@/data/portfolioProjects";
import CtaBanner from "@/components/CtaBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <img
          src={project.hero}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            {project.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-3 text-lg text-white/85 italic max-w-2xl"
          >
            {project.tagline}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg md:text-xl leading-relaxed text-muted-foreground"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className={`grid gap-6 ${project.gallery.length === 1 ? "grid-cols-1 max-w-3xl mx-auto" : "grid-cols-1 md:grid-cols-2"}`}>
              {project.gallery.map((img, j) => (
                <motion.div
                  key={j}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="overflow-hidden rounded-sm"
                >
                  <img
                    src={img}
                    alt={`${project.name} — detail ${j + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
};

export default ProjectDetail;
