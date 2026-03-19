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
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Step bar indicator */}
        <div className="relative flex items-start justify-between max-w-xl mx-auto mb-16 px-4">
          {/* Connecting line */}
          <div className="absolute left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] top-6 h-px bg-accent/30" />
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15} className="flex flex-col items-center gap-2 z-10">
              <div className="w-12 h-12 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-sm">
                <span className="text-accent font-bold font-display text-sm">{step.number}</span>
              </div>
              <span className="text-xs font-body text-muted-foreground text-center leading-tight max-w-[80px]">
                {step.title}
              </span>
            </ScrollReveal>
          ))}
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={i * 0.2}>
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-accent/5 border border-accent/10 hover:border-accent/30 hover:bg-accent/10 transition-colors duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{step.description}</p>
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
