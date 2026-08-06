import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { X, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";


const categories = ["All", "Kitchen", "Bathroom", "Living Room", "Outdoor", "Full Villa"];

const projects = [
  { id: 1, title: "Modern Minimalist Kitchen", category: "Kitchen", location: "Palm Jumeirah", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
  { id: 2, title: "Spa Bathroom Retreat", category: "Bathroom", location: "Downtown Dubai", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80" },
  { id: 3, title: "Contemporary Living Space", category: "Living Room", location: "Dubai Marina", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" },
  { id: 4, title: "Poolside Paradise", category: "Outdoor", location: "Arabian Ranches", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80" },
  { id: 5, title: "Luxury Villa Transformation", category: "Full Villa", location: "Emirates Hills", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 6, title: "Chef's Dream Kitchen", category: "Kitchen", location: "Jumeirah Golf Estates", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80" },
  { id: 7, title: "Marble Bathroom Suite", category: "Bathroom", location: "Business Bay", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80" },
  { id: 8, title: "Open-Plan Living Renovation", category: "Living Room", location: "JBR", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
  { id: 9, title: "Garden Terrace Design", category: "Outdoor", location: "Al Barsha", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" },
  { id: 10, title: "Penthouse Full Renovation", category: "Full Villa", location: "DIFC", image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80" },
  { id: 11, title: "Island Kitchen Build", category: "Kitchen", location: "Dubai Hills", image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80" },
  { id: 12, title: "Outdoor Entertainment Area", category: "Outdoor", location: "Damac Hills", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<typeof projects[0] | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80" alt="Our gallery" className="w-full h-full object-cover opacity-15 animate-ken-burns" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16">
            <TextReveal text="Our Project Gallery" as="h1" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground" goldWords={[2]} delay={0.2} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-6 text-lg md:text-xl text-primary-foreground/70 font-body max-w-2xl">
              Browse 2,500+ completed projects across Dubai — proof that our craftsmanship speaks for itself.
            </motion.p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full font-body font-medium text-sm transition-colors duration-300 ${
                    active === cat
                      ? "bg-accent text-accent-foreground shadow-lg"
                      : "bg-secondary text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setLightbox(project)}
                    className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img src={project.image} alt={project.title} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-lg font-display font-bold text-primary-foreground">{project.title}</h3>
                        <p className="text-primary-foreground/70 font-body text-sm">{project.location}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-body font-semibold rounded-full">
                      {project.category}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-display font-bold text-accent-foreground">Your Home Could Be Next</h2>
              <p className="mt-4 text-accent-foreground/80 font-body max-w-xl mx-auto">
                Join 2,500+ homeowners who transformed their spaces with Mr Renovate.
              </p>
              <Link to="/get-started">
                <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-xl">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={lightbox.image} alt={lightbox.title} className="w-full h-auto max-h-[75vh] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-8">
                <h3 className="text-2xl font-display font-bold text-primary-foreground">{lightbox.title}</h3>
                <p className="text-primary-foreground/70 font-body">{lightbox.location} · {lightbox.category}</p>
              </div>
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-10 h-10 bg-primary/50 backdrop-blur rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Gallery;
