import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import InstagramStrip from "@/components/InstagramStrip";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const BulletItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
    <span className="text-muted-foreground text-base leading-relaxed">{children}</span>
  </li>
);

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg"
            alt="Premium workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-bg))]/90 via-[hsl(var(--hero-bg))]/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-5 md:px-8">
          <div className="max-w-2xl py-24">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-6"
            >
              Brand & Web Design for Women Entrepreneurs
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-[hsl(var(--hero-foreground))]"
            >
              You Are The Greatest Project You Will Ever Work On
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl leading-relaxed text-[hsl(var(--hero-foreground))]/85 max-w-xl"
            >
              Strategic brand and web design built in days, not months — so you can stop second-guessing your online presence and start booking the clients you deserve.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
              >
                Start Your Project
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold border border-[hsl(var(--hero-foreground))]/30 text-[hsl(var(--hero-foreground))] rounded hover:bg-[hsl(var(--hero-foreground))]/10 transition-colors uppercase tracking-[0.15em]"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — SERVICE PATHWAY INTRO
      ═══════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] overflow-hidden rounded">
              <img
                src="https://static.showit.co/400/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png"
                alt="Floral design work"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-4">
                Our Approach
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-6">
                Every Business Is at a Different Chapter — Your Service Should Match
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Whether you're launching for the first time, outgrowing a DIY brand, or ready for a complete evolution — we've designed three clear pathways so you get exactly what you need, exactly when you need it.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Each offer blends intentional storytelling, strategic design, and a stress-free process that respects your time and your energy.
              </p>
              <p className="font-heading text-xl italic text-secondary">
                No endless timelines. No guessing. Just clarity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — INDIVIDUAL SERVICE BLOCKS
      ═══════════════════════════════════════════ */}
      <div id="services">
        {/* — SERVICE A: Website In A Day — */}
        <section className="section-alt-bg section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-3">
                  Connect
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Website In A Day
                </h2>
                <p className="font-heading text-lg italic text-secondary mb-6">
                  One day. One website. Zero stress.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  A focused, high-energy design experience for the entrepreneur who already has her branding and is ready to launch without the months-long wait. We handle the strategy, the design, and the build — all in a single day.
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-2">Perfect For:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Businesses with existing branding who need a strategic, done-for-you website — no endless emails, no dragged-out timelines.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-3">
                    <BulletItem>7–10 page Showit website</BulletItem>
                    <BulletItem>2 Business Calls — AM vibe check, PM launch moves</BulletItem>
                    <BulletItem>Client Portal for Easy Uploads</BulletItem>
                    <BulletItem>Copy Guide</BulletItem>
                    <BulletItem>Basic SEO Setup</BulletItem>
                  </ul>
                </div>

                <div className="flex items-center gap-3 mb-8 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Timeline:</span> 1 Day
                </div>

                <Link
                  to="/website-in-a-day"
                  className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
                >
                  Learn More
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded">
                  <img
                    src="https://static.showit.co/800/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg"
                    alt="Woman working at her desk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded max-w-[200px] hidden lg:block">
                  <p className="font-heading text-lg font-semibold leading-snug">
                    "A streamlined process and a finished website — all in one day."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* — SERVICE B: Branding + Website — */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="order-2 lg:order-1"
              >
                <div className="aspect-[4/5] overflow-hidden rounded">
                  <img
                    src="https://static.showit.co/400/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png"
                    alt="Styled event space"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="order-1 lg:order-2"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-3">
                  Empower
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Branding + Website
                </h2>
                <p className="font-heading text-lg italic text-secondary mb-6">
                  A full brand and web experience — in one strategic week.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  This is for businesses that have grown past their current branding and need both their visuals and their website to catch up. Whether you've been piecing things together or your brand no longer matches the level you're at — this is about realignment, not starting over.
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-2">Perfect For:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Established businesses ready for a visual evolution that reflects where they're headed — not where they started.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-3">
                    <BulletItem>8-Page Custom Showit Website</BulletItem>
                    <BulletItem>SEO Research & Strategy</BulletItem>
                    <BulletItem>3 Business Calls Throughout the Week</BulletItem>
                    <BulletItem>Mobile Optimization</BulletItem>
                    <BulletItem>Brand Refresh & Visual Alignment</BulletItem>
                  </ul>
                </div>

                <div className="flex items-center gap-3 mb-8 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Timeline:</span> 1 Week
                </div>

                <Link
                  to="/website-in-a-week"
                  className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* — SERVICE C: Branding — */}
        <section className="section-alt-bg section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-3">
                  Create
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Branding
                </h2>
                <p className="font-heading text-lg italic text-secondary mb-6">
                  Your brand is the first impression — make it unforgettable.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Branding is what makes you recognizable, trustworthy, and memorable. It should reflect where you're going — not where you started. We build brand identities that feel aligned, elevated, and ready to attract the clients you actually want.
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-2">Perfect For:</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    You don't have branding yet, or you've completely outgrown what you currently have. Either way, it's time for something that matches your vision.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-3">
                    <BulletItem>90-Minute Strategy Call</BulletItem>
                    <BulletItem>Wordmark Logo Design</BulletItem>
                    <BulletItem>Color Palette & Typography System</BulletItem>
                    <BulletItem>Brand Positioning & Messaging Framework</BulletItem>
                    <BulletItem>1–2 Ideal Client Personas</BulletItem>
                    <BulletItem>Brand Guidelines Document</BulletItem>
                    <BulletItem>Canva Pro Setup + Loom Tutorial</BulletItem>
                  </ul>
                </div>

                <div className="flex items-center gap-3 mb-8 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Timeline:</span> 2 Weeks
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
                >
                  Let's Get Started
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
              >
                <div className="aspect-[4/5] overflow-hidden rounded">
                  <img
                    src="https://static.showit.co/400/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg"
                    alt="Brand design materials"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 4 — WHY THIS WORKS
      ═══════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-4">
              Why It Works
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-6">
              This Isn't Just Fast — It's Strategic
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Speed without strategy is just a rush job. Our process is built to move quickly because the thinking happens first — so every design decision is intentional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Strategy Before Visuals",
                desc: "We don't start designing until we understand your business, your audience, and your goals. Clarity comes first.",
              },
              {
                title: "Speed With Intention",
                desc: "Tight timelines keep momentum high and prevent decision fatigue. You get results, not endless revisions.",
              },
              {
                title: "Done-For-You Execution",
                desc: "No homework assignments or back-and-forth chaos. We handle the heavy lifting so you can focus on your business.",
              },
              {
                title: "Designed for Growth",
                desc: "Every brand and website we create is built to attract, convert, and scale — not just look pretty.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center p-8"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-5">
                  <span className="font-heading text-lg font-bold text-secondary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — WHAT TO EXPECT (PROCESS)
      ═══════════════════════════════════════════ */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-4">
              The Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-6">
              What to Expect When You Work With Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Our approach is simple: meaningful conversations, thoughtful strategy, and a design experience that feels like catching up with old friends.
            </p>
          </div>

          <div className="space-y-0">
            {[
              {
                step: "01",
                title: "Apply & Connect",
                desc: "Fill out our inquiry form and book a free discovery call. We'll talk about your vision, your goals, and which service pathway fits your stage of business.",
              },
              {
                step: "02",
                title: "Prep & Plan",
                desc: "Complete your brand questionnaire, upload your content through our client portal, and let us handle the copy guide and strategy prep.",
              },
              {
                step: "03",
                title: "Strategy Session",
                desc: "We kick off with a deep-dive strategy call — clarifying your positioning, messaging, and design direction before a single pixel is placed.",
              },
              {
                step: "04",
                title: "Design & Build",
                desc: "We design and build your brand, website, or both — with real-time check-ins so you're never left wondering what's happening.",
              },
              {
                step: "05",
                title: "Launch & Celebrate",
                desc: "Your site goes live, you get tutorial videos and resource links, and we celebrate the moment your business shows up the way it deserves to.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex gap-8 items-start py-10 border-b border-border last:border-b-0"
              >
                <span className="font-heading text-4xl md:text-5xl font-bold text-secondary/30 shrink-0 w-16 text-right">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — FAQ
      ═══════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-4">
              Questions?
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-0">
            {[
              {
                q: "Which service is right for me?",
                a: "If you already have your branding and just need a website, Website In A Day is your match. If your brand needs a refresh alongside your site, Branding + Website is the move. And if you're starting from scratch or your current brand doesn't reflect where you're headed, start with Branding.",
              },
              {
                q: "What do I need before we start?",
                a: "You'll complete our brand and design questionnaire, a copy guide we provide, and upload your photos and any existing brand materials through our client portal. We walk you through every step — nothing is left to guessing.",
              },
              {
                q: "Do you help with copy?",
                a: "We provide a detailed copy guide that walks you through exactly what to write for each page. While we don't write full website copy, we refine and edit what you provide so it sounds polished and aligned with your brand voice.",
              },
              {
                q: "Can I add pages later?",
                a: "Absolutely. Your Showit website is fully editable, and we provide video tutorials so you can add pages, update content, and make changes anytime. We're also available for add-on support if you need us.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes! We offer a payment plan of two installments. The first is required after the discovery call and the second is due before the final review.",
              },
              {
                q: "What makes this different from a custom website process?",
                a: "Traditional custom builds take 2–4 months and require constant back-and-forth. Our process is streamlined and strategic — you get the same level of quality and personalization in a fraction of the time, without the overwhelm.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <h3 className="font-heading text-lg md:text-xl font-semibold pr-4 group-hover:text-secondary transition-colors">
                    {faq.q}
                  </h3>
                  <span className="text-2xl text-secondary shrink-0 transition-transform duration-300" style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === i ? "300px" : "0",
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  <p className="text-muted-foreground text-base leading-relaxed pb-6 pr-12">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="hero-bg section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary block mb-6">
              Your Next Chapter Starts Here
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[hsl(var(--hero-foreground))] leading-tight text-balance">
              Are you ready for your business to be{" "}
              <em className="italic">fully booked, wildly profitable</em>, and{" "}
              <em className="italic">everything</em> you always knew it could be?
            </h2>
            <p className="text-lg text-[hsl(var(--hero-foreground))]/80 max-w-xl mx-auto mb-10 leading-relaxed">
              We believe in you, now it's your turn. Take the first step toward a brand and website that actually works as hard as you do.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
              >
                Let's Do The Damn Thing
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold border border-[hsl(var(--hero-foreground))]/30 text-[hsl(var(--hero-foreground))] rounded hover:bg-[hsl(var(--hero-foreground))]/10 transition-colors uppercase tracking-[0.15em]"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Strip */}
      <InstagramStrip />
    </>
  );
};

export default Services;
