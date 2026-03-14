import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "../animations/TextReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(var(--navy-dark) / 0.9), hsl(var(--navy) / 0.8)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <TextReveal
          text="Ready to Start Your Renovation Journey?"
          as="h2"
          className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-primary-foreground max-w-4xl mx-auto"
          goldWords={[5, 6]}
          delay={0.2}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-lg text-primary-foreground/60 font-body max-w-xl mx-auto"
        >
          Get free quotes from Dubai's top renovation professionals. No obligations, no hidden fees.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
          className="mt-10"
        >
          <Link
            to="/get-started"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground font-body font-bold text-lg rounded-xl animate-pulse-glow hover:bg-gold-light transition-all duration-300 active:scale-[0.98]"
          >
            Get Your Free Quote Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
