import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import TextReveal from "../animations/TextReveal";

const categories = ["All", "Kitchen", "Bathroom", "Living Room", "Outdoor"];

const projects = [
  { id: 1, category: "Kitchen", title: "Modern Kitchen Redesign", location: "Dubai Marina", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { id: 2, category: "Bathroom", title: "Luxury Spa Bathroom", location: "Palm Jumeirah", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80" },
  { id: 3, category: "Living Room", title: "Contemporary Living Space", location: "Downtown Dubai", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80" },
  { id: 4, category: "Kitchen", title: "Minimalist Kitchen", location: "JBR", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80" },
  { id: 5, category: "Outdoor", title: "Garden Terrace Renovation", location: "Arabian Ranches", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" },
  { id: 6, category: "Bathroom", title: "Classic Marble Bathroom", location: "Emirates Hills", image: "https://images.unsplash.com/photo-1600566753376-12c8ab7a5a0c?w=600&q=80" },
];

const FeaturedProjects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Portfolio</span>
          </ScrollReveal>
          <TextReveal
            text="Our Featured Renovation Projects in Dubai"
            as="h2"
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
            goldWords={[2, 3]}
            delay={0.2}
          />
          <ScrollReveal>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground font-body leading-relaxed">
          Explore completed kitchen, bathroom, living room, and outdoor
          renovation projects across Dubai.
        </p>
      </ScrollReveal>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative px-5 py-2 font-body text-sm font-medium transition-colors"
            >
              {active === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${active === cat ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}>
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="text-xs font-body text-accent uppercase tracking-wider">{project.category}</p>
                    <h3 className="text-lg font-display font-bold text-primary-foreground">{project.title}</h3>
                    <p className="text-sm font-body text-primary-foreground/60">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
