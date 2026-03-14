import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-display font-bold text-primary-foreground">
              Mr<span className="text-accent">Renovate</span>
            </span>
            <p className="mt-4 text-sm font-body text-primary-foreground/50 leading-relaxed">
              Dubai's premier two-sided marketplace connecting homeowners with pre-vetted renovation professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
                { label: "Get Started", href: "/get-started" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm font-body text-primary-foreground/50 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {["Kitchen Renovation", "Bathroom Remodeling", "Flooring", "Painting", "Landscaping", "Full Renovation"].map((s) => (
                <li key={s}>
                  <span className="text-sm font-body text-primary-foreground/50">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm font-body text-primary-foreground/50">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+971501234567" className="text-sm font-body text-primary-foreground/50 hover:text-accent transition-colors">
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@mrrenovate.ae" className="text-sm font-body text-primary-foreground/50 hover:text-accent transition-colors">
                  info@mrrenovate.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-primary-foreground/30">
            © {new Date().getFullYear()} Mr Renovate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs font-body text-primary-foreground/30 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs font-body text-primary-foreground/30 hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
