import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import StatsCounter from "../components/landing/StatsCounter";
import HowItWorks from "../components/landing/HowItWorks";
import ServiceCategories from "../components/landing/ServiceCategories";
import FeaturedProjects from "../components/landing/FeaturedProjects";
import Testimonials from "../components/landing/Testimonials";
import TrustBadges from "../components/landing/TrustBadges";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

 const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Mr Renovate",
  url: "https://mrrenovate.ae",
  logo: "https://mrrenovate.ae/logo.png",
  image: "https://mrrenovate.ae/og-image.jpg",

    telephone: "+971501234567",

    address: {"@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE"},

areaServed: "Dubai",

priceRange: "$$",

description:"Mr Renovate is a home renovation company in Dubai providing kitchen renovation, bathroom renovation, flooring, painting and villa renovation."};
  
  return (
    <>
       <SEO
        title="Home Renovation Dubai | Home Renovation Company Dubai | Mr Renovate"
        description="Mr Renovate is a trusted home renovation company in Dubai offering kitchen renovation, bathroom remodeling, flooring, painting and complete villa renovation services. Get a free quote today." 
         schema={[localBusinessSchema]}
   />
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Navbar />

      <main>
        <Hero />
        <StatsCounter />
        <HowItWorks />
        <ServiceCategories />
        <FeaturedProjects />
        <Testimonials />
        <TrustBadges />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
