import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import InstagramStrip from "@/components/InstagramStrip";
import CtaBanner from "@/components/CtaBanner";

const Services = () => {
  return (
    <>
      {/* Hero — Split layout with portfolio screenshots */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="relative overflow-hidden">
          <img
            src="https://static.showit.co/400/X3FXO9qBpvZEabMNuQbLhA/235620/screencapture-firstandthirddesigns-63-showitpreview-home-2025-09-08-15_02_40.png"
            alt="Portfolio website preview"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hero-bg flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
          <div className="max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              You are the greatest project you will ever work on
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
              >
                Work With Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* We Believe */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] overflow-hidden rounded">
            <img
              src="https://static.showit.co/400/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png"
              alt="Floral design work"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-6">
              We Believe Web Design Shouldn't Take Months Or Drain Your Energy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 tracking-wide">
              We prioritize clarity over complication, strategy over perfection, and processes that actually respect your time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 tracking-wide">
              Every offer we create blends semi-custom templates with intentional storytelling — giving you a website that feels personal, purposeful, and built to support your next chapter.
            </p>
            <p className="text-muted-foreground leading-relaxed tracking-wide">
              This is design rooted in connection, community, and the belief that your brand should actually work for you.
            </p>
          </div>
        </div>
      </section>

      {/* Poetic Section */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto text-center max-w-2xl">
          <p className="font-heading text-2xl md:text-3xl leading-relaxed text-foreground/80">
            Take a seat,<br />
            We'll pour you a drink,<br />
            queue the playlist,<br />
            and you can tell us everything.
          </p>
        </div>
      </section>

      {/* Raise Your Hand / What If */}
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Chances are you've created a career that involves you taking care of everyone else
          </h2>
          <p className="text-lg text-secondary font-semibold italic mb-8">
            This is where you get to breathe and receive.
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold leading-tight mb-6">
            Instead of your website not making you money, it could consistently look like this...
          </h3>
          <div className="text-left max-w-xl mx-auto space-y-4">
            {[
              "Being able to get back to why you started your business and living in your passion.",
              "Texting your bestie that it's time to celebrate because you have MULTIPLE inquiries in your mailbox.",
              "Having a dream client say \"You are the same vibe you present on your website\"",
              "Opening your bank account, doing a double-take, and wondering, \"Is this real or did I finally manifest something correctly?\"",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What If */}
      <section className="hero-bg section-padding">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">What If</h2>
          <p className="text-lg opacity-85 leading-relaxed mb-4">
            It shouldn't steal your time, your energy, or your confidence. A strategy session and well thought out website can fix it.
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold mt-8">
            Raise your hand if you have ever felt personally victimized by your website
          </h3>
        </div>
      </section>

      {/* Create / Empower / Connect — Service Cards */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Create",
                title: "Branding",
                desc: "You're starting from scratch or your current brand hasn't kept up with the business you've built. Time to fix that.",
              },
              {
                label: "Empower",
                title: "Website in a Week",
                desc: "A fully custom, website built and launched in a single day — without the overwhelm.",
              },
              {
                label: "Connect",
                title: "Branding + Website",
                desc: "A start-to-finish brand and website experience designed to support growth and credibility.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-card border border-border rounded p-10"
              >
                <h3 className="font-heading text-3xl font-semibold mb-2">{item.label}</h3>
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website in a Day */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary block mb-2">Connect</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Website In A Day</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A focused, stress-free design experience for the entrepreneur who's ready to launch without waiting months.
            </p>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">Perfect For:</h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Businesses that already have their branding in place and want a strategic, done-for-you website built in one stress-free day — no endless emails, no dragged-out timelines.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">What You Get:</h4>
            <ul className="space-y-3 mb-6">
              {[
                "7-10 page Showit website",
                "2 Business Calls — AM for the vibe check, PM to make the moves and launch",
                "Client Portal for Easy Uploads",
                "Copy Guide",
                "Basic SEO Setup",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-secondary font-semibold italic mb-6">
              A streamlined process, smart strategy, and a finished website — all in one high-energy day.
            </p>
            <Link
              to="/website-in-a-day"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Branding + Website */}
      <section className="section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary block mb-2">Empower</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Branding + Website</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This is a full brand and website refresh completed in one focused, strategic week.
            </p>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">Perfect For:</h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This offer is for businesses that have grown past their current branding and need both their brand and website to catch up. Whether you've been piecing things together or your visuals no longer match the level you're at, this is about realignment — not starting over, but evolving forward.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">What You Get:</h4>
            <ul className="space-y-3 mb-6">
              {[
                "8-Page Custom Showit Website",
                "SEO Research & Strategy",
                "3 Business Calls Throughout the Week",
                "Mobile Optimization",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/website-in-a-week"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Branding */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary block mb-2">Create</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Branding</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Is often the first impression someone has of your business. It's what makes you recognizable, trustworthy, and memorable — and it should reflect where you're going, not where you started.
            </p>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">Perfect For:</h4>
            <p className="text-muted-foreground leading-relaxed">
              This is for you if you don't have branding yet or you've outgrown what you currently have.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-3">What You Get:</h4>
            <ul className="space-y-3 mb-6">
              {[
                "90-Minute Strategy Call",
                "Wordmark Logo",
                "Color Palette & Typography System",
                "Brand Positioning & Messaging Framework",
                "1–2 Ideal Client Personas",
                "Brand Guidelines Document",
                "Canva Pro Setup + Loom Tutorial",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
            >
              Let's Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Vision CTA */}
      <section className="section-warm-bg section-padding">
        <div className="container mx-auto text-center">
          <h3 className="font-heading text-2xl md:text-3xl italic text-secondary mb-6">
            When your vision is clear, strategy is easy
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
          >
            Schedule a Free Call
          </Link>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Our Client's Are Spilling the Tea</h2>
          <p className="font-heading text-xl italic text-secondary mb-2">Cue the happy Tears..</p>
        </div>
      </section>

      {/* Who We Vibe With */}
      <section className="section-alt-bg section-padding">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">Who We Vibe With</h2>
          <p className="text-muted-foreground leading-relaxed">
            Coaches, creatives, educators, service providers, unconventional business owners and those who get asked "<em>so when are you getting a real job</em>" by their mother-in-laws.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-8">
            {[
              {
                q: "Do you offer payment plans?",
                a: "Yes! We offer a payment plan of two installments. The first is required after the discovery call and the second is due before the final review.",
              },
              {
                q: "Can I make edits to my site?",
                a: "Absolutely! We'll send over video tutorials and resource links after your launch so you can easily make changes anytime.",
              },
              {
                q: "What content do I need to provide?",
                a: "You'll complete our brand and design questionnaire, copy guide, and upload your photos and any existing brand materials.",
              },
              {
                q: "Do I need a Blog?",
                a: "That depends on your goals. If you want to get found online, attract new visitors, and build trust with potential clients, then yes — a blog is the way to go!",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-b border-border pb-6"
              >
                <h3 className="font-heading text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
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

export default Services;
