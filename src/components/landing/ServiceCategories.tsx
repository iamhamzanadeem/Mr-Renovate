import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import TextReveal from "../animations/TextReveal";
import { ChefHat, Bath, Paintbrush, Trees, Layers, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: ChefHat, title: "Kitchen", description: "Modern kitchen designs with premium fixtures, cabinetry, and smart layouts.", link: "/services/kitchen-renovation" },
  { icon: Bath, title: "Bathroom", description: "Luxurious bathroom renovations with elegant tiling and modern fittings.", link: "/services/bathroom-renovation" },
  { icon: Layers, title: "Flooring", description: "Premium marble, hardwood, and engineered flooring installations.", link: "/services/flooring" },
  { icon: Paintbrush, title: "Painting", description: "Professional interior and exterior painting with premium finishes.", link: "/services/painting-services" },
  { icon: Trees, title: "Landscaping", description: "Transform outdoor spaces with Dubai-adapted landscaping solutions.", link: "/services/landscaping" },
  { icon: Home, title: "Full Renovation", description: "Complete home transformation from concept to handover.", link: "/services/general-renovation" },
];

const ServiceCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Our Services</span>
          </ScrollReveal>
          <TextReveal
            text="Renovation Services Tailored for Dubai"
            as="h2"
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            goldWords={[3, 4]}
            delay={0.2}
          />
          <ScrollReveal delay={0.4}>
            <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
              From kitchens to full home makeovers, our vetted professionals deliver world-class quality.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link to={service.link} className="block group">
                  <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 overflow-hidden">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-card-foreground">{service.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{service.description}</p>
                      <div className="mt-4 flex items-center gap-1 text-accent font-body font-semibold text-sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;
