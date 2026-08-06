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

  return (
    <>
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
