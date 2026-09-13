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

  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;

  introTitle: string;
  ctaText: string;
introTitleAccent: string;


  description: string[];
  features: string[];

  sections?: {
    title: string;
    content?: string[];
    items?: {
      title: string;
      desc: string;
    }[];
  }[];

  process: {
    step: string;
    title: string;
    desc: string;
  }[];

  gallery: string[];

  faqDescription?: string;

  faqs?: {
    question: string;
    answer: string;
  }[];
}> = {

 "kitchen-renovation": {
  icon: ChefHat,

  title: "Kitchen Renovation Dubai",

  tagline: "Plan Your Kitchen Renovation With the Right Professionals",

  seoTitle:
    "Kitchen Renovation Dubai | Kitchen Renovation Services",

  seoDescription:
    "Planning a kitchen renovation in Dubai? Submit your project requirements through MR Renovate and connect with suitable kitchen renovation professionals.",

  seoKeywords:
    "kitchen renovation Dubai, kitchen renovation in Dubai, Dubai kitchen renovation, kitchen renovation companies in Dubai, kitchen design companies in Dubai, kitchen renovation company",

  introTitle: "Kitchen Renovation Services in Dubai",
  
  ctaText: "Submit Your Kitchen Renovation Requirements",

  heroImage:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",

  description: [
    "Your kitchen should work for the way you live. Whether you are updating an apartment kitchen, transforming a villa kitchen, or planning a complete kitchen renovation, the right planning can make a significant difference to the final result.",

    "MR Renovate helps property owners in Dubai submit their kitchen renovation requirements and connect with suitable renovation professionals from its network. You can share your project details, discuss your requirements with the relevant professionals, and move forward with the option that suits your project."
  ],

  features: [
    "Custom Kitchen Cabinetry",
    "Countertops & Worktops",
    "Kitchen Island Design",
    "Kitchen Lighting",
    "Appliance Integration",
    "Plumbing & Electrical Work",
    "Backsplash & Wall Finishes",
    "Ventilation Systems"
  ],

  sections: [
    {
      title: "Kitchen Renovation Options in Dubai",

      content: [
        "Every kitchen renovation project has different requirements. Some homeowners want to refresh the appearance of their kitchen, while others want to completely change the layout.",

        "The right approach depends on your existing kitchen, property type, desired changes and overall project scope."
      ],

      items: [
        {
          title: "Kitchen Refresh",
          desc: "Update selected elements such as cabinet fronts, countertops, backsplash, lighting or fixtures without completely rebuilding the kitchen."
        },
        {
          title: "Partial Kitchen Renovation",
          desc: "Renovate specific areas of your kitchen while keeping existing elements that are still suitable for your needs."
        },
        {
          title: "Full Kitchen Renovation",
          desc: "A complete renovation can involve cabinetry, countertops, flooring, lighting, plumbing, electrical points, appliances and other parts of the kitchen."
        },
        {
          title: "Custom Kitchen Renovation",
          desc: "Plan your kitchen around specific storage needs, layouts, materials, finishes and design preferences for a more personalised space."
        }
      ]
    },

    {
      title: "Kitchen Renovation for Apartments and Villas",

      content: [
        "Kitchen requirements can differ significantly depending on the type of property. Whether you are renovating an apartment kitchen or a villa kitchen, the project should be planned around the available space and existing configuration."
      ],

      items: [
        {
          title: "Apartment Kitchen Renovation",
          desc: "Apartment kitchens often require careful planning around the existing floor plan and available space. Renovation may focus on improving storage, circulation, lighting, finishes and functionality."
        },
        {
          title: "Villa Kitchen Renovation",
          desc: "Villa kitchens may provide more flexibility in terms of layout, storage and overall space. Depending on the property, homeowners may consider larger islands, expanded storage, upgraded finishes or layout changes."
        }
      ]
    },

    {
      title: "How Much Does Kitchen Renovation Cost in Dubai?",

      content: [
        "The cost of a kitchen renovation in Dubai depends on the scope of work rather than one fixed price.",

        "A simple kitchen refresh will have different requirements from a complete renovation involving new cabinetry, countertops, appliances, plumbing, electrical work and layout changes.",

        "The final cost can be affected by kitchen size, cabinet materials, countertop selection, appliances, plumbing and electrical modifications, flooring, backsplash, lighting, fixtures, demolition and the overall project specifications."
      ]
    },

    {
      title: "What Affects Kitchen Renovation Cost?",

      items: [
        {
          title: "1. Kitchen Size",
          desc: "A larger kitchen may require more cabinetry, countertop material, flooring, lighting and installation work."
        },
        {
          title: "2. Materials and Finishes",
          desc: "Cabinet finishes, countertop materials, tiles, fixtures and hardware can vary considerably in price."
        },
        {
          title: "3. Layout Changes",
          desc: "Moving appliances, sinks, plumbing points or electrical connections can increase the complexity of the renovation."
        },
        {
          title: "4. Cabinetry",
          desc: "The number of cabinets, storage configuration, materials and finishes all contribute to the overall project cost."
        },
        {
          title: "5. Appliances",
          desc: "Replacing or adding appliances can increase the total renovation budget, particularly when integrated appliances or major kitchen equipment are involved."
        },
        {
          title: "6. Project Scope",
          desc: "A cosmetic kitchen makeover will have different requirements from a complete kitchen renovation involving multiple trades and extensive changes."
        }
      ]
    },

    {
      title: "Why Start Your Kitchen Renovation Through MR Renovate?",

      content: [
        "Finding the right place to start can make the renovation process easier to organise. MR Renovate provides a starting point for property owners looking for kitchen renovation professionals in Dubai."
      ],

      items: [
        {
          title: "One Place to Start",
          desc: "Instead of searching broadly for kitchen companies in Dubai, you can begin by submitting your project requirements through MR Renovate."
        },
        {
          title: "Project-Focused Requirements",
          desc: "Your project starts with your specific requirements, including the type of property, renovation scope, design preferences and other relevant details."
        },
        {
          title: "Access to a Renovation Network",
          desc: "MR Renovate connects property owners with suitable renovation professionals within its network based on the requirements shared for the project."
        },
        {
          title: "Dubai-Focused",
          desc: "The platform is focused on connecting property owners with renovation professionals for projects in Dubai."
        }
      ]
    },

   {
      title: "How Much Does Kitchen Renovation Cost in Dubai?",

      content: [
        "The cost of a kitchen renovation in Dubai depends on the scope of work rather than one fixed price.",

        "A simple kitchen refresh will have different requirements from a complete renovation involving new cabinetry, countertops, appliances, plumbing, electrical work and layout changes.",

        "The final cost can be affected by kitchen size, cabinet materials, countertop selection, appliances, plumbing and electrical modifications, flooring, backsplash, lighting, fixtures, demolition and the overall project specifications."
      ],
  link: {
    url: "https://mrrenovate.ae/kitchen-renovation-cost-dubai-in-2026/",
    text: "View Full Kitchen Renovation Cost Breakdown →"
  }
    },
    
    {
      title: "Kitchen Renovation Ideas for Dubai Homes",

      items: [
        {
          title: "Open and Practical Layouts",
          desc: "Create a layout that allows comfortable movement between preparation, cooking and storage areas."
        },
        {
          title: "More Functional Storage",
          desc: "Use cabinets and storage solutions that make better use of the available kitchen space."
        },
        {
          title: "Kitchen Islands",
          desc: "Where space allows, an island can provide additional preparation space, storage or seating."
        },
        {
          title: "Integrated Appliances",
          desc: "Plan appliance positions alongside cabinetry to create a cohesive appearance."
        },
        {
          title: "Layered Lighting",
          desc: "Combine different types of lighting to make food preparation and everyday use more comfortable."
        },
        {
          title: "Durable Finishes",
          desc: "Select materials based on your preferred appearance, maintenance requirements and expected use."
        }
      ]
    },

    {
      title: "What Should You Prepare Before Requesting a Kitchen Renovation?",

      content: [
        "Having useful project information ready can make discussions with kitchen renovation specialists more focused and productive."
      ],

      items: [
        {
          title: "Property Type",
          desc: "Let professionals know whether you are renovating an apartment, villa or another type of property."
        },
        {
          title: "Kitchen Dimensions",
          desc: "Provide approximate kitchen dimensions or measurements if available."
        },
        {
          title: "Existing Kitchen Photos",
          desc: "Photos can help communicate the current condition and layout of your kitchen."
        },
        {
          title: "Desired Changes",
          desc: "Explain which elements you want to renovate, replace, remove or add."
        },
        {
          title: "Design Preferences",
          desc: "Share your preferred kitchen style, materials, colours, finishes and design ideas."
        },
        {
          title: "Timeline and Budget",
          desc: "Provide your preferred project timeline and approximate budget or specifications if available."
        }
      ]
    }
  ],

  process: [
    {
      step: "01",
      title: "Submit Your Requirements",
      desc: "Tell us what you want to change in your kitchen, including your property type, renovation requirements, preferred specifications and project goals."
    },
    {
      step: "02",
      title: "Share Your Project Details",
      desc: "Provide useful information such as photos, measurements, design ideas, preferred materials, appliance requirements and other relevant project details."
    },
    {
      step: "03",
      title: "Connect With Suitable Professionals",
      desc: "MR Renovate can connect your project requirements with suitable kitchen renovation professionals within its network."
    },
    {
      step: "04",
      title: "Discuss & Decide",
      desc: "Discuss the scope of work, materials, design requirements, timeline and quotation with the professionals involved, then decide how you want to proceed."
    }
  ],
faqDescription:
    "Find answers to common questions about kitchen renovation in Dubai.",

  faqs: [
    {
      question: "How much does kitchen renovation cost in Dubai?",
      answer: "Kitchen renovation costs vary depending on the kitchen size, materials, cabinetry, appliances, layout changes and overall scope of work. A basic refresh and a complete kitchen renovation can have very different budgets."
    },
    {
      question: "How long does a kitchen renovation take in Dubai?",
      answer: "The timeline depends on the scope of the renovation. A smaller update may require less work than a complete renovation involving cabinetry, plumbing, electrical work, flooring and other changes. The expected timeline should be discussed based on your specific project."
    },
    {
      question: "Can I renovate an apartment kitchen in Dubai?",
      answer: "Yes. Apartment kitchens can be renovated based on the available space, existing layout and project requirements. The renovation scope should be planned around the specific apartment and the changes you want to make."
    },
    {
      question: "Can I change my kitchen layout?",
      answer: "Layout changes may be possible depending on the property and existing kitchen configuration. Changes involving plumbing, electrical connections or other building elements should be discussed with the appropriate renovation professional."
    },
    {
      question: "What should I include when requesting a kitchen renovation?",
      answer: "Include your property type, kitchen dimensions, photos, existing layout, desired changes, preferred materials or style, appliance requirements, timeline and approximate budget if available."
    },
    {
      question: "How do I find a kitchen renovation company in Dubai?",
      answer: "You can start by clearly defining your renovation requirements and looking for suitable kitchen renovation professionals. MR Renovate allows property owners to submit their requirements and connect with suitable professionals within its network."
    },
    {
      question: "What is the difference between a kitchen renovation and a kitchen makeover?",
      answer: "A kitchen makeover usually focuses on selected visual or functional updates, while a renovation can involve more extensive changes to cabinetry, layout, plumbing, electrical work, flooring, appliances and other elements."
    }
  ],

  gallery: [
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
    "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80"
  ],

  },
  "bathroom-renovation": {
  icon: Bath,
  title: "Bathroom Renovation Dubai",
  tagline: "Plan Your Bathroom Renovation With the Right Professionals",
  heroImage: "...",

  seoTitle: "Bathroom Renovation Dubai | Bathroom Renovation Services",
  seoDescription: "Planning a bathroom renovation in Dubai? Submit your project requirements through MR Renovate and connect with suitable bathroom renovation professionals.",
  seoKeywords: "bathroom renovation Dubai, bathroom renovation in Dubai, Dubai bathroom renovation, bathroom renovation companies in Dubai, bathroom remodeling Dubai",

  introTitle: "Bathroom Renovation Services in",
  introTitleAccent:"Dubai",
  ctaText: "Submit Your Bathroom Renovation Requirements",
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

  seoTitle: "Painting Services Dubai | Interior & Exterior Painting",
  seoDescription: "Looking for painting services in Dubai? Submit your project requirements through MR Renovate and connect with suitable painting and finishing professionals.",
  seoKeywords: "painting services Dubai, painting companies Dubai, house painting Dubai, interior painting Dubai, exterior painting Dubai, painting contractors Dubai",

  introTitle: "Painting & Finishing Services in",
  introTitleAccent: "Dubai",
  ctaText: "Submit Your Painting Requirements",
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

  seoTitle: "Flooring Services Dubai | Flooring Solutions",
  seoDescription: "Planning a flooring project in Dubai? Submit your requirements through MR Renovate and connect with suitable flooring professionals for your renovation.",
  seoKeywords: "flooring services Dubai, flooring companies Dubai, flooring contractors Dubai, floor renovation Dubai, home flooring Dubai, flooring solutions Dubai",

  introTitle: "Flooring Services in",
  introTitleAccent: "Dubai",
  ctaText: "Submit Your Flooring Requirements",
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

  seoTitle: "Landscaping Services Dubai | Outdoor Renovation",
  seoDescription: "Planning a landscaping or outdoor renovation project in Dubai? Submit your requirements through MR Renovate and connect with suitable landscaping professionals.",
  seoKeywords: "landscaping services Dubai, landscaping companies Dubai, landscaping contractors Dubai, garden landscaping Dubai, outdoor renovation Dubai, villa landscaping Dubai",

  introTitle: "Landscaping & Outdoor Services in",
  introTitleAccent: "Dubai",
  ctaText: "Submit Your Landscaping Requirements",
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

  seoTitle: "General Renovation Dubai | Renovation Services",
  seoDescription: "Planning a renovation project in Dubai? Submit your requirements through MR Renovate and connect with suitable renovation professionals for your property.",
  seoKeywords: "general renovation Dubai, renovation services Dubai, renovation companies Dubai, property renovation Dubai, home renovation Dubai, renovation contractors Dubai",

  introTitle: "General Renovation Services in",
  introTitleAccent: "Dubai",
  ctaText: "Submit Your Renovation Requirements",
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

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.seoDescription,
    image: service.heroImage,
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

  return (
    <>
      <SEO
  title={`${service.seoTitle} | Mr Renovate`}
  description={service.seoDescription}
  keywords={service.seoKeywords}
  schema={[serviceSchema]}
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

       
{/* Introduction */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      <ScrollReveal>
        <h2 className="text-3xl font-display font-bold text-foreground">
         {service.introTitle}{" "}
         <span className="text-accent">
           {service.introTitleAccent}
         </span>
        </h2>

        {service.description.map((p, i) => (
          <p
            key={i}
            className="mt-4 text-muted-foreground font-body text-lg leading-relaxed"
          >
            {p}
          </p>
        ))}

        <Link to="/get-started">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-xl"
          >
            <Phone className="w-4 h-4" />
              {service.ctaText}
          </motion.div>
        </Link>
      </ScrollReveal>

      {/* Features */}
      <ScrollReveal delay={0.2}>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="p-5 rounded-xl border border-border bg-card"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-body font-medium text-foreground">
                  {feature}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

    </div>
  </div>
</section>

{/* SEO Content Sections */}
{service.sections?.map((section, index) => (
  <section
    key={index}
    className={`py-20 ${
      index % 2 === 0 ? "bg-muted/30" : "bg-background"
    }`}
  >
    <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
          {section.title}
        </h2>

        {section.content?.map((paragraph, i) => (
          <p
            key={i}
            className="mt-4 text-muted-foreground font-body text-lg leading-relaxed max-w-4xl"
          >
            {paragraph}
          </p>
        ))}
      </ScrollReveal>

      {section.items && (
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {section.items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="h-full p-6 rounded-2xl border border-border bg-card">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-muted-foreground font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}

    </div>
  </section>
))}

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

{/* FAQs */}
{service.faqs && service.faqs.length > 0 && (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-4xl">

      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>

          <p className="mt-4 text-muted-foreground font-body text-lg">
              {service.faqDescription}
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {service.faqs.map((faq, index) => (
          <ScrollReveal key={index} delay={index * 0.05}>
            <details className="group rounded-xl border border-border bg-card p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-semibold text-lg text-foreground">
                {faq.question}

                <span className="text-accent text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>

              <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                {faq.answer}
              </p>
            </details>
          </ScrollReveal>
        ))}
      </div>

    </div>
  </section>
)}

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
