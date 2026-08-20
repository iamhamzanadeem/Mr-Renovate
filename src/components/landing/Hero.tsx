import { motion } from "framer-motion";
import TextReveal from "../animations/TextReveal";
import ScrollReveal from "../animations/ScrollReveal";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-ken-burns will-change-transform"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(var(--navy-dark) / 0.85), hsl(var(--navy) / 0.7)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animate-gradient-shift opacity-30"
        style={{
          background: "linear-gradient(135deg, hsl(var(--gold) / 0.15) 0%, transparent 40%, hsl(var(--gold) / 0.1) 70%, transparent 100%)",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[15%] w-16 h-16 border border-accent/20 rotate-45 animate-float-slow" />
        <div className="absolute bottom-32 left-[10%] w-24 h-24 border border-accent/10 rounded-full animate-float-medium" />
        <div className="absolute top-[40%] right-[8%] w-8 h-8 bg-accent/10 rotate-12 animate-float-fast" />
        <svg className="absolute bottom-20 right-[25%] w-20 h-20 animate-float-slow opacity-10" viewBox="0 0 80 80">
          <polygon points="40,5 75,65 5,65" fill="none" stroke="hsl(var(--gold))" strokeWidth="1"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {/* Trust badge */}
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-body text-primary-foreground/80">Dubai's #1 Renovation Platform</span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <TextReveal
          text="Transform Your Space into a Masterpiece"
          as="h1"
          className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight tracking-tight max-w-5xl mx-auto"
          goldWords={[4, 5]}
          delay={0.3}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/60 font-body max-w-[720px] mx-auto leading-relaxed"
        >
          Discover trusted renovation services in Dubai for homes, villas, apartments, kitchens, bathrooms, and commercial spaces. Get matched with pre-vetted renovation professionals and compare quotes for your project.
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
          >
            <Link
              to="/get-started"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-bold text-lg rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 active:scale-[0.98]"
            >
              Get Free Quotes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 20 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/20 text-primary-foreground font-body font-semibold text-lg rounded-xl hover:border-accent hover:text-accent transition-all duration-300 active:scale-[0.98]"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 text-primary-foreground/40 font-body text-sm"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-accent fill-accent" />
            ))}
            <span className="ml-2">4.9/5 Rating</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary-foreground/20" />
          <span className="hidden sm:block">500+ Projects Completed</span>
          <div className="hidden md:block w-px h-4 bg-primary-foreground/20" />
          <span className="hidden md:block">150+ Verified Vendors</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
