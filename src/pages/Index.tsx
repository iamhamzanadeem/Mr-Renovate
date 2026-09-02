import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import AboutMarketplace from "@/components/landing/AboutMarketplace";
import StatsCounter from "../components/landing/StatsCounter";
import HowItWorks from "../components/landing/HowItWorks";
import ServiceCategories from "../components/landing/ServiceCategories";
import PropertyTypes from "@/components/landing/PropertyTypes";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
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

description:"Find trusted renovation services in Dubai for kitchens, bathrooms, villas, apartments and full home renovations. Get matched with vetted professionals and free quotes."};
  
  return (
    <>
       <SEO
        title="Renovation Companies in Dubai | Find & Connect with Pros | MR Renovate"
        description="Find trusted renovation services in Dubai for kitchens, bathrooms, villas, apartments and full home renovations. Get matched with vetted professionals and free quotes." 
         schema={[localBusinessSchema]}
   />
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Navbar />

      <main>
        <Hero />
        <AboutMarketplace />
        <StatsCounter />
        <HowItWorks />
        <ServiceCategories />
        <PropertyTypes />
        <WhyChooseUs />
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
