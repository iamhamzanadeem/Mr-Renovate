import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import TextReveal from "../animations/TextReveal";
import { ClipboardList, Users, Hammer } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Submit Your Project",
    description: "Tell us about your renovation needs in just 5 minutes. Upload photos, define your scope, and set your budget.",
  },
  {
    icon: Users,
    number: "02",
    title: "Get Matched & Quoted",
    description: "Our smart matching engine connects you with pre-vetted vendors who specialize in your project type and location.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Get Renovated",
    description: "Choose your preferred vendor, track progress, and enjoy your beautifully transformed space.",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">How It Works</span>
          </ScrollReveal>
          <TextReveal
            text="Three Simple Steps to Your Dream Space"
            as="h2"
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            goldWords={[3, 4]}
            delay={0.2}
          />
        </div>

        {/* Steps with connecting SVG line */}
        <div className="relative max-w-4xl mx-auto">
          {/* SVG connecting line — desktop only */}
          <svg className="hidden lg:block absolute left-1/2 top-0 h-full w-2 -translate-x-1/2" viewBox="0 0 2 100" preserveAspectRatio="none">
            <motion.line
              x1="1" y1="0" x2="1" y2="100"
              stroke="hsl(var(--gold))"
              strokeWidth="2"
              strokeDasharray="4 4"
              style={{ pathLength }}
              className="will-change-transform"
            />
          </svg>

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal
                key={step.number}
                delay={i * 0.2}
                direction={isEven ? "left" : "right"}
                className="mb-16 last:mb-0"
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <motion.span
                      initial={{ scale: 0.5, rotate: 10, opacity: 0 }}
                      whileInView={{ scale: 1, rotate: 0, opacity: 0.1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      className="text-8xl font-display font-bold text-accent block leading-none"
                    >
                      {step.number}
                    </motion.span>
                    <h3 className="text-2xl font-display font-bold text-foreground mt-2">{step.title}</h3>
                    <p className="mt-3 text-muted-foreground font-body leading-relaxed max-w-md inline-block">
                      {step.description}
                    </p>
                  </div>
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
