import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InstagramStrip from "@/components/InstagramStrip";
import CtaBanner from "@/components/CtaBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const categories = [
  { label: "Real Talk", emoji: "💬" },
  { label: "Smarter Not Harder", emoji: "🧠" },
  { label: "You Got This", emoji: "✨" },
  { label: "Hustle Hotline", emoji: "📞" },
];

const featuredPost = {
  title: "She Didn't Wait for Permission — And Neither Should You",
  excerpt:
    "The women who build extraordinary businesses aren't the ones who had it all figured out. They're the ones who started before they felt ready. Here's what I learned from watching my clients bet on themselves.",
  category: "Real Talk",
  date: "March 2025",
  img: "https://static.showit.co/1600/W2_TQkY3XrZi3Drh3tpe2w/235620/corinne-kutz-omftdpbbfxe-unsplash.jpg",
};

const blogPosts = [
  {
    title: "How to Build a Brand That Actually Feels Like You",
    excerpt:
      "Stop following trends that don't match your energy. Here's how to create a brand identity that resonates deeply with your ideal clients — and feels like home every time you show up.",
    category: "Smarter Not Harder",
    date: "March 2025",
    img: "https://static.showit.co/1200/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg",
  },
  {
    title: "5 Signs It's Time to Burn It Down and Rebrand",
    excerpt:
      "Your website should grow with you. If you cringe every time someone asks for your link, it might be time for a fresh start — and that's a beautiful thing.",
    category: "Real Talk",
    date: "February 2025",
    img: "https://static.showit.co/1200/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png",
  },
  {
    title: "The Power of Showing Up Imperfectly",
    excerpt:
      "Perfectionism is the enemy of progress. Here's why done is better than perfect when you're building your dream business — and why your audience loves the real you.",
    category: "You Got This",
    date: "January 2025",
    img: "https://static.showit.co/1200/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png",
  },
  {
    title: "Why Your 'About' Page Is Actually Your Sales Page",
    excerpt:
      "Most entrepreneurs hide behind their services. But your story? That's what makes people choose you. Let's talk about writing an About page that converts.",
    category: "Smarter Not Harder",
    date: "December 2024",
    img: "https://static.showit.co/1200/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg",
  },
  {
    title: "The Sunday Reset That Changed My Business",
    excerpt:
      "I used to dread Mondays. Now I spend 30 minutes on Sundays planning a week that actually excites me. Here's exactly what I do and why it works.",
    category: "Hustle Hotline",
    date: "November 2024",
    img: "https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg",
  },
  {
    title: "What Nobody Tells You About Your First Year in Business",
    excerpt:
      "It's messy. It's lonely sometimes. And it's the most transformative thing you'll ever do. A love letter to every woman in year one.",
    category: "You Got This",
    date: "October 2024",
    img: "https://static.showit.co/1200/MQIJA2ySuQuyAiry9mNTaw/235620/pexels-merilisdayoff-18204711.jpg",
  },
];

const Blog = () => {
  return (
    <>
      {/* ── HERO: Featured Post ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src={featuredPost.img}
          alt={featuredPost.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-5 md:px-8 pb-16 md:pb-24 max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-white/80 mb-4 border border-white/30 px-4 py-1.5 rounded-full"
          >
            {featuredPost.category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-5"
          >
            {featuredPost.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-white/85 leading-relaxed mb-6 max-w-xl"
          >
            {featuredPost.excerpt}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/50 pb-0.5 hover:border-white transition-colors cursor-pointer">
              Read the Full Story <span aria-hidden>→</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-12 md:py-16 px-5 md:px-8 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300 flex items-center gap-2"
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3 block"
            >
              Hustle Hotline
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold"
            >
              Stories, Strategy & Soul
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden rounded mb-5">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-heading text-xl md:text-[1.35rem] font-semibold leading-snug mb-3 group-hover:text-secondary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-[0.95rem] leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-sm font-semibold text-foreground border-b border-foreground/30 self-start pb-0.5 group-hover:border-secondary group-hover:text-secondary transition-colors duration-300">
                  Read More →
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY MESSAGE ── */}
      <section className="section-warm-bg section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4 block"
            >
              More Than a Blog
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl font-semibold mb-6"
            >
              Built by Women Who Get It
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4"
            >
              This isn't just content — it's a conversation. Every post is written for the woman
              who's building something real between school pickups, late-night launches, and the
              voice in her head that says "who do you think you are?"
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              We see you. We are you. And this space was made so you never have to hustle alone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CtaBanner />

      {/* ── INSTAGRAM ── */}
      <InstagramStrip />
    </>
  );
};

export default Blog;
