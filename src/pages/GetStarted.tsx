import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ChefHat, Bath, PaintBucket, Layers, TreePine, Wrench, ArrowRight, ArrowLeft, CheckCircle, Phone, User, Calendar, DollarSign } from "lucide-react";
import { z } from "zod";
import SEO from "@/components/SEO";

const serviceTypes = [
  { id: "kitchen", label: "Kitchen", icon: ChefHat },
  { id: "bathroom", label: "Bathroom", icon: Bath },
  { id: "painting", label: "Painting", icon: PaintBucket },
  { id: "flooring", label: "Flooring", icon: Layers },
  { id: "outdoor", label: "Outdoor", icon: TreePine },
  { id: "full", label: "Full Renovation", icon: Wrench },
];

const budgetRanges = [
  "Under AED 25,000",
  "AED 25,000 – 50,000",
  "AED 50,000 – 100,000",
  "AED 100,000 – 250,000",
  "AED 250,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

const detailsSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  location: z.string().trim().min(1, "Location is required").max(200),
  details: z.string().max(2000).optional(),
});

const steps = ["Service Type", "Budget & Timeline", "Your Details", "Confirmation"];

const GetStarted = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", details: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const canNext = () => {
    if (step === 0) return selectedServices.length > 0;
    if (step === 1) return budget !== "" && timeline !== "";
    if (step === 2) return true;
    return false;
  };

  const handleNext = () => {
    if (step === 2) {
      const result = detailsSchema.safeParse(form);
      if (!result.success) {
        const fieldErrors: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
        });
        setErrors(fieldErrors);
        return;
      }
    }
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    toast({ title: "Request submitted!", description: "We'll call you within 24 hours with your free quote." });
  };

  return (
    <>
    <SEO
     title="Renovation Gallery | Mr Renovate Dubai"
     description="Browse our completed kitchen, bathroom and home renovation projects across Dubai."
    />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[45vh] flex items-center bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" alt="Get started" className="w-full h-full object-cover opacity-15 animate-ken-burns" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-12">
            <TextReveal text="Get Your Free Quote" as="h1" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground" goldWords={[2, 3]} delay={0.2} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-4 text-lg text-primary-foreground/70 font-body max-w-xl">
              Tell us about your project in 3 simple steps — we'll respond with a detailed quote within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Multi-Step Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            {/* Progress */}
            <div className="flex items-center justify-between mb-12">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-body font-bold text-sm transition-colors duration-300 ${
                    i <= step ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {i < step ? <CheckCircle className="w-5 h-5" /> : i + 1}
                  </div>
                  <span className="hidden sm:block ml-2 text-sm font-body text-muted-foreground">{s}</span>
                  {i < steps.length - 1 && (
                    <div className={`w-8 sm:w-16 h-px mx-2 transition-colors duration-300 ${i < step ? "bg-accent" : "bg-border"}`} />
                  )}
                </div>
              ))}
            </div>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-secondary rounded-2xl p-12 text-center">
                <CheckCircle className="w-20 h-20 text-accent mx-auto mb-6" />
                <h2 className="text-3xl font-display font-bold text-foreground">You're All Set!</h2>
                <p className="text-muted-foreground font-body mt-4 max-w-md mx-auto">
                  Thank you, {form.name}! Our team will review your request and call you within 24 hours with a detailed, no-obligation quote.
                </p>
                <div className="mt-8 p-6 bg-card rounded-xl text-left max-w-sm mx-auto">
                  <h4 className="font-body font-semibold text-foreground text-sm mb-3">Your Request Summary</h4>
                  <div className="space-y-2 text-sm font-body text-muted-foreground">
                    <p><strong className="text-foreground">Services:</strong> {selectedServices.map((s) => serviceTypes.find((st) => st.id === s)?.label).join(", ")}</p>
                    <p><strong className="text-foreground">Budget:</strong> {budget}</p>
                    <p><strong className="text-foreground">Timeline:</strong> {timeline}</p>
                    <p><strong className="text-foreground">Location:</strong> {form.location}</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 0: Service Type */}
                  {step === 0 && (
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground mb-2">What do you need?</h2>
                      <p className="text-muted-foreground font-body mb-8">Select one or more services you're interested in.</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {serviceTypes.map((s) => (
                          <motion.button
                            key={s.id}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => toggleService(s.id)}
                            className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 ${
                              selectedServices.includes(s.id)
                                ? "border-accent bg-accent/10 shadow-md"
                                : "border-border bg-card hover:border-accent/40"
                            }`}
                          >
                            <s.icon className={`w-8 h-8 mx-auto mb-3 ${selectedServices.includes(s.id) ? "text-accent" : "text-muted-foreground"}`} />
                            <span className={`font-body font-medium text-sm ${selectedServices.includes(s.id) ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 1: Budget & Timeline */}
                  {step === 1 && (
                    <div>
                      <div className="mb-10">
                        <h2 className="text-2xl font-display font-bold text-foreground mb-2 flex items-center gap-2"><DollarSign className="w-6 h-6 text-accent" /> Budget Range</h2>
                        <p className="text-muted-foreground font-body mb-6">This helps us tailor our recommendation.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {budgetRanges.map((b) => (
                            <motion.button
                              key={b}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => setBudget(b)}
                              className={`p-4 rounded-xl border-2 text-sm font-body font-medium transition-all ${
                                budget === b ? "border-accent bg-accent/10 text-foreground" : "border-border bg-card text-muted-foreground hover:border-accent/40"
                              }`}
                            >
                              {b}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold text-foreground mb-2 flex items-center gap-2"><Calendar className="w-6 h-6 text-accent" /> Timeline</h2>
                        <p className="text-muted-foreground font-body mb-6">When do you want to start?</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {timelines.map((t) => (
                            <motion.button
                              key={t}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => setTimeline(t)}
                              className={`p-4 rounded-xl border-2 text-sm font-body font-medium transition-all ${
                                timeline === t ? "border-accent bg-accent/10 text-foreground" : "border-border bg-card text-muted-foreground hover:border-accent/40"
                              }`}
                            >
                              {t}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Details */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground mb-2 flex items-center gap-2"><User className="w-6 h-6 text-accent" /> Your Details</h2>
                      <p className="text-muted-foreground font-body mb-8">So we can prepare your personalized quote.</p>
                      <div className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <Input name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} className="bg-secondary border-border focus:border-accent" />
                            {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
                          </div>
                          <div>
                            <Input name="email" type="email" placeholder="Email *" value={form.email} onChange={handleChange} className="bg-secondary border-border focus:border-accent" />
                            {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <Input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} className="bg-secondary border-border focus:border-accent" />
                            {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
                          </div>
                          <div>
                            <Input name="location" placeholder="Area / Community *" value={form.location} onChange={handleChange} className="bg-secondary border-border focus:border-accent" />
                            {errors.location && <p className="text-destructive text-xs mt-1 font-body">{errors.location}</p>}
                          </div>
                        </div>
                        <div>
                          <Textarea name="details" placeholder="Any additional details about your project (optional)" value={form.details} onChange={handleChange} className="bg-secondary border-border focus:border-accent min-h-[120px]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {step === 3 && (
                    <div className="text-center">
                      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Review & Submit</h2>
                      <div className="bg-secondary rounded-2xl p-8 text-left max-w-md mx-auto mb-8">
                        <div className="space-y-4 text-sm font-body">
                          <div className="flex justify-between"><span className="text-muted-foreground">Services</span><span className="text-foreground font-semibold">{selectedServices.map((s) => serviceTypes.find((st) => st.id === s)?.label).join(", ")}</span></div>
                          <div className="border-t border-border" />
                          <div className="flex justify-between"><span className="text-muted-foreground">Budget</span><span className="text-foreground font-semibold">{budget}</span></div>
                          <div className="flex justify-between"><span className="text-muted-foreground">Timeline</span><span className="text-foreground font-semibold">{timeline}</span></div>
                          <div className="border-t border-border" />
                          <div className="flex justify-between"><span className="text-muted-foreground">Name</span><span className="text-foreground font-semibold">{form.name}</span></div>
                          <div className="flex justify-between"><span className="text-muted-foreground">Email</span><span className="text-foreground font-semibold">{form.email}</span></div>
                          <div className="flex justify-between"><span className="text-muted-foreground">Phone</span><span className="text-foreground font-semibold">{form.phone}</span></div>
                          <div className="flex justify-between"><span className="text-muted-foreground">Location</span><span className="text-foreground font-semibold">{form.location}</span></div>
                        </div>
                      </div>
                      <Button onClick={handleSubmit} className="bg-accent text-accent-foreground hover:bg-gold-light px-10 py-3 font-body font-semibold text-base animate-pulse-glow">
                        <Phone className="w-4 h-4 mr-2" /> Submit & Get Free Quote
                      </Button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            )}

            {/* Navigation */}
            {!submitted && (
              <div className="flex justify-between mt-10">
                {step > 0 ? (
                  <Button variant="outline" onClick={() => setStep(step - 1)} className="font-body">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                ) : <div />}
                {step < 3 && (
                  <Button onClick={handleNext} disabled={!canNext()} className="bg-accent text-accent-foreground hover:bg-gold-light font-body">
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GetStarted;
