import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import SEO from "@/components/SEO";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Mr Renovate",
  url: "https://mrrenovate.ae/contact",
  description:
    "Contact Mr Renovate for kitchen, bathroom, flooring, painting and complete home renovation services in Dubai.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Mr Renovate",
    url: "https://mrrenovate.ae/",
  },
};

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const contactInfo = [
  { icon: Phone, label: "Call Us", value: "+971 55 595 9267", href: "tel:+971555959267" },
  { icon: Mail, label: "Email Us", value: "info@mrrenovate.ae", href: "mailto:info@mrrenovate.ae" },
  { icon: MapPin, label: "Visit Us", value: "Al Quoz Industrial 3, Dubai, UAE", href: "#map" },
  { icon: Clock, label: "Working Hours", value: "Sun–Thu: 8AM – 6PM | Sat: 9AM – 2PM", href: undefined },
];


const Contact = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
  };

  const whatsappLink = `https://wa.me/971555959267?text=${encodeURIComponent("Hi Mr Renovate, I'd like to discuss a renovation project.")}`;

  return (
    <>
     <SEO
      title="Contact Mr Renovate | Get a Free Quote"
      description="Contact Mr Renovate for professional renovation services in Dubai. Request a free consultation today."
      schema={[contactPageSchema]}
     />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80" alt="Contact us" className="w-full h-full object-cover opacity-15 animate-ken-burns" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16">
            <TextReveal text="Let's Talk About Your Project" as="h1" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground" goldWords={[0, 1]} delay={0.2} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-6 text-lg text-primary-foreground/70 font-body max-w-2xl">
              Have a question or ready to start? Reach out — we respond within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20">
              {contactInfo.map((info, i) => (
                <ScrollReveal key={info.label} delay={i * 0.1}>
                  <motion.div whileHover={{ y: -4 }} className="bg-card rounded-2xl p-6 shadow-lg text-center">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-foreground">{info.label}</h3>
                    {info.href ? (
                      <a href={info.href} className="text-muted-foreground font-body text-sm mt-2 block hover:text-accent transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-muted-foreground font-body text-sm mt-2">{info.value}</p>
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form + WhatsApp */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <ScrollReveal>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-8">Send Us a <span className="text-accent">Message</span></h2>
                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-secondary rounded-2xl p-12 text-center">
                      <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                      <h3 className="text-2xl font-display font-bold text-foreground">Thank You!</h3>
                      <p className="text-muted-foreground font-body mt-3">We've received your message and will get back to you within 24 hours.</p>
                      <Button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }} className="mt-6 bg-accent text-accent-foreground hover:bg-gold-light">
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} className="bg-secondary border-border focus:border-accent" />
                          {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
                        </div>
                        <div>
                          <Input name="email" type="email" placeholder="Email Address *" value={form.email} onChange={handleChange} className="bg-secondary border-border focus:border-accent" />
                          {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} className="bg-secondary border-border focus:border-accent" />
                          {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
                        </div>
                        <div>
                          <Input name="subject" placeholder="Subject *" value={form.subject} onChange={handleChange} className="bg-secondary border-border focus:border-accent" />
                          {errors.subject && <p className="text-destructive text-xs mt-1 font-body">{errors.subject}</p>}
                        </div>
                      </div>
                      <div>
                        <Textarea name="message" placeholder="Tell us about your project... *" value={form.message} onChange={handleChange} className="bg-secondary border-border focus:border-accent min-h-[150px]" />
                        {errors.message && <p className="text-destructive text-xs mt-1 font-body">{errors.message}</p>}
                      </div>
                      <Button type="submit" className="bg-accent text-accent-foreground hover:bg-gold-light px-8 py-3 font-body font-semibold">
                        <Send className="w-4 h-4 mr-2" /> Send Message
                      </Button>
                    </form>
                  )}
                </ScrollReveal>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <ScrollReveal delay={0.2}>
                  <div className="bg-primary rounded-2xl p-8 sticky top-28">
                    <h3 className="text-xl font-display font-bold text-primary-foreground mb-4">Prefer WhatsApp?</h3>
                    <p className="text-primary-foreground/70 font-body text-sm mb-6">
                      Get an instant response from our team on WhatsApp — the fastest way to start your project.
                    </p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald text-white font-body font-semibold rounded-xl">
                        <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                      </motion.div>
                    </a>

                    <div className="mt-8 pt-8 border-t border-primary-foreground/10">
                      <h4 className="text-sm font-body font-semibold text-primary-foreground/80 uppercase tracking-wider mb-4">Why Choose Us</h4>
                      <ul className="space-y-3">
                        {["Free consultation & quote", "Response within 24 hours", "No hidden costs — ever", "Licensed & insured"].map((item) => (
                          <li key={item} className="flex items-center gap-2 text-primary-foreground/70 font-body text-sm">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section id="map" className="h-96 bg-muted">
          <iframe
            title="Mr Renovate Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5!2d55.22!3d25.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzQ4LjAiTiA1NcKwMTMnMTIuMCJF!5e0!3m2!1sen!2sae!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
