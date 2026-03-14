import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import TextReveal from "../animations/TextReveal";
import { ShieldCheck, Award, Clock, FileCheck } from "lucide-react";

const badges = [
  { icon: ShieldCheck, title: "Licensed & Insured", description: "All vendors carry valid Dubai trade licenses and insurance" },
  { icon: Award, title: "Vetted Professionals", description: "Rigorous background checks and portfolio verification" },
  { icon: Clock, title: "On-Time Guarantee", description: "Project timelines are tracked and guaranteed" },
  { icon: FileCheck, title: "Quality Assurance", description: "Post-completion inspections and satisfaction guarantee" },
];

const TrustBadges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Trust & Safety</span>
          </ScrollReveal>
          <TextReveal
            text="Your Renovation Is in Safe Hands"
            as="h2"
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            goldWords={[5, 6]}
            delay={0.2}
          />
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: [0, 1.1, 1], opacity: 1 } : {}}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 200, damping: 15 }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-accent/20 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mb-5 group-hover:bg-emerald/20 transition-colors">
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ delay: i * 0.12 + 0.3, duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-emerald" />
                  </motion.div>
                </div>
                <h3 className="font-display font-bold text-card-foreground text-lg">{badge.title}</h3>
                <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed">{badge.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
