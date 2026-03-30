import { useState } from "react";
import { motion } from "framer-motion";
import InstagramStrip from "@/components/InstagramStrip";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero — Full-width image */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <img
          src="https://static.showit.co/800/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg"
          alt="Botanical flowers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
          >
            Contact First & Third Designs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-sm md:text-base uppercase tracking-[0.15em] text-white/90 font-semibold"
          >
            This is the part where you reach out… and everything gets easier.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center mb-10">
            First & Third Designs Inquiry Form
          </h2>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <h2 className="font-heading text-3xl font-semibold mb-4">Thank You!</h2>
              <p className="text-muted-foreground text-lg">We'll be in touch soon. Can't wait to connect with you!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name <span className="text-secondary">*</span></label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name <span className="text-secondary">*</span></label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email <span className="text-secondary">*</span></label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number <span className="text-secondary">*</span></label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Instagram/Facebook</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Do you have a current website? If yes, drop the link below.</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Tell us about your business. How you work with people, what you offer, anything you'd like us to know! <span className="text-secondary">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Do you have branding (logo, fonts, colors)? <span className="text-secondary">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="branding" value="yes" required className="accent-primary" />
                    <span className="text-sm">Yes, I already have branding</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="branding" value="no" className="accent-primary" />
                    <span className="text-sm">No, I need help with that</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Do you have branding photos? <span className="text-secondary">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="photos" value="love" required className="accent-primary" />
                    <span className="text-sm">Yes and I love them!</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="photos" value="refresh" className="accent-primary" />
                    <span className="text-sm">Yes but they need a refresh!</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="photos" value="no" className="accent-primary" />
                    <span className="text-sm">No, I need help!</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  How did you hear about us? <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 text-sm font-semibold bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity uppercase tracking-[0.15em]"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Instagram Strip */}
      <InstagramStrip />
    </>
  );
};

export default Contact;
