import { useRef, useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ScrollReveal from "../animations/ScrollReveal";
import TextReveal from "../animations/TextReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Al-Maktoum",
    role: "Homeowner, Dubai Marina",
    rating: 5,
    text: "Mr Renovate transformed our kitchen beyond our expectations. The vendor matching was perfect — we received 4 quotes within 24 hours and chose an amazing contractor.",
  },
  {
    name: "Ahmed Khan",
    role: "Villa Owner, Arabian Ranches",
    rating: 5,
    text: "Full villa renovation completed on time and within budget. The transparency throughout the process was refreshing. Highly recommend to anyone in Dubai.",
  },
  {
    name: "Lisa Chen",
    role: "Apartment Owner, Downtown",
    rating: 5,
    text: "The before and after of our bathroom is unbelievable. Professional vendors, clear communication, and stunning results. Will use again for our living room.",
  },
  {
    name: "James Morrison",
    role: "Homeowner, Palm Jumeirah",
    rating: 5,
    text: "We renovated our entire ground floor through Mr Renovate. The platform made it incredibly easy to compare vendors and track progress throughout.",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Auto-scroll
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <Quote className="absolute top-12 left-12 w-32 h-32 text-accent/5 rotate-180" />
      <Quote className="absolute bottom-12 right-12 w-24 h-24 text-accent/5" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-body font-semibold text-accent uppercase tracking-widest">Testimonials</span>
          </ScrollReveal>
          <TextReveal
            text="What Our Clients Say"
            as="h2"
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground"
            goldWords={[3, 4]}
            delay={0.2}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-navy-light/50 border border-accent/10 rounded-2xl p-8 md:p-12 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed italic">
                      "{t.text}"
                    </p>
                    <div className="mt-8">
                      <p className="font-display font-bold text-primary-foreground">{t.name}</p>
                      <p className="text-sm font-body text-primary-foreground/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors disabled:opacity-30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors disabled:opacity-30"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
