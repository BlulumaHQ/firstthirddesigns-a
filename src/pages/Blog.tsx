import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InstagramStrip from "@/components/InstagramStrip";
import CtaBanner from "@/components/CtaBanner";

const blogPosts = [
  {
    title: "How to Build a Brand That Actually Feels Like You",
    excerpt: "Stop following trends that don't match your energy. Here's how to create a brand identity that resonates deeply with your ideal clients.",
    category: "Branding",
    date: "March 2025",
    img: "https://static.showit.co/400/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg",
  },
  {
    title: "5 Signs It's Time for a Website Redesign",
    excerpt: "Your website should grow with you. If any of these feel familiar, it might be time for a fresh start.",
    category: "Web Design",
    date: "February 2025",
    img: "https://static.showit.co/400/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png",
  },
  {
    title: "The Power of Showing Up Imperfectly",
    excerpt: "Perfectionism is the enemy of progress. Here's why done is better than perfect when you're building your dream business.",
    category: "Mindset",
    date: "January 2025",
    img: "https://static.showit.co/400/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png",
  },
];

const Blog = () => {
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
            Hustle Hotline
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Smarter Not Harder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-85 max-w-2xl mx-auto leading-relaxed"
          >
            If you've ever felt like you're building your business in the in-between moments, Splenda Mama Hustle is the place for you.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded overflow-hidden flex flex-col group cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <span className="text-sm font-semibold text-primary hover:text-secondary transition-colors">
                    Read More →
                  </span>
                </div>
              </motion.article>
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

export default Blog;
