import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "👩‍💼",
    rating: 5,
    text: "Absolutely brilliant work! The brand identity exceeded all our expectations. Professional, creative, and incredibly easy to work with.",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    image: "👨‍💻",
    rating: 5,
    text: "The attention to detail is remarkable. Every design element was carefully thought out, resulting in a cohesive and stunning visual identity.",
  },
  {
    name: "Emma Williams",
    role: "Founder, Bloom Studio",
    image: "👩‍🎨",
    rating: 5,
    text: "Working with this designer was a dream. Quick turnaround, excellent communication, and designs that truly capture our brand essence.",
  },
  {
    name: "David Park",
    role: "Product Manager",
    image: "👨‍🚀",
    rating: 5,
    text: "The UI designs transformed our app completely. User engagement increased by 40% after the redesign. Highly recommended!",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 md:p-12 relative"
          >
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-4xl mb-6">
                {testimonials[currentIndex].image}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <h4 className="font-display font-semibold text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => navigate("prev")}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 gradient-bg"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate("next")}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
