import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, RefreshCw, Send } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "Understanding your vision, goals, target audience, and project requirements.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "Creating initial concepts and visual directions based on research.",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Refine",
    description: "Iterating based on your feedback until the design is perfect.",
  },
  {
    icon: Send,
    number: "04",
    title: "Deliver",
    description: "Final handoff with all files, formats, and guidelines you need.",
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            How I Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            My <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step Circle */}
                <div className="relative inline-block mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center relative z-10"
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>
                  <div className="absolute -inset-2 rounded-full bg-primary/20 blur-xl" />
                </div>

                {/* Step Number */}
                <div className="text-6xl font-display font-bold text-secondary/50 absolute -top-4 left-1/2 transform -translate-x-1/2">
                  {step.number}
                </div>

                <h3 className="font-display font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
