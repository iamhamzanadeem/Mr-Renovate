import ScrollReveal from "../animations/ScrollReveal";
import TextReveal from "../animations/TextReveal";
import { Building2, Home, Store } from "lucide-react";

const propertyTypes = [
  {
    icon: Home,
    title: "Villas & Townhouses",
    description:
      "Comprehensive interior remodeling, exterior extensions, MEP upgrades, and outdoor living transformations.",
  },
  {
    icon: Building2,
    title: "Apartments & Penthouses",
    description:
      "Modern layout adjustments, smart home integrations, acoustics, and high-rise cosmetic refits.",
  },
  {
    icon: Store,
    title: "Offices & Commercial Spaces",
    description:
      "Commercial fit-outs, retail refurbishments, partition setups, and functional workspace upgrades.",
  },
];

const PropertyTypes = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Heading */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">
              Property Types
            </span>

            <TextReveal
                as= "h2"
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3"
                text= "Renovations Tailored for Every Property Type"
            />

            <p className="mt-6 text-muted-foreground font-body leading-relaxed text-lg">
              Professionals in our network handle projects of all scales
              across residential, commercial, and hospitality spaces.
            </p>
          </div>
        </ScrollReveal>

        {/* Property Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-14">

          {propertyTypes.map((property, index) => {
            const Icon = property.icon;

            return (
              <ScrollReveal
                key={property.title}
                direction="up"
                delay={index * 0.15}
              >
                <div className="h-full rounded-2xl bg-background border border-border p-8 hover:shadow-xl transition-shadow duration-300">

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground">
                    {property.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                    {property.description}
                  </p>

                </div>
              </ScrollReveal>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;