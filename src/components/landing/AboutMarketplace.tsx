import ScrollReveal from "../animations/ScrollReveal";
import TextReveal from "../animations/TextReveal";
import { ArrowRight, Users, ClipboardList, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const AboutMarketplace = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Renovation professionals working on a property in Dubai"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />

              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6" />

                  <div>
                    <p className="font-display font-bold text-lg">
                      Renovation Network
                    </p>

                    <p className="text-sm opacity-90">
                      Dubai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>

              <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">
                About MR Renovate
              </span>

              <TextReveal
                as="h2"
                className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3"
                text="Dubai's Renovation Marketplace Connecting You With Professionals"
              />

              <p className="mt-6 text-muted-foreground font-body leading-relaxed text-lg">
                MR Renovate makes it easier to find renovation companies and
                professionals in Dubai. Tell us about your renovation
                requirements, and we help connect you with professionals
                suited to your project.
              </p>

              <p className="mt-4 text-muted-foreground font-body leading-relaxed text-lg">
                Whether you are planning a home, villa, apartment, or
                commercial renovation, MR Renovate provides a convenient
                starting point for finding the right professionals for your
                renovation needs.
              </p>

              {/* Marketplace Process */}
              <div className="grid sm:grid-cols-3 gap-6 mt-10">

                {/* Share Requirements */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <ClipboardList className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="font-display font-semibold text-foreground mt-3">
                    Share Your Needs
                  </h3>

                  <p className="text-sm text-muted-foreground font-body mt-1">
                    Tell us about your renovation project.
                  </p>
                </div>

                {/* Find Professionals */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="font-display font-semibold text-foreground mt-3">
                    Find Professionals
                  </h3>

                  <p className="text-sm text-muted-foreground font-body mt-1">
                    Explore suitable renovation professionals.
                  </p>
                </div>

                {/* Connect */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="font-display font-semibold text-foreground mt-3">
                    Connect
                  </h3>

                  <p className="text-sm text-muted-foreground font-body mt-1">
                    Move forward with the professional you choose.
                  </p>
                </div>

              </div>

              {/* About Link */}
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 mt-10 text-accent font-body font-semibold hover:gap-3 transition-all"
              >
                Learn More About MR Renovate
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AboutMarketplace;