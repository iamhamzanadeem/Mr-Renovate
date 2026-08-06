import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Bath, ChefHat, PaintBucket, Layers, TreePine, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const services = [
  {
    slug: "kitchen-renovation",
    icon: ChefHat,
    title: "Kitchen Renovation",
    tagline: "The Heart of Your Home, Reimagined",
    description: "Custom cabinetry, premium countertops, smart appliances, and layouts designed for how you actually live and cook.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    features: ["Custom Cabinetry", "Stone Countertops", "Smart Appliances", "Island Design", "Lighting Design", "Plumbing Upgrades"],
  },
  {
    slug: "bathroom-renovation",
    icon: Bath,
    title: "Bathroom Renovation",
    tagline: "Your Personal Spa Awaits",
    description: "Walk-in showers, heated floors, designer fixtures, and spa-like finishes that turn your bathroom into a retreat.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    features: ["Walk-In Showers", "Heated Flooring", "Designer Vanities", "LED Mirrors", "Waterproofing", "Luxury Tiles"],
  },
  {
    slug: "painting-services",
    icon: PaintBucket,
    title: "Painting & Finishing",
    tagline: "Color That Transforms",
    description: "Premium paints, textured finishes, accent walls, and expert color consultation to perfectly express your style.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    features: ["Color Consultation", "Premium Paints", "Textured Finishes", "Accent Walls", "Ceiling Treatments", "Exterior Painting"],
  },
  {
    slug: "flooring",
    icon: Layers,
    title: "Flooring Solutions",
    tagline: "Foundation of Elegance",
    description: "Marble, hardwood, engineered wood, porcelain — expertly installed floors that define the character of every room.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    features: ["Marble & Stone", "Hardwood", "Engineered Wood", "Porcelain Tiles", "Underfloor Heating", "Pattern Laying"],
  },
  {
    slug: "landscaping",
    icon: TreePine,
    title: "Landscaping & Outdoor",
    tagline: "Extend Your Living Space",
    description: "Pool areas, outdoor kitchens, garden design, and pergolas that make Dubai's outdoors part of your home.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    features: ["Pool Surrounds", "Outdoor Kitchens", "Pergolas", "Garden Design", "Irrigation", "Outdoor Lighting"],
  },
  {
    slug: "general-renovation",
    icon: Wrench,
    title: "General Renovation",
    tagline: "Complete Transformation",
    description: "Full villa and apartment renovations — from structural changes to finishing touches, managed end-to-end.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    features: ["Full Remodeling", "Structural Work", "Electrical Upgrades", "Smart Home", "HVAC Systems", "Project Management"],
  },
];

const Services = () => {
  return (
    <>
      <SEO
       title="Home Renovation Services in Dubai | Mr Renovate"
       description="Professional kitchen renovation, bathroom remodeling, flooring, painting and complete renovation services in Dubai."
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80" alt="Renovation services" className="w-full h-full object-cover opacity-15 animate-ken-burns" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16">
            <TextReveal text="Services Built for Excellence" as="h1" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground max-w-3xl" goldWords={[2, 3]} delay={0.2} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-6 text-lg md:text-xl text-primary-foreground/70 font-body max-w-2xl">
              From kitchens to complete villa makeovers — every service delivered with uncompromising quality and Dubai-grade luxury.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-24">
              {services.map((service, i) => (
                <ScrollReveal key={service.slug} delay={0.1}>
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                    <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                      <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden shadow-xl group">
                        <img src={service.image} alt={service.title} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-accent-foreground" />
                          </div>
                          <span className="text-primary-foreground font-display font-bold text-xl">{service.title}</span>
                        </div>
                      </motion.div>
                    </div>
                    <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                      <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">{service.tagline}</span>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">{service.title}</h2>
                      <p className="mt-4 text-muted-foreground font-body text-lg leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-2 gap-3 mt-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm font-body text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link to={`/services/${service.slug}`}>
                        <motion.div whileHover={{ x: 4 }} className="inline-flex items-center gap-2 mt-8 text-accent font-body font-semibold hover:underline">
                          View Details <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground">
                Not Sure Which Service You Need?
              </h2>
              <p className="mt-4 text-accent-foreground/80 font-body text-lg max-w-xl mx-auto">
                Our experts will assess your space and recommend the perfect renovation plan — completely free.
              </p>
              <Link to="/get-started">
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block mt-8 px-10 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-xl shadow-lg">
                  Get Free Consultation
                </motion.span>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
