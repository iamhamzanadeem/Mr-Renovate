import ScrollReveal from "../animations/ScrollReveal";
import TextReveal from "../animations/TextReveal";
import { Search, FileText, MapPin, Hammer } from "lucide-react";

const features = [
  {
    title: "Streamlined Discovery",
    description: "Skip the hassle of searching through multiple renovation companies and contacting them individually. MR Renovate helps you find renovation professionals suited to your project requirements.",
    icon: Search,
  },
  {
    title: "One Clear Submission",
    description: "Share your renovation requirements through one platform and get connected with professionals who may be suitable for your project.",
    icon: FileText,
  },
  {
    title: "Local Market Focus",
    description: "Connect with renovation professionals serving Dubai and explore options suited to your property's location and renovation needs.",
    icon: MapPin,
  },
  {
    title: "Broad Service Range",
    description: "From painting and flooring to kitchen, bathroom, and general renovation projects, explore professionals across a range of renovation specialties.",
    icon: Hammer,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <TextReveal
            as="h2"
            className="text-3xl md:text-4xl font-display font-bold text-foreground"
            text="Why Find Your Renovation Contractor Through MR Renovate?"
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              direction={index % 2 === 0 ? "left" : "right"} 
              delay={index * 0.1}
            >
              <div className="flex gap-4 md:gap-6 p-6 rounded-2xl bg-background border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;