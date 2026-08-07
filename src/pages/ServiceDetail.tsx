import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Bath, ChefHat, PaintBucket, Layers, TreePine, Wrench, CheckCircle, ArrowRight, Phone } from "lucide-react";
import SEO from "@/components/SEO";


const serviceData: Record<string, {
  icon: typeof ChefHat;
  title: string;
  tagline: string;
  heroImage: string;
  description: string[];
  features: string[];
  process: { step: string; title: string; desc: string }[];
  gallery: string[];
}> = {
  "kitchen-renovation": {
    icon: ChefHat,
    title: "Kitchen Renovation",
    tagline: "The Heart of Your Home, Reimagined",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    description: [
      "Your kitchen is more than a place to cook — it's where memories are made, stories are shared, and families come together. At Mr Renovate, we design kitchens that are as functional as they are beautiful.",
      "From custom Italian cabinetry to seamless quartz countertops and state-of-the-art smart appliances, every element is chosen with purpose and installed with precision.",
    ],
    features: ["Custom Cabinetry Design", "Natural Stone Countertops", "Smart Appliance Integration", "Kitchen Island Design", "Under-Cabinet Lighting", "Plumbing & Gas Upgrades", "Ventilation Systems", "Backsplash Design"],
    process: [
      { step: "01", title: "Design Consultation", desc: "We visit your home, understand your needs, and create a 3D kitchen design." },
      { step: "02", title: "Material Selection", desc: "Choose from our curated collection of premium materials and finishes." },
      { step: "03", title: "Precision Build", desc: "Our craftsmen install every component with meticulous attention to detail." },
      { step: "04", title: "Final Reveal", desc: "Walk through your completed kitchen with our quality assurance team." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
    ],
  },
  "bathroom-renovation": {
    icon: Bath,
    title: "Bathroom Renovation",
    tagline: "Your Personal Spa Awaits",
    heroImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80",
    description: [
      "Transform your bathroom into a luxurious retreat. We specialize in spa-inspired designs that combine aesthetics with functionality.",
      "From frameless glass showers to heated marble floors and smart mirrors, every detail is designed to elevate your daily routine into a luxury experience.",
    ],
    features: ["Walk-In Glass Showers", "Heated Flooring Systems", "Designer Vanity Units", "LED Smart Mirrors", "Professional Waterproofing", "Luxury Tile Installation", "Freestanding Bathtubs", "Rain Shower Systems"],
    process: [
      { step: "01", title: "Space Assessment", desc: "We evaluate plumbing, drainage, and layout possibilities." },
      { step: "02", title: "Design & Selection", desc: "3D visualization with your choice of tiles, fixtures, and finishes." },
      { step: "03", title: "Waterproof & Build", desc: "Professional waterproofing followed by expert installation." },
      { step: "04", title: "Quality Check", desc: "Thorough inspection ensuring everything is perfect." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80",
    ],
  },
  "painting-services": {
    icon: PaintBucket,
    title: "Painting & Finishing",
    tagline: "Color That Transforms",
    heroImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80",
    description: [
      "The right color transforms a room. Our expert painters and color consultants work with you to find the perfect palette that reflects your personality and complements your space.",
      "We use only premium, eco-friendly paints with superior coverage and durability, ensuring your walls look stunning for years.",
    ],
    features: ["Expert Color Consultation", "Premium Eco-Friendly Paints", "Textured Wall Finishes", "Feature & Accent Walls", "Ceiling Treatments", "Exterior Painting", "Wallpaper Installation", "Protective Coatings"],
    process: [
      { step: "01", title: "Color Consultation", desc: "Our experts help you choose the perfect palette for your space." },
      { step: "02", title: "Surface Preparation", desc: "Thorough cleaning, sanding, priming — the foundation of a perfect finish." },
      { step: "03", title: "Expert Application", desc: "Multiple coats applied with precision for flawless, even coverage." },
      { step: "04", title: "Final Inspection", desc: "Touch-ups and quality check for a perfect finish." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
    ],
  },
  "flooring": {
    icon: Layers,
    title: "Flooring Solutions",
    tagline: "Foundation of Elegance",
    heroImage: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&q=80",
    description: [
      "Beautiful floors are the foundation of every well-designed space. We offer a comprehensive range of flooring solutions — from classic marble to modern engineered wood.",
      "Our expert installers ensure precision laying, seamless transitions, and finishes that withstand the test of time and Dubai's unique climate.",
    ],
    features: ["Italian Marble", "Hardwood Flooring", "Engineered Wood", "Porcelain & Ceramic", "Underfloor Heating", "Herringbone Patterns", "Epoxy Coatings", "Floor Restoration"],
    process: [
      { step: "01", title: "Material Selection", desc: "Visit our showroom to see and feel our premium flooring options." },
      { step: "02", title: "Subfloor Preparation", desc: "Leveling, moisture testing, and preparation for perfect installation." },
      { step: "03", title: "Expert Installation", desc: "Precision cutting and laying by certified flooring specialists." },
      { step: "04", title: "Sealing & Protection", desc: "Professional sealing for long-lasting beauty and durability." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
    ],
  },
  "landscaping": {
    icon: TreePine,
    title: "Landscaping & Outdoor",
    tagline: "Extend Your Living Space",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
    description: [
      "Dubai's climate demands outdoor spaces that are both beautiful and functional. We create stunning landscapes, pool surrounds, and outdoor living areas that extend your home into nature.",
      "From lush garden designs to fully-equipped outdoor kitchens and elegant pergolas — we bring your outdoor vision to life.",
    ],
    features: ["Pool & Deck Design", "Outdoor Kitchen Build", "Pergola Installation", "Garden & Planting Design", "Irrigation Systems", "Outdoor Lighting", "BBQ Areas", "Privacy Screening"],
    process: [
      { step: "01", title: "Site Survey", desc: "We assess your outdoor space, soil, drainage, and sun exposure." },
      { step: "02", title: "Landscape Design", desc: "Detailed plans with plant selection and hardscape layouts." },
      { step: "03", title: "Construction", desc: "Expert installation of structures, planting, and systems." },
      { step: "04", title: "Handover & Care", desc: "Walkthrough plus a maintenance guide for your new outdoor space." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    ],
  },
  "general-renovation": {
    icon: Wrench,
    title: "General Renovation",
    tagline: "Complete Transformation",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    description: [
      "When your entire home needs a refresh, our end-to-end renovation service manages everything — from initial concept to final handover.",
      "We coordinate all trades, manage permits, and ensure every aspect of your renovation is delivered on time, on budget, and to the highest standards.",
    ],
    features: ["Complete Remodeling", "Structural Modifications", "Electrical Rewiring", "Smart Home Integration", "HVAC Upgrades", "Full Project Management", "Permit Handling", "Interior Design"],
    process: [
      { step: "01", title: "Comprehensive Assessment", desc: "Full property evaluation and feasibility study." },
      { step: "02", title: "Design & Planning", desc: "Architectural plans, 3D renders, and detailed project timeline." },
      { step: "03", title: "Managed Execution", desc: "Coordinated construction with regular progress updates." },
      { step: "04", title: "Final Walkthrough", desc: "Detailed inspection and handover with warranty documentation." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.title,
  name: service.title,
  description: service.description[0],
  provider: {
    "@type": "LocalBusiness",
    name: "Mr Renovate",
    url: "https://mrrenovate.ae"
  },
  areaServed: {
    "@type": "City",
    name: "Dubai"
  },
  url: `https://mrrenovate.ae/services/${slug}`
};

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  return (
    <>
      <SEO
       title={`${service.title} | Home Renovation Dubai | Mr Renovate`}
       description={service.description[0]}
       keywords={`${service.title}, Home Renovation Dubai, Home Renovation Company Dubai`}
     />
      <Navbar /> 
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-20 animate-ken-burns" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                <Icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">{service.tagline}</span>
            </div>
            <TextReveal text={service.title} as="h1" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground" goldWords={[0]} delay={0.2} />
          </div>
        </section>

        {/* Description */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <ScrollReveal>
                <h2 className="text-3xl font-display font-bold text-foreground">What We <span className="text-accent">Offer</span></h2>
                {service.description.map((p, i) => (
                  <p key={i} className="mt-4 text-muted-foreground font-body text-lg leading-relaxed">{p}</p>
                ))}
                <Link to="/get-started">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-xl">
                    <Phone className="w-4 h-4" /> Get Free Quote
                  </motion.div>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 py-3 px-4 bg-secondary rounded-xl">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-body text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">How It <span className="text-accent">Works</span></h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.15}>
                  <div className="relative bg-card rounded-2xl p-8 shadow-sm text-center">
                    <span className="text-6xl font-display font-bold text-accent/10 absolute top-4 right-6">{step.step}</span>
                    <h3 className="text-lg font-display font-bold text-foreground mt-8">{step.title}</h3>
                    <p className="text-muted-foreground font-body text-sm mt-3">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground">Recent <span className="text-accent">Projects</span></h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {service.gallery.map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={img} alt={`${service.title} project ${i + 1}`} className="w-full h-64 object-cover" loading="lazy" />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-primary-foreground">Ready to Start Your <span className="text-accent">{service.title}</span>?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/get-started">
                <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-xl">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
              <Link to="/gallery">
                <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded-xl">
                  View Gallery
                </motion.span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail;
