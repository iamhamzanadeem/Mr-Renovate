import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { Users, Award, Clock, Target, Heart, Shield, Eye, Gem } from "lucide-react";
import SEO from "@/components/SEO";


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mr Renovate",
  url: "https://mrrenovate.ae/",
  description:
    "Mr Renovate is a home renovation company in Dubai providing kitchen, bathroom, flooring, painting, landscaping and complete renovation services.",
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Mr Renovate",
  url: "https://mrrenovate.ae/about",
  mainEntity: {
    "@type": "Organization",
    name: "Mr Renovate",
    url: "https://mrrenovate.ae/",
  },
};

const teamMembers = [
  {
    name: "Ahmed Al-Rashid",
    role: "Founder & CEO",
    bio: "20+ years transforming Dubai homes with precision craftsmanship and visionary design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Design",
    bio: "Award-winning interior designer specializing in luxury residential spaces across the UAE.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Omar Hassan",
    role: "Project Director",
    bio: "Engineering excellence meets meticulous project management for flawless delivery.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Fatima Al-Sayed",
    role: "Client Relations",
    bio: "Ensuring every client journey is seamless from first consultation to final walkthrough.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

const values = [
  { icon: Gem, title: "Craftsmanship", description: "Every detail matters. We use only premium materials and time-honored techniques." },
  { icon: Shield, title: "Integrity", description: "Transparent pricing, honest timelines, and zero hidden costs — guaranteed." },
  { icon: Eye, title: "Vision", description: "We see potential where others see walls. Every space has a story waiting to be told." },
  { icon: Heart, title: "Passion", description: "Renovation isn't just our business — it's our calling. Your dream fuels our drive." },
];

const milestones = [
  { year: "2005", title: "Founded in Dubai", description: "Started with a vision to elevate home renovation standards in the UAE." },
  { year: "2010", title: "500 Projects Completed", description: "Reached our first major milestone with a 98% client satisfaction rate." },
  { year: "2016", title: "Award-Winning Studio", description: "Recognized by Dubai Design Week for excellence in residential renovation." },
  { year: "2020", title: "Expanded Services", description: "Launched full-spectrum renovation including smart home integration." },
  { year: "2024", title: "2,500+ Happy Homes", description: "Continuing to set the standard for premium renovation in the Gulf region." },
];

const About = () => {
  return (
    <>
     <SEO
        title="About Mr Renovate | Home Renovation Company in Dubai"
        description="Learn about Mr Renovate, Dubai's trusted renovation company providing kitchen, bathroom, flooring and complete home renovation services."
        schema={[organizationSchema, aboutPageSchema]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
              alt="Luxury renovated interior"
              className="w-full h-full object-cover opacity-20 animate-ken-burns"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16">
            <TextReveal text="Building Dreams, One Room at a Time" as="h1" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground max-w-3xl" goldWords={[0, 1]} delay={0.2} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-6 text-lg md:text-xl text-primary-foreground/70 font-body max-w-2xl">
              For nearly two decades, Mr Renovate has been Dubai's most trusted name in premium home renovation — transforming spaces into sanctuaries.
            </motion.p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <ScrollReveal direction="left">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Our workshop" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
                  <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-8 py-4 rounded-xl shadow-lg font-display font-bold text-2xl">
                    Est. 2005
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
                  From Humble Beginnings to Dubai's <span className="text-accent">Premier Renovators</span>
                </h2>
                <p className="mt-6 text-muted-foreground font-body leading-relaxed text-lg">
                  What started as a small workshop in Al Quoz has grown into one of Dubai's most respected renovation companies. Our founder, Ahmed Al-Rashid, believed that every home deserves the same attention to detail as the city's iconic skyline.
                </p>
                <p className="mt-4 text-muted-foreground font-body leading-relaxed text-lg">
                  Today, we bring together a team of 50+ skilled craftsmen, designers, and project managers — all united by a singular mission: to transform your living space into something extraordinary.
                </p>
                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div className="text-center">
                    <AnimatedCounter target={2500} suffix="+" className="text-3xl font-display font-bold text-accent" />
                    <p className="text-sm text-muted-foreground font-body mt-1">Projects Done</p>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter target={19} suffix=" yrs" className="text-3xl font-display font-bold text-accent" />
                    <p className="text-sm text-muted-foreground font-body mt-1">Experience</p>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter target={98} suffix="%" className="text-3xl font-display font-bold text-accent" />
                    <p className="text-sm text-muted-foreground font-body mt-1">Satisfaction</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
                What We <span className="text-accent">Stand For</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <motion.div whileHover={{ y: -8 }} className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">{value.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
                Milestones That <span className="text-accent">Define Us</span>
              </h2>
            </ScrollReveal>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
              {milestones.map((ms, i) => (
                <ScrollReveal key={ms.year} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <span className="text-accent font-display font-bold text-2xl">{ms.year}</span>
                      <h3 className="text-xl font-display font-bold text-foreground mt-1">{ms.title}</h3>
                      <p className="text-muted-foreground font-body mt-2">{ms.description}</p>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-accent border-4 border-background shadow-md absolute left-1/2 -translate-x-1/2 z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <span className="text-accent font-body font-semibold text-sm uppercase tracking-widest">Meet the Team</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-3">
                The People Behind the <span className="text-accent">Magic</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <ScrollReveal key={member.name} delay={i * 0.1}>
                  <motion.div whileHover={{ y: -8 }} className="group text-center">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-primary-foreground">{member.name}</h3>
                    <p className="text-accent font-body font-semibold text-sm mt-1">{member.role}</p>
                    <p className="text-primary-foreground/60 font-body text-sm mt-3">{member.bio}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mission CTA */}
        <section className="py-20 lg:py-28 bg-accent">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <ScrollReveal>
              <div className="flex justify-center gap-6 mb-8">
                <Target className="w-8 h-8 text-accent-foreground" />
                <Users className="w-8 h-8 text-accent-foreground" />
                <Award className="w-8 h-8 text-accent-foreground" />
                <Clock className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground max-w-2xl mx-auto">
                Our Mission: Make Every Home in Dubai a Masterpiece
              </h2>
              <p className="mt-6 text-accent-foreground/80 font-body text-lg max-w-xl mx-auto">
                We don't just renovate spaces — we elevate lifestyles. Ready to join 2,500+ happy homeowners?
              </p>
              <motion.a
                href="/get-started"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block mt-8 px-10 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Your Renovation
              </motion.a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
