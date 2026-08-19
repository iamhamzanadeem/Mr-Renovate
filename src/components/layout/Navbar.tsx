import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-xl shadow-lg shadow-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="flex items-center"
              >
                <span className="text-2xl font-display font-bold text-primary-foreground">
                  Mr<span className="text-accent">Renovate</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Links */}
            {/* Desktop Links */}
<div className="hidden lg:flex items-center gap-8">

  {/* Home */}
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <Link
      to="/"
      className="relative text-sm font-body font-medium text-primary-foreground/80 hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
    >
      Home
    </Link>
  </motion.div>

  {/* About */}
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.38 }}
  >
    <Link
      to="/about-us"
      className="relative text-sm font-body font-medium text-primary-foreground/80 hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
    >
      About
    </Link>
  </motion.div>

  {/* Services Dropdown */}
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.46 }}
    className="relative"
    onMouseEnter={() => setIsServicesOpen(true)}
    onMouseLeave={() => setIsServicesOpen(false)}
  >
    <Link
      to="/services"
      className="relative flex items-center gap-1 text-sm font-body font-medium text-primary-foreground/80 hover:text-accent transition-colors duration-300"
    >
      Services

      <ChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${
          isServicesOpen ? "rotate-180" : ""
        }`}
      />
    </Link>

    <AnimatePresence>
      {isServicesOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full pt-4 w-64"
        >
          <div className="bg-primary rounded-xl shadow-2xl border border-primary-foreground/10 overflow-hidden">

            <Link
              to="/services"
              className="block px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors border-b border-primary-foreground/10"
            >
              All Services
            </Link>

            <Link
              to="/services/kitchen-renovation"
              className="block px-5 py-3 text-sm text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Kitchen Renovation
            </Link>

            <Link
              to="/services/bathroom-renovation"
              className="block px-5 py-3 text-sm text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Bathroom Renovation
            </Link>

            <Link
              to="/services/flooring"
              className="block px-5 py-3 text-sm text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Flooring
            </Link>

            <Link
              to="/services/painting-services"
              className="block px-5 py-3 text-sm text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Painting Services
            </Link>

            <Link
              to="/services/landscaping"
              className="block px-5 py-3 text-sm text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Landscaping
            </Link>

            <Link
              to="/services/general-renovation"
              className="block px-5 py-3 text-sm text-primary-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Full Home Renovation
            </Link>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>

  {/* Gallery */}
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.54 }}
  >
    <Link
      to="/gallery"
      className="relative text-sm font-body font-medium text-primary-foreground/80 hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
    >
      Gallery
    </Link>
  </motion.div>

  {/* Contact */}
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.62 }}
  >
    <Link
      to="/contact"
      className="relative text-sm font-body font-medium text-primary-foreground/80 hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
    >
      Contact
    </Link>
  </motion.div>

</div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="hidden md:block"
              >
                <Link
                  to="/get-started"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground font-body font-semibold text-sm rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  Get Free Consultation
                </Link>
              </motion.div>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 text-primary-foreground"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-3xl font-display font-bold text-primary-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/get-started"
                onClick={() => setIsMobileOpen(false)}
                className="mt-4 inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-lg"
              >
                Get Free Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
