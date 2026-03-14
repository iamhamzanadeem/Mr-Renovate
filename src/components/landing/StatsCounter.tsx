import AnimatedCounter from "../animations/AnimatedCounter";
import ScrollReveal from "../animations/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Users, Award, Calendar } from "lucide-react";

const stats = [
  { icon: Home, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 150, suffix: "+", label: "Verified Vendors" },
  { icon: Award, value: 98, suffix: "%", label: "Client Satisfaction" },
  { icon: Calendar, value: 8, suffix: "+", label: "Years in Dubai" },
];

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} delay={i * 0.15}>
                <div className="text-center group">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: [-5, 0], opacity: 1 } : {}}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="mx-auto w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                  >
                    <Icon className="w-7 h-7 text-accent" />
                  </motion.div>
                  <div className="text-4xl lg:text-5xl font-display font-bold text-foreground">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <p className="mt-2 text-sm font-body text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
